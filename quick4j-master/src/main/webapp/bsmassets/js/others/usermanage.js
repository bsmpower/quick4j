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
    var date = new Date(item.createTime);
    var showlist = "<tr id=\"t" + item.id + "\" class='noExl'><td><input type=\"checkbox\" name=\"piliang\" value=\"" + item.id + "\"/></td><td>" + item.id + "</td><td><a href=\"" + item.id + "\" onclick=\"editfunc(this);return false;\"><span class=\"glyphicon glyphicon-edit\"></span></a>" +
        "</td><td><a href=\"" + item.id + "\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>" + "</td><td>" + item.username + "</td><td>" + item.password + "</td><td>" + item.state + "</td><td>" + date + "</td></tr>";
    return showlist;
}
$(function(){
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
    var url = 'rest/usermanage/showlist';
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
     * 新增数据
     */
    $("#submitPwk").click(function () {
        var addurl = "rest/usermanage/adduser";
        var addpwkmsc = {};
        /*********************************************/
        var t = $("form").serializeArray();

        addpwkmsc.username = t[0].value;
        addpwkmsc.password = t[1].value;
        addpwkmsc.state = t[2].value;

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

    function deletePwk(ids) {
        $.ajax({
            url: "rest/usermanage/deletepwk",
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
            for (var i = 0; i < 4; i++) {
                html = tlist.eq(i + 4).html();
                if (html == "null") html = "";
                inlist.eq(i).val(html);
            }
            $('#myModaledit').modal();
        }
    });

    /**
     *更改一条记录
     */
    $("#submitPwk1").click(function () {

        var updateurl = "rest/usermanage/updateuser"

        var ids = document.getElementsByName("piliang");
        check_val = [];
        for (k in ids) {
            if (ids[k].checked)
                check_val.push(ids[k].value);
        }

        var updatepwkmsc = {};
        updatepwkmsc.id = check_val[0];
        updatepwkmsc.username = $("#pwk0").val();
        updatepwkmsc.password = $("#pwk1").val();
        updatepwkmsc.state = $("#pwk2").val();
        console.log(updatepwkmsc);
        $.ajax({
            url: updateurl,
            type: "POST",
            data: JSON.stringify(updatepwkmsc),
            datatype: "json",
            contentType: "application/json",
            success: function (data) {
                if (data == "") {
                    // $("#myModal").remove();
                    // $('.modal-backdrop').remove();
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
                    // document.getElementById("updatecontentForm").reset();
                    nullto();
                    alert("更新成功");
                }
            }
        });
    });
})
