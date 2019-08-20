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
        <div class="col-lg-2">
            <%--输入排放口名称，排放口类型。--%>
            <%--监测指标多选，监测年份，监测月份。--%>
                <div class="input-group">
                    <button id="mulpwkanalyze" type="button" class="btn btn-primary">单排污口多指标分析</button>
                </div>
                <div class="input-group">
                     <button id="mulpwkanalyze1" type="button" class="btn btn-primary">多排污口多指标分析</button>
                </div>
        </div>
        <div class="col-lg-10">
            <div id="main" style="width: 800px;height:500px;margin-left:60px;"></div>
            <script type="text/javascript">
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '排污口全指标达标情况'
                    },
                    tooltip: {},
                    legend: {
                        data: ['折线图', '柱状图']
                    },
                    xAxis: {
                        data: ["盐度", "", "化学需氧量", "氨氮", "总磷", "总氮"]
                    },
                    yAxis: {},
                    series: [{
                        name: '折线图',
                        type: 'line',
                        data: [5, 20, 36, 10, 10, 20]
                    }, {
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20],
                        name: '柱状图',
                        barWidth: 20,
                        itemStyle: {
                            color: 'orange',
                            opacity: 0.5
                        }
                    }]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            </script>
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

                        <select id="mulpwkType" name="pwkType" class="form-control">
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
                                <input type="checkbox" id="inlineCheckbox7" value="option7" onclick="exe()"> 氰化物
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
                    <button type="button" class="btn btn-default" data-dismiss="modal" id="close">关闭</button>
                    <button type="button" class="btn btn-primary"  id="mulpwkfx">提交</button>
                </div>
            </form>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>
<div class="modal fade" id="mulModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:900px">
        <div class="modal-content">
            <form class="bs-example bs-example-form" role="form" id="addform4">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <div>
                        <h4 class="modal-title" id="myModalLabel4" style="display:inline-block">多排污口分析</h4>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="input-group">
                        <span class="input-group-addon">排污口名称</span>
                        <input id="pwkname1" name="tjyear" type="text" class="form-control" placeholder="请输入指定的排污口名称">
                        <span class="input-group-addon">所属排污口类别</span>

                        <select id="mulpwkType1" name="pwkType" class="form-control">
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
                        <span id="addmul1" onclick="addmessage()" class="input-group-addon glyphicon glyphicon-plus" aria-hidden="true" style="cursor:pointer;">

                        </span>
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
                        <input id="pwk9" name="tjmonth" list="mulyearlist1" type="text" class="form-control"
                               placeholder="请选择监测年份">
                        <datalist id="mulyearlist1">
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
                        <input id="pwk10" name="tjmonth" list="mulmonthlist1" type="text" class="form-control"
                               placeholder="请选择监测月份">
                        <datalist id="mulmonthlist1">
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
                            <input type="checkbox" id="mulinlineCheckbox1" value="option1" onclick="exe1()"> 盐度
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox2" value="option2" onclick="exe1()"> 化学需氧量
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox3" value="option3" onclick="exe1()"> 氨氮
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox4" value="option4" onclick="exe1()"> 总磷
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox5" value="option5" onclick="exe1()"> 总氮
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox6" value="option6" onclick="exe1()"> 六价铬
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox7" value="option7" onclick="exe1()"> 氰化物
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox8" value="option8" onclick="exe1()"> 粪大肠菌群数
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox9" value="option9" onclick="exe1()"> 五日生化需氧量
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox10" value="option10" onclick="exe1()"> 悬浮物
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox11" value="option11" onclick="exe1()"> 石油类
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox12" value="option12" onclick="exe1()"> 动植物油
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox13" value="option13" onclick="exe1()"> 挥发酚
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox14" value="option14" onclick="exe1()"> 总砷
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox15" value="option15" onclick="exe1()"> 总汞
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox16" value="option16" onclick="exe1()"> 总铅
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox17" value="option17" onclick="exe1()"> 总镉
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox18" value="option18" onclick="exe1()"> PH值
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox19" value="option19" onclick="exe1()"> 氯化物
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox20" value="option20" onclick="exe1()"> 硫化物
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="mulinlineCheckbox21" value="option21" onclick="exe1()"> 阴离子表面活性剂
                        </label>
                    </div>
                    <div id="mulzhibiao_1"></div>
                    <div id="mulzhibiao_2"></div>
                    <div id="mulzhibiao_3"></div>
                    <div id="mulzhibiao_4"></div>
                    <div id="mulzhibiao_5"></div>
                    <div id="mulzhibiao_6"></div>
                    <div id="mulzhibiao_7"></div>
                    <div id="mulzhibiao_8"></div>
                    <div id="mulzhibiao_9"></div>
                    <div id="mulzhibiao_10"></div>
                    <div id="mulzhibiao_11"></div>
                    <div id="mulzhibiao_12"></div>
                    <div id="mulzhibiao_13"></div>
                    <div id="mulzhibiao_14"></div>
                    <div id="mulzhibiao_15"></div>
                    <div id="mulzhibiao_16"></div>
                    <div id="mulzhibiao_17"></div>
                    <div id="mulzhibiao_18"></div>
                    <div id="mulzhibiao_19"></div>
                    <div id="mulzhibiao_20"></div>
                    <div id="mulzhibiao_21"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" id="mulclose">关闭</button>
                    <button type="button" class="btn btn-primary"  id="mulpwkfx1">提交</button>
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
            var temp1 = "<span id=\"select1\" class=\"input-group-addon\">盐度</span>";
            $("#zhibiao_1").html(temp1);
            $("#zhibiao_1").show();
        }
        if (val1 == false) {
            $("#zhibiao_1").hide();
        }
        if (val2 == true) {
            var temp2 = "<span id=\"select2\" class=\"input-group-addon\">化学需氧量</span>";
            $("#zhibiao_2").html(temp2);
            $("#zhibiao_2").show();
        }
        if (val2 == false) {
            $("#zhibiao_2").hide();
        }
        if (val3 == true) {
            var temp3 = "<span id=\"select3\" class=\"input-group-addon\">氨氮</span>";
            $("#zhibiao_3").html(temp3);
            $("#zhibiao_3").show();
        }
        if (val3 == false) {
            $("#zhibiao_3").hide();
        }
        if (val4 == true) {
            var temp4 = "<span id=\"select4\" class=\"input-group-addon\">总磷</span>";
            $("#zhibiao_4").html(temp4);
            $("#zhibiao_4").show();
        }
        if (val4 == false) {
            $("#zhibiao_4").hide();
        }
        if (val5 == true) {
            var temp5 = "<span id=\"select5\" class=\"input-group-addon\">总氮</span>";
            $("#zhibiao_5").html(temp5);
            $("#zhibiao_5").show();
        }
        if (val5 == false) {
            $("#zhibiao_5").hide();
        }
        if (val6 == true) {
            var temp6 = "<span id=\"select6\" class=\"input-group-addon\">六价铬</span>";
            $("#zhibiao_6").html(temp6);
            $("#zhibiao_6").show();
        }
        if (val6 == false) {
            $("#zhibiao_6").hide();
        }
        if (val7 == true) {
            var temp7 = "<span id=\"select7\" class=\"input-group-addon\">氰化物</span>";
            $("#zhibiao_7").html(temp7);
            $("#zhibiao_7").show();
        }
        if (val7 == false) {
            $("#zhibiao_7").hide();
        }
        if (val8 == true) {
            var temp8 = "<span id=\"select8\" class=\"input-group-addon\">粪大肠菌群数</span>";
            $("#zhibiao_8").html(temp8);
            $("#zhibiao_8").show();
        }
        if (val8 == false) {
            $("#zhibiao_8").hide();
        }
        if (val9 == true) {
            var temp9 = "<span id=\"select9\" class=\"input-group-addon\">五日生化需氧量</span>";
            $("#zhibiao_9").html(temp9);
            $("#zhibiao_9").show();
        }
        if (val9 == false) {
            $("#zhibiao_9").hide();
        }
        if (val10 == true) {
            var temp10 = "<span id=\"select10\" class=\"input-group-addon\">悬浮物</span>";
            $("#zhibiao_10").html(temp10);
            $("#zhibiao_10").show();
        }
        if (val10 == false) {
            $("#zhibiao_10").hide();
        }
        if (val11 == true) {
            var temp11 = "<span id=\"select11\" class=\"input-group-addon\">石油类</span>";
            $("#zhibiao_11").html(temp11);
            $("#zhibiao_11").show();
        }
        if (val11 == false) {
            $("#zhibiao_11").hide();
        }
        if (val12 == true) {
            var temp12 = "<span id=\"select12\" class=\"input-group-addon\"动植物油</span>";
            $("#zhibiao_12").html(temp12);
            $("#zhibiao_12").show();
        }
        if (val12 == false) {
            $("#zhibiao_12").hide();
        }
        if (val13 == true) {
            var temp13 = "<span id=\"select13\" class=\"input-group-addon\">挥发酚</span>";
            $("#zhibiao_13").html(temp13);
            $("#zhibiao_13").show();
        }
        if (val13 == false) {
            $("#zhibiao_13").hide();
        }
        if (val14 == true) {
            var temp14 = "<span id=\"select14\" class=\"input-group-addon\">总砷</span>";
            $("#zhibiao_14").html(temp14);
            $("#zhibiao_14").show();
        }
        if (val14 == false) {
            $("#zhibiao_14").hide();
        }
        if (val15 == true) {
            var temp15 = "<span id=\"select15\" class=\"input-group-addon\">总汞</span>";
            $("#zhibiao_15").html(temp15);
            $("#zhibiao_15").show();
        }
        if (val15 == false) {
            $("#zhibiao_15").hide();
        }
        if (val16 == true) {
            var temp16 = "<span id=\"select16\" class=\"input-group-addon\">总铅</span>";
            $("#zhibiao_16").html(temp16);
            $("#zhibiao_16").show();
        }
        if (val16 == false) {
            $("#zhibiao_16").hide();
        }
        if (val17 == true) {
            var temp17 = "<span id=\"select17\" class=\"input-group-addon\">总镉</span>";
            $("#zhibiao_17").html(temp17);
            $("#zhibiao_17").show();
        }
        if (val17 == false) {
            $("#zhibiao_17").hide();
        }
        if (val18 == true) {
            var temp18 = "<span id=\"select18\" class=\"input-group-addon\">PH值</span>";
            $("#zhibiao_18").html(temp18);
            $("#zhibiao_18").show();
        }
        if (val18 == false) {
            $("#zhibiao_18").hide();
        }
        if (val19 == true) {
            var temp19 = "<span id=\"select19\" class=\"input-group-addon\">氯化物</span>";
            $("#zhibiao_19").html(temp19);
            $("#zhibiao_19").show();
        }
        if (val19 == false) {
            $("#zhibiao_19").hide();
        }
        if (val20 == true) {
            var temp20 = "<span id=\"select20\" class=\"input-group-addon\">硫化物</span>";
            $("#zhibiao_20").html(temp20);
            $("#zhibiao_20").show();
        }
        if (val20 == false) {
            $("#zhibiao_20").hide();
        }
        if (val21 == true) {
            var temp21 = "<span id=\"select21\" class=\"input-group-addon\">阴离子表面活性剂</span>";
            $("#zhibiao_21").html(temp21);
            $("#zhibiao_21").show();
        }
        if (val21 == false) {
            $("#zhibiao_21").hide();
        }
    };
    function exe1() {
        var val1 = document.getElementById("mulinlineCheckbox1").checked;
        var val2 = document.getElementById("mulinlineCheckbox2").checked;
        var val3 = document.getElementById("mulinlineCheckbox3").checked;
        var val4 = document.getElementById("mulinlineCheckbox4").checked;
        var val5 = document.getElementById("mulinlineCheckbox5").checked;
        var val6 = document.getElementById("mulinlineCheckbox6").checked;
        var val7 = document.getElementById("mulinlineCheckbox7").checked;
        var val8 = document.getElementById("mulinlineCheckbox8").checked;
        var val9 = document.getElementById("mulinlineCheckbox9").checked;
        var val10 = document.getElementById("mulinlineCheckbox10").checked;
        var val11 = document.getElementById("mulinlineCheckbox11").checked;
        var val12 = document.getElementById("mulinlineCheckbox12").checked;
        var val13 = document.getElementById("mulinlineCheckbox13").checked;
        var val14 = document.getElementById("mulinlineCheckbox14").checked;
        var val15 = document.getElementById("mulinlineCheckbox15").checked;
        var val16 = document.getElementById("mulinlineCheckbox16").checked;
        var val17 = document.getElementById("mulinlineCheckbox17").checked;
        var val18 = document.getElementById("mulinlineCheckbox18").checked;
        var val19 = document.getElementById("mulinlineCheckbox19").checked;
        var val20 = document.getElementById("mulinlineCheckbox20").checked;
        var val21 = document.getElementById("mulinlineCheckbox21").checked;

        if (val1 == true) {
            var temp1 = "<span id=\"mulselect1\" class=\"input-group-addon\">盐度</span>";
            $("#mulzhibiao_1").html(temp1);
            $("#mulzhibiao_1").show();
        }
        if (val1 == false) {
            $("#mulzhibiao_1").hide();
        }
        if (val2 == true) {
            var temp2 = "<span id=\"mulselect2\" class=\"input-group-addon\">化学需氧量</span>";
            $("#mulzhibiao_2").html(temp2);
            $("#mulzhibiao_2").show();
        }
        if (val2 == false) {
            $("#mulzhibiao_2").hide();
        }
        if (val3 == true) {
            var temp3 = "<span id=\"mulselect3\" class=\"input-group-addon\">氨氮</span>";
            $("#mulzhibiao_3").html(temp3);
            $("#mulzhibiao_3").show();
        }
        if (val3 == false) {
            $("#mulzhibiao_3").hide();
        }
        if (val4 == true) {
            var temp4 = "<span id=\"mulselect4\" class=\"input-group-addon\">总磷</span>";
            $("#mulzhibiao_4").html(temp4);
            $("#mulzhibiao_4").show();
        }
        if (val4 == false) {
            $("#mulzhibiao_4").hide();
        }
        if (val5 == true) {
            var temp5 = "<span id=\"mulselect5\" class=\"input-group-addon\">总氮</span>";
            $("#mulzhibiao_5").html(temp5);
            $("#mulzhibiao_5").show();
        }
        if (val5 == false) {
            $("#mulzhibiao_5").hide();
        }
        if (val6 == true) {
            var temp6 = "<span id=\"mulselect6\" class=\"input-group-addon\">六价铬</span>";
            $("#mulzhibiao_6").html(temp6);
            $("#mulzhibiao_6").show();
        }
        if (val6 == false) {
            $("#mulzhibiao_6").hide();
        }
        if (val7 == true) {
            var temp7 = "<span id=\"mulselect7\" class=\"input-group-addon\">氰化物</span>";
            $("#mulzhibiao_7").html(temp7);
            $("#mulzhibiao_7").show();
        }
        if (val7 == false) {
            $("#mulzhibiao_7").hide();
        }
        if (val8 == true) {
            var temp8 = "<span id=\"mulselect8\" class=\"input-group-addon\">粪大肠菌群数</span>";
            $("#mulzhibiao_8").html(temp8);
            $("#mulzhibiao_8").show();
        }
        if (val8 == false) {
            $("#mulzhibiao_8").hide();
        }
        if (val9 == true) {
            var temp9 = "<span id=\"mulselect9\" class=\"input-group-addon\">五日生化需氧量</span>";
            $("#mulzhibiao_9").html(temp9);
            $("#mulzhibiao_9").show();
        }
        if (val9 == false) {
            $("#mulzhibiao_9").hide();
        }
        if (val10 == true) {
            var temp10 = "<span id=\"mulselect10\" class=\"input-group-addon\">悬浮物</span>";
            $("#mulzhibiao_10").html(temp10);
            $("#mulzhibiao_10").show();
        }
        if (val10 == false) {
            $("#mulzhibiao_10").hide();
        }
        if (val11 == true) {
            var temp11 = "<span id=\"mulselect11\" class=\"input-group-addon\">石油类</span>";
            $("#mulzhibiao_11").html(temp11);
            $("#mulzhibiao_11").show();
        }
        if (val11 == false) {
            $("#mulzhibiao_11").hide();
        }
        if (val12 == true) {
            var temp12 = "<span id=\"mulselect12\" class=\"input-group-addon\"动植物油</span>";
            $("#mulzhibiao_12").html(temp12);
            $("#mulzhibiao_12").show();
        }
        if (val12 == false) {
            $("#mulzhibiao_12").hide();
        }
        if (val13 == true) {
            var temp13 = "<span id=\"mulselect13\" class=\"input-group-addon\">挥发酚</span>";
            $("#mulzhibiao_13").html(temp13);
            $("#mulzhibiao_13").show();
        }
        if (val13 == false) {
            $("#mulzhibiao_13").hide();
        }
        if (val14 == true) {
            var temp14 = "<span id=\"mulselect14\" class=\"input-group-addon\">总砷</span>";
            $("#mulzhibiao_14").html(temp14);
            $("#mulzhibiao_14").show();
        }
        if (val14 == false) {
            $("#mulzhibiao_14").hide();
        }
        if (val15 == true) {
            var temp15 = "<span id=\"mulselect15\" class=\"input-group-addon\">总汞</span>";
            $("#mulzhibiao_15").html(temp15);
            $("#mulzhibiao_15").show();
        }
        if (val15 == false) {
            $("#mulzhibiao_15").hide();
        }
        if (val16 == true) {
            var temp16 = "<span id=\"mulselect16\" class=\"input-group-addon\">总铅</span>";
            $("#mulzhibiao_16").html(temp16);
            $("#mulzhibiao_16").show();
        }
        if (val16 == false) {
            $("#mulzhibiao_16").hide();
        }
        if (val17 == true) {
            var temp17 = "<span id=\"mulselect17\" class=\"input-group-addon\">总镉</span>";
            $("#mulzhibiao_17").html(temp17);
            $("#mulzhibiao_17").show();
        }
        if (val17 == false) {
            $("#mulzhibiao_17").hide();
        }
        if (val18 == true) {
            var temp18 = "<span id=\"mulselect18\" class=\"input-group-addon\">PH值</span>";
            $("#mulzhibiao_18").html(temp18);
            $("#mulzhibiao_18").show();
        }
        if (val18 == false) {
            $("#mulzhibiao_18").hide();
        }
        if (val19 == true) {
            var temp19 = "<span id=\"mulselect19\" class=\"input-group-addon\">氯化物</span>";
            $("#mulzhibiao_19").html(temp19);
            $("#mulzhibiao_19").show();
        }
        if (val19 == false) {
            $("#mulzhibiao_19").hide();
        }
        if (val20 == true) {
            var temp20 = "<span id=\"mulselect20\" class=\"input-group-addon\">硫化物</span>";
            $("#mulzhibiao_20").html(temp20);
            $("#mulzhibiao_20").show();
        }
        if (val20 == false) {
            $("#mulzhibiao_20").hide();
        }
        if (val21 == true) {
            var temp21 = "<span id=\"mulselect21\" class=\"input-group-addon\">阴离子表面活性剂</span>";
            $("#mulzhibiao_21").html(temp21);
            $("#mulzhibiao_21").show();
        }
        if (val21 == false) {
            $("#mulzhibiao_21").hide();
        }
    }
//你说喜欢一个人是什么感觉
    //乍见心欢别思恋
    //旧见仍怦然
</script>
</body>
</html>
