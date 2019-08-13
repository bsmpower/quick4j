<%--
  Created by IntelliJ IDEA.
  User: Deity
  Date: 2019/8/7
  Time: 10:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>多排污口分析</title>
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
    <link rel="stylesheet" href="app/js/3.20/esri/css/esri.css">

    <script type="text/javascript" src="app/js/echart/echarts-all.js"></script>
    <script type="text/javascript" src="bsmassets/js/echart/mulpwkanalyze.js"></script>
</head>
<body>
<div id="echart">
    <div class="row">
        <div class="col-lg-4">
            <%--输入排放口名称，排放口类型。--%>
            <%--监测指标多选，监测年份，监测月份。--%>
                <button id="mulpwkanalyze" type="button" class="btn btn-primary">多排污口分析</button>
        </div>
        <div class="col-lg-8">
            <div id="map222" data-dojo-type="dijit/layout/ContentPane"
                 data-dojo-props="region:'center'"
                 style="overflow:hidden;height:430px;width:100%;margin-left: 3%;">

            </div>
        </div>
    </div>
</div>
<div>
    <div class="table-cont" id="table-cont">
        <table class="table table-striped table-bordered table-hover  table-condensed" id="tablediv">
            <thead>
            <tr class="success">
                <th>选择</th><th>ID</th><th>编辑</th><th>删除</th><th id="nameth">排污口名称</th><th id="typeth">排污口类型</th><th>相关区域</th><th>年</th><th>月</th><th>不达标指标类型</th><th>数值</th>
            </thead>
            <tbody id="tbodyone">
            </tbody>
        </table>
    </div>
</div>
<div class="modal fade" id="mulModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:900px">
        <div class="modal-content">
            <form class="bs-example bs-example-form" role="form" id="addform3">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <div>
                        <h4 class="modal-title" id="myModalLabel3" style="display:inline-block">多排污口分析</h4>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="input-group">
                        <span class="input-group-addon">排污口名称</span>
                        <input id="pwkname" name="tjyear" type="text" class="form-control" placeholder="请输入指定的排污口名称">
                        <span class="input-group-addon">所属排污口类别</span>

                        <select id="mulpwkType" name="pwkType" class="form-control" onchange="editpre()">
                            <option value=""></option>
                            <option value="工业废水排污口">工业废水排污口</option>
                            <option value="工业生活混合污水排污口">工业生活混合污水排污口</option>
                            <option value="生活污水排污口">生活污水排污口</option>
                            <option value="畜禽养殖排污口">畜禽养殖排污口</option>
                            <option value="农田退水入海口">农田退水入海口</option>
                            <option value="水产养殖排污口">水产养殖排污口</option>
                            <option value="雨污混合排污口">雨污混合排污口</option>
                            <option value="雨水排污口">雨水排污口</option>
                            <option value="泄洪口">泄洪口</option>
                            <option value="其他">其他</option>
                        </select>
                        <span id="addmul" onclick="addmessage()" class="input-group-addon glyphicon glyphicon-plus" aria-hidden="true" style="cursor:pointer;">

                        </span>
                        <%--<div id="addpwk" type="button" class="btn btn-default">--%>
                        <%--<span class=" glyphicon glyphicon-plus" aria-hidden="true" ></span>--%>
                        <%--</div>--%>


                    </div>
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
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon">监测年份</span>
                        <input id="pwk7" name="tjmonth" list="mulyearlist" type="text" class="form-control"
                               placeholder="请选择监测年份">
                        <datalist id="mulyearlist">
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                        </datalist>
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon">监测月份</span>
                        <input id="pwk8" name="tjmonth" list="mulmonthlist" type="text" class="form-control"
                               placeholder="请选择监测月份">
                        <datalist id="mulmonthlist">
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
                        </datalist>
                    </div>
                    <br>
                    <div class="input-group">
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox1" value="option1" onclick="exe()"> 盐度
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox2" value="option2" onclick="exe()"> 化学需氧量
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox3" value="option3" onclick="exe()"> 氨氮
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox4" value="option4" onclick="exe()"> 总磷
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox5" value="option5" onclick="exe()"> 总氮
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox6" value="option6" onclick="exe()"> 六价铬
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox7" value="option7" onclick="exe()"> 氰化物(
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox8" value="option8" onclick="exe()"> 粪大肠菌群数
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox9" value="option9" onclick="exe()"> 五日生化需氧量
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox10" value="option10" onclick="exe()"> 悬浮物
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox11" value="option11" onclick="exe()"> 石油类
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox12" value="option12" onclick="exe()"> 动植物油
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox13" value="option13" onclick="exe()"> 挥发酚
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox14" value="option14" onclick="exe()"> 总砷
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox15" value="option15" onclick="exe()"> 总汞
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox16" value="option16" onclick="exe()"> 总铅
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox17" value="option17" onclick="exe()"> 总镉
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox18" value="option18" onclick="exe()"> PH值
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox19" value="option19" onclick="exe()"> 氯化物
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox20" value="option20" onclick="exe()"> 硫化物
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox21" value="option21" onclick="exe()"> 阴离子表面活性剂
                            </label>
                    </div>
                    <div id="zhibiao_1"></div>
                    <div id="zhibiao_2"></div>
                    <div id="zhibiao_3"></div>
                    <div id="zhibiao_4"></div>
                    <div id="zhibiao_5"></div>
                    <div id="zhibiao_6"></div>
                    <div id="zhibiao_7"></div>
                    <div id="zhibiao_8"></div>
                    <div id="zhibiao_9"></div>
                    <div id="zhibiao_10"></div>
                    <div id="zhibiao_11"></div>
                    <div id="zhibiao_12"></div>
                    <div id="zhibiao_13"></div>
                    <div id="zhibiao_14"></div>
                    <div id="zhibiao_15"></div>
                    <div id="zhibiao_16"></div>
                    <div id="zhibiao_17"></div>
                    <div id="zhibiao_18"></div>
                    <div id="zhibiao_19"></div>
                    <div id="zhibiao_20"></div>
                    <div id="zhibiao_21"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary"  id="mulpwkfx">提交</button>
                </div>
            </form>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
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
        var val17 = document.getElementById("inlineCheckbox17").checked;
        var val18 = document.getElementById("inlineCheckbox18").checked;
        var val19 = document.getElementById("inlineCheckbox19").checked;
        var val20 = document.getElementById("inlineCheckbox20").checked;
        var val21 = document.getElementById("inlineCheckbox21").checked;

        if (val1 == true) {
            var temp1 = "<div class=\"input-group\">\n" +
                "                                    <span class=\"input-group-addon\">统计年份</span>\n" +
                "                                    <input id=\"select0\" name=\"tjyear\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "                                    <span class=\"input-group-addon\">注释</span>\n" +
                "                                </div>"
            $("#zhibiao_1").html(temp1);
            $("#zhibiao_1").show();
        }
        if (val1 == false) {
            $("#zhibiao_1").hide();
        }
        if (val2 == true) {

        }
        if (val2 == false) {

        }
        if (val3 == true) {

        }
        if (val3 == false) {

        }
        if (val4 == true) {

        }
        if (val4 == false) {

        }
        if (val5 == true) {

        }
        if (val5 == false) {

        }
        if (val6 == true) {

        }
        if (val6 == false) {

        }
        if (val7 == true) {

        }
        if (val7 == false) {

        }
        if (val8 == true) {

        }
        if (val8 == false) {

        }
        if (val9 == true) {

        }
        if (val9 == false) {

        }
        if (val10 == true) {

        }
        if (val10 == false) {

        }
        if (val11 == true) {

        }
        if (val11 == false) {

        }
        if (val12 == true) {

        }
        if (val12 == false) {

        }
        if (val13 == true) {

        }
        if (val13 == false) {

        }
        if (val14 == true) {

        }
        if (val14 == false) {

        }
        if (val15 == true) {

        }
        if (val15 == false) {

        }
        if (val16 == true) {

        }
        if (val16 == false) {

        }
        if (val17 == true) {

        }
        if (val17 == false) {

        }
        if (val18 == true) {

        }
        if (val18 == false) {

        }
        if (val19 == true) {

        }
        if (val20 == false) {
            $("#div_19").hide();
        }
        if (val20 == true) {

        }
        if (val20 == false) {
            $("#div_19").hide();
        }
        if (val21 == true) {

        }
        if (val21 == false) {

        }
    }
</script>
</body>
</html>
