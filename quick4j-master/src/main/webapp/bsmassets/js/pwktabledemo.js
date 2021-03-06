var extents = {
    tieling: [121.683328, 41.840331, 126.582710, 43.573067],
    huludao: [118.172417, 39.834530, 122.336235, 41.369228],
    chaoyang: [117.205270, 40.391405, 123.074377, 42.504821],
    panjin: [120.835854, 40.610362, 123.252882, 41.494596],
    yingkou: [120.694250, 39.753728, 124.190971, 41.048150],
    jinzhou: [119.431423, 40.729618, 123.581508, 42.211277],
    dandong: [122.309634, 39.673381, 126.586062, 41.213798],
    benxi: [123.398631, 40.740022, 125.936511, 41.637172],
    fushun: [122.925499, 41.209812, 126.512294, 42.482913],
    anshan: [120.654886, 40.025895, 125.149073, 41.654445],
    liaoyang: [121.430973, 40.460256, 125.309147, 41.800736],
    fuxin: [119.195495, 41.535575, 124.155844, 43.299593],
    shenyang: [120.344180, 41.038634, 126.162792, 43.148180]
};
initMap();
var map, layer, graphicLayer;
var html = "";

html += "<table class='table-striped table-hover table-bordered'>";
html += "<tr><td>统计年份</td><td>${tjyear}</td></tr>";
html += "<tr><td>统计月份</td><td>${tjmonth}</td></tr>";
html += "<tr><td>统计日</td><td>${tjday}</td></tr>";
html += "<tr><td>排污口编号</td><td>${pwkCode}</td></tr>";
html += "<tr><td>单位名称</td><td>${name}</td></tr>";
html += "<tr><td>排污口名称</td><td>${pwkName}</td></tr>";
html += "<tr><td>排污口类型</td><td>${pwkType}</td></tr>";
html += "<tr><td>所在市</td><td>${city}</td></tr>";
html += "<tr><td>所在县</td><td>${county}</td></tr>";
html += "<tr><td>所在乡镇</td><td>${village}</td></tr>";
html += "<tr><td>详细地址</td><td>${address}</td></tr>";
html += "<tr><td>排污口经度</td><td>${longitude}</td></tr>";
html += "<tr><td>排污口纬度</td><td>${latitude}</td></tr>";
html += "<tr><td>是否取得审批手续</td><td>${isShenpi}</td></tr>";
html += "<tr><td>审批单位及审批文号</td><td>${shenpi}</td></tr>";
html += "<tr><td>批复主要污染物种类</td><td>${mainType}</td></tr>";
html += "<tr><td>批复日允许排放量(吨/日)</td><td>${dayAllow}</td></tr>";
html += "<tr><td>批复年允许排放量(吨/年)</td><td>${yearAllow}</td></tr>";
html += "<tr><td>是否发放许可证</td><td>${isPermit}</td></tr>";
html += "<tr><td>排污许可证号</td><td>${pwCode}</td></tr>";
html += "<tr><td>投入使用时间</td><td>${usetime}</td></tr>";
html += "<tr><td>是否为非法排污口</td><td>${isInlaw}</td></tr>";
html += "<tr><td>是否为设置不合理排污口</td><td>${isResonable}</td></tr>";
html += "<tr><td>排污口靠河岸位置</td><td>${position}</td></tr>";
html += "<tr><td>污水处理工艺</td><td>${processTech}</td></tr>";
html += "<tr><td>废水排放方式</td><td>${emissionMode}</td></tr>";
html += "<tr><td>排放去向</td><td>${pwqx}</td></tr>";
html += "<tr><td>入河方式</td><td>${riverMode}</td></tr>";
html += "<tr><td>排入河流名称</td><td>${riverName}</td></tr>";
html += "<tr><td>河流级别</td><td>${riverLevel}</td></tr>";
html += "<tr><td>河流所属水系</td><td>${riverType}</td></tr>";
html += "<tr><td>汇入海域</td><td>${tosea}</td></tr>";
html += "<tr><td>入海方式</td><td>${seaMode}</td></tr>";
html += "<tr><td>排入海域名称</td><td>${seaName}</td></tr>";
html += "<tr><td>废水排放标准</td><td>${emissionStandard}</td></tr>";
html += "<tr><td>排入河流水功能区</td><td>${riverGnq}</td></tr>";
html += "<tr><td>排入河流水质目标</td><td>${riverSzmb}</td></tr>";
html += "<tr><td>排入海域近岸海域环境功能区</td><td>${hyGnq}</td></tr>";
html += "<tr><td>排入海域水质目标</td><td>${hySzmb}</td></tr>";
html += "<tr><td>排入海域海洋功能区类别</td><td>${hyseaGnq}</td></tr>";
html += "<tr><td>排入海域海洋功能区水质目标</td><td>${hyseaSzmb}</td></tr>";
html += "<tr><td>是否达标</td><td>${isGet}</td></tr>";
html += "<tr><td>不达标指标</td><td>${nogetItems}</td></tr>";
html += "</table>";





function nullto() {
    var tlist = $("#tbodyone").find("td")
    for (var i = 0; i < tlist.length; i++) {
        if (tlist.eq(i).html() == "null") {
            tlist.eq(i).empty();
            tlist.eq(i).append(" ")
        }
    }
}

function showlist(index, item) {
    var showlist = "<tr id=\"t" + item.id + "\" class='noExl'><td><input type=\"checkbox\" name=\"piliang\" value=\"" + item.id + "\"/></td><td>" + item.id + "</td><td><a href=\"" + item.id + "\" onclick=\"editfunc(this);return false;\"><span class=\"glyphicon glyphicon-edit\"></span></a>" +
        "</td><td><a href=\"" + item.id + "\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>" + "</td><td>" + item.tjyear + "</td><td>" + item.tjmonth + "</td><td>" + item.tjday + "</td><td>" + item.pwkCode +
        "</td><td>" + item.name + "</td><td>" + item.pwkName + "</td><td>" + item.pwkType + "</td><td>" + item.city + "</td><td>" + item.county + "</td><td>" + item.village +
        "</td><td>" + item.address + "</td><td>" + item.longitude + "</td><td>" + item.latitude + "</td><td>" + item.isShenpi + "</td><td>" + item.shenpi + "</td><td>" + item.mainType + "</td><td>" + item.dayAllow +
        "</td><td>" + item.yearAllow + "</td><td>" + item.isPermit + "</td><td>" + item.pwCode + "</td><td>" + item.usetime + "</td><td>" + item.isInlaw + "</td><td>" + item.isReasonable + "</td><td>" + item.position + "</td><td>" + item.processTech + "</td><td>" + item.emissionMode +
        "</td><td>" + item.pwqx + "</td><td>" + item.riverMode + "</td><td>" + item.riverName + "</td><td>" + item.riverLevel + "</td><td>" + item.riverType + "</td><td>" + item.tosea + "</td><td>" + item.seaMode + "</td><td>" + item.seaName + "</td><td>" + item.emissionStandard + "</td>" +
        "<td>" + item.riverGnq + "</td><td>" + item.riverSzmb + "</td><td>" + item.hyGnq + "</td><td>" + item.hySzmb + "</td><td>" + item.hyseaGnq + "</td><td>" + item.hyseaSzmb + "</td><td>" + item.isGet + "</td><td>" + item.nogetItems + "</td></tr>";
    return showlist;
}

$(function () {
    var tableCont = document.querySelector('#table-cont')
    function scrollHandle (e){
        var scrollTop = this.scrollTop;
        var a = this.querySelector('thead').getElementsByTagName("th");
        for(var i=0;i<a.length;i++)
            a[i].style.transform = 'translateY(' + scrollTop + 'px)';
        //this.querySelector('thead').style.transform = 'translateY(' + scrollTop + 'px)';
    }
    tableCont.addEventListener('scroll',scrollHandle)
    /**
     *显示整个列表
     */
    var url = 'rest/pwk/pwkshowlist';
    $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        success: function (data) {
            var html;
            $.each(data, function (index, item) {
                html = showlist(index, item);
                $('#tbodyone').append(html);
            })
            nullto();
        },
    });


    /**
     * 新增一条记录触发模态框
     */
    // $("#btn_add").click(function(){
    //     $('#myModal').modal();
    // });
    $("#btn_excelout").click(function () {

        var excelout = "rest/pwk/excelout";
        var ids = document.getElementsByName("piliang");
        var check_val = new Array();
        for (k in ids) {
                check_val.push(ids[k].value);
        }
        $.ajax({
            url: excelout,
            type: "POST",
            data: {"ids": check_val},
            type: "POST",
            // dataType: "json",
            traditional: true,
            success: function (data) {
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
    $("#btn_excelin").click(function () {
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
                    document.getElementById("jindutiao").setAttribute("style", "width:100%;");
                    $("#jindutiao").text("100%")
                } else {
                    document.getElementById("jindutiao").setAttribute("style", "width:60%;");
                    $("#jindutiao").text("60%")
                }
            },
            error: function (e) {
                document.getElementById("jindutiao").setAttribute("style", "width:60%;");
                $("#jindutiao").text("20%")
            }
        });
    });

    /**
     * 新增功能
     * */
    $("#submitPwk").click(function () {
        var addurl = "rest/pwk/addpwk";
        var addpwkmsc = {};
        /*********************************************/
        var t = $("form").serializeArray();
        if (t[0].value == "") {
            document.getElementById('message').innerHTML = "年份字段不可为空!";
            return 0;
        }
        if (t[1].value == "") {
            document.getElementById('message').innerHTML = "月份字段不可为空!";
            return 0;
        }
        if (t[2].value == "") {
            document.getElementById('message').innerHTML = "日期字段不可为空!";
            return 0;
        }
        if (t[0].value.length < 4) {
            document.getElementById('message').innerHTML = "请检查年份字段!";
            return 0;
        }
        if ((t[0].value.indexOf(".") != -1) || (t[1].value.indexOf(".") != -1) || (t[2].value.indexOf(".") != -1)) {
            document.getElementById('message').innerHTML = "请检查年、月、日!";
            return 0;
        }
        if ((t[0].value < 1) || (t[1].value < 1) || (t[2].value < 1)) {
            document.getElementById('message').innerHTML = "请检查年、月、日!";
            return 0;
        }
        document.getElementById('message').innerHTML = ""
        if (t[41].value != "是" && t[41].value != "否") {
            document.getElementById('message').innerHTML = "是否达标字段，只能填是或否!";
            return 0;
        }

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
            success: function (res) {
                if (res == "") {
                    alert("添加失败，或因记录已存在");
                    // $("#myModal").remove();
                } else {
                    var html;
                    console.log(res);
                    $.each(res, function (index, item) {
                        html = showlist(index, item);
                        console.log(html);
                        $('#tbodyone').append(html);
                    })
                    $('.modal-backdrop').remove();
                    document.getElementById("contentForm").reset();
                    nullto();
                    alert("添加成功");
                }
            },
            error: function (e) {
                alert("接口异常，请联系管理员");
            }
        });
    });

    /**
     * 多条件查询数据
     * 第一步：点击搜索，弹出搜索条件的模态框
     * 第二步：用户选择搜索条件（选择一个生成一个输入框）
     * 第三步：输入搜索条件
     * 第三步：返回搜索结果
     * 在PwkInfoTable中显示结果
     */
    $("#submitPwk2").click(function () {
        //获取到新添加的东西
        var city =  $("#select7").val();
        extent(city);
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
        selectpwkmsc.shenpi = $("#select14").val();
        selectpwkmsc.mainType = $("#select15").val();
        selectpwkmsc.dayAllow = parseFloat($("#select16").val());
        selectpwkmsc.yearAllow = parseFloat($("#select17").val());
        selectpwkmsc.isPermit = $("#select18").val();
        selectpwkmsc.pwCode = $("#select19").val();
        selectpwkmsc.usetime = $("#select20").val();
        selectpwkmsc.isInlaw = $("#select21").val();
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
            url: optionUrl,
            type: "POST",
            data: JSON.stringify(selectpwkmsc),
            datatype: "json",
            contentType: "application/json",
            success: function (data) {
                if (data == "") {
                    alert("查询失败，或因记录不存在");
                    // $("#myModal").remove();
                } else {
                    updatePoint(data);
                    $('#tbodyone').empty();
                    var html;
                    $.each(data, function (index, item) {
                        html = showlist(index, item);
                        console.log(html);
                        $('#tbodyone').append(html);
                    })
                    $('.modal-backdrop').remove();
                    nullto();
                    alert("查询成功");
                }


            }
        });

    });


    $("#btn_search").click(function () {
        $('#myModalsearch').modal();
    });

    /**
     *更改一条记录
     */
    $("#submitPwk1").click(function () {

        var updateurl = "rest/pwk/updatepwk"
        // var t = $("#updatecontentForm").serializeArray();
        var ids = document.getElementsByName("piliang");
        check_val = [];
        for (k in ids) {
            if (ids[k].checked)
                check_val.push(ids[k].value);
        }


        var updatepwkmsc = {};
        updatepwkmsc.id = check_val[0];
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
        updatepwkmsc.shenpi = $("#pwk14").val();
        updatepwkmsc.mainType = $("#pwk15").val();
        updatepwkmsc.dayAllow = parseFloat($("#pwk16").val());
        updatepwkmsc.yearAllow = parseFloat($("#pwk17").val());
        updatepwkmsc.isPermit = $("#pwk18").val();
        updatepwkmsc.pwCode = $("#pwk19").val();
        updatepwkmsc.usetime = $("#pwk20").val();
        updatepwkmsc.isInlaw = $("#pwk21").val();
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

        console.log(updatepwkmsc);
        $.ajax({
            url: updateurl,
            type: "POST",
            data: JSON.stringify(updatepwkmsc),
            datatype: "json",
            contentType: "application/json",
            success: function (data) {
                if (data == "") {
                    alert("更新失败，或因网络错误");
                    // $("#myModal").remove();
                } else {
                    $('#tbodyone').empty();
                    var html;
                    $.each(data, function (index, item) {
                        html = showlist(index, item);
                        console.log(html);
                        $('#tbodyone').append(html);
                    })
                    $('.modal-backdrop').remove();
                    document.getElementById("updatecontentForm").reset();
                    nullto();
                    alert("更新成功");
                }
            }
        });
    });

    /**
     * 删除一条或多条记录
     */
    $("#btn_delete").click(function () {
        var ids = document.getElementsByName("piliang");
        var check_val = new Array();
        for (k in ids) {
            if (ids[k].checked)
                check_val.push(ids[k].value);
        }

        if (!confirm("是否确认删除？"))
            return;

        if (check_val.length == 0) { //是为了判断是否选中
            alert("请选择要删除的记录!");
            return;
        } else {
            deletePwk(check_val);
        }
    });

    /**
     * 流程是这样的，选择好了一个记录，，将记录的内容传入一个新弹出来的模态框，更改完了传入到后台，完成更新。
     */
    $("#btn_edit").click(function () {

        var ids = document.getElementsByName("piliang");
        check_val = [];
        for (k in ids) {
            if (ids[k].checked)
                check_val.push(ids[k].value);
        }
        if (!confirm("是否确认修改？"))
            return;
        if (check_val.length == 0) {
            alert("请选择要修改的记录！");
            return;
        } else if (check_val.length > 1) {
            alert("请选择一个记录进行修改！")
            return;
        } else {
            //把相关信息添加到模态框中
            var tlist = $('#t' + check_val).find("td")
            var inlist = $("#myModaledit").find("input")
            for (var i = 0; i < 43; i++) {
                html = tlist.eq(i + 4).html();
                if (html == "null") html = "";
                inlist.eq(i).val(html);
            }
            $('#myModaledit').modal();
        }
    });

    /**
     * 按照id号删除相应数据条目
     * */
    function deletePwk(ids) {
        $.ajax({
            url: "rest/pwk/deletepwk",
            data: {"ids": ids},
            type: "POST",
            // dataType: "json",
            traditional: true,
            success: function (data) {
                for(i=0;i<ids.length;i++){
                    id=ids[i];
                    document.getElementById("t"+id).remove();
                }
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
    $("#btn_show").click(function () {
        // var div = document.getElementById("daohang");
        // var w = parseInt(div.style.width);
        // alert(w)
        $("#btn_add").fadeToggle();
        $("#btn_edit").fadeToggle();
        $("#btn_delete").fadeToggle();
        $("#btn_search").fadeToggle();
        $("#btn_excelout").fadeToggle();
        $("#btn_excelin").fadeToggle();
        $("#tabletablediv").fadeToggle();
        $("#table-cont").fadeToggle();
        $("#left").fadeToggle();
        $("#map222").css("height","1200px");
        $("#right").css("height", "1200px");
        $("#right").css("margin-left", "0px");
        $("#map222_layers").css("top","70px");

        // alert(div.style.width);
    });
});

function initMap() {
    require([
        "esri/map",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/geometry/Point", "esri/SpatialReference",
        "esri/symbols/PictureMarkerSymbol",
        "esri/graphic",
        "esri/geometry/Extent",
        "esri/InfoTemplate"
    ], function (Map,
                 ArcGISDynamicMapServiceLayer,
                 Point,
                 SpatialReference,
                 PictureMarkerSymbol,
                 Graphic,
                 Extent,
                 InfoTemplate) {
        var extent = new Extent(117.309229, 39.137731, 129.957720, 43.380153);
        map = new Map("map222", {
            "spatialReference": {
                "wkid": 4326
            },
            //basemap: "topo",
            logo: false,
            extent: extent,
            //这个是表明地图上的地点
            showLabels: true,
            zoom: 12,
            maxZoom: 16
        });

        //全部单元
        var layerUrl = "http://202.199.6.100:6080/arcgis/rest/services/liaoheliuyu/MapServer/8";
        featureLayer = new esri.layers.FeatureLayer(layerUrl, {
            mode: esri.layers.FeatureLayer.MODE_SNAPSHOT,
            outFields: ["*"],
            hasAttributionData: true
        });
        map.addLayer(featureLayer, 100);

        // 河流
        // var layerUrl_2 = "http://202.199.6.100:6080/arcgis/rest/services/liaoheliuyu/MapServer/5";
        // featureLayer_2 = new esri.layers.FeatureLayer(layerUrl_2, {
        //     mode: esri.layers.FeatureLayer.MODE_SNAPSHOT,
        //     outFields: ["*"],
        //     hasAttributionData: true
        // });
        // map.addLayer(featureLayer_2, 2);


        layer = new ArcGISDynamicMapServiceLayer("http://202.199.6.100:6080/arcgis/rest/services/liaoheliuyu/MapServer");
        layer.setVisibleLayers([0, 9]);
        map.addLayer(layer, 0);
        graphicLayer = new esri.layers.GraphicsLayer();
        map.addLayer(graphicLayer);
        var lon = "";
        var lat = "";
        var attr = "";

        var mapAllpoint = {};
        // mapAllpoint.name="辽宁";
        $.ajax({
            url:"rest/pwk/maptabledemo",
            type: "POST",
            data:JSON.stringify(mapAllpoint),
            datatype: "json",
            contentType: "application/json",
            success:function (data) {
                if (data == "") {
                    alert("该城市没有排污口信息");
                    // $("#myModal").remove();
                }else{
                    console.log(data);
                    for(var i = 0; i < data.length; i++){
                        lon = data[i].longitude;
                        lat = data[i].latitude;
                        attr = {
                            "tjyear":data[i].tjyear,
                            "tjmonth":data[i].tjmonth,
                            "tjday": data[i].tjday,
                            "pwkCode":data[i].pwkCode,
                            "name":data[i].name,
                            "pwkName":data[i].pwkName,
                            "pwkType":data[i].pwkType,
                            "city":data[i].city,
                            "county":data[i].county,
                            "village":data[i].village,
                            "longitude": data[i].longitude,
                            "latitude":data[i].latitude,
                            "isShenpi":data[i].isShenpi ,
                            "shenpi":data[i].shenpi,
                            "mainType":data[i].mainType,
                            "dayAllow":data[i].dayAllow ,
                            "yearAllow":data[i].yearAllow ,
                            "isPermit":data[i].isPermit ,
                            "pwCode": data[i].pwCode ,
                            "usetime":data[i].usetime,
                            "isInlaw":data[i].isInlaw,
                            "isReasonable":data[i].isReasonable,
                            "position":data[i].position,
                            "processTech":data[i].processTech,
                            "emissionMode":data[i].emissionMode,
                            "pwqx":data[i].pwqx,
                            "riverMode":data[i].riverMode,
                            "riverName":data[i].riverName,
                            "riverLevel":data[i].riverLevel,
                            "riverType":data[i].riverType,
                            "tosea":data[i].tosea,
                            "seaMode":data[i].seaMode,
                            "seaName":data[i].seaName,
                            "emissionStandard":data[i].emissionStandard,
                            "riverGnq":data[i].riverGnq,
                            "riverSzmb":data[i].riverSzmb,
                            "hyGnq":data[i].hyGnq,
                            "hySzmb":data[i].hySzmb,
                            "hyseaGnq":data[i].hyseaGnq,
                            "hyseaSzmb":data[i].hyseaSzmb,
                            "isGet":data[i].isGet,
                            "nogetItems":data[i].nogetItems,
                        };
                        var point = new Point(lon, lat, map.spatialReference);
                        var infoTemplate = new InfoTemplate("排污口基本信息", html);
                        var symbol1 = new PictureMarkerSymbol("app/img/location.png", 16, 16);
                        var graphic = new Graphic(point, symbol1, attr, infoTemplate);
                        graphicLayer.add(graphic);
                    }
                }
            }


        });
    });
}

function extent(str){
    switch (str) {
        case '辽宁省':
            var extent = new esri.geometry.Extent(117.309229, 39.137731, 129.957720, 43.380153);
            map.setExtent(extent);
            break;
        case '鞍山市':
        case '海城市':
        case '千山区':
        case '铁西区':
        case '铁东区':
        case '立山区':
        case '鞍山高新产业技术开发区':
//case '铁东区':
//case '铁西区':
        case '千山区':
        case '台安县':
        case '海城市':
//case '海城市':
//case '千山区':
        case '台安':
//case '铁西区':
//case '铁东区':
            console.log('鞍山');
            var extent = new esri.geometry.Extent(extents.anshan[0], extents.anshan[1], extents.anshan[2], extents.anshan[3]);
            map.setExtent(extent);
            break;
        case '辽阳市':
        case '灯塔市':
        case '辽阳县':
        case '文圣区':
        case '宏伟区':
//case '文圣区':
//case '宏伟区':
        case '弓长岭':
        case '太子河':
//case '辽阳县':
//case '灯塔市':
//case '辽阳县':
//case '灯塔市':
//case '文圣区':
        case '太子河区':
        case '宏伟':
        case '太子区':
            console.log('辽阳');
            var extent = new esri.geometry.Extent(extents.liaoyang[0], extents.liaoyang[1], extents.liaoyang[2], extents.liaoyang[3]);
            map.setExtent(extent);
            break;
        case '阜新市':
            console.log('阜新');
            var extent = new esri.geometry.Extent(extents.fuxin[0], extents.fuxin[1], extents.fuxin[2], extents.fuxin[3]);
            map.setExtent(extent);
            break;
        case '盘锦市':
        case '盘山县':
        case '兴隆台区':
        case '大洼县':
        case '双台子区':
//case '双台子区':
        case '兴隆台':
//case '大洼县':
//case '盘山县':
//case '盘山县':
        case '大洼':
        case '辽河口生态经济区':
//case '双台子区':
//case '兴隆台区':
            var extent = new esri.geometry.Extent(extents.panjin[0], extents.panjin[1], extents.panjin[2], extents.panjin[3]);
            map.setExtent(extent);
            break;
        case '锦州市':
        case '义县':
        case '凌海':
        case '黑山':
        case '北镇':
        case '太和区':
        case '松山新区':
            var extent = new esri.geometry.Extent(extents.jinzhou[0], extents.jinzhou[1], extents.jinzhou[2], extents.jinzhou[3]);
            map.setExtent(extent);
            break;
        case '朝阳市':
        case '双塔区':
        case '北票市':
        case '喀左县':
        case '朝阳县':
            var extent = new esri.geometry.Extent(extents.chaoyang[0], extents.chaoyang[1], extents.chaoyang[2], extents.chaoyang[3]);
            map.setExtent(extent);
            break;
        case '铁岭市':
        case '昌图县':
        case '高新技术产业开发区':
        case '开原市':
        case '清河区':
        case '调兵山市':
        case '铁岭县':
        case '西丰县':
        case '银州区':
//case '银州区':
//case '清河区':
        case '西丰':
//case '昌图县':
//case '调兵山市':
        case '开原':
        case '西丰县':
//case '开原市':
        case '昌图':
//case '铁岭县':
//case '调兵山市':
//case '银州区':
        case '开原市万丰生猪养殖场':
        case '开原维民种猪场':
        case '清河':
        case '铁岭经济开发区':
            var extent = new esri.geometry.Extent(extents.tieling[0], extents.tieling[1], extents.tieling[2], extents.tieling[3]);
            map.setExtent(extent);
            break;
        case '沈阳市':
        case '东陵区':
        case '蒲河新城':
        case '沈阳经济技术开发区':
        case '新民市':
        case '于洪区':
        case '苏家屯区':
        case '康平县':
        case '沈北新区':
        case '沈河区':
        case '大东':
        case '苏家屯区':
        case '浑南新区':
//case '东陵区':
//case '沈北新区':
//case '于洪区':
        case '皇姑区':
        case '辽中县':
//case '沈阳经济技术开发区':
        case '棋盘山开发区':
        case '新民':
//case '东陵区':
//case '沈北新区':
//case '于洪区':
//case '新民':
//case '沈阳经济技术开发区':
        case '法库':
        case '辽中':
//case '康平县':
        case '苏家屯':
            var extent = new esri.geometry.Extent(extents.shenyang[0], extents.shenyang[1], extents.shenyang[2], extents.shenyang[3]);
            map.setExtent(extent);
            break;
        case '葫芦岛市':
        case '建昌县':
            var extent = new esri.geometry.Extent(extents.huludao[0], extents.huludao[1], extents.huludao[2], extents.huludao[3]);
            map.setExtent(extent);
            break;
        case '营口市':
        case '营口市区':
        case '大石桥市':
            var extent = new esri.geometry.Extent(extents.yingkou[0], extents.yingkou[1], extents.yingkou[2], extents.yingkou[3]);
            map.setExtent(extent);
            break;
        case '丹东市':
        case '宽甸县':
        case '振兴区':
        case '东港市':

            var extent = new esri.geometry.Extent(extents.dandong[0], extents.dandong[1], extents.dandong[2], extents.dandong[3]);
            map.setExtent(extent);
            break;
        case '本溪市':
        case '平山区':
        case '溪湖区':
        case '本溪满族自治县':
        case '明山区':
        case '南芬区':
        case '本溪市高新技术产业开发区':
        case '平山':
//case '本溪满族自治县':
        case '溪湖':
        case '本溪':
        case '明山':
//case '南芬区':
        case '高新区':
            var extent = new esri.geometry.Extent(extents.benxi[0], extents.benxi[1], extents.benxi[2], extents.benxi[3]);
            map.setExtent(extent);
            break;
        case '抚顺市':
        case '清原满族自治县':
        case '顺城区':
        case '新宾满族自治县':
        case '清原':
        case '东洲区':
        case '望花区':
        case '抚顺县':
        case '新抚区':
//case '新抚区':
//case '望花区':
//case '顺城区':
//case '新宾满族自治县':
//case '清原满族自治县':
//case '新宾满族自治县':
//case '抚顺县':
            var extent = new esri.geometry.Extent(extents.fushun[0], extents.fushun[1], extents.fushun[2], extents.fushun[3]);
            map.setExtent(extent);
            break;
    }
};

function updatePoint(data){
    require([
        "esri/geometry/Point",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/PictureMarkerSymbol",
        "esri/graphic",
        "esri/InfoTemplate"
    ], function (Point,
                 SimpleMarkerSymbol,
                 PictureMarkerSymbol,
                 Graphic,
                 InfoTemplate) {
        var lon = "";
        var lat = "";
        var attr = "";
        graphicLayer.clear();
        for (var i = 0; i < data.length; i++) {
            lon = data[i].longitude;
            lat = data[i].latitude;
            attr = {
                "tjyear": data[i].tjyear,
                "tjmonth": data[i].tjmonth,
                "tjday": data[i].tjday,
                "pwkCode": data[i].pwkCode,
                "name": data[i].name,
                "pwkName": data[i].pwkName,
                "pwkType": data[i].pwkType,
                "city": data[i].city,
                "county": data[i].county,
                "village": data[i].village,
                "longitude": data[i].longitude,
                "latitude": data[i].latitude,
                "isShenpi": data[i].isShenpi,
                "shenpi": data[i].shenpi,
                "mainType": data[i].mainType,
                "dayAllow": data[i].dayAllow,
                "yearAllow": data[i].yearAllow,
                "isPermit": data[i].isPermit,
                "pwCode": data[i].pwCode,
                "usetime": data[i].usetime,
                "isInlaw": data[i].isInlaw,
                "isReasonable": data[i].isReasonable,
                "position": data[i].position,
                "processTech": data[i].processTech,
                "emissionMode": data[i].emissionMode,
                "pwqx": data[i].pwqx,
                "riverMode": data[i].riverMode,
                "riverName": data[i].riverName,
                "riverLevel": data[i].riverLevel,
                "riverType": data[i].riverType,
                "tosea": data[i].tosea,
                "seaMode": data[i].seaMode,
                "seaName": data[i].seaName,
                "emissionStandard": data[i].emissionStandard,
                "riverGnq": data[i].riverGnq,
                "riverSzmb": data[i].riverSzmb,
                "hyGnq": data[i].hyGnq,
                "hySzmb": data[i].hySzmb,
                "hyseaGnq": data[i].hyseaGnq,
                "hyseaSzmb": data[i].hyseaSzmb,
                "isGet": data[i].isGet,
                "nogetItems": data[i].nogetItems,
            };
            console.log(lon);
            var point = new Point(lon, lat, map.spatialReference);
            var infoTemplate = new InfoTemplate("排污口基本信息", html);
            var symbol1 = new PictureMarkerSymbol("app/img/location.png", 16, 16);

            var graphic = new Graphic(point, symbol1, attr, infoTemplate);
            graphicLayer.add(graphic);
        }
    });
}