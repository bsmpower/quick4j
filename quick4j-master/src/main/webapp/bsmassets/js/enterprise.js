$(function () {
    /**
     * 1.显示所有信息
     * */
    //工业生活企业
    $('#IndustryLifeTable').bootstrapTable({
        url: 'rest/enterprise/getAllIndustryLife', // 请求后台的URL（*）
        method: 'get', // 请求方式（*）
        toolbar: "#toolbar", // 工具按钮用哪个容器
        striped: true, // 是否显示行间隔色
        cache: false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        sidePagination: "client", // 分页方式：client客户端分页，server服务端分页（*）
        pagination: true, // 是否显示分页（*）
        pageNumber: 1,    //如果设置了分页，首页页码
        pageSize: 5,                       //每页的记录行数（*）
        pageList: [4, 5, 6],        //可供选择的每页的行数（*）
        showRefresh: true, // 是否显示刷新按钮
        locale: "zh-CN",
        clickToSelect: true, // 是否启用点击选中行
        showToggle: false, // 是否显示详细视图和列表视图的切换按钮
        search: true,   //是否启用搜索框
        columns: [
            {
                checkbox: true
            }, {
                field: 'id',
                title: '序号',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'tjyear',
                title: '统计年份',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'tjmonth',
                title: '统计月份',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'tjday',
                title: '统计日',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'name',
                title: '单位名称',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'usccCode',
                title: '单位统一社会信用代码',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'city',
                title: '所在市',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'county',
                title: '所在县(市/区)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'village',
                title: '所在乡镇',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'address',
                title: '详细地址',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'longitude',
                title: '经度(E)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'latitude',
                title: '纬度(N)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'facilitiesName',
                title: '污水处理设施名称',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'sjgm',
                title: '污水处理设施设计规模(万吨/日)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'dailyEmission',
                title: '日均废水排放量(吨/日)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'annualEmission',
                title: '年均废水排放量(吨/年)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'emissionDays',
                title: '年废水排放时间(天)',
                align: 'center',
                valign: 'middle'
            }],
        silent: true, // 刷新事件必须设置
    });
    //水产养殖
    $('#AquacultureTable').bootstrapTable({
        url: 'rest/enterprise/getAllAquaculture', // 请求后台的URL（*）
        method: 'get', // 请求方式（*）
        toolbar: "#toolbar", // 工具按钮用哪个容器
        striped: true, // 是否显示行间隔色
        cache: false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        sidePagination: "client", // 分页方式：client客户端分页，server服务端分页（*）
        pagination: true, // 是否显示分页（*）
        pageNumber: 1,    //如果设置了分页，首页页码
        pageSize: 5,                       //每页的记录行数（*）
        pageList: [4, 5, 6],        //可供选择的每页的行数（*）
        showRefresh: true, // 是否显示刷新按钮
        locale: "zh-CN",
        clickToSelect: true, // 是否启用点击选中行
        showToggle: false, // 是否显示详细视图和列表视图的切换按钮
        search: true,   //是否启用搜索框
        columns: [
            {
                checkbox: true
            }, {
                field: 'id',
                title: '序号',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'tjyear',
                title: '统计年份',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'tjmonth',
                title: '统计月份',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'tjday',
                title: '统计日',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'name',
                title: '单位名称',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'city',
                title: '所在市',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'county',
                title: '所在县(市/区)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'village',
                title: '所在乡镇',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'address',
                title: '详细地址',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'longitude',
                title: '经度(E)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'latitude',
                title: '纬度(N)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'scWay',
                title: '水产养殖方式',
                align: 'center',
                valign: 'middle'
            },{
                field: 'yzsyxz',
                title: '养殖水域性质',
                align: 'center',
                valign: 'middle'
            },{
                field: 'yzcsl',
                title: '养殖池水量(m³/个)',
                align: 'center',
                valign: 'middle'
            },{
                field: 'yzcNum',
                title: '养殖池数量(个)',
                align: 'center',
                valign: 'middle'
            },{
                field: 'yzcSum',
                title: '养殖池总水量(m³/养殖厂(户))',
                align: 'center',
                valign: 'middle'
            },{
                field: 'yzDay',
                title: '年养殖时间(天)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'period',
                title: '换水周期(次/年)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'season',
                title: '换水季节',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'psl',
                title: '排水量(m³/次)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'rjslDay',
                title: '日均饲料施用量(kg/日)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'rjslYear',
                title: '年均饲料施用量(kg/年)',
                align: 'center',
                valign: 'middle'
            }],
        silent: true, // 刷新事件必须设置
    });
    //农田
    $('#FarmTable').bootstrapTable({
        url: 'rest/enterprise/getAllFarm', // 请求后台的URL（*）
        method: 'get', // 请求方式（*）
        toolbar: "#toolbar", // 工具按钮用哪个容器
        striped: true, // 是否显示行间隔色
        cache: false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        sidePagination: "client", // 分页方式：client客户端分页，server服务端分页（*）
        pagination: true, // 是否显示分页（*）
        pageNumber: 1,    //如果设置了分页，首页页码
        pageSize: 5,                       //每页的记录行数（*）
        pageList: [4, 5, 6],        //可供选择的每页的行数（*）
        showRefresh: true, // 是否显示刷新按钮
        locale: "zh-CN",
        clickToSelect: true, // 是否启用点击选中行
        showToggle: false, // 是否显示详细视图和列表视图的切换按钮
        search: true,   //是否启用搜索框
        columns: [
            {
                checkbox: true
            }, {
                field: 'id',
                title: '序号',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'tjyear',
                title: '统计年份',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'tjmonth',
                title: '统计月份',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'tjday',
                title: '统计日',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'farmerName',
                title: '单位(农户)名称',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'city',
                title: '所在市',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'county',
                title: '所在县(市/区)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'village',
                title: '所在乡镇',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'address',
                title: '详细地址',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'longitude',
                title: '经度(E)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'latitude',
                title: '纬度(N)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'yearFamount',
                title: '年均化肥施用量(千克/年)',
                align: 'center',
                valign: 'middle'
            },{
                field: 'pesticideDosage',
                title: '每次农药施用量(升/次)',
                align: 'center',
                valign: 'middle'
            },{
                field: 'pesticideConcentration',
                title: '农药浓度(ppm)',
                align: 'center',
                valign: 'middle'
            },{
                field: 'yearPtimes',
                title: '年均施药次数(次/年)',
                align: 'center',
                valign: 'middle'
            },{
                field: 'yearPamount',
                title: '年均农药施用量',
                align: 'center',
                valign: 'middle'
            },{
                field: 'outletSeason',
                title: '退水季节',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'outletTimes',
                title: '退水次数',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'outletAmount',
                title: '退水量',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'outletTime',
                title: '年退水时间(天)',
                align: 'center',
                valign: 'middle'
            }],
        silent: true, // 刷新事件必须设置
    });
    //工业园区
    $('#IndustryParkTable').bootstrapTable({
        url: 'rest/enterprise/getAllIndustryPark', // 请求后台的URL（*）
        method: 'get', // 请求方式（*）
        toolbar: "#toolbar", // 工具按钮用哪个容器
        striped: true, // 是否显示行间隔色
        cache: false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        sidePagination: "client", // 分页方式：client客户端分页，server服务端分页（*）
        pagination: true, // 是否显示分页（*）
        pageNumber: 1,    //如果设置了分页，首页页码
        pageSize: 5,                       //每页的记录行数（*）
        pageList: [4, 5, 6],        //可供选择的每页的行数（*）
        showRefresh: true, // 是否显示刷新按钮
        locale: "zh-CN",
        clickToSelect: true, // 是否启用点击选中行
        showToggle: false, // 是否显示详细视图和列表视图的切换按钮
        search: true,   //是否启用搜索框
        columns: [
            {
                checkbox: true
            }, {
                field: 'id',
                title: '序号',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'tjyear',
                title: '统计年份',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'tjmonth',
                title: '统计月份',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'tjday',
                title: '统计日',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'gyyqName',
                title: '工业园区名称',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'code',
                title: '园区编号',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'city',
                title: '所在市',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'country',
                title: '所在县(市/区)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'address',
                title: '详细地址',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'longitude',
                title: '经度(E)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'latitude',
                title: '纬度(N)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'yqArea',
                title: '园区范围',
                align: 'center',
                valign: 'middle'
            },{
                field: 'cybj',
                title: '产业布局',
                align: 'center',
                valign: 'middle'
            },{
                field: 'facilityName',
                title: '集中污(雨)水处理设施名称',
                align: 'center',
                valign: 'middle'
            },{
                field: 'facilityLongitude',
                title: '集中污(雨)水处理设施经度',
                align: 'center',
                valign: 'middle'
            },{
                field: 'facilityLatitude',
                title: '集中污(雨)水处理设施纬度',
                align: 'center',
                valign: 'middle'
            },{
                field: 'isCollection',
                title: '园区雨(污)水是否收集',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'isEmission',
                title: '园区雨(污)水是否排放',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'sjgm',
                title: '污(雨)水处理设施设计规模(万吨/日)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'dailyEmission',
                title: '日均污(雨)水排放量(吨/日)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'annualEmission',
                title: '年均污(雨)水排放量(吨/年)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'emissionDays',
                title: '年污(雨)水排放时间',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'process',
                title: '集中污(雨)水处理工艺',
                align: 'center',
                valign: 'middle'
            }],
        silent: true, // 刷新事件必须设置
    });
    //工业废水
    $('#IndustryTrashTable').bootstrapTable({
        url: 'rest/enterprise/getAllIndustryTrash', // 请求后台的URL（*）
        method: 'get', // 请求方式（*）
        toolbar: "#toolbar", // 工具按钮用哪个容器
        striped: true, // 是否显示行间隔色
        cache: false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        sidePagination: "client", // 分页方式：client客户端分页，server服务端分页（*）
        pagination: true, // 是否显示分页（*）
        pageNumber: 1,    //如果设置了分页，首页页码
        pageSize: 5,                       //每页的记录行数（*）
        pageList: [4, 5, 6],        //可供选择的每页的行数（*）
        showRefresh: true, // 是否显示刷新按钮
        locale: "zh-CN",
        clickToSelect: true, // 是否启用点击选中行
        showToggle: false, // 是否显示详细视图和列表视图的切换按钮
        search: true,   //是否启用搜索框
        columns: [
            {
                checkbox: true
            }, {
                field: 'id',
                title: '序号',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'tjyear',
                title: '统计年份',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'tjmonth',
                title: '统计月份',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'tjday',
                title: '统计日',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'gyname',
                title: '单位名称',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'usccCode',
                title: '单位统一社会信用代码',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'code',
                title: '园区编号',
                align: 'center',
                valign: 'middle'
            },{
                field: 'city',
                title: '所在市',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'country',
                title: '所在县(市/区)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'village',
                title: '所在乡镇',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'address',
                title: '详细地址',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'longitude',
                title: '经度(E)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'latitude',
                title: '纬度(N)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'qyScale',
                title: '企业规模',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'qyStatus',
                title: '企业生产状态',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'nscsj',
                title: '年生产时间(天)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'typeCode',
                title: '所属行业类别代码',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'gytype',
                title: '所属行业类别',
                align: 'center',
                valign: 'middle'
            },{
                field: 'gyysl',
                title: '工业用水量(吨/日)',
                align: 'center',
                valign: 'middle'
            },{
                field: 'qsl',
                title: '取水量(吨/日)',
                align: 'center',
                valign: 'middle'
            },{
                field: 'cfysl',
                title: '重复用水量(吨/日)',
                align: 'center',
                valign: 'middle'
            },{
                field: 'sjgm',
                title: '污水处理设施设计规模(万/吨)',
                align: 'center',
                valign: 'middle'
            },{
                field: 'dailyEmission',
                title: '日均废水排放量(吨/日)',
                align: 'center',
                valign: 'middle'
            },{
                field: 'annualEmission',
                title: '年均废水排放量(吨/年)',
                align: 'center',
                valign: 'middle'
            },{
                field: 'emissionDays',
                title: '年废水排放时间(天)',
                align: 'center',
                valign: 'middle'
            }],
        silent: true, // 刷新事件必须设置
    });
    //畜禽养殖
    $('#LivestockTable').bootstrapTable({
        url: 'rest/enterprise/getAllLivestock', // 请求后台的URL（*）
        method: 'get', // 请求方式（*）
        toolbar: "#toolbar", // 工具按钮用哪个容器
        striped: true, // 是否显示行间隔色
        cache: false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        sidePagination: "client", // 分页方式：client客户端分页，server服务端分页（*）
        pagination: true, // 是否显示分页（*）
        pageNumber: 1,    //如果设置了分页，首页页码
        pageSize: 5,                       //每页的记录行数（*）
        pageList: [4, 5, 6],        //可供选择的每页的行数（*）
        showRefresh: true, // 是否显示刷新按钮
        locale: "zh-CN",
        clickToSelect: true, // 是否启用点击选中行
        showToggle: false, // 是否显示详细视图和列表视图的切换按钮
        search: true,   //是否启用搜索框
        columns: [
            {
                checkbox: true
            }, {
                field: 'id',
                title: '序号',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'tjyear',
                title: '统计年份',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'tjmonth',
                title: '统计月份',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'tjday',
                title: '统计日',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'name',
                title: '单位名称',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'usccCode',
                title: '单位统一社会信用代码',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'city',
                title: '所在市',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'county',
                title: '所在县(市/区)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'village',
                title: '所在乡镇',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'address',
                title: '详细地址',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'longitude',
                title: '经度(E)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'latitude',
                title: '纬度(N)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'facilitiesName',
                title: '污水处理设施名称',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'sjgm',
                title: '污水处理设施设计规模(万吨/日)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'dailyEmission',
                title: '日均废水排放量(吨/日)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'annualEmission',
                title: '年均废水排放量(吨/年)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'emissionDays',
                title: '年废水排放时间(天)',
                align: 'center',
                valign: 'middle'
            }],
        silent: true, // 刷新事件必须设置
    });
    //市政污水
    $('#MunicipalTable').bootstrapTable({
        url: 'rest/enterprise/getAllMunicipal', // 请求后台的URL（*）
        method: 'get', // 请求方式（*）
        toolbar: "#toolbar", // 工具按钮用哪个容器
        striped: true, // 是否显示行间隔色
        cache: false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        sidePagination: "client", // 分页方式：client客户端分页，server服务端分页（*）
        pagination: true, // 是否显示分页（*）
        pageNumber: 1,    //如果设置了分页，首页页码
        pageSize: 5,                       //每页的记录行数（*）
        pageList: [4, 5, 6],        //可供选择的每页的行数（*）
        showRefresh: true, // 是否显示刷新按钮
        locale: "zh-CN",
        clickToSelect: true, // 是否启用点击选中行
        showToggle: false, // 是否显示详细视图和列表视图的切换按钮
        search: true,   //是否启用搜索框
        columns: [
            {
                checkbox: true
            }, {
                field: 'id',
                title: '序号',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'tjyear',
                title: '统计年份',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'tjmonth',
                title: '统计月份',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'tjday',
                title: '统计日',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'name',
                title: '单位名称',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'usccCode',
                title: '单位统一社会信用代码',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'city',
                title: '所在市',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'county',
                title: '所在县(市/区)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'village',
                title: '所在乡镇',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'address',
                title: '详细地址',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'longitude',
                title: '经度(E)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'latitude',
                title: '纬度(N)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'facilitiesName',
                title: '污水处理设施名称',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'sjgm',
                title: '污水处理设施设计规模(万吨/日)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'dailyEmission',
                title: '日均废水排放量(吨/日)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'annualEmission',
                title: '年均废水排放量(吨/年)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'emissionDays',
                title: '年废水排放时间(天)',
                align: 'center',
                valign: 'middle'
            }],
        silent: true, // 刷新事件必须设置
    });

    /**
     * 2.添加新的数据
     */
    //工业生活
    $("#submitIndustryLife").click(function () {
        var industryLife = {};
        var t = $("form").serializeArray();
        industryLife.tjyear = t[0].value;
        industryLife.tjmonth = t[1].value;
        industryLife.tjday = t[2].value;
        industryLife.name = t[3].value;
        industryLife.usccCode = t[4].value;
        industryLife.city = t[5].value;
        industryLife.county = t[6].value;
        industryLife.village = t[7].value;
        industryLife.address = t[8].value;
        industryLife.longitude = parseFloat(t[9].value);
        industryLife.latitude = parseFloat(t[10].value);
        industryLife.facilitiesName = t[11].value;
        industryLife.sjgm = parseFloat(t[12].value);
        industryLife.dailyEmission = parseFloat(t[13].value);
        industryLife.annualEmission = parseFloat(t[14].value);
        industryLife.emissionDays = parseFloat(t[15].value);

        $.ajax({
            url: "rest/enterprise/IndustryLifeInput",
            type: "POST",
            data: JSON.stringify(industryLife),
            datatype: "json",
            contentType: "application/json",
            success: function (data) {
                if (data.success) {
                    $("#IndustryLifeTable").bootstrapTable('refresh');
                    $("#myModal").remove();
                    $('.modal-backdrop').remove();
                    alert("数据添加成功！");
                } else {
                    alert(result.errMsg);
                }
            }
        });
    });
    //水产养殖
    $("#submitAquaculture").click(function () {
        var Aquaculture = {};
        var t = $("form").serializeArray();
        console.log(t);
        Aquaculture.tjyear = t[0].value;
        Aquaculture.tjmonth = t[1].value;
        Aquaculture.tjday = t[2].value;
        Aquaculture.name = t[3].value;
        Aquaculture.city = t[4].value;
        Aquaculture.county = t[5].value;
        Aquaculture.village = t[6].value;
        Aquaculture.address = t[7].value;
        Aquaculture.longitude = parseFloat(t[8].value);
        Aquaculture.latitude = parseFloat(t[9].value);
        Aquaculture.scWay = t[10].value;
        Aquaculture.yzsyxz = t[11].value;
        Aquaculture.yzcsl = parseFloat(t[12].value);
        Aquaculture.yzcNum = parseInt(t[13].value);
        Aquaculture.yzcSum = parseFloat(t[14].value);
        Aquaculture.yzDay = parseFloat(t[15].value);
        Aquaculture.period = parseFloat(t[16].value);
        Aquaculture.season = t[17].value;
        Aquaculture.psl = parseFloat(t[18].value);
        Aquaculture.rjslDay = parseFloat(t[19].value);
        Aquaculture.rjslYear = parseFloat(t[20].value);


        $.ajax({
            url: "rest/enterprise/AquacultureInput",
            type: "POST",
            data: JSON.stringify(Aquaculture),
            datatype: "json",
            contentType: "application/json",
            success: function (result) {
                if (result.success) {
                    $("#AquacultureTable").bootstrapTable('refresh');
                    $("#myModal4").remove();
                    $('.modal-backdrop').remove();
                    alert("数据添加成功！");
                } else {
                    alert(result.errMsg);
                }
            }
        });
    });
    //工业废水
    $("#submitIndustryTrash").click(function () {
        var industryTrash = {};
        var t = $("form").serializeArray();
        industryTrash.tjyear = t[0].value;
        industryTrash.tjmonth = t[1].value;
        industryTrash.tjday = t[2].value;
        industryTrash.gyname = t[3].value;
        industryTrash.usccCode = t[4].value;
        industryTrash.code=t[5].value;
        industryTrash.city = t[6].value;
        industryTrash.country = t[7].value;
        industryTrash.village = t[8].value;
        industryTrash.address = t[9].value;
        industryTrash.longitude = parseFloat(t[10].value);
        industryTrash.latitude = parseFloat(t[11].value);
        industryTrash.qyScale = t[12].value;
        industryTrash.qyStatus=t[13].value;
        industryTrash.nscsj=t[14].value;
        industryTrash.typeCode=t[15].value;
        industryTrash.gytype=t[16].value;
        industryTrash.gyysl=parseFloat(t[17].value);
        industryTrash.qsl=parseFloat(t[18].value);
        industryTrash.cfysl=parseFloat(t[19].value);
        industryTrash.sjgm = parseFloat(t[20].value);
        industryTrash.dailyEmission = parseFloat(t[21].value);
        industryTrash.annualEmission = parseFloat(t[22].value);
        industryTrash.emissionDays = parseFloat(t[23].value);

        $.ajax({
            url: "rest/enterprise/IndustryTrashInput",
            type: "POST",
            data: JSON.stringify(industryTrash),
            datatype: "json",
            contentType: "application/json",
            success: function (result) {
                if (result.success) {
                    $("#IndustryTrashTable").bootstrapTable('refresh');
                    $("#myModal3").remove();
                    $('.modal-backdrop').remove();
                    alert("数据添加成功！");
                } else {
                    alert(result.errMsg);
                }
            }
        });
    });
    //农田
    $("#submitFarm").click(function () {
        var farm = {};
        var t = $("form").serializeArray();
        farm.tjyear = t[0].value;
        farm.tjmonth = t[1].value;
        farm.tjday = t[2].value;
        farm.farmerName = t[3].value;
        farm.city = t[4].value;
        farm.county = t[5].value;
        farm.village = t[6].value;
        farm.address = t[7].value;
        farm.longitude = parseFloat(t[8].value);
        farm.latitude = parseFloat(t[9].value);
        farm.yearFamount = parseFloat(t[10].value);
        farm.pesticideDosage = parseFloat(t[11].value);
        farm.pesticideConcentration = parseFloat(t[12].value);
        farm.yearPtimes = parseInt(t[13].value);
        farm.yearPamount = parseFloat(t[14].value);
        farm.outletSeason = t[15].value;
        farm.outletTimes=parseInt(t[16].value);
        farm.outletAmount=parseFloat(t[17].value);
        farm.outletTime=parseInt(t[18].value);

        $.ajax({
            url: "rest/enterprise/FarmInput",
            type: "POST",
            data: JSON.stringify(farm),
            datatype: "json",
            contentType: "application/json",
            success: function (result) {
                if (result.success) {
                    $("#FarmTable").bootstrapTable('refresh');
                    $("#myModal5").remove();
                    $('.modal-backdrop').remove();
                    alert("数据添加成功！");
                } else {
                    alert(result.errMsg);
                }
            }
        });
    });
    //工业园区
    $("#submitIndustryPark").click(function () {
        var IndustryPark = {};
        var t = $("form").serializeArray();
        IndustryPark.tjyear = t[0].value;
        IndustryPark.tjmonth = t[1].value;
        IndustryPark.tjday = t[2].value;
        IndustryPark.gyyqName = t[3].value;
        IndustryPark.code = t[4].value;
        IndustryPark.city = t[5].value;
        IndustryPark.country = t[6].value;
        IndustryPark.address = t[7].value;
        IndustryPark.longitude = parseFloat(t[8].value);
        IndustryPark.latitude = parseFloat(t[9].value);
        IndustryPark.yqArea = t[10].value;
        IndustryPark.cybj = t[11].value;
        IndustryPark.facilityName =t[12].value;
        IndustryPark.facilityLongitude = parseInt(t[13].value);
        IndustryPark.facilityLatitude = parseFloat(t[14].value);
        IndustryPark.isCollection = t[15].value;
        IndustryPark.isEmission=t[16].value;
        IndustryPark.sjgm=parseFloat(t[17].value);
        IndustryPark.dailyEmission=parseFloat(t[18].value);
        IndustryPark.annualEmission=parseFloat(t[19].value);
        IndustryPark.emissionDays=parseInt(t[20].value);
        IndustryPark.process=t[21].value;
        console.log(IndustryPark)
        $.ajax({
            url: "rest/enterprise/IndustryParkInput",
            type: "POST",
            data: JSON.stringify(IndustryPark),
            datatype: "json",
            contentType: "application/json",
            success: function (result) {
                if (result.success) {
                    $("#IndustryParkTable").bootstrapTable('refresh');
                    $("#myModal6").remove();
                    $('.modal-backdrop').remove();
                    alert("数据添加成功！");
                } else {
                    alert(result.errMsg);
                }
            }
        });
    });
    //畜禽养殖
    $("#submitLivestock").click(function () {
        var livestock = {};
        var t = $("form").serializeArray();
        console.log(t);
        livestock.tjyear = t[0].value;
        livestock.tjmonth = t[1].value;
        livestock.tjday = t[2].value;
        livestock.name = t[3].value;
        livestock.usccCode = t[4].value;
        livestock.city = t[5].value;
        livestock.county = t[6].value;
        livestock.village = t[7].value;
        livestock.address = t[8].value;
        livestock.longitude = parseFloat(t[9].value);
        livestock.latitude = parseFloat(t[10].value);
        livestock.facilitiesName = t[11].value;
        livestock.sjgm = parseFloat(t[12].value);
        livestock.dailyEmission = parseFloat(t[13].value);
        livestock.annualEmission = parseFloat(t[14].value);
        livestock.emissionDays = parseFloat(t[15].value);

        $.ajax({
            url: "rest/enterprise/LivestockInput",
            type: "POST",
            data: JSON.stringify(livestock),
            datatype: "json",
            contentType: "application/json",
            success: function (result) {
                if (result.success) {
                    $("#LivestockTable").bootstrapTable('refresh');
                    $("#myModal1").remove();
                    $('.modal-backdrop').remove();
                    alert("数据添加成功！");
                } else {
                    alert(result.errMsg);
                }
            }
        });
    });
    //市政污水处理厂
    $("#submitMunicipal").click(function () {
        var municipal = {};
        var t = $("form").serializeArray();
        console.log(t);
        municipal.tjyear = t[0].value;
        municipal.tjmonth = t[1].value;
        municipal.tjday = t[2].value;
        municipal.name = t[3].value;
        municipal.usccCode = t[4].value;
        municipal.city = t[5].value;
        municipal.county = t[6].value;
        municipal.village = t[7].value;
        municipal.address = t[8].value;
        municipal.longitude = parseFloat(t[9].value);
        municipal.latitude = parseFloat(t[10].value);
        municipal.facilitiesName = t[11].value;
        municipal.sjgm = parseFloat(t[12].value);
        municipal.dailyEmission = parseFloat(t[13].value);
        municipal.annualEmission = parseFloat(t[14].value);
        municipal.emissionDays = parseFloat(t[15].value);

        $.ajax({
            url: "rest/enterprise/MunicipalInput",
            type: "POST",
            data: JSON.stringify(municipal),
            datatype: "json",
            contentType: "application/json",
            success: function (result) {
                if (result.success) {
                    $('#MunicipalTable').bootstrapTable('refresh');
                    $("#myModal2").remove();
                    $('.modal-backdrop').remove();
                    alert("数据添加成功！");
                } else {
                    alert(result.errMsg);
                }
            }
        });
    });
    /**
     * 3.删除一条或多条记录
     */
    //工业生活
    $("#btn_delete").click(function () {
        var rows = $("#IndustryLifeTable").bootstrapTable('getSelections');
        if (rows.length == 0) { //是为了判断是否选中
            alert("请选择要删除的记录!");
            return;
        } else {
            var ids = new Array();
            var names = new Array();
            $(rows).each(function () {
                ids.push(this.id);
                names.push(this.name);
            });
            if (confirm("确定要删除[" + names.toString() + "]吗？")) {
                deleteIndustryLife(ids);
            }
        }
    });
    /**
     * 按照id号删除相应数据条目
     * */
    function deleteIndustryLife(ids) {
        $.ajax({
            url: "rest/enterprise/deleteIndustrylife",
            data: {"ids": ids},
            type: "POST",
            traditional: true,
            success: function (result) {
                if (result.success) {
                    $("#IndustryLifeTable").bootstrapTable('refresh');
                    alert("删除成功");
                }
            }
        });
    }
    //工业园区
    $("#btn_delete4").click(function () {
        var rows = $("#IndustryParkTable").bootstrapTable('getSelections');
        if (rows.length == 0) { //是为了判断是否选中
            alert("请选择要删除的记录!");
            return;
        } else {
            var ids = new Array();
            var names = new Array();
            $(rows).each(function () {
                ids.push(this.id);
                names.push(this.gyyqName);
            });
            if (confirm("确定要删除[" + names.toString() + "]吗？")) {
                deleteIndustryPark(ids);
            }
        }
    });
    /**
     * 按照id号删除相应数据条目
     * */
    function deleteIndustryPark(ids) {
        $.ajax({
            url: "rest/enterprise/deleteIndustryPark",
            data: {"ids": ids},
            type: "POST",
            traditional: true,
            success: function (result) {
                if (result.success) {
                    $("#IndustryParkTable").bootstrapTable('refresh');
                    alert("删除成功");
                }
            }
        });
    }
    //工业废水
    $("#btn_delete3").click(function () {
        var rows = $("#IndustryTrashTable").bootstrapTable('getSelections');
        if (rows.length == 0) { //是为了判断是否选中
            alert("请选择要删除的记录!");
            return;
        } else {
            var ids = new Array();
            var names = new Array();
            $(rows).each(function () {
                ids.push(this.id);
                names.push(this.gyname);
            });
            if (confirm("确定要删除[" + names.toString() + "]吗？")) {
                deleteIndustryTrash(ids);
            }
        }
    });
    /**
     * 按照id号删除相应数据条目
     * */
    function deleteIndustryTrash(ids) {
        $.ajax({
            url: "rest/enterprise/deleteIndustryTrash",
            data: {"ids": ids},
            type: "POST",
            traditional: true,
            success: function (result) {
                if (result.success) {
                    $("#IndustryTrashTable").bootstrapTable('refresh');
                    alert("删除成功");
                }
            }
        });
    }
    //农田
    $("#btn_delete5").click(function () {
        var rows = $("#FarmTable").bootstrapTable('getSelections');
        if (rows.length == 0) { //是为了判断是否选中
            alert("请选择要删除的记录!");
            return;
        } else {
            var ids = new Array();
            var names = new Array();
            $(rows).each(function () {
                ids.push(this.id);
                names.push(this.farmerName);
            });
            if (confirm("确定要删除[" + names.toString() + "]吗？")) {
                deleteFarm(ids);
            }
        }
    });
    /**
     * 按照id号删除相应数据条目
     * */
    function deleteFarm(ids) {
        $.ajax({
            url: "rest/enterprise/deleteFarm",
            data: {"ids": ids},
            type: "POST",
            traditional: true,
            success: function (result) {
                if (result.success) {
                    $("#FarmTable").bootstrapTable('refresh');
                    alert("删除成功");
                }
            }
        });
    }
    //水产养殖
    $("#btn_delete6").click(function () {
        var rows = $("#AquacultureTable").bootstrapTable('getSelections');
        if (rows.length == 0) { //是为了判断是否选中
            alert("请选择要删除的记录!");
            return;
        } else {
            var ids = new Array();
            var names = new Array();
            $(rows).each(function () {
                ids.push(this.id);
                names.push(this.name);
            });
            if (confirm("确定要删除[" + names.toString() + "]吗？")) {
                deleteAquaculture(ids);
            }
        }
    });
    /**
     * 按照id号删除相应数据条目
     * */
    function deleteAquaculture(ids) {
        $.ajax({
            url: "rest/enterprise/deleteAquaculture",
            data: {"ids": ids},
            type: "POST",
            traditional: true,
            success: function (result) {
                if (result.success) {
                    $("#AquacultureTable").bootstrapTable('refresh');
                    alert("删除成功");
                }
            }
        });
    }
    //畜禽养殖
    $("#btn_delete1").click(function () {
        var rows = $("#LivestockTable").bootstrapTable('getSelections');
        if (rows.length == 0) { //是为了判断是否选中
            alert("请选择要删除的记录!");
            return;
        } else {
            var ids = new Array();
            var names = new Array();
            $(rows).each(function () {
                ids.push(this.id);
                names.push(this.name);
            });
            if (confirm("确定要删除[" + names.toString() + "]吗？")) {
                deleteLivestock(ids);
            }
        }
    });

    /**
     * 按照id号删除相应数据条目
     * */
    function deleteLivestock(ids) {
        $.ajax({
            url: "rest/enterprise/deleteLivestock",
            data: {"ids": ids},
            type: "POST",
            traditional: true,
            success: function (result) {
                if (result.success) {
                    $("#LivestockTable").bootstrapTable('refresh');
                    alert("删除成功");
                }
            }
        });
    }
    //市政污水
    $("#btn_delete2").click(function () {
        var rows = $("#MunicipalTable").bootstrapTable('getSelections');
        if (rows.length == 0) { //是为了判断是否选中
            alert("请选择要删除的记录!");
            return;
        } else {
            var ids = new Array();
            var names = new Array();
            $(rows).each(function () {
                ids.push(this.id);
                names.push(this.name);
            });
            if (confirm("确定要删除[" + names.toString() + "]吗？")) {
                deleteMunicipal(ids);
            }
        }
    });

    /**
     * 按照id号删除相应数据条目
     * */
    function deleteMunicipal(ids) {
        $.ajax({
            url: "rest/enterprise/deleteMunicipal",
            data: {"ids": ids},
            type: "POST",
            traditional: true,
            success: function (result) {
                if (result.success) {
                    $('#MunicipalTable').bootstrapTable('refresh');
                    alert("删除成功");
                }
            }
        });
    }

    /**
     *4.更改一条记录
     * 先获取到数据输入到修改框中
     * 然后将新的数据更新发到数据库中
     */
    //工业生活
    $("#btn_edit").click(function () {
        var rows = $("#IndustryLifeTable").bootstrapTable('getSelections');
        if (rows.length == 0) {
            alert("请选择一条要修改的记录！");
            return;
        } else if (rows.length > 1) {
            alert("每次只能修改一条记录！")
            return;
        } else {
            //获取原来的数据并传入到修改框中
            $("#tjyear_changed").val(rows[0].tjyear);
            $("#tjmonth_changed").val(rows[0].tjmonth);
            $("#tjday_changed").val(rows[0].tjday);
            $("#name_changed").val(rows[0].name);
            $("#usccCode_changed").val(rows[0].usccCode);
            $("#city_changed").val(rows[0].city);
            $("#county_changed").val(rows[0].county);
            $("#village_changed").val(rows[0].village);
            $("#address_changed").val(rows[0].address);
            $("#longitude_changed").val(rows[0].longitude);
            $("#latitude_changed").val(rows[0].latitude);
            $("#facilitiesName_changed").val(rows[0].facilitiesName);
            $("#sjgm_changed").val(rows[0].sjgm);
            $("#dailyEmission_changed").val(rows[0].dailyEmission);
            $("#annualEmission_changed").val(rows[0].annualEmission);
            $("#emissionDays_changed").val(rows[0].emissionDays);
            //弹出模式
            $('#editIndustryLifeModel').modal();
        }
    });
    /**
     * 保存修改过的数据
     * */
    $("#editIndustryLife").click(function () {
        var rows = $("#IndustryLifeTable").bootstrapTable("getSelections");
        var updateIndustryLife = {};
        updateIndustryLife.id = rows[0].id;
        updateIndustryLife.tjyear = $("#tjyear_changed").val();
        updateIndustryLife.tjmonth = $("#tjmonth_changed").val();
        updateIndustryLife.tjday = $("#tjday_changed").val();
        updateIndustryLife.name = $("#name_changed").val();
        updateIndustryLife.usccCode = $("#usccCode_changed").val();
        updateIndustryLife.city = $("#city_changed").val();
        updateIndustryLife.county = $("#county_changed").val();
        updateIndustryLife.village = $("#village_changed").val();
        updateIndustryLife.address = $("#address_changed").val();
        updateIndustryLife.longitude = $("#longitude_changed").val();
        updateIndustryLife.latitude = $("#latitude_changed").val();
        updateIndustryLife.facilitiesName = $("#facilitiesName_changed").val();
        updateIndustryLife.sjgm = $("#sjgm_changed").val();
        updateIndustryLife.dailyEmission = $("#dailyEmission_changed").val();
        updateIndustryLife.annualEmission = $("#annualEmission_changed").val();
        updateIndustryLife.emissionDays = $("#emissionDays_changed").val();

        $.ajax({
            url: "rest/enterprise/updateIndustrylife",
            type: "POST",
            data: JSON.stringify(updateIndustryLife),
            datatype: "json",
            contentType: "application/json",
            success: function (result) {
                if (result.success) {
                    $("#editIndustryLifeModel").remove();
                    $('.modal-backdrop').remove();
                    $("#IndustryLifeTable").bootstrapTable('refresh');
                    alert("数据修改成功！")
                } else {
                    alert(result.errMsg);
                }
            }
        });
    });
    //水产养殖
    $("#btn_edit4").click(function () {
        var rows = $("#AquacultureTable").bootstrapTable('getSelections');
        if (rows.length == 0) {
            alert("请选择一条要修改的记录！");
            return;
        } else if (rows.length > 1) {
            alert("每次只能修改一条记录！")
            return;
        } else {
            //获取原来的数据并传入到修改框中
            $("#tjyear_changed").val(rows[0].tjyear);
            $("#tjmonth_changed").val(rows[0].tjmonth);
            $("#tjday_changed").val(rows[0].tjday);
            $("#name_changed").val(rows[0].name);
            $("#city_changed").val(rows[0].city);
            $("#county_changed").val(rows[0].county);
            $("#village_changed").val(rows[0].village);
            $("#address_changed").val(rows[0].address);
            $("#longitude_changed").val(rows[0].longitude);
            $("#latitude_changed").val(rows[0].latitude);
            $("#scWay_changed").val(rows[0].scWay);
            $("#yzsyxz_changed").val(rows[0].yzsyxz);
            $("#yzcsl_changed").val(rows[0].yzcsl);
            $("#yzcNum_changed").val(rows[0].yzcNum);
            $("#yzcSum_changed").val(rows[0].yzcSum);
            $("#yzDay_changed").val(rows[0].yzDay);
            $("#period_changed").val(rows[0].period);
            $("#season_changed").val(rows[0].season);
            $("#psl_changed").val(rows[0].psl);
            $("#rjslDay_changed").val(rows[0].rjslDay);
            $("#rjslYear_changed").val(rows[0].rjslYear);

            //弹出模式
            $('#editAquacultureModel').modal();
        }
    });
    /**
     * 保存修改过的数据
     * */
    $("#editAquaculture").click(function () {
        var rows = $("#AquacultureTable").bootstrapTable("getSelections");
        var updateAquaculture = {};
        updateAquaculture.id = rows[0].id;
        updateAquaculture.tjyear = $("#tjyear_changed").val();
        updateAquaculture.tjmonth = $("#tjmonth_changed").val();
        updateAquaculture.tjday = $("#tjday_changed").val();
        updateAquaculture.name = $("#name_changed").val();
        updateAquaculture.city = $("#city_changed").val();
        updateAquaculture.county = $("#county_changed").val();
        updateAquaculture.village = $("#village_changed").val();
        updateAquaculture.address = $("#address_changed").val();
        updateAquaculture.longitude = $("#longitude_changed").val();
        updateAquaculture.latitude = $("#latitude_changed").val();
        updateAquaculture.scWay = $("#scWay_changed").val();
        updateAquaculture.yzsyxz = $("#yzsyxz_changed").val();
        updateAquaculture.yzcsl = $("#yzcsl_changed").val();
        updateAquaculture.yzcNum = $("#yzcNum_changed").val();
        updateAquaculture.yzcSum = $("#yzcSum_changed").val();
        updateAquaculture.yzDay = $("#yzDay_changed").val();
        updateAquaculture.period = $("#period_changed").val();
        updateAquaculture.season = $("#season_changed").val();
        updateAquaculture.psl = $("#psl_changed").val();
        updateAquaculture.rjslDay = $("#rjslDay_changed").val();
        updateAquaculture.rjslYear = $("#rjslYear_changed").val();

        $.ajax({
            url: "rest/enterprise/updateAquaculture",
            type: "POST",
            data: JSON.stringify(updateAquaculture),
            datatype: "json",
            contentType: "application/json",
            success: function (result) {
                if (result.success) {
                    $("#AquacultureTable").bootstrapTable('refresh');
                    $("#editAquacultureModel").remove();
                    $('.modal-backdrop').remove();
                    alert("数据修改成功！")
                } else {
                    alert(result.errMsg);
                }
            }
        });
    });
    //工业园区
    $("#btn_edit5").click(function () {
        var rows = $("#IndustryParkTable").bootstrapTable('getSelections');
        if (rows.length == 0) {
            alert("请选择一条要修改的记录！");
            return;
        } else if (rows.length > 1) {
            alert("每次只能修改一条记录！")
            return;
        } else {
            //获取原来的数据并传入到修改框中
            $("#tjyear_changed").val(rows[0].tjyear);
            $("#tjmonth_changed").val(rows[0].tjmonth);
            $("#tjday_changed").val(rows[0].tjday);
            $("#gyyqName_changed").val(rows[0].gyyqName);
            $("#code_changed").val(rows[0].code);
            $("#city_changed").val(rows[0].city);
            $("#country_changed").val(rows[0].country);
            $("#address_changed").val(rows[0].address);
            $("#longitude_changed").val(rows[0].longitude);
            $("#latitude_changed").val(rows[0].latitude);
            $("#yqArea_changed").val(rows[0].yqArea);
            $("#cybj_changed").val(rows[0].cybj);
            $("#facilityName_changed").val(rows[0].facilitiesName);
            $("#facilityLongitude_changed").val(rows[0].facilityLongitude);
            $("#facilityLatitude_changed").val(rows[0].facilityLatitude);
            $("#isCollection_changed").val(rows[0].isCollection);
            $("#isEmission_changed").val(rows[0].isEmission);
            $("#sjgm_changed").val(rows[0].sjgm);
            $("#dailyEmission_changed").val(rows[0].dailyEmission);
            $("#annualEmission_changed").val(rows[0].annualEmission);
            $("#emissionDays_changed").val(rows[0].emissionDays);
            $("#process_changed").val(rows[0].process);

            //弹出模式
            $('#editIndustryParkModel').modal();
        }
    });
    /**
     * 保存修改过的数据
     * */
    $("#editIndustryPark").click(function () {
        var rows = $("#IndustryParkTable").bootstrapTable("getSelections");
        var updateIndustryPark = {};
        updateIndustryPark.id = rows[0].id;
        updateIndustryPark.tjyear = $("#tjyear_changed").val();
        updateIndustryPark.tjmonth = $("#tjmonth_changed").val();
        updateIndustryPark.tjday = $("#tjday_changed").val();
        updateIndustryPark.gyyqName = $("#gyyqName_changed").val();
        updateIndustryPark.code = $("#code_changed").val();
        updateIndustryPark.city = $("#city_changed").val();
        updateIndustryPark.country = $("#country_changed").val();
        updateIndustryPark.address = $("#address_changed").val();
        updateIndustryPark.longitude = $("#longitude_changed").val();
        updateIndustryPark.latitude = $("#latitude_changed").val();
        updateIndustryPark.yqArea = $("#yqArea_changed").val();
        updateIndustryPark.cybj = $("#cybj_changed").val();
        updateIndustryPark.facilityName = $("#facilityName_changed").val();
        updateIndustryPark.facilityLongitude = $("#facilityLongitude_changed").val();
        updateIndustryPark.facilityLatitude = $("#facilityLatitude_changed").val();
        updateIndustryPark.isCollection = $("#isCollection_changed").val();
        updateIndustryPark.isEmission = $("#isEmission_changed").val();
        updateIndustryPark.sjgm = $("#sjgm_changed").val();
        updateIndustryPark.dailyEmission = $("#dailyEmission_changed").val();
        updateIndustryPark.annualEmission = $("#annualEmission_changed").val();
        updateIndustryPark.emissionDays = $("#emissionDays_changed").val();
        updateIndustryPark.process = $("#process_changed").val();


        $.ajax({
            url: "rest/enterprise/updateIndustryPark",
            type: "POST",
            data: JSON.stringify(updateIndustryPark),
            datatype: "json",
            contentType: "application/json",
            success: function (result) {
                if (result.success) {
                    $("#IndustryParkTable").bootstrapTable('refresh');
                    $("#editIndustryParkModel").remove();
                    $('.modal-backdrop').remove();
                    alert("数据修改成功！")
                } else {
                    alert(result.errMsg);
                }
            }
        });
    });
    //农田
    $("#btn_edit6").click(function () {
        var rows = $("#FarmTable").bootstrapTable('getSelections');
        if (rows.length == 0) {
            alert("请选择一条要修改的记录！");
            return;
        } else if (rows.length > 1) {
            alert("每次只能修改一条记录！")
            return;
        } else {
            //获取原来的数据并传入到修改框中
            $("#tjyear_changed").val(rows[0].tjyear);
            $("#tjmonth_changed").val(rows[0].tjmonth);
            $("#tjday_changed").val(rows[0].tjday);
            $("#farmerName_changed").val(rows[0].farmerName);
            $("#city_changed").val(rows[0].city);
            $("#county_changed").val(rows[0].county);
            $("#village_changed").val(rows[0].village);
            $("#address_changed").val(rows[0].address);
            $("#longitude_changed").val(rows[0].longitude);
            $("#latitude_changed").val(rows[0].latitude);
            $("#yearFamount_changed").val(rows[0].yearFamount);
            $("#pesticideDosage_changed").val(rows[0].pesticideDosage);
            $("#pesticideConcentration_changed").val(rows[0].pesticideConcentration);
            $("#yearPtimes_changed").val(rows[0].yearPtimes);
            $("#yearPamount_changed").val(rows[0].yearPamount);
            $("#outletSeason_changed").val(rows[0].outletSeason);
            $("#outletTimes_changed").val(rows[0].outletTimes);
            $("#outletAmount_changed").val(rows[0].outletAmount);
            $("#outletTime_changed").val(rows[0].outletTime);

            //弹出模式
            $('#editFarmModel').modal();
        }
    });
    /**
     * 保存修改过的数据
     * */
    $("#editFarm").click(function () {
        var rows = $("#FarmTable").bootstrapTable("getSelections");
        var updateFarm = {};
        updateFarm.id = rows[0].id;
        updateFarm.tjyear = $("#tjyear_changed").val();
        updateFarm.tjmonth = $("#tjmonth_changed").val();
        updateFarm.tjday = $("#tjday_changed").val();
        updateFarm.farmerName = $("#farmerName_changed").val();
        updateFarm.city = $("#city_changed").val();
        updateFarm.county = $("#county_changed").val();
        updateFarm.village = $("#village_changed").val();
        updateFarm.address = $("#address_changed").val();
        updateFarm.longitude = $("#longitude_changed").val();
        updateFarm.latitude = $("#latitude_changed").val();
        updateFarm.yearFamount = $("#yearFamount_changed").val();
        updateFarm.pesticideDosage = $("#pesticideDosage_changed").val();
        updateFarm.pesticideConcentration = $("#pesticideConcentration_changed").val();
        updateFarm.yearPtimes = $("#yearPtimes_changed").val();
        updateFarm.yearPamount = $("#yearPamount_changed").val();
        updateFarm.outletSeason = $("#outletSeason_changed").val();
        updateFarm.outletTimes = $("#outletTimes_changed").val();
        updateFarm.outletAmount = $("#outletAmount_changed").val();
        updateFarm.outletTime = $("#outletTime_changed").val();


        $.ajax({
            url: "rest/enterprise/updateFarm",
            type: "POST",
            data: JSON.stringify(updateFarm),
            datatype: "json",
            contentType: "application/json",
            success: function (result) {
                if (result.success) {
                    $("#FarmTable").bootstrapTable('refresh');
                    $("#editFarmModel").remove();
                    $('.modal-backdrop').remove();
                    alert("数据修改成功！")
                } else {
                    alert(result.errMsg);
                }
            }
        });
    });
    //工业废水
    $("#btn_edit3").click(function () {
        var rows = $("#IndustryTrashTable").bootstrapTable('getSelections');
        if (rows.length == 0) {
            alert("请选择一条要修改的记录！");
            return;
        } else if (rows.length > 1) {
            alert("每次只能修改一条记录！")
            return;
        } else {
            //获取原来的数据并传入到修改框中
            $("#tjyear_changed").val(rows[0].tjyear);
            $("#tjmonth_changed").val(rows[0].tjmonth);
            $("#tjday_changed").val(rows[0].tjday);
            $("#gyname_changed").val(rows[0].gyname);
            $("#usccCode_changed").val(rows[0].usccCode);
            $("#code_changed").val(rows[0].code);
            $("#city_changed").val(rows[0].city);
            $("#country_changed").val(rows[0].country);
            $("#village_changed").val(rows[0].village);
            $("#address_changed").val(rows[0].address);
            $("#longitude_changed").val(rows[0].longitude);
            $("#latitude_changed").val(rows[0].latitude);
            $("#qyScale_changed").val(rows[0].qyScale);
            $("#qyStatus_changed").val(rows[0].qyStatus);
            $("#nscsj_changed").val(rows[0].nscsj);
            $("#typeCode_changed").val(rows[0].typeCode);
            $("#gytype_changed").val(rows[0].gytype);
            $("#gyysl_changed").val(rows[0].gyysl);
            $("#qsl_changed").val(rows[0].qsl);
            $("#cfysl_changed").val(rows[0].cfysl);
            $("#facilitiesName_changed").val(rows[0].facilitiesName);
            $("#sjgm_changed").val(rows[0].sjgm);
            $("#dailyEmission_changed").val(rows[0].dailyEmission);
            $("#annualEmission_changed").val(rows[0].annualEmission);
            $("#emissionDays_changed").val(rows[0].emissionDays);
            //弹出模式
            $('#editIndustryTrashModel').modal();
        }
    });
    /**
     * 保存修改过的数据
     * */
    $("#editIndustryTrash").click(function () {
        var rows = $("#IndustryTrashTable").bootstrapTable("getSelections");
        var updateIndustryTrash = {};
        updateIndustryTrash.id = rows[0].id;
        updateIndustryTrash.tjyear = $("#tjyear_changed").val();
        updateIndustryTrash.tjmonth = $("#tjmonth_changed").val();
        updateIndustryTrash.tjday = $("#tjday_changed").val();
        updateIndustryTrash.gyname = $("#gyname_changed").val();
        updateIndustryTrash.usccCode = $("#usccCode_changed").val();
        updateIndustryTrash.code=$("#code_changed").val();
        updateIndustryTrash.city = $("#city_changed").val();
        updateIndustryTrash.country = $("#country_changed").val();
        updateIndustryTrash.village = $("#village_changed").val();
        updateIndustryTrash.address = $("#address_changed").val();
        updateIndustryTrash.longitude = $("#longitude_changed").val();
        updateIndustryTrash.latitude = $("#latitude_changed").val();
        updateIndustryTrash.qyScale=$("#qyScale_changed").val();
        updateIndustryTrash.qyStatus=$("#qyStatus_changed").val();
        updateIndustryTrash.nscsj=$("#nscsj_changed").val();
        updateIndustryTrash.typeCode=$("#typeCode_changed").val();
        updateIndustryTrash.gytype=$("#gytype_changed").val();
        updateIndustryTrash.gyysl=$("#gyysl_changed").val();
        updateIndustryTrash.qsl=$("#qsl_changed").val();
        updateIndustryTrash.cfysl=$("#cfysl_changed").val();
        updateIndustryTrash.facilitiesName = $("#facilitiesName_changed").val();
        updateIndustryTrash.sjgm = $("#sjgm_changed").val();
        updateIndustryTrash.dailyEmission = $("#dailyEmission_changed").val();
        updateIndustryTrash.annualEmission = $("#annualEmission_changed").val();
        updateIndustryTrash.emissionDays = $("#emissionDays_changed").val();

        $.ajax({
            url: "rest/enterprise/updateIndustryTrash",
            type: "POST",
            data: JSON.stringify(updateIndustryTrash),
            datatype: "json",
            contentType: "application/json",
            success: function (result) {
                if (result.success) {
                    $("#IndustryTrashTable").bootstrapTable('refresh');
                    $("#editIndustryTrashModel").remove();
                    $('.modal-backdrop').remove();
                    alert("数据修改成功！")
                } else {
                    alert(result.errMsg);
                }
            }
        });
    });
    //畜禽养殖
    $("#btn_edit1").click(function () {
        var rows = $("#LivestockTable").bootstrapTable('getSelections');
        if (rows.length == 0) {
            alert("请选择一条要修改的记录！");
            return;
        } else if (rows.length > 1) {
            alert("每次只能修改一条记录！")
            return;
        } else {
            //获取原来的数据并传入到修改框中
            $("#tjyear_changed").val(rows[0].tjyear);
            $("#tjmonth_changed").val(rows[0].tjmonth);
            $("#tjday_changed").val(rows[0].tjday);
            $("#name_changed").val(rows[0].name);
            $("#usccCode_changed").val(rows[0].usccCode);
            $("#city_changed").val(rows[0].city);
            $("#county_changed").val(rows[0].county);
            $("#village_changed").val(rows[0].village);
            $("#address_changed").val(rows[0].address);
            $("#longitude_changed").val(rows[0].longitude);
            $("#latitude_changed").val(rows[0].latitude);
            $("#facilitiesName_changed").val(rows[0].facilitiesName);
            $("#sjgm_changed").val(rows[0].sjgm);
            $("#dailyEmission_changed").val(rows[0].dailyEmission);
            $("#annualEmission_changed").val(rows[0].annualEmission);
            $("#emissionDays_changed").val(rows[0].emissionDays);
            //弹出模式
            $('#editLivestockModel').modal();
        }
    });
    /**
     * 保存修改过的数据
     * */
    $("#editLivestock").click(function () {
        var rows = $("#LivestockTable").bootstrapTable("getSelections");
        var updateLivestock = {};
        updateLivestock.id = rows[0].id;
        updateLivestock.tjyear = $("#tjyear_changed").val();
        updateLivestock.tjmonth = $("#tjmonth_changed").val();
        updateLivestock.tjday = $("#tjday_changed").val();
        updateLivestock.name = $("#name_changed").val();
        updateLivestock.usccCode = $("#usccCode_changed").val();
        updateLivestock.city = $("#city_changed").val();
        updateLivestock.county = $("#county_changed").val();
        updateLivestock.village = $("#village_changed").val();
        updateLivestock.address = $("#address_changed").val();
        updateLivestock.longitude = $("#longitude_changed").val();
        updateLivestock.latitude = $("#latitude_changed").val();
        updateLivestock.facilitiesName = $("#facilitiesName_changed").val();
        updateLivestock.sjgm = $("#sjgm_changed").val();
        updateLivestock.dailyEmission = $("#dailyEmission_changed").val();
        updateLivestock.annualEmission = $("#annualEmission_changed").val();
        updateLivestock.emissionDays = $("#emissionDays_changed").val();

        $.ajax({
            url: "rest/enterprise/updateLivestock",
            type: "POST",
            data: JSON.stringify(updateLivestock),
            datatype: "json",
            contentType: "application/json",
            success: function (result) {
                if (result.success) {
                    $("#LivestockTable").bootstrapTable('refresh');
                    $("#editLivestockModel").remove();
                    $('.modal-backdrop').remove();
                    alert("数据修改成功！")
                } else {
                    alert(result.errMsg);
                }
            }
        });
    });
    //市政污水
    $("#btn_edit2").click(function () {
        var rows = $("#MunicipalTable").bootstrapTable('getSelections');
        if (rows.length == 0) {
            alert("请选择一条要修改的记录！");
            return;
        } else if (rows.length > 1) {
            alert("每次只能修改一条记录！")
            return;
        } else {
            //获取原来的数据并传入到修改框中
            $("#tjyear_changed").val(rows[0].tjyear);
            $("#tjmonth_changed").val(rows[0].tjmonth);
            $("#tjday_changed").val(rows[0].tjday);
            $("#name_changed").val(rows[0].name);
            $("#usccCode_changed").val(rows[0].usccCode);
            $("#city_changed").val(rows[0].city);
            $("#county_changed").val(rows[0].county);
            $("#village_changed").val(rows[0].village);
            $("#address_changed").val(rows[0].address);
            $("#longitude_changed").val(rows[0].longitude);
            $("#latitude_changed").val(rows[0].latitude);
            $("#facilitiesName_changed").val(rows[0].facilitiesName);
            $("#sjgm_changed").val(rows[0].sjgm);
            $("#dailyEmission_changed").val(rows[0].dailyEmission);
            $("#annualEmission_changed").val(rows[0].annualEmission);
            $("#emissionDays_changed").val(rows[0].emissionDays);
            //弹出模式
            $('#editMunicipalModel').modal();
        }
    });
    /**
     * 保存修改过的数据
     * */
    $("#editMunicipal").click(function () {
        var rows = $("#MunicipalTable").bootstrapTable("getSelections");
        var updateMunicipal = {};
        updateMunicipal.id = rows[0].id;
        updateMunicipal.tjyear = $("#tjyear_changed").val();
        updateMunicipal.tjmonth = $("#tjmonth_changed").val();
        updateMunicipal.tjday = $("#tjday_changed").val();
        updateMunicipal.name = $("#name_changed").val();
        updateMunicipal.usccCode = $("#usccCode_changed").val();
        updateMunicipal.city = $("#city_changed").val();
        updateMunicipal.county = $("#county_changed").val();
        updateMunicipal.village = $("#village_changed").val();
        updateMunicipal.address = $("#address_changed").val();
        updateMunicipal.longitude = $("#longitude_changed").val();
        updateMunicipal.latitude = $("#latitude_changed").val();
        updateMunicipal.facilitiesName = $("#facilitiesName_changed").val();
        updateMunicipal.sjgm = $("#sjgm_changed").val();
        updateMunicipal.dailyEmission = $("#dailyEmission_changed").val();
        updateMunicipal.annualEmission = $("#annualEmission_changed").val();
        updateMunicipal.emissionDays = $("#emissionDays_changed").val();

        $.ajax({
            url: "rest/enterprise/updateMunicipal",
            type: "POST",
            data: JSON.stringify(updateMunicipal),
            datatype: "json",
            contentType: "application/json",
            success: function (result) {
                if (result.success) {
                    $('#MunicipalTable').bootstrapTable('refresh');
                    $("#editMunicipalModel").remove();
                    $('.modal-backdrop').remove();
                    alert("数据修改成功！")
                } else {
                    alert(result.errMsg);
                }
            }
        });
    });
    /**
     * 5.多条件查询
     * */
    //工业生活
    $("#searchIndustryLife").click(function () {
        //获取各个条件的内容
        var selectedInfo = {};
        selectedInfo.tjyear = $("#select0").val();
        selectedInfo.tjmonth = $("#select1").val();
        selectedInfo.tjday = $("#select2").val();
        selectedInfo.name = $("#select3").val();
        selectedInfo.usccCode = $("#select4").val();
        selectedInfo.city = $("#select5").val();
        selectedInfo.county = $("#select6").val();
        selectedInfo.village = $("#select7").val();
        selectedInfo.address = $("#select8").val();
        selectedInfo.longitude = parseFloat($("#select9").val());
        selectedInfo.latitude = parseFloat($("#select10").val());
        selectedInfo.facilitiesName = $("#select11").val();
        selectedInfo.sjgm = parseFloat($("#select12").val());
        selectedInfo.dailyEmission = parseFloat($("#select13").val());
        selectedInfo.annualEmission = parseFloat($("#select14").val());
        selectedInfo.emissionDays = parseFloat($("#select15").val());
        $.ajax({
            url: "rest/enterprise/searchIndustryLifes",
            type: "POST",
            data: JSON.stringify(selectedInfo),
            datatype: "json",
            contentType: "application/json",
            success: function (data) {
                $("#IndustryLifeTable").bootstrapTable('load', data);
                $('#myModalsearch').remove();
                $('.modal-backdrop').remove();
            }
        });
    })
    //工业园区
    $("#searchIndustryPark").click(function () {
        //获取各个条件的内容
        var selectedInfo = {};
        selectedInfo.tjyear = $("#select0").val();
        selectedInfo.tjmonth = $("#select1").val();
        selectedInfo.tjday = $("#select2").val();
        selectedInfo.gyyqName = $("#select3").val();
        selectedInfo.code = $("#select4").val();
        selectedInfo.city=$("#select5").val();
        selectedInfo.country = $("#select6").val();
        selectedInfo.address = $("#select7").val();
        selectedInfo.longitude = $("#select8").val();
        selectedInfo.latitude = $("#select9").val();
        selectedInfo.yqArea = parseFloat($("#select10").val());
        selectedInfo.cybj = parseFloat($("#select11").val());
        selectedInfo.facilityName = $("#select12").val();
        selectedInfo.facilityLongitude = $("#select13").val();
        selectedInfo.facilityLatitude = $("#select14").val();
        selectedInfo.isCollection = $("#select15").val();
        selectedInfo.isEmission = $("#select16").val();
        selectedInfo.sjgm = parseFloat($("#select17").val());
        selectedInfo.dailyEmission = parseFloat($("#select18").val());
        selectedInfo.annualEmission = parseFloat($("#select19").val());
        selectedInfo.emissionDays = parseFloat($("#select20").val());
        selectedInfo.process = parseFloat($("#select21").val());

        $.ajax({
            url: "rest/enterprise/searchIndustryPark",
            type: "POST",
            data: JSON.stringify(selectedInfo),
            datatype: "json",
            contentType: "application/json",
            success: function (data) {
                $("#IndustryParkTable").bootstrapTable('load', data);
                $('#myModalsearch').remove();
                $('.modal-backdrop').remove();
            }
        });
    })
    //水产养殖
    $("#searchAquaculture").click(function () {
        //获取各个条件的内容
        var selectedInfo = {};
        selectedInfo.tjyear = $("#select0").val();
        selectedInfo.tjmonth = $("#select1").val();
        selectedInfo.tjday = $("#select2").val();
        selectedInfo.name = $("#select3").val();
        selectedInfo.city = $("#select4").val();
        selectedInfo.county=$("#select5").val();
        selectedInfo.village = $("#select6").val();
        selectedInfo.address = $("#select7").val();
        selectedInfo.longitude = $("#select8").val();
        selectedInfo.latitude = $("#select9").val();
        selectedInfo.scWay = parseFloat($("#select10").val());
        selectedInfo.yzsyxz = parseFloat($("#select11").val());
        selectedInfo.yzcsl = $("#select12").val();
        selectedInfo.yzcNum = $("#select13").val();
        selectedInfo.yzcSum= $("#select14").val();
        selectedInfo.yzDay = $("#select15").val();
        selectedInfo.period= $("#select16").val();
        selectedInfo.season = parseFloat($("#select17").val());
        selectedInfo.psl = parseFloat($("#select18").val());
        selectedInfo.rjslDay = parseFloat($("#select19").val());
        selectedInfo.rjslYear = parseFloat($("#select20").val());

        $.ajax({
            url: "rest/enterprise/searchAquaculture",
            type: "POST",
            data: JSON.stringify(selectedInfo),
            datatype: "json",
            contentType: "application/json",
            success: function (data) {
                $("#AquacultureTable").bootstrapTable('load', data);
                $('#myModalsearch').remove();
                $('.modal-backdrop').remove();
            }
        });
    })
    //工业废水
    $("#searchIndustryTrash").click(function () {
        //获取各个条件的内容
        var selectedInfo = {};
        selectedInfo.tjyear = $("#select0").val();
        selectedInfo.tjmonth = $("#select1").val();
        selectedInfo.tjday = $("#select2").val();
        selectedInfo.name = $("#select3").val();
        selectedInfo.usccCode = $("#select4").val();
        selectedInfo.code=$("#select5").val();
        selectedInfo.city = $("#select6").val();
        selectedInfo.county = $("#select7").val();
        selectedInfo.village = $("#select8").val();
        selectedInfo.address = $("#select9").val();
        selectedInfo.longitude = parseFloat($("#select10").val());
        selectedInfo.latitude = parseFloat($("#select11").val());
        selectedInfo.qyScale = $("#select12").val();
        selectedInfo.qyStatus = $("#select13").val();
        selectedInfo.nscsj = $("#select14").val();
        selectedInfo.typeCode = $("#select15").val();
        selectedInfo.gytype = $("#select16").val();
        selectedInfo.gyysl = parseFloat($("#select17").val());
        selectedInfo.qsl = parseFloat($("#select18").val());
        selectedInfo.cfysl = parseFloat($("#select19").val());
        selectedInfo.sjgm = parseFloat($("#select20").val());
        selectedInfo.dailyEmission = parseFloat($("#select21").val());
        selectedInfo.annualEmission = parseFloat($("#select22").val());
        selectedInfo.emissionDays = parseFloat($("#select23").val());
        $.ajax({
            url: "rest/enterprise/searchIndustryTrash",
            type: "POST",
            data: JSON.stringify(selectedInfo),
            datatype: "json",
            contentType: "application/json",
            success: function (data) {
                $("#IndustryTrashTable").bootstrapTable('load', data);
                $('#myModalsearch').remove();
                $('.modal-backdrop').remove();
            }
        });
    })
    //农田
    $("#searchFarm").click(function () {
        //获取各个条件的内容
        var selectedInfo = {};
        selectedInfo.tjyear = $("#select0").val();
        selectedInfo.tjmonth = $("#select1").val();
        selectedInfo.tjday = $("#select2").val();
        selectedInfo.farmerName = $("#select3").val();
        selectedInfo.city = $("#select4").val();
        selectedInfo.county=$("#select5").val();
        selectedInfo.village = $("#select6").val();
        selectedInfo.address = $("#select7").val();
        selectedInfo.longitude = parseFloat($("#select8").val());
        selectedInfo.latitude = parseFloat($("#select9").val());
        selectedInfo.yearFamount = parseFloat($("#select10").val());
        selectedInfo.pesticideDosage = parseFloat($("#select11").val());
        selectedInfo.pesticideConcentration = parseFloat($("#select12").val());
        selectedInfo.yearPtimes = parseInt($("#select13").val());
        selectedInfo.yearPamount = $("#select14").val();
        selectedInfo.outletSeason = $("#select15").val();
        selectedInfo.outletTimes = parseInt($("#select16").val());
        selectedInfo.outletAmount = parseFloat($("#select17").val());
        selectedInfo.outletTime = parseInt($("#select18").val());
        $.ajax({
            url: "rest/enterprise/searchFarm",
            type: "POST",
            data: JSON.stringify(selectedInfo),
            datatype: "json",
            contentType: "application/json",
            success: function (data) {
                $("#FarmTable").bootstrapTable('load', data);
                $('#myModalsearch').remove();
                $('.modal-backdrop').remove();
            }
        });
    })
    //畜禽养殖
    $("#searchLivestock").click(function () {
        //获取各个条件的内容
        var selectedInfo = {};
        selectedInfo.tjyear = $("#select0").val();
        selectedInfo.tjmonth = $("#select1").val();
        selectedInfo.tjday = $("#select2").val();
        selectedInfo.name = $("#select3").val();
        selectedInfo.usccCode = $("#select4").val();
        selectedInfo.city = $("#select5").val();
        selectedInfo.county = $("#select6").val();
        selectedInfo.village = $("#select7").val();
        selectedInfo.address = $("#select8").val();
        selectedInfo.longitude = parseFloat($("#select9").val());
        selectedInfo.latitude = parseFloat($("#select10").val());
        selectedInfo.facilitiesName = $("#select11").val();
        selectedInfo.sjgm = parseFloat($("#select12").val());
        selectedInfo.dailyEmission = parseFloat($("#select13").val());
        selectedInfo.annualEmission = parseFloat($("#select14").val());
        selectedInfo.emissionDays = parseFloat($("#select15").val());
        $.ajax({
            url: "rest/enterprise/searchLivestock",
            type: "POST",
            data: JSON.stringify(selectedInfo),
            datatype: "json",
            contentType: "application/json",
            success: function (data) {
                $("#LivestockTable").bootstrapTable('load', data);
                $('#myModalsearch').remove();
                $('.modal-backdrop').remove();
            }
        });
    })
    //市政污水
    $("#searchMunicipal").click(function () {
        //获取各个条件的内容
        var selectedInfo = {};
        selectedInfo.tjyear = $("#select0").val();
        selectedInfo.tjmonth = $("#select1").val();
        selectedInfo.tjday = $("#select2").val();
        selectedInfo.name = $("#select3").val();
        selectedInfo.usccCode = $("#select4").val();
        selectedInfo.city = $("#select5").val();
        selectedInfo.county = $("#select6").val();
        selectedInfo.village = $("#select7").val();
        selectedInfo.address = $("#select8").val();
        selectedInfo.longitude = parseFloat($("#select9").val());
        selectedInfo.latitude = parseFloat($("#select10").val());
        selectedInfo.facilitiesName = $("#select11").val();
        selectedInfo.sjgm = parseFloat($("#select12").val());
        selectedInfo.dailyEmission = parseFloat($("#select13").val());
        selectedInfo.annualEmission = parseFloat($("#select14").val());
        selectedInfo.emissionDays = parseFloat($("#select15").val());
        $.ajax({
            url: "rest/enterprise/searchMunicipal",
            type: "POST",
            data: JSON.stringify(selectedInfo),
            datatype: "json",
            contentType: "application/json",
            success: function (data) {
                $("#MunicipalTable").bootstrapTable('load', data);
                $('#myModalsearch').remove();
                $('.modal-backdrop').remove();
            }
        });
    })

    /**
     * 弹出框的关闭功能
     * */
    $("#closeMod").click(function () {
        $('.modal-backdrop').remove();
    })
    /**
     * 弹出多条件搜索框
     * */
    $("#btn_search").click(function () {
        $('#myModalsearch').modal();
    });
    /**
     * 伸缩功能
     * */
    $("#btn_show").click(function () {
        $("#navigation").fadeToggle();
    });

});
