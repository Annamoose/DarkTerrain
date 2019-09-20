//function to start the Leaflet map
function createMap(){

    //Varibles for attribution box on the map.
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' + ' <a href="http://mapbox.com">Mapbox</a> |' + '<a href="https://annamoose.github.io/">Annamoose</a>'; 
    
    //Variable for storing your Mapbox API Token
    var apitoken = 'pk.eyJ1IjoiYW5uYW1vb3NlIiwiYSI6ImNqNnh3dDlkdDFvbGYyd21ubzVyemFrdTIifQ.25r36ZiVm1gzeDwHBp_ZrA' 
    
     //URL used for Stanard MaxBox Styles
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';
    
    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';
    
    //For Custome basemaps - Replace your username and StyleID
    var darkTerrain = L.tileLayer(mbStyleUrl, {id: 'annamoose/ck0d8glj10jal1cqfpeevhbx5', token: apitoken,  attribution: mbAttr});
    
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    var dark  = L.tileLayer(mbUrl, {id: 'mapbox.dark', token: apitoken,  attribution: mbAttr});
    
    var outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken,  attribution: mbAttr});
    
    
    //create the map*/
    var map = L.map('map', {
        center: [31.00, -5],//Coordinated to center the map
        zoom: 6, //zoom level
        layers:darkTerrain//basemap
    });
  
  //create the basemap control layer*/
    var baseLayers = {
		"Outdoors": outdoors,
        "Grayscale": grayscale,
		"Darkscale": dark,
        "Dark Terrain": darkTerrain
    };
    
    L.control.layers(baseLayers).addTo(map);    
 };

//calling the function
$(document).ready(createMap);