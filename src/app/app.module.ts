import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { 
  house, 
  cart2, 
  personCircle, 
  search, 
  caretRight, 
  record2Fill, 
  facebook, 
  instagram, 
  twitter, 
  pinterest,
  cartPlus,
  cartDash,
  star,
  dot,
  bookmarkHeart } from 'ngx-bootstrap-icons';
import { CategoryTabsComponent } from './category-tabs/category-tabs.component';
import { HomeWomanComponent } from './home-woman/home-woman.component';
import { HomeManComponent } from './home-man/home-man.component';


const icons = {
  house,
  cart2,
  personCircle,
  search,
  caretRight,
  record2Fill,
  facebook,
  instagram,
  twitter,
  pinterest,
  cartPlus,
  cartDash,
  star,
  dot,
  bookmarkHeart
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    SellerUpdateProductComponent,
    SearchComponent,
    FooterComponent,
    ProductDetailsComponent,
    UserAuthComponent,
    CartPageComponent,
    CheckoutComponent,
    MyOrdersComponent,
    CategoryTabsComponent,
    HomeWomanComponent,
    HomeManComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxBootstrapIconsModule.pick(icons),
    BsDropdownModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
