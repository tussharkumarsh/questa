import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
declare var $: any;
import 'slick-carousel';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  private fragment: string = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);


    this.route.fragment.subscribe((fragment: any) => {
      this.fragment = fragment;
    });



    this.wheel();

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
          v.src = 'https://www.youtube.com/embed/3O1whHNy2uE?autoplay=0&mute=0&loop=1&color=white&controls=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=3O1whHNy2uE';
        }
      } else {
        v.src = 'https://www.youtube.com/embed/3O1whHNy2uE?autoplay=0&mute=0&loop=1&color=white&controls=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=3O1whHNy2uE';
      }
    };
  }

  ngAfterViewInit(): void {
    setTimeout(() => { //I needed also setTimeout in order to make it work
      try {
        (document.querySelector('#' + this.fragment) as HTMLElement).scrollIntoView();
      } catch (e) {
      }
    });
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
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  };

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
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  };


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
  };


  countIndustry: number = 0;
  countLeaders: number = 0;
  countWorkshops: number = 0;
  heightEl = 0;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    var rect = this.counte.nativeElement.getBoundingClientRect();
    var elemTop = rect.top; var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    isVisible ? this.countIndustry = 10000 : null;
    isVisible ? this.countLeaders = 36 : null;
    isVisible ? this.countWorkshops = 300 : null;
  }
  name = 'Angular';
  @ViewChild('counte')
  counte!: ElementRef;







  enneagramTypes = [
    { number: 1, name: 'Receptive Peacemaker', title: '', description: 'The Enneagram is a comprehensive personality framework that individuals into nine distinct personality types, each.' },
    { number: 2, name: 'Helper', title: '', description: 'The caring, interpersonal type.' },
    { number: 3, name: 'Achiever', title: '', description: 'The success-oriented, pragmatic type.' },
    { number: 4, name: 'Individualist', title: '', description: 'The sensitive, withdrawn type.' },
    { number: 5, name: 'Investigator', title: '', description: 'The intense, cerebral type.' },
    { number: 6, name: 'Loyalist', title: '', description: 'The committed, security-oriented type.' },
    { number: 7, name: 'Enthusiast', title: '', description: 'The busy, fun-loving type.' },
    { number: 8, name: 'Challenger', title: '', description: 'The powerful, dominating type.' },
    { number: 9, name: 'Peacemaker', title: '', description: 'The easygoing, self-effacing type.' },
  ];

  activeType: number = 0;

  showDetail(index: number) {
    this.activeType = index;
  }

  hideDetail() {
    this.activeType = 0;
  }

  toggleDetail(index: number) {
    if (this.activeType === index) {
      this.activeType = 0;
    } else {
      this.activeType = index;
    }
  }






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


  showDiv(Div: any) {
    var x = document.getElementById(Div) as HTMLElement;
    x.style.display = "none";
  }


  BehaviouralEventInterviewScroll() {
    this.router.navigate(['/talent-acquisition'], { fragment: 'behaviouralEventInterview' });
  }

  hipoSuccessuionScroll() {
    this.router.navigate(['/talent-development'], { fragment: 'hipoSussession' });
  }


}












