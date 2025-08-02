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

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
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

        var lyr_ESRISatellite_3 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Vegetasi_4 = new ol.format.GeoJSON();
var features_Vegetasi_4 = format_Vegetasi_4.readFeatures(json_Vegetasi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vegetasi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vegetasi_4.addFeatures(features_Vegetasi_4);
var lyr_Vegetasi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vegetasi_4, 
                style: style_Vegetasi_4,
                popuplayertitle: 'Vegetasi',
                interactive: true,
                title: '<img src="styles/legend/Vegetasi_4.png" /> Vegetasi'
            });
var format_KawasanAreaOlahraga_5 = new ol.format.GeoJSON();
var features_KawasanAreaOlahraga_5 = format_KawasanAreaOlahraga_5.readFeatures(json_KawasanAreaOlahraga_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanAreaOlahraga_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanAreaOlahraga_5.addFeatures(features_KawasanAreaOlahraga_5);
var lyr_KawasanAreaOlahraga_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanAreaOlahraga_5, 
                style: style_KawasanAreaOlahraga_5,
                popuplayertitle: 'Kawasan Area Olahraga',
                interactive: true,
                title: '<img src="styles/legend/KawasanAreaOlahraga_5.png" /> Kawasan Area Olahraga'
            });
var format_KawasanKesehatan_6 = new ol.format.GeoJSON();
var features_KawasanKesehatan_6 = format_KawasanKesehatan_6.readFeatures(json_KawasanKesehatan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanKesehatan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanKesehatan_6.addFeatures(features_KawasanKesehatan_6);
var lyr_KawasanKesehatan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanKesehatan_6, 
                style: style_KawasanKesehatan_6,
                popuplayertitle: 'Kawasan Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/KawasanKesehatan_6.png" /> Kawasan Kesehatan'
            });
var format_KawasanPendidikan_7 = new ol.format.GeoJSON();
var features_KawasanPendidikan_7 = format_KawasanPendidikan_7.readFeatures(json_KawasanPendidikan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanPendidikan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanPendidikan_7.addFeatures(features_KawasanPendidikan_7);
var lyr_KawasanPendidikan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanPendidikan_7, 
                style: style_KawasanPendidikan_7,
                popuplayertitle: 'Kawasan Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/KawasanPendidikan_7.png" /> Kawasan Pendidikan'
            });
var format_KawasanPeribadatan_8 = new ol.format.GeoJSON();
var features_KawasanPeribadatan_8 = format_KawasanPeribadatan_8.readFeatures(json_KawasanPeribadatan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanPeribadatan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanPeribadatan_8.addFeatures(features_KawasanPeribadatan_8);
var lyr_KawasanPeribadatan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanPeribadatan_8, 
                style: style_KawasanPeribadatan_8,
                popuplayertitle: 'Kawasan Peribadatan',
                interactive: true,
                title: '<img src="styles/legend/KawasanPeribadatan_8.png" /> Kawasan Peribadatan'
            });
var format_KawasanPermukiman_9 = new ol.format.GeoJSON();
var features_KawasanPermukiman_9 = format_KawasanPermukiman_9.readFeatures(json_KawasanPermukiman_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanPermukiman_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanPermukiman_9.addFeatures(features_KawasanPermukiman_9);
var lyr_KawasanPermukiman_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanPermukiman_9, 
                style: style_KawasanPermukiman_9,
                popuplayertitle: 'Kawasan Permukiman',
                interactive: true,
                title: '<img src="styles/legend/KawasanPermukiman_9.png" /> Kawasan Permukiman'
            });
var format_Kuburan_10 = new ol.format.GeoJSON();
var features_Kuburan_10 = format_Kuburan_10.readFeatures(json_Kuburan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuburan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_10.addFeatures(features_Kuburan_10);
var lyr_Kuburan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuburan_10, 
                style: style_Kuburan_10,
                popuplayertitle: 'Kuburan',
                interactive: true,
                title: '<img src="styles/legend/Kuburan_10.png" /> Kuburan'
            });
var format_Sawah_11 = new ol.format.GeoJSON();
var features_Sawah_11 = format_Sawah_11.readFeatures(json_Sawah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_11.addFeatures(features_Sawah_11);
var lyr_Sawah_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_11, 
                style: style_Sawah_11,
                popuplayertitle: 'Sawah',
                interactive: true,
                title: '<img src="styles/legend/Sawah_11.png" /> Sawah'
            });
var format_Sungai_12 = new ol.format.GeoJSON();
var features_Sungai_12 = format_Sungai_12.readFeatures(json_Sungai_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_12.addFeatures(features_Sungai_12);
var lyr_Sungai_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_12, 
                style: style_Sungai_12,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_12.png" /> Sungai'
            });
var format_BangunanGedung_13 = new ol.format.GeoJSON();
var features_BangunanGedung_13 = format_BangunanGedung_13.readFeatures(json_BangunanGedung_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanGedung_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanGedung_13.addFeatures(features_BangunanGedung_13);
var lyr_BangunanGedung_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanGedung_13, 
                style: style_BangunanGedung_13,
                popuplayertitle: 'Bangunan/Gedung',
                interactive: true,
                title: '<img src="styles/legend/BangunanGedung_13.png" /> Bangunan/Gedung'
            });
var format_JalanSetapak_14 = new ol.format.GeoJSON();
var features_JalanSetapak_14 = format_JalanSetapak_14.readFeatures(json_JalanSetapak_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanSetapak_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanSetapak_14.addFeatures(features_JalanSetapak_14);
var lyr_JalanSetapak_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanSetapak_14, 
                style: style_JalanSetapak_14,
                popuplayertitle: 'Jalan Setapak',
                interactive: true,
                title: '<img src="styles/legend/JalanSetapak_14.png" /> Jalan Setapak'
            });
var format_JalanLain_15 = new ol.format.GeoJSON();
var features_JalanLain_15 = format_JalanLain_15.readFeatures(json_JalanLain_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLain_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLain_15.addFeatures(features_JalanLain_15);
var lyr_JalanLain_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLain_15, 
                style: style_JalanLain_15,
                popuplayertitle: 'Jalan Lain',
                interactive: true,
                title: '<img src="styles/legend/JalanLain_15.png" /> Jalan Lain'
            });
var format_JalanLokal_16 = new ol.format.GeoJSON();
var features_JalanLokal_16 = format_JalanLokal_16.readFeatures(json_JalanLokal_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLokal_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLokal_16.addFeatures(features_JalanLokal_16);
var lyr_JalanLokal_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLokal_16, 
                style: style_JalanLokal_16,
                popuplayertitle: 'Jalan Lokal',
                interactive: true,
                title: '<img src="styles/legend/JalanLokal_16.png" /> Jalan Lokal'
            });
var format_JalanKolektor_17 = new ol.format.GeoJSON();
var features_JalanKolektor_17 = format_JalanKolektor_17.readFeatures(json_JalanKolektor_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKolektor_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKolektor_17.addFeatures(features_JalanKolektor_17);
var lyr_JalanKolektor_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKolektor_17, 
                style: style_JalanKolektor_17,
                popuplayertitle: 'Jalan Kolektor',
                interactive: true,
                title: '<img src="styles/legend/JalanKolektor_17.png" /> Jalan Kolektor'
            });
var format_BatasRTRW_18 = new ol.format.GeoJSON();
var features_BatasRTRW_18 = format_BatasRTRW_18.readFeatures(json_BatasRTRW_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasRTRW_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRTRW_18.addFeatures(features_BatasRTRW_18);
var lyr_BatasRTRW_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRTRW_18, 
                style: style_BatasRTRW_18,
                popuplayertitle: 'Batas RT/RW',
                interactive: true,
    title: 'Batas RT/RW<br />\
    <img src="styles/legend/BatasRTRW_18_0.png" /> RT. 01/05<br />\
    <img src="styles/legend/BatasRTRW_18_1.png" /> RT. 01/06<br />\
    <img src="styles/legend/BatasRTRW_18_2.png" /> RT. 02/05<br />\
    <img src="styles/legend/BatasRTRW_18_3.png" /> RT. 02/06<br />\
    <img src="styles/legend/BatasRTRW_18_4.png" /> RT. 03/06<br />' });
var format_PerangkatDesa_19 = new ol.format.GeoJSON();
var features_PerangkatDesa_19 = format_PerangkatDesa_19.readFeatures(json_PerangkatDesa_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerangkatDesa_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerangkatDesa_19.addFeatures(features_PerangkatDesa_19);
var lyr_PerangkatDesa_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerangkatDesa_19, 
                style: style_PerangkatDesa_19,
                popuplayertitle: 'Perangkat Desa',
                interactive: true,
    title: 'Perangkat Desa<br />\
    <img src="styles/legend/PerangkatDesa_19_0.png" /> Kepala Desa<br />\
    <img src="styles/legend/PerangkatDesa_19_1.png" /> Kepala Dusun<br />\
    <img src="styles/legend/PerangkatDesa_19_2.png" /> Ketua RT 1/5<br />\
    <img src="styles/legend/PerangkatDesa_19_3.png" /> Ketua RT 1/6<br />\
    <img src="styles/legend/PerangkatDesa_19_4.png" /> Ketua RT 2/5<br />\
    <img src="styles/legend/PerangkatDesa_19_5.png" /> Ketua RT 2/6<br />\
    <img src="styles/legend/PerangkatDesa_19_6.png" /> Ketua RT 3/6<br />\
    <img src="styles/legend/PerangkatDesa_19_7.png" /> Ketua RW 5<br />\
    <img src="styles/legend/PerangkatDesa_19_8.png" /> Ketua RW 6<br />' });
var format_FasilitasUmum_20 = new ol.format.GeoJSON();
var features_FasilitasUmum_20 = format_FasilitasUmum_20.readFeatures(json_FasilitasUmum_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_20.addFeatures(features_FasilitasUmum_20);
var lyr_FasilitasUmum_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasUmum_20, 
                style: style_FasilitasUmum_20,
                popuplayertitle: 'Fasilitas Umum',
                interactive: true,
    title: 'Fasilitas Umum<br />\
    <img src="styles/legend/FasilitasUmum_20_0.png" /> Lapangan<br />\
    <img src="styles/legend/FasilitasUmum_20_1.png" /> Masjid<br />\
    <img src="styles/legend/FasilitasUmum_20_2.png" /> Musholla<br />\
    <img src="styles/legend/FasilitasUmum_20_3.png" /> Pemakaman<br />\
    <img src="styles/legend/FasilitasUmum_20_4.png" /> Pendopo<br />\
    <img src="styles/legend/FasilitasUmum_20_5.png" /> PKD<br />\
    <img src="styles/legend/FasilitasUmum_20_6.png" /> Pos Kamling<br />\
    <img src="styles/legend/FasilitasUmum_20_7.png" /> Sekolah Dasar<br />\
    <img src="styles/legend/FasilitasUmum_20_8.png" /> Taman Kanak-Kanak<br />\
    <img src="styles/legend/FasilitasUmum_20_9.png" /> TPS<br />' });
var group_Perhubungan = new ol.layer.Group({
                                layers: [lyr_JalanSetapak_14,lyr_JalanLain_15,lyr_JalanLokal_16,lyr_JalanKolektor_17,],
                                fold: 'open',
                                title: 'Perhubungan'});
var group_PenggunaanLahan = new ol.layer.Group({
                                layers: [lyr_Vegetasi_4,lyr_KawasanAreaOlahraga_5,lyr_KawasanKesehatan_6,lyr_KawasanPendidikan_7,lyr_KawasanPeribadatan_8,lyr_KawasanPermukiman_9,lyr_Kuburan_10,lyr_Sawah_11,],
                                fold: 'open',
                                title: 'Penggunaan Lahan'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleTerrain_0,lyr_GoogleRoad_1,lyr_GoogleHybrid_2,lyr_ESRISatellite_3,],
                                fold: 'open',
                                title: 'Basemap'});

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_ESRISatellite_3.setVisible(true);lyr_Vegetasi_4.setVisible(true);lyr_KawasanAreaOlahraga_5.setVisible(true);lyr_KawasanKesehatan_6.setVisible(true);lyr_KawasanPendidikan_7.setVisible(true);lyr_KawasanPeribadatan_8.setVisible(true);lyr_KawasanPermukiman_9.setVisible(true);lyr_Kuburan_10.setVisible(true);lyr_Sawah_11.setVisible(true);lyr_Sungai_12.setVisible(true);lyr_BangunanGedung_13.setVisible(true);lyr_JalanSetapak_14.setVisible(true);lyr_JalanLain_15.setVisible(true);lyr_JalanLokal_16.setVisible(true);lyr_JalanKolektor_17.setVisible(true);lyr_BatasRTRW_18.setVisible(true);lyr_PerangkatDesa_19.setVisible(true);lyr_FasilitasUmum_20.setVisible(true);
var layersList = [group_Basemap,group_PenggunaanLahan,lyr_Sungai_12,lyr_BangunanGedung_13,group_Perhubungan,lyr_BatasRTRW_18,lyr_PerangkatDesa_19,lyr_FasilitasUmum_20];
lyr_Vegetasi_4.set('fieldAliases', {'id': 'id', });
lyr_KawasanAreaOlahraga_5.set('fieldAliases', {'id': 'id', });
lyr_KawasanKesehatan_6.set('fieldAliases', {'id': 'id', });
lyr_KawasanPendidikan_7.set('fieldAliases', {'id': 'id', });
lyr_KawasanPeribadatan_8.set('fieldAliases', {'id': 'id', });
lyr_KawasanPermukiman_9.set('fieldAliases', {'id': 'id', });
lyr_Kuburan_10.set('fieldAliases', {'id': 'id', });
lyr_Sawah_11.set('fieldAliases', {'id': 'id', });
lyr_Sungai_12.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_BangunanGedung_13.set('fieldAliases', {'id': 'id', });
lyr_JalanSetapak_14.set('fieldAliases', {'NAMA': 'NAMA', });
lyr_JalanLain_15.set('fieldAliases', {'NAMA': 'NAMA', });
lyr_JalanLokal_16.set('fieldAliases', {'Nama': 'Nama', });
lyr_JalanKolektor_17.set('fieldAliases', {'Nama': 'Nama', });
lyr_BatasRTRW_18.set('fieldAliases', {'ID': 'ID', });
lyr_PerangkatDesa_19.set('fieldAliases', {'Tokoh': 'Tokoh', 'Tokohh': 'Tokohh', });
lyr_FasilitasUmum_20.set('fieldAliases', {'Id': 'Id', 'Keterangan': 'Keterangan', });
lyr_Vegetasi_4.set('fieldImages', {'id': 'TextEdit', });
lyr_KawasanAreaOlahraga_5.set('fieldImages', {'id': 'TextEdit', });
lyr_KawasanKesehatan_6.set('fieldImages', {'id': 'TextEdit', });
lyr_KawasanPendidikan_7.set('fieldImages', {'id': 'TextEdit', });
lyr_KawasanPeribadatan_8.set('fieldImages', {'id': 'TextEdit', });
lyr_KawasanPermukiman_9.set('fieldImages', {'id': 'TextEdit', });
lyr_Kuburan_10.set('fieldImages', {'id': 'TextEdit', });
lyr_Sawah_11.set('fieldImages', {'id': 'TextEdit', });
lyr_Sungai_12.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_BangunanGedung_13.set('fieldImages', {'id': 'TextEdit', });
lyr_JalanSetapak_14.set('fieldImages', {'NAMA': 'TextEdit', });
lyr_JalanLain_15.set('fieldImages', {'NAMA': 'TextEdit', });
lyr_JalanLokal_16.set('fieldImages', {'Nama': 'TextEdit', });
lyr_JalanKolektor_17.set('fieldImages', {'Nama': 'TextEdit', });
lyr_BatasRTRW_18.set('fieldImages', {'ID': 'TextEdit', });
lyr_PerangkatDesa_19.set('fieldImages', {'Tokoh': 'TextEdit', 'Tokohh': 'TextEdit', });
lyr_FasilitasUmum_20.set('fieldImages', {'Id': 'Range', 'Keterangan': 'TextEdit', });
lyr_Vegetasi_4.set('fieldLabels', {'id': 'no label', });
lyr_KawasanAreaOlahraga_5.set('fieldLabels', {'id': 'no label', });
lyr_KawasanKesehatan_6.set('fieldLabels', {'id': 'no label', });
lyr_KawasanPendidikan_7.set('fieldLabels', {'id': 'no label', });
lyr_KawasanPeribadatan_8.set('fieldLabels', {'id': 'no label', });
lyr_KawasanPermukiman_9.set('fieldLabels', {'id': 'no label', });
lyr_Kuburan_10.set('fieldLabels', {'id': 'no label', });
lyr_Sawah_11.set('fieldLabels', {'id': 'no label', });
lyr_Sungai_12.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_BangunanGedung_13.set('fieldLabels', {'id': 'no label', });
lyr_JalanSetapak_14.set('fieldLabels', {'NAMA': 'no label', });
lyr_JalanLain_15.set('fieldLabels', {'NAMA': 'no label', });
lyr_JalanLokal_16.set('fieldLabels', {'Nama': 'no label', });
lyr_JalanKolektor_17.set('fieldLabels', {'Nama': 'no label', });
lyr_BatasRTRW_18.set('fieldLabels', {'ID': 'no label', });
lyr_PerangkatDesa_19.set('fieldLabels', {'Tokoh': 'no label', 'Tokohh': 'no label', });
lyr_FasilitasUmum_20.set('fieldLabels', {'Id': 'no label', 'Keterangan': 'no label', });
lyr_FasilitasUmum_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});