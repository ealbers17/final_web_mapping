var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_og_density_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "og_density",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/og_density_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12345886.055616, 4788030.890930, -12139137.986176, 4991479.375627]
                            })
                        });
var format_two_county_boundary_2 = new ol.format.GeoJSON();
var features_two_county_boundary_2 = format_two_county_boundary_2.readFeatures(json_two_county_boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_two_county_boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_two_county_boundary_2.addFeatures(features_two_county_boundary_2);
var lyr_two_county_boundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_two_county_boundary_2, 
                style: style_two_county_boundary_2,
                interactive: false,
                title: '<img src="styles/legend/two_county_boundary_2.png" /> two_county_boundary'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_og_density_1.setVisible(true);lyr_two_county_boundary_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_og_density_1,lyr_two_county_boundary_2];
lyr_two_county_boundary_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTYNBR': 'COUNTYNBR', 'ENTITYNBR': 'ENTITYNBR', 'ENTITYYR': 'ENTITYYR', 'NAME': 'NAME', 'FIPS': 'FIPS', 'STATEPLANE': 'STATEPLANE', 'POP_LASTCE': 'POP_LASTCE', 'POP_CURRES': 'POP_CURRES', 'GlobalID': 'GlobalID', 'FIPS_STR': 'FIPS_STR', 'COLOR4': 'COLOR4', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_two_county_boundary_2.set('fieldImages', {'OBJECTID': 'Range', 'COUNTYNBR': 'TextEdit', 'ENTITYNBR': 'TextEdit', 'ENTITYYR': 'TextEdit', 'NAME': 'TextEdit', 'FIPS': 'TextEdit', 'STATEPLANE': 'TextEdit', 'POP_LASTCE': 'Range', 'POP_CURRES': 'Range', 'GlobalID': 'TextEdit', 'FIPS_STR': 'TextEdit', 'COLOR4': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_two_county_boundary_2.set('fieldLabels', {'OBJECTID': 'no label', 'COUNTYNBR': 'no label', 'ENTITYNBR': 'no label', 'ENTITYYR': 'no label', 'NAME': 'no label', 'FIPS': 'no label', 'STATEPLANE': 'no label', 'POP_LASTCE': 'no label', 'POP_CURRES': 'no label', 'GlobalID': 'no label', 'FIPS_STR': 'no label', 'COLOR4': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_two_county_boundary_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});