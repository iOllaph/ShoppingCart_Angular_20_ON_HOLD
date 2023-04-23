import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  images = [
    {
      url: "../assets/lighting/lighting-1.jpg",
      id: 1
    },
    {
      url: "../assets/lighting/lighting-2.jpg",
      id: 2
    },
    {
      url: "../assets/lighting/lighting-3.jpg",
      id: 3
    }
  ];

  value: number = 0
  currentIndex = 0;

  constructor() { };

  ngOnInit(): void { }

  prevImage() {

    if (this.currentIndex === 0) {

      this.currentIndex = this.images.length - 1

    } else {

      this.currentIndex--;

    }



  }

  nextImage() {

    if (this.currentIndex === this.images.length - 1) {

      this.currentIndex = 0

    } else {

      this.currentIndex++;

    }

  }

  setImage(index: number) {

    if (index == 1) {

      this.currentIndex = 0;

    } else if (index == 2) {

      this.currentIndex = 1;

    } else if (index == 3) {

      this.currentIndex = 2;

    }


  }


  checkActive(index: number) {

    if (this.currentIndex == 0 && index == 1) {

      return true;

    } else if (this.currentIndex == 1 && index == 2) {

      return true;

    } else if (this.currentIndex == 2 && index == 3) {

      return true;

    }

  }

  increment() {
    this.value++;
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
    }
  }



}
