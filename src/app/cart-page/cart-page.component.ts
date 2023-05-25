import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart, priceSummary } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cartData: cart[] | undefined;
  priceSummary: priceSummary = {
    price: 0,
    discount: 0,
    iva: 0,
    delivery: 0,
    total: 0
  }

  constructor(private product: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.loadDetails()
  }

  //OName removeToCart()
  removeFromCart(cartId:number | undefined){
    cartId && this.cartData && this.product.removeCartItem(cartId)
      .subscribe((result) => {
        //let user = localStorage.getItem('user');
        //let userId = user && JSON.parse(user).id;
        //this.product.getCartList(userId);
        this.loadDetails();
      });
  }

  loadDetails(){
    this.product.currentCart().subscribe((result) => {
      this.cartData = result;
      let price = 0;
      result.forEach((item) => {
        if(item.quantity){
          price = price + (+item.price* +item.quantity);
        }
      });
      this.priceSummary.price = price;
      this.priceSummary.discount = price/5;
      this.priceSummary.iva = price/20;
      this.priceSummary.delivery = 5000;
      this.priceSummary.total = price + (price/20) + 5000 - (price/5);
      
      if(!this.cartData.length){
        this.router.navigate(['/']);
      }
    });
  }

  checkout(){
    this.router.navigate(['/checkout']);
  }

}
