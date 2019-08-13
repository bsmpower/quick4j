<%--
  Created by IntelliJ IDEA.
  User: Deity
  Date: 2019/7/30
  Time: 11:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>溯源分析</title>
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
    <%--<link href="app/css/qmp/public.css" rel="stylesheet">--%>
    <link rel="stylesheet" href="bsmassets/css/bsmcss.css">
    <script src="bsmassets/js/echart/suyuan.js"></script>
</head>
<body>
<div id="left"></div>
<div id="right">
    <div id="map222" data-dojo-type="dijit/layout/ContentPane"
         data-dojo-props="region:'center'"
         style="overflow:hidden;height:430px;width:100%;margin-left: 12%;">

    </div>
</div>
<br>
<div class="row">
    <div class="col-lg-6">
        <form class="bs-example bs-example-form" role="form" id="echartGen">
            <br>
            <div class="input-group">
                <span class="input-group-addon">监测年份</span>
                <input id="pwk0" name="tjmonth" list="yearlist" type="text" class="form-control" placeholder="请选择监测年份">
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
                <span class="input-group-addon">达标类型</span>
                <input id="pwk1" name="tjday" list="jctype" type="text" class="form-control" placeholder="请选择要进行分析的类型">
                <datalist id="jctype">
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
                </datalist>
            </div>
            <br>
            <div class="input-group">
                <span class="input-group-addon">设置达标线</span>
                <input id="pwk2" name="tjday" type="text" class="form-control" placeholder="请设置达标元素的值">
            </div>
            <br>
            <div class="input-group">
                <span class="input-group-addon">排污口类型</span>
                <input id="pwk3" list="pwktype" name="tjday" type="text" class="form-control" placeholder="请设置达标元素的值">
                <datalist id="pwktype">
                    <option value="rain_outlet">雨水排污口</option>
                    <option value="rainsewage">雨污混合口信息</option>
                    <option value="rain_spillway">雨水泄洪口</option>
                    <option value="outlet">排污口基本信息</option>
                </datalist>
            </div>
        </form>
    </div>
    <div class="col-lg-6">
        <div class="btn-group" role="group" aria-label="...">
            <button id="suyuanStart" type="button" class="btn btn-primary">开始溯源</button>
            <button id="reset" type="button" class="btn btn-primary">重置</button>
        </div>
    </div>
</div>
</body>
</html>
