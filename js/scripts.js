
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var menu = JSON.parse(this.responseText);

    var i;
    var cats = menu.categories;
    
    console.log(menu.categories[0]);
    var html = "", active;
    for(i=0; i<cats.length;i++){
        if(cats[i].cposition == "0"){
            active = " active";
        }else{
            active = "";
        }
        html += '<div id="'+ cats[i].cid +'" class="container-fluid tab-pane '+ active +'"><br> \
        <div class="row"> \
            <div class="col-12"> \
                <h3 class="c-name text-success">'+ cats[i].cename +'</h3> \
            </div> \
            <div class="col-12"> \
                <img class="c-img img-fluid" src="'+ cats[i].cimage +'" \
                    alt="'+ cats[i].cname +'"> \
            </div> \
            <div class="col-12"> \
                <p class="c-desc text-success">'+ cats[i].cdesc +'</p> \
            </div> \
        </div>';
        var j;
        var pros = cats[i].cproducts;
        for(j=0;j<pros.length;j++){
            html += '<div class="row"> \
            <div class="col-10"> \
                <p class="p-name">A1. Goi Cuon - Steamed Spring Roll (2pcs) '+ pros[j].pid + '. ' + pros[j].pvname + ' - ' + pros[j].pename + ' ('+ pros[j].ppieces+')'+' \
                    <span class="p-img"><i class="fas fa-camera text-success" data-toggle="modal" \
                            data-target="#'+ pros[j].pid +'"></i></span> \
                <div class="modal fade" id="'+ pros[j].pid +'"> \
                    <div class="modal-dialog modal-dialog-centered"> \
                        <div class="modal-content"> \
                            <img class="img-fluid" src="'+ pros[j].pimage +'" alt="'+ pros[j].pename +'"> \
                        </div> \
                    </div> \
                </div> \
                </p> \
                <p class="p-desc">'+ pros[j].pdesc +'</p> \
            </div>';
            var z;
            var opts = pros[j].prices;
            if(opts.length == 1){
                html += '<div class="col-2"> \
                            <span class="p-price">'+opts[0].price+'</span> \
                        </div>';
            }
            html += '</div>';
        }
        html += '</div>';
    }
    document.getElementById("").innerHTML = html;
  }
};
xmlhttp.open("GET", "menu.json", true);
xmlhttp.send();


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

