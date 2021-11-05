function geocodermap () {
  var mymap = L.map('mapid', {editable: true}).setView([0, 0], 1);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: mapbox_access_token,
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'bottom'
  }
  }).addTo(mymap);




  // create a fullscreen button and add it to the map
L.control.fullscreen({
  position: 'topleft', // change the position of the button can be topleft, topright, bottomright or bottomleft, default topleft
  title: 'Show me the fullscreen !', // change the title of the button, default Full Screen
  titleCancel: 'Exit fullscreen mode', // change the title of the button when fullscreen is on, default Exit Full Screen
  content: null, // change the content of the button, can be HTML, default null
  forceSeparateButton: true, // force separate button to detach from zoom buttons, default false
  forcePseudoFullscreen: true, // force use of pseudo full screen even if full screen API is available, default false
  fullscreenElement: false // Dom element to render in full screen, false by default, fallback to map._container
}).addTo(mymap);

// events are fired when entering or exiting fullscreen.
mymap.on('enterFullscreen', function(){
  console.log('entered fullscreen');
});

mymap.on('exitFullscreen', function(){
  console.log('exited fullscreen');
});


L.graticule().addTo(mymap);

// Specify divisions every 10 degrees
L.graticule({ interval: 10 }).addTo(mymap);



//mousePosition Plugin
L.control.mousePosition().addTo(mymap);
  // mymap.addControl(new L.Control.Fullscreen());

  // var mymap = L.map('mapid');
  // // //Mapbox Tile Layer
  //     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  //       maxZoom: 33,
  //       id: 'mapbox/satellite-streets-v11',
  //       accessToken: mapbox_access_token,
  //     }).addTo(mymap);


  // L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  // }).addTo(mymap);

  //     var marker = L.marker([51.5, 0.09]).addTo(mymap);
  //
  //     var circle = L.circle([51.508, -0.11], {
  //       color: 'red',
  //       fillColor: '#f03',
  //       fillOpacity: 0.5,
  //       radius: 500
  //     }).addTo(mymap);
  //
  //     var polygon = L.polygon([
  //       [51.509, -0.08],
  //       [51.503, -0.06],
  //       [51.51, -0.047]
  //     ]).addTo(mymap);
  //
  //     //Adding Popups
  //
  //     marker.bindPopup("<b> Hello World! </b> <br> I am a popup.").openPopup();
  //     circle.bindPopup("I am a circle");
  //     polygon.bindPopup("I am a polygon");
  //
  //     //Addding Zoomz
  //
  //     marker.on('click', function(e) {
  //       mymap.setView(e.latlng, 14);
  //     });
  //     circle.on('click', function(e) {
  //       mymap.setView(e.latlng, 13);
  //     });
  //     polygon.on('click', function(e) {
  //       mymap.setView(e.latlng, 13);
  //     });
  //
  //     var ZoomViewer = L.Control.extend({
  //       onAdd: function(){
  //         var gauge = L.DomUtil.create('div');
  //         gauge.style.width = '200px';
  //         gauge.style.background = 'rbga(255, 255, 255, 0.5)';
  //         gauge.style.textAlign = 'left';
  //         mymap.on('zoomstart zoom zoomend', function(ev){
  //           gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
  //         })
  //         return gauge;
  //       }
  //     });
  //
  //     var polyline = L.polyline([
  //       [51.506, -0.08],
  //       [51.502, -0.06],
  //       [51.507, -0.047]
  //     ]).addTo(mymap);
  //
  //     (new ZoomViewer).addTo(mymap);
  //
  //     mymap.setView([0, 0], 1);
  //



    const iconBase =
      "http://maps.google.com/mapfiles/kml/paddle/";
    var PinIcon = L.Icon.extend({
    });
    var redIcon = new PinIcon({iconUrl: iconBase + "red-stars.png"}),
     greenIcon = new PinIcon({iconUrl: iconBase + 'grn-stars.png'}),
     pinkIcon = new PinIcon({iconUrl: iconBase + "pink-stars.png"}),
     blueIcon = new PinIcon({iconUrl: iconBase + "ltblu-stars.png"}),
     yellowIcon = new PinIcon({iconUrl: iconBase + "ylw-stars.png"}),
     purpleIcon = new PinIcon({iconUrl: iconBase + "purple-stars.png"}),
     orangeIcon = new PinIcon({iconUrl: iconBase + "orange-stars.png"});
      homeIcon = new PinIcon({iconUrl: "http://maps.google.com/mapfiles/kml/shapes/ranger_station.png"});

      L.icon = function (options) {
      return new L.Icon(options);
  };

  L.marker([40.4320628434537, 116.57048218657914], {icon: redIcon}).addTo(mymap).bindPopup("<h1> The Great Wall of China </h1>" +
  "<p> The Great Wall of China (traditional Chinese: 萬里長城; simplified Chinese: 万里长城; pinyin: Wànlǐ Chángchéng)" +
  "is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China" +
  "as protection against various nomadic groups from the Eurasian Steppe.Several walls were built from as early as the 7th" +
  "century BC, with selective stretches later joined together by Qin Shi Huang (220–206 BC), the first emperor of China. " +
  '<p>Source: <a href="https://en.wikipedia.org/wiki/Great_Wall_of_China">' +
  "https://en.wikipedia.org/wiki/Great_Wall_of_China</a> </p>" +
  '<img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/480px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg" style = "width:250px;height:200px;">');

  L.marker([27.175326128922823, 78.04213146778078], {icon: greenIcon}).addTo(mymap).bindPopup("<h1>Taj Mahal</h1>" +
  "<p> The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ-/; lit. 'Crown of the Palace', [taːdʒ ˈmɛːɦ(ə)l]), is an ivory-white marble" +
  "mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal" +
  "emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses" +
  "the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a " +
  "mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall."  +
  '<p>Source: <a href="https://en.wikipedia.org/wiki/Taj_Mahal">' +
  "https://en.wikipedia.org/wiki/Taj_Mahal</a> </p>" +
  '<img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/440px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg" style="width:250px;height:200px;">');

  L.marker([-22.951728275043124, -43.21037991379361], {icon: pinkIcon}).addTo(mymap).bindPopup("<h1> Christ the Redeemer </h1>" +
  "<p>Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ], local" +
    "pronunciation: [ˈkɾiɕtŭ̥ xe̞dẽˈtoɦ]) is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French" +
    "sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer" +
    "Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face. Constructed between 1922 and 1931, the " +
    "statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal." +
    " The arms stretch 28 metres (92 ft) wide."  +
    '<p>Source: <a href="https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)">' +
    "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)</a> </p>" +
    '<img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg/440px-Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg" style = "width:250px;height:200px;>');

      L.marker([13.16290091089782, -72.54491998693321], {icon: blueIcon}).addTo(mymap).bindPopup("<h1> Macchu Picchu </h1>" +
        "<p>Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter" +
      "(7,970 ft) mountain ridge. It is located in the Machupicchu District within Urubamba Province above the" +
      "Sacred Valley, which is 80 kilometers (50 mi) northwest of Cuzco. The Urubamba River flows past it, cutting" +
      " through the Cordillera and creating a canyon with a tropical mountain climate."  +
      '<p>Source: <a href="https://en.wikipedia.org/wiki/Machu_Picchu">' +
      "https://en.wikipedia.org/wiki/Machu_Picchu</a> </p>" +
      '<img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/600px-Machu_Picchu%2C_Peru.jpg" style = "width:250px;height:200px;>');


      L.marker([41.89032998131497, 12.492198711749825],{icon: yellowIcon},
        ).addTo(mymap).bindPopup("<h1> Colosseum </h1>" +
        "<p>The Colosseum (/ˌkɒləˈsiːəm/ KOL-ə-SEE-əm; Italian: Colosseo [kolosˈsɛːo]) is an oval amphitheatre in the centre of" +
"the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the" +
"largest standing amphitheatre in the world today, despite its age. Construction began under the emperor Vespasian" +
"(r. 69–79 AD) in 72 and was completed in 80 AD under his successor and heir, Titus (r. 79–81)"  +
'<p>Source: <a href="https://en.wikipedia.org/wiki/Colosseum">' +
"https://en.wikipedia.org/wiki/Colosseum</a> </p>" +
'<img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/500px-Colosseo_2020.jpg" style = "width:250px;height:200px;>');

       L.marker([29.97941105612817, 31.13415898135102], {icon: purpleIcon}).addTo(mymap).bindPopup('<h1>Great Pyramid of Giza</h1>' +
"<p>The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest" +
"and largest of the pyramids in the Giza pyramid complex bordering present-day Giza in Greater Cairo, Egypt." +
"It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact." +
'<p>Source: <a href="https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza">' +
"https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza</a> </p>"+
'<img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/600px-Kheops-Pyramid.jpg" style = "width:250px;height:200px;>');

       L.marker([20.68452159307718, -88.567812252978], {icon: orangeIcon}).addTo(mymap).bindPopup("<h1> Chichén Itzá </h1>" +
       "<p>Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic" +
"period. The archeological site is located in Tinúm Municipality, Yucatán State, Mexico." +
"Chichen Itza was a major focal point in the Northern Maya Lowlands from the Late Classic (c. AD 600–" +
"900) through the Terminal Classic (c. AD 800–900) and into the early portion of the Postclassic period (c."+
"AD 900–1200). " +
'<p>Source: <a href="https://en.wikipedia.org/wiki/Chichen_Itza">' +
"https://en.wikipedia.org/wiki/Chichen_Itza</a> </p>"+
'<img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/720px-Chichen_Itza_3.jpg" style = "width:250px;height:200px;">');

marker = new L.Marker([23.8103, 90.4125], {icon: homeIcon}, {bounceOnAdd: true}).addTo(mymap).bindPopup("This is my home town!");
marker.on('click', function () {
    marker.bounce({duration: 500, height: 100});
});


  var options = {
    key: geocoder_api_key,
    limit: 10
  };
  var control = L.Control.openCageSearch(options).addTo(mymap);
}
