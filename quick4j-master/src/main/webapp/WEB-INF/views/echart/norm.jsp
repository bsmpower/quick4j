<%--
  Created by IntelliJ IDEA.
  User: Deity
  Date: 2019/8/4
  Time: 9:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>全指标分析</title>
    <style type="text/css">
        #addmul:hover
        {
            background-color:#777777;
        }
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
    <script type="text/javascript" src="app/js/echart/echarts-all.js"></script>
    <script type="text/javascript" src="bsmassets/js/echart/analyze.js"></script>
    <script type="text/javascript" src="bsmassets/js/echart/norm.js"></script>
    <script type="text/javascript" src="app/js/emis/standard.js"></script>
</head>
<body>
<div id="echart">
    <div class="row">
        <div class="col-lg-4">
            <form class="bs-example bs-example-form" role="echartform" id="echartform">
                <div class="input-group">
                    <span class="input-group-addon">排放口</span>
                    <input id="pwk0" name="pwkname" type="text" class="form-control" placeholder="请输入指定的排放口名称">
                </div>
                <br>
                <div class="input-group">
                    <span class="input-group-addon">排放口类型</span>
                    <input id="pwk1" list="pwkselect" type="text" class="form-control" placeholder="请选择排放口类型">
                    <datalist id="pwkselect">
                        <option value="工业废水排污口">工业废水排污口</option>
                        <option value="工业生活混合污水排污口">工业生活混合污水排污口</option>
                        <option value="生活污水排污口">生活污水排污口</option>
                        <option value="畜禽养殖排污口">畜禽养殖排污口</option>
                        <option value="农田退水入海口">农田退水入海口</option>
                        <option value="水产养殖排污口">水产养殖排污口</option>
                        <option value="雨污混合排污口">雨污混合排污口</option>
                        <option value="雨水排放口">雨水排放口</option>
                        <option value="泄洪口">泄洪口</option>
                        <option value="其他">其他</option>
                    </datalist>
                </div>
                <br>
                <div class="input-group">
                    <span class="input-group-addon">统计开始年份</span>
                    <input id="pwk2" name="tjstart" list="yearStart" type="text" class="form-control"
                           placeholder="开始">
                    <datalist id="yearStart">
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
                    <span class="input-group-addon">统计结束年份</span>
                    <input id="pwk3" name="tjend" list="yearEnd" type="text" class="form-control"
                           placeholder="结束">
                    <datalist id="yearEnd">
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
                    <span class="input-group-addon">监测年份</span>
                    <input id="pwk4" name="tjmonth" list="yearlist" type="text" class="form-control"
                           placeholder="请选择监测年份">
                    <datalist id="yearlist">
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
                    <input id="pwk5" name="tjmonth" list="monthlist" type="text" class="form-control"
                           placeholder="请选择监测月份">
                    <datalist id="monthlist">
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
                    <span class="input-group-addon">达标类型</span>
                    <select id="pwk6" name="pwk6" class="form-control" onchange="editpre()">
                        <option value="">全指标</option>
                        <option value="salt">盐度(‰)</option>
                        <option value="COD">化学需氧量(mg/L)</option>
                        <option value="NH3">氨氮(mg/L)</option>
                        <option value="P">总磷(mg/L)</option>
                        <option value="N">总氮(mg/L)</option>
                        <option value="Cr6">六价铬(mg/L)</option>
                        <option value="CN">氰化物(mg/L)</option>
                        <option value="fdcjqs">粪大肠菌群数 (个/L)</option>
                        <option value="BOD5">五日生化需氧量(mg/L)</option>
                        <option value="xfw">悬浮物 (mg/L)</option>
                        <option value="oil">石油类 (mg/L)</option>
                        <option value="dzwy">动植物油(mg/L)</option>
                        <option value="phenol">挥发酚(mg/L)</option>
                        <option value="As">总砷(mg/L)</option>
                        <option value="Hg">总汞(mg/L)</option>
                        <option value="Pb">总铅(mg/L)</option>
                        <option value="Cd">总镉(mg/L)</option>
                        <option value="PH">PH值</option>
                        <option value="chloride">氯化物(mg/L)</option>
                        <option value="sulfide">硫化物(mg/L)</option>
                        <option value="ylzbmhxj">阴离子表面活性剂(mg/L)</option>
                        <option value="others">其它监测指标</option>
                    </select>
                </div>
                <br>
                <div class="input-group" style="margin-left:10px;">
                    <button id="xzanalyze" type="button" class="btn btn-primary">多指标现值分析</button>
                    <button id="bsanalyze" type="button" class="btn btn-primary">多指标倍数分析</button>
                    <button id="mulpwkanalyze" type="button" class="btn btn-primary">多排放口分析</button>
                    <button id="dndyxzanalyze" type="button" class="btn btn-primary">多年单月单指标现值分析</button>
                    <button id="dndybsanalyze" type="button" class="btn btn-primary">多年单月单指标倍数分析</button>
                    <button id="dyxzanalyze" type="button" class="btn btn-primary">多月单指标现值分析</button>
                    <button id="dybsanalyze" type="button" class="btn btn-primary">多月单指标倍数分析</button>
                    <button id="reset" type="button" class="btn btn-primary">重置</button>
                </div>
            </form>
        </div>
        <div class="col-lg-8">
            <div id="main" style="width: 600px;height:400px;margin-left:100px;"></div>
            <script type="text/javascript">
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '排放口全指标达标情况'
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
        </div>
    </div>
</div>
<div style="margin-top: 10px;">
    <button type="button" onclick="edit()" class="btn btn-default">修改排污口标准</button>
    <button type="button" onclick="edit2()" class="btn btn-default">修改监测断面标准</button>
    <br>
    <br>
    <div class="table-cont" id="table-cont">
        <table class="table table-striped table-bordered table-hover  table-condensed" id="tablediv">
            <thead>
            <tr class="success">
                <th>选择</th><th>ID</th><th>编辑</th><th>删除</th><th id="nameth">排污口名称</th><th id="typeth">排污口类型</th><th>年</th><th>月</th><th>盐度(‰)</th><th>化学需氧量(mg/L)</th><th>氨氮(mg/L)</th><th>总磷(mg/L)</th><th>总氮(mg/L)</th>
                <th>六价铬(mg/L)</th><th>氰化物(mg/L)</th><th>粪大肠菌群数 (个/L)</th><th>五日生化需氧量(mg/L)</th><th>悬浮物 (mg/L)</th><th>石油类 (mg/L)</th><th id="flowth">动植物油(mg/L)</th><th>挥发酚(mg/L)</th><th>总砷(mg/L)</th>
                <th>总汞(mg/L)</th><th>总铅(mg/L)</th><th>总镉(mg/L)</th><th>PH值</th><th>氯化物(mg/L)</th><th>硫化物(mg/L)</th><th>阴离子表面活性剂(mg/L)</th>
            </thead>
            <tbody id="tbodyone">
            </tbody>
        </table>
    </div>
    <div class="table-cont" id="table-cont1" style="display: none;">
        <table class="table table-striped table-bordered table-hover  table-condensed" id="tablediv1">
            <thead>
            <tr class="success">
                <th>选择</th><th>ID</th><th>编辑</th><th>删除</th><th>排污口名称</th><th>排污口类型</th><th>年</th><th>月</th><th>指标</th><th>数值</th>
            </thead>
            <tbody id="tbodytwo">
            </tbody>
        </table>
    </div>
</div>
</div>
<div class="modal fade" id="mulModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:900px">
        <div class="modal-content">
            <form class="bs-example bs-example-form" role="form" id="addform3">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <div>
                        <h4 class="modal-title" id="myModalLabel3" style="display:inline-block">多排放口分析</h4>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="input-group">
                        <span class="input-group-addon">排污口名称</span>
                        <input id="pwkname" name="tjyear" type="text" class="form-control" placeholder="请输入指定的排放口名称">
                        <span class="input-group-addon">所属排放口类别</span>

                        <select id="mulpwkType" name="pwkType" class="form-control" onchange="editpre()">
                            <option value=""></option>
                            <option value="工业废水排污口">工业废水排污口</option>
                            <option value="工业生活混合污水排污口">工业生活混合污水排污口</option>
                            <option value="生活污水排污口">生活污水排污口</option>
                            <option value="畜禽养殖排污口">畜禽养殖排污口</option>
                            <option value="农田退水入海口">农田退水入海口</option>
                            <option value="水产养殖排污口">水产养殖排污口</option>
                            <option value="雨污混合排污口">雨污混合排污口</option>
                            <option value="雨水排放口">雨水排放口</option>
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
                        <input id="pwk7" name="tjmonth" list="yearlist" type="text" class="form-control"
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
                        <input id="pwk8" name="tjmonth" list="monthlist" type="text" class="form-control"
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
                        <span class="input-group-addon">达标类型</span>
                        <select id="pwk9" name="pwk9" class="form-control" onchange="editpre()">
                            <option value="">全指标</option>
                            <option value="salt">盐度(‰)</option>
                            <option value="COD">化学需氧量(mg/L)</option>
                            <option value="NH3">氨氮(mg/L)</option>
                            <option value="P">总磷(mg/L)</option>
                            <option value="N">总氮(mg/L)</option>
                            <option value="Cr6">六价铬(mg/L)</option>
                            <option value="CN">氰化物(mg/L)</option>
                            <option value="fdcjqs">粪大肠菌群数 (个/L)</option>
                            <option value="BOD5">五日生化需氧量(mg/L)</option>
                            <option value="xfw">悬浮物 (mg/L)</option>
                            <option value="oil">石油类 (mg/L)</option>
                            <option value="dzwy">动植物油(mg/L)</option>
                            <option value="phenol">挥发酚(mg/L)</option>
                            <option value="As">总砷(mg/L)</option>
                            <option value="Hg">总汞(mg/L)</option>
                            <option value="Pb">总铅(mg/L)</option>
                            <option value="Cd">总镉(mg/L)</option>
                            <option value="PH">PH值</option>
                            <option value="chloride">氯化物(mg/L)</option>
                            <option value="sulfide">硫化物(mg/L)</option>
                            <option value="ylzbmhxj">阴离子表面活性剂(mg/L)</option>
                            <option value="others">其它监测指标</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary"  id="mulpwkfx">提交</button>
                </div>
            </form>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:900px">
        <div class="modal-content">
            <form class="bs-example bs-example-form" role="form" id="addform">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <div>
                        <h4 class="modal-title" id="myModalLabel" style="display:inline-block">修改标准</h4>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6" style="width:400px">
                                <div class="input-group">
                                    <span class="input-group-addon">排污口类型</span>
                                    <select name="pwkType" class="form-control" onchange="editpre()">
                                        <option value=""></option>
                                        <option value="工业废水排污口">工业废水排污口</option>
                                        <option value="工业生活混合污水排污口">工业生活混合污水排污口</option>
                                        <option value="生活污水排污口">生活污水排污口</option>
                                        <option value="畜禽养殖排污口">畜禽养殖排污口</option>
                                        <option value="农田退水入海口">农田退水入海口</option>
                                        <option value="水产养殖排污口">水产养殖排污口</option>
                                        <option value="雨污混合排污口">雨污混合排污口</option>
                                        <option value="雨水排放口">雨水排放口</option>
                                        <option value="泄洪口">泄洪口</option>
                                        <option value="其他">其他</option>
                                    </select>
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">盐度(‰)</span>
                                    <input name="salt" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">化学需氧量 (mg/L)</span>
                                    <input name="cod" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">氨氮 (mg/L)</span>
                                    <input name="nh3" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总磷(mg/L)</span>
                                    <input name="p" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总氮(mg/L)</span>
                                    <input name="n" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">六价铬 (mg/L)</span>
                                    <input name="cr6" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">氰化物(mg/L)</span>
                                    <input name="cn" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">粪大肠菌群数 (个/L)</span>
                                    <input name="fdcjqs" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">五日生化需氧量(mg/L)</span>
                                    <input name="bod5" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">悬浮物 (mg/L)</span>
                                    <input name="xfw" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">石油类 (mg/L)</span>
                                    <input name="oil" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                            </div>
                            <div class="col-lg-6" style="width:400px">
                                <div class="input-group">
                                    <span class="input-group-addon">动植物油(mg/L)</span>
                                    <input name="dzwy" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">挥发酚(mg/L)</span>
                                    <input name="phenol" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总砷(mg/L)</span>
                                    <input name="as" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总汞(mg/L)</span>
                                    <input name="hg" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总铅(mg/L)</span>
                                    <input name="pb" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总镉(mg/L)</span>
                                    <input name="cd" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">PH值左区间</span>
                                    <input name="ph1" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">PH值右区间</span>
                                    <input name="ph2" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">氯化物(mg/L)</span>
                                    <input name="chloride" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">硫化物(mg/L)</span>
                                    <input name="sulfide" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">阴离子表面活性剂(mg/L)</span>
                                    <input name="ylzbmhxj" type="number" class="form-control" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary" onclick="add()">提交</button>
                </div>
            </form>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>

<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:900px">
        <div class="modal-content">
            <form class="bs-example bs-example-form" role="form" id="addform2">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <div>
                        <h4 class="modal-title" id="myModalLabel2" style="display:inline-block">修改标准</h4>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6" style="width:400px">
                                <div class="input-group">
                                    <span class="input-group-addon">断面水质目标</span>
                                    <select name="dmGoal" class="form-control" onchange="editpre2()">
                                        <option value=""></option>
                                        <option value="Ⅰ类">Ⅰ类</option>
                                        <option value="Ⅱ类">Ⅱ类</option>
                                        <option value="Ⅲ类">Ⅲ类</option>
                                        <option value="Ⅳ类">Ⅳ类</option>
                                        <option value="Ⅴ类">Ⅴ类</option>
                                        <option value="劣Ⅴ类">劣Ⅴ类</option>
                                    </select>
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">盐度(‰)</span>
                                    <input name="salt" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">化学需氧量 (mg/L)</span>
                                    <input name="cod" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">氨氮 (mg/L)</span>
                                    <input name="nh3" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总磷(mg/L)</span>
                                    <input name="p" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总氮(mg/L)</span>
                                    <input name="n" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">六价铬 (mg/L)</span>
                                    <input name="cr6" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">氰化物(mg/L)</span>
                                    <input name="cn" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">粪大肠菌群数 (个/L)</span>
                                    <input name="fdcjqs" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">五日生化需氧量(mg/L)</span>
                                    <input name="bod5" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">悬浮物 (mg/L)</span>
                                    <input name="xfw" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">石油类 (mg/L)</span>
                                    <input name="oil" type="number" class="form-control" placeholder="">
                                </div>
                            </div>
                            <div class="col-lg-6" style="width:400px">
                                <div class="input-group">
                                    <span class="input-group-addon">流量(m³/s）</span>
                                    <input name="flow" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">挥发酚(mg/L)</span>
                                    <input name="phenol" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总砷(mg/L)</span>
                                    <input name="as" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总汞(mg/L)</span>
                                    <input name="hg" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总铅(mg/L)</span>
                                    <input name="pb" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总镉(mg/L)</span>
                                    <input name="cd" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">PH值左区间</span>
                                    <input name="ph1" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">PH值右区间</span>
                                    <input name="ph2" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">氯化物(mg/L)</span>
                                    <input name="chloride" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">硫化物(mg/L)</span>
                                    <input name="sulfide" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">阴离子表面活性剂(mg/L)</span>
                                    <input name="ylzbmhxj" type="number" class="form-control" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <div id="message"></div>
                    <br/>
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary" onclick="add2()">提交</button>
                </div>
            </form>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>
</body>
</html>
