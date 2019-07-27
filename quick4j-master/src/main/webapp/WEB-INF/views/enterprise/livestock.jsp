<%--
  Created by IntelliJ IDEA.
  User: shellywood
  Date: 2019/7/9
  Time: 15:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <style type="text/css">
        .table-cont {
            max-height: 300px;
            overflow: auto;
        }

        .table > tbody > tr > td,
        .table > tbody > tr > th,
        .table > thead > tr > td,
        .table > thead > tr > th {
            border: 1px solid #C1C1C1;
            white-space: nowrap;
            font-weight: 400;
            text-align: center;
            vertical-align: middle;
            padding: 8px
        }

        .table {
            border-top: 0px;
        }

        .table > thead > .success > th {
            background-color: #eee;
            position: relative
        }

        .table thead tr th {
            height: 50px;
            z-index: 998
        }
    </style>

    <link rel="stylesheet" href="http://js.arcgis.com/3.20/dijit/themes/claro/claro.css">
    <link rel="stylesheet" href="https://js.arcgis.com/3.24/esri/themes/calcite/dijit/calcite.css">
    <link rel="stylesheet" href="https://js.arcgis.com/3.24/esri/themes/calcite/esri/esri.css">
    
    <script src="bsmassets/js/enterprise/livestock.js"></script>
    <script type="text/javascript" src='bsmassets/js/qmpTestData.js'></script>
</head>
<body>
<!--地图区域-->
<div id="left"></div>
<div id="right">
    <div id="map222" data-dojo-type="dijit/layout/ContentPane"
         data-dojo-props="region:'center'"
         style="overflow:hidden;height:470px;width:100%;margin-left: 12%;">

    </div>
</div>
<!--具体操作区域-->
<div id="toolbar" class="btn-group">
    <button id="btn_show" type="button" class="btn btn btn-primary">
        <span class="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span>
    </button>
    <button id="btn_add" type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">
        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
    </button>
    <button id="btn_edit" type="button" class="btn btn-default" data-toggle="modal" data-target="editModel">
        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改
    </button>
    <button id="btn_delete" type="button" class="btn btn-default" data-toggle="modal" data-target="myModalsearch">
        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
    </button>
    <button id="btn_search" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-search" aria-hidden="true"></span>搜索
    </button>
    <button id="btn_excelout" type="button" class="btn btn btn-primary">
        <span class="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span>数据导出
    </button>
    <button id="btn_excelin" type="button" class="btn btn btn-primary">
        <span class="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span>数据导入
    </button>
</div>
<!--数据显示区域-->
<div id="table-cont" class="table-cont">
    <table class="table table-striped table-bordered table-hover  table-condensed" id="tablediv">
        <thead>
        <tr class="success">
            <th>选择</th><th>ID</th><th>编辑</th><th>删除</th><th>统计年份</th><th>统计月份</th><th>统计日</th><th>单位名称</th><th>单位统一社会信用代码</th><th>所在市</th><th>所在县(市/区)</th><th>所在乡镇</th><th>详细地址</th><th>经度(E)</th>
            <th>纬度(N)</th><th>污水处理设施名称</th><th>污水处理设施设计规模(万吨/日)</th><th>日均废水排放量(吨/日)</th><th>年均废水排放量(吨/年)</th><th>年废水排放时间(天)</th>
        </tr>
        </thead>
        <tbody id="tbodyone">
        </tbody>
    </table>
</div>
<!--添加新的数据-->
<div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" data-backdrop="static"
         aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h4 class="modal-title" id="myModalLabel">
                        添加工业生活企业信息
                    </h4>
                </div>
                <div class="modal-body">
                    <form class="bs-example bs-example-form" role="form">
                        <div class="input-group">
                            <span class="input-group-addon">统计年份</span>
                            <input name="tjyear" type="text" class="form-control" placeholder="统计年份">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">统计月份</span>
                            <input name="tjmonth" type="text" class="form-control" placeholder="统计月份">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">统计日</span>
                            <input name="tjday" type="text" class="form-control" placeholder="统计日">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">单位名称</span>
                            <input name="name" type="text" class="form-control" placeholder="单位名称">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">单位统一社会信用代码</span>
                            <input name="usccCode" type="text" class="form-control" placeholder="单位统一社会信用代码">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">所在市</span>
                            <input name="city" type="text" class="form-control" placeholder="所在市">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">所在县(市/区)</span>
                            <input name="county" type="text" class="form-control" placeholder="所在县(市/区)">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">所在乡镇</span>
                            <input name="village" type="text" class="form-control" placeholder="所在乡镇">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">详细地址</span>
                            <input name="address" type="text" class="form-control" placeholder="详细地址">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">经度(E)</span>
                            <input name="longitude" type="text" class="form-control" placeholder="经度(E)">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">纬度(N)</span>
                            <input name="latitude" type="text" class="form-control" placeholder="纬度(N)">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">污水处理设施名称</span>
                            <input name="facilitiesName" type="text" class="form-control" placeholder="污水处理设施名称">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">污水处理设施设计规模(万吨/日)</span>
                            <input name="sjgm" type="text" class="form-control" placeholder="污水处理设施设计规模(万吨/日)">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">日均废水排放量(吨/日)</span>
                            <input name="dailyEmission" type="text" class="form-control" placeholder="日均废水排放量(吨/日)">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">年均废水排放量(吨/年)</span>
                            <input name="annualEmission" type="text" class="form-control" placeholder="年均废水排放量(吨/年)">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">年废水排放时间(天)</span>
                            <input name="emissionDays" type="text" class="form-control" placeholder="年废水排放时间(天)">
                            <span class="input-group-addon">注释</span>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="closeMod" type="button" class="btn btn-default" data-dismiss="modal">关闭
                    </button>
                    <button id="submitLivestock" type="button" class="btn btn-primary" data-dismiss="modal">
                        提交
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<!--修改数据信息-->
<div>
    <div class="modal fade" id="editModel" tabindex="-1" role="dialog" data-backdrop="static"
         aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel1">
                        更新工业生活企业信息
                    </h4>
                </div>
                <div class="modal-body">
                    <form class="bs-example bs-example-form" role="form">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">统计年份</span>
                                        <input id="tjyear_changed" name="tjyear" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">统计月份</span>
                                        <input id="tjmonth_changed" name="tjmonth" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">统计日</span>
                                        <input id="tjday_changed" name="tjday" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">单位名称</span>
                                        <input id="name_changed" name="name" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">单位统一社会信用代码</span>
                                        <input id="usccCode_changed" name="usccCode" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">所在市</span>
                                        <input id="city_changed" name="city" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">所在县(市/区)</span>
                                        <input id="county_changed" name="county" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">所在乡镇</span>
                                        <input id="village_changed" name="village" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">详细地址</span>
                                        <input id="address_changed" name="address" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">经度(E)</span>
                                        <input id="longitude_changed" name="longitude" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>

                                    <div class="input-group">
                                        <span class="input-group-addon">纬度(N)</span>
                                        <input id="latitude_changed" name="latitude" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">污水处理设施名称</span>
                                        <input id="facilitiesName_changed" name="facilitiesName" type="text"
                                               class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">污水处理设施设计规模(万吨/日)</span>
                                        <input id="sjgm_changed" name="sjgm" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">日均废水排放量(吨/日)</span>
                                        <input id="dailyEmission_changed" name="dailyEmission" type="text"
                                               class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">年均废水排放量(吨/年)</span>
                                        <input id="annualEmission_changed" name="annualEmission" type="text"
                                               class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">年废水排放时间(天)</span>
                                        <input id="emissionDays_changed" name="emissionDays" type="text"
                                               class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="closeMod" type="button" class="btn btn-default" data-dismiss="modal">关闭
                    </button>
                    <button id="editLivestock" type="button" class="btn btn-primary" data-dismiss="modal">
                        提交更改
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<!--多条件查询-->
<div>
    <div class="modal fade" id="myModalsearch" tabindex="-1" role="dialog" data-backdrop="static"
         aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" >
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel2">
                        请选择搜索条件
                    </h4>
                </div>
                <div class="modal-body">
                    <div>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox1" value="option1" onclick="exe()"> 统计年份
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox2" value="option2" onclick="exe()"> 统计月份
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox3" value="option3" onclick="exe()"> 统计日
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox4" value="option4" onclick="exe()"> 单位名称
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox5" value="option5" onclick="exe()"> 单位统一社会信用代码
                        </label>
                    </div>
                    <br>
                    <div>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox6" value="option6" onclick="exe()"> 所在市
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox7" value="option7" onclick="exe()"> 所在县(市/区)
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox8" value="option8" onclick="exe()"> 所在乡镇
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox9" value="option9" onclick="exe()"> 详细地址
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox10" value="option10" onclick="exe()"> 经度(E)
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox11" value="option11" onclick="exe()"> 纬度(N)
                        </label>
                    </div>
                    <br>
                    <div>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox12" value="option12" onclick="exe()"> 污水处理设施名称
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox13" value="option13" onclick="exe()">
                            污水处理设施设计规模(万吨/日)
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox14" value="option14" onclick="exe()"> 日均废水排放量(吨/日)
                        </label>
                    </div>
                    <br>
                    <div>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox15" value="option15" onclick="exe()"> 年均废水排放量(吨/年)
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox16" value="option16" onclick="exe()"> 年废水排放时间(天)
                        </label>
                    </div>
                </div>
                <br>
                <div id="div_0"></div>
                <div id="div_1"></div>
                <div id="div_2"></div>
                <div id="div_3"></div>
                <div id="div_4"></div>
                <div id="div_5"></div>
                <div id="div_6"></div>
                <div id="div_7"></div>
                <div id="div_8"></div>
                <div id="div_9"></div>
                <div id="div_10"></div>
                <div id="div_11"></div>
                <div id="div_12"></div>
                <div id="div_13"></div>
                <div id="div_14"></div>
                <div id="div_15"></div>
                <div id="div_16"></div>
                <div class="modal-footer">
                    <button id="closeMod" type="button" class="btn btn-default" data-dismiss="modal">关闭
                    </button>
                    <button id="searchLivestock" type="button" class="btn btn-primary" data-dismiss="modal">
                        提交更改
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    function exe() {
        var val1 = document.getElementById("inlineCheckbox1").checked;
        var val2 = document.getElementById("inlineCheckbox2").checked;
        var val3 = document.getElementById("inlineCheckbox3").checked;
        var val4 = document.getElementById("inlineCheckbox4").checked;
        var val5 = document.getElementById("inlineCheckbox5").checked;
        var val6 = document.getElementById("inlineCheckbox6").checked;
        var val7 = document.getElementById("inlineCheckbox7").checked;
        var val8 = document.getElementById("inlineCheckbox8").checked;
        var val9 = document.getElementById("inlineCheckbox9").checked;
        var val10 = document.getElementById("inlineCheckbox10").checked;
        var val11 = document.getElementById("inlineCheckbox11").checked;
        var val12 = document.getElementById("inlineCheckbox12").checked;
        var val13 = document.getElementById("inlineCheckbox13").checked;
        var val14 = document.getElementById("inlineCheckbox14").checked;
        var val15 = document.getElementById("inlineCheckbox15").checked;
        var val16 = document.getElementById("inlineCheckbox16").checked;

        if (val1 == true) {
            var temp1 = "<div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">统计年份</span>\n" +
                "<input id=\"select0\" name=\"tjyear\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_0").html(temp1);
            $("#div_0").show();
        }
        if (val1 == false) {
            $("#div_0").hide();
        }
        if (val2 == true) {
            var temp2 = " <div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">统计月份</span>\n" +
                "<input id=\"select1\" name=\"tjmonth\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_1").html(temp2);
            $("#div_1").show();
        }
        if (val2 == false) {
            $("#div_1").hide();
        }
        if (val3 == true) {
            var temp3 = " <div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">统计日</span>\n" +
                "<input id=\"select2\" name=\"tjday\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_2").html(temp3);
            $("#div_2").show();
        }
        if (val3 == false) {
            $("#div_2").hide();
        }
        if (val4 == true) {
            var temp4 = "<div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">单位名称</span>\n" +
                "<input id=\"select3\" name=\"name\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_3").html(temp4);
            $("#div_3").show();
        }
        if (val4 == false) {
            $("#div_3").hide();
        }
        if (val5 == true) {
            var temp5 = "<div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">单位统一社会信用代码</span>\n" +
                "<input id=\"select4\" name=\"usccCode\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_4").html(temp5);
            $("#div_4").show();
        }
        if (val5 == false) {
            $("#div_4").hide();
        }
        if (val6 == true) {
            var temp6 = "<div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">所在市</span>\n" +
                "<input id=\"select5\" name=\"city\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_5").html(temp6);
            $("#div_5").show();
        }
        if (val6 == false) {
            $("#div_5").hide();
        }
        if (val7 == true) {
            var temp7 = "<div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">所在县(市/区)</span>\n" +
                "<input id=\"select6\" name=\"county\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_6").html(temp7);
            $("#div_6").show();
        }
        if (val7 == false) {
            $("#div_6").hide();
        }
        if (val8 == true) {
            var temp8 = "   <div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">所在乡镇</span>\n" +
                "<input id=\"select7\" name=\"village\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_7").html(temp8);
            $("#div_7").show();
        }
        if (val8 == false) {
            $("#div_7").hide();
        }
        if (val9 == true) {
            var temp9 = "     <div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">详细地址</span>\n" +
                "<input id=\"select8\" name=\"address\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_8").html(temp9);
            $("#div_8").show();
        }
        if (val9 == false) {
            $("#div_8").hide();
        }
        if (val10 == true) {
            var temp10 = "    <div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">经度(E)</span>\n" +
                "<input id=\"select9\" name=\"longitude\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_9").html(temp10);
            $("#div_9").show();
        }
        if (val10 == false) {
            $("#div_9").hide();
        }
        if (val11 == true) {
            var temp11 = "<div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">纬度(N)</span>\n" +
                "<input id=\"select10\" name=\"latitude\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_10").html(temp11);
            $("#div_10").show();
        }
        if (val11 == false) {
            $("#div_10").hide();
        }
        if (val12 == true) {
            var temp12 = "<div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">污水处理设施名称</span>\n" +
                "<input id=\"select11\" name=\"facilitiesName\" type=\"text\" class=\"form-control\"\n" +
                "placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_11").html(temp12);
            $("#div_11").show();
        }
        if (val12 == false) {
            $("#div_11").hide();
        }
        if (val13 == true) {
            var temp13 = "<div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">污水处理设施设计规模(万吨/日)</span>\n" +
                "<input id=\"select12\" name=\"sjgm\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_12").html(temp13);
            $("#div_12").show();
        }
        if (val13 == false) {
            $("#div_12").hide();
        }
        if (val14 == true) {
            var temp14 = "<div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">日均废水排放量(吨/日)</span>\n" +
                "<input id=\"select13\" name=\"dailyEmission\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_13").html(temp14);
            $("#div_13").show();
        }
        if (val14 == false) {
            $("#div_13").hide();
        }
        if (val15 == true) {
            var temp15 = "<div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">年均废水排放量(吨/年)</span>\n" +
                "<input id=\"select14\" name=\"annualEmission\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_14").html(temp15);
            $("#div_14").show();
        }
        if (val15 == false) {
            $("#div_14").hide();
        }
        if (val16 == true) {
            var temp16 = "<div class=\"input-group\">\n" +
                "<span class=\"input-group-addon\">年废水排放时间(天)</span>\n" +
                "<input id=\"select15\" name=\"emissionDays\" type=\"text\" class=\"form-control\"\n" +
                "placeholder=\"\">\n" +
                "<span class=\"input-group-addon\">注释</span>\n" +
                "</div>"
            $("#div_15").html(temp16);
            $("#div_15").show();
        }
        if (val16 == false) {
            $("#div_15").hide();
        }
    }
</script>

</body>
</html>