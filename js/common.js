var w = window.innerWidth;

$(document).ready(function(){
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
            console.log('test width');
            $('.footer .box .cont').addClass('on');
        }else{
            $('.footer .box .cont').removeClass('on');
        }
    }
});

