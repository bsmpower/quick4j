function allhtml(index,item) {
    var allhtml= "<tr id=\"t"+item.id+"\" class='noExl'><td><input type=\"checkbox\" name=\"piliang\" value=\""+item.id+"\"/></td><td>"+item.id+
        "</td><td><a href=\""+item.id+"\" onclick=\"editfunc(this);return false;\"><span class=\"glyphicon glyphicon-edit\"></span></a>"+
        "</td><td><a href=\""+item.id+"\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>"+
        "</td><td>"+item.uscccode+"</td><td>"+item.name+"</td><td>"+item.cpType+"</td><td>"+item.cpUnit+
        "</td><td>"+item.cpSum+"</td><td>"+item.scTech+"</td><td>"+item.tjyear+"</td><td>"+item.tjmonth+"</td><td>"+item.tjday+"</td></tr>";
    return allhtml;
}

$(document).ready(function(){
         showall();
    $("#photo1").hide();
});

function nullto() {
    var tlist = $("#tbodyone").find("td")
    for(var i=0;i<tlist.length;i++){
        if(tlist.eq(i).html()=="null") {tlist.eq(i).empty();tlist.eq(i).append("-")}
    }
}

function showall(){
    $.ajax({
        url:"rest/pro/productlist",
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

function select(){
    var data={};
    var t = $('#selectform').serializeArray();
    for(var i =0;i<t.length;i++){
        if(t[i].value!="") data[t[i].name] = t[i].value;
    }
    console.log(JSON.stringify(data));
    $.ajax({
        url:"rest/pro/productselect",
        type:"POST",
        data:JSON.stringify(data),
        contentType:"application/json",
        dataType:"json",
        success:function(res){
            $('#tbodyone').empty();
            var html;
            $.each(res,function(index,item){
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
        $.ajax({
            url:"rest/pro/deleteproduct?id="+id,
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
        $.ajax({
            url: "rest/pro/deleteall",
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

function addproduct() {
    var data={};
    var t = $('#addform').serializeArray();
    if(t[1].value=="") {document.getElementById('message').innerHTML="单位名称字段不可为空!";return 0;}
    if(t[2].value=="") {document.getElementById('message').innerHTML="产品种类（名称）字段不可为空!";return 0;}
    if(t[6].value!=""&&(t[6].value.length<4||t[6].value.indexOf(".")!=-1||t[6].value<1)){
        document.getElementById('message').innerHTML="请检查年份字段!";return 0;
    }
    if(t[7].value!=""&&(t[7].value.indexOf(".")!=-1||t[7].value<1)){
        document.getElementById('message').innerHTML="请检查月份字段!";return 0;
    }
    if(t[8].value!=""&&(t[8].value.indexOf(".")!=-1||t[8].value<1)){
        document.getElementById('message').innerHTML="请检查日期字段!";return 0;
    }
    document.getElementById('message').innerHTML=""
    for(var i =0;i<t.length;i++){
        if(t[i].value!="") data[t[i].name] = t[i].value;
    }
    console.log(JSON.stringify(data));
    $.ajax({
        url:"rest/pro/addproduct",
        type:"POST",
        data:JSON.stringify(data),
        contentType:"application/json",
        // dataType:"json",
        success:function(res){
            if(res=="") alert("添加失败,请刷新重试")
            else{
                var html;
                    $.each(res,function(index,item){
                        html=allhtml(index,item);
                        $('#tbodyone').append(html);})
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
    for(var i=0;i<9;i++){
        html=tlist.eq(i+4).html();
        if(html=="null"||html=="-") html="";
        inlist.eq(i).val(html);
    }
}

function editemis() {
    var data={};
    var t = $('#editform').serializeArray();
    if(t[1].value=="") {document.getElementById('message2').innerHTML="单位名称字段不可为空!";return 0;}
    if(t[2].value=="") {document.getElementById('message2').innerHTML="产品种类（名称）字段不可为空!";return 0;}
    if(t[6].value!=""&&(t[6].value.length<4||t[6].value.indexOf(".")!=-1||t[6].value<1)){
        document.getElementById('message2').innerHTML="请检查年份字段!";return 0;
    }
    if(t[7].value!=""&&(t[7].value.indexOf(".")!=-1||t[7].value<1)){
        document.getElementById('message2').innerHTML="请检查月份字段!";return 0;
    }
    if(t[8].value!=""&&(t[8].value.indexOf(".")!=-1||t[8].value<1)){
        document.getElementById('message2').innerHTML="请检查日期字段!";return 0;
    }
    document.getElementById('message2').innerHTML=""
    data.id=pid;
    for(var i =0;i<t.length;i++){
        if(t[i].value!="") data[t[i].name] = t[i].value;
    }
    console.log(JSON.stringify(data));
    $.ajax({
        url:"rest/pro/editproduct",
        type:"POST",
        data:JSON.stringify(data),
        contentType:"application/json",
        // dataType:"json",
        success:function(res){
            if(res=="") alert("添加失败，请刷新重试")
            else{
                var html;
                $.each(res,function(index,item){
                    html=allhtml(index,item);
                    $('#t'+pid).after(html);
                    $('#t'+pid).remove();})
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
            name: "企业产品信息-" + new Date().getTime(),
            // Excel文件的名称
            filename: "企业产品信息-" + new Date().getTime() + ".xls",
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

function getFileType(filePath){
    var startIndex = filePath.lastIndexOf(".");
    if(startIndex != -1)
        return filePath.substring(startIndex+1, filePath.length);
    else return "";
}

function upload1(){
    var filePath = $("#excelimport").val();
    if (""!= filePath) {
        $("#photo1").show();
        var fileType = getFileType(filePath);
        if ("xls" != fileType) {
            $("#excelimport").val("");
            alert("请下载模板，或另存为.xls文件再重新上传");
        }
        else {
            $("#photo1").show();
            var formData = new FormData();
            // var name = $("#excelimport").val();
            var type="."+fileType;
            formData.append("file",$("#excelimport")[0].files[0]);  // 获取文件的内容
            formData.append("type",type);   //文件的路径
            $.ajax({
                type:'post',
                processData : false,
                contentType:false,
                url : "rest/pro/uploadfile",
                data:formData,
                success : function(data) {
                    document.getElementById("warning1").innerHTML=data;
                    // $("#warning1").show();
                    showall();
                },
                error : function(data){
                    alert("接口异常");
                }
            });
            $("#photo1").hide();
        }
    }
}




