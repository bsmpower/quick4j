

$(document).ready(function(){
    $("#photo1").hide();
    $("#photo2").hide();
    // $("#warning1").hide();
    // $("#warning2").hide();
});

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
            alert("请上传.xls表格文件");
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
                url : "/rest/emis/uploadfile",
                data:formData,
                success : function(data) {
                    document.getElementById("warning1").innerHTML=data;
                    // $("#warning1").show();
            },
            error : function(data){
                alert("接口异常");
            }
        });
             $("#photo1").hide();
        }
    }
}

function upload2(){
    var filePath = $("#excelimport2").val();
    if (""!= filePath) {
        var fileType = getFileType(filePath);
        if ("xls" != fileType ) {
            $("#excelimport2").val("");
            alert("请上传.xls表格文件");
        }
        else {
            $("#photo2").show();
            var formData = new FormData();
            // var name = $("#excelimport").val();
            var type="."+fileType;
            formData.append("file",$("#excelimport2")[0].files[0]);  // 获取文件的内容
            formData.append("type",type);   //文件的路径
            $.ajax({
                type:'post',
                processData : false,
                contentType:false,
                url : "/rest/sec/upload",
                data:formData,
                success : function(data) {
                    document.getElementById("warning2").innerHTML=data;

                    // $("#warning2").show();
                },
                error : function(data){
                    alert("接口异常");
                }
            });
            $("#photo2").hide();
        }

    }
}


