var app = new Framework7({
    root: "#app",
    /* app element */
    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/page2/',
            url: 'pages/page2.html',
        },
    ]
});

var mainView = app.views.create('.view-main');

document.addEventListener("deviceready", init, false);
init()

function init() {

    $("#takePic").on("click", function () {
        console.log("user tapped")
        navigator.camera.getPicture(cameraSuccess, cameraFail, cameraOptions);

    })
    var cameraOptions = {
        //number range is 0-100, default is 50
        quality: 100,
        saveToPhotoAlbum: true
    }

    function cameraSuccess(imageURI) {
        console.log("amazing shot!");
        $("#takePic").after(imageURI);
    }

    function cameraFail(message) {
        alert("Failed : " + message);
    }

    console.log("working");
    var geoOptions = {
        enableHighAccuracy: true,
        maximumAge: 500
    }

    var map, marker, marker2, watchID, infowindow;

    function geoSuccess(position) {
        console.log("tracking");
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);

        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ebe3cd"
      }
    ]
  },
                {
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "on"
      }
    ]
  },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#523735"
      }
    ]
  },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f1e6"
      }
    ]
  },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#c9b2a6"
      }
    ]
  },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#dcd2be"
      }
    ]
  },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ae9e90"
      }
    ]
  },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                        {
                            "visibility": "on"
      }
    ]
  },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": -40
      }
    ]
  },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#d2c18e"
      }
    ]
  },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
      }
    ]
  },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#93817c"
      }
    ]
  },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#96ad2e"
      }
    ]
  },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#447530"
      }
    ]
  },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f1e6"
      }
    ]
  },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#fdfcf8"
      }
    ]
  },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f8c967"
      },
                        {
                            "saturation": 40
      }
    ]
  },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#e9bc62"
      },
                        {
                            "saturation": 55
      }
    ]
  },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e98d58"
      }
    ]
  },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#db8555"
      }
    ]
  },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "visibility": "on"
      }
    ]
  },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#806b63"
      }
    ]
  },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
      }
    ]
  },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8f7d77"
      }
    ]
  },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ebe3cd"
      }
    ]
  },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
      }
    ]
  },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c8f7f9"
      },
                        {
                            "saturation": 20
      }
    ]
  },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#92998d"
      }
    ]
  }
],
            center: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        });

        infowindow = new google.maps.InfoWindow({
            content: document.getElementById('form')
        });

        google.maps.event.addListener(map, 'click', function (event) {
            marker = new google.maps.Marker({
                position: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                },
                map: map
//                icon: 'imgs/trashcan2.png'
            });
            
            marker2 = new google.maps.Marker({
//                position: {
//                    lat: position.coords.latitude,
//                    lng: position.coords.longitude
//                },
                position: event.latLng,
                map: map,
                icon: 'imgs/trashcan2.png'
            });


            google.maps.event.addListener(marker2, 'click', function () {
                infowindow.open(map, marker2);
            });
        });

        watchID = navigator.geolocation.watchPosition(watchSuccess, geoError, geoOptions)

    }

    function watchSuccess(position) {
        marker.setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        });
        
          if (lat = 49.6787456, 49.6778149, 49.6779348, 49.6777136, 49.677708, 49.6777531, 49.6778829, 49.677797, 49.6777543, 49.6734253){
        alert("Trashcan nearby! Take a photo?")
    }
    }

    function geoError(message) {
        alert("Oh no " + message.message + " Error code: " + message.code)
    }
        
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
    
   
}
//     function saveData() {
//        var name = escape(document.getElementById('name').value);
//        var address = escape(document.getElementById('address').value);
//        var type = document.getElementById('type').value;
//        var latlng = marker.getPosition();
//        var url = 'phpsqlinfo_addrow.php?name=' + name + '&address=' + address +
//                  '&type=' + type + '&lat=' + latlng.lat() + '&lng=' + latlng.lng();
//
//        downloadUrl(url, function(data, responseCode) {
//
//          if (responseCode == 200 && data.length <= 1) {
//            infowindow.close();
//            messagewindow.open(map, marker);
//          }
//        });
//      }
//
//      function downloadUrl(url, callback) {
//        var request = window.ActiveXObject ?
//            new ActiveXObject('Microsoft.XMLHTTP') :
//            new XMLHttpRequest;
//
//        request.onreadystatechange = function() {
//          if (request.readyState == 4) {
//            request.onreadystatechange = doNothing;
//            callback(request.responseText, request.status);
//          }
//        };
//
//        request.open('GET', url, true);
//        request.send(null);
//      }
//
//      function doNothing () {
//      }
//test on chrome 
//init()
