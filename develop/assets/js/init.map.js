$(document).ready(function(){

    if( !$("#map")[0] ) return;

    var map;

    var places = [
        ['Place 1',59.937266,30.321184],
        ['Place 2',43.6188428,39.7372841]
    ];

    var cm_mapMarkers = [];

    function initialize() {

       var styles = [];

       var styledMap = new google.maps.StyledMapType(styles,
         {name: "Styled Map"});

       // Задаем опции начального положения карты
       // Зум и кординаты можно скопировать из адресной строки браузера
       //@52.067761,41.3634605,4z?hl=ru
       var mapOptions = {
         zoom: 4, //Зум
         scrollwheel: false,
         //draggable: IS_MOBILE.any() ? false : true,
         center: new google.maps.LatLng(53.467761,33.3634605), //Координаты
         mapTypeControlOptions: { //Назначаем ID стилей
           mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
         }
       };
       map = new google.maps.Map(document.getElementById('map'),
         mapOptions); //Создаем карту

       map.mapTypes.set('map_style', styledMap);
       map.setMapTypeId('map_style');
       // map.disableScrollWheelZoom();

       setMarkers(map, places); //устанавливаем марекры

    }


    function setMarkers(map, locations) {
        //Определяем область показа маркеров
        var latlngbounds = new google.maps.LatLngBounds();
        var infowindow = new google.maps.InfoWindow();

        /*
        var image = new google.maps.MarkerImage('/assets/images/map-marker.png',
        new google.maps.Size(92, 92), //размеры картинки. маркер лучше делать квадратным и смещать влево
        new google.maps.Point(0,0),
        new google.maps.Point(20, 75));  //смещение  влево , вверх
        */

        for (var i = 0; i < places.length; i++) {
               var myLatLng = new google.maps.LatLng(locations[i][1], locations[i][2]);
         //Добавляем координаты маркера в область
        latlngbounds.extend(myLatLng);
        var marker = new google.maps.Marker({
           position: myLatLng,
           map: map,
           //icon: image,
           animation: google.maps.Animation.DROP,
           title: locations[i][0],
        });

        cm_mapMarkers.push(marker);

        // google.maps.event.addListener(marker, 'click', function() {
        //      infowindow.setContent("<div class='map-popup'>"+this.title+"</div>");
        //      infowindow.open(map,this);
        // });

        // google.maps.event.addListener(marker, 'click', function() {
        //      if (this.getAnimation() != null) {
        //          this.setAnimation(null);
        //      } else {
        //          this.setAnimation(google.maps.Animation.BOUNCE);
        //      }
        // });

        // google.maps.event.addListener(marker, 'click', function () {
        //     toggleBounce();
        //     setTimeout(toggleBounce, 1500);
        // });

        // function toggleBounce () {
        //     if (marker.getAnimation() != null) {
        //         marker.setAnimation(null);
        //     } else {
        //         marker.setAnimation(google.maps.Animation.BOUNCE);
        //     }
        // }

        }

    };

    initialize();


    // $('.map-btn').click(function(event) {
    //      map.panTo(new google.maps.LatLng(59.937266,30.321184));
    //      map.setZoom(17);
    //      return false;
    // });



});