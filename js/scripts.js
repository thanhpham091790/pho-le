function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(39.66743209145535, -104.86360942372228),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: true,

        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true,
        fullscreenControl: true,
        disableDefaultUI: true
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(39.66746512578677, -104.86358796488952)
    });
    marker.setMap(map);

    var infoWindow = new google.maps.InfoWindow({
        content: "2719 S Parker Rd, Aurora, CO 80014"
    });
    google.maps.event.addListener(marker, 'click', function () {
        var pos = map.getZoom();

        map.setZoom(17);
        map.setCenter(marker.getPosition());

        window.setTimeout(function () {
            map.setZoom(pos);
        }, 3000);

        infoWindow.open(map, marker);
    });
}