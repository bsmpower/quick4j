<%--
  Created by IntelliJ IDEA.
  User: labpc
  Date: 2019/7/22
  Time: 23:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" href="bsmassets/css/bsmcss.css">
    <style type="text/css">
        .table-cont {
            max-height: 800px;
            overflow: auto;
            margin-top: 60px;
            margin-left: 87px
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
    <script src="bsmassets/js/imageupload.js"></script>
</head>
<body>
<div id="imagepart">
    <div class="row">
        <div class="col-lg-2">
            <input id="imagefile" type="file" name="imagefile" class="btn btn-primary btn-lg btn-block"
                   value="请选择图片"/>
        </div>
        <div class="col-lg-3">
            <input id="pwkid" type="text" class="form-control" placeholder="排放口编号">
        </div>
        <div class="col-lg-3">
            <input id="pwkname" type="text" class="form-control" placeholder="排放口名称">
        </div>
        <div class="col-lg-4">
            <button id="upload" class="btn btn-success">上传</button>
            <br>
            <div class="progress">
            <div id="jindutiao" class="progress-bar" role="progressbar" aria-valuenow="60"
                 aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
            </div>
        </div>
        </div>
    </div>

<%--    </form>--%>
</div>

<div class="alert alert-warning" id="warning1" style="width:700px">
    <strong>提示信息：</strong>同一文件请不要上传多次
</div>
<div class="table-cont" id="table-cont">
    <table class="table table-striped table-bordered table-hover  table-condensed" id="tablediv">
        <thead>
        <tr class="success">
            <th>选择</th>
            <th>ID</th>
            <th>编辑</th>
            <th>删除</th>
            <th>排放口编号</th>
            <th>排放口名称</th>
            <th>上传时间</th>
            <th>图片名称</th>
            <th>下载地址</th>
        </tr>
        </thead>
        <tbody id="tbodyone">
        </tbody>
    </table>
</div>
</body>
</html>
