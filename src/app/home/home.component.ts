import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product, tab } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  popularProducts:undefined | product[];
  trendyProducts:undefined | product[];
  categoryMenu:Array<tab> = [];
  _categoryIndex:number = 0;

  constructor(private product:ProductService, private router:Router) {}

  ngOnInit():void {
    this.product.populateProducts().subscribe((data) => {
      console.warn(data);
      this.popularProducts = data;      
    });
    this.product.trendyProducts().subscribe((data) => {
      this.trendyProducts = data;
    });
    this.initCategoryMenu();
  }

  initCategoryMenu() {
    this.categoryMenu = [
      {
        title: 'GENERAL',
        url: '/',
        isActive: true
      },
      {
        title: 'MUJER',
        url: '/home-tab01',
        isActive: false
      },
      {
        title: 'HOMBRE',
        url: '/home-tab02',
        isActive: false
      },
      {
        title: 'TECNOLOGÍA',
        url: '/home-tab03',
        isActive: false
      },
      {
        title: 'DEPORTE',
        url: '/home-tab04',
        isActive: false
      },
      {
        title: 'HOGAR',
        url: '/home-tab05',
        isActive: false
      },
      {
        title: 'MASCOTAS',
        url: '/home-tab06',
        isActive: false
      },
      {
        title: 'OTROS',
        url: '/home-tab07',
        isActive: false
      },
      {
        title: 'MARKET DIGITAL',
        url: '/home-tab08',
        isActive: false
      }
    ]
  }

  // activate tab (based on URL)
  onPageLoad() {
    this.categoryMenu.forEach(c => c.isActive = false)
    let selectedCategory = this.categoryMenu?.find(x => x.url.includes(this.router.url))

    if(selectedCategory) {
      selectedCategory.isActive = true;
    }
  }

  // 2 change URL when user selects different tab
  selectedTab(url:string) {
    this.router.navigateByUrl(url);
  }

  changeCategoryIndex(index?:number){
    if(index){
      this._categoryIndex = index;
    }
  }

}
