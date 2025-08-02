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

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
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

        var lyr_ESRIGraylight_4 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIGraydark_5 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRITerrain_6 = new ol.layer.Tile({
            'title': 'ESRI Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRISatellite_7 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Vegetasi_8 = new ol.format.GeoJSON();
var features_Vegetasi_8 = format_Vegetasi_8.readFeatures(json_Vegetasi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vegetasi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vegetasi_8.addFeatures(features_Vegetasi_8);
var lyr_Vegetasi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vegetasi_8, 
                style: style_Vegetasi_8,
                popuplayertitle: 'Vegetasi',
                interactive: true,
                title: '<img src="styles/legend/Vegetasi_8.png" /> Vegetasi'
            });
var format_KawasanAreaOlahraga_9 = new ol.format.GeoJSON();
var features_KawasanAreaOlahraga_9 = format_KawasanAreaOlahraga_9.readFeatures(json_KawasanAreaOlahraga_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanAreaOlahraga_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanAreaOlahraga_9.addFeatures(features_KawasanAreaOlahraga_9);
var lyr_KawasanAreaOlahraga_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanAreaOlahraga_9, 
                style: style_KawasanAreaOlahraga_9,
                popuplayertitle: 'Kawasan Area Olahraga',
                interactive: true,
                title: '<img src="styles/legend/KawasanAreaOlahraga_9.png" /> Kawasan Area Olahraga'
            });
var format_KawasanKesehatan_10 = new ol.format.GeoJSON();
var features_KawasanKesehatan_10 = format_KawasanKesehatan_10.readFeatures(json_KawasanKesehatan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanKesehatan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanKesehatan_10.addFeatures(features_KawasanKesehatan_10);
var lyr_KawasanKesehatan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanKesehatan_10, 
                style: style_KawasanKesehatan_10,
                popuplayertitle: 'Kawasan Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/KawasanKesehatan_10.png" /> Kawasan Kesehatan'
            });
var format_KawasanPendidikan_11 = new ol.format.GeoJSON();
var features_KawasanPendidikan_11 = format_KawasanPendidikan_11.readFeatures(json_KawasanPendidikan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanPendidikan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanPendidikan_11.addFeatures(features_KawasanPendidikan_11);
var lyr_KawasanPendidikan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanPendidikan_11, 
                style: style_KawasanPendidikan_11,
                popuplayertitle: 'Kawasan Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/KawasanPendidikan_11.png" /> Kawasan Pendidikan'
            });
var format_KawasanPeribadatan_12 = new ol.format.GeoJSON();
var features_KawasanPeribadatan_12 = format_KawasanPeribadatan_12.readFeatures(json_KawasanPeribadatan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanPeribadatan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanPeribadatan_12.addFeatures(features_KawasanPeribadatan_12);
var lyr_KawasanPeribadatan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanPeribadatan_12, 
                style: style_KawasanPeribadatan_12,
                popuplayertitle: 'Kawasan Peribadatan',
                interactive: true,
                title: '<img src="styles/legend/KawasanPeribadatan_12.png" /> Kawasan Peribadatan'
            });
var format_KawasanPermukiman_13 = new ol.format.GeoJSON();
var features_KawasanPermukiman_13 = format_KawasanPermukiman_13.readFeatures(json_KawasanPermukiman_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanPermukiman_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanPermukiman_13.addFeatures(features_KawasanPermukiman_13);
var lyr_KawasanPermukiman_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanPermukiman_13, 
                style: style_KawasanPermukiman_13,
                popuplayertitle: 'Kawasan Permukiman',
                interactive: true,
                title: '<img src="styles/legend/KawasanPermukiman_13.png" /> Kawasan Permukiman'
            });
var format_Kuburan_14 = new ol.format.GeoJSON();
var features_Kuburan_14 = format_Kuburan_14.readFeatures(json_Kuburan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuburan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_14.addFeatures(features_Kuburan_14);
var lyr_Kuburan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuburan_14, 
                style: style_Kuburan_14,
                popuplayertitle: 'Kuburan',
                interactive: true,
                title: '<img src="styles/legend/Kuburan_14.png" /> Kuburan'
            });
var format_Sawah_15 = new ol.format.GeoJSON();
var features_Sawah_15 = format_Sawah_15.readFeatures(json_Sawah_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_15.addFeatures(features_Sawah_15);
var lyr_Sawah_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_15, 
                style: style_Sawah_15,
                popuplayertitle: 'Sawah',
                interactive: true,
                title: '<img src="styles/legend/Sawah_15.png" /> Sawah'
            });
var format_Sungai_16 = new ol.format.GeoJSON();
var features_Sungai_16 = format_Sungai_16.readFeatures(json_Sungai_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_16.addFeatures(features_Sungai_16);
var lyr_Sungai_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_16, 
                style: style_Sungai_16,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_16.png" /> Sungai'
            });
var format_BangunanGedung_17 = new ol.format.GeoJSON();
var features_BangunanGedung_17 = format_BangunanGedung_17.readFeatures(json_BangunanGedung_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanGedung_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanGedung_17.addFeatures(features_BangunanGedung_17);
var lyr_BangunanGedung_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanGedung_17, 
                style: style_BangunanGedung_17,
                popuplayertitle: 'Bangunan/Gedung',
                interactive: true,
                title: '<img src="styles/legend/BangunanGedung_17.png" /> Bangunan/Gedung'
            });
var format_JalanSetapak_18 = new ol.format.GeoJSON();
var features_JalanSetapak_18 = format_JalanSetapak_18.readFeatures(json_JalanSetapak_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanSetapak_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanSetapak_18.addFeatures(features_JalanSetapak_18);
var lyr_JalanSetapak_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanSetapak_18, 
                style: style_JalanSetapak_18,
                popuplayertitle: 'Jalan Setapak',
                interactive: true,
                title: '<img src="styles/legend/JalanSetapak_18.png" /> Jalan Setapak'
            });
var format_JalanLain_19 = new ol.format.GeoJSON();
var features_JalanLain_19 = format_JalanLain_19.readFeatures(json_JalanLain_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLain_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLain_19.addFeatures(features_JalanLain_19);
var lyr_JalanLain_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLain_19, 
                style: style_JalanLain_19,
                popuplayertitle: 'Jalan Lain',
                interactive: true,
                title: '<img src="styles/legend/JalanLain_19.png" /> Jalan Lain'
            });
var format_JalanLokal_20 = new ol.format.GeoJSON();
var features_JalanLokal_20 = format_JalanLokal_20.readFeatures(json_JalanLokal_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLokal_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLokal_20.addFeatures(features_JalanLokal_20);
var lyr_JalanLokal_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLokal_20, 
                style: style_JalanLokal_20,
                popuplayertitle: 'Jalan Lokal',
                interactive: true,
                title: '<img src="styles/legend/JalanLokal_20.png" /> Jalan Lokal'
            });
var format_JalanKolektor_21 = new ol.format.GeoJSON();
var features_JalanKolektor_21 = format_JalanKolektor_21.readFeatures(json_JalanKolektor_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKolektor_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKolektor_21.addFeatures(features_JalanKolektor_21);
var lyr_JalanKolektor_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKolektor_21, 
                style: style_JalanKolektor_21,
                popuplayertitle: 'Jalan Kolektor',
                interactive: true,
                title: '<img src="styles/legend/JalanKolektor_21.png" /> Jalan Kolektor'
            });
var format_BatasRTRW_22 = new ol.format.GeoJSON();
var features_BatasRTRW_22 = format_BatasRTRW_22.readFeatures(json_BatasRTRW_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasRTRW_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRTRW_22.addFeatures(features_BatasRTRW_22);
var lyr_BatasRTRW_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRTRW_22, 
                style: style_BatasRTRW_22,
                popuplayertitle: 'Batas RT/RW',
                interactive: true,
    title: 'Batas RT/RW<br />\
    <img src="styles/legend/BatasRTRW_22_0.png" /> RT. 01/05<br />\
    <img src="styles/legend/BatasRTRW_22_1.png" /> RT. 01/06<br />\
    <img src="styles/legend/BatasRTRW_22_2.png" /> RT. 02/05<br />\
    <img src="styles/legend/BatasRTRW_22_3.png" /> RT. 02/06<br />\
    <img src="styles/legend/BatasRTRW_22_4.png" /> RT. 03/06<br />' });
var format_PerangkatDesa_23 = new ol.format.GeoJSON();
var features_PerangkatDesa_23 = format_PerangkatDesa_23.readFeatures(json_PerangkatDesa_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerangkatDesa_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerangkatDesa_23.addFeatures(features_PerangkatDesa_23);
var lyr_PerangkatDesa_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerangkatDesa_23, 
                style: style_PerangkatDesa_23,
                popuplayertitle: 'Perangkat Desa',
                interactive: true,
    title: 'Perangkat Desa<br />\
    <img src="styles/legend/PerangkatDesa_23_0.png" /> Kepala Desa<br />\
    <img src="styles/legend/PerangkatDesa_23_1.png" /> Kepala Dusun<br />\
    <img src="styles/legend/PerangkatDesa_23_2.png" /> Ketua RT<br />\
    <img src="styles/legend/PerangkatDesa_23_3.png" /> Ketua RT<br />\
    <img src="styles/legend/PerangkatDesa_23_4.png" /> Ketua RT<br />\
    <img src="styles/legend/PerangkatDesa_23_5.png" /> Ketua RT<br />\
    <img src="styles/legend/PerangkatDesa_23_6.png" /> Ketua RT<br />\
    <img src="styles/legend/PerangkatDesa_23_7.png" /> Ketua RW<br />\
    <img src="styles/legend/PerangkatDesa_23_8.png" /> Ketua RW<br />\
    <img src="styles/legend/PerangkatDesa_23_9.png" /> Anggota DPRD<br />' });
var format_FasilitasUmum_24 = new ol.format.GeoJSON();
var features_FasilitasUmum_24 = format_FasilitasUmum_24.readFeatures(json_FasilitasUmum_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_24.addFeatures(features_FasilitasUmum_24);
var lyr_FasilitasUmum_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasUmum_24, 
                style: style_FasilitasUmum_24,
                popuplayertitle: 'Fasilitas Umum',
                interactive: true,
    title: 'Fasilitas Umum<br />\
    <img src="styles/legend/FasilitasUmum_24_0.png" /> Lapangan<br />\
    <img src="styles/legend/FasilitasUmum_24_1.png" /> Masjid<br />\
    <img src="styles/legend/FasilitasUmum_24_2.png" /> Musholla<br />\
    <img src="styles/legend/FasilitasUmum_24_3.png" /> Pemakaman<br />\
    <img src="styles/legend/FasilitasUmum_24_4.png" /> Pendopo<br />\
    <img src="styles/legend/FasilitasUmum_24_5.png" /> PKD<br />\
    <img src="styles/legend/FasilitasUmum_24_6.png" /> Pos Kamling<br />\
    <img src="styles/legend/FasilitasUmum_24_7.png" /> Sekolah Dasar<br />\
    <img src="styles/legend/FasilitasUmum_24_8.png" /> Taman Kanak-Kanak<br />\
    <img src="styles/legend/FasilitasUmum_24_9.png" /> TPS<br />' });
var group_Perhubungan = new ol.layer.Group({
                                layers: [lyr_JalanSetapak_18,lyr_JalanLain_19,lyr_JalanLokal_20,lyr_JalanKolektor_21,],
                                fold: 'open',
                                title: 'Perhubungan'});
var group_PenggunaanLahan = new ol.layer.Group({
                                layers: [lyr_Vegetasi_8,lyr_KawasanAreaOlahraga_9,lyr_KawasanKesehatan_10,lyr_KawasanPendidikan_11,lyr_KawasanPeribadatan_12,lyr_KawasanPermukiman_13,lyr_Kuburan_14,lyr_Sawah_15,],
                                fold: 'open',
                                title: 'Penggunaan Lahan'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleTerrain_0,lyr_GoogleLabels_1,lyr_GoogleRoad_2,lyr_GoogleHybrid_3,lyr_ESRIGraylight_4,lyr_ESRIGraydark_5,lyr_ESRITerrain_6,lyr_ESRISatellite_7,],
                                fold: 'open',
                                title: 'Basemap'});

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_GoogleRoad_2.setVisible(true);lyr_GoogleHybrid_3.setVisible(true);lyr_ESRIGraylight_4.setVisible(true);lyr_ESRIGraydark_5.setVisible(true);lyr_ESRITerrain_6.setVisible(true);lyr_ESRISatellite_7.setVisible(true);lyr_Vegetasi_8.setVisible(true);lyr_KawasanAreaOlahraga_9.setVisible(true);lyr_KawasanKesehatan_10.setVisible(true);lyr_KawasanPendidikan_11.setVisible(true);lyr_KawasanPeribadatan_12.setVisible(true);lyr_KawasanPermukiman_13.setVisible(true);lyr_Kuburan_14.setVisible(true);lyr_Sawah_15.setVisible(true);lyr_Sungai_16.setVisible(true);lyr_BangunanGedung_17.setVisible(true);lyr_JalanSetapak_18.setVisible(true);lyr_JalanLain_19.setVisible(true);lyr_JalanLokal_20.setVisible(true);lyr_JalanKolektor_21.setVisible(true);lyr_BatasRTRW_22.setVisible(true);lyr_PerangkatDesa_23.setVisible(true);lyr_FasilitasUmum_24.setVisible(true);
var layersList = [group_Basemap,group_PenggunaanLahan,lyr_Sungai_16,lyr_BangunanGedung_17,group_Perhubungan,lyr_BatasRTRW_22,lyr_PerangkatDesa_23,lyr_FasilitasUmum_24];
lyr_Vegetasi_8.set('fieldAliases', {'id': 'id', });
lyr_KawasanAreaOlahraga_9.set('fieldAliases', {'id': 'id', });
lyr_KawasanKesehatan_10.set('fieldAliases', {'id': 'id', });
lyr_KawasanPendidikan_11.set('fieldAliases', {'id': 'id', });
lyr_KawasanPeribadatan_12.set('fieldAliases', {'id': 'id', });
lyr_KawasanPermukiman_13.set('fieldAliases', {'id': 'id', });
lyr_Kuburan_14.set('fieldAliases', {'id': 'id', });
lyr_Sawah_15.set('fieldAliases', {'id': 'id', });
lyr_Sungai_16.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_BangunanGedung_17.set('fieldAliases', {'id': 'id', });
lyr_JalanSetapak_18.set('fieldAliases', {'NAMA': 'NAMA', });
lyr_JalanLain_19.set('fieldAliases', {'NAMA': 'NAMA', });
lyr_JalanLokal_20.set('fieldAliases', {'Nama': 'Nama', });
lyr_JalanKolektor_21.set('fieldAliases', {'Nama': 'Nama', });
lyr_BatasRTRW_22.set('fieldAliases', {'ID': 'ID', });
lyr_PerangkatDesa_23.set('fieldAliases', {'Tokoh': 'Tokoh', 'Tokohh': 'Tokohh', });
lyr_FasilitasUmum_24.set('fieldAliases', {'Id': 'Id', 'Keterangan': 'Keterangan', });
lyr_Vegetasi_8.set('fieldImages', {'id': 'TextEdit', });
lyr_KawasanAreaOlahraga_9.set('fieldImages', {'id': 'TextEdit', });
lyr_KawasanKesehatan_10.set('fieldImages', {'id': 'TextEdit', });
lyr_KawasanPendidikan_11.set('fieldImages', {'id': '', });
lyr_KawasanPeribadatan_12.set('fieldImages', {'id': 'TextEdit', });
lyr_KawasanPermukiman_13.set('fieldImages', {'id': 'TextEdit', });
lyr_Kuburan_14.set('fieldImages', {'id': 'TextEdit', });
lyr_Sawah_15.set('fieldImages', {'id': 'TextEdit', });
lyr_Sungai_16.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_BangunanGedung_17.set('fieldImages', {'id': 'TextEdit', });
lyr_JalanSetapak_18.set('fieldImages', {'NAMA': 'TextEdit', });
lyr_JalanLain_19.set('fieldImages', {'NAMA': 'TextEdit', });
lyr_JalanLokal_20.set('fieldImages', {'Nama': 'TextEdit', });
lyr_JalanKolektor_21.set('fieldImages', {'Nama': 'TextEdit', });
lyr_BatasRTRW_22.set('fieldImages', {'ID': 'TextEdit', });
lyr_PerangkatDesa_23.set('fieldImages', {'Tokoh': 'TextEdit', 'Tokohh': 'TextEdit', });
lyr_FasilitasUmum_24.set('fieldImages', {'Id': 'Range', 'Keterangan': 'TextEdit', });
lyr_Vegetasi_8.set('fieldLabels', {'id': 'no label', });
lyr_KawasanAreaOlahraga_9.set('fieldLabels', {'id': 'no label', });
lyr_KawasanKesehatan_10.set('fieldLabels', {'id': 'no label', });
lyr_KawasanPendidikan_11.set('fieldLabels', {'id': 'no label', });
lyr_KawasanPeribadatan_12.set('fieldLabels', {'id': 'no label', });
lyr_KawasanPermukiman_13.set('fieldLabels', {'id': 'no label', });
lyr_Kuburan_14.set('fieldLabels', {'id': 'no label', });
lyr_Sawah_15.set('fieldLabels', {'id': 'no label', });
lyr_Sungai_16.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_BangunanGedung_17.set('fieldLabels', {'id': 'no label', });
lyr_JalanSetapak_18.set('fieldLabels', {'NAMA': 'no label', });
lyr_JalanLain_19.set('fieldLabels', {'NAMA': 'no label', });
lyr_JalanLokal_20.set('fieldLabels', {'Nama': 'no label', });
lyr_JalanKolektor_21.set('fieldLabels', {'Nama': 'no label', });
lyr_BatasRTRW_22.set('fieldLabels', {'ID': 'no label', });
lyr_PerangkatDesa_23.set('fieldLabels', {'Tokoh': 'no label', 'Tokohh': 'no label', });
lyr_FasilitasUmum_24.set('fieldLabels', {'Id': 'no label', 'Keterangan': 'no label', });
lyr_FasilitasUmum_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});