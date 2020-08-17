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
	center: [39.31608851131065, -76.7334294319153],
	zoom: 17,
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
var cell_towers = L.layerGroup([l602, l608, l651, l652, l653, l654, l655, l688, l689, l698]);

// Sensitive places of interest (general neighborhoods)
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
}).bindPopup("Jay Wilds' neighborhood").openPopup();
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

// Sensitive plaecs of interest (genreal neighborhoods) layer group
var neighborhoods = L.layerGroup([adnan_home, jay_home, kristi_home]).addTo(mymap);

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
var isb = L.marker([39.303512, -76.748056]).bindPopup("Baltimore Islamic Society (Adnan's mosque)").openPopup().addTo(mymap); // Baltimore Islamic Society (Adnan's mosque)
var mcd = L.marker([39.28466, -76.752403]).bindPopup("McDonald's on Rolling Road").openPopup().addTo(mymap); // McDonald's on Rolling Road

// Adnan's Day
var lib_track = L.polyline([
		[39.316563, -76.736235],
		[39.316504, -76.736192],
		[39.316492, -76.735849],
		[39.31677, -76.735548],
		[39.31606, -76.734776],
		[39.316065, -76.734524],
		[39.31606, -76.734079],
		[39.316297, -76.733274],
		[39.31611, -76.733097],
		[39.315923, -76.733032],
		[39.315753, -76.732743],
		[39.315467, -76.731997],
		[39.315363, -76.731697],
		[39.315105, -76.730281]
]).bindPopup("Adnan's walk from the library to track practice").setStyle({color: "green", dashArray: "5 5"}).addTo(mymap); // walks from the library to the Woodlawn track
var woodlawn_lib = L.polyline([
		[39.316563, -76.736235],
		[39.316504, -76.736192],
		[39.316492, -76.735849],
		[39.31677, -76.735548],
		[39.31606, -76.734776],
		[39.315532, -76.734485]
]).bindPopup("Adnan's walk from school to the library").setStyle({color: "orange", opacity: 0.8}).addTo(mymap); // walks from Woodlawn high school to the library
var woodlawn_kristi_route = L.polyline(woodlawn_kristi.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).bindPopup("<p>Trip 1:<b> Woodlawn to Kristi's</b><br>Distance:<b> 7.1 miles, 16 minutes</b></p>"); // 7.1 miles, 16 minutes
var kristi_adnan_route = L.polyline(kristi_adnan.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).bindPopup("<p>Trip 2:<b> Kristi's to Adnan's</b><br>Distance:<b> 6.6 miles, 12 minutes</b></p>"); // 6.6 miles. 12 minutes
var adnan_mosque_route = L.polyline(adnan_mosque.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).bindPopup("<p>Trip 3:<b> Adnan's to Baltimore Islamic Society</b><br>Distance:<b> 0.8 miles, 4 minutes</b></p>"); // 0.8 miles, 4 minutes

// create list of routes
var route_list = [
		woodlawn_kristi_route,
		kristi_adnan_route,
		adnan_mosque_route
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
