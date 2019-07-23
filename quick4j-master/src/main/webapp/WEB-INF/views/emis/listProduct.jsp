<%--
  Created by IntelliJ IDEA.
  User: noname
  Date: 2019/7/12
  Time: 21:53
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>企业产品信息</title>
    <script type="text/javascript" src="app/js/emis/productlist.js"></script>
    <script type="text/javascript" src="app/js/emis/table2excel.js"></script>
    <style type="text/css">
        .table-cont {
            max-height: 380px;
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
        .panel-primary{border-color: #c1c1c1;margin-top: 30px;width: 700px}
        .panel-primary>.panel-heading{color:#000000;background-color:#eeeeee;border-color: #c1c1c1}
    </style>
    <script>
        $('input[id=excelimport]').change(function() {
            $('#photoCover').val($(this).val());
        });
    </script>
</head>
<body>
<div class="body">
    <form role="form"  id="selectform">

        <div class="form-group" id="time" style="padding-bottom: 5px">
            <div>
                <label style="display:inline-block">单位统一社会信用代码：</label>
                <div style="display:inline-block">
                    <input  name="uscccode" style="border:1px solid #a1a1a1;width: 200px" class="form-control" />
                </div>
                <label style="display:inline-block">企业名称名称：</label>
                <div style="display:inline-block">
                    <input  name="name" style="border:1px solid #a1a1a1;width: 200px" class="form-control" />
                </div>
                <label style="display:inline-block">产品种类（名称）：</label>
                <div style="display:inline-block">
                    <input name="cpType" style="border:1px solid #a1a1a1;width: 150px" class="form-control" />
                </div>
                <label style="display:inline-block">年：</label>
                <div style="display:inline-block">
                    <input  name="tjyear" class="form-control" id="inputyear" type="number" oninput="if(value.length>4)value=value.slice(0,4)" style="border:1px solid #a1a1a1;width: 80px;"/>
                </div>
                <label style="display:inline-block">月：</label>
                <div style="display:inline-block">
                    <input  name="tjmonth" class="form-control" id="inputmonth" type="number" oninput="if(value>12) value=12" style="border:1px solid #a1a1a1;width:50px;"/>
                </div>
                <button type="button" class="btn btn-default" onclick="select()" style="display:inline-block;margin-left: 50px;margin-right: 20px">查询</button>
                <button type="button" class="btn btn-default" onclick="showall()" style="display:inline-block">查看全部</button>
            </div>
        </div>
    </form>
</div>
<div class="listDataTableDiv" style="height:400px;">
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
                <th>选择</th><th>ID</th><th>编辑</th><th>删除</th><th>单位统一社会信用代码</th><th>单位名称</th><th>产品种类(名称)</th><th>计量单位</th><th>产品产量</th><th>生产工艺</th><th>年</th><th>月</th><th>日</th>
            </tr>
            </thead>
            <tbody id="tbodyone">
            </tbody>
        </table>
    </div>
</div>

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:850px">
        <div class="modal-content">
            <form class="bs-example bs-example-form" role="form" id="addform">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <div>
                        <h4 class="modal-title" id="myModalLabel" style="display:inline-block">增加企业产品信息</h4>
                        <button type="button" onclick="allnull()" style="margin-left: 30px" class="btn btn-default">全部清空</button>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="input-group">
                        <span class="input-group-addon">单位统一社会信用代码</span>
                        <input  name="uscccode"  type="text" class="form-control" placeholder="" >
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon" >单位名称</span>
                        <input  name="name"type="text" class="form-control" placeholder="" >
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon" >产品种类(名称)</span>
                        <input  name="cpType" type="text" class="form-control" placeholder="" >
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon" >计量单位</span>
                        <input  name="cpUnit"type="text" class="form-control" placeholder="" >
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon">产品产量</span>
                        <input name="cpSum" type="number" class="form-control" placeholder="">
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon" >生产工艺</span>
                        <input  name="scTech"type="text" class="form-control" placeholder="" >
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
                </div>
                <div class="modal-footer">
                    <div id="message"></div><br/>
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary" onclick="addproduct()">提交</button>
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
                        <h4 class="modal-title" id="myModalLabel2" style="display:inline-block">修改企业产品信息</h4>
                        <button type="button" onclick="allnull2()" style="margin-left: 30px" class="btn btn-default">全部清空</button>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="input-group">
                        <span class="input-group-addon">单位统一社会信用代码</span>
                        <input  name="uscccode"  type="text" class="form-control" placeholder="" >
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon" >单位名称</span>
                        <input  name="name"type="text" class="form-control" placeholder="" >
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon" >产品种类(名称)</span>
                        <input  name="cpType" type="text" class="form-control" placeholder="" >
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon" >计量单位</span>
                        <input  name="cpUnit"type="text" class="form-control" placeholder="" >
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon">产品产量</span>
                        <input name="cpSum" type="number" class="form-control" placeholder="">
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon" >生产工艺</span>
                        <input  name="scTech"type="text" class="form-control" placeholder="" >
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
<div class="panel panel-primary">
    <div class="panel-heading">
        <h3 class="panel-title">企业产品数据文件录入</h3>
    </div>
    <div class="panel-body">
            <a type="button" class="btn btn-default" style="margin-right:50px;display: inline-block" href="download/产品信息模板.xls">模板下载</a>
            <div style="display: inline-block">
            <form method="post" id="addfile" enctype="multipart/form-data">
                <input style="display:none" id="excelimport" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" type="file"  />
                <div class="input-append" style="padding-bottom:5px">
                    <input id="photoCover" class="form-control" type="text" style="height:30px;width: 300px;display: inline-block">
                    <a class="btn" onclick="$('input[id=excelimport]').click();" style="display: inline-block">选择文档</a>
                </div>
            </form>
            </div>
            <div style="display: inline-block">
                <button class="btn btn-default" onclick="upload1()" style="display: inline-block">上传文档</button>
                <img  src="app/img/jiazai.gif"  alt="请稍等" style="display: inline-block;width: 25px;margin-left: 20px" id="photo1">
            </div>
        </div>
    </div>
</div>
<div class="alert alert-warning" id="warning1" style="width:700px">
    <strong>提示信息：</strong>先下载模板，根据模板要求填写
</div>
</body>
</html>
