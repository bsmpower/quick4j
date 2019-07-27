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
            "</td><td><a href=\"" + item.id + "\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>" + "</td><td>" + item.tjyear + "</td><td>" + item.tjmonth + "</td><td>" + item.tjday + "</td><td>" + item.gyname +
            "</td><td>" + item.usccCode + "</td><td>" + item.code + "</td><td>" + item.city + "</td><td>" + item.country + "</td><td>" + item.village +"</td><td>" + item.address +"</td><td>" + item.longitude + "</td><td>" + item.latitude + "</td><td>" + item.qyScale + "</td><td>" + item.qyStatus +
            "</td><td>" + item.nscsj +"</td><td>" + item.typeCode +"</td><td>" + item.gytype +"</td><td>" + item.gyysl +"</td><td>" + item.qsl +"</td><td>" + item.cfysl +"</td><td>" + item.sjgm +"</td><td>" + item.dailyEmission +"</td><td>" + item.annualEmission +"</td><td>" + item.emissionDays +"</td></tr>";
        return showlist;
    }

    /**
     *2.显示整个列表
     */
    $.ajax({
        url: "rest/enterprise/getAllIndustryTrash",
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
            success: function (res) {
                if (res == "") {
                    alert("[" + industryTrash.tjyear + "-" + industryTrash.tjmonth + "-" + industryTrash.tjday + "," + industryTrash.gyname + "]已经存在于数据库中，添加失败，请重新输入");
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
    $("#editIndustryTrash").click(function () {
        //获取修改后的数据
        var updateIndustryTrash = {};
        updateIndustryTrash.id = check_ids[0];
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
            success: function (res) {
                if (res == "") {
                    alert("[" + updateIndustryTrash.tjyear + "-" + updateIndustryTrash.tjmonth + "-" + updateIndustryTrash.tjday + "," + updateIndustryTrash.gyname + "]重复，请重新输入");
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
            url: "rest/enterprise/deleteIndustryTrashs",
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
    $("#searchIndustryTrash").click(function () {
        //获取各个条件的内容
        var selectedInfo = {};
        selectedInfo.tjyear = $("#select0").val();
        selectedInfo.tjmonth = $("#select1").val();
        selectedInfo.tjday = $("#select2").val();
        selectedInfo.gyname = $("#select3").val();
        selectedInfo.usccCode = $("#select4").val();
        selectedInfo.code=$("#select5").val();
        selectedInfo.city = $("#select6").val();
        selectedInfo.country = $("#select7").val();
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
        console.log(selectedInfo)
        $.ajax({
            url: "rest/enterprise/searchIndustryTrash",
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
            url:"rest/enterprise/deleteIndustryTrash/"+id,
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


