import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slides = [
    {img: "../../assets/logos/zelo.png"}

  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "pauseOnHover": true,
    "infinite": true,
    "responsive": [
      {
       "breakpoint": 992,
       "settings": {
        "arrows": true,
        "infinite": true,
        "slidesToShow": 2,
        "slidesToScroll": 2
       }
      },
      {
        "breakpoint": 768,
        "settings": {
         "arrows": true,
         "infinite": true,
         "slidesToShow": 1,
         "slidesToScroll": 1
      }
    }
    ]
  };

}
