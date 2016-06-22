$(document).ready(function(){
    
    var menu_selector = "#mainMenu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 

    var touch = $('#touch-menu');   //мобильное меню
    var menu = $('.mainMenu');      //обычное меню
    var width = $(window).width();  //ширина окна браузера
    var first = true;



//===== плавный переход по ссылкам =====//
        
    $('a[href^="#"]').click(function(e){

        if($(this).attr('href')=="#img" || $(this).attr('href')=="#img1"){
            return;
        }
        //$(document).off("scroll");
        $(menu_selector + " a.mainMenu__item_active").removeClass("mainMenu__item_active");
        $(this).addClass("mainMenu__item_active");
        
        var el = $(this).attr('href');
        if(width>787)                                       //Смещение для обычного меню
        {
            $('html, body').animate({
            scrollTop: $(el).offset().top-64}, 1500); 
        }
        else{
            $('html, body').animate({
            scrollTop: $(el).offset().top}, 1500);
        }
        return false; 
    });


/*===== мобильное меню =====*/

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
        if(first){
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

    //===== активное меню =====//

    var height = $(window).height();
    var HeaderTop = $('#mainMenu').offset().top;


    $(window).scroll(function(){
        
        var $sections = $('.sec');
        $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('a.mainMenu__item_active').removeClass('mainMenu__item_active');
            $('a[href="#'+id+'"]').addClass('mainMenu__item_active');
            }
        })
        
    //===== липкое меню =====//

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