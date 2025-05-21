import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
declare var $: any
import 'slick-carousel';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-talent-development',
  templateUrl: './talent-development.component.html',
  styleUrls: ['./talent-development.component.scss']
})
export class TalentDevelopmentComponent implements OnInit {

  private fragment: string = '';
  constructor(private route: ActivatedRoute) { }
 

  ngOnInit(): void {

    window.scrollTo(0, 0)

    this.route.fragment.subscribe((fragment:any) => {
      this.fragment = fragment;
    });



    this.wheel()

    AOS.refresh();//refresh method
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });
    window.addEventListener('load', AOS.refresh);


  }

  customOptionsDiscoverWorkshops: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    center: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000, // Adjust this value as needed, represents time in milliseconds
    autoplayHoverPause: true,
    navSpeed: 200,
    navText: ['<i class=\'fa-chevron-left\'></i>', '<i class=\'fa-chevron-right\'></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  customOptionsTestimonials: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000, // Adjust this value as needed, represents time in milliseconds
    autoplayHoverPause: true,
    navSpeed: 200,
    navText: ['<i class=\'fa-chevron-left\'></i>', '<i class=\'fa-chevron-right\'></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }


  customOptionsBannerTab: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000, // Adjust this value as needed, represents time in milliseconds
    autoplayHoverPause: true,
    navSpeed: 200,
    navText: ['<i class=\'fa-chevron-left\'></i>', '<i class=\'fa-chevron-right\'></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000, // Adjust this value as needed, represents time in milliseconds
    autoplayHoverPause: true,
    navSpeed: 200,
    navText: ['<i class=\'fa-chevron-left\'></i>', '<i class=\'fa-chevron-right\'></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }


  customOptionsLandingPage: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000, // Adjust this value as needed, represents time in milliseconds
    autoplayHoverPause: true,
    navSpeed: 200,
    navText: ['<i class=\'fa-chevron-left\'></i>', '<i class=\'fa-chevron-right\'></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


  slides = [1, 2, 3, 4, 5]; // Add your slide data here

  ngAfterViewInit() {
    $('.slider').slick({
      vertical: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 300
    });


    setTimeout(() => { //I needed also setTimeout in order to make it work
      try {
        (document.querySelector('#' + this.fragment) as HTMLElement).scrollIntoView();
      } catch (e) {
      }
    });
  }

  ngOnDestroy() {
    $('.slider').slick('unslick');
  }


  countWorkshops: number = 0;
  heightEl = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    var rect = this.counte.nativeElement.getBoundingClientRect();
    var elemTop = rect.top; var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    isVisible ? this.countWorkshops = 300 : null
  }
  name = 'Angular';
  @ViewChild('counte')
  counte!: ElementRef;



  wheel() {
    const anchors = document.querySelectorAll('.types-container li a');
    const textDivs = document.querySelectorAll('.type-text > div');

    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      anchor.addEventListener('click', function () {
        for (let j = 0; j < textDivs.length; j++) {
          const textDiv = textDivs[j];
          const isTextDivVisible = textDiv.classList.contains(`type-${i + 1}-text`);

          // Toggle for text divs
          textDiv.classList.toggle('d-none', !isTextDivVisible);

          // Toggle for images
          const imageId = `type-img-${j + 1}`;
          const image = document.getElementById(imageId);

          if (image) {
            const isImageVisible = (j + 1) === (i + 1);
            image.classList.toggle('d-none', !isImageVisible);
          }
        }
      });
    }

  }

}


