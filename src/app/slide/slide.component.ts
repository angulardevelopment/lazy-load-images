import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  ngOnInit() {
    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    const sliderImages =Array.from(document.querySelectorAll('.slide-in'));

    function checkSlide() {
      sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - (<HTMLImageElement>sliderImage).height / 2;
        // bottom of the image
        const imageBottom = (<HTMLImageElement>sliderImage).offsetTop + (<HTMLImageElement>sliderImage).height;
        const isHalfShown = slideInAt > (<HTMLImageElement>sliderImage).offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', debounce(checkSlide));
  }

}
