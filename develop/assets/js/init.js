$(document).ready(function() {

    $('body').stickTheFooter();

    $('input, textarea').placeholder({
        color : '#8f8f8f'
    });

    $(".c-input-phone").inputmask({ mask: "+7[-999][-999999]",
        greedy: false,
        showMaskOnHover: false,
        'clearIncomplete': false,
        clearMaskOnLostFocus: false
    });

    $('.dropdown-on').dropdown();

    $('.fancybox').fancybox();

    $('.c-slider-on').bxSlider();

    $('.c-slider-fade-on').bxSlider({
        mode:'fade'
    });

    $('.c-tabs-on').tabslet({
        animation: true
    });

    $('.toggle-box').toggleBox();

    $('.c-input').focus(function() {
        $(this).removeClass('c-input-error');
        $(this).closest('.c-input-outer').removeClass('c-input-error');
    });

});