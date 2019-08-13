<%--
  Created by IntelliJ IDEA.
  User: Deity
  Date: 2019/7/25
  Time: 10:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>用户基本信息管理</title>
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
    <script src="bsmassets/js/others/usermanage.js"></script>
</head>
<body>
<div class="listDataTableDiv" id="listDataTableDiv" style="height:320px;">
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
    </div>
    <div id="table-cont" class="table-cont">
        <table class="table table-striped table-bordered table-hover  table-condensed" id="tablediv">
            <thead>
            <tr class="success">
                <th>选择</th>
                <th>ID</th>
                <th>编辑</th>
                <th>删除</th>
                <th>用户名</th>
                <th>密码</th>
                <th>权限</th>
                <th>创建时间</th>
            </tr>
            </thead>
            <tbody id="tbodyone">
            </tbody>
        </table>
    </div>
</div>
<div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" data-backdrop="static"
         aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="width:1300px">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">
                        新增排污口信息
                    </h4>
                </div>
                <div class="modal-body">
                    <form class="bs-example bs-example-form" role="form" id="contentForm">
                        <div class="input-group">
                            <span class="input-group-addon">用户名</span>
                            <input name="tjyear" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">密码</span>
                            <input name="tjmonth" type="text" class="form-control" placeholder="">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">权限</span>
                            <input name="tjday" type="text" class="form-control" placeholder="">
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
                        更新排污口信息
                    </h4>
                </div>
                <div class="modal-body">
                    <form class="bs-example bs-example-form" role="form">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">用户名</span>
                                        <input id="pwk0" name="tjyear" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">密码</span>
                                        <input id="pwk1" name="tjmonth" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">权限</span>
                                        <input id="pwk2" name="tjday" type="text" class="form-control" placeholder="">
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
</body>
</html>
