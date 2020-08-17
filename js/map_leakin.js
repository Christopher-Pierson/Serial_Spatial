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
	center: [39.31152308940904, -76.71675682067873],
	zoom: 14,
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
var neighborhoods = L.layerGroup([hae_home, adnan_home, jay_home, jenn_home, kristi_home, patrick_home, alonzo_home]);

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
var grave = L.marker([39.301698, -76.699483]).bindPopup("Location of Hae Min Lee's body in Leakin Park").openPopup().addTo(mymap); // Location of HML's body
var coppin = L.marker([39.312175, -76.658784]).bindPopup("Coppin State University").openPopup().addTo(mymap); // Coppin State University

// Routes and Stops

// current polyline style, created to set current route to highlighted style
var current_style = {
		color: "red",
		opacity: 0.8,
		dashArray: null,
};

// polyline style to represent walking
var walk_style = {
		color: "gray",
		opacity: 0.8,
		dashArray: "5 5",
};

// Mr. S body discovery
var sellers_route = L.polyline(sellers_route.features.map(feature => [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])).bindPopup("<p><b>Alonzo's (Mr. S) route to work</b><br>Distance:<b> 5.6 miles, 15 minutes</b></p>").setStyle(current_style).addTo(mymap); // 5.6 miles, 15 minutes
var body_discovery = L.polyline([
		[39.301692, -76.699482],
		[39.301454, -76.699497]
]).bindPopup("Alonzo (Mr. S) walks 127ft into the woods to take a piss, where he discovers Hae's body.").setStyle(walk_style).addTo(mymap);
var sellers_stop = L.circle([39.301414, -76.699502], {
    color: 'yellow',
    fillColor: '#000000',
    fillOpacity: 0.2,
    radius: 5,
}).bindPopup("Alonzo (Mr. S) parks his vehicle here on the opposite side of the road where there is a temporary break in jersey walls.").addTo(mymap);

// 39.301454, -76.699497
// 39.301692, -76.699482 top

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

//popup message that is turned on when webpage loads
var popup = L.popup()
    .setLatLng([39.319821, -76.732511])
    .setContent("Alonzo's (Mr. S) House")
    .openOn(mymap);

// function that return the coordinates on the map when you don't click on a feature, button, or layer menu
function onMapClick(e) {
	alert("You clicked the map at " + e.latlng);
}
mymap.on('click', onMapClick);
