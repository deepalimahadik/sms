import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-catelog',
  templateUrl: './catelog.component.html',
  styleUrls: ['./catelog.component.less']
})
export class CatelogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    "use strict";
    $('.mCard0').on('click', function (e) {
      let className = e.target.className;
      if (className != 'Syllabus' && className != 'Standards' && className != 'Overview' && className != 'buy-btn') {
        if ($('.inner0').hasClass('flip180')) {
          $('.inner0').removeClass('flip180');
        }
        else {
          $('.inner0').addClass('flip180');
        }
      }
    });
  }

}
