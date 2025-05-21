import { Component, HostListener, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 20) {
          $(".menu").css({ "background-color": "#fffffff2" });
        } else {
          $(".menu").css({ "background-color": "transparent" });
        }
      })
    })

  }


}
