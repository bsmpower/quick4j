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
        "</td><td><a href=\"" + item.id + "\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>" + "</td><td>" + item.tjyear + "</td><td>" + item.tjmonth + "</td><td>" + item.tjday + "</td><td>" + item.hdpskName +
        "</td><td>" + item.hdpskCode + "</td><td>" + item.hdName + "</td><td>" + item.hdArea + "</td><td>" + item.city + "</td><td>" + item.country + "</td><td>" + item.village +
        "</td><td>" + item.address + "</td><td>" + item.longitude + "</td><td>" + item.latitude + "</td><td>" + item.seaMode + "</td><td>" + item.seaName + "</td><td>" + item.pslTd + "</td><td>" + item.pslTy +
        "</td><td>" + item.emissionStandard + "</td><td>" + item.isGet + "</td><td>" + item.nogetItems + "</td><td>" + item.hyGnq + "</td><td>" + item.hySzmb + "</td><td>" + item.hyseaGnq + "</td><td>" + item.hyseaSzmb + "</td></tr>";
    return showlist;
}
// function showlist(index, item) {
//     var showlist = "<tr id=\"t" + item.id + "\" class='noExl'><td><input type=\"checkbox\" name=\"piliang\" value=\"" + item.id + "\"/></td><td>" + item.id + "</td><td><a href=\"" + item.id + "\" onclick=\"editfunc(this);return false;\"><span class=\"glyphicon glyphicon-edit\"></span></a>" +
//         "</td><td><a href=\"" + item.id + "\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>" + "</td><td>" + item.tjyear + "</td><td>" + item.tjmonth + "</td><td>" + item.tjday + "</td><td>" + item.gkGame +
//         "</td><td>" + item.gkCode + "</td><td>" + item.city + "</td><td>" + item.country + "</td><td>" + item.village +
//         "</td><td>" + item.address + "</td><td>" + item.longitude + "</td><td>" + item.latitude + "</td><td>" + item.gkArea +
//         "</td><td>" + item.riverName + "</td><td>" + item.riverLevel + "</td><td>" + item.gkFunc + "</td><td>" + item.gkGoal + "</td><td>" + item.seaName + "</td><td>" + item.jaFunction + "</td><td>" + item.jaGoal + "</td><td>" + item.seaFunctiontype + "</td><td>" + item.seaFunctiongoal + "</td></tr>";
//     return showlist;
// }

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
    var url = 'rest/pwkisland/pwkshowlist';
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
        var excelout = "rest/pwkisland/excelout";
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
                if (data.success) {
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
            }
        });
    });


    /**
     * 導入exel觸發模態框
     */
    $("#btn_excelin").click(function () {
        $('#myModalExcelin').modal();
    });
    $("#upload").click(function (e) {
        $.ajax({
            type: "POST",
            url: "rest/upload/pwkisland",
            processData: false,
            contentType: false,
            data: new FormData($('#form1')[0]),
            success: function (data) {
                if (data.success) {
                    document.getElementById("jindutiao").setAttribute("style", "width:100%;");
                    $("#jindutiao").text("100%")
                    $("#upload").value="";
                    e.target.value = '';
                } else {
                    document.getElementById("jindutiao").setAttribute("style", "width:60%;");
                    $("#jindutiao").text("60%")
                }
            },
            error:function (e) {
                document.getElementById("jindutiao").setAttribute("style", "width:60%;");
                $("#jindutiao").text("20%")
            }


        });
    });

    /**
     * 新增数据
     */
    $("#submitPwk").click(function () {
        var addurl = "rest/pwkisland/addpwk";
        var addpwkmsc = {};
        /*********************************************/
        var t = $("form").serializeArray();

        addpwkmsc.tjyear = t[0].value;
        addpwkmsc.tjmonth = t[1].value;
        addpwkmsc.tjday = t[2].value;
        addpwkmsc.hdpskName = t[3].value;
        addpwkmsc.hdpskCode = t[4].value;
        addpwkmsc.hdName = t[5].value;
        addpwkmsc.hdArea =  parseFloat(t[6].value);
        addpwkmsc.city = t[7].value;
        addpwkmsc.country = t[8].value;
        addpwkmsc.village = t[9].value;
        addpwkmsc.address = t[10].value;
        addpwkmsc.longitude =  parseFloat(t[11].value);
        addpwkmsc.latitude =  parseFloat(t[12].value);
        addpwkmsc.seaMode = t[13].value;
        addpwkmsc.seaName = t[14].value;
        addpwkmsc.pslTd = parseFloat(t[15].value);
        addpwkmsc.pslTy = parseFloat(t[16].value);
        addpwkmsc.emissionStandard = t[17].value;
        addpwkmsc.isGet = t[18].value;
        addpwkmsc.nogetItems =  t[19].value;
        addpwkmsc.hyGnq = t[20].value;
        addpwkmsc.hySzmb = t[21].value;
        addpwkmsc.hyseaGnq = t[22].value;
        addpwkmsc.hyseaSzmb = t[23].value;
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
                } else {
                    $('#tbodyone').empty();
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
    $("#submitPwk2").click(function () {
        //获取到新添加的东西
        var selectpwkmsc = {};

        selectpwkmsc.tjyear = $("#select0").val();
        selectpwkmsc.tjmonth = $("#select1").val();
        selectpwkmsc.tjday = $("#select2").val();
        selectpwkmsc.hdpskName = $("#select3").val();
        selectpwkmsc.hdpskCode = $("#select4").val();
        selectpwkmsc.hdName = $("#select5").val();
        selectpwkmsc.hdArea = parseFloat($("#select6").val());
        selectpwkmsc.city = $("#select7").val();
        selectpwkmsc.country = $("#select8").val();
        selectpwkmsc.village = $("#select9").val();
        selectpwkmsc.address = $("#select10").val();
        selectpwkmsc.longitude =  parseFloat($("#select11").val());
        selectpwkmsc.latitude =  parseFloat($("#select12").val());
        selectpwkmsc.seaMode = $("#select13").val();
        selectpwkmsc.seaName = $("#select14").val();
        selectpwkmsc.pslTd = $("#select15").val();
        selectpwkmsc.pslTy = $("#select16").val();
        selectpwkmsc.emissionStandard = $("#select17").val();
        selectpwkmsc.isGet = $("#select18").val();
        selectpwkmsc.nogetItems = $("#select19").val();
        selectpwkmsc.hyGnq = $("#select20").val();
        selectpwkmsc.hySzmb = $("#select21").val();
        selectpwkmsc.hyseaGnq = $("#select22").val();
        selectpwkmsc.hyseaSzmb = $("#select23").val();


        var optionUrl = "rest/pwkisland/optionpwk"

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

        var updateurl = "rest/pwkisland/updatepwk"
        var ids = document.getElementsByName("piliang");
        check_val = [];
        for (k in ids) {
            if (ids[k].checked)
                check_val.push(ids[k].value);
        }

        // alert(tjyear);
        var updatepwkmsc = {};
        updatepwkmsc.id = check_val[0];
        updatepwkmsc.tjyear = $("#pwk0").val();
        updatepwkmsc.tjmonth = $("#pwk1").val();
        updatepwkmsc.tjday = $("#pwk2").val();
        updatepwkmsc.hdpskName = $("#pwk3").val();
        updatepwkmsc.hdpskCode = $("#pwk4").val();
        updatepwkmsc.hdName = $("#pwk5").val();
        updatepwkmsc.hdArea  = parseFloat($("#pwk6").val());
        updatepwkmsc.city = $("#pwk7").val();
        updatepwkmsc.country = $("#pwk8").val();
        updatepwkmsc.village = $("#pwk9").val();
        updatepwkmsc.address = $("#pwk10").val();
        updatepwkmsc.longitude =  parseFloat($("#pwk11").val());
        updatepwkmsc.latitude =  parseFloat($("#pwk12").val());
        updatepwkmsc.seaMode = $("#pwk13").val();
        updatepwkmsc.seaName =$("#pwk14").val();
        updatepwkmsc.pslTd =$("#pwk15").val();
        updatepwkmsc.pslTy =$("#pwk16").val();
        updatepwkmsc.emissionStandard =$("#pwk17").val();
        updatepwkmsc.isGet =  $("#pwk18").val();
        updatepwkmsc.nogetItems = $("#pwk19").val();
        updatepwkmsc.hyGnq = $("#pwk20").val();
        updatepwkmsc.hySzmb = $("#pwk21").val();
        updatepwkmsc.hyseaGnq = $("#pwk22").val();
        updatepwkmsc.hyseaSzmb = $("#pwk23").val();

        $.ajax({
            url: updateurl,
            type: "POST",
            data: JSON.stringify(updatepwkmsc),
            datatype: "json",
            contentType: "application/json",
            success: function (data) {
                if (data == "") {
                    alert("更新失败，或因网络错误");
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
            var tlist = $('#t' + check_val).find("td")
            var inlist = $("#myModaledit").find("input")
            for (var i = 0; i < 20; i++) {
                html = tlist.eq(i + 4).html();
                if (html == "null") html = "";
                inlist.eq(i).val(html);
            }
            $('#myModaledit').modal();

            $('#myModaledit').modal();
        }
    });

    /**
     * 按照id号删除相应数据条目
     * */
    function deletePwk(ids) {
        $.ajax({
            url: "rest/pwkisland/deletepwk",
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
    $("#closeMod3").click(function(){
        var uploadinput=document.getElementById("excelfile");
        uploadinput.value=null;
        document.getElementById("jindutiao").setAttribute("style", "width:0;");
        $("#jindutiao").text("0%")
    })
    $("#btn_show").click(function () {
        // var div = document.getElementById("daohang");
        // var w = parseInt(div.style.width);
        // alert(w)
        //map222
        //right
        $("#btn_add").fadeToggle();
        $("#btn_edit").fadeToggle();
        $("#btn_delete").fadeToggle();
        $("#btn_search").fadeToggle();
        $("#btn_excelout").fadeToggle();
        $("#btn_excelin").fadeToggle();
        $("#tablecontrol").fadeToggle();
        $("#table-cont").fadeToggle();
        $("#map222").css("height","1200px");
        $("#right").css("height", "1200px");
        $("#map222_layers").css("top","70px");
        // $("#right").css("margin-top", "30px");
        // alert(div.style.width);
    });
});