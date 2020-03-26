import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    "use strict";
    $(document).scroll(function () {
      var totalScroll = $(document).scrollTop();

      if (totalScroll >= 200) {
        $('[data-click=scroll-top]').addClass('in');
      } else {
        $('[data-click=scroll-top]').removeClass('in');
      }
    });

    $('[data-click=scroll-top]').click(function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $("body").offset().top
      }, 500);
    });
  }

}
