import { Component, OnInit } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class CarouselComponent implements OnInit {
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 1
  //     },
  //     740: {
  //       items: 1
  //     },
  //     940: {
  //       items: 1
  //     }
  //   },
  //   nav: true
  // }
  slidesStore = [{id:'a',
    src: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    alt: 'dcsd',
    title: 'cds'}, {id:'b',
    src: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
    alt: 'dcsd',
    title: 'cds'}];

  constructor() { }

  ngOnInit(): void {
  }

}
