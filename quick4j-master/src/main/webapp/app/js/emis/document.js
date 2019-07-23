function allhtml(index,item) {
    var allhtml= "<tr id=\"t"+item.id+"\"><td>"+item.id+
        "</td><td>"+item.name+"</td><td>"+item.type+"</td><td>"+item.generateDate+
        "</td><td><a href=\"wdupload/"+item.name+item.generateDate+item.generateTime+"."+item.type+"\" download=\""+item.name+"."+item.type+"\" ><span class=\"glyphicon glyphicon-download-alt\"></span></a>"+
        "</td><td><a href=\""+item.id+"\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>"+
        "</td></tr>";
    return allhtml;
}
function listall(){
    $.ajax({
        url:"rest/doc/list",
        type:"POST",
        dataType:"json",
        success:function(data){
            $('#tbodyone').empty();
            var html;
            $.each(data,function(index,item){
                html=allhtml(index,item);
                $('#tbodyone').append(html);})
        },
        error: function (e) {
            alert("接口异常，请联系管理员");
        }
    });
}
$(document).ready(function(){
    $("#photo").hide();
    $('input[id=docimport]').change(function() {
        $('#photoCover').val($(this).val());
    });
    listall();
});

function select() {
    var str = document.getElementById("str").value;
    $.ajax({
        url:"rest/doc/select?str="+str,
        type:"POST",
        contentType:"application/json",
        dataType:"json",
        success:function(res){
            $('#tbodyone').empty();
            var html;
            $.each(res,function(index,item){
                html=allhtml(index,item);
                $('#tbodyone').append(html);})
        },
        error: function (e) {
            alert("接口异常，请联系管理员");
        }
    });
}

function deletefunc(self){
    var t = new Array();
    var url;
    t = self.href.split("/");
    var id = t[t.length-1];
    con=confirm("确定删除该文件吗");
    if(con==true){
        $.ajax({
            url:"rest/doc/delete?id="+id,
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

function upload(){
    var filePath = $("#docimport").val();
    if (""!= filePath) {
        $("#photo").show();
        var formData = new FormData();
        formData.append("file",$("#docimport")[0].files[0]);  // 获取文件的内容
        console.log(filePath);
        $.ajax({
            type:'post',
            processData : false,
            contentType:false,
            url : "rest/doc/uploadfile",
            data:formData,
            success : function(data) {
                alert(data);
                listall();
            },
            error : function(data){
                alert("接口异常");
            }
        });
        $("#photo").hide();
    }
}