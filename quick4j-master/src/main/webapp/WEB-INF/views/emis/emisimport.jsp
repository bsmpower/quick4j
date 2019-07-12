<%--
  Created by IntelliJ IDEA.
  User: noname
  Date: 2019/7/10
  Time: 18:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript" src="app/js/emis/emisimport.js"></script>
    <link rel="stylesheet" type="text/css" href="app/css/emis/buttons.css" />
    <script type="text/javascript" src="app/js/emis/table2excel.js"></script>
    <script type="text/javascript">
        $('input[id=excelimport]').change(function() {
            $('#photoCover').val($(this).val());
        });
        $('input[id=excelimport2]').change(function() {
            $('#photoCover2').val($(this).val());
        });
    </script>
</head>
<body>
<div class="row clearfix" style="width:1200px;margin: auto">
    <div class="col-md-6 column" style="padding-top:50px;padding-right: 50px">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">排污口排放物质监测数据录入</h3>
            </div>
            <div class="panel-body">
                <div style="padding-top:20px;padding-bottom: 20px">
                    <a type="button"class="button button-primary button-rounded" style="color:#ffffff" href="download/排污口监测数据模板.xls">模板下载</a>
                </div>
                <div style="padding-top:20px;padding-bottom: 20px">
                    <form method="post" id="addForm" enctype="multipart/form-data">
                        <input style="display:none" id="excelimport" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" type="file"  />
                        <div class="input-append" style="padding-bottom:5px">
                            <input id="photoCover" class="form-control" type="text" style="height:30px;width: 300px;display: inline-block">
                            <a class="btn" onclick="$('input[id=excelimport]').click();" style="display: inline-block">选择文档</a>
                        </div>
                    </form>
                    <div>
                    <button class="button button-primary button-rounded" onclick="upload1()" style="display: inline-block">上传文档</button>
                    <img  src="app/img/jiazai.gif"  alt="请稍等" style="display: inline-block;width: 25px;margin-left: 20px" id="photo1">
                    </div>
                </div>
            </div>
        </div>
        <div class="alert alert-warning" id="warning1">
            <strong>提示信息：</strong>先下载模板，根据模板要求填写
        </div>
    </div>
    <div class="col-md-6 column" style="padding-top:50px;padding-left: 50px">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">监测断面排放物质监测数据录入</h3>
            </div>
            <div class="panel-body">
                <div style="padding-top:20px;padding-bottom: 20px">
                    <a type="button"class="button button-primary button-rounded" style="color:#ffffff" href="download/监测断面监测数据模板.xls">模板下载</a>
                </div>
                <div style="padding-top:20px;padding-bottom: 20px">
                    <form method="post" id="addForm2" enctype="multipart/form-data">
                        <input style="display:none" id="excelimport2" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" type="file"  />
                        <div class="input-append" style="padding-bottom:5px">
                            <input id="photoCover2" class="form-control" type="text" style="height:30px;width: 300px;display: inline-block">
                            <a class="btn" onclick="$('input[id=excelimport2]').click();" style="display: inline-block">选择文档</a>
                        </div>
                    </form>
                    <div>
                    <button class="button button-primary button-rounded" onclick="upload2()" style="display: inline-block">上传文档</button>
                    <img  src="app/img/jiazai.gif"  alt="请稍等" style="display: inline-block;width: 25px;margin-left: 20px" id="photo2">
                    </div>
                </div>
            </div>
        </div>
        <div class="alert alert-warning" id="warning2">
            <strong>提示信息：</strong>先下载模板，根据模板要求填写
        </div>
    </div>
</div>
</div>


</body>
</html>
