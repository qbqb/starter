(function() {

    var site = {

        parentElement: 'body',

        init: function(){

            site.util.stretchContent({offset:0});

        },

        util: {

            stretchContent: function(params){

                var o = $.extend({
                    header   :  $('#header'),
                    content  :  $('#content'),
                    footer   :  $('#footer'),
                    offset   :  0
                }, params);

                var windowHeight   =  $(window).outerHeight(true),
                    headerHeight   =  o.header.outerHeight(true),
                    footerHeight   =  o.footer.outerHeight(true);

                function init(){
                   o.content.css('minHeight', o.windowHeight - o.footerHeight - o.headerHeight + o.offset);
                }

                $(document).ready(init);
                $(window).resize(init);

            },

            dropdown: function(params){

                var o = $.extend({
                  el: '.dropdown',
                  button: '.dropdown-button',
                  menu: '.dropdown-menu',
                  title: '.dropdown-button-name',
                  itemTitle: '.newmes-dropdown-name'
                },params);

                var $button = $( o.button ),
                    $item = $(o.menu).find('li');

                $button.click(function(){
                    var $menu = $(this).parent().find(o.menu);
                    if ($menu.hasClass('active')) {
                        $menu.css('display','none').removeClass('active');
                        $('body').off('click',hideDropdown);
                    } else {
                        $menu.css('display','block').addClass('active');
                        $('body').on('click',hideDropdown);
                    }
                });

                $item.click(function(){
                    $(this).closest(o.menu).css('display','none').removeClass('active');
                    $(this).closest(o.menu).parent().find(o.title).html( $(this).find(o.itemTitle).html() );
                });

                function hideDropdown(e){
                    if( $(e.target).is(o.el) || $(e.target).is(o.el+' *')) return;
                    $(o.menu).css('display','none').removeClass('active');
                    $('body').off('click',hideDropdown);
                }


            },

            clickBlock: function(params){

                var o = $.extend({
                    parentEl: $(this.parentElement),
                    el: '.clickBlockEl',
                    textIn: 'some text'
                },params);

                o.parentEl.find(o.el).click(function(){
                    console.log(o.textIn);
                });

                // o.parentEl.delegate(o.el, 'click', function(event) {
                //     console.log(o.textIn);
                // });


            }



        }

    };
    site.init();



    site.main = {

        parentElement: '#main',

        init: function(){

            var $p = $(this.parentElement);

            $p.html("<div class='bb'>hello page</div>");

            site.util.clickBlock({
                parentEl:$p,
                el: '.bb',
                textIn: 'another anotherrrrr'
            });

            // site.util.clickBlock();

        },
        util: {}

    }
    site.main.init();












    //.....

    site.page = {
        parentElement: '#page',
        init: function(){
            var $p = $(this.parentElement); // $('#page')
        },
        util: {}
    }
    site.page.init();


}).call(this);



