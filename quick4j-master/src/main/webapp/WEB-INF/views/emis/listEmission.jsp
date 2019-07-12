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
        .listDataTableDiv table td{white-space: nowrap}
        .listDataTableDiv table th{white-space: nowrap}
        .table-condensed tbody tr td{padding: 10px}
        .table-condensed tbody tr th{padding: 10px}
        .table>thead>.success>th {background-color:#ffffff}
        .table thead tr th{font-size:14px;font-weight:400;text-align: center;vertical-align: middle;height: 50px}
    </style>
    <script type="text/javascript" src="app/js/emis/selectemission.js"></script>
    <script src="app/js/emis/jquery.sliderBar.js"></script>
    <script type="text/javascript">
        $(function(){
            $('.sliderbar-container').sliderBar({
                open : true,           // 默认是否打开，true打开，false关闭
                top : 125,             // 距离顶部多高
                width : 360,           // body内容宽度
                height : 330,          // body内容高度
                theme : '#3d3d3d',       // 主题颜色
                position : 'right'      // 显示位置，有left和right两种
            });
        });
    </script>
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
                    <button type="button" class="btn btn-default" onclick="selectemis()">查询</button>
                </form>
            </div>
        </div>
        <div class="row clearfix">
            <div class="col-md-12 column" style="padding-left:20px;height: 350px;">
                辽宁地图
            </div>
        </div>
    </div>

    <br>
    <br>
    <div class="listDataTableDiv" style="height:320px;">
        <div style="padding-bottom: 10px">
            <button type="button"  onclick="allchoose()" class="btn btn-default btn-xs" style="display: inline-block">全选</button>
            <button type="button"  onclick="nochoose()" class="btn btn-default btn-xs" style="display: inline-block">取消全选</button>
            <button type="button"  onclick="alldelete()" class="btn btn-default btn-xs" style="display: inline-block">删除记录</button>
            <button type="button"  onclick="add()" class="btn btn-default btn-xs" style="display: inline-block">增加记录</button>
            <button type="button" onclick="exportexcel()" class="btn btn-default btn-xs" style="display: inline-block">导出记录</button>
        </div>
        <div style="text-align:center;height:300px;overflow:auto;">
        <table class="table table-striped table-bordered table-hover  table-condensed" id="tablediv">
            <thead>
            <tr class="success">
                <th>选择</th><th>ID</th><th>编辑</th><th>删除</th><th id="codeth">排污口编号</th><th id="nameth">排污口名称</th><th>年</th><th>月</th><th>日</th><th>盐度(‰)</th><th>化学需氧量(mg/L)</th><th>氨氮(mg/L)</th><th>总磷(mg/L)</th><th>总氮(mg/L)</th>
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
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">五日生化需氧量(mg/L)</span>
                                    <input  name="bod5" type="number" class="form-control" placeholder="">
                                </div>
                            </div>
                            <div class="col-lg-6" style="width:400px">
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
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">五日生化需氧量(mg/L)</span>
                                    <input  name="bod5" type="number" class="form-control" placeholder="">
                                </div>
                            </div>
                            <div class="col-lg-6" style="width:400px">
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