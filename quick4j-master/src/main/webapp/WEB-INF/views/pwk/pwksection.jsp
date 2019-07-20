<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <title>雨水排放口信息</title>
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

    <script src="app/js/fileinput.js" type="text/javascript" ></script>
    <script src="bsmassets/js/pwksection.js"></script>
    <script type="text/javascript" src='bsmassets/js/qmpTestData.js'></script>
</head>
<body>

<div id="left"></div>
<div id="right">
    <div id="map222" data-dojo-type="dijit/layout/ContentPane"
         data-dojo-props="region:'center'"
         style="overflow:hidden;height:430px;width:100%;margin-left: 12%;">

    </div>
</div>
<div class="listDataTableDiv" style="height:320px;">
    <div style="padding-bottom: 10px">
        <button id="btn_show" type="button" class="btn btn btn-primary btn-sm">
            <span class="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span>
        </button>
        <button id="btn_add" type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
        </button>
        <button id="btn_edit" type="button" class="btn btn-primary btn-sm" data-toggle="modal"
                data-target="myModaledit">
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改
        </button>
        <button id="btn_delete" type="button" class="btn btn-primary btn-sm" data-toggle="modal"
                data-target="myModalsearch">
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
        </button>
        <button id="btn_search" type="button" class="btn btn-primary btn-sm">
            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>搜索
        </button>
        <button id="btn_excelout" type="button" class="btn btn btn-primary btn-sm">
            <span class="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span>数据导出
        </button>
        <button id="btn_excelin" type="button" class="btn btn btn-primary btn-sm">
            <span class="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span>数据导入
        </button>
    </div>
    <div class="table-cont" id="table-cont">
        <table class="table table-striped table-bordered table-hover  table-condensed" id="tablediv">
            <thead>
            <tr class="success">
                <th>选择</th><th>ID</th><th>编辑</th><th>删除</th><th>统计年份</th><th>统计月份</th><th>统计日</th><th>断面名称</th><th>断面编码</th><th>断面类型</th><th>所在市</th><th>所在县(市/区)</th><th>所在乡镇</th><th>单位详细地址</th>
                <th>经度E</th><th>纬度N</th><th>所属水系</th><th>所在河流</th><th>现状水质类别</th><th>断面水质目标</th><th>河流功能区</th><th>是否达标</th><th>不达标指标</th>
            </tr>
            </thead>
            <tbody id="tbodyone">
            </tbody>
        </table>
    </div>
</div>
<%--新增排放口--%>
<div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" data-backdrop="static"
         aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="width:1300px">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">
                        新增排放口信息
                    </h4>
                </div>
                <div class="modal-body">
                    <form class="bs-example bs-example-form" role="form" id="contentForm">
                        <div class="input-group">
                            <span class="input-group-addon">统计年份</span>
                            <input name="tjyear" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">统计月份</span>
                            <input name="tjmonth" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">统计日</span>
                            <input name="tjday" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">断面名称</span>
                            <input name="dmName" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">断面编码</span>
                            <input name="dmCode" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">断面类型</span>
                            <input name="dmType" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">所在市</span>
                            <input name="city" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">所在县(市/区)</span>
                            <input name="county" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">所在乡镇</span>
                            <input name="village" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">单位详细地址</span>
                            <input name="address" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">经度(E)</span>
                            <input name="longitude" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">纬度(N)</span>
                            <input name="laititude" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">所属水性</span>
                            <input name="sssx" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">所在河流</span>
                            <input name="riverName" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">现状水质类别</span>
                            <input name="szType" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">断面水质目标</span>
                            <input name="dmGoal" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">河流水功能区</span>
                            <input name="hlsGnq" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">是否达标</span>
                            <input name="isGet" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">不达标指标</span>
                            <input name="nogetItems" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="closeMod" type="button" class="btn btn-default" data-dismiss="modal">关闭
                    </button>
                    <button id="submitPwk" type="button" class="btn btn-primary" data-dismiss="modal">
                        提交更改
                    </button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal -->
    </div>
</div>

<%--更新排放口--%>
<div>
    <div class="modal fade" id="myModaledit" tabindex="-1" role="dialog" data-backdrop="static"
         aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="width:1300px">
            <div class="modal-content">
                <div class="modal-header">
                    <%--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">--%>
                    <%--&times;--%>
                    <%--</button>--%>
                    <h4 class="modal-title" id="myModalLabel1">
                        更新排放口信息
                    </h4>
                </div>
                <div class="modal-body">
                    <form class="bs-example bs-example-form" role="form">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">统计年份</span>
                                        <input id="pwk0" name="tjyear" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">统计月份</span>
                                        <input id="pwk1" name="tjmonth" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">统计日</span>
                                        <input id="pwk2" name="tjday" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">断面名称</span>
                                        <input id="pwk3" name="hdpskName" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">断面编码</span>
                                        <input id="pwk4" name="hdpskCode" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">断面类型</span>
                                        <input id="pwk5" name="hdName" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">所在市</span>
                                        <input id="pwk6" name="hdArea" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">所在县（市/区）</span>
                                        <input id="pwk7" name="city" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">所在乡镇</span>
                                        <input id="pwk8" name="county" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">断面详细地址</span>
                                        <input id="pwk9" name="village" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">经度</span>
                                        <input id="pwk10" name="address" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">纬度</span>
                                        <input id="pwk11" name="longitude" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>


                                </div>
                                <div class="col-lg-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">所属水系</span>
                                        <input id="pwk12" name="latitude" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">所在河流</span>
                                        <input id="pwk13" name="seaMode" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">现状水质类别</span>
                                        <input id="pwk14" name="seaName" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">断面水质目标</span>
                                        <input id="pwk15" name="pslTd" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">河流水功能区</span>
                                        <input id="pwk16" name="pslTy" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">是否达标</span>
                                        <input id="pwk17" name="emissionStandard" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">不达标指标</span>
                                        <input id="pwk18" name="isGet" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="closeMod1" type="button" class="btn btn-default" data-dismiss="modal">关闭
                    </button>
                    <button id="submitPwk1" type="button" class="btn btn-primary">
                        提交更改
                    </button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal -->
    </div>
</div>

<%--搜索排放口--%>
<div>
    <div class="modal fade" id="myModalsearch" tabindex="-1" role="dialog" data-backdrop="static"
         aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="width:1300px">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel2">
                        请选择选择搜索条件
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
                            <input type="checkbox" id="inlineCheckbox4" value="option4" onclick="exe()"> 断面名称
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox5" value="option5" onclick="exe()"> 断面编码
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox6" value="option6" onclick="exe()"> 断面类型
                        </label>
                    </div>
                    <br>
                    <div>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox7" value="option7" onclick="exe()"> 所在市
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox8" value="option8" onclick="exe()"> 所在县(市/区)
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox9" value="option9" onclick="exe()"> 所在乡镇
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox10" value="option10" onclick="exe()"> 断面详细地址
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox11" value="option11" onclick="exe()"> 经度
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox12" value="option12" onclick="exe()"> 纬度
                        </label>
                    </div>
                    <br>
                    <div>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox13" value="option13" onclick="exe()"> 所属水系
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox14" value="option14" onclick="exe()"> 所在河流
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox15" value="option15" onclick="exe()"> 现状水质类别
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox16" value="option16" onclick="exe()"> 断面水质目标
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox17" value="option17" onclick="exe()"> 河流水功能区
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox18" value="option18" onclick="exe()"> 是否达标
                        </label>
                    </div>
                    <br>
                    <div>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox19" value="option19" onclick="exe()"> 不达标指标
                        </label>
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
                    <div id="div_17"></div>
                    <div id="div_18"></div>

                </div>
                <div class="modal-footer">
                    <button id="closeMod2" type="button" class="btn btn-default" data-dismiss="modal">关闭
                    </button>
                    <button id="submitPwk2" type="button" class="btn btn-primary">
                        提交更改
                    </button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal -->
    </div>
</div>

<%--上传导入--%>
<div>
    <div class="modal fade" id="myModalExcelin" tabindex="-1" role="dialog" data-backdrop="static"
         aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h3 class="modal-title" id="myModalLabein">
                        请选择要导入的Excel表
                    </h3>
                </div>
                <div class="modal-body">
                    <table width="100%" border="0" cellpadding="8" cellspacing="0"
                           class="tableBasic">
                        <tr>
                            <td width="30%" align="center">文档模板</td>
                            <td width="55%" align="center">断面信息表.xls</td>
                            <td width="15%" align="center">
                                <a type="button" class="btnz btnz-info" id="download" href="download/断面信息表.xls"
                                   readonly=""><i class='glyphicon glyphicon-download'></i> 下载</a>
                            </td>
                        </tr>
                    </table>
                    <br>
                    <form id="form1" class="bs-example bs-example-form" method="post" enctype="multipart/form-data"
                          onsubmit="return false;">
                        <input id="excelfile" type="file" name="excelfile" class="btn btn-primary btn-lg btn-block"
                               value="请选择图片"/>
                        <%--<input type="submit" class = "submittt" value="提交">--%>
                        <br>
                        <button id="upload" class="btn btn-success">上传</button>
                        <br>
                        <div class="progress">
                            <div id="jindutiao" class="progress-bar" role="progressbar" aria-valuenow="60"
                                 aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="closeMod3" type="button" class="btn btn-default" data-dismiss="modal">关闭
                    </button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal -->
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
        var val17 = document.getElementById("inlineCheckbox17").checked;
        var val18 = document.getElementById("inlineCheckbox18").checked;
        var val19 = document.getElementById("inlineCheckbox19").checked;

        if (val1 == true) {
            var temp1 = "<div class=\"input-group\">\n" +
                "                                    <span class=\"input-group-addon\">统计年份</span>\n" +
                "                                    <input id=\"select0\" name=\"tjyear\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "                                    <span class=\"input-group-addon\">注释</span>\n" +
                "                                </div>"
            $("#div_0").html(temp1);
            $("#div_0").show();
        }
        if (val1 == false) {
            $("#div_0").hide();
        }
        if (val2 == true) {
            var temp2 = " <div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">统计月份</span>\n" +
                "                                        <input id=\"select1\" name=\"tjmonth\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_1").html(temp2);
            $("#div_1").show();
        }
        if (val2 == false) {
            $("#div_1").hide();
        }
        if (val3 == true) {
            var temp3 = " <div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">统计日</span>\n" +
                "                                        <input id=\"select2\" name=\"tjday\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_2").html(temp3);
            $("#div_2").show();
        }
        if (val3 == false) {
            $("#div_2").hide();
        }
        if (val4 == true) {
            var temp4 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">断面名称</span>\n" +
                "                                        <input id=\"select3\" name=\"pwkCode\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_3").html(temp4);
            $("#div_3").show();
        }
        if (val4 == false) {
            $("#div_3").hide();
        }
        if (val5 == true) {
            var temp5 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">断面编码</span>\n" +
                "                                        <input id=\"select4\" name=\"name\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_4").html(temp5);
            $("#div_4").show();
        }
        if (val5 == false) {
            $("#div_4").hide();
        }
        if (val6 == true) {
            var temp6 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">断面类型</span>\n" +
                "                                        <input id=\"select5\" name=\"pwkName\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_5").html(temp6);
            $("#div_5").show();
        }
        if (val6 == false) {
            $("#div_5").hide();
        }
        if (val7 == true) {
            var temp7 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">所在市</span>\n" +
                "                                        <input id=\"select6\" name=\"pwkType\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_6").html(temp7);
            $("#div_6").show();
        }
        if (val7 == false) {
            $("#div_6").hide();
        }
        if (val8 == true) {
            var temp8 = "   <div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">所在县(市/区)</span>\n" +
                "                                        <input id=\"select7\" name=\"city\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_7").html(temp8);
            $("#div_7").show();
        }
        if (val8 == false) {
            $("#div_7").hide();
        }
        if (val9 == true) {
            var temp9 = "     <div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">所在乡镇</span>\n" +
                "                                        <input id=\"select8\" name=\"country\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_8").html(temp9);
            $("#div_8").show();
        }
        if (val9 == false) {
            $("#div_8").hide();
        }
        if (val10 == true) {
            var temp10 = "    <div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">断面详细地址</span>\n" +
                "                                        <input id=\"select9\" name=\"village\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_9").html(temp10);
            $("#div_9").show();
        }
        if (val10 == false) {
            $("#div_9").hide();
        }
        if (val11 == true) {
            var temp11 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">经度(E)</span>\n" +
                "                                        <input id=\"select10\" name=\"address\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_10").html(temp11);
            $("#div_10").show();
        }
        if (val11 == false) {
            $("#div_10").hide();
        }
        if (val12 == true) {
            var temp12 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">纬度(N)</span>\n" +
                "                                        <input id=\"select11\" name=\"longitude\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_11").html(temp12);
            $("#div_11").show();
        }
        if (val12 == false) {
            $("#div_11").hide();
        }
        if (val13 == true) {
            var temp13 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">所属水系</span>\n" +
                "                                        <input id=\"select12\" name=\"latitude\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_12").html(temp13);
            $("#div_12").show();
        }
        if (val13 == false) {
            $("#div_12").hide();
        }
        if (val14 == true) {
            var temp14 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">所在河流</span>\n" +
                "                                        <input id=\"select13\" name=\"isShenpi\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_13").html(temp14);
            $("#div_13").show();
        }
        if (val14 == false) {
            $("#div_13").hide();
        }
        if (val15 == true) {
            var temp15 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">现状水质类别</span>\n" +
                "                                        <input id=\"select14\" name=\"shenpi\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_14").html(temp15);
            $("#div_14").show();
        }
        if (val15 == false) {
            $("#div_14").hide();
        }
        if (val16 == true) {
            var temp16 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">断面水质目标</span>\n" +
                "                                        <input id=\"select15\" name=\"mainType\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_15").html(temp16);
            $("#div_15").show();
        }
        if (val16 == false) {
            $("#div_15").hide();
        }
        if (val17 == true) {
            var temp17 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">河流水功能区</span>\n" +
                "                                        <input id=\"select16\" name=\"dayAllow\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_16").html(temp17);
            $("#div_16").show();
        }
        if (val17 == false) {
            $("#div_16").hide();
        }
        if (val18 == true) {
            var temp18 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">是否达标</span>\n" +
                "                                        <input id=\"select17\" name=\"yearAllow\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_17").html(temp18);
            $("#div_17").show();
        }
        if (val18 == false) {
            $("#div_18").hide();
        }
        if (val19 == true) {
            var temp19 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">不达标指标</span>\n" +
                "                                        <input id=\"select18\" name=\"isPermit\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_18").html(temp19);
            $("#div_18").show();
        }
        if (val20 == false) {
            $("#div_19").hide();
        }
    }
</script>

</body>
</html>