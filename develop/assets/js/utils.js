
// (function($){
//     $.fn.stretch = function ( options ) {
//         var o = $.extend({
//             header   :  $('#header'),
//             content  :  $('#content'),
//             footer   :  $('#footer'),
//             offset   :  0
//         }, options);
//         return this.each(function(event){
//             var windowHeight   =  $(window).outerHeight(true),
//                 headerHeight   =  o.header.outerHeight(true),
//                 footerHeight   =  o.footer.outerHeight(true);

//             function init(){
//                o.content.css('minHeight', o.windowHeight - o.footerHeight - o.headerHeight + o.offset);
//             }
//             $(document).ready(init);
//             $(window).resize(init);
//         });
//     }
// })(jQuery);




// (function($){

//     $.fn.createSwiper = function ( parameters, options ) {

//         var params = $.extend({
//             speed: 500,
//             loop: true,
//             generatePagination: true,
//             pagination: '.swiper-pagination',
//             grabCursor: true,
//             autoplay: 3000,
//             noSwiping: false,
//             noSwipingClass: 'stop-swiping',
//             preventLinks: true,
//             mousewheelControl: false,
//             keyboardControl: false,
//         }, parameters);

//         var o = $.extend({
//             pagination:'.swiper-pagination',
//             prev: '.swiper-prev',
//             next: '.swiper-next'
//         }, options);

//         return this.each(function(){
//             var swiper = $(this).find('.swiper-container').swiper( $.extend({}, params));

//             $(o.prev).click(function(){
//                swiper.swipePrev();
//             });
//             $(o.next).click(function(){
//                swiper.swipeNext();
//             });
//             $(o.pagination+' .swiper-pagination-switch').click(function(){
//                swiper.swipeTo($(this).index());
//             });
//             $(' '+o.pagination+', '+o.prev+', '+o.next ).hover(
//                function(){
//                 swiper.stopAutoplay();
//             }, function(){
//                 swiper.startAutoplay();
//             });

//             $(this).find('.swiper-container').hover(
//                function(){
//                 swiper.stopAutoplay();
//             }, function(){
//                 swiper.startAutoplay();
//             });
//         });
//     }

// })(jQuery);




// (function($){

//   $.fn.dropdown = function(opts){

//     var opts = $.extend({
//       el: '.dropdown',
//       button: '.dropdown-button',
//       menu: '.dropdown-menu',
//       title: '.dropdown-button-title',
//       itemTitle: '.dropdown-menu-title'
//     },opts);

//     return this.each(function(){

//         var $button = $(this).find(opts.button),
//             $item = $(this).find('li');

//         $button.click(function(event){
//             var $menu = $(this).parent().find(opts.menu);
//             if ($menu.hasClass('active')) {
//                  $menu.css('display','none').removeClass('active');
//                 $('body').off('click',hideDropdown);
//             } else {
//                 $menu.css('display','block').addClass('active');
//                 $('body').on('click',hideDropdown);
//             }
//         });

//         $item.click(function(){
//             $(this).closest(opts.menu).css('display','none').removeClass('active');
//             $(this).closest(opts.menu).parent().find(opts.title).html( $(this).find(opts.itemTitle).html() );
//             $(this).closest(opts.el).find('input:hidden').val( $(this).data('value') );
//         });

//         function hideDropdown(e){
//             if( $(e.target).is(opts.el) || $(e.target).is(opts.el+' *')) return;
//             $(opts.menu).css('display','none').removeClass('active');
//             $('body').off('click',hideDropdown);
//         }

//     });
//   };
// })(jQuery);
