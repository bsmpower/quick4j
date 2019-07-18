<%--
  Created by IntelliJ IDEA.
  User: jmc87
  Date: 2018/5/18
  Time: 22:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>水质现状报表</title>
    <link rel="stylesheet" href="app/js/3.20/dijit/themes/tundra/tundra.css">
    <link rel="stylesheet" href="app/js/3.20/esri/css/esri.css">
    <link rel="stylesheet" href="app/js/3.20/dojox/widget/ColorPicker/ColorPicker.css">
    <link rel="stylesheet" href="http://js.arcgis.com/3.20/dijit/themes/claro/claro.css">
    <link rel="stylesheet" href="https://js.arcgis.com/3.24/esri/themes/calcite/dijit/calcite.css">
    <link rel="stylesheet" href="https://js.arcgis.com/3.24/esri/themes/calcite/esri/esri.css">

    <link rel="stylesheet" type="text/css" href='app/js/jquery/themes/gray/easyui.css'>
    <link rel="stylesheet" type="text/css" href="app/js/jquery/themes/icon.css">
    <link rel="stylesheet" type="text/css" href="app/css/qmp/public.css">
    <link rel="stylesheet" type="text/css" href="app/css/qmp/qmp.css">


    <%--<script type="text/javascript" src="app/js/3.20/init.js"></script>--%>

    <script type="text/javascript" src="app/js/init-arcgis.js"></script>
    <script type="text/javascript" src='bsmassets/js/qmpTestData.js'></script>
    <script type="text/javascript" src="app/js/bootstrap-treeview.js"></script>
    <script type="text/javascript" src='app/js/jquery/jquery.easyui.min.js'></script>
    <script type="text/javascript" src='app/js/jquery/locale/easyui-lang-zh_CN.js'></script>
    <script src="https://js.arcgis.com/3.24/"></script>

    <style>
        #map {
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
    <%--<script type="text/javascript" src="app/js/3.20/init.js"></script>--%>


    <script type="text/javascript" src='bsmassets/js/qmpTestData.js'></script>
    <script type="text/javascript" src="app/js/bootstrap-treeview.js"></script>
    <script type="text/javascript" src='app/js/jquery/jquery.easyui.min.js'></script>
    <script type="text/javascript" src='app/js/jquery/locale/easyui-lang-zh_CN.js'></script>
    <script src="https://js.arcgis.com/3.24/"></script>
</head>
<body class="claro">
<div id="all">
    <div id="up">
        <div id="left">
            <div>

            </div>


            <input type="text" id="jsonInput" class="hide"/>



            <div style="margin-top: 10px;">
                <div class="box">
                    <div id="head-title">
                        <a class="" style="font-size: 15px">实测数据添加与导入</a>
                    </div>
                    <div class="flex-row">
                        <button type="button" class="btnz btnz-info"
                                data-toggle="modal" data-target="#myModal_add" id="addButton">添加
                        </button>
                        <button type="button" class="btnz btnz-info"
                                data-toggle="modal" data-target="#myModal_search" id="searchButton">查询
                        </button>
                        <button type="button" class="btn btn-primary btn-lg hide"
                                data-toggle="modal" data-target="#myModal_edit" id="editModelButton"></button>
                    </div>
                    <div class="flex" style="margin-bottom: 0px;">
                        <button type="button" class="btnz btnz-black"
                                data-toggle="modal" data-target="#myModal_bulkImport" id="bulkImportButton">批量导入
                        </button>
                        <button type="button" class="btnz btnz-black" id="exportExcel">导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出</button>
                    </div>
                </div>
                <%--<div class="box" style="align-items: flex-start;padding: 0px;border-bottom-left-radius: 0 !important;border-bottom-right-radius: 0px !important">
                    <div id="dmszsb_head" style="margin-bottom: 10px;margin-top: 10px">
                        <a style='margin-left: 10px;border-left: solid 3px #00C0C2;padding-left: 5px;font-size: 15px'>水质现状报表</a>
                    </div>
                </div>

                <div id="dmszsb_body">
                    <div class="box" style="margin-bottom: 0px;border-top-left-radius: 0 !important;border-top-right-radius: 0px !important;">
                        <div class="flex-row" style="border: none;justify-content: space-between;width: 100%;padding-left: 10px;padding-right: 10px">
                            <span>区域筛选</span>
                            <select id="szxz_region" style="background: #ffffff;width: 100px">
                                <option value="all">所有</option>
                            </select>
                        </div>

                        <div class="flex-row" style="border: none;justify-content: space-between;width: 100%;padding-left: 10px;padding-right: 10px">
                            <span>年份</span>
                            <select style="background: #ffffff;width: 100px" id="szxz_year">
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                            </select>
                        </div>
                        <div class="flex-row" style="border: none;justify-content: space-between;width: 100%;padding-left: 10px;padding-right: 10px">
                            <span>开始月份</span>
                            <select id="szxz_startm" style="background: #ffffff;width: 100px">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div class="flex-row" style="border: none;justify-content: space-between;width: 100%;padding-left: 10px;padding-right: 10px">
                            <span>结束月份</span>
                            <select id="szxz_endm" style="background: #ffffff;width: 100px">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>

                        <div class="flex-row" style="border: none;width: 100%">
                            <button type="button" class="btnz btnz-black" id="count_szxz"
                                    style="width: 243.69px;">计算
                            </button>
                        </div>
                    </div>
                </div>--%>
            </div>

        </div>
        <div id="right"  style="position:relative">
            <%--<div id="rightPane"
                 data-dojo-type="dijit/layout/ContentPane"
                 data-dojo-props="region:'right'">

                <div data-dojo-type="dijit/layout/AccordionContainer">
                    <div data-dojo-type="dijit/layout/ContentPane" id="legendPane"
                         data-dojo-props="title:'Legend', selected:true">
                        <div id="legendDiv"></div>
                    </div>
                    <div data-dojo-type="dijit/layout/ContentPane"
                         data-dojo-props="title:'Pane 2'">
                        This pane could contain tools or additional content
                    </div>
                </div>
            </div>--%>
            <div id="map" data-dojo-type="dijit/layout/ContentPane"
                 data-dojo-props="region:'center'"
                 style="overflow:hidden;height:470px;width:100%">
                <div id="qmpBilichi" class="box"
                     style="width:80px !important;height:20px !important;position:absolute;left:31px;top:400px">
                    <div class="head-title">
                        <a class="" style="font-size: 15px">比例尺</a>
                    </div>
                </div>
                <%--<div id="qmpTuli" class="box" style="width:120px !important;height:180px !important;position:absolute;right:0px;top:300px">
                    <div class="head-title">
                        <a class="" style="font-size: 15px">水质类别</a>
                    </div>
                    <div class="flex" style="margin-bottom: 0px">
                        <div style="width:15px;float:left">
                            <img src="app/img/dmcategory1_new.png" style="width:24px;height:24px"/>
                            <img src="app/img/dmcategory2.png" style="width:24px;height:24px;"/>
                            <img src="app/img/dmcategory3.png" style="width:24px;height:24px"/>
                            <img src="app/img/dmcategory4_new.png" style="width:24px;height:24px"/>
                            <img src="app/img/dmcategory5.png" style="width:24px;height:24px"/>
                            <img src="app/img/dmcategoryL5.png" style="width:24px;height:24px"/>
                        </div>
                        <div style="width:50px;float:left;margin-left:10px">
                            <p style="margin-bottom: 5px">Ⅰ</p>
                            <p style="margin-bottom: 5px">Ⅱ</p>
                            <p style="margin-bottom: 5px">Ⅲ</p>
                            <p style="margin-bottom: 5px">Ⅳ</p>
                            <p style="margin-bottom: 5px">Ⅴ</p>
                            <p style="margin-bottom: 5px">劣Ⅴ</p>
                        </div>
                    </div>
                </div>--%>
            </div>

            <%--<div id="mapexport" class="box" style="width:160px!important;height:100px !important;position:absolute;right:0px;top:10px">
                <button type="button" class="pbtn" style="font-size: 15px; width: 100px">绘制图形</button>
                <input id="Btn" type="button" style="font-size: 15px; width: 100px" value="地图打印" />
            </div>--%>
        </div>
        <div id="bookmarks"></div>
        <div id="down">
            <form action="rest/qmp/exportToExcel" method="post">
                <input id="exportToExcel" class="btn btn-success" type="submit"
                       style="display: none;background-color:#00c0c2!important;margin-bottom: 2px" value="导出Excel"/>
            </form>
            <%--<button class="btn btn-success" id="exportToExcel" style="display: none;background-color:#00c0c2!important;margin-bottom: 2px">导出Excel</button>--%>
            <div id="listAll" style="width: auto"></div>
        </div>
    </div>
</div>




</body>
</html>