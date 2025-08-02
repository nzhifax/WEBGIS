var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_2 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_3 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BatasRT_4 = new ol.format.GeoJSON();
var features_BatasRT_4 = format_BatasRT_4.readFeatures(json_BatasRT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasRT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRT_4.addFeatures(features_BatasRT_4);
var lyr_BatasRT_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRT_4, 
                style: style_BatasRT_4,
                popuplayertitle: 'Batas RT',
                interactive: true,
    title: 'Batas RT<br />\
    <img src="styles/legend/BatasRT_4_0.png" /> <br />\
    <img src="styles/legend/BatasRT_4_1.png" /> RT. 01/05<br />\
    <img src="styles/legend/BatasRT_4_2.png" /> RT. 01/06<br />\
    <img src="styles/legend/BatasRT_4_3.png" /> RT. 02/05<br />\
    <img src="styles/legend/BatasRT_4_4.png" /> RT. 02/06<br />\
    <img src="styles/legend/BatasRT_4_5.png" /> RT. 03/06<br />' });

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleRoad_2.setVisible(true);lyr_GoogleHybrid_3.setVisible(true);lyr_BatasRT_4.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleSatellite_1,lyr_GoogleRoad_2,lyr_GoogleHybrid_3,lyr_BatasRT_4];
lyr_BatasRT_4.set('fieldAliases', {'ID': 'ID', });
lyr_BatasRT_4.set('fieldImages', {'ID': 'TextEdit', });
lyr_BatasRT_4.set('fieldLabels', {'ID': 'no label', });
lyr_BatasRT_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});