import { Component } from '@angular/core';
import { SignUp, cart, login, product } from '../data-type';
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  showLogin: boolean = true;
  authError: string = "";

  constructor(private user: UserService, private product: ProductService) { }

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp(data: SignUp) {
    this.user.userSignUp(data);
  }

  login(data: login) {
    this.user.userLogin(data);
    //desde aquí el userId retorna NULL
    this.user.invalidUserAuth.subscribe((result) => {
      //console.warn(result);
      if (result) {
        this.authError = "No existe usuario con esas credenciales";
      } else {
        // the 'user' item setted in user.service#userLogin function 
        //takes a little bit so its necessary the 0,8sec delay 
        //in order to achieve set the userId in the cart object..
        setTimeout(() => {
          this.localCartToRemoteCart()
        }, 800);

      }
    });
  }

  openSignUp() {
    this.showLogin = false;
  }

  openLogin() {
    this.showLogin = true;
  }

  localCartToRemoteCart() {
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    if (data) {
      let cartDataList: product[] = JSON.parse(data);
      //definir el tipo de index como number
      cartDataList.forEach((product: product, index) => {
        let cartData: cart = {
          ...product,
          userId,
          productId: product.id,
        };

        delete cartData.id;
        setTimeout(() => {
          this.product.addToCart(cartData).subscribe((result) => {
            if (result) {
              console.warn("El item ha sido registrado en la BD");
            }
          })
        }, 500);
        if (cartDataList.length === index + 1) {
          localStorage.removeItem('localCart');
        }
      })
    }
    setTimeout(() => {
      this.product.getCartList(userId);
    }, 2000);
  }
}
