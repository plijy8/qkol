$(document).ready(function(){
    
//плавный переход по ссылкам
        
       $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top-69}, 1500);
        return false; 
});
});