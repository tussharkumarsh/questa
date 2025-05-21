import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
declare var $: any
import 'slick-carousel';



@Component({
  selector: 'app-talent-reimagined',
  templateUrl: './talent-reimagined.component.html',
  styleUrls: ['./talent-reimagined.component.scss']
})
export class TalentReimaginedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    window.scrollTo(0, 0)
    
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


    window.onscroll = function () {
      var dv = document.getElementById('video-box') as HTMLElement;
      var v = document.getElementById('i_video') as HTMLIFrameElement;
      if ((window.scrollY < (dv.offsetTop + dv.offsetHeight)) && ((window.scrollY + window.outerHeight) > dv.offsetTop)) {
        if (v.src == '' || v.src == location.href) {
          v.src = 'https://www.youtube.com/embed/m4D0_Dfo2Jo?autoplay=0&mute=0&loop=1&color=white&controls=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=m4D0_Dfo2Jo';
        }
      } else {
        v.src = 'https://www.youtube.com/embed/m4D0_Dfo2Jo?autoplay=0&mute=0&loop=1&color=white&controls=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=m4D0_Dfo2Jo';
      }
    }
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



  show = false;
  data = {
    note: 'At Questa, our philosophy revolves around empowering individuals to ignite transformative change in both their professional and personal spheres. We believe in catalyzing a deliberate shift from reluctance to a state of profound understanding. Starting with awareness where we illuminate strengths, challenges, and  gaps. This journey then leads to the pivotal step of acceptance—an empowering process where individuals and organizations bravely acknowledge their imperfections, recognize need for change, and triumphantly overcome resistance or denial to embrace their true selves. Finally, action takes center stage, where we translate insights into tangible results through the implementation of strategic initiatives and transformative endeavors. The Questa Philosophy propels individuals and organizations toward a future defined by boundless possibility and unparalleled success all culminating in remarkable growth.',
  };
}


