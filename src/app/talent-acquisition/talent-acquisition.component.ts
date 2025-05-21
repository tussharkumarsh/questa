import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import * as AOS from 'aos';
declare var $: any
import 'slick-carousel';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-talent-acquisition',
  templateUrl: './talent-acquisition.component.html',
  styleUrls: ['./talent-acquisition.component.scss']
})
export class TalentAcquisitionComponent implements OnInit {

  private fragment: string = '';
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {

    window.scrollTo(0, 0)

    this.route.fragment.subscribe((fragment:any) => {
      this.fragment = fragment;
    });


    this.onScrollFunction()

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

  ngAfterViewInit(): void {
    setTimeout(() => { //I needed also setTimeout in order to make it work
      try {
        (document.querySelector('#' + this.fragment) as HTMLElement).scrollIntoView();
      } catch (e) {
      }
    });
  }

  onScrollFunction(){
    window.onscroll = function () {
      var dv = document.getElementById('video-box1') as HTMLElement;
      var v = document.getElementById('i_video-1') as HTMLIFrameElement;
      if ((window.scrollY < (dv.offsetTop + dv.offsetHeight)) && ((window.scrollY + window.outerHeight) > dv.offsetTop)) {
        if (v.src == '' || v.src == location.href) {
          v.src = 'https://www.youtube.com/embed/2Gg6Seob5Mg?autoplay=1&mute=0&loop=1&color=white&controls=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=2Gg6Seob5Mg';
        }
      } else {
        v.src = 'https://www.youtube.com/embed/2Gg6Seob5Mg?autoplay=1&mute=0&loop=1&color=white&controls=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=2Gg6Seob5Mg';
      }
    }
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



  countIndustry: number = 0;
  countLeaders: number = 0;
  countWorkshops: number = 0;
  heightEl = 0;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    var rect = this.counte.nativeElement.getBoundingClientRect();
    var elemTop = rect.top; var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    isVisible ? this.countIndustry = 10 : null
    isVisible ? this.countLeaders = 3 : null
    isVisible ? this.countWorkshops = 300 : null
  }
  name = 'Angular';
  @ViewChild('counte')
  counte!: ElementRef;
}
