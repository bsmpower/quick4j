<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <title>layui</title>
    <link href="bsmassets/bootstrap-3.3.7-dist/css/bootstrap.css" rel="stylesheet">
    <!-- 引入bootstrap-table样式 -->
    <link href="bsmassets/bootstrap-3.3.7-dist/css/bootstrap-table.css" rel="stylesheet">
    <link href="bsmassets/css/bsmcss.css" rel="stylesheet">
    <!-- jquery -->
    <script src="bsmassets/bootstrap-3.3.7-dist/js/jquery-3.3.1.min.js"></script>
    <script src="bsmassets/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
    <!-- bootstrap-table.min.js -->
    <script src="bsmassets/bootstrap-3.3.7-dist/js/bootstrap-table.js"></script>
    <!-- 引入中文语言包 -->
    <script src="bsmassets/bootstrap-3.3.7-dist/js/bootstrap-table-zh-CN.js"></script>
    <script src="bsmassets/js/pwktabledemo.js"></script>
</head>
<body>
<div class="container">
    <div class="row">
        <!-- col-md-4 表示每一个div占了多少份 -->
        <div id="funcFence" class="col-lg-4">預留工作栏</div>

        <div id="gisMap" class="col-lg-8">map地图</div>
    </div>
</div>
<div>
    <table id="PwkInfoTable">


    </table>
</div>

<div id="toolbar" class="btn-group">
    <button id="btn_add" type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">
        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
    </button>
    <button id="btn_edit" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改
    </button>
    <button id="btn_delete" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
    </button>
</div>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title" id="myModalLabel">
                    新增排放口信息
                </h4>
            </div>
            <div class="modal-body">
                    <form class="bs-example bs-example-form" role="form">
                        <div class="input-group">
                            <span class="input-group-addon">统计年份</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">统计月份</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">统计日</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div><br>
                        <div class="input-group">
                            <span class="input-group-addon">排污口编号</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">单位名称</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">排放口名称</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">排放口类型</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">所在市</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">所在县</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">所在乡镇</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">详细地址</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">排放口经度</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">排放口纬度
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">是否取得审批手续
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">审批单位及审批文号
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">批复主要污染物种类
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">批复日允许排放量(吨/日)
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">批复年允许排放量(吨/年)
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">是否发放许可证
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">排污许可证号
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">投入使用时间
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">是否为非法排污口
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">是否为设置不合理排污口
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">排放口靠河岸位置
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">污水处理工艺
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">废水排放方式
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">排放去向
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">入河方式
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">排入河流名称
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">河流级别
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">河流所属水系
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">汇入海域
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">入海方式</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">排入海域名称
</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">废水排放标准</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">排入河流水功能区</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">排入河流水质目标</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">排入海域近岸海域环境功能区</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">排入海域水质目标</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">排入海域海洋功能区类别</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">排入海域海洋功能区水质目标</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">是否达标</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">不达标指标</span>
                            <input type="text" class="form-control" placeholder="twitterhandle">
                            <span class="input-group-addon">注释</span>
                        </div>
                    </form>
            </div>
            <div class="modal-footer">
                <button id="closeMod" type="button" class="btn btn-default" data-dismiss="modal">关闭
                </button>
                <button id="submitPwk" type="button" class="btn btn-primary">
                    提交更改
                </button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>
<script type ="text/javascript">
$(function(){
$('#PwkInfoTable').bootstrapTable({
url : '/rest/pwk/pwkshowlist', // 请求后台的URL（*）
method : 'get', // 请求方式（*）
toolbar : '#toolbar', // 工具按钮用哪个容器

striped : true, // 是否显示行间隔色
cache : false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
//	sortable : true, //用 是否启排序
//	sortOrder : "asc", // 排序方式
sidePagination : "client", // 分页方式：client客户端分页，server服务端分页（*）
pagination : true, // 是否显示分页（*）
pageNumber: 1,    //如果设置了分页，首页页码
pageSize: 10,                       //每页的记录行数（*）
pageList: [4,5,6],        //可供选择的每页的行数（*）
//	onlyInfoPagination:false, //设置为 true 只显示总数据数，而不显示分页
showRefresh : true, // 是否显示刷新按钮
//		queryParamsType:'',
clickToSelect : true, // 是否启用点击选中行
//	uniqueId : "fileid", // 每一行的唯一标识，一般为主键列
showToggle : false, // 是否显示详细视图和列表视图的切换按钮
//	cardView : false, // 是否显示详细视图
//	detailView : false, // 是否显示父子表
search:true,   //是否启用搜索框

columns : [ {
field : 'id',
title : '记录号',
align: 'center',
valign: 'middle'
},{
field : 'tjyear',
title : '统计年份',
align: 'center',
valign: 'middle'

}, {
field : 'tjmonth',
title : '统计月份',
align: 'center',
valign: 'middle'

}, {
field : 'tjday',
title : '统计日',
align: 'center',
valign: 'middle'
} ,{
    field : 'pwkCode',
    title : '排污口编号',
    align: 'center',
    valign: 'middle'
},{
    field : 'name',
    title : '单位名称',
    align: 'center',
    valign: 'middle'
},{
    field : 'pwkName',
    title : '排放口名称',
    align: 'center',
    valign: 'middle'
},{
    field : 'pwkType',
    title : '排放口类型',
    align: 'center',
    valign: 'middle'
},{
    field : 'city',
    title : '所在市',
    align: 'center',
    valign: 'middle'
},{
    field : 'county',
    title : '所在县(市区)',
    align: 'center',
    valign: 'middle'
},{
    field : 'village',
    title : '所在乡镇',
    align: 'center',
    valign: 'middle'
},{
    field : 'address',
    title : '详细地址',
    align: 'center',
    valign: 'middle'
},{
    field : 'longitude',
    title : '排放口经度',
    align: 'center',
    valign: 'middle'
},{
    field : 'latitude',
    title : '排放口维度',
    align: 'center',
    valign: 'middle'
},{
    field : 'isShenpi',
    title : '是否取得审批手续',
    align: 'center',
    valign: 'middle'
},{
    field : 'shenpi',
    title : '审批单位及审批文号',
    align: 'center',
    valign: 'middle'
},{
    field : 'mainType',
    title : '批复主要污染物种类',
    align: 'center',
    valign: 'middle'
},{
    field : 'dayAllow',
    title : '批复日允许排放量(吨/日)',
    align: 'center',
    valign: 'middle'
},{
    field : 'yearAllow',
    title : '批复年允许排放量(吨/年)',
    align: 'center',
    valign: 'middle'
},{
    field : 'isPermit',
    title : '是否发放许可证',
    align: 'center',
    valign: 'middle'
},{
    field : 'pwCode',
    title : '是否发放许可证',
    align: 'center',
    valign: 'middle'
},{
    field : 'usetime',
    title : '投入使用时间',
    align: 'center',
    valign: 'middle'
},{
    field : 'isInlaw',
    title : '是否为非法排污口',
    align: 'center',
    valign: 'middle'
},{
    field : 'isReasonable',
    title : '是否为设置不合理排污口',
    align: 'center',
    valign: 'middle'
},{
    field : 'position',
    title : '排放口靠河岸位置',
    align: 'center',
    valign: 'middle'
},{
    field : 'processTech',
    title : '污水处理工艺',
    align: 'center',
    valign: 'middle'
},{
    field : 'emissionMode',
    title : '废水排放方式',
    align: 'center',
    valign: 'middle'
},{
    field : 'pwqx',
    title : '排放去向',
    align: 'center',
    valign: 'middle'
},{
    field : 'riverMode',
    title : '入河方式',
    align: 'center',
    valign: 'middle'
},{
    field : 'riverName',
    title : '排入河流名称',
    align: 'center',
    valign: 'middle'
},{
    field : 'riverLevel',
    title : '河流级别',
    align: 'center',
    valign: 'middle'
},{
    field : 'riverType',
    title : '河流所属水系',
    align: 'center',
    valign: 'middle'
},{
    field : 'tosea',
    title : '汇入海域',
    align: 'center',
    valign: 'middle'
},{
    field : 'seaMode',
    title : '入海方式',
    align: 'center',
    valign: 'middle'
},{
    field : 'sea_name',
    title : '排入海域名称',
    align: 'center',
    valign: 'middle'
},{
    field : 'emissionStandard',
    title : '废水排放标准',
    align: 'center',
    valign: 'middle'
},{
    field : 'riverGnq',
    title : '排入河流水功能区',
    align: 'center',
    valign: 'middle'
},{
    field : 'riverSzmb',
    title : '排入河流水质目标',
    align: 'center',
    valign: 'middle'
},{
    field : 'hyGnq',
    title : '排入海域近岸海域环境功能区',
    align: 'center',
    valign: 'middle'
},{
    field : 'hySzmb',
    title : '排入海域水质目标',
    align: 'center',
    valign: 'middle'
},{
    field : 'hyseaGnq',
    title : '排入海域海洋功能区类别',
    align: 'center',
    valign: 'middle'
},{
    field : 'hyseaSzmb',
    title : '排入海域海洋功能区水质目标',
    align: 'center',
    valign: 'middle'
},{
    field : 'isGet',
    title : '是否达标',
    align: 'center',
    valign: 'middle'
},{
    field : 'nogetItems',
    title : '不达标指标',
    align: 'center',
    valign: 'middle'
}],
silent : true, // 刷新事件必须设置

});
})
</script>

</body>
</html>