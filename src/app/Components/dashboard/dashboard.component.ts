import { Component, OnInit} from '@angular/core';
import $ from 'jquery';
import { window } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  isHeader: boolean = true;
  constructor() { }
  uniqueid:number;
  ngOnInit() {
  
    var mokData = [
      { label: "Getting started", id: '1', img: './assets/Images/home-images/Getting-Started.png' ,description: 'Brakedown of machine' ,syllabus:'https://drive.google.com/open?id=1VeX-hK_PhozriARt0So1kXn79IsMXWN2',standard:'https://drive.google.com/open?id=1U2Da1a-xc8s_6P64yAdyy4FjLyCgafNg',Overview:'https://drive.google.com/open?id=1mc3uQXt_VKaV8ri33_BN6h6mkgb4NEaY'},
      { label: "Shop The Catalog", id: '2', img: './assets/Images/home-images/Shop-the-Catalog.png' ,description: 'Brakedown of machine' ,syllabus:'standard',Overview:''},
      { label: "My Course", id: '3', img: './assets/Images/home-images/MyCourse.png' ,description: 'Brakedown of machine' ,syllabus:'standard',Overview:''},
      { label: "My Labs", id: '4', img: './assets/Images/home-images/MyLabs.png' ,description: 'Brakedown of machine' ,syllabus:'standard',Overview:''},
      { label: "My Certificate", id: '5', img: './assets/Images/home-images/MyCertificates.png' ,description: 'Brakedown of machine' ,syllabus:'standard',Overview:''},
      { label: "My Planner", id: '6', img: './assets/Images/home-images/MyPlanner.png' ,description: 'Brakedown of machine' ,syllabus:'standard',Overview:''},
      ]

   
    
    $.each(mokData, function (i) {
       
    $('.smscards').append('<div class="col-lg-4 col-md-4 col-sm-4 verticalMargin cardColumn col-xs-12 smallCardHeight col'
    +'<div class="cardContainer">'
    + '<div class="flip-card" (click)="toggleFlip()" [@flipState]="flip">'
    +' <div class="flip-card-inner inner0">'
    +' <div class="card-front">'
    +' <div class="main-cards">'
    +'<img src="'+mokData[i].img+'" alt="Alternate Text">'
    +'</div>'
    +'<div class="text-cards">'
    +'<p class="text-cards-p">'+mokData[i].label+'</p>'
    +'</div>'
    +'</div>'
    +'<div class="card-back">'
    +'<p class="card-back-p"></p>'
    +'<div class="bottom-bred-crum">'
    +'<div class="bottom-btns">'
    +'<div class="bred-curm">'
    +'<li><a href="' + mokData[i].syllabus +'" target="_blank"><div class="class="Syllabus"" style="width: 100%">Syllabus</div></a></li>' 
    + '<li><a href="' + mokData[i].standard +'" target="_blank"><div class="Standards" style="width: 100%">Standards</div></a></li>' 
    + '<li><a href="' + mokData[i].Overview +'" target="_blank"><div class="Overview" style="width: 100%">Overview </div></a></li>'
    +'</div>'
    +' </div>'
    +' </div>'                                               
    +'</div>'
    +' </div>'
    +' </div>'  
    + '</div>'
    +'</div>');
    
    });
    
    
    $('.flip-card').on('click', function (e) {
      var uniqueid=mokData[2].id;
      let className = uniqueid;
      console.log(className)
      if (className != 'Syllabus' && className != 'Standards' && className != 'Overview' && className != 'buy-btn') {
        if ($('className').find('inner0').hasClass('flip180')) {
          $('className').find('inner0').removeClass('flip180');
        }
        else {
          $('className').find('inner0').addClass('flip180');
        }
      }
    });
    


    setTimeout(function () {
      $('.main .content').addClass('open');
    }, 100)
 

  
  }
 
  
}
