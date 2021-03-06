<%--
  Created by IntelliJ IDEA.
  User: noname
  Date: 2019/6/30
  Time: 14:34
  To change this template use File | Settings | File Templates.
--%>

<%@ page language="java" pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <title>排放调查数据查询与维护</title>

    <style type="text/css">
        .table-cont {
            max-height: 300px;
            overflow: auto;
        }
        .table>tbody>tr>td,
        .table>tbody>tr>th,
        .table>thead>tr>td,
        .table>thead>tr>th{
            border: 1px solid #C1C1C1;
            white-space: nowrap;
            font-weight:400;
            text-align: center;
            vertical-align: middle;
            padding: 8px
        }
        .table {
            border-top:0px;
        }

        .table>thead>.success>th {background-color:#eee; position: relative}
        .table thead tr th{height: 50px;z-index: 998}
        .tableBasic {
            white-space: nowrap;
        }
        .table-striped > tbody > tr:nth-child(2n+1) > td,
        .table-striped > tbody > tr:nth-child(2n+1) > th {
            background-color: #efefef99;
        }
    </style>

    <%--<link href="bsmassets/css/bsmcss.css" rel="stylesheet">--%>
    <%--<link href="app/css/qmp/public.css" rel="stylesheet">--%>
    <link rel="stylesheet" href="http://js.arcgis.com/3.20/dijit/themes/claro/claro.css">
    <link rel="stylesheet" href="https://js.arcgis.com/3.24/esri/themes/calcite/dijit/calcite.css">
    <link rel="stylesheet" href="app/js/3.20/esri/css/esri.css">
    <link href="app/css/qmp/fileinput.css" type="text/css" rel="stylesheet" />

    <script src="app/js/emis/jquery.sliderBar.js"></script>
    <script type="text/javascript" src="app/js/emis/selectemission.js"></script>
    <script type="text/javascript" src="app/js/emis/table2excel.js"></script>

</head>
<body>


<div class="workingArea">
    <div >
        <div class="sliderbar-container" >
            <div class="title"><i></i> 查询条件</div>
            <div class="body">
                <div class="btn-group" style="padding-bottom: 20px" id="bntgroup">
                    <button class="btn btn-default" type="button" onclick="pwkfunc()">排污口排放物</button>
                    <button class="btn btn-default" type="button"  onclick="dmfunc()">监测断面排放物</button>
                </div>
                <form role="form"  id="selectform">
                    <div class="form-group" style="padding:0">
                        <label id="codelable">排污口编码：</label>
                        <input id="pwkCodeId" name="pwkCode" style="border:1px solid #a1a1a1;width: 304px" class="form-control" />
                    </div>
                    <div class="form-group" style="padding:0">
                        <label id="namelable">排污口名称：</label>
                        <input id="pwkNameId" name="pwkName" style="border:1px solid #a1a1a1;width: 304px" class="form-control" />
                    </div>
                    <div class="form-group" id="date" style="visibility:hidden;height:0" >
                        <label>开始日期：</label>
                        <input name="startdate" value="1991-10-07" type="date" id="startd" class="form-control" style="border:1px solid #a1a1a1;width: 200px;"/>
                        <label>结束日期：</label>
                        <input name="enddate" type="date"  id="endd" class="form-control" style="border:1px solid #a1a1a1;width: 200px"/>
                    </div>
                    <div class="form-group" id="time" style="padding-bottom: 5px">
                        <div>
                            <label style="display:inline-block">年：</label>
                            <div style="display:inline-block">
                                <input  name="year" class="form-control" id="inputyear" type="number" oninput="if(value.length>4)value=value.slice(0,4)" style="border:1px solid #a1a1a1;width: 100px;"/>
                            </div>
                            <label style="display:inline-block">月：</label>
                            <div style="display:inline-block">
                                <input  name="month" class="form-control" id="inputmonth" type="number" oninput="if(value>12) value=12" style="border:1px solid #a1a1a1;width:100px;"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="button" class="btn btn-default" onclick="selectemis()">查询</button>
                        <button type="button" class="btn btn-default" onclick="selall()" style="margin-left: 20px">查看全部</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="container" style="width:1300px;">
            <div class="row">
                <div id="map222" data-dojo-type="dijit/layout/ContentPane"
                     data-dojo-props="region:'center'"
                     style="overflow:hidden;height:350px;width:100%">
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <div style="margin-bottom:10px ">
        <button type="button" class="btn btn-default btn-xs " onclick="fadeout()" id="fadeout"><span class="glyphicon glyphicon-chevron-down" style="margin-right: 5px"></span>隐藏</button>
    </div>
    <div class="listDataTableDiv" style="height:320px;" id="alltable">
        <div style="padding-bottom: 10px">
            <button type="button"  onclick="allchoose()" class="btn btn-default btn-xs" style="display: inline-block">全选</button>
            <button type="button"  onclick="nochoose()" class="btn btn-default btn-xs" style="display: inline-block">取消全选</button>
            <button type="button"  onclick="alldelete()" class="btn btn-default btn-xs" style="display: inline-block">删除记录</button>
            <button type="button"  onclick="add()" class="btn btn-default btn-xs" style="display: inline-block">增加记录</button>
            <button type="button" onclick="exportexcel()" class="btn btn-default btn-xs" style="display: inline-block">导出记录</button>
        </div>
        <div class="table-cont" id="table-cont">
        <table class="table table-striped table-bordered table-hover  table-condensed" id="tablediv">
            <thead>
            <tr class="success">
                <th>选择</th><th>ID</th><th>编辑</th><th>删除</th><th id="codeth">排污口编号</th><th id="nameth">排污口名称</th><th>所在市</th><th>所在县（市/区）</th><th id="typeth">排污口类型</th><th>年</th><th>月</th><th>日</th><th>盐度(‰)</th><th>化学需氧量(mg/L)</th><th>氨氮(mg/L)</th><th>总磷(mg/L)</th><th>总氮(mg/L)</th>
                <th>六价铬(mg/L)</th><th>氰化物(mg/L)</th><th>粪大肠菌群数 (个/L)</th><th>五日生化需氧量(mg/L)</th><th>悬浮物 (mg/L)</th><th>石油类 (mg/L)</th><th id="flowth">动植物油(mg/L)</th><th>挥发酚(mg/L)</th><th>总砷(mg/L)</th>
                <th>总汞(mg/L)</th><th>总铅(mg/L)</th><th>总镉(mg/L)</th><th>PH值</th><th>氯化物(mg/L)</th><th>硫化物(mg/L)</th><th>阴离子表面活性剂(mg/L)</th><th>其它监测指标</th>
            </tr>
            </thead>
            <tbody id="tbodyone">
            </tbody>
        </table>
        </div>
    </div>
</div>

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:850px">
        <div class="modal-content">
            <form class="bs-example bs-example-form" role="form" id="addform">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <div>
                    <h4 class="modal-title" id="myModalLabel" style="display:inline-block">增加排污口排放物质信息</h4>
                    <button type="button" onclick="allnull()" style="margin-left: 30px" class="btn btn-default">全部清空</button>
                </div>
            </div>
            <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6" style="width:400px" >
                                <div class="input-group">
                                    <span class="input-group-addon" id="addcode">排污口编号</span>
                                    <input  name="pwkCode" id="addcodeinput" type="text" class="form-control" placeholder="" >
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon" id="addname">排污口名称</span>
                                    <input  name="pwkName" id="addnameinput" type="text" class="form-control" placeholder="" >
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">所在市</span>
                                    <%--<input  name="city"  type="text" class="form-control" placeholder="" >--%>
                                    <select name="city" class="form-control">
                                        <option value="" style="display: none"></option>
                                        <option value ="沈阳市">沈阳市</option>
                                        <option value ="大连市">大连市</option>
                                        <option value="鞍山市">鞍山市</option>
                                        <option value="抚顺市">抚顺市</option>
                                        <option value="本溪市">本溪市</option>
                                        <option value="丹东市">丹东市</option>
                                        <option value="锦州市">锦州市</option>
                                        <option value="营口市">营口市</option>
                                        <option value="阜新市">阜新市</option>
                                        <option value="辽阳市">辽阳市</option>
                                        <option value="盘锦市">盘锦市</option>
                                        <option value="铁岭市">铁岭市</option>
                                        <option value="朝阳市">朝阳市</option>
                                        <option value="葫芦岛市">葫芦岛市</option>
                                    </select>
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon" >所在县（市/区）</span>
                                    <input  name="county"  type="text" class="form-control" placeholder="" >
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">年</span>
                                    <input  name="tjyear" type="number" class="form-control" placeholder=""  oninput="if(value.length>4)value=value.slice(0,4)">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">月</span>
                                    <input  name="tjmonth" type="number" class="form-control" placeholder=""  oninput="if(value>12) value=12">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">日</span>
                                    <input  name="tjday" type="number" class="form-control" placeholder=""  oninput="if(value>31) value=31">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">盐度(‰)</span>
                                    <input name="salt" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">化学需氧量 (mg/L)</span>
                                    <input  name="cod" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">氨氮 (mg/L)</span>
                                    <input  name="nh3" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总磷(mg/L)</span>
                                    <input  name="p" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总氮(mg/L)</span>
                                    <input  name="n" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">六价铬 (mg/L)</span>
                                    <input  name="cr6" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">氰化物(mg/L)</span>
                                    <input  name="cn" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">粪大肠菌群数 (个/L)</span>
                                    <input  name="fdcjqs" type="number" class="form-control" placeholder="">
                                </div>

                            </div>
                            <div class="col-lg-6" style="width:400px">
                                <div class="input-group">
                                    <span class="input-group-addon">五日生化需氧量(mg/L)</span>
                                    <input  name="bod5" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">悬浮物 (mg/L)</span>
                                    <input  name="xfw" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">石油类 (mg/L)</span>
                                    <input  name="oil" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon" id="adddzwy">动植物油(mg/L)</span>
                                    <input  name="dzwy" id="adddzwyinput" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">挥发酚(mg/L)</span>
                                    <input  name="phenol" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总砷(mg/L)</span>
                                    <input  name="as" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总汞(mg/L)</span>
                                    <input  name="hg" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总铅(mg/L)</span>
                                    <input  name="pb" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总镉(mg/L)</span>
                                    <input  name="cd" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">PH值</span>
                                    <input  name="ph" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">氯化物(mg/L)</span>
                                    <input  name="chloride" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">硫化物(mg/L)</span>
                                    <input  name="sulfide" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">阴离子表面活性剂(mg/L)</span>
                                    <input  name="ylzbmhxj" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">其它监测指标</span>
                                    <input  name="others" type="text" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group" id="pwktype">
                                    <span class="input-group-addon">排污口类型</span>
                                    <%--<input  name="type"  type="text" class="form-control" placeholder="" >--%>
                                    <select name="type" class="form-control">
                                        <option value="" style="display: none"></option>
                                        <option value ="工业废水排污口">工业废水排污口</option>
                                        <option value ="工业生活混合污水排污口">工业生活混合污水排污口</option>
                                        <option value="生活污水排污口">生活污水排污口</option>
                                        <option value="畜禽养殖排污口">畜禽养殖排污口</option>
                                        <option value="农田退水入海口">农田退水入海口</option>
                                        <option value="水产养殖排污口">水产养殖排污口</option>
                                        <option value="雨污混合排污口">雨污混合排污口</option>
                                        <option value="雨水排污口">雨水排污口</option>
                                        <option value="泄洪口">泄洪口</option>
                                        <option value="其他">其他</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="modal-footer">
                <div id="message"></div><br/>
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary" onclick="addemis()">提交</button>
            </div>
            </form>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>

<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:850px">
        <div class="modal-content">
            <form class="bs-example bs-example-form" role="form" id="editform">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <div>
                        <h4 class="modal-title" id="myModalLabel2" style="display:inline-block">修改排污口排放物质信息</h4>
                        <button type="button" onclick="allnull2()" style="margin-left: 30px" class="btn btn-default">全部清空</button>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6" style="width:400px" >
                                <div class="input-group">
                                    <span class="input-group-addon" id="editcode">排污口编号</span>
                                    <input  name="pwkCode" id="editcodeinput" type="text" class="form-control" placeholder="" >
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon" id="editname">排污口名称</span>
                                    <input  name="pwkName" id="editnameinput" type="text" class="form-control" placeholder="" >
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">所在市</span>
                                    <%--<input  name="city"  type="text" class="form-control" placeholder="" >--%>
                                    <select name="city" class="form-control" id="city">
                                        <option value="" style="display: none"></option>
                                        <option value ="沈阳市">沈阳市</option>
                                        <option value ="大连市">大连市</option>
                                        <option value="鞍山市">鞍山市</option>
                                        <option value="抚顺市">抚顺市</option>
                                        <option value="本溪市">本溪市</option>
                                        <option value="丹东市">丹东市</option>
                                        <option value="锦州市">锦州市</option>
                                        <option value="营口市">营口市</option>
                                        <option value="阜新市">阜新市</option>
                                        <option value="辽阳市">辽阳市</option>
                                        <option value="盘锦市">盘锦市</option>
                                        <option value="铁岭市">铁岭市</option>
                                        <option value="朝阳市">朝阳市</option>
                                        <option value="葫芦岛市">葫芦岛市</option>
                                    </select>
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon" >所在县（市/区）</span>
                                    <input  name="county"  type="text" class="form-control" placeholder="" >
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">年</span>
                                    <input  name="tjyear" type="number" class="form-control" placeholder=""  oninput="if(value.length>4)value=value.slice(0,4)">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">月</span>
                                    <input  name="tjmonth" type="number" class="form-control" placeholder=""  oninput="if(value>12) value=12">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">日</span>
                                    <input  name="tjday" type="number" class="form-control" placeholder=""  oninput="if(value>31) value=31">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">盐度(‰)</span>
                                    <input name="salt" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">化学需氧量 (mg/L)</span>
                                    <input  name="cod" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">氨氮 (mg/L)</span>
                                    <input  name="nh3" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总磷(mg/L)</span>
                                    <input  name="p" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总氮(mg/L)</span>
                                    <input  name="n" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">六价铬 (mg/L)</span>
                                    <input  name="cr6" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">氰化物(mg/L)</span>
                                    <input  name="cn" type="number" class="form-control" placeholder="">
                                </div>
                                <br>

                                <div class="input-group">
                                    <span class="input-group-addon">粪大肠菌群数 (个/L)</span>
                                    <input  name="fdcjqs" type="number" class="form-control" placeholder="">
                                </div>

                            </div>
                            <div class="col-lg-6" style="width:400px">
                                <div class="input-group">
                                    <span class="input-group-addon">五日生化需氧量(mg/L)</span>
                                    <input  name="bod5" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">悬浮物 (mg/L)</span>
                                    <input  name="xfw" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">石油类 (mg/L)</span>
                                    <input  name="oil" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon" id="editdzwy">动植物油(mg/L)</span>
                                    <input  name="dzwy" id="editdzwyinput" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">挥发酚(mg/L)</span>
                                    <input  name="phenol" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总砷(mg/L)</span>
                                    <input  name="as" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总汞(mg/L)</span>
                                    <input  name="hg" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总铅(mg/L)</span>
                                    <input  name="pb" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">总镉(mg/L)</span>
                                    <input  name="cd" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">PH值</span>
                                    <input  name="ph" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">氯化物(mg/L)</span>
                                    <input  name="chloride" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">硫化物(mg/L)</span>
                                    <input  name="sulfide" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">阴离子表面活性剂(mg/L)</span>
                                    <input  name="ylzbmhxj" type="number" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">其它监测指标</span>
                                    <input  name="others" type="text" class="form-control" placeholder="">
                                </div>
                                <br>
                                <div class="input-group" id="pwktypeedit">
                                    <span class="input-group-addon">排污口类型</span>
                                    <%--<input  name="type"  type="text" class="form-control" placeholder="" >--%>
                                    <select name="type" class="form-control" id="type">
                                        <option value="" style="display: none"></option>
                                        <option value ="工业废水排污口">工业废水排污口</option>
                                        <option value ="工业生活混合污水排污口">工业生活混合污水排污口</option>
                                        <option value="生活污水排污口">生活污水排污口</option>
                                        <option value="畜禽养殖排污口">畜禽养殖排污口</option>
                                        <option value="农田退水入海口">农田退水入海口</option>
                                        <option value="水产养殖排污口">水产养殖排污口</option>
                                        <option value="雨污混合排污口">雨污混合排污口</option>
                                        <option value="雨水排污口">雨水排污口</option>
                                        <option value="泄洪口">泄洪口</option>
                                        <option value="其他">其他</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div id="message2"></div><br/>
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary" onclick="editemis()">提交</button>
                </div>
            </form>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>
</body>
</html>