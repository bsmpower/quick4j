var pid;

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
var gishtml = "";
gishtml += "<table class='table-striped table-hover table-bordered'>"+"<tr><td>排污口编号</td><td>${pwkCode}</td></tr>";
gishtml += "<tr><td>排污口名称</td><td>${pwkName}</td></tr>";
gishtml += "<tr><td>所在市</td><td>${city}</td></tr>";
gishtml += "<tr><td>所在县（市/区）</td><td>${county}</td></tr>";
gishtml += "<tr><td>排污口类型</td><td>${type}</td></tr>";
gishtml += "<tr><td>统计年份</td><td>${tjyear}</td></tr>";
gishtml += "<tr><td>统计月份</td><td>${tjmonth}</td></tr>";
gishtml += "<tr><td>统计日</td><td>${tjday}</td></tr>";
gishtml += "<tr><td>盐度(‰)</td><td>${salt}</td></tr>";
gishtml += "<tr><td>化学需氧量 (mg/L)</td><td>${cod}</td></tr>";
gishtml += "<tr><td>氨氮 (mg/L)</td><td>${nh3}</td></tr>";
gishtml += "<tr><td>总磷(mg/L)</td><td>${p}</td></tr>";
gishtml += "<tr><td>总氮(mg/L)</td><td>${n}</td></tr>";
gishtml += "<tr><td>六价铬 (mg/L)</td><td>${cr6}</td></tr>";
gishtml += "<tr><td>氰化物(mg/L)</td><td>${cn}</td></tr>";
gishtml += "<tr><td>粪大肠菌群数 (个/L)</td><td>${fdcjqs}</td></tr>";
gishtml += "<tr><td>五日生化需氧量(mg/L)</td><td>${bod5}</td></tr>";
gishtml += "<tr><td>悬浮物 (mg/L)</td><td>${xfw}</td></tr>";
gishtml += "<tr><td>石油类 (mg/L)</td><td>${oil}</td></tr>";
gishtml += "<tr><td>动植物油(mg/L)</td><td>${dzwy}</td></tr>";
gishtml += "<tr><td>挥发酚(mg/L)</td><td>${phenol}</td></tr>";
gishtml += "<tr><td>总砷(mg/L)</td><td>${as}</td></tr>";
gishtml += "<tr><td>总汞(mg/L)</td><td>${hg}</td></tr>";
gishtml += "<tr><td>总铅(mg/L)</td><td>${pb}</td></tr>";
gishtml += "<tr><td>总镉(mg/L)</td><td>${cd}</td></tr>";
gishtml += "<tr><td>PH值</td><td>${ph}</td></tr>";
gishtml += "<tr><td>氯化物(mg/L)</td><td>${chloride}</td></tr>";
gishtml += "<tr><td>硫化物(mg/L)</td><td>${sulfide}</td></tr>";
gishtml += "<tr><td>阴离子表面活性剂(mg/L)</td><td>${ylzbmhxj}</td></tr>";
gishtml += "<tr><td>其它监测指标</td><td>${others}</td></tr>";
gishtml += "</table>";

var gishtmlsec = "";
gishtmlsec += "<table border='0' class='tableBasic'>"+"<tr><td>监测断面编号</td><td>${dmCode}</td></tr>";
gishtmlsec += "<tr><td>监测断面名称</td><td>${dmName}</td></tr>";
gishtmlsec += "<tr><td>统计年份</td><td>${tjyear}</td></tr>";
gishtmlsec += "<tr><td>统计月份</td><td>${tjmonth}</td></tr>";
gishtmlsec += "<tr><td>统计日</td><td>${tjday}</td></tr>";
gishtmlsec += "<tr><td>盐度(‰)</td><td>${salt}</td></tr>";
gishtmlsec += "<tr><td>化学需氧量 (mg/L)</td><td>${cod}</td></tr>";
gishtmlsec += "<tr><td>氨氮 (mg/L)</td><td>${nh3}</td></tr>";
gishtmlsec += "<tr><td>总磷(mg/L)</td><td>${p}</td></tr>";
gishtmlsec += "<tr><td>总氮(mg/L)</td><td>${n}</td></tr>";
gishtmlsec += "<tr><td>六价铬 (mg/L)</td><td>${cr6}</td></tr>";
gishtmlsec += "<tr><td>氰化物(mg/L)</td><td>${cn}</td></tr>";
gishtmlsec += "<tr><td>粪大肠菌群数 (个/L)</td><td>${fdcjqs}</td></tr>";
gishtmlsec += "<tr><td>五日生化需氧量(mg/L)</td><td>${bod5}</td></tr>";
gishtmlsec += "<tr><td>悬浮物 (mg/L)</td><td>${xfw}</td></tr>";
gishtmlsec += "<tr><td>石油类 (mg/L)</td><td>${oil}</td></tr>";
gishtmlsec += "<tr><td>流量(m³/s）</td><td>${flow}</td></tr>";
gishtmlsec += "<tr><td>挥发酚(mg/L)</td><td>${phenol}</td></tr>";
gishtmlsec += "<tr><td>总砷(mg/L)</td><td>${as}</td></tr>";
gishtmlsec += "<tr><td>总汞(mg/L)</td><td>${hg}</td></tr>";
gishtmlsec += "<tr><td>总铅(mg/L)</td><td>${pb}</td></tr>";
gishtmlsec += "<tr><td>总镉(mg/L)</td><td>${cd}</td></tr>";
gishtmlsec += "<tr><td>PH值</td><td>${ph}</td></tr>";
gishtmlsec += "<tr><td>氯化物(mg/L)</td><td>${chloride}</td></tr>";
gishtmlsec += "<tr><td>硫化物(mg/L)</td><td>${sulfide}</td></tr>";
gishtmlsec += "<tr><td>阴离子表面活性剂(mg/L)</td><td>${ylzbmhxj}</td></tr>";
gishtmlsec += "<tr><td>其它监测指标</td><td>${others}</td></tr>";
gishtmlsec += "</table>";

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
            "</td><td>"+item.pwkCode+"</td><td>"+item.pwkName+"</td><td>"+item.city+"</td><td>"+item.county+"</td><td>"+item.type+"</td><td>"+item.tjyear+"</td><td>"+item.tjmonth+
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
        "</td><td>"+item.dmCode+"</td><td>"+item.dmName+"</td><td>"+item.city+"</td><td>"+item.county+"</td><td>"+item.tjyear+"</td><td>"+item.tjmonth+
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
    pwkfunc();
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
         success:function(data){
             $('#tbodyone').empty();
             var html;
             if($("#bntgroup .btn:first").attr("class").search("active")!=-1){
                 $.each(data,function(index,item){
                     html=allhtml(index,item.emission);
                     $('#tbodyone').append(html);
                 })
                 nullto();
                 updatePoint(data)
             }
             else {
                 if($("#bntgroup .btn:last").attr("class").search("active")!=-1){
                     $.each(data,function(index,item){
                         html=sechtml(index,item.emission);
                         $('#tbodyone').append(html);
                     })
                     nullto();
                     updatePointsec(data)
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
    document.getElementById('typeth').setAttribute('hidden','hidden');
    document.getElementById("pwktype").style.display="none"
    document.getElementById("pwktypeedit").style.display="none"
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
    var url = "rest/sec/emislist";
    $.ajax({
        url:url,
        type:"POST",
        dataType:"json",
        success:function(data){
            $('#tbodyone').empty();
            var html;
            $.each(data,function(index,item){
                html=sechtml(index,item.emission);
                $('#tbodyone').append(html);
            })
            nullto();
            updatePointsec(data)
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
    document.getElementById('typeth').removeAttribute('hidden');
    document.getElementById("pwktype").style.display="";
    document.getElementById("pwktypeedit").style.display="";
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
                html=allhtml(index,item.emission);
                $('#tbodyone').append(html);
            })
            nullto();
            updatePoint(data)
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
    for(var i=0;i<2;i++){
        html=tlist.eq(i+4).html();
        if(html=="null"||html=="-") html="";
        inlist.eq(i).val(html);
    }
    html=tlist.eq(7).html();
    if(html=="null"||html=="-") html="";
    inlist.eq(2).val(html);
    for(var i=3;i<28;i++){
        html=tlist.eq(i+6).html();
        if(html=="null"||html=="-") html="";
        inlist.eq(i).val(html);
    }
     html=tlist.eq(6).html();
     if(html=="null"||html=="-") html="";
    $("#city").val(html);
     html=tlist.eq(8).html();
     if(html=="null"||html=="-") html="";
    $("#type").val(html);
}

function addemis() {
     var data={};
     var t = $('#addform').serializeArray();
     if(t[0].value=="") {document.getElementById('message').innerHTML=$("#addcode").text()+"字段不可为空!";return 0;}
     if(t[1].value=="") {document.getElementById('message').innerHTML=$("#addname").text()+"字段不可为空!";return 0;}
     if(t[4].value=="") {document.getElementById('message').innerHTML="年份字段不可为空!";return 0;}
     if(t[5].value=="") {document.getElementById('message').innerHTML="月份字段不可为空!";return 0;}
     if(t[6].value=="") {document.getElementById('message').innerHTML="日期字段不可为空!";return 0;}
     if(t[2].value=="") {document.getElementById('message').innerHTML="所在市字段不可为空!";return 0;}
     if(t[3].value=="") {document.getElementById('message').innerHTML="所在县（市/区）字段不可为空!";return 0;}
     if($("#bntgroup .btn:first").attr("class").search("active")!=-1){
         if(t[29].value=="") {document.getElementById('message').innerHTML="排污口类型字段不可为空!";return 0;}
     }
     if(t[4].value.length<4) {document.getElementById('message').innerHTML="请检查年份字段!";return 0;}
     if((t[4].value.indexOf(".")!=-1)||(t[5].value.indexOf(".")!=-1)||(t[6].value.indexOf(".")!=-1)) {document.getElementById('message').innerHTML="请检查年、月、日!";return 0;}
     if((t[4].value<1)||(t[5].value<1)||(t[6].value<1)) {document.getElementById('message').innerHTML="请检查年、月、日!";return 0;}
     document.getElementById('message').innerHTML=""

     for(var i =0;i<t.length;i++){
         data[t[i].name] = t[i].value;
     }
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
    console.log(t)
    if(t[0].value=="") {document.getElementById('message2').innerHTML=$("#addcode").text()+"字段不可为空!";return 0;}
    if(t[1].value=="") {document.getElementById('message2').innerHTML=$("#addname").text()+"字段不可为空!";return 0;}
    if(t[4].value=="") {document.getElementById('message2').innerHTML="年份字段不可为空!";return 0;}
    if(t[5].value=="") {document.getElementById('message2').innerHTML="月份字段不可为空!";return 0;}
    if(t[6].value=="") {document.getElementById('message2').innerHTML="日期字段不可为空!";return 0;}
    if(t[2].value=="") {document.getElementById('message2').innerHTML="所在市字段不可为空!";return 0;}
    if(t[3].value=="") {document.getElementById('message2').innerHTML="所在县（市/区）字段不可为空!";return 0;}
    if($("#bntgroup .btn:first").attr("class").search("active")!=-1){
        if(t[29].value=="") {document.getElementById('message2').innerHTML="排污口类型字段不可为空!";return 0;}
    }
    if(t[4].value.length<4) {document.getElementById('message2').innerHTML="请检查年份字段!";return 0;}
    if((t[4].value.indexOf(".")!=-1)||(t[5].value.indexOf(".")!=-1)||(t[6].value.indexOf(".")!=-1)) {document.getElementById('message2').innerHTML="请检查年、月、日!";return 0;}
    if((t[4].value<1)||(t[5].value<1)||(t[6].value<1)) {document.getElementById('message2').innerHTML="请检查年、月、日!";return 0;}
    document.getElementById('message2').innerHTML=""
    data.id=pid;
    for(var i =0;i<t.length;i++){
        data[t[i].name] = t[i].value;
    }
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
        layer = new ArcGISDynamicMapServiceLayer("http://202.199.6.100:6080/arcgis/rest/services/liaoheliuyu/MapServer");
        layer.setVisibleLayers([0, 9]);
        map.addLayer(layer, 0);
        graphicLayer = new esri.layers.GraphicsLayer();
        map.addLayer(graphicLayer);
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
        var item;
        graphicLayer.clear();
        for (var i = 0; i < data.length; i++) {
            lon = data[i].lng;
            lat = data[i].lat;
            item = data[i].emission;
            attr = {
                "pwkCode": item.pwkCode,
                "pwkName": item.pwkName,
                "city": item.city,
                "county": item.county,
                "type": item.type,
                "tjyear": item.tjyear,
                "tjmonth": item.tjmonth,
                "tjday": item.tjday,
                "salt": item.salt,
                "cod": item.cod,
                "nh3": item.nh3,
                "p": item.p,
                "n": item.n,
                "cr6": item.cr6,
                "cn": item.cn,
                "fdcjqs": item.fdcjqs,
                "bod5": item.bod5,
                "xfw": item.xfw,
                "oil": item.oil,
                "dzwy": item.dzwy,
                "phenol": item.phenol,
                "as": item.as,
                "hg": item.hg,
                "pb": item.pb,
                "cd": item.cd,
                "ph": item.ph,
                "chloride": item.chloride,
                "sulfide": item.sulfide,
                "ylzbnhxj": item.ylzbnhxj,
                "others": item.others
            };
            var point = new Point(lon, lat, map.spatialReference);
            var infoTemplate = new InfoTemplate("排污口最新调查数据", gishtml);
            var symbol1 = new PictureMarkerSymbol("app/img/location.png", 16, 16);
            var graphic = new Graphic(point, symbol1, attr, infoTemplate);
            graphicLayer.add(graphic);
        }
    });
}


function updatePointsec(data){
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
        var item;
        graphicLayer.clear();
        for (var i = 0; i < data.length; i++) {
            lon = data[i].lng;
            lat = data[i].lat;
            item = data[i].emission;
            attr = {
                "dmCode": item.dmCode,
                "dmName": item.dmName,
                "city": item.city,
                "county": item.county,
                "tjyear": item.tjyear,
                "tjmonth": item.tjmonth,
                "tjday": item.tjday,
                "salt": item.salt,
                "cod": item.cod,
                "nh3": item.nh3,
                "p": item.p,
                "n": item.n,
                "cr6": item.cr6,
                "cn": item.cn,
                "fdcjqs": item.fdcjqs,
                "bod5": item.bod5,
                "xfw": item.xfw,
                "oil": item.oil,
                "flow": item.flow,
                "phenol": item.phenol,
                "as": item.as,
                "hg": item.hg,
                "pb": item.pb,
                "cd": item.cd,
                "ph": item.ph,
                "chloride": item.chloride,
                "sulfide": item.sulfide,
                "ylzbnhxj": item.ylzbnhxj,
                "others": item.others
            };
            var point = new Point(lon, lat, map.spatialReference);
            var infoTemplate = new InfoTemplate("排污口最新调查数据", gishtmlsec);
            var symbol1 = new PictureMarkerSymbol("app/img/location.png", 16, 16);
            var graphic = new Graphic(point, symbol1, attr, infoTemplate);
            graphicLayer.add(graphic);
        }
    });
}

function fadeout() {
    if($("#fadeout").attr("class").search("active")==-1){
        document.getElementById("alltable").style.display="none";
        document.getElementById("map222").style.height="680px";
        $("#fadeout").addClass("active");
        $("#fadeout").html("<span class=\"glyphicon glyphicon-chevron-up\" style=\"margin-right: 5px\"></span>显示");
    }
    else{
        document.getElementById("alltable").style.display="";
        document.getElementById("map222").style.height="350px";
        $("#fadeout").removeClass("active");
        $("#fadeout").html("<span class=\"glyphicon glyphicon-chevron-down\" style=\"margin-right: 5px\"></span>隐藏");
    }
}
