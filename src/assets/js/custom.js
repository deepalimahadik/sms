
$(document).ready(function(){
    "use strict";
    $('.main .content').addClass('open');
    $('.navbar-toggle').on('click', function(){
        var menus = document.querySelector('.main nav');
        if($('.main nav').hasClass('nav-index')){
            menus.style.animationName = "animationFadeOut";
            menus.style.animationDuration = "1s";
            menus.style.animationFillMode = "backwards";
            setTimeout(function () {
                $('.main nav').removeClass('nav-index'); 
            }, 1000)
        }
        else{
            $('.main nav').addClass('nav-index'); 
            menus.style.animationName = "animationFadeIn";
            menus.style.animationDuration = "1s";
            menus.style.animationFillMode = "both";
        }
    });

    $(window).scroll(function(){
        var sc = $(window).scrollTop();
        if( sc > 100){
            $('#header').addClass('sticky');
        }
        else{
            $('#header').removeClass('sticky');
        }
    });

})


// var hamBtn = document.querySelector('.menu-span');
// var menus = document.querySelector('.menus');
// hamBtn.onclick = function () {
//     if (menus.style.display == 'block') {
//         menus.style.animationName = "animationFadeOut";
//         menus.style.animationDuration = "1s";
//         menus.style.animationFillMode = "backwards";
//         setTimeout(function () {
//             menus.style.display = 'none';
//         }, 1000)
//     }
//     else {
//         menus.style.display = 'block';
//         menus.style.animationName = "animationFadeIn";
//         menus.style.animationDuration = "1s";
//         menus.style.animationFillMode = "both";

//     }
// }