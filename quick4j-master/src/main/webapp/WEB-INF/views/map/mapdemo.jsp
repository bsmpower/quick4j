<%--
  Created by IntelliJ IDEA.
  User: Deity
  Date: 2019/7/14
  Time: 9:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no">
    <title>Home Extent</title>
    <link rel="stylesheet" href="https://js.arcgis.com/3.29/esri/css/esri.css">
    <style>
        html, body, #map {
            padding:0;
            margin:0;
            height:100%;
        }
        #HomeButton {
            position: absolute;
            top: 95px;
            left: 20px;
            z-index: 50;
        }
    </style>
    <script src="https://js.arcgis.com/3.29/"></script>
    <script>

        require([
            "esri/map",
            "esri/dijit/HomeButton",
            "dojo/domReady!"
        ], function(
            Map, HomeButton
        )  {

            var map = new Map("map", {
                center: [-56.049, 38.485],
                zoom: 3,
                basemap: "streets"
            });

            var home = new HomeButton({
                map: map
            }, "HomeButton");
            home.startup();

        });
    </script>
</head>
<body>
<div id="map" class="map">
    <div id="HomeButton"></div>
</div>
</body>
</html>

