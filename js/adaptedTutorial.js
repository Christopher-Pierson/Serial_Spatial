/* Javascript by Christopher Pierson, 2020 */

/* Map of GeoJSON data from MegaCities.geojson */
//declare map var in global scope
var mymap;

// //function to instantiate the Leaflet map
// function createMap(){
//     //create the map
//     mymap = L.map('mapid', {
//         center: [20, 0],
//         zoom: 2
//     });
//
//     //add OSM base tilelayer
//     L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
//     }).addTo(mymap);
//
//     //call getData function
//     getData();
// };
//
// //function to retrieve the data and place it on the map
// function getData(){
//     //load the data
// 		$.getJSON("data/MegaCities.geojson", function(response){
// 					 //create marker options
// 					 var geojsonMarkerOptions = {
// 							 radius: 8,
// 							 fillColor: "#ff7800",
// 							 color: "#000",
// 							 weight: 1,
// 							 opacity: 1,
// 							 fillOpacity: 0.8
// 					 };
//
// 					 //create a Leaflet GeoJSON layer and add it to the map
// 					 L.geoJson(response, {
// 							 pointToLayer: function (feature, latlng){
// 									 return L.circleMarker(latlng, geojsonMarkerOptions);
// 							 }
// 					 }).addTo(mymap);
// 			 });
// };
//
// $(document).ready(createMap);


//function to instantiate the Leaflet map
function createMap(){
    //create the map
    mymap = L.map('mapid', {
        center: [20, 0],
        zoom: 2
    });

    //add OSM base tilelayer
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(mymap);

    //call getData function
    getData();
};



//added at Example 2.3 line 20...function to attach popups to each mapped feature
function onEachFeature(feature, layer) {
    //no property named popupContent; instead, create html string with all properties
    var popupContent = "";
    if (feature.properties) {
        //loop to add feature property names and values to html string
        for (var property in feature.properties){
            popupContent += "<p>" + property + ": " + feature.properties[property] + "</p>";
        }
        layer.bindPopup(popupContent);
    };
};

//function to retrieve the data and place it on the map
function getData(map){
    //load the data
    $.getJSON("data/MegaCities.geojson", function(response){

            //create a Leaflet GeoJSON layer and add it to the map
            L.geoJson(response, {
                onEachFeature: onEachFeature
            }).addTo(mymap);
    });
};

$(document).ready(createMap);
