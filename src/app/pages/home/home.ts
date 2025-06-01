import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register as registerSwiperElements } from 'swiper/element/bundle';

registerSwiperElements();

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home {

}
