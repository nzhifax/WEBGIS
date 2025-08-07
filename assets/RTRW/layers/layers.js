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

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_3 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_4 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RTRW_5 = new ol.format.GeoJSON();
var features_RTRW_5 = format_RTRW_5.readFeatures(json_RTRW_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTRW_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTRW_5.addFeatures(features_RTRW_5);
var lyr_RTRW_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTRW_5, 
                style: style_RTRW_5,
                popuplayertitle: 'RT/RW',
                interactive: true,
    title: 'RT/RW<br />\
    <img src="styles/legend/RTRW_5_0.png" /> RT. 01/05<br />\
    <img src="styles/legend/RTRW_5_1.png" /> RT. 01/06<br />\
    <img src="styles/legend/RTRW_5_2.png" /> RT. 02/05<br />\
    <img src="styles/legend/RTRW_5_3.png" /> RT. 02/06<br />\
    <img src="styles/legend/RTRW_5_4.png" /> RT. 03/06<br />' });
var format_BatasRT_6 = new ol.format.GeoJSON();
var features_BatasRT_6 = format_BatasRT_6.readFeatures(json_BatasRT_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasRT_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRT_6.addFeatures(features_BatasRT_6);
var lyr_BatasRT_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRT_6, 
                style: style_BatasRT_6,
                popuplayertitle: 'Batas RT',
                interactive: true,
                title: '<img src="styles/legend/BatasRT_6.png" /> Batas RT'
            });
var format_BatasRW_7 = new ol.format.GeoJSON();
var features_BatasRW_7 = format_BatasRW_7.readFeatures(json_BatasRW_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasRW_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRW_7.addFeatures(features_BatasRW_7);
var lyr_BatasRW_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRW_7, 
                style: style_BatasRW_7,
                popuplayertitle: 'Batas RW',
                interactive: true,
                title: '<img src="styles/legend/BatasRW_7.png" /> Batas RW'
            });
var group_BatasAdministrasi = new ol.layer.Group({
                                layers: [lyr_BatasRT_6,lyr_BatasRW_7,],
                                fold: 'open',
                                title: 'Batas Administrasi'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleTerrain_0,lyr_GoogleSatellite_1,lyr_GoogleHybrid_2,lyr_GoogleRoad_3,lyr_OSMStandard_4,],
                                fold: 'open',
                                title: 'Basemap'});

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_GoogleRoad_3.setVisible(true);lyr_OSMStandard_4.setVisible(true);lyr_RTRW_5.setVisible(true);lyr_BatasRT_6.setVisible(true);lyr_BatasRW_7.setVisible(true);
var layersList = [group_Basemap,lyr_RTRW_5,group_BatasAdministrasi];
lyr_RTRW_5.set('fieldAliases', {'ID': 'ID', });
lyr_BatasRT_6.set('fieldAliases', {'ID': 'ID', });
lyr_BatasRW_7.set('fieldAliases', {'NAMA': 'NAMA', });
lyr_RTRW_5.set('fieldImages', {'ID': 'TextEdit', });
lyr_BatasRT_6.set('fieldImages', {'ID': 'TextEdit', });
lyr_BatasRW_7.set('fieldImages', {'NAMA': 'TextEdit', });
lyr_RTRW_5.set('fieldLabels', {'ID': 'no label', });
lyr_BatasRT_6.set('fieldLabels', {'ID': 'inline label - always visible', });
lyr_BatasRW_7.set('fieldLabels', {'NAMA': 'inline label - always visible', });
lyr_BatasRW_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});