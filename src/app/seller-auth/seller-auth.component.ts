import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  showLogin = false;
  authError:string = '';

  constructor(private seller: SellerService,
    private router:Router){}

    ngOnInit():void{
      this.seller.reloadSeller()
    }
  /**
   * 
   * Al @param data se le asigna un tipo custom
   * (SignUp) que antes era object 
   */
  signUp(data:SignUp): void{
    console.warn(data); 
    this.seller.userSignUp(data)
    //.subscribe((result) =>{
      /**
       * La función navigate() se usa para redireccionar
       * a la vista definida por el componente 
       * 'SellerHomeComponent' si hay un resultado presente
       */
      //if(result){
      //  this.router.navigate(['seller-home'])
      //}
    //});
  }

  login(data:SignUp): void{
    this.authError="";
    //console.warn(data); 
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError) =>{
      if(isError){
        this.authError="Correo o contraseña inválido"
      }
    })
  }

  openLogin(){
    this.showLogin=true
  }

  openSignUp(){
    this.showLogin=false
  }

}
