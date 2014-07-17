(function($){
    $.fn.stickTheFooter = function ( options ) {
        var o = $.extend({
            header   :  $('#header'),
            content  :  $('#content'),
            footer   :  $('#footer'),
            offset   :  0
        }, options);
        return this.each(function(event){
            var headerHeight   =  o.header.outerHeight(),
                footerHeight   =  o.footer.outerHeight();
            function init(){
               o.content.css('minHeight', $(window).outerHeight() - footerHeight - headerHeight + o.offset);
            }
            init();
            $(window).resize(init);
        });
    }
})(jQuery);



(function($){
    $.fn.createSwiper = function ( parameters, options ) {
        var params = $.extend({
            speed: 500,
            loop: true,
            generatePagination: false,
            grabCursor: true,
            // autoplay: 3000,
            preventLinks: true,
            noSwiping: false,
            noSwipingClass:'stop-swiping',
            mousewheelControl: false,
            keyboardControl: false
        }, parameters);

        var o = $.extend({
            pagination:'.swiper-pagination',
            prev: '.swiper-prev',
            next: '.swiper-next',
            paginationSpeed: params.speed
        }, options);

        return this.each(function(){

            var $el = $(this);

            var swiper = $el.find('.swiper-container').swiper( $.extend({
                onSlideChangeStart: function(activeIndex){
                    $el.find('.swiper-pagination-switch').removeClass('swiper-active-switch');
                    $el.find('.swiper-pagination-switch').eq(swiper.activeLoopIndex).addClass('swiper-active-switch');
                }
            }, params));

            //Prev, Next
            $el.find(o.prev).click(function(){
               swiper.swipePrev();
            });
            $el.find(o.next).click(function(){
               swiper.swipeNext();
            });

            //Generate Pagination
            var i, slidesLength = swiper.slides.length-2;
            for(i=0;i<slidesLength;i++){
                $el.find(o.pagination).append("<span class='swiper-pagination-switch'></span>")
            }
            $el.find(o.pagination).children().eq(0).addClass('swiper-active-switch')
            $el.delegate('.swiper-pagination-switch', 'click', function() {
                swiper.swipeTo($(this).index(), o.paginationSpeed);
                $el.find('.swiper-pagination-switch').removeClass('swiper-active-switch');
                $(this).addClass('swiper-active-switch');
            });

            //Hovers
            $(' '+o.pagination+', '+o.prev+', '+o.next ).hover(
               function(){
                swiper.stopAutoplay();
            }, function(){
                swiper.startAutoplay();
            });
            $(this).find('.swiper-container').hover(
               function(){
                swiper.stopAutoplay();
            }, function(){
                swiper.startAutoplay();
            });

        });
    }
})(jQuery);





(function($){

  $.fn.dropdown = function(opts){

    var opts = $.extend({
      el: '.dropdown',
      button: '.dropdown-button',
      menu: '.dropdown-menu',
      title: '.dropdown-button-title',
      item: '.dropdown-menu-item',
      itemTitle: '.dropdown-menu-title'

    },opts);

    return this.each(function(){

        var $el = $(this),
            $button = $(this).find(opts.button),
            $item = $(this).find(opts.item);

        $button.click(function(event){
            var $menu = $(this).parent().find(opts.menu);
            if ($menu.hasClass('active')) {
                $el.removeClass('active');
                $menu.css('display','none').removeClass('active');
                $('body').off('click',hideDropdown);
            } else {
                $(opts.el).removeClass('active');
                $(opts.el).find(opts.menu).css('display','none').removeClass('active');
                $el.addClass('active');
                $menu.css('display','block').addClass('active');
                $('body').on('click',hideDropdown);
            }
        });

        $item.click(function(){
            $(this).closest(opts.menu).css('display','none').removeClass('active');
            $(this).closest(opts.menu).parent().find(opts.title).html( $(this).find(opts.itemTitle).html() );
            $(this).closest(opts.el).find('input:hidden').val( $(this).data('value') );
            $el.removeClass('active');
        });

        function hideDropdown(e){
            if( $(e.target).is(opts.el) || $(e.target).is(opts.el+' *')) return;
            $(opts.menu).css('display','none').removeClass('active');
            $('body').off('click',hideDropdown);
            $el.removeClass('active');
        }

    });
  };
})(jQuery);



(function($){

    $.fn.createSlideToggle = function ( options ) {

        var o = $.extend({
            buttonOpen:'.toggle-button-open',
            buttonClose:'.toggle-button-close',
            buttonToggle:'.toggle-button',
            toggleContent:'.toggle-item-content',
            speed : 300,
            ease  : 'easeInOutQuad'
        }, options);

        return this.each(function(){

            var $el = $(this),
                $buttonOpen = $el.find(o.buttonOpen),
                $buttonClose = $el.find(o.buttonClose),
                $buttonToggle = $el.find(o.buttonToggle),
                $content = $el.find(o.toggleContent);

                $buttonOpen.click(function(e){
                    if( !$el.hasClass('active') ) {
                        openContent();
                    }
                    e.preventDefault();
                });

                $buttonClose.click(function(e){
                    if( $el.hasClass('active') ) {
                        closeContent();
                    }
                    e.preventDefault();
                });

                $buttonToggle.click(function(e){
                    if( $el.hasClass('active') ){
                        closeContent();
                    } else {
                        openContent();
                    }

                    if( $(this).data('toggle-title-open') != '' &&  $(this).data('toggle-title-close') != '') {
                        if( $el.hasClass('active') ){
                            $(this).html( $(this).data('toggle-title-close') );
                        } else {
                            $(this).html( $(this).data('toggle-title-open') );
                        }
                    }
                    e.preventDefault();
                });

                // Functions
                function openContent(){
                    $el.addClass('active');
                    $content.stop(true,true).slideDown(o.speed, o.ease);
                }
                function closeContent(){
                    $el.removeClass('active');
                    $content.stop(true,true).slideUp(o.speed, o.ease);
                }


        });

    }

})(jQuery);