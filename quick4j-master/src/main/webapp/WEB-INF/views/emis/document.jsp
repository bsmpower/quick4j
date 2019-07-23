<%--
  Created by IntelliJ IDEA.
  User: noname
  Date: 2019/7/22
  Time: 19:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript" src="app/js/emis/document.js"></script>
    <style type="text/css">
        .table>thead>.success>th {background-color:#ffffff}
        .panel-primary{border-color: #c1c1c1;width: 700px}
        .panel-primary>.panel-heading{color:#000000;background-color:#eeeeee;border-color: #c1c1c1}
    </style>
</head>
<body>
<div class="panel panel-primary">
    <div class="panel-heading">
        <h3 class="panel-title">文档上传</h3>
    </div>
    <div class="panel-body">
        <div style="display: inline-block">
            <form method="post" id="addfile" enctype="multipart/form-data">
                <input style="display:none" id="docimport" type="file"  />
                <div class="input-append" style="padding-bottom:5px">
                    <input id="photoCover" class="form-control" type="text" style="height:30px;width: 300px;display: inline-block">
                    <a class="btn" onclick="$('input[id=docimport]').click();" style="display: inline-block">选择文档</a>
                </div>
            </form>
        </div>
        <div style="display: inline-block">
            <button class="btn btn-default" onclick="upload()" style="display: inline-block">点击上传</button>
            <img  src="app/img/jiazai.gif"  alt="请稍等" style="display: inline-block;width: 25px;margin-left: 20px" id="photo">
        </div>
    </div>
</div>
<div style="padding-bottom: 10px">
    <form >
        <div>
            <input id="str" class="form-control" type="text" style="height:30px;width: 300px;border:1px solid #a1a1a1;display: inline-block">
            <button type="button" class="btn btn-default btn-sm"  onclick="select()" style="display:inline-block">查询</button>
            <button type="button" class="btn btn-default btn-sm"  onclick="listall()" style="display:inline-block">显示所有</button>
        </div>
    </form>
</div>

<div style="height:600px;overflow:auto;">
    <table class="table table-striped table-bordered table-hover  table-condensed" id="tablediv">
        <thead>
        <tr class="success">
            <th>ID</th><th>文档标题</th><th>文档类型</th><th>上传日期</th><th>下载</th><th>删除</th>
        </tr>
        </thead>
        <tbody id="tbodyone">
        </tbody>
    </table>
</div>
</body>
</html>
