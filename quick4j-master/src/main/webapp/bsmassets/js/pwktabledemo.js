$(function () {
    $('#PwkInfoTable').bootstrapTable({
        url: 'rest/pwk/pwkshowlist', // 请求后台的URL（*）
        method: 'get', // 请求方式（*）
        toolbar: "#toolbar", // 工具按钮用哪个容器

        striped: true, // 是否显示行间隔色
        cache: false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
//	sortable : true, //用 是否启排序
//	sortOrder : "asc", // 排序方式
        sidePagination: "client", // 分页方式：client客户端分页，server服务端分页（*）
        pagination: true, // 是否显示分页（*）
        pageNumber: 1,    //如果设置了分页，首页页码
        pageSize: 8,                       //每页的记录行数（*）
        pageList: [4, 5, 6],        //可供选择的每页的行数（*）
//	onlyInfoPagination:false, //设置为 true 只显示总数据数，而不显示分页
        showRefresh: true, // 是否显示刷新按钮
//		queryParamsType:'',
        locale: "zh-CN",
        clickToSelect: true, // 是否启用点击选中行
//	uniqueId : "fileid", // 每一行的唯一标识，一般为主键列
        showToggle: true, // 是否显示详细视图和列表视图的切换按钮
//	cardView : false, // 是否显示详细视图
//	detailView : false, // 是否显示父子表
        search: true,   //是否启用搜索框
        columns: [
            {
                checkbox: true
            }, {
                field: 'id',
                title: '记录号',
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
                field: 'pwkCode',
                title: '排污口编号',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'name',
                title: '单位名称',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'pwkName',
                title: '排放口名称',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'pwkType',
                title: '排放口类型',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'city',
                title: '所在市',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'county',
                title: '所在县(市区)',
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
                title: '排放口经度',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'latitude',
                title: '排放口纬度',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'isShenpi',
                title: '是否取得审批手续',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'shenpi',
                title: '审批单位及审批文号',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'mainType',
                title: '批复主要污染物种类',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'dayAllow',
                title: '批复日允许排放量(吨/日)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'yearAllow',
                title: '批复年允许排放量(吨/年)',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'isPermit',
                title: '是否发放许可证',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'pwCode',
                title: '排污许可证号',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'usetime',
                title: '投入使用时间',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'isInlaw',
                title: '是否为非法排污口',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'isReasonable',
                title: '是否为设置不合理排污口',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'position',
                title: '排放口靠河岸位置',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'processTech',
                title: '污水处理工艺',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'emissionMode',
                title: '废水排放方式',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'pwqx',
                title: '排放去向',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'riverMode',
                title: '入河方式',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'riverName',
                title: '排入河流名称',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'riverLevel',
                title: '河流级别',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'riverType',
                title: '河流所属水系',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'tosea',
                title: '汇入海域',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'seaMode',
                title: '入海方式',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'sea_name',
                title: '排入海域名称',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'emissionStandard',
                title: '废水排放标准',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'riverGnq',
                title: '排入河流水功能区',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'riverSzmb',
                title: '排入河流水质目标',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'hyGnq',
                title: '排入海域近岸海域环境功能区',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'hySzmb',
                title: '排入海域水质目标',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'hyseaGnq',
                title: '排入海域海洋功能区类别',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'hyseaSzmb',
                title: '排入海域海洋功能区水质目标',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'isGet',
                title: '是否达标',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'nogetItems',
                title: '不达标指标',
                align: 'center',
                valign: 'middle'
            }],
        silent: true, // 刷新事件必须设置
    });
    /**
     * 新增一条记录触发模态框
     */
    // $("#btn_add").click(function(){
    //     $('#myModal').modal();
    // });
    $("#btn_excelout").click(function () {
        var allData = $("#PwkInfoTable").bootstrapTable('getData');
        var ids = new Array();
        $(allData).each(function () {
            ids.push(this.id);
        });
        console.log(ids);
        var excelout = "rest/pwk/excelout"
        $.ajax({
           url: excelout,
            type: "POST",
            data: {"ids":ids},
            type: "POST",
            // dataType: "json",
            traditional: true,
            success: function(data){
                var link = document.createElement('a');
                //设置下载的文件名
                link.download = "Member";
                link.style.display = 'none';
                //设置下载路径
                link.href = "download/Member.xls";
                //触发点击
                document.body.appendChild(link);
                link.click();
                //移除节点
                document.body.removeChild(link);
            }
        });
    });


    /**
     * 導入exel觸發模態框
     */
    $("#btn_excelin").click(function(){
        $('#myModalExcelin').modal();
    });
    $("#upload").click(function () {
        $.ajax({
            type: "POST",
            url: "rest/upload/uploadexcel",
            processData: false,
            contentType: false,
            data: new FormData($('#form1')[0]),
            success: function (data) {
                if (data.success) {
                    document.getElementById("jindutiao").setAttribute("style","width:100%;");
                    $("#jindutiao").text("100%")
                } else {
                    document.getElementById("jindutiao").setAttribute("style","width:60%;");
                    $("#jindutiao").text("60%")
                }
            },
            error:function (e) {
                document.getElementById("jindutiao").setAttribute("style", "width:60%;");
                $("#jindutiao").text("20%")
            }
        });
    });

    $("#submitPwk").click(function () {
        var addurl = "rest/pwk/addpwk";
        var addpwkmsc = {};
        /*********************************************/
        var t = $("form").serializeArray();
        if(t[0].value=="") {document.getElementById('message').innerHTML="年份字段不可为空!";return 0;}
        if(t[1].value=="") {document.getElementById('message').innerHTML="月份字段不可为空!";return 0;}
        if(t[2].value=="") {document.getElementById('message').innerHTML="日期字段不可为空!";return 0;}
        if(t[0].value.length<4) {document.getElementById('message').innerHTML="请检查年份字段!";return 0;}
        if((t[0].value.indexOf(".")!=-1)||(t[1].value.indexOf(".")!=-1)||(t[2].value.indexOf(".")!=-1)) {document.getElementById('message').innerHTML="请检查年、月、日!";return 0;}
        if((t[0].value<1)||(t[1].value<1)||(t[2].value<1)) {document.getElementById('message').innerHTML="请检查年、月、日!";return 0;}
        document.getElementById('message').innerHTML=""
        if(t[41].value !="是" && t[41].value !="否") {document.getElementById('message').innerHTML="是否达标字段，只能填是或否!";return 0;}

        // alert(tjyear);
        console.log(t);
        addpwkmsc.tjyear = t[0].value;
        addpwkmsc.tjmonth = t[1].value;
        addpwkmsc.tjday = t[2].value;
        addpwkmsc.pwkCode = t[3].value;
        addpwkmsc.name = t[4].value;
        addpwkmsc.pwkName = t[5].value;
        addpwkmsc.pwkType = t[6].value;
        addpwkmsc.city = t[7].value;
        addpwkmsc.county = t[8].value;
        addpwkmsc.village = t[9].value;
        addpwkmsc.address = t[10].value;
        addpwkmsc.longitude = parseFloat(t[11].value);
        addpwkmsc.latitude = parseFloat(t[12].value);
        addpwkmsc.isShenpi = t[13].value;
        addpwkmsc.shenpi = t[14].value;
        addpwkmsc.mainType = t[15].value;
        addpwkmsc.dayAllow = parseFloat(t[16].value);
        addpwkmsc.yearAllow = parseFloat(t[17].value);
        addpwkmsc.isPermit = t[18].value;
        addpwkmsc.pwCode = t[19].value;
        addpwkmsc.usetime = t[20].value;
        addpwkmsc.isInlaw = t[21].value;
        addpwkmsc.isReasonable = t[22].value;
        addpwkmsc.position = t[23].value;
        addpwkmsc.processTech = t[24].value;
        addpwkmsc.emissionMode = t[25].value;
        addpwkmsc.pwqx = t[26].value;
        addpwkmsc.riverMode = t[27].value;
        addpwkmsc.riverName = t[28].value;
        addpwkmsc.riverLevel = t[29].value;
        addpwkmsc.riverType = t[30].value;
        addpwkmsc.tosea = t[31].value;
        addpwkmsc.seaMode = t[32].value;
        addpwkmsc.seaName = t[33].value;
        addpwkmsc.emissionStandard = t[34].value;
        addpwkmsc.riverGnq = t[35].value;
        addpwkmsc.riverSzmb = t[36].value;
        addpwkmsc.hyGnq = t[37].value;
        addpwkmsc.hySzmb = t[38].value;
        addpwkmsc.hyseaGnq = t[39].value;
        addpwkmsc.hyseaSzmb = t[40].value;
        addpwkmsc.isGet = t[41].value;
        addpwkmsc.nogetItems = t[42].value;
        /*********************************************/
        console.log(addpwkmsc);
        $.ajax({
            url: addurl,
            type: "POST",
            data: JSON.stringify(addpwkmsc),
            datatype: "json",
            contentType: "application/json",
            success: function (data) {
                if (data.success) {
                    // $("#myModal").remove();
                    $('.modal-backdrop').remove();
                    document.getElementById("contentForm").reset();
                    alert("数据添加成功！")
                } else {
                    alert(data.errMsg);
                }
            }
        });
        // $.getJSON(addurl, function(data){
        //     if(data.success)
        // });
    });

    /**
     * 多条件查询数据
     * 第一步：点击搜索，弹出搜索条件的模态框
     * 第二步：用户选择搜索条件（选择一个生成一个输入框）
     * 第三步：输入搜索条件
     * 第三步：返回搜索结果
     * 在PwkInfoTable中显示结果
     */
    $("#submitPwk2").click(function(){
        //获取到新添加的东西
        var selectpwkmsc = {};
        // var a = $("#select0").val();
        selectpwkmsc.tjyear = $("#select0").val();
        selectpwkmsc.tjmonth = $("#select1").val();
        selectpwkmsc.tjday = $("#select2").val();
        selectpwkmsc.pwkCode = $("#select3").val();
        selectpwkmsc.name = $("#select4").val();
        selectpwkmsc.pwkName = $("#select5").val();
        selectpwkmsc.pwkType = $("#select6").val();
        selectpwkmsc.city = $("#select7").val();
        selectpwkmsc.county = $("#select8").val();
        selectpwkmsc.village = $("#select9").val();
        selectpwkmsc.address = $("#select10").val();
        selectpwkmsc.longitude = parseFloat($("#select11").val());
        selectpwkmsc.latitude = parseFloat($("#select12").val());
        selectpwkmsc.isShenpi = $("#select13").val();
        selectpwkmsc.shenpi =$("#select14").val();
        selectpwkmsc.mainType = $("#select15").val();
        selectpwkmsc.dayAllow = parseFloat($("#select16").val());
        selectpwkmsc.yearAllow = parseFloat($("#select17").val());
        selectpwkmsc.isPermit = $("#select18").val();
        selectpwkmsc.pwCode = $("#select19").val();
        selectpwkmsc.usetime = $("#select20").val();
        selectpwkmsc.isInlaw =$("#select21").val();
        selectpwkmsc.isReasonable = $("#select22").val();
        selectpwkmsc.position = $("#select23").val();
        selectpwkmsc.processTech = $("#select24").val();
        selectpwkmsc.emissionMode = $("#select25").val();
        selectpwkmsc.pwqx = $("#select26").val();
        selectpwkmsc.riverMode = $("#select27").val();
        selectpwkmsc.riverName = $("#select28").val();
        selectpwkmsc.riverLevel = $("#select29").val();
        selectpwkmsc.riverType = $("#select30").val();
        selectpwkmsc.tosea = $("#select31").val();
        selectpwkmsc.seaMode = $("#select32").val();
        selectpwkmsc.seaName = $("#select33").val();
        selectpwkmsc.emissionStandard = $("#select34").val();
        selectpwkmsc.riverGnq = $("#select35").val();
        selectpwkmsc.riverSzmb = $("#select36").val();
        selectpwkmsc.hyGnq = $("#select37").val();
        selectpwkmsc.hySzmb = $("#select38").val();
        selectpwkmsc.hyseaGnq = $("#select39").val();
        selectpwkmsc.hyseaSzmb = $("#select40").val();
        selectpwkmsc.isGet = $("#select41").val();
        selectpwkmsc.nogetItems = $("#select42").val();
        console.log(selectpwkmsc)

        var optionUrl = "rest/pwk/optionpwk"

        $.ajax({
            url:optionUrl,
            type: "POST",
            data:JSON.stringify(selectpwkmsc),
            datatype: "json",
            contentType: "application/json",
            success:function(data){
                alert("查询成功！");
                // $("#PwkInfoTable").bootstrapTable('destroy');
                $("#PwkInfoTable").bootstrapTable('load',data);

            }
        });

    });


    $("#btn_search").click(function(){
        $('#myModalsearch').modal();
    });

    /**
     *更改一条记录
     */
    $("#submitPwk1").click(function(){

        var updateurl = "rest/pwk/updatepwk"
        var t = $("form").serializeArray();
        var rows = $("#PwkInfoTable").bootstrapTable('getSelections');
        // alert(tjyear);
        var updatepwkmsc = {};
        updatepwkmsc.id = rows[0].id;
        // updatepwkmsc.tjyear = t[0].value;
        updatepwkmsc.tjyear = $("#pwk0").val();
        updatepwkmsc.tjmonth = $("#pwk1").val();
        updatepwkmsc.tjday = $("#pwk2").val();
        updatepwkmsc.pwkCode = $("#pwk3").val();
        updatepwkmsc.name = $("#pwk4").val();
        updatepwkmsc.pwkName = $("#pwk5").val();
        updatepwkmsc.pwkType = $("#pwk6").val();
        updatepwkmsc.city = $("#pwk7").val();
        updatepwkmsc.county = $("#pwk8").val();
        updatepwkmsc.village = $("#pwk9").val();
        updatepwkmsc.address = $("#pwk10").val();
        updatepwkmsc.longitude = parseFloat($("#pwk11").val());
        updatepwkmsc.latitude = parseFloat($("#pwk12").val());
        updatepwkmsc.isShenpi = $("#pwk13").val();
        updatepwkmsc.shenpi =$("#pwk14").val();
        updatepwkmsc.mainType = $("#pwk15").val();
        updatepwkmsc.dayAllow = parseFloat($("#pwk16").val());
        updatepwkmsc.yearAllow = parseFloat($("#pwk17").val());
        updatepwkmsc.isPermit = $("#pwk18").val();
        updatepwkmsc.pwCode = $("#pwk19").val();
        updatepwkmsc.usetime = $("#pwk20").val();
        updatepwkmsc.isInlaw =$("#pwk21").val();
        updatepwkmsc.isReasonable = $("#pwk22").val();
        updatepwkmsc.position = $("#pwk23").val();
        updatepwkmsc.processTech = $("#pwk24").val();
        updatepwkmsc.emissionMode = $("#pwk25").val();
        updatepwkmsc.pwqx = $("#pwk26").val();
        updatepwkmsc.riverMode = $("#pwk27").val();
        updatepwkmsc.riverName = $("#pwk28").val();
        updatepwkmsc.riverLevel = $("#pwk29").val();
        updatepwkmsc.riverType = $("#pwk30").val();
        updatepwkmsc.tosea = $("#pwk31").val();
        updatepwkmsc.seaMode = $("#pwk32").val();
        updatepwkmsc.seaName = $("#pwk33").val();
        updatepwkmsc.emissionStandard = $("#pwk34").val();
        updatepwkmsc.riverGnq = $("#pwk35").val();
        updatepwkmsc.riverSzmb = $("#pwk36").val();
        updatepwkmsc.hyGnq = $("#pwk37").val();
        updatepwkmsc.hySzmb = $("#pwk38").val();
        updatepwkmsc.hyseaGnq = $("#pwk39").val();
        updatepwkmsc.hyseaSzmb = $("#pwk40").val();
        updatepwkmsc.isGet = $("#pwk41").val();
        updatepwkmsc.nogetItems = $("#pwk42").val();


        $.ajax({
            url: updateurl,
            type: "POST",
            data: JSON.stringify(updatepwkmsc),
            datatype: "json",
            contentType: "application/json",
            success: function (data) {
                if (data.success) {
                    // $("#myModal").remove();
                    // $('.modal-backdrop').remove();
                    alert("数据修改成功！")
                } else {
                    alert(data.errMsg);
                }
            }
        });
    });

    /**
     * 删除一条或多条记录
     */
    $("#btn_delete").click(function(){
       if(!confirm("是否确认删除？"))
           return;
       var rows = $("#PwkInfoTable").bootstrapTable('getSelections');
       if (rows.length == 0){ //是为了判断是否选中
           alert("请选择要删除的记录!");
           return;
       }else{
           var ids = new Array();
           $(rows).each(function () {
              ids.push(this.id);
           });
           console.log(ids);
           deletePwk(ids);
       }
    });

    /**
    * 流程是这样的，选择好了一个记录，，将记录的内容传入一个新弹出来的模态框，更改完了传入到后台，完成更新。
     */
    $("#btn_edit").click(function(){

        if (!confirm("是否确认修改？"))
            return;
        var rows = $("#PwkInfoTable").bootstrapTable('getSelections');
        console.log(rows);
        if(rows.length == 0){
            alert("请选择要修改的记录！");
            return;
        }else if(rows.length > 1){
            alert("请选择一个记录进行修改！")
            return;
        }else{
            //把rows填入到模态框中
            $("#pwk0").val(rows[0].tjyear);
            $("#pwk1").val(rows[0].tjmonth);
            $("#pwk2").val(rows[0].tjday);
            $("#pwk3").val(rows[0].pwkCode);
            $("#pwk4").val(rows[0].name);
            $("#pwk5").val(rows[0].pwkName);
            $("#pwk6").val(rows[0].pwkType);
            $("#pwk7").val(rows[0].city);
            $("#pwk8").val(rows[0].county);
            $("#pwk9").val(rows[0].village);
            $("#pwk10").val(rows[0].address);
            $("#pwk11").val(rows[0].longitude);
            $("#pwk12").val(rows[0].latitude);
            $("#pwk13").val(rows[0].isShenpi);
            $("#pwk14").val(rows[0].shenpi);
            $("#pwk15").val(rows[0].mainType);
            $("#pwk16").val(rows[0].dayAllow);
            $("#pwk17").val(rows[0].yearAllow);
            $("#pwk18").val(rows[0].isPermit);
            $("#pwk19").val(rows[0].pwCode);
            $("#pwk20").val(rows[0].usetime);
            $("#pwk21").val(rows[0].isInlaw);
            $("#pwk22").val(rows[0].isReasonable);
            $("#pwk23").val(rows[0].position);
            $("#pwk24").val(rows[0].processTech);
            $("#pwk25").val(rows[0].emissionMode);
            $("#pwk26").val(rows[0].pwqx);
            $("#pwk27").val(rows[0].riverMode);
            $("#pwk28").val(rows[0].riverName);
            $("#pwk29").val(rows[0].riverLevel);
            $("#pwk30").val(rows[0].riverType);
            $("#pwk31").val(rows[0].tosea);
            $("#pwk32").val(rows[0].seaMode);
            $("#pwk33").val(rows[0].seaName);
            $("#pwk34").val(rows[0].emissionStandard);
            $("#pwk35").val(rows[0].riverGnq);
            $("#pwk36").val(rows[0].riverSzmb);
            $("#pwk37").val(rows[0].hyGnq);
            $("#pwk38").val(rows[0].hySzmb);
            $("#pwk39").val(rows[0].hyseaGnq);
            $("#pwk40").val(rows[0].hyseaSzmb);
            $("#pwk41").val(rows[0].isGet);
            $("#pwk42").val(rows[0].nogetItems);
            // $("#pwk43").val();
            // $("#pwk43").val();
            $('#myModaledit').modal();

            //加载模态框
            // var ids = new Array();
            // $(rows).each(function () {
            //     ids.push(this.id);
            // });
            // console.log(ids);
        }
    });

    /**
     * 按照id号删除相应数据条目
     * */
    function deletePwk(ids){
        $.ajax({
            url:"rest/pwk/deletepwk",
            data: {"ids":ids},
            type: "POST",
            // dataType: "json",
            traditional: true,
            success:function(data){
                alert("删除成功");
                // $("#PwkInfoTable").bootstrapTable('refresh',{
                //     url:"rest/page/pwktable" //要跳转到的url
                // })
            }
        });
    }

    /**
     * 去掉model的遮罩层
     * */
    $("#closeMod").click(function () {
        $('.modal-backdrop').remove();
    })
    $("#closeMod1").click(function () {
        $('.modal-backdrop').remove();
    })
    $("#btn_show").click(function(){
        // var div = document.getElementById("daohang");
        // var w = parseInt(div.style.width);
        // alert(w)
        $("#btn_add").fadeToggle();
        $("#btn_edit").fadeToggle();
        $("#btn_delete").fadeToggle();
        $("#btn_search").fadeToggle();
        $("#btn_excelout").fadeToggle();
        $("#btn_excelin").fadeToggle();
        $("#tablecontrol").fadeToggle();

        // alert(div.style.width);
    });
});