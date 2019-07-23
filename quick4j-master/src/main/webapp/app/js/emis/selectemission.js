// var pad = function() {    //长度补零
//     var tbl = [];
//     return function(num, n) {
//         var len = n-num.toString().length;
//         if (len <= 0) return num;
//         if (!tbl[len]) tbl[len] = (new Array(len+1)).join('0');
//         return tbl[len] + num;
//     }
// }();
var pid;


function nullto() {
    var tlist = $("#tbodyone").find("td")
    for(var i=0;i<tlist.length;i++){
        if(tlist.eq(i).html()=="null") {tlist.eq(i).empty();tlist.eq(i).append("-")}
    }
}

function gettoday() {
    var time = new Date();
    var day = ("0" + time.getDate()).slice(-2);
    var month = ("0" + (time.getMonth() + 1)).slice(-2);
    var today = time.getFullYear() + "-" + (month) + "-" + (day);
    return today;
}

function allhtml(index,item) {
    var allhtml= "<tr id=\"t"+item.id+"\" class='noExl'><td><input type=\"checkbox\" name=\"piliang\" value=\""+item.id+"\"/></td><td>"+item.id+
            "</td><td><a href=\""+item.id+"\" onclick=\"editfunc(this);return false;\"><span class=\"glyphicon glyphicon-edit\"></span></a>"+
            "</td><td><a href=\""+item.id+"\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>"+
            "</td><td>"+item.pwkCode+"</td><td>"+item.pwkName+"</td><td>"+item.tjyear+"</td><td>"+item.tjmonth+
            "</td><td>"+item.tjday+"</td><td>"+item.salt+"</td><td>"+item.cod+"</td><td>"+item.nh3+"</td><td>"+item.p+"</td><td>"+item.n+
            "</td><td>"+item.cr6+"</td><td>"+item.cn+"</td><td>"+item.fdcjqs+"</td><td>"+item.bod5+"</td><td>"+item.xfw+"</td><td>"+item.oil+"</td><td>"+item.dzwy+"</td><td>"+item.phenol+
            "</td><td>"+item.as+"</td><td>"+item.hg+"</td><td>"+item.pb+"</td><td>"+item.cd+"</td><td>"+item.ph+"</td><td>"+item.chloride+"</td><td>"+item.sulfide+"</td><td>"+item.ylzbmhxj+"</td><td>"+item.others+
            "</td></tr>";
    return allhtml;
}

function sechtml(index,item){
    var sechtml= "<tr id=\"t"+item.id+"\" class='noExl'><td><input type=\"checkbox\" name=\"piliang\" value=\""+item.id+"\"/></td><td>"+item.id+
        "</td><td><a href=\""+item.id+"\" onclick=\"editfunc(this);return false;\"><span class=\"glyphicon glyphicon-edit\"></span></a>"+
        "</td><td><a href=\""+item.id+"\" onclick=\"deletefunc(this);return false;\"><span class=\"   glyphicon glyphicon-trash\"></span></a>"+
        "</td><td>"+item.dmCode+"</td><td>"+item.dmName+"</td><td>"+item.tjyear+"</td><td>"+item.tjmonth+
        "</td><td>"+item.tjday+"</td><td>"+item.salt+"</td><td>"+item.cod+"</td><td>"+item.nh3+"</td><td>"+item.p+"</td><td>"+item.n+
        "</td><td>"+item.cr6+"</td><td>"+item.cn+"</td><td>"+item.fdcjqs+"</td><td>"+item.bod5+"</td><td>"+item.xfw+"</td><td>"+item.oil+"</td><td>"+item.flow+"</td><td>"+item.phenol+
        "</td><td>"+item.as+"</td><td>"+item.hg+"</td><td>"+item.pb+"</td><td>"+item.cd+"</td><td>"+item.ph+"</td><td>"+item.chloride+"</td><td>"+item.sulfide+"</td><td>"+item.ylzbmhxj+"</td><td>"+item.others+
        "</td></tr>";
    return sechtml;
}



$(document).ready(function(){
    $('.sliderbar-container').sliderBar({
        open : true,           // 默认是否打开，true打开，false关闭
        top : 125,             // 距离顶部多高
        width : 360,           // body内容宽度
        height : 345,          // body内容高度
        theme : '#3d3d3d',       // 主题颜色
        position : 'right'      // 显示位置，有left和right两种
    });
    var tableCont = document.querySelector('#table-cont')
    function scrollHandle (e){
        var scrollTop = this.scrollTop;
        var a = this.querySelector('thead').getElementsByTagName("th");
        for(var i=0;i<a.length;i++)
            a[i].style.transform = 'translateY(' + scrollTop + 'px)';
        //this.querySelector('thead').style.transform = 'translateY(' + scrollTop + 'px)';
    }
    tableCont.addEventListener('scroll',scrollHandle)

        $("#bntgroup .btn:first").addClass("active")       //按钮

        var today = gettoday();
        $('#endd').val(today);
        var url = "rest/emis/emissionlist"
        $.ajax({
            url:url,
            type:"POST",
            dataType:"json",
            success:function(data){
                var html;
                $.each(data,function(index,item){
                    html=allhtml(index,item);
                    $('#tbodyone').append(html);})
                nullto();
            },
            error: function (e) {

            }
        });
    });

 function selectemis(){
     var today = gettoday();
     var data={};
     var t = $('#selectform').serializeArray();
     // var startdate = t[2].value;
     // var enddate = t[3].value;
     // if(startdate=="") startdate="1991-10-07";
     // if(enddate=="") enddate=today;
     if(t[0].value=="") t[0].value=null;
     if(t[1].value=="") t[1].value=null;
     if(t[4].value=="") t[4].value=null;
     if(t[5].value=="") t[5].value=null;
     // if(t[4].value=="") t[4].value=null;
     // if(t[4].value!=null) t[4].value = parseFloat(t[4].value);
     // //data.pwkCode = t[0].value;
     // data[t[3].value] = t[4].value;
     data.tjyear = t[4].value;
     data.tjmonth = t[5].value;
     if($("#bntgroup .btn:first").attr("class").search("active")!=-1){
         // aurl="rest/emis/selectemission?startdate="+startdate+"&enddate="+enddate;
         aurl="rest/emis/selectemission";
         data.pwkCode = t[0].value;
         data.pwkName = t[1].value;
     }else{
         if($("#bntgroup .btn:last").attr("class").search("active")!=-1){
             // aurl="rest/sec/emisselect?startdate="+startdate+"&enddate="+enddate;
             aurl="rest/sec/emisselect";
             data.dmCode = t[0].value;
             data.dmName = t[1].value;
         }
     }
     $.ajax({
         url:aurl,
         type:"POST",
         data:JSON.stringify(data),
         contentType:"application/json",
         dataType:"json",
         success:function(res){
             $('#tbodyone').empty();
             var html;
             if($("#bntgroup .btn:first").attr("class").search("active")!=-1){
                 $.each(res,function(index,item){
                     html=allhtml(index,item);
                     $('#tbodyone').append(html);})
             }
             else {
                 if($("#bntgroup .btn:last").attr("class").search("active")!=-1){
                     $.each(res,function(index,item){
                         html=sechtml(index,item);
                         $('#tbodyone').append(html);})
                 }
             }
             nullto();
         },
         error: function (e) {
             alert("接口异常，请联系管理员");
         }
     });


 }

 function selall() {
     if($("#bntgroup .btn:first").attr("class").search("active")!=-1){
         pwkfunc()
     }
     else{
         dmfunc()
     }
 }
function dmfunc(){
    var today = gettoday();
     if($("#bntgroup .btn:first").attr("class").search("active")!=-1){
         $("#pwkCodeId").val("");
         $("#pwkNameId").val("");
         $("#inputyear").val("");
         $("#inputmonth").val("");
     }
    $("#bntgroup .btn:first").removeClass("active")
    $("#bntgroup .btn:last").addClass("active")
    $("#codeth").empty();
    $("#codeth").append("监测断面编号");
    $("#nameth").empty();
    $("#nameth").append("监测断面名称");
    $("#flowth").empty();
    $("#flowth").append("流量(m³/s）");
    $("#codelable").empty();
    $("#codelable").append("监测断面编号:");
    $("#namelable").empty();
    $("#namelable").append("监测断面名称:");
    $("#addcode").empty();
    $("#addcode").append("监测断面编号");
    $("#addname").empty();
    $("#addname").append("监测断面名称");
    $("#adddzwy").empty();
    $("#adddzwy").append("流量(m³/s）");
    $("#editcode").empty();
    $("#editcode").append("监测断面编号");
    $("#editname").empty();
    $("#editname").append("监测断面名称");
    $("#editdzwy").empty();
    $("#editdzwy").append("流量(m³/s）");
    $("#myModalLabel").empty();
    $("#myModalLabel").append("增加监测断面排放物质信息");
    $("#myModalLabel2").empty();
    $("#myModalLabel2").append("修改监测断面排放物质信息");
    document.getElementById('addcodeinput').name="dmCode"
    document.getElementById('addnameinput').name="dmName"
    document.getElementById('adddzwyinput').name="flow"
    document.getElementById('editcodeinput').name="dmCode"
    document.getElementById('editnameinput').name="dmName"
    document.getElementById('editdzwyinput').name="flow"
    // document.getElementById('startd').value="1991-10-07";
    // document.getElementById('endd').value=today;
    var url = "rest/sec/emislist";
    $.ajax({
        url:url,
        type:"POST",
        dataType:"json",
        success:function(data){
            $('#tbodyone').empty();
            var html;
            $.each(data,function(index,item){
                html=sechtml(index,item);
                $('#tbodyone').append(html);})
            nullto();
        },
        error: function (e) {
            alert("接口异常，请联系管理员");
        }
    });
}

function pwkfunc(){
    var today = gettoday();
    if($("#bntgroup .btn:last").attr("class").search("active")!=-1){
        $("#pwkCodeId").val("");
        $("#pwkNameId").val("");
        $("#inputyear").val("");
        $("#inputmonth").val("");
    }
    $("#bntgroup .btn:first").addClass("active")
    $("#bntgroup .btn:last").removeClass("active")
    $("#codeth").empty();
    $("#codeth").append("排污口编号");
    $("#nameth").empty();
    $("#nameth").append("排污口名称");
    $("#flowth").empty();
    $("#flowth").append("动植物油(mg/L)");
    $("#codelable").empty();
    $("#codelable").append("排污口编号:");
    $("#namelable").empty();
    $("#namelable").append("排污口名称:");
    $("#addcode").empty();
    $("#addcode").append("排污口编号");
    $("#addname").empty();
    $("#addname").append("排污口名称");
    $("#adddzwy").empty();
    $("#adddzwy").append("动植物油(mg/L)");
    $("#myModalLabel").empty();
    $("#myModalLabel").append("增加排污口排放物质信息");
    document.getElementById('addcodeinput').name="pwkCode";
    document.getElementById('addnameinput').name="pwkName";
    document.getElementById('adddzwyinput').name="dzwy";
    document.getElementById('editcodeinput').name="pwkCode";
    document.getElementById('editnameinput').name="pwkName";
    document.getElementById('editdzwyinput').name="dzwy";
    // document.getElementById('startd').value="1991-10-07";
    // document.getElementById('endd').value=today;
    var url = "rest/emis/emissionlist"
    $.ajax({
        url:url,
        type:"POST",
        dataType:"json",
        success:function(data){
            $('#tbodyone').empty();
            var html;
            $.each(data,function(index,item){
                html=allhtml(index,item);
                $('#tbodyone').append(html);})
            nullto();
        },
        error: function (e) {
            alert("接口异常，请联系管理员");
        }
    });
}


function deletefunc(self) {
     var t = new Array();
     var url;
     t = self.href.split("/");
     var id = t[t.length-1];
     con=confirm("确定删除此条记录吗");
     if(con==true){
         if($("#bntgroup .btn:first").attr("class").search("active")!=-1){
             url = "rest/emis/deleteemission?id="+id;
         }else{
             url = "rest/sec/emisdelete?id="+id;
         }
         $.ajax({
            url:url,
            type:"POST",
            success:function(data){
                alert("已经删除");
                document.getElementById("t"+id).remove();
            },
            error: function (e) {
                alert("接口异常，请联系管理员");
            }
        });
    }
}

function allchoose(){
    var obj = document.getElementsByName("piliang");
    for(i=0;i<obj.length;i++){
        obj[i].checked=true;
    }
}
function nochoose(){
    var obj = document.getElementsByName("piliang");
    for(i=0;i<obj.length;i++){
        obj[i].checked=false;
    }
}

function alldelete() {
    var obj = document.getElementsByName("piliang");
    checkarr = [];
    for(k=0;k<obj.length;k++){
        if(obj[k].checked)
            checkarr.push(obj[k].value);
    }
    if(checkarr.length==0){
        alert("请选中要删除的记录")
        return "success";
    }
    con=confirm("确定删除多条记录吗");
    if(con==true) {
        if ($("#bntgroup .btn:first").attr("class").search("active") != -1) {
            url = "rest/emis/deleteall";
        } else {
            url = "rest/sec/alldelete";
        }
        $.ajax({
            url: url,
            data:{params: checkarr},
            type: "POST",
            traditional: true, //默认false
            success: function (data) {
                alert("已经删除")
                for(i=0;i<checkarr.length;i++){
                    id=checkarr[i];
                    document.getElementById("t"+id).remove();
                }
            }
        });
    }
}

function allnull() {
    $("#myModal :input").val("");
}

function allnull2(){
    $("#myModal2 :input").val("");
}

function add() {
    document.getElementById('message').innerHTML="";
    $('#myModal').modal('show')
}

function editfunc(self){
    document.getElementById('message2').innerHTML="";
    var t = new Array();
    var html;
    t = self.href.split("/");
    var id = t[t.length-1];
    pid=id;
    $('#myModal2').modal('show')
    var tlist = $('#t'+id).find("td")
    var inlist = $("#myModal2").find("input")
    for(var i=0;i<26;i++){
        html=tlist.eq(i+4).html();
        if(html=="null"||html=="-") html="";
        inlist.eq(i).val(html);
    }
}

function addemis() {
     var data={};
     var t = $('#addform').serializeArray();
     if(t[0].value=="") {document.getElementById('message').innerHTML=$("#addcode").text()+"字段不可为空!";return 0;}
     if(t[1].value=="") {document.getElementById('message').innerHTML=$("#addname").text()+"字段不可为空!";return 0;}
     if(t[2].value=="") {document.getElementById('message').innerHTML="年份字段不可为空!";return 0;}
     if(t[3].value=="") {document.getElementById('message').innerHTML="月份字段不可为空!";return 0;}
     if(t[4].value=="") {document.getElementById('message').innerHTML="日期字段不可为空!";return 0;}
     if(t[2].value.length<4) {document.getElementById('message').innerHTML="请检查年份字段!";return 0;}
     if((t[2].value.indexOf(".")!=-1)||(t[3].value.indexOf(".")!=-1)||(t[4].value.indexOf(".")!=-1)) {document.getElementById('message').innerHTML="请检查年、月、日!";return 0;}
    if((t[2].value<1)||(t[3].value<1)||(t[4].value<1)) {document.getElementById('message').innerHTML="请检查年、月、日!";return 0;}
     document.getElementById('message').innerHTML=""
     for(var i =0;i<t.length;i++){
         data[t[i].name] = t[i].value;
     }
     console.log(JSON.stringify(data));
    if($("#bntgroup .btn:first").attr("class").search("active")!=-1){
        url = "rest/emis/addemission";
    }else{
        url = "rest/sec/emisadd";
    }
    $.ajax({
        url:url,
        type:"POST",
        data:JSON.stringify(data),
        contentType:"application/json",
        // dataType:"json",
        success:function(res){
            if(res=="") alert("添加失败，或因记录已存在")
            else{
                var html;
                if($("#bntgroup .btn:first").attr("class").search("active")!=-1){
                    $.each(res,function(index,item){
                        html=allhtml(index,item);
                        $('#tbodyone').append(html);})
                }
                else {
                    if($("#bntgroup .btn:last").attr("class").search("active")!=-1){
                        $.each(res,function(index,item){
                            html=sechtml(index,item);
                            $('#tbodyone').append(html);})
                    }
                }
                nullto();
                // $('#myModal').modal('hide')
                alert("添加成功")
            }
        },
        error: function (e) {
            alert("接口异常，请联系管理员");
        }
    });
}

function editemis() {
    var data={};
    var t = $('#editform').serializeArray();
    if(t[0].value=="") {document.getElementById('message2').innerHTML=$("#addcode").text()+"字段不可为空!";return 0;}
    if(t[1].value=="") {document.getElementById('message2').innerHTML=$("#addname").text()+"字段不可为空!";return 0;}
    if(t[2].value=="") {document.getElementById('message2').innerHTML="年份字段不可为空!";return 0;}
    if(t[3].value=="") {document.getElementById('message2').innerHTML="月份字段不可为空!";return 0;}
    if(t[4].value=="") {document.getElementById('message2').innerHTML="日期字段不可为空!";return 0;}
    if(t[2].value.length<4) {document.getElementById('message').innerHTML="请检查年份字段!";return 0;}
    if((t[2].value.indexOf(".")!=-1)||(t[3].value.indexOf(".")!=-1)||(t[4].value.indexOf(".")!=-1)) {document.getElementById('message2').innerHTML="请检查年、月、日!";return 0;}
    if((t[2].value<1)||(t[3].value<1)||(t[4].value<1)) {document.getElementById('message2').innerHTML="请检查年、月、日!";return 0;}
    document.getElementById('message2').innerHTML=""
    data.id=pid;
    for(var i =0;i<t.length;i++){
        data[t[i].name] = t[i].value;
    }
    console.log(JSON.stringify(data));
    if($("#bntgroup .btn:first").attr("class").search("active")!=-1){
        url = "rest/emis/editemission";
    }else{
        url = "rest/sec/emisedit";
    }
    $.ajax({
        url:url,
        type:"POST",
        data:JSON.stringify(data),
        contentType:"application/json",
        // dataType:"json",
        success:function(res){
            if(res=="") alert("添加失败，或因记录已存在")
            else{
                var html;
                if($("#bntgroup .btn:first").attr("class").search("active")!=-1){
                    $.each(res,function(index,item){
                        html=allhtml(index,item);
                        $('#t'+pid).after(html);
                        $('#t'+pid).remove();})
                }
                else {
                    if($("#bntgroup .btn:last").attr("class").search("active")!=-1){
                        $.each(res,function(index,item){
                            html=sechtml(index,item);
                            $('#t'+pid).after(html);
                            $('#t'+pid).remove();})
                    }
                }
                nullto();
                // $('#myModal').modal('hide')
                alert("修改成功")
            }

        },
        error: function (e) {
            alert("接口异常，请联系管理员");
        }
    });
}

function exportexcel() {
    var obj = document.getElementsByName("piliang");
    var arr = [];
    var id;
    for(k=0;k<obj.length;k++){
        if(obj[k].checked)
            arr.push(obj[k].value);
    }
    for(var i=0;i<arr.length;i++){
        id=arr[i];
        document.getElementById("t"+id).className="";
    }
    if(arr.length==0){alert("请选择要导出的记录");return "no"}
    else{
        $("#tablediv").table2excel({            //exceltable为存放数据的table
            // 不被导出的表格行的CSS class类
            exclude: ".noExl",
            // 导出的Excel文档的名称
            name: "排放物质-" + new Date().getTime(),
            // Excel文件的名称
            filename: "排放物质-" + new Date().getTime() + ".xls",
            exclude_img: false,//是否导出图片 false导出
            exclude_links: false,//是否导出链接 false导出
            exclude_inputs: false//是否导出输入框的值 true导出
        });
    }
    for(var k=0;k<arr.length;k++){
        id=arr[k];
        document.getElementById("t"+id).className="noExl";
    }
}
