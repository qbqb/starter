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

        markerImgUrl:'/assets/images/map-marker-sprite.png',
        markerWidth:27,
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

        actions: function(map, markers, infowindow, addMarkers){

            //путь к спрайту, размеры одного маркера в спрайте, background-position, смещение маркера (left, top)
            var icon1 = new google.maps.MarkerImage("/assets/images/map-marker-sprite.png", new google.maps.Size(27, 40), new google.maps.Point(0, 0), new google.maps.Point(14, 40));
            var icon2 = new google.maps.MarkerImage("/assets/images/map-marker-sprite.png", new google.maps.Size(27, 40), new google.maps.Point(28, 0), new google.maps.Point(14, 40));


            var y = markers[0].getPosition().lat()
            var x = markers[0].getPosition().lng()

            var newPlaces = [
                ['1', 60.937266,30.322400],
                ['2', 61.937266,30.322400],
                ['3', 62.937266,30.322400]
            ];

            google.maps.event.addListener(markers[0], 'mouseover', function() {
                if (infowindow.content) return;
                markers[0].setIcon(icon2);
            });
            google.maps.event.addListener(markers[0], 'mouseout', function() {
                if (infowindow.content) return;
                markers[0].setIcon(icon1);
            });
            google.maps.event.addListener(markers[0], 'click', function() {
                 markers[0].setIcon(icon2);
                 map.panTo(new google.maps.LatLng(y,x));
            });

            google.maps.event.addListener(map, 'click', function(){
                infowindow.close();
                infowindow.content = undefined;
                markers[0].setIcon(icon1);
            });

            google.maps.event.addListener(infowindow, 'closeclick', function() {
                infowindow.content = undefined;
                markers[0].setIcon(icon1);
            });

            $('.map-btn').click(function(event) {
                 map.panTo(new google.maps.LatLng(y,x));
                 map.setZoom(17);
                 return false;
            });

            $('.map-btn-2').click(function(event) {
                addMarkers(map, newPlaces);
                map.setZoom(5);
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