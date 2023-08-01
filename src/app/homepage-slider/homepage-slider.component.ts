import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage-slider',
  templateUrl: './homepage-slider.component.html',
  styleUrls: ['./homepage-slider.component.scss']
})
export class HomepageSliderComponent {
  images=[{src:'../../assets/pexels-nataliya-vaitkevich-6863332.jpg',name:'',caption:''},
  {src:'../../assets/pexels-pixabay-53621.jpg',name:'',caption:''},
  {src:'../../assets/pexels-expect-best-323705.jpg',name:'',caption:''},
  {src:'../../assets/pexels-anna-nekrashevich-6801648.jpg',name:'',caption:''},
  ]
}
