<%--
  Created by IntelliJ IDEA.
  User: Deity
  Date: 2019/7/15
  Time: 20:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link href="bsmassets/bootstrap-3.3.7-dist/css/bootstrap.css" rel="stylesheet">
    <!-- 引入bootstrap-table样式 -->
    <link href="bsmassets/bootstrap-3.3.7-dist/css/bootstrap-table.css" rel="stylesheet">

    <script src="bsmassets/bootstrap-3.3.7-dist/js/jquery-3.3.1.min.js"></script>
    <!-- jquery -->
    <script src="bsmassets/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
    <!-- bootstrap-table.min.js -->
    <script src="bsmassets/bootstrap-3.3.7-dist/js/bootstrap-table.js"></script>
    <!-- 引入中文语言包 -->
    <script src="bsmassets/bootstrap-3.3.7-dist/js/bootstrap-table-zh-CN.js"></script>
    <script src="app/js/init-arcgis.js"></script>

</head>
<body>
<table id="RainPwkInfoTable">

</table>
<script type="text/javascript">
    $(function () {

        $('#RainPwkInfoTable').bootstrapTable({
            //url: '/rest/pwkisland/pwkshowlist', // 请求后台的URL（*）
//
        });

    });



</script>
</body>
</html>