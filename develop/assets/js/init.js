$(function(){

    $('input, textarea').placeholder({
        color : '#a9a9a9'
    });

    //$('body').stickTheFooter();

    //$('.fancybox').fancybox();

    //$('.dropdown').dropdown();



    // $('a').pjax('#content');




    // (function(){

    //     var timer1, timer2;

    //     $('a').click(function(e){

    //         e.preventDefault();

    //         if( $(this).hasClass('current') ) return;

    //         clearTimeout(timer1);
    //         clearTimeout(timer2);

    //         var href = $(this).attr('href');

    //         $('a').removeClass('current');
    //         $(this).addClass('current');

    //         $('#content').stop().fadeOut(400, 'easeInOutQuad');

    //         $.pjax({
    //           url: href,
    //           container: '#pjax-hidden',
    //            success: function(data){

    //                 timer1 = setTimeout(function(){
    //                     $('#content').html(data);



    //                 },410);

    //                 timer2 = setTimeout(function(){

    //                      $('#content').stop().fadeIn(400, 'easeInOutQuad',function(){
    //                         $('#pjax-hidden').html('');


    //                      });
    //                 },700);
    //            }

    //         });



    //     });


    // })();






});



