var extents = {
    tieling: [121.683328, 41.840331, 126.582710, 43.573067],
    huludao: [118.172417, 39.834530, 122.336235, 41.369228],
    chaoyang: [117.205270, 40.391405, 123.074377, 42.504821],
    panjin: [120.835854, 40.610362, 123.252882, 41.494596],
    yingkou: [120.694250, 39.753728, 124.190971, 41.048150],
    jinzhou: [119.431423, 40.729618, 123.581508, 42.211277],
    dandong: [122.309634, 39.673381, 126.586062, 41.213798],
    benxi: [123.398631, 40.740022, 125.936511, 41.637172],
    fushun: [122.925499, 41.209812, 126.512294, 42.482913],
    anshan: [120.654886, 40.025895, 125.149073, 41.654445],
    liaoyang: [121.430973, 40.460256, 125.309147, 41.800736],
    fuxin: [119.195495, 41.535575, 124.155844, 43.299593],
    shenyang: [120.344180, 41.038634, 126.162792, 43.148180]
};
initMap();
var map, layer, graphicLayer;
var html = "";

html += "<table class='table-striped table-hover table-bordered'>";
html += "<tr><td>所在市</td><td>${city}</td></tr>";
html += "<tr><td>排污口编号</td><td>${pwkCode}</td></tr>";
html += "<tr><td>排污口名称</td><td>${pwkName}</td></tr>";
html += "<tr><td>所在县</td><td>${county}</td></tr>";
html += "<tr><td>经度</td><td>${longitude}</td></tr>";
html += "<tr><td>纬度</td><td>${latitude}</td></tr>";
html += "</table>";

$(function () {
    //第一个按钮功能 显示所有不符合标准的排污口信息
    $("#suyuanStart").click(function () {
       //获取到条件值
        var urlsuyuan = "rest/analyze/suyuan";
        var t = $("form").serializeArray();
        var jcyear = t[0].value;
        var type = t[1].value;
        var line = t[2].value;
        var pwktype = t[3].value;

        var data = {
            "jcyear":jcyear,
            "type":type,
            "line":line,
            "pwktype":pwktype
        };
       //转入到后台

        $.ajax({
            url:urlsuyuan,
            type:"POST",
            data:data,
            dataType:"json",
            success:function (data) {
                if (data == "") {
                    alert("全部符合条件");
                    // $("#myModal").remove();
                } else {
                    alert(111);
                    console.log(data);
                    updatePoint(data);
                }
            }
        })
    });

    $("#reset").click(function () {
        $("#pwk0").val("");
        $("#pwk1").val("");
        $("#pwk2").val("");
    });
})
function initMap() {
    require([
        "esri/map",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/geometry/Point", "esri/SpatialReference",
        "esri/symbols/PictureMarkerSymbol",
        "esri/graphic",
        "esri/geometry/Extent",
        "esri/InfoTemplate"
    ], function (Map,
                 ArcGISDynamicMapServiceLayer,
                 Point,
                 SpatialReference,
                 PictureMarkerSymbol,
                 Graphic,
                 Extent,
                 InfoTemplate) {
        var extent = new Extent(117.309229, 39.137731, 129.957720, 43.380153);
        map = new Map("map222", {
            "spatialReference": {
                "wkid": 4326
            },
            //basemap: "topo",
            logo: false,
            extent: extent,
            //这个是表明地图上的地点
            showLabels: true,
            zoom: 12,
            maxZoom: 16
        });

        //全部单元
        var layerUrl = "http://202.199.6.100:6080/arcgis/rest/services/liaoheliuyu/MapServer/8";
        featureLayer = new esri.layers.FeatureLayer(layerUrl, {
            mode: esri.layers.FeatureLayer.MODE_SNAPSHOT,
            outFields: ["*"],
            hasAttributionData: true
        });
        map.addLayer(featureLayer, 100);

        // 河流
        // var layerUrl_2 = "http://202.199.6.100:6080/arcgis/rest/services/liaoheliuyu/MapServer/5";
        // featureLayer_2 = new esri.layers.FeatureLayer(layerUrl_2, {
        //     mode: esri.layers.FeatureLayer.MODE_SNAPSHOT,
        //     outFields: ["*"],
        //     hasAttributionData: true
        // });
        // map.addLayer(featureLayer_2, 2);


        layer = new ArcGISDynamicMapServiceLayer("http://202.199.6.100:6080/arcgis/rest/services/liaoheliuyu/MapServer");
        layer.setVisibleLayers([0, 9]);
        map.addLayer(layer, 0);
        graphicLayer = new esri.layers.GraphicsLayer();
        map.addLayer(graphicLayer);
    });
}

function extent(str){
    switch (str) {
        case '辽宁省':
            var extent = new esri.geometry.Extent(117.309229, 39.137731, 129.957720, 43.380153);
            map.setExtent(extent);
            break;
        case '鞍山市':
        case '海城市':
        case '千山区':
        case '铁西区':
        case '铁东区':
        case '立山区':
        case '鞍山高新产业技术开发区':
//case '铁东区':
//case '铁西区':
        case '千山区':
        case '台安县':
        case '海城市':
//case '海城市':
//case '千山区':
        case '台安':
//case '铁西区':
//case '铁东区':
            console.log('鞍山');
            var extent = new esri.geometry.Extent(extents.anshan[0], extents.anshan[1], extents.anshan[2], extents.anshan[3]);
            map.setExtent(extent);
            break;
        case '辽阳市':
        case '灯塔市':
        case '辽阳县':
        case '文圣区':
        case '宏伟区':
//case '文圣区':
//case '宏伟区':
        case '弓长岭':
        case '太子河':
//case '辽阳县':
//case '灯塔市':
//case '辽阳县':
//case '灯塔市':
//case '文圣区':
        case '太子河区':
        case '宏伟':
        case '太子区':
            console.log('辽阳');
            var extent = new esri.geometry.Extent(extents.liaoyang[0], extents.liaoyang[1], extents.liaoyang[2], extents.liaoyang[3]);
            map.setExtent(extent);
            break;
        case '阜新市':
            console.log('阜新');
            var extent = new esri.geometry.Extent(extents.fuxin[0], extents.fuxin[1], extents.fuxin[2], extents.fuxin[3]);
            map.setExtent(extent);
            break;
        case '盘锦市':
        case '盘山县':
        case '兴隆台区':
        case '大洼县':
        case '双台子区':
//case '双台子区':
        case '兴隆台':
//case '大洼县':
//case '盘山县':
//case '盘山县':
        case '大洼':
        case '辽河口生态经济区':
//case '双台子区':
//case '兴隆台区':
            var extent = new esri.geometry.Extent(extents.panjin[0], extents.panjin[1], extents.panjin[2], extents.panjin[3]);
            map.setExtent(extent);
            break;
        case '锦州市':
        case '义县':
        case '凌海':
        case '黑山':
        case '北镇':
        case '太和区':
        case '松山新区':
            var extent = new esri.geometry.Extent(extents.jinzhou[0], extents.jinzhou[1], extents.jinzhou[2], extents.jinzhou[3]);
            map.setExtent(extent);
            break;
        case '朝阳市':
        case '双塔区':
        case '北票市':
        case '喀左县':
        case '朝阳县':
            var extent = new esri.geometry.Extent(extents.chaoyang[0], extents.chaoyang[1], extents.chaoyang[2], extents.chaoyang[3]);
            map.setExtent(extent);
            break;
        case '铁岭市':
        case '昌图县':
        case '高新技术产业开发区':
        case '开原市':
        case '清河区':
        case '调兵山市':
        case '铁岭县':
        case '西丰县':
        case '银州区':
//case '银州区':
//case '清河区':
        case '西丰':
//case '昌图县':
//case '调兵山市':
        case '开原':
        case '西丰县':
//case '开原市':
        case '昌图':
//case '铁岭县':
//case '调兵山市':
//case '银州区':
        case '开原市万丰生猪养殖场':
        case '开原维民种猪场':
        case '清河':
        case '铁岭经济开发区':
            var extent = new esri.geometry.Extent(extents.tieling[0], extents.tieling[1], extents.tieling[2], extents.tieling[3]);
            map.setExtent(extent);
            break;
        case '沈阳市':
        case '东陵区':
        case '蒲河新城':
        case '沈阳经济技术开发区':
        case '新民市':
        case '于洪区':
        case '苏家屯区':
        case '康平县':
        case '沈北新区':
        case '沈河区':
        case '大东':
        case '苏家屯区':
        case '浑南新区':
//case '东陵区':
//case '沈北新区':
//case '于洪区':
        case '皇姑区':
        case '辽中县':
//case '沈阳经济技术开发区':
        case '棋盘山开发区':
        case '新民':
//case '东陵区':
//case '沈北新区':
//case '于洪区':
//case '新民':
//case '沈阳经济技术开发区':
        case '法库':
        case '辽中':
//case '康平县':
        case '苏家屯':
            var extent = new esri.geometry.Extent(extents.shenyang[0], extents.shenyang[1], extents.shenyang[2], extents.shenyang[3]);
            map.setExtent(extent);
            break;
        case '葫芦岛市':
        case '建昌县':
            var extent = new esri.geometry.Extent(extents.huludao[0], extents.huludao[1], extents.huludao[2], extents.huludao[3]);
            map.setExtent(extent);
            break;
        case '营口市':
        case '营口市区':
        case '大石桥市':
            var extent = new esri.geometry.Extent(extents.yingkou[0], extents.yingkou[1], extents.yingkou[2], extents.yingkou[3]);
            map.setExtent(extent);
            break;
        case '丹东市':
        case '宽甸县':
        case '振兴区':
        case '东港市':

            var extent = new esri.geometry.Extent(extents.dandong[0], extents.dandong[1], extents.dandong[2], extents.dandong[3]);
            map.setExtent(extent);
            break;
        case '本溪市':
        case '平山区':
        case '溪湖区':
        case '本溪满族自治县':
        case '明山区':
        case '南芬区':
        case '本溪市高新技术产业开发区':
        case '平山':
//case '本溪满族自治县':
        case '溪湖':
        case '本溪':
        case '明山':
//case '南芬区':
        case '高新区':
            var extent = new esri.geometry.Extent(extents.benxi[0], extents.benxi[1], extents.benxi[2], extents.benxi[3]);
            map.setExtent(extent);
            break;
        case '抚顺市':
        case '清原满族自治县':
        case '顺城区':
        case '新宾满族自治县':
        case '清原':
        case '东洲区':
        case '望花区':
        case '抚顺县':
        case '新抚区':
//case '新抚区':
//case '望花区':
//case '顺城区':
//case '新宾满族自治县':
//case '清原满族自治县':
//case '新宾满族自治县':
//case '抚顺县':
            var extent = new esri.geometry.Extent(extents.fushun[0], extents.fushun[1], extents.fushun[2], extents.fushun[3]);
            map.setExtent(extent);
            break;
    }
};

function updatePoint(data){
    require([
        "esri/geometry/Point",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/PictureMarkerSymbol",
        "esri/graphic",
        "esri/InfoTemplate"
    ], function (Point,
                 SimpleMarkerSymbol,
                 PictureMarkerSymbol,
                 Graphic,
                 InfoTemplate) {
        var lon = "";
        var lat = "";
        var attr = "";
        graphicLayer.clear();
        for (var i = 0; i < data.length; i++) {
            lon = data[i].longitude;
            lat = data[i].latitude;
            attr = {
                "city":data[i].city,
                "pwkCode":data[i].pwkCode,
                "pwkName":data[i].pwkName,
                "county":data[i].county,
                "longitude":data[i].longitude,
                "latitude":data[i].latitude,

            };
            console.log(lon);
            var point = new Point(lon, lat, map.spatialReference);
            var infoTemplate = new InfoTemplate("不达标排污口位置信息", html);
            var symbol1 = new PictureMarkerSymbol("app/img/location.png", 16, 16);
            var graphic = new Graphic(point, symbol1, attr, infoTemplate);
            graphicLayer.add(graphic);
        }
    });
}