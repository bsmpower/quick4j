$(function () {
    /**
     * 新增一条记录触发模态框
     */
    // $("#btn_add").click(function(){
    //     $('#myModal').modal();
    // });
    $("#btn_excelout").click(function () {
        var allData = $("#RainPwkInfoTable").bootstrapTable('getData');
        var ids = new Array();
        $(allData).each(function () {
            ids.push(this.id);
        });
        console.log(ids);
        var excelout = "rest/pwksection/excelout"
        $.ajax({
            url: excelout,
            type: "POST",
            data: {"ids": ids},
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
            url: "rest/upload/pwksection",
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
        var addurl = "rest/pwksection/addpwk";
        var addpwkmsc = {};
        /*********************************************/
        var t = $("form").serializeArray();
        console.log(t);
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
            success: function (data) {
                if (data.success) {
                    $("#RainPwkInfoTable").bootstrapTable('refresh');
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
    $("#submitPwk2").click(function () {
        //获取到新添加的东西
        var selectpwkmsc = {};
        var a = $("#select0").val();
        selectpwkmsc.tjyear = $("#select0").val();
        // console.log(selectpwkmsc);
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


        console.log(selectpwkmsc)

        var optionUrl = "rest/pwksection/optionpwk"

        $.ajax({
            url: optionUrl,
            type: "POST",
            data: JSON.stringify(selectpwkmsc),
            datatype: "json",
            contentType: "application/json",
            success: function (data) {
                alert("查询成功！")
                // $("#PwkInfoTable").bootstrapTable('destroy');
                $("#RainPwkInfoTable").bootstrapTable('load', data);

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

        var updateurl = "rest/pwksection/updatepwk"
        var t = $("form").serializeArray();
        var rows = $("#RainPwkInfoTable").bootstrapTable('getSelections');
        // alert(tjyear);
        var updatepwkmsc = {};
        updatepwkmsc.id = rows[0].id;
        // updatepwkmsc.tjyear = t[0].value;
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
    $("#btn_delete").click(function () {
        if (!confirm("是否确认删除？"))
            return;
        var rows = $("#RainPwkInfoTable").bootstrapTable('getSelections');
        if (rows.length == 0) { //是为了判断是否选中
            alert("请选择要删除的记录!");
            return;
        } else {
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
    $("#btn_edit").click(function () {

        if (!confirm("是否确认修改？"))
            return;
        var rows = $("#RainPwkInfoTable").bootstrapTable('getSelections');
        console.log(rows);
        if (rows.length == 0) {
            alert("请选择要修改的记录！");
            return;
        } else if (rows.length > 1) {
            alert("请选择一个记录进行修改！")
            return;
        } else {
            //把rows填入到模态框中
            $("#pwk0").val(rows[0].tjyear);
            $("#pwk1").val(rows[0].tjmonth);
            $("#pwk2").val(rows[0].tjday);
            $("#pwk3").val(rows[0].hdpskName);
            $("#pwk4").val(rows[0].hdpskCode);
            $("#pwk5").val(rows[0].hdName);
            $("#pwk6").val(rows[0].hdArea);
            $("#pwk7").val(rows[0].city);
            $("#pwk8").val(rows[0].country);
            $("#pwk9").val(rows[0].village);
            $("#pwk10").val(rows[0].address);
            $("#pwk11").val(rows[0].longitude);
            $("#pwk12").val(rows[0].latitude);
            $("#pwk13").val(rows[0].seaMode);
            $("#pwk14").val(rows[0].seaName);
            $("#pwk15").val(rows[0].pslTd);
            $("#pwk16").val(rows[0].pslTy);
            $("#pwk17").val(rows[0].emissionStandard);
            $("#pwk18").val(rows[0].isGet);
            $("#pwk19").val(rows[0].nogetItems);
            $("#pwk20").val(rows[0].hyGnq);
            $("#pwk21").val(rows[0].hySzmb);
            $("#pwk22").val(rows[0].hyseaGnq);
            $("#pwk23").val(rows[0].hyseaSzmb);



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
    function deletePwk(ids) {
        $.ajax({
            url: "rest/pwksection/deletepwk",
            data: {"ids": ids},
            type: "POST",
            // dataType: "json",
            traditional: true,
            success: function (data) {
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