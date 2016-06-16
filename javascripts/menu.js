$(document).ready(function(){
    
var touch = $('#touch-menu');
       var menu = $('.mainMenu');
       var width = $(window).width();
        var first = true;



//плавный переход по ссылкам
        
       $('a[href^="#"]').click(function(){
        
        if($(this).attr('href')=="#img" || $(this).attr('href')=="#img1"){
            return;
        }
        var el = $(this).attr('href');
        if(width>787)
        {
            $('html, body').animate({
            scrollTop: $(el).offset().top-69}, 1500);    
        }
        else{
            $('html, body').animate({
            scrollTop: $(el).offset().top}, 1500);
        }
        return false; 

});



            $(touch).on('click', function(e) {
                e.preventDefault();
                menu.slideToggle();
                if(first)
                {
                    touch.addClass("activeMenu");
                    first = false;    
                }
                else{
                    touch.removeClass("activeMenu");
                    first = true; 
                }
                
            });
            $(window).resize(function(){
                var wid = $(window).width();
                if(wid > 787 && menu.is(':hidden')) {
                    menu.removeAttr('style');
                }
        });

       //липкое меню

        var height = $(window).height();
        var HeaderTop = $('#mainMenu').offset().top;

        $(window).scroll(function(){
            if( $(window).scrollTop() > HeaderTop ) {
                $('#mainMenu').addClass("mainMenuWrap") ;
                if(width>787){
                    $(".mainMenu__item > a").removeClass('mainMenu__item_white') ;    
                }
            } 
            else {
               $('#mainMenu').removeClass("mainMenuWrap");
               if(width>787){
                    $(".mainMenu__item > a").addClass('mainMenu__item_white'); 
               }
                          
            }
            if( ($(window).scrollTop() ) > HeaderTop ) {
                $('.topLink').css({visibility: 'visible'}); 
            } 
            else {
                $('.topLink').css({visibility: 'hidden'});
            }
        });
});