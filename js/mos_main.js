/* Javascript by Christopher Pierson, 2020 */

// Esri World Imagery basemap option
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Powered by <a href="https://www.esri.com/">Esri</a>'
	//attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Stadia Alidade Smooth basemap option
var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

// Stadia Alidade Dark basemap option
var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

// instantiate Leaflet map
var mymap = L.map('mapid', {
	center: [39.315856, -76.734406],
	zoom: 16,
	layers: [Stadia_AlidadeSmooth, Stadia_AlidadeSmoothDark, Esri_WorldImagery]
});

// add basemap options as object with key value pairs
var baseLayers = {
	"Imagery": Esri_WorldImagery,
	"Dark": Stadia_AlidadeSmoothDark,
	"Light": Stadia_AlidadeSmooth
};

// Cell Towers
var l602 = L.marker([39.29108, -76.615021]).bindPopup('Cell Site L602'),
		l608 = L.marker([39.25528, -76.6753]).bindPopup('Cell Site L608'),
    l651 = L.marker([39.30806, -76.74]).bindPopup('Cell Site L651'),
		l652 = L.marker([39.296388, -76.665376]).bindPopup('Cell Site L652'),
    l653 = L.marker([39.28556, -76.6986]).bindPopup('Cell Site L653'),
    l654 = L.marker([39.28639, -76.7339]).bindPopup('Cell Site L654'),
		l655 = L.marker([39.26083, -76.7133]).bindPopup('Cell Site L655'),
		l688 = L.marker([39.297725, -76.832527]).bindPopup('Cell Site L688'),
		l689 = L.marker([39.3111, -76.7008]).bindPopup('Cell Site L689'),
		l698 = L.marker([39.28861, -76.7606]).bindPopup('Cell Site L698');

var cell_towers = L.layerGroup([l602, l608, l651, l652, l653, l654, l655, l688, l689, l698]);

var overlayMaps = {
    "Cell Towers": cell_towers
};

// add ability to select basemap in layer controls
L.control.layers(baseLayers, overlayMaps).addTo(mymap);

//
// Don't edit above here!
//

// Cell Towers
var l602 = L.marker([39.29108, -76.615021]).bindPopup('Cell Site L602'),
		l608 = L.marker([39.25528, -76.6753]).bindPopup('Cell Site L608'),
    l651 = L.marker([39.30806, -76.74]).bindPopup('Cell Site L651'),
		l652 = L.marker([39.296388, -76.665376]).bindPopup('Cell Site L652'),
    l653 = L.marker([39.28556, -76.6986]).bindPopup('Cell Site L653'),
    l654 = L.marker([39.28639, -76.7339]).bindPopup('Cell Site L654'),
		l655 = L.marker([39.26083, -76.7133]).bindPopup('Cell Site L655'),
		l688 = L.marker([39.297725, -76.832527]).bindPopup('Cell Site L688'),
		l689 = L.marker([39.3111, -76.7008]).bindPopup('Cell Site L689'),
		l698 = L.marker([39.28861, -76.7606]).bindPopup('Cell Site L698');

var cell_towers = L.layerGroup([l602, l608, l651, l652, l653, l654, l655, l688, l689, l698]);

// Public places of interest
var library = L.marker([39.316697, -76.736535]).addTo(mymap); // Woodlawn Public Library marker
var woodlawn_hs = L.marker([39.315371, -76.734422]).addTo(mymap); // Woodlawn High School marker
var woodlawn_track = L.marker([39.315105, -76.730281]).addTo(mymap); // Woodlawn High School track
var bestbuy = L.marker([39.313573, -76.748192]).addTo(mymap); // Best Buy
var grave = L.marker([39.301698, -76.699483]).addTo(mymap); // Location of HML's body
var campfield = L.marker([39.351908, -76.72258]).addTo(mymap); // Campfield Early Learning Center
var lenscraters_om = L.marker([39.406257, -76.790271]).addTo(mymap); // Lenscrafters at Owings Mill Mall
var lenscraters_hv = L.marker([39.498146, -76.654927]).addTo(mymap); // Lenscrafters at Hunt Valley
var randallstown_hs = L.marker([39.382668, -76.796805]).addTo(mymap); // Randallstown High School
var trunkpop = L.marker([39.294504, -76.662882]).addTo(mymap); // Edmondson Avenue trunk-pop
var car_hml = L.marker([39.291145, -76.675939]).addTo(mymap); // Location Hae's car was located
var isb = L.marker([39.303512, -76.748056]).addTo(mymap); // Baltimore Islamic Society (Adnan's mosque)
var parknride = L.marker([39.301524, -76.710094]).addTo(mymap); // I-70 Park-and-Ride
var cliffs = L.marker([39.250525, -76.763524]).addTo(mymap); // Cliffs at Patapsco State Park
var westview = L.marker([39.289264, -76.735135]).addTo(mymap); // Westview Mall
var secsquare = L.marker([39.309365, -76.749265]).addTo(mymap); // Security Square Mall
var bluejay_pool = L.marker([39.288143, -76.764446]).addTo(mymap); // Blue Jay Cue Club
var vip_pool = L.marker([39.286308, -76.765487]).addTo(mymap); // VIP Billiards
var fandm = L.marker([39.283805, -76.762521]).addTo(mymap); // F&M Discount Store
var mcd = L.marker([39.28466, -76.752403]).addTo(mymap); // McDonald's on Rolling Road
var coppin = L.marker([39.312175, -76.658784]).addTo(mymap); // Coppin State University
var forestpark = L.marker([39.323505, -76.688304]).addTo(mymap); // Forest Park neighborhood
var superfresh = L.marker([39.287865, -76.764618]).addTo(mymap); // Super Fresh Market
var seven11 = L.marker([39.286238, -76.75235]).addTo(mymap); // 7-Eleven

// Routes and Stops

// // Mr. S body discovery
// var sellers_route = L.polyline(sellers_route.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 5.6 miles, 15 minutes
// var body_discovery = L.polyline([
// 		[39.301692, -76.699482],
// 		[39.301414, -76.699502]
// ]).addTo(mymap);
// var sellers_stop = L.circle([39.301414, -76.699502], {
//     color: 'red',
//     fillColor: '#000000',
//     fillOpacity: 0.5,
//     radius: 15
// }).addTo(mymap);
//sellers_route.bindPopup("Mr. S's route").openPopup();

// // Potential route HML planned on taking after school
// var woodlawn_owings = L.polyline(woodlawn_owings.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 10.3 miles, 14 minutes
// var owings_campfield = L.polyline(owings_campfield.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 8 miles, 13 minutes
// var owingspark_lens = L.polyline([
// 		[39.40611, -76.7921],
// 		[39.406257, -76.790271]
// ]).addTo(mymap);
// var hml_stop = L.circle([39.406095, -76.792272], {
//     color: 'red',
//     fillColor: '#000000',
//     fillOpacity: 0.5,
//     radius: 15
// }).addTo(mymap);

// Adnan's Day
// var woodlawn_lib = L.polyline([
// 		[39.316697, -76.736535],
// 		[39.315371, -76.734422]
// ]).addTo(mymap); // walks from Woodlawn high school to the library --- probably delete
// var lib_track = L.polyline([
// 		[39.316697, -76.736535],
// 		[39.315105, -76.730281]
//]).addTo(mymap); // walks from the library to the Woodlawn track --- probably delete
// var woodlawn_kristi = L.polyline(woodlawn_kristi.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 7.1 miles, 16 minutes
// var kristi_adnan = L.polyline(kristi_adnan.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 6.6 miles. 12 minutes
// var adnan_mosque = L.polyline(adnan_mosque.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 0.8 miles, 4 minutes
// var mosque_walk = L.polyline([
// 		[39.303238, -76.747205],
// 		[39.303512, -76.748056]
// ]).addTo(mymap);
// var ad_kristi_stop = L.circle([39.26187, -76.69853], {
//     color: 'red',
//     fillColor: '#000000',
//     fillOpacity: 0.5,
//     radius: 75
// }).addTo(mymap);
// var ad_adnan_stop = L.circle([39.30538, -76.75905], {
//     color: 'red',
//     fillColor: '#000000',
//     fillOpacity: 0.5,
//     radius: 75
// }).addTo(mymap);
// var ad_mosque_stop = L.circle([39.30325, -76.74703], {
//     color: 'red',
//     fillColor: '#000000',
//     fillOpacity: 0.5,
//     radius: 15
// }).addTo(mymap);

// Jay's Version of Events
// Interview #1
var woodlawn_jay = L.polyline(woodlawn_jay.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.1 miles, 9 minutes
var jay_westview = L.polyline(jay_westview.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 1.0 miles, 4 minutes
var westview_woodlawn = L.polyline(westview_woodlawn.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 2.4 miles, 8 minutes
var woodlawn_jenn = L.polyline(woodlawn_jenn.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 2.5 miles, 6 minutes
var jenn_trunkpop = L.polyline(jenn_trunkpop.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 4.2 miles, 13 minutes
var trunkpop_i70 = L.polyline(trunkpop_i70.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.3 miles, 9 minutes
var i70_cliffs = L.polyline(i70_cliffs.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 6.3 miles, 17 minutes
var cliffs_woodlawn = L.polyline(cliffs_woodlawn.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 5.6 miles, 15 minutes
var woodlawn_mcds = L.polyline(woodlawn_mcds.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.4 miles, 10 minutes
var mcds_jay = L.polyline(mcds_jay.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 0.5 miles, 2 minutes
var jay_i70 = L.polyline(jay_i70.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.4 miles, 8 minutes
var i70_leakin = L.polyline(i70_leakin.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 1.4 miles, 4 minutes
var leakin_lot = L.polyline(leakin_lot.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 2.4 miles, 8 minutes
var lot_westview = L.polyline(lot_westview.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.5 miles, 11 minutes
var westview_jay = L.polyline(westview_jay.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 1.0 miles, 3 minutes
var jay_seven11 = L.polyline(jay_seven11.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 0.5 miles, 2 minutes

// Interview #2
var jenn_bb = L.polyline(jenn_bb.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.8 miles, 8 minutes
var bb_i70 = L.polyline(bb_i70.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.4 miles, 9 minutes
var i70_forestpark = L.polyline(i70_forestpark.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 2.5 miles, 6 minutes
var forestpark_cliffs = L.polyline(forestpark_cliffs.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 7.8 miles, 19 minutes
var cliffs_woodlawn = L.polyline(cliffs_woodlawn.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 5.6 miles, 15 minutes
var woodlawn_kristi = L.polyline(woodlawn_kristi.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 7.1 miles, 16 minutes
var kristi_jay = L.polyline(kristi_jay.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.9 miles, 7 minutes
var jay_i70 = L.polyline(jay_i70.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.4 miles, 8 minutes
var i70_leakin = L.polyline(i70_leakin.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 1.4 miles, 4 minutes
var leakin_lot = L.polyline(leakin_lot.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 2.4 miles, 8 minutes
var lot_westview = L.polyline(lot_westview.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.5 miles, 11 minutes
var westview_jay = L.polyline(westview_jay.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 1.0 miles, 3 minutes
var jay_fandm = L.polyline(jay_fandm.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 0.9 miles, 3 minutes

// Testimony at 2nd Trial
var jenn_bb = L.polyline(jenn_bb.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.8 miles, 8 minutes
var bb_i70 = L.polyline(bb_i70.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.4 miles, 9 minutes
var i70_patrick = L.polyline(i70_patrick.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 2.3 miles, 7 minutes
var patrick_forestpark = L.polyline(patrick_forestpark.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 4.2 miles, 12 minutes
var forestpark_woodlawn = L.polyline(forestpark_woodlawn.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.4 miles, 8 minutes
var woodlawn_kristi = L.polyline(woodlawn_kristi.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 7.1 miles, 16 minutes
var kristi_jay = L.polyline(kristi_jay.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.9 miles, 7 minutes
var jay_i70 = L.polyline(jay_i70.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.4 miles, 8 minutes
var i70_leakin = L.polyline(i70_leakin.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 1.4 miles, 4 minutes
var leakin_lot = L.polyline(leakin_lot.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 2.4 miles, 8 minutes
var lot_westview = L.polyline(lot_westview.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 3.5 miles, 11 minutes
var westview_jay = L.polyline(westview_jay.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 1.0 miles, 3 minutes
var jay_superfresh = L.polyline(jay_superfresh.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).addTo(mymap); // 1.1 miles, 4 minutes

// var _stop = L.circle([ , ], {
//     color: 'red',
//     fillColor: '#000000',
//     fillOpacity: 0.5,
//     radius: 15
// }).addTo(mymap);

// Sensitive places of interest (general neighborhoods)
var hae_home = L.polygon([
    [39.351772, -76.733515],
		[39.355488, -76.72843],
		[39.352999, -76.726198],
		[39.348254, -76.732657],
		[39.349714, -76.733494]
]).addTo(mymap);
var adnan_home = L.polygon([
    [39.304475, -76.7617],
		[39.307439, -76.759104],
		[39.306949, -76.756507],
		[39.30616, -76.756657],
		[39.306019, -76.754351],
		[39.304766, -76.754608],
		[39.304641, -76.756475],
		[39.303089, -76.756357],
		[39.302649, -76.757623],
		[39.302848, -76.75876]
]).addTo(mymap);
var jay_home = L.polygon([
    [39.287961, -76.749501],
		[39.287994, -76.746615],
		[39.284357, -76.74727],
		[39.284324, -76.749855]
]).addTo(mymap);
var jenn_home = L.polygon([
    [39.296932, -76.729149],
		[39.298618, -76.726767],
		[39.297198, -76.725104],
		[39.295521, -76.727496]
]).addTo(mymap);
var kristi_home = L.polygon([
    [39.261649, -76.700535],
		[39.26351, -76.698539],
		[39.262281, -76.696694],
		[39.26032, -76.698754],
		[39.261234, -76.700224]
]).addTo(mymap);
var patrick_home = L.polygon([
    [39.29188, -76.693754],
		[39.292162, -76.689323],
		[39.288575, -76.688969],
		[39.288683, -76.689763],
		[39.291573, -76.693625]
]).addTo(mymap);
var alonzo_home = L.polygon([
    [39.319683, -76.7352],
		[39.321052, -76.733526],
		[39.319936, -76.729733],
		[39.318375, -76.730769]
]).addTo(mymap);


// Popup messages
library.bindPopup("Woodlawn Public Library").openPopup();
woodlawn_hs.bindPopup("Woodlawn High School").openPopup();
woodlawn_track.bindPopup("Woodlawn High School Track").openPopup();
bestbuy.bindPopup("Best Buy").openPopup();
grave.bindPopup("Location of Hae Min Lee's body in Leakin Park").openPopup();
campfield.bindPopup("Campfield Early Learning Center").openPopup();
lenscraters_om.bindPopup("Lenscrafters at Owings Mill").openPopup();
lenscraters_hv.bindPopup("Lenscrafters at Hunt Valley").openPopup();
randallstown_hs.bindPopup("Randallstown High School").openPopup();
trunkpop.bindPopup("Edmondson Ave trunk-pop").openPopup();
car_hml.bindPopup("Location Hae's car was found").openPopup();
isb.bindPopup("Baltimore Islamic Society (Adnan's mosque)").openPopup();
parknride.bindPopup("I-70 Park-and-Ride").openPopup();
cliffs.bindPopup("The Cliffs at Patapsco State Park").openPopup();
westview.bindPopup("Westview Mall").openPopup();
secsquare.bindPopup("Security Square Mall").openPopup();
bluejay_pool.bindPopup("Blue Jay Cue Club").openPopup();
vip_pool.bindPopup("VIP Billiards").openPopup();
fandm.bindPopup("F&M Discount Store").openPopup();
mcd.bindPopup("McDonald's on Rolling Road").openPopup();
coppin.bindPopup("Coppin State University").openPopup();
forestpark.bindPopup("Forest Park Neighborhood").openPopup();
superfresh.bindPopup("Super Fresh Halal Market").openPopup();

hae_home.bindPopup("Hae Min Lee's house").openPopup();
adnan_home.bindPopup("Adnan Syed's house").openPopup();
jay_home.bindPopup("Jay Wilds' house").openPopup();
jenn_home.bindPopup("Jenn Pusateri's house").openPopup();
kristi_home.bindPopup("Kristi Vinson's (Not-her-real-name Cathy) house").openPopup();
patrick_home.bindPopup("Patrick's house").openPopup();
alonzo_home.bindPopup("Alonzo Sellers' (Mr. S) house").openPopup();

jay_i70.bindPopup("Yup").openPopup();


// // Labels
// var leakin_park = L.marker(
// 		[39.30548, -76.699741],
// 		{opacity: 0.0}
// );
// leakin_park.bindTooltip(
// 		"Leakin Park", {
// 				permanent: true,
// 				className: "leakin-park",
// 				offset: [0,0]
// 		}
// );
// leakin_park.addTo(mymap);


//popup message that is turned on when webpage loads
var popup = L.popup()
    .setLatLng([39.31647, -76.734728])
    .setContent("Story Starts Here!")
    .openOn(mymap);

// to be deleted, using to get coordinates for locations fast!
function onMapClick(e) {
	alert("You clicked the map at " + e.latlng);
}
mymap.on('click', onMapClick);



// //add point marker to map
// var marker = L.marker([39.091010,-77.509829]).addTo(mymap);
//
// //add transparent cirlce to map
// var circle = L.circle([39.083181, -77.569791], {
//     color: 'red',
//     fillColor: '#000000',
//     fillOpacity: 0.5,
//     radius: 400
// }).addTo(mymap);
//
// //add polygon to map
// var polygon = L.polygon([
//     [39.108881, -77.554632],
//     [39.114402, -77.538812],
//     [39.091195, -77.526881]
// ]).addTo(mymap);
//
// //when marker, circle, or polygon are clicked; enable popup message
// marker.bindPopup("<b>Home</b><br>Ted's Stomping Grounds").openPopup();
// circle.bindPopup("Heritage High School");
// polygon.bindPopup("Hockey, Taco Bell, Movies");
//
// //popup message that is already on when webpage loads
// var popup = L.popup()
//     .setLatLng([39.1157, -77.5636])
//     .setContent("Leesburg, VA")
//     .openOn(mymap);
//
// //create function that gives xy coordinates on map where clicked
// function onMapClick(e) {
// 	alert("You clicked the map at " + e.latlng);
// }
//
// //activate onMapClick function
// mymap.on('click', onMapClick);
