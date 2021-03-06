<%@ page language="java" import="java.util.*" pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>

<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
    <base href="<%=basePath%>">
    <meta charset="utf-8"/>
    <title>Quick4j</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta content="" name="description"/>
    <meta content="" name="author"/>
    <meta name="MobileOptimized" content="320">

    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="assets/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    <link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="assets/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>
    <!-- END GLOBAL MANDATORY STYLES -->

    <!-- BEGIN THEME STYLES -->
    <link href="assets/css/style-metronic.css" rel="stylesheet" type="text/css"/>
    <link href="assets/css/style.css" rel="stylesheet" type="text/css"/>
    <link href="assets/css/style-responsive.css" rel="stylesheet" type="text/css"/>
    <link href="assets/css/plugins.css" rel="stylesheet" type="text/css"/>
    <link href="assets/css/pages/tasks.css" rel="stylesheet" type="text/css"/>
    <link href="assets/css/themes/default.css" rel="stylesheet" type="text/css" id="style_color"/>
    <link href="assets/css/custom.css" rel="stylesheet" type="text/css"/>
    <!-- END THEME STYLES -->

    <link rel="shortcut icon" href="app/img/favicon.ico"/>
</head>
<!-- END HEAD -->

<!-- BEGIN BODY -->
<body class="page-header-fixed">
<!-- BEGIN HEADER -->
<div class="header navbar navbar-inverse navbar-fixed-top">
    <!-- BEGIN TOP NAVIGATION BAR -->
    <div class="header-inner">
        <!-- BEGIN LOGO -->
        <span class="navbar-brand" style="color: white;font-style: italic"><strong><span style="font-size: 24px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;排污口管理系统</span></strong></span>
        <!-- END LOGO -->
        <!-- BEGIN RESPONSIVE MENU TOGGLER -->
        <a href="javascript:;" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <img
                    src="assets/img/menu-toggler.png" alt=""/>
        </a>
        <!-- END RESPONSIVE MENU TOGGLER -->
        <!-- BEGIN TOP NAVIGATION MENU -->
        <ul class="nav navbar-nav pull-right">
            <li class="dropdown user">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                   data-close-others="true">
                    <img alt="" src="assets/img/avatar1_small.jpg"/>
                    <span class="username"> ${userInfo.username } </span>
                    <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="javascript:;" id="trigger_fullscreen">
                            <i class="fa fa-move"></i> 全屏
                        </a>
                    </li>
                    <li>
                        <a href="extra_lock.html">
                            <i class="fa fa-lock"></i> 锁屏
                        </a>
                    </li>
                    <li>
                        <a href="rest/user/logout">
                            <i class="fa fa-key"></i> 退出
                        </a>
                    </li>
                </ul>
            </li>
            <!-- END USER LOGIN DROPDOWN -->
        </ul>
        <!-- END TOP NAVIGATION MENU -->
    </div>
    <!-- END TOP NAVIGATION BAR -->
</div>
<!-- END HEADER -->
<div class="clearfix"></div>
<!-- BEGIN CONTAINER -->
<div class="page-container">
    <!-- BEGIN SIDEBAR -->
    <div class="page-sidebar-wrapper">
        <div class="page-sidebar navbar-collapse collapse">
            <!-- BEGIN SIDEBAR MENU -->
            <ul class="page-sidebar-menu" id="page-sidebar-menu">
                <li class="sidebar-toggler-wrapper">
                    <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
                    <div class="sidebar-toggler hidden-phone"></div>
                    <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
                </li>

                <li class="start active">
                    <a href="rest/page/dashboard" id="btn-dashboard">
                        <i class="fa fa-home"></i><span class="title"> 首页 </span><span
                            class="selected"> </span>
                    </a>
                </li>

                <li class="">
                    <a href="javascript:;">
                        <i class="fa fa-gears"></i><span class="title"> 系统管理 </span><span
                            class="arrow "> </span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="rest/page/usermanage;">
                                用户基本信息管理
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="">
                    <a href="javascript:;">
                        <i class="fa fa-user"></i><span class="title"> 个人中心 </span><span
                            class="arrow "> </span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="javascript:;">
                                信息修改
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                密码修改
                            </a>
                        </li>

                        <!-- 测试权限控制 -->
                        <shiro:hasAnyRoles name="super_admin">
                            <li>
                                <a href="javascript:;">super_admin 拥有此角色</a>
                            </li>
                        </shiro:hasAnyRoles>

                        <shiro:hasPermission name="user:create">
                            <li>
                                <a href="javascript:;">user:create 拥有此权限</a>
                            </li>
                        </shiro:hasPermission>

                        <shiro:hasPermission name="user:update">
                            <li>
                                <a href="javascript:;">user:update 拥有此权限</a>
                            </li>
                        </shiro:hasPermission>

                    </ul>
                </li>

                <li class="">
                    <a href="javascript:;" id="pfkparent">
                        <i class="fa fa-comment"></i><span class="title"> 排污口基础信息管理 </span><span
                            class="arrow "> </span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="rest/page/pwkraintable" id="pfkdr">
                                雨水排污口信息
                            </a>
                        </li>
                        <li>
                            <a href="rest/page/pwkrainsewage" id="pfklr">
                                雨污混合口信息
                            </a>
                        </li>
                        <li>
                            <a href="rest/page/pwkrainxhk" id="pfkxhk">
                                雨水泄洪口信息
                            </a>
                        </li>
                        <li>
                            <a href="rest/page/pwktable" id="pfkwh">
                                排污口基本信息
                            </a>
                        </li>
                        <li>
                            <a href="rest/page/pwkoilfield" id="pfkyt">
                                油田信息
                            </a>
                        </li>
                        <li>
                            <a href="rest/page/pwkport" id="pfkgkmt">
                                港口码头信息
                            </a>
                        </li>
                        <li>
                            <a href="rest/page/pwkisland" id="pfkhdml">
                                海岛名录
                            </a>
                        </li>
                        <li>
                            <a href="rest/page/pwksection" id="pfkdm">
                                断面信息
                            </a>
                        </li>

                    </ul>
                </li>

                <li class="">
                    <a href="javascript:;" id="companyparent">
                        <i class="fa fa-comment"></i><span class="title"> 企业信息管理 </span><span
                            class="arrow "> </span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="javascript:;" id="enterpise">
                                企业基本信息查询与维护
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="rest/page/industryTrash" id="industryTrash">工业废水企业</a>
                                </li>
                                <li>
                                    <a href="rest/page/industryPark" id="industryPark">工业园区</a>
                                </li>
                                <li>
                                    <a href="rest/page/industryLife" id="industryLife">工业生活污水处理厂</a>
                                </li>
                                <li>
                                    <a href="rest/page/municipal" id="municipal">市政污水处理厂</a>
                                </li>
                                <li>
                                    <a href="rest/page/livestock" id="Livestock">畜禽养殖企业</a>
                                </li>
                                <li>
                                    <a href="rest/page/farm" id="farm">农田单位</a>
                                </li>
                                <li>
                                    <a href="rest/page/aquaculture" id="aquaculture">水产单位</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="rest/page/productlist" id="infomation">企业产品信息查询与维护</a>
                        </li>
                    </ul>
                </li>

                <li class="">
                    <a href="javascript:;">
                        <i class="fa fa-comment"></i><span class="title" id="pwkparent"> 排放调查数据信息管理 </span><span
                            class="arrow "> </span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="rest/page/emisimport" id="pwkdr">
                                排放调查数据导入
                            </a>
                        </li>
                        <li>
                            <a href="rest/page/emissionlist" id="pwkwh">
                                排放调查数据查询及维护
                            </a>
                        </li>
                    </ul>

                </li>

                <li class="">
                    <a href="javascript:;" id="docparent">
                        <i class="fa fa-book"></i><span class="title"> 文档资料管理 </span><span
                            class="arrow "> </span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="rest/page/document" class="btn-document" id="conutrylevel">
                                文档资料
                            </a>
                        </li>
                        <li>
                            <a href="rest/page/imageupload" id="provincelevel">
                                图片资料
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="">
                    <a href="javascript:;" id="dataanalyze">
                        <i class="fa fa-thumbs-up"></i><span class="title"> 数据分析 </span><span
                            class="arrow "> </span>
                    </a>
                    <ul class="sub-menu">
                        <%--<li>--%>
                            <%--<a href="rest/page/analyze" id="analyzelist">--%>
                                <%--排污口全指标达标情况--%>
                            <%--</a>--%>
                        <%--</li>--%>
                        <li>
                            <a href="rest/page/norm" id="norm">
                                全指标分析
                            </a>
                        </li>
                        <li>
                            <a href="rest/page/syfx" id="syfx">
                                溯源分析
                            </a>
                        </li>
                        <%--<li>--%>
                            <%--<a href="rest/page/suyuan" id="suyuanlist">--%>
                                <%--排污口单点地图展示--%>
                            <%--</a>--%>
                        <%--</li>--%>
                            <li>
                                 <a href="rest/page/mulpwkanalyze" id="suyuanlist">
                                     排污口相关分析
                            </a>
                            </li>
                    </ul>
                </li>
            </ul>
            <!-- END SIDEBAR MENU -->
        </div>
    </div>
    <!-- END SIDEBAR -->
    <!-- BEGIN CONTENT -->
    <div class="page-content-wrapper">
        <div class="page-content">
            <!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->
            <div class="modal fade" id="portlet-config" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                            <h4 class="modal-title">Modal title</h4>
                        </div>
                        <div class="modal-body">
                            Widget settings form goes here
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn blue">
                                Save changes
                            </button>
                            <button type="button" class="btn default" data-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- /.modal -->
            <!-- END SAMPLE PORTLET CONFIGURATION MODAL FORM-->
            <!-- BEGIN STYLE CUSTOMIZER -->
            <div class="theme-panel hidden-xs hidden-sm">
                <div class="toggler"></div>
                <div class="toggler-close"></div>
                <div class="theme-options">
                    <div class="theme-option theme-colors clearfix">
                        <span> 主题颜色 </span>
                        <ul>
                            <li class="color-black current color-default" data-style="default"></li>
                            <li class="color-blue" data-style="blue"></li>
                            <li class="color-brown" data-style="brown"></li>
                            <li class="color-purple" data-style="purple"></li>
                            <li class="color-grey" data-style="grey"></li>
                            <li class="color-white color-light" data-style="light"></li>
                        </ul>
                    </div>
                    <div class="theme-option">
                        <span> 布局 </span>
                        <select class="layout-option form-control input-small">
                            <option value="fluid">顺序</option>
                            <option value="boxed">盒状</option>
                        </select>
                    </div>
                    <div class="theme-option">
                        <span> 标题 </span>
                        <select class="header-option form-control input-small">
                            <option value="fixed">固定</option>
                            <option value="default">默认</option>
                        </select>
                    </div>
                    <div class="theme-option">
                        <span> 工具栏 </span>
                        <select class="sidebar-option form-control input-small">
                            <option value="fixed">固定</option>
                            <option value="default">默认</option>
                        </select>
                    </div>
                    <div class="theme-option">
                        <span> 工具栏位置 </span>
                        <select class="sidebar-pos-option form-control input-small">
                            <option value="left">左边</option>
                            <option value="right">右边</option>
                        </select>
                    </div>
                    <div class="theme-option">
                        <span> 页脚 </span>
                        <select class="footer-option form-control input-small">
                            <option value="fixed">固定</option>
                            <option value="default">默认</option>
                        </select>
                    </div>
                </div>
            </div>
            <!-- END STYLE CUSTOMIZER -->

            <!-- BEGIN PAGE HEADER-->
            <div class="row">
                <div class="col-md-12">
                    <!-- BEGIN PAGE TITLE & BREADCRUMB-->
                    <ul class="page-breadcrumb breadcrumb" id="transto">
                        <li>
                            <i class="fa fa-location-arrow"></i>
                            <a href="javascript:;" id="first">
                                首页
                            </a>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <a href="javascript:;" id="second">

                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" id="third">
                            </a>
                        </li>
                    </ul>
                    <!-- END PAGE TITLE & BREADCRUMB-->
                </div>
            </div>
            <!-- END PAGE HEADER-->

            <!-- BEGIN DASHBOARD STATS -->
            <div id="main-content">
            </div>
            <div id="showList">
            </div>

            <!-- END PORTLET-->
        </div>
    </div>
    <!-- END CONTENT -->
</div>
<!-- END CONTAINER -->
<!-- BEGIN FOOTER -->
<div class="footer">
    <div class="footer-inner">
        2014 &copy; Quick4j By Eliteams.
    </div>
    <div class="footer-tools">
        <span class="go-top"><i class="fa fa-angle-up"></i></span>
    </div>
</div>
<!--[if lt IE 9]>
<script src="assets/plugins/respond.min.js"></script>
<script src="assets/plugins/excanvas.min.js"></script>
<![endif]-->
<script src="assets/plugins/jquery-1.10.2.min.js" type="text/javascript"></script>
<script src="assets/plugins/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
<script src="assets/plugins/jquery-ui/jquery-ui-1.10.3.custom.min.js" type="text/javascript"></script>
<script src="assets/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="assets/plugins/bootstrap-hover-dropdown/twitter-bootstrap-hover-dropdown.min.js"
        type="text/javascript"></script>
<script src="assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
<script src="assets/plugins/jquery.blockui.min.js" type="text/javascript"></script>
<script src="assets/plugins/jquery.cokie.min.js" type="text/javascript"></script>
<script src="assets/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>

<script src="assets/plugins/jquery-validation/dist/jquery.validate.min.js" type="text/javascript"></script>
<script type="text/javascript" src="assets/plugins/select2/select2.min.js"></script>

<script src="assets/scripts/app.js" type="text/javascript"></script>
<script type="text/javascript" src="app/js/My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript" src="app/js/index.js"></script>
<script type="text/javascript" src="app/js/init-arcgis.js"></script>
<script type="text/javascript" src="app/js/tipso.js"></script>



<%--<script type="text/javascript" src="app/js/tipso.js"></script>--%>

<!-- <script data-main="app/js/main" src="app/lib/requirejs/require.js"></script> -->
</body>
</html>