
    var map = L.map('map', {
        center: [48.865633, 2.321236],
        minZoom: 2,
        zoomControl: false,
        zoom: 13
    });

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        const regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var POPUP_MARKER_ID = getParameterByName('markerid');

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: ['a', 'b', 'c']
    }).addTo(map);


    var myIcon = L.icon({
        iconUrl: 'img/pins/Marker.png',
        iconRetinaUrl: 'img/pins/Marker.png',
        iconSize: [30, 42],
        iconAnchor: [9, 21],
        popupAnchor: [7, -15]
    });

    var markerClusters = L.markerClusterGroup({
        polygonOptions: {
            opacity: 0,
            fillOpacity: 0
        }
    });

    for (var i = 0; i < markers.length; ++i) {
        var popup =
            '<img src="' + markers[i].map_image_url + '" alt=""/>' +
            '<span>' +
            '<span class="infobox_rate">' + markers[i].rate + '</span>' +
            '<em>' + markers[i].type_point + '</em>' +
            '<h3>' + markers[i].name_point + '</h3>' +
            '<a href="' + markers[i].url_point + '" class="btn_infobox_detail"></a>' +
            '<form action="http://maps.google.com/maps" method="get" target="_blank"><input name="saddr" value="' + markers[i].get_directions_start_address + '" type="hidden"><input type="hidden" name="daddr" value="' + markers[i].location_latitude + ',' + markers[i].location_longitude + '"><button type="submit" value="Get directions" class="btn_infobox_get_directions">Get directions</button></form>' +
            '<a href="tel://' + markers[i].phone + '" class="btn_infobox_phone">' + markers[i].phone + '</a>' +
            '</span>';


        var m = L.marker([markers[i].location_latitude, markers[i].location_longitude], { id: markers[i].id, icon: myIcon }).bindPopup(popup);

        markerClusters.addLayer(m);
    }

    map.addLayer(markerClusters);

    //Link on the same page
    var classname = document.getElementsByClassName("address");

    var openMarkerPopup = function() {
        var id = this.getAttribute("data-id");
        markerClusters.eachLayer(function(layer) {
            if (layer.options.id && layer.options.id == id) {
                if (!layer._icon) layer.__parent.spiderfy();
                layer.openPopup();
            }
        });
    };

    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', openMarkerPopup, false);
    }
