<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <title>layui</title>

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
<%--    <link rel="stylesheet" href="https://js.arcgis.com/3.24/esri/themes/calcite/esri/esri.css">--%>
    <link rel="stylesheet" href="app/js/3.20/esri/css/esri.css">
    <%--<link href="app/css/qmp/public.css" rel="stylesheet">--%>
    <%--<link rel="stylesheet" href="bsmassets/css/bsmcss.css">--%>

    <script src="app/js/fileinput.js" type="text/javascript"></script>
    <script src="bsmassets/js/pwktabledemo.js"></script>
    <script type="text/javascript" src="app/js/echart/echarts-all.js"></script>
    <%--<script type="text/javascript" src='bsmassets/js/qmpTestData.js'></script>--%>
<%--    <script type="text/javascript" src='bsmassets/point/pollsource.js'></script>z--%>
</head>
<body>
<div id="left">
<%--    <div class="row" id="cityoption">--%>
<%--        <div class="col-lg-8 cityoption">--%>
<%--            <br>--%>
<%--            <br>--%>
<%--            <br>--%>
<%--            <br>--%>
<%--            <select name="mapSelect" id="mapselect" width="100px" class="form-control" style="background: #F3F3F3">--%>
<%--                <option value="辽宁省">辽宁省</option>--%>
<%--                <option value="辽阳市">辽阳市</option>--%>
<%--                <option value="沈阳市">沈阳市</option>--%>
<%--                <option value="阜新市">阜新市</option>--%>
<%--                <option value="鞍山市">鞍山市</option>--%>
<%--                <option value="盘锦市">盘锦市</option>--%>
<%--                <option value="锦州市">锦州市</option>--%>
<%--                <option value="丹东市">丹东市</option>--%>
<%--                <option value="本溪市">本溪市</option>--%>
<%--                <option value="抚顺市">抚顺市</option>--%>
<%--                <option value="朝阳市">朝阳市</option>--%>
<%--            </select>--%>
<%--            <br>--%>
<%--            <select name="mapSecondSelect" id="mapsecondselect" width="100px" class="form-control" style="background: #F3F3F3">--%>
<%--            </select>--%>
<%--        </div>--%>
<%--        <div class="col-lg-4 cityoption">--%>
<%--            <br>--%>
<%--            <br>--%>
<%--            <br>--%>
<%--            <br>--%>
<%--            <br>--%>
<%--            <button id="citymap"  class="btn btn-primary">查询</button>--%>
<%--        </div>--%>
<%--    </div>--%>
</div>
<div id="right">
    <div id="map222" data-dojo-type="dijit/layout/ContentPane"
         data-dojo-props="region:'center'"
         style="overflow:hidden;height:430px;width:100%;margin-left: 0px;">

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
    <div id="table-cont" class="table-cont">
        <table class="table table-striped table-bordered table-hover  table-condensed" id="tablediv">
            <thead>
            <tr class="success">
                <th>选择</th>
                <th>ID</th>
                <th>编辑</th>
                <th>删除</th>
                <th>统计年份</th>
                <th>统计月份</th>
                <th>统计日</th>
                <th>排污口编号</th>
                <th>单位名称</th>
                <th>排放口名称</th>
                <th>排放口类型</th>
                <th>所在市</th>
                <th>所在县（市区）</th>
                <th>所在乡镇</th>
                <th>详细地址</th>
                <th>排放口经度</th>
                <th>排放口纬度</th>
                <th>是否取得审批手续</th>
                <th>审批单位及审批文号</th>
                <th>批复主要污染物种类</th>
                <th>批复日允许排放量(吨/日)</th>
                <th>批复年允许排放量(吨/年)</th>
                <th>是否发放许可证</th>
                <th>排污许可证号</th>
                <th>投入使用时间</th>
                <th>是否为非法排污口</th>
                <th>是否为设置不合理排污口</th>
                <th>排放口靠河岸位置</th>
                <th>污水处理工艺</th>
                <th>废水排放方式</th>
                <th>排放去向</th>
                <th>入河方式</th>
                <th>排入河流名称</th>
                <th>河流级别</th>
                <th>河流所属水系</th>
                <th>汇入海域</th>
                <th>入海方式</th>
                <th>排入海域名称</th>
                <th>废水排放标准</th>
                <th>排入河流水功能区</th>
                <th>排入河流水质目标</th>
                <th>排入海域近岸海域环境功能区</th>
                <th>排入海域水质目标</th>
                <th>排入海域海洋功能区类别</th>
                <th>排入海域海洋功能区水质目标</th>
                <th>是否达标</th>
                <th>不达标指标</th>
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
                        新增排放口信息
                    </h4>
                </div>
                <div class="modal-body">
                    <form class="bs-example bs-example-form" role="form" id="contentForm">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">统计年份</span>
                                        <input name="tjyear" type="text" class="form-control"
                                               oninput="if(value.length>4)value=value.slice(0,4)" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">统计月份</span>
                                        <input name="tjmonth" type="text" class="form-control"
                                               oninput="if(value>12) value=12" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">统计日</span>
                                        <input name="tjday" type="text" class="form-control"
                                               oninput="if(value>31) value=31" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排污口编号</span>
                                        <input name="pwkCode" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">单位名称</span>
                                        <input name="name" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排放口名称</span>
                                        <input name="pwkName" type="text" class="form-control" placeholder="">						
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排放口类型</span>
                                        <input name="pwkType" list="pwktype2" type="text" class="form-control" placeholder=" ">
										<datalist id="pwktype2">
                                            <option value="工业废水排污口">工业废水排污口</option>
                                            <option value="工业生活混合污水排污口">工业生活混合污水排污口</option>
                                            <option value="生活污水排污口">生活污水排污口</option>
                                            <option value="畜禽养殖排污口">畜禽养殖排污口</option>
                                            <option value="农田退水入海口">农田退水入海口</option>
                                            <option value="水产养殖排污口">水产养殖排污口</option>
                                            <option value="雨污混合排污口">雨污混合排污口</option>
				                            <option value="雨水排放口">雨水排放口</option>
				                            <option value="泄洪口">泄洪口</option>
				                            <option value="其它">其它</option>
                                        </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">所在市</span>
                                        <input name="city" list="citylist2" type="text" class="form-control" placeholder=" ">
										<datalist id="citylist2">
                                <option value="辽宁省">辽宁省</option>
                                <option value="辽阳市">辽阳市</option>
                                <option value="沈阳市">沈阳市</option>
                                <option value="阜新市">阜新市</option>
                                <option value="鞍山市">鞍山市</option>
                                <option value="盘锦市">盘锦市</option>
                                <option value="锦州市">锦州市</option>
                                <option value="丹东市">丹东市</option>
                                <option value="本溪市">本溪市</option>
                                <option value="抚顺市">抚顺市</option>
                                <option value="朝阳市">朝阳市</option>
                            </datalist>
									
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">所在县</span>
                                        <input name="county" type="text" class="form-control" placeholder=" ">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">所在乡镇</span>
                                        <input name="village" type="text" class="form-control" placeholder=" ">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">详细地址</span>
                                        <input name="address" type="text" class="form-control" placeholder=" ">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排放口经度</span>
                                        <input name="longitude" type="text" class="form-control" placeholder=" ">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排放口纬度</span>
                                        <input name="latitude" type="text" class="form-control" placeholder=" ">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">是否取得审批手续</span>
                                        <input name="isShenpi" list="spsx2" type="text" class="form-control" placeholder=" ">
										<datalist id="spsx2">
                                            <option value="是">是</option>
                                            <option value="否">否</option> 				
                                        </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">审批单位及审批文号</span>
                                        <input name="shenpi" type="text" class="form-control" placeholder=" ">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">批复主要污染物种类</span>
                                        <input name="mainType" type="text" class="form-control" placeholder=" ">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">批复日允许排放量(吨/日)</span>
                                        <input name="dayAllow" type="text" class="form-control" placeholder=" ">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">批复年允许排放量(吨/年)</span>
                                        <input name="yearAllow" type="text" class="form-control" placeholder=" ">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">是否发放许可证</span>
                                        <input name="isPermit" list="xkz2" type="text" class="form-control" placeholder=" ">
										<datalist id="xkz2">
                                            <option value="是">是</option>
                                            <option value="否">否</option> 				
                                        </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排污许可证号</span>
                                        <input name="pwCode" type="text" class="form-control" placeholder=" ">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">投入使用时间</span>
                                        <input name="usetime" type="text" class="form-control" placeholder=" ">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">是否为非法排污口</span>
                                        <input name="isInlaw" list="ffpwk2" type="text" class="form-control" placeholder=" ">
										<datalist id="ffpwk2">
                                            <option value="是">是</option>
                                            <option value="否">否</option> 				
                                        </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                </div>
                                <div class="col-lg-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">是否为设置不合理排污口</span>
                                        <input name="isResonable" list="bhl2" type="text" class="form-control" placeholder=" ">
										<datalist id="bhl2">
                                            <option value="是">是</option>
                                            <option value="否">否</option> 				
                                        </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排放口靠河岸位置</span>
                                        <input name="position" list="khwz2" type="text" class="form-control" placeholder=" ">
										<datalist id="khwz2">
                                <option value="左岸">左岸</option>
                                <option value="右岸">右岸</option>                                            
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">污水处理工艺</span>
                                        <input name="processTech" type="text" class="form-control" placeholder=" ">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">废水排放方式</span>
                                        <input name="emissionMode" list="psfs2" type="text" class="form-control" placeholder=" ">
										<datalist id="psfs2">
                                            <option value="连续排放">连续排放</option>
                                            <option value="间歇排放">间歇排放</option>
                                            <option value="季节性排放">季节性排放</option>
                                            <option value="矿产与能源区">矿产与能源区</option>
                                            <option value="不再排放">不再排放</option>
                                        </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排放去向</span>
                                        <input name="pwqx" list="psqx2" type="text" class="form-control" placeholder=" ">
										<datalist id="psqx2">
                                <option value="入河">入河</option>
                                <option value="入海">入海</option>                                            
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">入河方式</span>
                                        <input name="riverMode" list="rhfs2" type="text" class="form-control" placeholder=" ">
										<datalist id="rhfs2">
                                <option value="明渠">明渠</option>
                                <option value="明管">明管</option>
                                <option value="暗管">暗管</option>
                                <option value="泵站">泵站</option>
                                <option value="涵闸">涵闸</option>
                                <option value="潜没">潜没</option>
                                <option value="其它">其它</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入河流名称</span>
                                        <input name="riverName" type="text" class="form-control" placeholder=" ">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">河流级别</span>
                                        <input name="riverLevel" list="hljb2" type="text" class="form-control" placeholder=" ">
										<datalist id="hljb2">
                                <option value="干流">干流</option>
                                <option value="一级支流">一级支流</option>
                                <option value="二级支流">二级支流</option>
                                <option value="三级支流">三级支流</option>
                                <option value="四级支流">四级支流</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">河流所属水系</span>
                                        <input name="riverType" list="sssx2" type="text" class="form-control" placeholder=" ">
										<datalist id="sssx2">
                                                    <option value="辽河水系">辽河水系</option>
                                                    <option value="辽东湾西部沿渤海诸河水系">辽东湾西部沿渤海诸河水系</option>
                                                    <option value="辽东湾东部沿渤海诸河水系">辽东湾东部沿渤海诸河水系</option>
                                                    <option value="辽东沿黄海诸河水系">辽东沿黄海诸河水系</option>
                                                    <option value="鸭绿江水系">鸭绿江水系</option>
                                                    <option value="滦河及冀东沿海诸河水系">滦河及冀东沿海诸河水系</option>
                                                </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">汇入海域</span>
                                        <input name="tosea" list="hr2" type="text" class="form-control" placeholder=" ">
										<datalist id="hr2">
                                <option value="渤海">渤海</option>
                                <option value="黄海">黄海</option>                                           
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">入海方式</span>
                                        <input name="seaMode" list="ruhai2" type="text" class="form-control" placeholder=" ">
										<datalist id="ruhai2">
                                <option value="通过管道直接入海">通过管道直接入海</option>
                                <option value="通过涵洞直接入海">通过涵洞直接入海</option>
                                <option value="通过水闸直接入海">通过水闸直接入海</option>
                                <option value="通过沟渠直接入海">通过沟渠直接入海</option>
                                <option value="通过滩涂间接入海">通过滩涂间接入海</option>
                                <option value="通过湿地间接入海">通过湿地间接入海</option>
                                <option value="通过坑塘间接入海">通过坑塘间接入海</option>
                                <option value="通过河流间接入海">通过河流间接入海</option>
                                <option value="通过水泥堆砌口间接入海">通过水泥堆砌口间接入海</option>
                                <option value="其它">其它</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入海域名称</span>
                                        <input name="seaName" list="haiyu2" type="text" class="form-control" placeholder=" ">
										<datalist id="haiyu2">
                                <option value="渤海">渤海</option>
                                <option value="黄海">黄海</option>                                           
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">废水排放标准</span>
                                        <input name="emissionStandard" type="text" class="form-control" placeholder=" ">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入河流水功能区</span>
                                        <input name="riverGnq" list="sgnq2" type="text" class="form-control" placeholder=" ">
										<datalist id="sgnq2">
                             <option value="饮用水源区">饮用水源区</option>
                             <option value="工业用水区">工业用水区</option>
                             <option value="农业用水区">农业用水区</option>
                             <option value="渔业用水区">渔业用水区</option>
                             <option value="景观娱乐用水区">景观娱乐用水区</option>
                             <option value="过渡区">过渡区</option>
                             <option value="排污控制区">排污控制区</option>
                           </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入河流水质目标</span>
                                        <input name="riverSzmb" list="hlszmb2" type="text" class="form-control" placeholder=" ">
										<datalist id="hlszmb2">
                                <option value="Ⅰ类">Ⅰ类</option>
                                <option value="Ⅱ类">Ⅱ类</option>
                                <option value="Ⅲ类">Ⅲ类</option>
                                <option value="Ⅳ类">Ⅳ类</option>
                                <option value="Ⅴ类">Ⅴ类</option>
                                <option value="其它">其它</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入海域近岸海域环境功能区</span>
                                        <input name="hyGnq" list="gnq2" type="text" class="form-control" placeholder=" ">
										<datalist id="gnq2">
                                <option value="一类">一类</option>
                                <option value="二类">二类</option>
                                <option value="三类">三类</option>
                                <option value="四类">四类</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入海域水质目标</span>
                                        <input name="hySzmb" list="mb2" type="text" class="form-control" placeholder=" ">
										<datalist id="mb2">
                                <option value="第一类">第一类</option>
                                <option value="不低于第二类">不低于第二类</option>
                                <option value="不低于第三类">不低于第三类</option>
                                <option value="不低于第四类">不低于第四类</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入海域海洋功能区类别</span>
                                        <input name="hyseaGnq" list="gnqtype2" type="text" class="form-control" placeholder=" ">
										<datalist id="gnqtype2">
                                <option value="农渔业区">农渔业区</option>
                                <option value="港口航运区">港口航运区</option>
                                <option value="工业与城镇用海区">工业与城镇用海区</option>
                                <option value="矿产与能源区">矿产与能源区</option>
                                <option value="旅游休闲娱乐区">旅游休闲娱乐区</option>
                                <option value="海洋保护区">海洋保护区</option>
                                <option value="特殊利用区">特殊利用区</option>
                                <option value="保留区">保留区</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入海域海洋功能区水质目标</span>
                                        <input name="hyseaSzmb" list="szmb2" type="text" class="form-control" placeholder=" ">
										<datalist id="szmb2">
                                <option value="不劣于第一类">不劣于第一类</option>
                                <option value="不劣于第二类">不劣于第二类</option>
                                <option value="不劣于第三类">不劣于第三类</option>
                                <option value="不劣于第四类">不劣于第四类</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">是否达标</span>
                                        <input name="isGet" list="isget2" type="text" class="form-control" placeholder=" ">
										<datalist id="isget2">
                                           <option value="是">是</option>
                                            <option value="否">否</option>                                            
                                        </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">不达标指标</span>
                                        <input name="nogetItems" type="text" class="form-control" placeholder=" ">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <div class="alert alert-warning" id="message" style="font-size: 20px">
                    </div>
                    <button id="closeMod" type="button" class="btn btn-default" data-dismiss="modal">关闭
                    </button>
                    <button id="submitPwk" type="button" class="btn btn-primary">
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
                        更新排放口信息
                    </h4>
                </div>
                <div class="modal-body">
                    <form class="bs-example bs-example-form" role="form" id="updatecontentForm">
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
                                        <span class="input-group-addon">排污口编号</span>
                                        <input id="pwk3" name="pwkCode" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">单位名称</span>
                                        <input id="pwk4" name="name" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排放口名称</span>
                                        <input id="pwk5" name="pwkName" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排放口类型</span>
                                        <input id="pwk6" name="pwkType" list="pwktype3" type="text" class="form-control" placeholder="">
										<datalist id="pwktype3">
                                            <option value="工业废水排污口">工业废水排污口</option>
                                            <option value="工业生活混合污水排污口">工业生活混合污水排污口</option>
                                            <option value="生活污水排污口">生活污水排污口</option>
                                            <option value="畜禽养殖排污口">畜禽养殖排污口</option>
                                            <option value="农田退水入海口">农田退水入海口</option>
                                            <option value="水产养殖排污口">水产养殖排污口</option>
                                            <option value="雨污混合排污口">雨污混合排污口</option>
				                            <option value="雨水排放口">雨水排放口</option>
				                            <option value="泄洪口">泄洪口</option>
				                            <option value="其它">其它</option>
                                        </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">所在市</span>
                                        <input id="pwk7" name="city" list="citylist3" type="text" class="form-control" placeholder="">
										<datalist id="citylist3">
                                <option value="辽宁省">辽宁省</option>
                                <option value="辽阳市">辽阳市</option>
                                <option value="沈阳市">沈阳市</option>
                                <option value="阜新市">阜新市</option>
                                <option value="鞍山市">鞍山市</option>
                                <option value="盘锦市">盘锦市</option>
                                <option value="锦州市">锦州市</option>
                                <option value="丹东市">丹东市</option>
                                <option value="本溪市">本溪市</option>
                                <option value="抚顺市">抚顺市</option>
                                <option value="朝阳市">朝阳市</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">所在县</span>
                                        <input id="pwk8" name="county" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">所在乡镇</span>
                                        <input id="pwk9" name="village" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">详细地址</span>
                                        <input id="pwk10" name="address" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排放口经度</span>
                                        <input id="pwk11" name="longitude" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>

                                    <div class="input-group">
                                        <span class="input-group-addon">排放口纬度</span>
                                        <input id="pwk12" name="latitude" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">是否取得审批手续</span>
                                        <input id="pwk13" list="spsx3" name="isShenpi" type="text" class="form-control"
                                               placeholder="">
											   <datalist id="spsx3">
                                            <option value="是">是</option>
                                            <option value="否">否</option> 				
                                        </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">审批单位及审批文号</span>
                                        <input id="pwk14" name="shenpi" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">批复主要污染物种类</span>
                                        <input id="pwk15" name="mainType" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">批复日允许排放量(吨/日)</span>
                                        <input id="pwk16" name="dayAllow" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">批复年允许排放量(吨/年)</span>
                                        <input id="pwk17" name="yearAllow" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">是否发放许可证</span>
                                        <input id="pwk18" list="xkz3" name="isPermit" type="text" class="form-control"
                                               placeholder="">
											   <datalist id="xkz3">
                                            <option value="是">是</option>
                                            <option value="否">否</option> 				
                                        </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排污许可证号</span>
                                        <input id="pwk19" name="pwCode" type="text" class="form-control" placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">投入使用时间</span>
                                        <input id="pwk20" name="usetime" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">是否为非法排污口</span>
                                        <input id="pwk21" list="ffpwk3" name="isInlaw" type="text" class="form-control"
                                               placeholder="">
											   <datalist id="ffpwk3">
                                            <option value="是">是</option>
                                            <option value="否">否</option> 				
                                        </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                </div>
                                <div class="col-lg-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">是否为设置不合理排污口</span>
                                        <input id="pwk22" list="bhl3" name="isResonable" type="text" class="form-control"
                                               placeholder="">
											   <datalist id="bhl3">
                                            <option value="是">是</option>
                                            <option value="否">否</option> 				
                                        </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排放口靠河岸位置</span>
                                        <input id="pwk23" list="khwz3" name="position" type="text" class="form-control"
                                               placeholder="">
											   <datalist id="khwz3">
                                <option value="左岸">左岸</option>
                                <option value="右岸">右岸</option>                                            
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">污水处理工艺</span>
                                        <input id="pwk24" name="processTech" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">废水排放方式</span>
                                        <input id="pwk25" list="psfs3" name="emissionMode" type="text" class="form-control"
                                               placeholder="">
											   <datalist id="psfs3">
                                            <option value="连续排放">连续排放</option>
                                            <option value="间歇排放">间歇排放</option>
                                            <option value="季节性排放">季节性排放</option>
                                            <option value="矿产与能源区">矿产与能源区</option>
                                            <option value="不再排放">不再排放</option>
                                        </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排放去向</span>
                                        <input id="pwk26" list="psqx3" name="pwqx" type="text" class="form-control" placeholder="">
										<datalist id="psqx3">
                                <option value="入河">入河</option>
                                <option value="入海">入海</option>                                            
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">入河方式</span>
                                        <input id="pwk27" list="rhfs3" name="riverMode" type="text" class="form-control"
                                               placeholder="">
											   <datalist id="rhfs3">
                                <option value="明渠">明渠</option>
                                <option value="明管">明管</option>
                                <option value="暗管">暗管</option>
                                <option value="泵站">泵站</option>
                                <option value="涵闸">涵闸</option>
                                <option value="潜没">潜没</option>
                                <option value="其它">其它</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入河流名称</span>
                                        <input id="pwk28" name="riverName" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">河流级别</span>
                                        <input id="pwk29" list="hljb3" name="riverLevel" type="text" class="form-control"
                                               placeholder="">
											   <datalist id="hljb3">
                                <option value="干流">干流</option>
                                <option value="一级支流">一级支流</option>
                                <option value="二级支流">二级支流</option>
                                <option value="三级支流">三级支流</option>
                                <option value="四级支流">四级支流</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">河流所属水系</span>
                                        <input id="pwk30" list="sssx3" name="riverType" type="text" class="form-control"
                                               placeholder="">
											   <datalist id="sssx3">
                                                    <option value="辽河水系">辽河水系</option>
                                                    <option value="辽东湾西部沿渤海诸河水系">辽东湾西部沿渤海诸河水系</option>
                                                    <option value="辽东湾东部沿渤海诸河水系">辽东湾东部沿渤海诸河水系</option>
                                                    <option value="辽东沿黄海诸河水系">辽东沿黄海诸河水系</option>
                                                    <option value="鸭绿江水系">鸭绿江水系</option>
                                                    <option value="滦河及冀东沿海诸河水系">滦河及冀东沿海诸河水系</option>
                                                </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">汇入海域</span>
                                        <input id="pwk31" list="hr3" name="tosea" type="text" class="form-control" placeholder="">
										<datalist id="hr3">
                                <option value="渤海">渤海</option>
                                <option value="黄海">黄海</option>                                           
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">入海方式</span>
                                        <input id="pwk32" list="ruhai3" name="seaMode" type="text" class="form-control"
                                               placeholder="">
											   <datalist id="ruhai3">
                                <option value="通过管道直接入海">通过管道直接入海</option>
                                <option value="通过涵洞直接入海">通过涵洞直接入海</option>
                                <option value="通过水闸直接入海">通过水闸直接入海</option>
                                <option value="通过沟渠直接入海">通过沟渠直接入海</option>
                                <option value="通过滩涂间接入海">通过滩涂间接入海</option>
                                <option value="通过湿地间接入海">通过湿地间接入海</option>
                                <option value="通过坑塘间接入海">通过坑塘间接入海</option>
                                <option value="通过河流间接入海">通过河流间接入海</option>
                                <option value="通过水泥堆砌口间接入海">通过水泥堆砌口间接入海</option>
                                <option value="其它">其它</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入海域名称</span>
                                        <input id="pwk33" list="haiyu3" name="seaName" type="text" class="form-control"
                                               placeholder="">
											   <datalist id="haiyu3">
                                <option value="渤海">渤海</option>
                                <option value="黄海">黄海</option>                                           
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">废水排放标准</span>
                                        <input id="pwk34" name="emissionStandard" type="text" class="form-control"
                                               placeholder="">
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入河流水功能区</span>
                                        <input id="pwk35" list="sgnq3" name="riverGnq" type="text" class="form-control"
                                               placeholder="">
											   <datalist id="sgnq3">
                             <option value="饮用水源区">饮用水源区</option>
                             <option value="工业用水区">工业用水区</option>
                             <option value="农业用水区">农业用水区</option>
                             <option value="渔业用水区">渔业用水区</option>
                             <option value="景观娱乐用水区">景观娱乐用水区</option>
                             <option value="过渡区">过渡区</option>
                             <option value="排污控制区">排污控制区</option>
                           </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入河流水质目标</span>
                                        <input id="pwk36" list="hlszmb3" name="riverSzmb" type="text" class="form-control"
                                               placeholder="">
											   <datalist id="hlszmb3">
                                <option value="Ⅰ类">Ⅰ类</option>
                                <option value="Ⅱ类">Ⅱ类</option>
                                <option value="Ⅲ类">Ⅲ类</option>
                                <option value="Ⅳ类">Ⅳ类</option>
                                <option value="Ⅴ类">Ⅴ类</option>
                                <option value="其它">其它</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入海域近岸海域环境功能区</span>
                                        <input id="pwk37" list="gnq3" name="hyGnq" type="text" class="form-control" placeholder="">
										<datalist id="gnq3">
                                <option value="一类">一类</option>
                                <option value="二类">二类</option>
                                <option value="三类">三类</option>
                                <option value="四类">四类</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入海域水质目标</span>
                                        <input id="pwk38" list="mb3" name="hySzmb" type="text" class="form-control" placeholder="">
										<datalist id="mb3">
                                <option value="第一类">第一类</option>
                                <option value="不低于第二类">不低于第二类</option>
                                <option value="不低于第三类">不低于第三类</option>
                                <option value="不低于第四类">不低于第四类</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入海域海洋功能区类别</span>
                                        <input id="pwk39" list="gnqtype3" name="hyseaGnq" type="text" class="form-control"
                                               placeholder="">
											   <datalist id="gnqtype3">
                                <option value="农渔业区">农渔业区</option>
                                <option value="港口航运区">港口航运区</option>
                                <option value="工业与城镇用海区">工业与城镇用海区</option>
                                <option value="矿产与能源区">矿产与能源区</option>
                                <option value="旅游休闲娱乐区">旅游休闲娱乐区</option>
                                <option value="海洋保护区">海洋保护区</option>
                                <option value="特殊利用区">特殊利用区</option>
                                <option value="保留区">保留区</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">排入海域海洋功能区水质目标</span>
                                        <input id="pwk40" list="szmb3" name="hyseaSzmb" type="text" class="form-control"
                                               placeholder="">
											   <datalist id="szmb3">
                                <option value="不劣于第一类">不劣于第一类</option>
                                <option value="不劣于第二类">不劣于第二类</option>
                                <option value="不劣于第三类">不劣于第三类</option>
                                <option value="不劣于第四类">不劣于第四类</option>
                            </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">是否达标</span>
                                        <input id="pwk41" list="isget3" name="isGet" type="text" class="form-control" placeholder="">
										<datalist id="isget3">
                                           <option value="是">是</option>
                                            <option value="否">否</option>                                            
                                        </datalist>
                                        <span class="input-group-addon">注释</span>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <span class="input-group-addon">不达标指标</span>
                                        <input id="pwk42" name="nogetItems" type="text" class="form-control"
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
                            <input type="checkbox" id="inlineCheckbox4" value="option4" onclick="exe()"> 排污口编号
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox5" value="option5" onclick="exe()"> 单位名称
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox6" value="option6" onclick="exe()"> 排放口名称
                        </label>
                    </div>
                    <br>
                    <div>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox7" value="option7" onclick="exe()"> 排放口类型
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox8" value="option8" onclick="exe()"> 所在市(city)
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox9" value="option9" onclick="exe()"> 所在县(市/区)
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox10" value="option10" onclick="exe()"> 所在乡镇
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox11" value="option11" onclick="exe()"> 详细地址
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox12" value="option12" onclick="exe()"> 排放口经度
                        </label>
                    </div>
                    <br>
                    <div>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox13" value="option13" onclick="exe()"> 排放口纬度
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox14" value="option14" onclick="exe()"> 是否取得审批手续
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox15" value="option15" onclick="exe()"> 审批单位及审批文号
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox16" value="option16" onclick="exe()"> 批复主要污染物种类
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox17" value="option17" onclick="exe()"> 批复日允许排放量(吨/日)
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox18" value="option18" onclick="exe()"> 批复年允许排放量(吨/年
                        </label>
                    </div>
                    <br>
                    <div>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox19" value="option19" onclick="exe()"> 是否发放许可证
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox20" value="option20" onclick="exe()"> 排污许可证号
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox21" value="option21" onclick="exe()"> 投入使用时间
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox22" value="option22" onclick="exe()"> 是否为非法排污口
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox23" value="option23" onclick="exe()"> 是否为设置不合理排污口
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox24" value="option24" onclick="exe()"> 排放口靠河岸位置
                        </label>
                    </div>
                    <br>
                    <div>
                        <div>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox25" value="option25" onclick="exe()"> 污水处理工艺
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox26" value="option26" onclick="exe()"> 废水排放方式
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox27" value="option27" onclick="exe()"> 排放去向
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox28" value="option28" onclick="exe()"> 入河方式
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox29" value="option29" onclick="exe()"> 排入河流名称
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox30" value="option30" onclick="exe()"> 河流级别
                            </label>
                        </div>
                        <br>
                        <div>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox31" value="option31" onclick="exe()"> 河流所属水系
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox32" value="option32" onclick="exe()"> 汇入海域
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox33" value="option33" onclick="exe()"> 入海方式
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox34" value="option34" onclick="exe()"> 排入海域名称
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox35" value="option35" onclick="exe()"> 废水排放标准
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox36" value="option36" onclick="exe()"> 排入河流水功能区
                            </label>
                        </div>
                        <br>
                        <div>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox37" value="option37" onclick="exe()"> 排入河流水质目标
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox38" value="option38" onclick="exe()">
                                排入海域近岸海域环境功能区
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox39" value="option39" onclick="exe()"> 排入海域水质目标
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox40" value="option40" onclick="exe()">
                                排入海域海洋功能区类别
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox41" value="option41" onclick="exe()">
                                排入海域海洋功能区水质目标
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox42" value="option42" onclick="exe()"> 是否达标
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox43" value="option43" onclick="exe()"> 不达标指标
                            </label>
                        </div>

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
                    <div id="div_19"></div>
                    <div id="div_20"></div>
                    <div id="div_21"></div>
                    <div id="div_22"></div>
                    <div id="div_23"></div>
                    <div id="div_24"></div>
                    <div id="div_25"></div>
                    <div id="div_26"></div>
                    <div id="div_27"></div>
                    <div id="div_28"></div>
                    <div id="div_29"></div>
                    <div id="div_30"></div>
                    <div id="div_31"></div>
                    <div id="div_32"></div>
                    <div id="div_33"></div>
                    <div id="div_34"></div>
                    <div id="div_35"></div>
                    <div id="div_36"></div>
                    <div id="div_37"></div>
                    <div id="div_38"></div>
                    <div id="div_39"></div>
                    <div id="div_40"></div>
                    <div id="div_41"></div>
                    <div id="div_42"></div>


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
                            <td width="55%" align="center">排放口基本信息表.xls</td>
                            <td width="15%" align="center">
                                <a type="button" class="btnz btnz-info" id="download" href="download/排放口基本信息表.xls"
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
        var val20 = document.getElementById("inlineCheckbox20").checked;
        var val21 = document.getElementById("inlineCheckbox21").checked;
        var val22 = document.getElementById("inlineCheckbox22").checked;
        var val23 = document.getElementById("inlineCheckbox23").checked;
        var val24 = document.getElementById("inlineCheckbox24").checked;
        var val25 = document.getElementById("inlineCheckbox25").checked;
        var val26 = document.getElementById("inlineCheckbox26").checked;
        var val27 = document.getElementById("inlineCheckbox27").checked;
        var val28 = document.getElementById("inlineCheckbox28").checked;
        var val29 = document.getElementById("inlineCheckbox29").checked;
        var val30 = document.getElementById("inlineCheckbox30").checked;
        var val31 = document.getElementById("inlineCheckbox31").checked;
        var val32 = document.getElementById("inlineCheckbox32").checked;
        var val33 = document.getElementById("inlineCheckbox33").checked;
        var val34 = document.getElementById("inlineCheckbox34").checked;
        var val35 = document.getElementById("inlineCheckbox35").checked;
        var val36 = document.getElementById("inlineCheckbox36").checked;
        var val37 = document.getElementById("inlineCheckbox37").checked;
        var val38 = document.getElementById("inlineCheckbox38").checked;
        var val39 = document.getElementById("inlineCheckbox39").checked;
        var val40 = document.getElementById("inlineCheckbox40").checked;
        var val41 = document.getElementById("inlineCheckbox41").checked;
        var val42 = document.getElementById("inlineCheckbox42").checked;
        var val43 = document.getElementById("inlineCheckbox43").checked;

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
                "                                        <span class=\"input-group-addon\">排污口编号</span>\n" +
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
                "                                        <span class=\"input-group-addon\">单位名称</span>\n" +
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
                "                                        <span class=\"input-group-addon\">排放口名称</span>\n" +
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
                "                                        <span class=\"input-group-addon\">排放口类型</span>\n" +
                "                                        <input id=\"select6\" list=\"pwktype1\" name=\"pwkType\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
				"                                        <datalist id=\"pwktype1\">\n" +
                "                                                <option value=\"工业废水排污口\">工业废水排污口</option>\n" +
                "                                                <option value=\"工业生活混合污水排污口\">工业生活混合污水排污口</option>\n" +
                "                                                <option value=\"生活污水排污口\">生活污水排污口</option>\n" +
                "                                                <option value=\"畜禽养殖排污口\">畜禽养殖排污口</option>\n" +
                "                                                <option value=\"农田退水入海口\">农田退水入海口</option>\n" +
                "                                                <option value=\"水产养殖排污口\">水产养殖排污口</option>\n" +
                "                                                <option value=\"雨污混合排污口\">雨污混合排污口</option>\n" +
				"                                                <option value=\"雨水排放口\">雨水排放口</option>\n" +
				"                                                <option value=\"泄洪口\">泄洪口</option>\n" +
				"                                                <option value=\"其它\">其它</option>\n" +
                "                                        </datalist>"+
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
                "                                        <span class=\"input-group-addon\">所在市</span>\n" +
                "                                        <input id=\"select7\" list=\"citylist1\" name=\"city\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "                                         <datalist id=\"citylist1\">\n" +
                "                                                <option value=\"辽宁省\">辽宁省</option>\n" +
                "                                                <option value=\"辽阳市\">辽阳市</option>\n" +
                "                                                <option value=\"沈阳市\">沈阳市</option>\n" +
                "                                                <option value=\"阜新市\">阜新市</option>\n" +
                "                                                <option value=\"鞍山市\">鞍山市</option>\n" +
                "                                                <option value=\"盘锦市\">盘锦市</option>\n" +
                "                                                <option value=\"锦州市\">锦州市</option>\n" +
                "                                                <option value=\"丹东市\">丹东市</option>\n" +
                "                                                <option value=\"本溪市\">本溪市</option>\n" +
                "                                                <option value=\"抚顺市\">抚顺市</option>\n" +
                "                                                <option value=\"朝阳市\">朝阳市</option>\n" +
                "                            </datalist><span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_7").html(temp8);
            $("#div_7").show();
        }
        if (val8 == false) {
            $("#div_7").hide();
        }
        if (val9 == true) {
            var temp9 = "     <div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">所在县</span>\n" +
                "                                        <input id=\"select8\" name=\"county\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
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
                "                                        <span class=\"input-group-addon\">所在乡镇</span>\n" +
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
                "                                        <span class=\"input-group-addon\">详细地址</span>\n" +
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
                "                                        <span class=\"input-group-addon\">排放口经度</span>\n" +
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
                "                                        <span class=\"input-group-addon\">排放口纬度</span>\n" +
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
                "                                        <span class=\"input-group-addon\">是否取得审批手续</span>\n" +
                "                                        <input id=\"select13\" lsit=\"spsx1\" name=\"isShenpi\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
				"                                        <datalist id=\"spsx1\">\n" +
                "                                                <option value=\"是\">是</option>\n" +
                "                                                <option value=\"否\">否</option>\n" + 				
                "                                        </datalist>"+
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
                "                                        <span class=\"input-group-addon\">审批单位及审批文号</span>\n" +
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
                "                                        <span class=\"input-group-addon\">批复主要污染物种类</span>\n" +
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
                "                                        <span class=\"input-group-addon\">批复日允许排放量(吨/日)</span>\n" +
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
                "                                        <span class=\"input-group-addon\">批复年允许排放量(吨/年)</span>\n" +
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
                "                                        <span class=\"input-group-addon\">是否发放许可证</span>\n" +
                "                                        <input id=\"select18\" list=\"xkz1\" name=\"isPermit\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
				"                                        <datalist id=\"xkz1\">\n" +
                "                                                <option value=\"是\">是</option>\n" +
                "                                                <option value=\"否\">否</option>\n" + 				
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_18").html(temp19);
            $("#div_18").show();
        }
        if (val19 == false) {
            $("#div_18").hide();
        }
        if (val20 == true) {
            var temp20 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">排污许可证号</span>\n" +
                "                                        <input id=\"select19\" name=\"pwCode\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_19").html(temp20);
            $("#div_19").show();
        }
        if (val20 == false) {
            $("#div_19").hide();
        }
        if (val21 == true) {
            var temp21 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">投入使用时间</span>\n" +
                "                                        <input id=\"select20\" name=\"usetime\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_20").html(temp21);
            $("#div_20").show();
        }
        if (val21 == false) {
            $("#div_20").hide();
        }
        if (val22 == true) {
            var temp22 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">是否为非法排污口</span>\n" +
                "                                        <input id=\"select21\" list=\"ffpwk1\" name=\"isInlaw\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
				"                                        <datalist id=\"ffpwk1\">\n" +
                "                                                <option value=\"是\">是</option>\n" +
                "                                                <option value=\"否\">否</option>\n" + 				
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_21").html(temp22);
            $("#div_21").show();
        }
        if (val22 == false) {
            $("#div_21").hide();
        }
        if (val23 == true) {
            var temp23 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">是否为设置不合理排污口</span>\n" +
                "                                        <input id=\"select22\" list=\"bhl1\" name=\"isResonable\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
				"                                        <datalist id=\"bhl1\">\n" +
                "                                                <option value=\"是\">是</option>\n" +
                "                                                <option value=\"否\">否</option>\n" + 				
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_22").html(temp23);
            $("#div_22").show();
        }
        if (val23 == false) {
            $("#div_22").hide();
        }
        if (val24 == true) {
            var temp24 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">排放口靠河岸位置</span>\n" +
                "                                        <input id=\"select23\" list=\"khwz1\" name=\"position\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
				"                                        <datalist id=\"khwz1\">\n" +
                "                                                <option value=\"左岸\">左岸</option>\n" +
                "                                                <option value=\"右岸\">右岸</option>\n" +                                             
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_23").html(temp24);
            $("#div_23").show();
        }
        if (val24 == false) {
            $("#div_23").hide();
        }
        if (val25 == true) {
            var temp25 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">污水处理工艺</span>\n" +
                "                                        <input id=\"select24\" name=\"processTech\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_24").html(temp25);
            $("#div_24").show();
        }
        if (val25 == false) {
            $("#div_24").hide();
        }
        if (val26 == true) {
            var temp26 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">废水排放方式</span>\n" +
                "                                        <input id=\"select25\" list=\"psfs1\" name=\"emissionMode\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
				"                                        <datalist id=\"psfs1\">\n" +
                "                                                <option value=\"连续排放\">连续排放</option>\n" +
                "                                                <option value=\"间歇排放\">间歇排放</option>\n" +
                "                                                <option value=\"季节性排放\">季节性排放</option>\n" +
                "                                                <option value=\"矿产与能源区\">矿产与能源区</option>\n" +
                "                                                <option value=\"不再排放\">不再排放</option>\n" +
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_25").html(temp26);
            $("#div_25").show();
        }
        if (val26 == false) {
            $("#div_25").hide();
        }
        if (val27 == true) {
            var temp27 = " <div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">排放去向</span>\n" +
                "                                        <input id=\"select26\" list=\"psqx1\" name=\"pwqx\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
				"                                        <datalist id=\"psqx1\">\n" +
                "                                                <option value=\"入河\">入河</option>\n" +
                "                                                <option value=\"入海\">入海</option>\n" +                                             
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_26").html(temp27);
            $("#div_26").show();
        }
        if (val27 == false) {
            $("#div_26").hide();
        }
        if (val28 == true) {
            var temp28 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">入河方式</span>\n" +
                "                                        <input id=\"select27\" list=\"rhfs1\" name=\"riverMode\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
				"                                        <datalist id=\"rhfs1\">\n" +
                "                                                <option value=\"明渠\">明渠</option>\n" +
                "                                                <option value=\"明管\">明管</option>\n" +
                "                                                <option value=\"暗管\">暗管</option>\n" +
                "                                                <option value=\"泵站\">泵站</option>\n" +
                "                                                <option value=\"涵闸\">涵闸</option>\n" +
                "                                                <option value=\"潜没\">潜没</option>\n" +
                "                                                <option value=\"其它\">其它</option>\n" +
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_27").html(temp28);
            $("#div_27").show();
        }
        if (val28 == false) {
            $("#div_27").hide();
        }
        if (val29 == true) {
            var temp29 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">排入河流名称</span>\n" +
                "                                        <input id=\"select28\" name=\"riverName\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_28").html(temp29);
            $("#div_28").show();
        }
        if (val29 == false) {
            $("#div_28").hide();
        }
        if (val30 == true) {
            var temp30 = " <div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">河流级别</span>\n" +
                "                                        <input id=\"select29\" list=\"hljb1\" name=\"riverLevel\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
				"                                        <datalist id=\"hljb1\">\n" +
                "                                                <option value=\"干流\">干流</option>\n" +
                "                                                <option value=\"一级支流\">一级支流</option>\n" +
                "                                                <option value=\"二级支流\">二级支流</option>\n" +
                "                                                <option value=\"三级支流\">三级支流</option>\n" +
                "                                                <option value=\"四级支流\">四级支流</option>\n" +
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_29").html(temp30);
            $("#div_29").show();
        }
        if (val30 == false) {
            $("#div_29").hide();
        }
        if (val31 == true) {
            var temp31 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">河流所属水系</span>\n" +
                "                                        <input id=\"select30\" list=\"sssx1\" name=\"riverType\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
				"                                        <datalist id=\"sssx1\">\n" +
                "                                                <option value=\"辽河水系\">辽河水系</option>\n" +
                "                                                <option value=\"辽东湾西部沿渤海诸河水系\">辽东湾西部沿渤海诸河水系</option>\n" +
                "                                                <option value=\"辽东湾东部沿渤海诸河水系\">辽东湾东部沿渤海诸河水系</option>\n" +
                "                                                <option value=\"辽东沿黄海诸河水系\">辽东沿黄海诸河水系</option>\n" +
                "                                                <option value=\"鸭绿江水系\">鸭绿江水系</option>\n" +
                "                                                <option value=\"滦河及冀东沿海诸河水系\">滦河及冀东沿海诸河水系</option>\n" +
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_30").html(temp31);
            $("#div_30").show();
        }
        if (val31 == false) {
            $("#div_30").hide();
        }
        if (val32 == true) {
            var temp32 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">汇入海域</span>\n" +
                "                                        <input id=\"select31\" list=\"hr1\" name=\"tosea\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
				"                                        <datalist id=\"hr1\">\n" +
                "                                                <option value=\"渤海\">渤海</option>\n" +
                "                                                <option value=\"黄海\">黄海</option>\n" +                                             
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_31").html(temp32);
            $("#div_31").show();
        }
        if (val32 == false) {
            $("#div_31").hide();
        }
        if (val33 == true) {
            var temp33 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">入海方式</span>\n" +
                "                                        <input id=\"select32\" list=\"ruhai1\" name=\"seaMode\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
				"                                        <datalist id=\"ruhai1\">\n" +
                "                                                <option value=\"通过管道直接入海\">通过管道直接入海</option>\n" +
                "                                                <option value=\"通过涵洞直接入海\">通过涵洞直接入海</option>\n" +
                "                                                <option value=\"通过水闸直接入海\">通过水闸直接入海</option>\n" +
                "                                                <option value=\"通过沟渠直接入海\">通过沟渠直接入海</option>\n" +
                "                                                <option value=\"通过滩涂间接入海\">通过滩涂间接入海</option>\n" +
                "                                                <option value=\"通过湿地间接入海\">通过湿地间接入海</option>\n" +
                "                                                <option value=\"通过坑塘间接入海\">通过坑塘间接入海</option>\n" +
                "                                                <option value=\"通过河流间接入海\">通过河流间接入海</option>\n" +
                "                                                <option value=\"通过水泥堆砌口间接入海\">通过水泥堆砌口间接入海</option>\n" +
                "                                                <option value=\"其它\">其它</option>\n" +
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_32").html(temp33);
            $("#div_32").show();
        }
        if (val33 == false) {
            $("#div_32").hide();
        }
        if (val34 == true) {
            var temp34 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">排入海域名称</span>\n" +
                "                                        <input id=\"select33\" list=\"haiyu1\" name=\"seaName\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
				"                                        <datalist id=\"haiyu1\">\n" +
                "                                                <option value=\"渤海\">渤海</option>\n" +
                "                                                <option value=\"黄海\">黄海</option>\n" +                                             
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_33").html(temp34);
            $("#div_33").show();
        }
        if (val34 == false) {
            $("#div_33").hide();
        }
        if (val35 == true) {
            var temp35 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">废水排放标准</span>\n" +
                "                                        <input id=\"select34\" name=\"emissionStandard\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_34").html(temp35);
            $("#div_34").show();
        }
        if (val35 == false) {
            $("#div_34").hide();
        }
        if (val36 == true) {
            var temp36 = " <div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">排入河流水功能区</span>\n" +
                "                                        <input id=\"select35\" list=\"sgnq1\" name=\"riverGnq\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
				"                                        <datalist id=\"sgnq1\">\n" +
                "                                                <option value=\"饮用水源区\">饮用水源区</option>\n" +
                "                                                <option value=\"工业用水区\">工业用水区</option>\n" +
                "                                                <option value=\"农业用水区\">农业用水区</option>\n" +
                "                                                <option value=\"渔业用水区\">渔业用水区</option>\n" +
                "                                                <option value=\"景观娱乐用水区\">景观娱乐用水区</option>\n" +
                "                                                <option value=\"过渡区\">过渡区</option>\n" +
                "                                                <option value=\"排污控制区\">排污控制区</option>\n" +
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_35").html(temp36);
            $("#div_35").show();
        }
        if (val36 == false) {
            $("#div_35").hide();
        }
        if (val37 == true) {
            var temp37 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">排入河流水质目标</span>\n" +
                "                                        <input id=\"select36\" list=\"hlszmb1\" name=\"riverSzmb\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
				"                                        <datalist id=\"hlszmb1\">\n" +
                "                                                <option value=\"Ⅰ类\">Ⅰ类</option>\n" +
                "                                                <option value=\"Ⅱ类\">Ⅱ类</option>\n" +
                "                                                <option value=\"Ⅲ类\">Ⅲ类</option>\n" +
                "                                                <option value=\"Ⅳ类\">Ⅳ类</option>\n" +
                "                                                <option value=\"Ⅴ类\">Ⅴ类</option>\n" +
                "                                                <option value=\"其它\">其它</option>\n" +
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_36").html(temp37);
            $("#div_36").show();
        }
        if (val37 == false) {
            $("#div_36").hide();
        }
        if (val38 == true) {
            var temp38 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">排入海域近岸海域环境功能区</span>\n" +
                "                                        <input id=\"select37\" list=\"gnq1\" name=\"hyGnq\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
				"                                        <datalist id=\"gnq1\">\n" +
                "                                                <option value=\"一类\">一类</option>\n" +
                "                                                <option value=\"二类\">二类</option>\n" +
                "                                                <option value=\"三类\">三类</option>\n" +
                "                                                <option value=\"四类\">四类</option>\n" +
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_37").html(temp38);
            $("#div_37").show();
        }
        if (val38 == false) {
            $("#div_37").hide();
        }
        if (val39 == true) {
            var temp39 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">排入海域水质目标</span>\n" +
                "                                        <input id=\"select38\" list=\"mb1\" name=\"hySzmb\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
				"                                        <datalist id=\"mb1\">\n" +
                "                                                <option value=\"第一类\">第一类</option>\n" +
                "                                                <option value=\"不低于第二类\">不低于第二类</option>\n" +
                "                                                <option value=\"不低于第三类\">不低于第三类</option>\n" +
                "                                                <option value=\"不低于第四类\">不低于第四类</option>\n" +
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_38").html(temp39);
            $("#div_38").show();
        }
        if (val39 == false) {
            $("#div_38").hide();
        }
        if (val40 == true) {
            var temp40 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">排入海域海洋功能区类别</span>\n" +
                "                                        <input id=\"select39\" list=\"gnqtype1\" name=\"hyseaGnq\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
				"                                        <datalist id=\"gnqtype1\">\n" +
                "                                                <option value=\"农渔业区\">农渔业区</option>\n" +
                "                                                <option value=\"港口航运区\">港口航运区</option>\n" +
                "                                                <option value=\"工业与城镇用海区\">工业与城镇用海区</option>\n" +
                "                                                <option value=\"矿产与能源区\">矿产与能源区</option>\n" +
                "                                                <option value=\"旅游休闲娱乐区\">旅游休闲娱乐区</option>\n" +
                "                                                <option value=\"海洋保护区\">海洋保护区</option>\n" +
                "                                                <option value=\"特殊利用区\">特殊利用区</option>\n" +
                "                                                <option value=\"保留区\">保留区</option>\n" +
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_39").html(temp40);
            $("#div_39").show();
        }
        if (val40 == false) {
            $("#div_39").hide();
        }
        if (val41 == true) {
            var temp41 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">排入海域海洋功能区水质目标</span>\n" +
                "                                        <input id=\"select40\" list=\"szmb1\" name=\"hyseaSzmb\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
				"                                        <datalist id=\"szmb1\">\n" +
                "                                                <option value=\"不劣于第一类\">不劣于第一类</option>\n" +
                "                                                <option value=\"不劣于第二类\">不劣于第二类</option>\n" +
                "                                                <option value=\"不劣于第三类\">不劣于第三类</option>\n" +
                "                                                <option value=\"不劣于第四类\">不劣于第四类</option>\n" +
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_40").html(temp41);
            $("#div_40").show();
        }
        if (val41 == false) {
            $("#div_40").hide();
        }
        if (val42 == true) {
            var temp42 = " <div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">是否达标</span>\n" +
                "                                        <input id=\"select41\" list=\"isget1\" name=\"isGet\" type=\"text\" class=\"form-control\" placeholder=\"\">\n" +
				"                                        <datalist id=\"isget1\">\n" +
                "                                                <option value=\"是\">是</option>\n" +
                "                                                <option value=\"否\">否</option>\n" +                                             
                "                                        </datalist>"+
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_41").html(temp42);
            $("#div_41").show();
        }
        if (val42 == false) {
            $("#div_41").hide();
        }
        if (val43 == true) {
            var temp43 = "<div class=\"input-group\">\n" +
                "                                        <span class=\"input-group-addon\">不达标指标</span>\n" +
                "                                        <input id=\"select42\" name=\"nogetItems\" type=\"text\" class=\"form-control\"\n" +
                "                                               placeholder=\"\">\n" +
                "                                        <span class=\"input-group-addon\">注释</span>\n" +
                "                                    </div>"
            $("#div_42").html(temp43);
            $("#div_42").show();
        }
        if (val43 == false) {
            $("#div_42").hide();
        }
    }
</script>
</body>
</html>