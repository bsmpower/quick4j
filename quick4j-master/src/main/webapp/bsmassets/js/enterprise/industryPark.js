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
            "</td><td><a href=\"" + item.id + "\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>" + "</td><td>" + item.tjyear + "</td><td>" + item.tjmonth + "</td><td>" + item.tjday + "</td><td>" + item.gyyqName +
            "</td><td>" + item.code + "</td><td>" + item.city + "</td><td>" + item.country + "</td><td>" + item.address + "</td><td>" + item.longitude +"</td><td>" + item.latitude +"</td><td>" + item.yqArea + "</td><td>" + item.cybj + "</td><td>" + item.facilityName + "</td><td>" + item.facilityLongitude +
            "</td><td>" + item.facilityLatitude +"</td><td>" + item.isCollection +"</td><td>" + item.isEmission +"</td><td>" + item.sjgm +"</td><td>" + item.dailyEmission +"</td><td>" + item.annualEmission +"</td><td>" + item.emissionDays +"</td><td>" + item.process +"</td></tr>";
        return showlist;
    }
    /**
     *2.显示整个列表
     */
    $.ajax({
        url: "rest/enterprise/getAllIndustryPark",
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

        $.ajax({
            url: "rest/enterprise/IndustryParkInput",
            type: "POST",
            data: JSON.stringify(IndustryPark),
            datatype: "json",
            contentType: "application/json",
            success: function (res) {
                if (res == "") {
                    alert("[" + IndustryPark.tjyear + "-" + IndustryPark.tjmonth + "-" + IndustryPark.tjday + "," + IndustryPark.gyyqName + "]已经存在于数据库中，添加失败，请重新输入");
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
    $("#editIndustryPark").click(function () {
        //获取修改后的数据
        var updateIndustryPark = {};
        updateIndustryPark.id = check_ids[0];
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
            success: function (res) {
                if (res == "") {
                    alert("[" + updateIndustryPark.tjyear + "-" + updateIndustryPark.tjmonth + "-" + updateIndustryPark.tjday + "," + updateIndustryPark.gyyqName + "]重复，请重新输入");
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
            url: "rest/enterprise/deleteIndustryParks",
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
            url:"rest/enterprise/deleteIndustryPark/"+id,
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


