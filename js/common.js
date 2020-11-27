var w = window.innerWidth;

$(document).ready(function(){
    var swiper = new Swiper('.swiper-container',{
        speed:400,
        parallax: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            prevEl: '.swiper-button-next',
            nextEl: '.swiper-button-prev',
        }
    });
    $('.header .block .icon').click(function(){ 
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('.header .menu').removeClass('on');
        }else{
            $(this).addClass('on');
            $('.header .menu').addClass('on');
        } 
    });
    $('.footer .box .title').click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(this).siblings('.cont').slideToggle().removeClass('on');
        }else{
            $(this).addClass('on');
            $(this).siblings('.cont').slideToggle().addClass('on');
        }
    });
    if(w >= 750){
        if($('.footer .box .cont').css('display') == "none"){
            $('.footer .box .cont').addClass('on');
        }else{
            $('.footer .box .cont').removeClass('on');
        }
    }
});


