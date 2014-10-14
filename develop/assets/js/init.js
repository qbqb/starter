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

    $('#map_canvas').createMap({
        centerY:59.937266,
        centerX:30.322400,
        zoom:17,

        places: [
            ['Our Office', 59.937266,30.322400]
        ],

        markerImgUrl:'/assets/images/map-marker.png',
        markerWidth:40,
        markerHeight:40,
        markerOffsetX:14,
        markerOffsetY:40,
        animation: google.maps.Animation.DROP,

        styles:[
            {
              "featureType": "water",
              "stylers": [
                { "visibility": "on" },
                { "saturation": 0 },
                { "lightness": -13 }
              ]
            }
        ],

        draggable: IS_MOBILE.any() ? false : true,

        actions: function(map, markers){

            var y = markers[0].getPosition().lat()
            var x = markers[0].getPosition().lng()

            $('.map-btn').click(function(event) {
                 map.panTo(new google.maps.LatLng(y,x));
                 map.setZoom(17);
                 return false;
            });

        }

    });

    $('.datepicker').datetimepicker({
        lang:'ru',
        timepicker:false,
        format:'d.m.Y',
        dayOfWeekStart:1,
        closeOnDateSelect:true,
        scrollInput: false,
        scrollMonth: false,
        onChangeMonth: function(current_time, $input){
            $input.val( current_time.dateFormat('d.m.Y') );
        }
    });

    $(".c-range").ionRangeSlider();

    (function(){

        $('.c-range-double').ionRangeSlider({
            type:'double',
            min:1000,
            max:50000,
            from:10000,
            to:40000,
            step: 1000,
            prefix: "",
            prettify: true,
            onLoad:   function (obj) { setVal(obj); },
            onChange: function (obj) { setVal(obj); }
        });

        function setVal(obj){
            var $outer = obj.input.closest('.c-range-outer-simple'),
                $outputMin = $outer.find('.c-range-output-min'),
                $outputMax = $outer.find('.c-range-output-max');
            $outputMin.val(obj.fromNumber);
            $outputMax.val(obj.toNumber);
        }

    })();

    $('.active-toggle').click(function(){
        $(this).toggleClass('active');
    });




/*_____________End_______________*/ });