var check_ids = [];          //勾选上的序号
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
    var ids;                //复选框的ids

    function nullto() {
        var tlist = $("#tbodyone").find("td")
        for (var i = 0; i < tlist.length; i++) {
            if (tlist.eq(i).html() == "null") {
                tlist.eq(i).empty();
                tlist.eq(i).append(" ")
            }
        }
    }

    /**
     * 1.解析获取到的数据
     * */
    function showlist(index, item) {
        var showlist = "<tr id=\"t" + item.id + "\" class='noExl'><td><input type=\"checkbox\" name=\"piliang\" value=\"" + item.id + "\"/></td><td>" + item.id + "</td><td><a href=\"" + item.id + "\" onclick=\"editfunc(this);return false;\"><span class=\"glyphicon glyphicon-edit\"></span></a>" +
            "</td><td><a href=\"" + item.id + "\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>" + "</td><td>" + item.tjyear + "</td><td>" + item.tjmonth + "</td><td>" + item.tjday + "</td><td>" + item.farmerName +
            "</td><td>" + item.city + "</td><td>" + item.county + "</td><td>" + item.village + "</td><td>" + item.address + "</td><td>" + item.longitude +"</td><td>" + item.latitude +"</td><td>" + item.yearFamount + "</td><td>" + item.pesticideDosage + "</td><td>" + item.pesticideConcentration + "</td><td>" + item.yearPtimes +
            "</td><td>" + item.yearPamount +"</td><td>" + item.outletSeason +"</td><td>" + item.outletTimes +"</td><td>" + item.outletAmount +"</td><td>" + item.outletTime +"</td></tr>";
        return showlist;
    }
    /**
     *2.显示整个列表
     */
    $.ajax({
        url: "rest/enterprise/getAllFarm",
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
     * 3.添加新数据
     * */
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
            success: function (res) {
                if (res == "") {
                    alert("[" + farm.tjyear + "-" + farm.tjmonth + "-" + farm.tjday + "," + farm.farmerName + "]已经存在于数据库中，添加失败，请重新输入");
                } else {
                    var html;
                    $.each(res, function (index, item) {
                        html = showlist(index, item);
                        $('#tbodyone').append(html);
                    })
                    nullto();
                    alert("数据添加成功！")
                    $('.modal-backdrop').remove();
                }
            },
        });
    });
    /**
     * 4.更改一条记录
     * */
    //选取并将数据放入到更改框中
    $("#btn_edit").click(function () {

        ids = document.getElementsByName("piliang");
        //获取勾选上的ID值
        check_ids = [];
        for (k in ids) {
            if (ids[k].checked)
                check_ids.push(ids[k].value);
        }

        //判断勾选的记录条数，做相应的决定
        if (check_ids.length == 0) {
            alert("请选择要修改的数据！");
        } else if (check_ids.length > 1) {
            alert("一次只能修改一条数据！");
        } else {
            //因为<tr id=\"t" + item.id + "\" class='noExl'>，所以用id值查找内容
            var tlist = $("#t" + check_ids[0]).find("td");
            var inlist = $("#editModel").find("input");
            for (var i = 0; i < tlist.length; i++) {
                html = tlist.eq(i + 4).html();
                if (html == "null") html = "";
                inlist.eq(i).val(html);
            }
            $("#editModel").modal();
        }
    })
    //保存修改的数据
    $("#editFarm").click(function () {
        //获取修改后的数据
        var updateFarm = {};
        updateFarm.id = check_ids[0];
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
            success: function (res) {
                if (res == "") {
                    alert("[" + updateFarm.tjyear + "-" + updateFarm.tjmonth + "-" + updateFarm.tjday + "," + updateFarm.gyname + "]重复，请重新输入");
                } else {
                    var html;
                    $.each(res, function (index, item) {
                        html = showlist(index, item);
                        $("#t" + check_ids[0]).after(html);
                        $("#t" + check_ids[0]).remove();
                    })
                    nullto();
                    alert("数据修改成功！")
                    $('.modal-backdrop').remove();
                }
            }
        });
    })
    /**
     * 5.批量删除数据
     * */
    $("#btn_delete").click(function () {

        ids = document.getElementsByName("piliang");
        //获取勾选上的ID值
        check_ids = [];
        for (k in ids) {
            if (ids[k].checked)
                check_ids.push(ids[k].value);
        }

        //判断选择条数，并询问是否删除
        if (check_ids.length == 0) {
            alert("请选择要删除的数据！");
        } else {
            if (confirm("确定要删除序号为：[" + check_ids.toString() + "]的数据吗？")) {
                deleteLists(check_ids);
            }
        }
    })
    /**
     * 按照id组删除相应数据条目
     * */
    function deleteLists(ids) {
        $.ajax({
            url: "rest/enterprise/deleteFarms",
            data: {"ids": ids},
            type: "POST",
            traditional: true,
            success: function (result) {
                if (result.success) {
                    for (var i = 0; i < check_ids.length; i++) {
                        $("#t" + check_ids[i]).remove();
                    }
                    alert("删除成功");
                }
                else{
                    alert("删除失败，请联系管理员！");
                }
            }
        });
    }
    /**
     * 6.多条件查询
     * */
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
                if (data == "") {
                    alert("没有查到相关数据！");
                } else {
                    var html;
                    $('#tbodyone').empty();
                    $.each(data, function (index, item) {
                        html = showlist(index, item);
                        $('#tbodyone').append(html);
                    })
                    nullto();
                    $('.modal-backdrop').remove();
                }
            }
        });
    })
});

/**
 * 弹出查找框
 * */
$("#btn_search").click(function () {
    $('#myModalsearch').modal();
});

/**
 * 伸缩功能
 * */
$("#btn_show").click(function () {
    $("#btn_add").fadeToggle();
    $("#btn_edit").fadeToggle();
    $("#btn_delete").fadeToggle();
    $("#btn_search").fadeToggle();
    $("#btn_excelout").fadeToggle();
    $("#btn_excelin").fadeToggle();
});
/**
 * 7.删除单条数据
 * */
function deletefunc(self){

    info=self.href.split("/");
    var id=info[info.length-1];
    if (confirm("是否要删除该记录？")){
        $.ajax({
            url:"rest/enterprise/deleteFarm/"+id,
            type: "DELETE",
            traditional: true,
            success: function (result) {
                if (result.success){
                    $("#t"+id).remove();
                    alert("删除成功");
                }
                else{
                    alert("删除失败，请联系管理员！");
                }
            }

        })
    }
}
/**
 * 弹出修改框
 * */
function editfunc(self){

    info=self.href.split("/");
    var id=info[info.length-1];
    check_ids[0]=id;
    var tlist = $("#t" + id).find("td");
    var inlist = $("#editModel").find("input");
    for (var i = 0; i < tlist.length; i++) {
        html = tlist.eq(i + 4).html();
        if (html == "null") html = "";
        inlist.eq(i).val(html);
    }
    $("#editModel").modal();
}


