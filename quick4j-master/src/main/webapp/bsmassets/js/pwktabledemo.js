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
                    ("查询失败，或因记录已存在")
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
                    ("更新失败，或因网络错误")
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


        // alert(div.style.width);
    });
});