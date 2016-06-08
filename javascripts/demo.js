$(document).ready(function(){
    

    var show = true;
    var countbox = ".countsWrap";
    $(window).on("scroll load resize", function(){

        if(!show) return false;  
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        var h = w_height - e_height/2;
        if(w_top +h>= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
         
           $('#fun-level1').animateNumber(
              {
                number: 200,
                'font-size': '50px',
                numberStep: function(now, tween) {
                  var floored_number = Math.floor(now),
                      target = $(tween.elem);

                  target.text(floored_number);
                }
              },
              1800
            );

            $('#fun-level2').animateNumber(
              {
                number: 15,
                'font-size': '50px',
                numberStep: function(now, tween) {
                  var floored_number = Math.floor(now),
                      target = $(tween.elem);

                  target.text(floored_number);
                }
              },
              1800
            );

            $('#fun-level3').animateNumber(
              {
                number: 100,
                'font-size': '50px',
                numberStep: function(now, tween) {
                  var floored_number = Math.floor(now),
                      target = $(tween.elem);

                  target.text(floored_number + ' %');
                }
              },
              1800
            ); 
            show = false;
        }
    });


  

    //липкое меню

        var height = $(window).height();
        var HeaderTop = $('#header').offset().top;
        $(window).scroll(function(){
            if( $(window).scrollTop() > HeaderTop ) {
                $('#header').css({position: 'fixed',top:'0px'});  
            } 
            else {
                $('#header').css({position: 'static'});
            
            }
        });

});
