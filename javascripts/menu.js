$(document).ready(function(){
    
//плавный переход по ссылкам
        
       $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top-69}, 1500);
        return false; 
});

       //липкое меню

        var height = $(window).height();
        var HeaderTop = $('#mainMenu').offset().top;
        $(window).scroll(function(){
            if( $(window).scrollTop() > HeaderTop ) {
                $('#mainMenu').addClass("mainMenuWrap") ;
                $(".mainMenu__item > a").removeClass('mainMenu__item_white') ;
            } 
            else {
               $('#mainMenu').removeClass("mainMenuWrap");
               $(".mainMenu__item > a").addClass('mainMenu__item_white');
            
            }
        });
});