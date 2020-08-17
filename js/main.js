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
	center: [39.313448903701506, -76.73963069915773],
	zoom: 15,
	layers: [Stadia_AlidadeSmooth, Stadia_AlidadeSmoothDark, Esri_WorldImagery], // [Stadia_AlidadeSmooth, Stadia_AlidadeSmoothDark, Esri_WorldImagery]
	fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topleft'
	}
});

// add basemap options as object with key value pairs
var baseLayers = {
	"Imagery": Esri_WorldImagery,
	"Dark": Stadia_AlidadeSmoothDark,
	"Light": Stadia_AlidadeSmooth
};

// Icons
// Cell Tower icon
var celltowerIcon = L.icon({
    iconUrl: 'lib/leaflet/images/noun_signal_31331.png',
    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});

// // Woodlawn HS icon
// var woodlawnIcon = L.icon({
//     iconUrl: 'lib/leaflet/images/school-duotone.png',
//     iconSize:     [35, 30], // size of the icon
//     iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
//     popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
// });
//
// // Woodlawn Library iconUrl
// var libIcon = L.icon({
//     iconUrl: 'lib/leaflet/images/book-open-duotone.png',
//     iconSize:     [35, 30], // size of the icon
//     iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
//     popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
// });
//
// // Woodlawn HS track icon
// var trackIcon = L.icon({
//     iconUrl: 'lib/leaflet/images/running-duotone.png',
//     iconSize:     [35, 35], // size of the icon
//     iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
//     popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
// });
//
// // Gravesite icon
// var graveIcon = L.icon({
//     iconUrl: 'lib/leaflet/images/skull-crossbones-duotone.png',
//     iconSize:     [35, 30], // size of the icon
//     iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
//     popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
// });
//
// // HML's car icon
// var hmlcarIcon = L.icon({
//     iconUrl: 'lib/leaflet/images/car-duotone.png',
//     iconSize:     [35, 30], // size of the icon
//     iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
//     popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
// });
//
// // Best Buy icon
// var bbIcon = L.icon({
//     iconUrl: 'lib/leaflet/images/tags-duotone.png',
//     iconSize:     [35, 30], // size of the icon
//     iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
//     popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
// });

// Cell Towers
var l602 = L.marker([39.291229, -76.615098], {icon: celltowerIcon}).bindPopup('Cell Tower L602'),
		l608 = L.marker([39.255161, -76.675268], {icon: celltowerIcon}).bindPopup('Cell Tower L608'),
    l651 = L.marker([39.307667, -76.739448], {icon: celltowerIcon}).bindPopup('Cell Tower L651'),
		l652 = L.marker([39.296512, -76.665434], {icon: celltowerIcon}).bindPopup('Cell Tower L652'),
    l653 = L.marker([39.28556, -76.6986], {icon: celltowerIcon}).bindPopup('Cell Tower L653'),
    l654 = L.marker([39.28651, -76.733387], {icon: celltowerIcon}).bindPopup('Cell Tower L654'),
		l655 = L.marker([39.261122, -76.713216], {icon: celltowerIcon}).bindPopup('Cell Tower L655'),
		l688 = L.marker([39.297958, -76.832677], {icon: celltowerIcon}).bindPopup('Cell Tower L688'),
		l689 = L.marker([39.310693, -76.69892], {icon: celltowerIcon}).bindPopup('Cell Tower L689'),
		l698 = L.marker([39.287898, -76.7603], {icon: celltowerIcon}).bindPopup('Cell Tower L698');
// Cell tower layer group
var cell_towers = L.layerGroup([l602, l608, l651, l652, l653, l654, l655, l688, l689, l698]).addTo(mymap);

// Sensitive places of interest (general neighborhoods)
var hae_home = L.polygon([
    [39.351772, -76.733515],
		[39.355488, -76.72843],
		[39.352999, -76.726198],
		[39.348254, -76.732657],
		[39.349714, -76.733494]
], {
    color: 'tan',
    fillColor: 'tan',
    fillOpacity: 0.3,
}).bindPopup("Hae Min Lee's neighborhood").openPopup();
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
], {
    color: 'tan',
    fillColor: 'tan',
    fillOpacity: 0.3,
}).bindPopup("Adnan Syed's neighborhood").openPopup();
var jay_home = L.polygon([
    [39.287961, -76.749501],
		[39.287994, -76.746615],
		[39.284357, -76.74727],
		[39.284324, -76.749855]
], {
    color: 'tan',
    fillColor: 'tan',
    fillOpacity: 0.3,
}).bindPopup("Jay Wilds' neighborhood").openPopup();;
var jenn_home = L.polygon([
    [39.296932, -76.729149],
		[39.298618, -76.726767],
		[39.297198, -76.725104],
		[39.295521, -76.727496]
], {
    color: 'tan',
    fillColor: 'tan',
    fillOpacity: 0.3,
}).bindPopup("Jenn Pusateri's neighborhood").openPopup();;
var kristi_home = L.polygon([
    [39.261649, -76.700535],
		[39.26351, -76.698539],
		[39.262281, -76.696694],
		[39.26032, -76.698754],
		[39.261234, -76.700224]
], {
    color: 'tan',
    fillColor: 'tan',
    fillOpacity: 0.3,
}).bindPopup("Kristi Vinson's (Not-her-real-name Cathy) neighborhood").openPopup();
var patrick_home = L.polygon([
    [39.29188, -76.693754],
		[39.292162, -76.689323],
		[39.288575, -76.688969],
		[39.288683, -76.689763],
		[39.291573, -76.693625]
], {
    color: 'tan',
    fillColor: 'tan',
    fillOpacity: 0.3,
}).bindPopup("Patrick's neighborhood").openPopup();
var alonzo_home = L.polygon([
    [39.319683, -76.7352],
		[39.321052, -76.733526],
		[39.319936, -76.729733],
		[39.318375, -76.730769]
], {
    color: 'tan',
    fillColor: 'tan',
    fillOpacity: 0.3,
}).bindPopup("Alonzo Sellers' (Mr. S) neighborhood").openPopup();


// Sensitive plaecs of interest (genreal neighborhoods) layer group
var neighborhoods = L.layerGroup([hae_home, adnan_home, jay_home, jenn_home, kristi_home, patrick_home, alonzo_home]).addTo(mymap);

// layer groups to be added to layer controls
var overlayMaps = {
    "Cell Towers": cell_towers,
		"Neighborhoods": neighborhoods
};

// add ability to select basemap and turn on/off layer groups in layer controls
L.control.layers(baseLayers, overlayMaps).addTo(mymap);

// Public places of interest
var library = L.marker([39.316697, -76.736535]).bindPopup("Woodlawn Public Library").openPopup().addTo(mymap); // Woodlawn Public Library marker
var woodlawn_hs = L.marker([39.315371, -76.734422]).bindPopup("Woodlawn High School").openPopup().addTo(mymap); // Woodlawn High School marker
var woodlawn_track = L.marker([39.315105, -76.730281]).bindPopup("Woodlawn High School Track").openPopup().addTo(mymap); // Woodlawn High School track
var bestbuy = L.marker([39.313573, -76.748192]).bindPopup("Best Buy").openPopup().addTo(mymap); // Best Buy
var grave = L.marker([39.301698, -76.699483]).bindPopup("Location of Hae Min Lee's body in Leakin Park").openPopup().addTo(mymap); // Location of HML's body
var campfield = L.marker([39.351908, -76.72258]).bindPopup("Campfield Early Learning Center").openPopup().addTo(mymap); // Campfield Early Learning Center
var lenscraters_om = L.marker([39.406257, -76.790271]).bindPopup("Lenscrafters at Owings Mill").openPopup().addTo(mymap); // Lenscrafters at Owings Mill Mall
var lenscraters_hv = L.marker([39.498146, -76.654927]).bindPopup("Lenscrafters at Hunt Valley").openPopup().addTo(mymap); // Lenscrafters at Hunt Valley
var randallstown_hs = L.marker([39.382668, -76.796805]).bindPopup("Randallstown High School").openPopup().addTo(mymap); // Randallstown High School
var trunkpop = L.marker([39.294504, -76.662882]).bindPopup("Edmondson Ave trunk-pop").openPopup().addTo(mymap); // Edmondson Avenue trunk-pop
var car_hml = L.marker([39.291145, -76.675939]).bindPopup("Location Hae's car was found").openPopup().addTo(mymap); // Location Hae's car was located
var isb = L.marker([39.303512, -76.748056]).bindPopup("Baltimore Islamic Society (Adnan's mosque)").openPopup().addTo(mymap); // Baltimore Islamic Society (Adnan's mosque)
var parknride = L.marker([39.301524, -76.710094]).bindPopup("I-70 Park-and-Ride").openPopup().addTo(mymap); // I-70 Park-and-Ride
var cliffs = L.marker([39.250525, -76.763524]).bindPopup("The Cliffs at Patapsco State Park").openPopup().addTo(mymap); // Cliffs at Patapsco State Park
var westview = L.marker([39.289264, -76.735135]).bindPopup("Westview Mall").openPopup().addTo(mymap); // Westview Mall
var secsquare = L.marker([39.309365, -76.749265]).bindPopup("Security Square Mall").openPopup().addTo(mymap); // Security Square Mall
var bluejay_pool = L.marker([39.288143, -76.764446]).bindPopup("Blue Jay Cue Club").openPopup().addTo(mymap); // Blue Jay Cue Club
var vip_pool = L.marker([39.286308, -76.765487]).bindPopup("VIP Billiards").openPopup().addTo(mymap); // VIP Billiards
var fandm = L.marker([39.283805, -76.762521]).bindPopup("F&M Discount Store").openPopup().addTo(mymap); // F&M Discount Store
var mcd = L.marker([39.28466, -76.752403]).bindPopup("McDonald's on Rolling Road").openPopup().addTo(mymap); // McDonald's on Rolling Road
var coppin = L.marker([39.312175, -76.658784]).bindPopup("Coppin State University").openPopup().addTo(mymap); // Coppin State University
var forestpark = L.marker([39.323505, -76.688304]).bindPopup("Forest Park Neighborhood").openPopup().addTo(mymap); // Forest Park neighborhood
var superfresh = L.marker([39.287865, -76.764618]).bindPopup("Super Fresh Halal Market").openPopup().addTo(mymap); // Super Fresh Market
var seven11 = L.marker([39.286238, -76.75235]).bindPopup("7-Eleven").openPopup().addTo(mymap); // 7-Eleven

// create list of routes
var route_list = [

];

// starting route index to iterate on in the next_ and prev_route functions below
var route_index = -1;

// default polyline style, created as a variable to set all non-current visible routes to a defualt color/style in route functions
var default_style = {
		color: "black",
    opacity: 0.8,
		dashArray: "5 5",
}

// current polyline style, created to set current route to highlighted style
var current_style = {
		color: "red",
		opacity: 0.8,
		dashArray: null,
}

// function for going to next route in list
function next_route(){
		if (route_index >= route_list.length-1)
				return;
		if (route_index >= 0)
				route_list[route_index].setStyle(default_style); // set styling for previous route
		if (route_index >= 1)
				route_list[route_index-1].removeFrom(mymap); // remove route from before the previous route from the map
		route_index = route_index + 1;
		route_list[route_index].setStyle(current_style);
		route_list[route_index].addTo(mymap);
		var bounds = route_list[route_index].getBounds();
		mymap.flyToBounds(bounds);
}

// function for going to previous route in list
function prev_route(){
	if (route_index <= -1)
			return;
		route_list[route_index].removeFrom(mymap);
		route_index = route_index - 1;
		if (route_index <= -1)
				return;
		route_list[route_index].setStyle(current_style)
		var bounds = route_list[route_index].getBounds();
		mymap.flyToBounds(bounds);
		if (route_index >= 1){
			route_list[route_index - 1].addTo(mymap)
			route_list[route_index - 1].setStyle(default_style);
		}
}

//popup message that is turned on when webpage loads
var popup = L.popup()
    .setLatLng([39.316092, -76.734438])
    .setContent("The story starts here, click me!")
    .openOn(mymap);

// function that return the coordinates on the map when you don't click on a feature, button, or layer menu
function onMapClick(e) {
	alert("You clicked the map at " + e.latlng);
}
mymap.on('click', onMapClick);

// create easy button to run the next_route function
var buttons = [
	L.easyButton("fas fa-chevron-left", function(){ // easy button to run the prev_route function
		prev_route()
	},'Previous Route',{ position: 'bottomleft' }),

// create easy button to run the prev_route function
	L.easyButton("fas fa-chevron-right", function(){ // easy button to run the next_route function
		next_route()
	},'Next Route',{ position: 'bottomleft' })
]

// Add and create easy bar of easy buttons from the button variable list
L.easyBar(buttons, {
	id: 'myeasybar',
	position: 'bottomleft'
}).addTo(mymap);
