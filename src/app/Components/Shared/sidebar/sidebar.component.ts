import { Component, OnInit } from '@angular/core';
import { Router, RouterModule }   from '@angular/router';
import $ from 'jquery';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  constructor(private _router:Router) { }

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

    $('nav ul li a').click(function () {
      setTimeout(function () {
        $('.main .content').addClass('open');
      }, 100)
    });
  }

}
