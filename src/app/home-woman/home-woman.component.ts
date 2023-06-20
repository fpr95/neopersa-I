import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-home-woman',
  templateUrl: './home-woman.component.html',
  styleUrls: ['./home-woman.component.css']
})
export class HomeWomanComponent {

  slides = [
    {img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe1%2Fc0%2F9d%2Fe1c09d57a0aa792e014fa658a17295a0.jpg&f=1&nofb=1&ipt=b7ffb9f45a6c74f83461a21c56f52cb6a1966501fdd5b2722010f5354ed30c91&ipo=images"},
    {img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Ffashion-tryp-3-1588168923.jpg&f=1&nofb=1&ipt=7d9f5eb7861164ec3afec00da41b414985db96890a0e34d300bd5d73d12d5b23&ipo=images"},
    {img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2Fblack-women-model-glasses-jacket-fashion-leather-spring-clothing-photo-shoot-formal-wear-60069.jpg&f=1&nofb=1&ipt=2086b3e15eda76109ddbdcc4560795409f276dda2853a55c9c117098e8f8db19&ipo=images"},
    {img: "/assets/img/carousel_6.png"}
  ]

  slideConfigInit = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2500,
    "arrows": false,
    "dots": true,
    "fade": true
  }

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "autoplay": true,
    "autoplaySpeed": 5000,
    //"infinite": true
    //"nextArrow": '<i-bs name="arrow-right-circle next_arrow" width="75" height="75" aria-label="Next" type="button"></i-bs>'
  }

  constructor(){
    //Aos.init();
  }

  ngOnInit(): void {
    Aos.init();
  }
}
