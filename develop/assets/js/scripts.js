;(function( $, window, undefined ) {

    /*!
    * jQuery stickTheFooter plugin
    *
    * Copyright (c) 2014
    *
    * @version 1.0.0
    */
    jQuery.fn.stickTheFooter = function ( options ) {
        var o = $.extend({
            header   :  $('.pageheader'),
            content  :  $('#content'),
            footer   :  $('.footer-outer'),
            offset   :  0
        }, options);
        return this.each(function(event){
            var headerHeight   =  o.header.eq(0).height(),
                footerHeight   =  o.footer.eq(0).height();
            function init(){
               o.content.css('minHeight', $(window).height() - footerHeight - headerHeight + o.offset);
            }
            init();
            $(window).resize(init);
        });
    }


    /*!
    * jQuery dropdown plugin
    *
    * Copyright (c) 2014
    *
    * @version 1.0.0
    */
    jQuery.fn.dropdown = function ( options ) {

        var defaults = {
            button: '.dropdown-button',
            menu: '.dropdown-menu',
            buttonTitle: '.dropdown-button-title',
            item: '.dropdown-menu-item',
            itemTitle: '.dropdown-menu-title',
            inputHidden: '.dropdown-hidden',
            active:'active',
            dataAttr:'value'
        }

        var o = $.extend(defaults, options);

        var $el = $(this);

        $(document.body).on('click', $el.selector+" "+o.button, function(e){

            var $dropdown = $(this).closest($el.selector);
            var $menu  = $dropdown.find(o.menu);

            if ( !$dropdown.hasClass(o.active) ) {

                $($el.selector).removeClass(o.active);
                $($el.selector).find(o.menu).hide();
                $dropdown.addClass(o.active);
                $menu.show();
                $(window).on('click', hideDropdown);

            } else {

                $dropdown.removeClass(o.active);
                $menu.hide();
                $(window).off('click', hideDropdown);

            }

            e.preventDefault();


        });

        $(document.body).on('click', $el.selector+" "+o.item, function(e){
            var $dropdown = $(this).closest($el.selector);
            var $menu  = $dropdown.find(o.menu);
            var $buttonTitle = $dropdown.find(o.buttonTitle);
            var $inputHidden = $dropdown.find(o.inputHidden);

            $menu.hide();
            $buttonTitle.html( $(this).find(o.itemTitle).html() );
            $inputHidden.val( $(this).data(o.dataAttr) );
            $dropdown.removeClass(o.active);
            $dropdown.addClass('dropdown-changed');

            e.preventDefault();
        });

        function hideDropdown(e){
            if( $(e.target).is( $el.selector ) || $(e.target).is($el.selector + ' *')) return;
            $(o.menu).hide();
            $(window).off('click', hideDropdown);
            $( $el.selector ).removeClass(o.active);
        }

        return this.each(function(){

            $(this).data("dropdownOptions", o);
            $(this).data("dropdownButtonTitle", $(this).find(o.buttonTitle).html() );
            $buttonTitle = $(this).find(o.buttonTitle);
            $inputHidden = $(this).find(o.inputHidden);
            if( $inputHidden.val() ){
                $item = $(this).find(o.item).filter("[data-"+o.dataAttr+" = "+$inputHidden.val()+" ]");
                $buttonTitle.html( $item.html() )
            }


        });

    }





    /*!
    * jQuery fancyConfirm plugin
    *
    * Copyright (c) 2014
    *
    * @version 1.0.0
    */
    $.fn.fancyConfirm = function ( options ) {

        var defaults = {
            msg:"Are you sure?",
            content: "<div class='dialog-confirm'> <div class='dialog-confirm-mes'> {msg} </div> <div class='dialog-confirm-sub'> <input id='fancyconfirm_cancel' type='button' class='custom-button custom-button-gray' value='Отмена'> <input id='fancyConfirm_ok' type='button' class='custom-button' value='Удалить'> </div> </div>",
            success:function(){},
            cancel:function(){},
            beforeSuccess:function(){ return true; },
            beforeCancel:function(){},
            beforeShow:function(){},
            afterShow:function(){},
            afterClose:function(){}
        }

        var o = $.extend(defaults, options);

        $(document.body).on('click', $(this).selector, function(e){

            var $el = $(this);

            $.fancybox({
                'modal' : true,
                'content': o.content.replace("{msg}",o.msg),
                afterShow: function(){
                    o.afterShow($el);
                },
                beforeShow: function(){
                    o.beforeShow($el);
                    $("#fancyConfirm_ok").click(function() {
                        if( o.beforeSuccess($el) ) {
                            o.success($el);
                            $.fancybox.close();
                        }
                    });
                    $("#fancyconfirm_cancel").click(function() {
                        o.beforeCancel($el);
                        $.fancybox.close($el);
                        o.cancel($el);
                    });
                },
                afterClose:function(){
                    o.afterClose($el);
                }
            });
            e.preventDefault();
            e.stopPropagation();
        });

    }


    /*!
    * jQuery toggleBox plugin
    *
    * Copyright (c) 2014
    *
    * @version 1.0.0
    */
    $.fn.toggleBox = function( options ){

        var defaults = {
           buttonOpen:'.toggle-button-open',
           buttonClose:'.toggle-button-close',
           buttonToggle:'.toggle-button',
           buttonTitle:'.toggle-button-title',
           toggleContent:'.toggle-box-content',
           speed : 400,
           ease  : 'easeInOutQuad',
           beforeOpen:function(){},
           afterOpen: function(){},
           afterClose:function(){}
        }

        var o = $.extend(defaults, options);

        o.el = $(this).selector;

        function open(el, content){
            o.beforeOpen(el);
            el.addClass('active');
            content.stop(true,true).slideDown(o.speed, o.ease, function(){
                o.afterOpen(el);
            });

        }

        function close(el, content){
            el.removeClass('active');
            content.stop(true,true).slideUp(o.speed, o.ease, function(){
                o.afterClose(el);
            });
        }


        $(document.body).on('click', o.el+" "+o.buttonOpen, function(e){
            $box = $(this).closest(o.el),
            $content = $box.find(o.toggleContent);

            if( !$box.hasClass('active') ) {
                open($box, $content);
            }
            e.preventDefault();
        });

        $(document.body).on('click', o.el+" "+o.buttonClose, function(e){
            $box = $(this).closest(o.el),
            $content = $box.find(o.toggleContent);
            if( $box.hasClass('active') ) {
                close($box, $content);
            }
            e.preventDefault();
        });

        $(document.body).on('click', o.el+" "+o.buttonToggle, function(e){

            var $box = $(this).closest(o.el);
            var $content = $box.find(o.toggleContent);

            if( $box.hasClass('active') ){
                close($box, $content);

            } else {
                open($box, $content);

            }

            if( $(this).data('toggle-title-open') != '' &&  $(this).data('toggle-title-close') != '') {
                if( $box.hasClass('active') ){
                    $(this).html( $(this).data('toggle-title-close') );
                } else {
                    $(this).html( $(this).data('toggle-title-open') );
                }
            }
            e.preventDefault();


        });

    }







})(jQuery, window);



/*
*
*
*
* Helpers
*
*
*
*/








/*
*
*
*
* Initialization
*
*
*
*/

$(document).ready(function() {


    $('body').stickTheFooter({offset:-20});

    $('input, textarea').placeholder({
        color : '#8f8f8f'
    });

    //$('.dropdown').dropdown();

    //$('.fancybox').fancybox();





});