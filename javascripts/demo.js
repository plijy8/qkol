$(document).ready(function(){
    
/*===== Анимированные цифры =====*/


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
                number: 2000,
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

/*===== Прелоадер =====*/

var hellopreloader = document.getElementById("hellopreloader_preload");

function fadeOutnojquery(el){
    el.style.opacity = 1;
    var interhellopreloader = setInterval(function(){
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <=0.05){ 
            clearInterval(interhellopreloader);
            hellopreloader.style.display = "none";
        }
    },16);
}

window.onload = function(){
    setTimeout(function(){
        fadeOutnojquery(hellopreloader);
    },500);};

});
