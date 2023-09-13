import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarroselComponent  {

  slides = [
    {img: "../../assets/logos/mrv.png", title: 'Slide 1' },
    {img: "../../assets/logos/tangerino.png", title: 'Slide 1' },
    {img: "../../assets/logos/unimed.png", title: 'Slide 1' },
    {img: "../../assets/logos/zelo.png", title: 'Slide 1' },
    {img: "../../assets/logos//frame.png", title: 'Slide 1' }

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
