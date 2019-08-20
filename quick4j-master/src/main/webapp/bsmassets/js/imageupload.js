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
    var showlist = "<tr id=\"t" + item.id + "\" class='noExl'><td><input type=\"checkbox\" name=\"piliang\" value=\"" + item.id + "\"/></td><td>" + item.id + "</td><td><a href=\"" + item.id + "\" onclick=\"editfunc(this);return false;\"><span class=\"glyphicon glyphicon-edit\"></span></a>" +
        "</td><td><a href=\"" + item.id + "\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>" + "</td><td>" + item.pwkid + "</td><td>" + item.pwkname + "</td><td>"+ item.snst +"</td><td>" + item.createtime + "</td><td>" + item.imagename +
        "</td><td><a type=\"button\" class=\"btnz btnz-info\" download=\""+item.pwkname+".jpg"+"\" href=\"" +item.path +"\">" + "<i class='glyphicon glyphicon-download'></i>" +"下载"+"</a></td></tr>";
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

    $.ajax({
       type:"POST",
       url:"rest/upload/imageinit",
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

    $("#upload").click(function () {
        var myform = new FormData();
        myform.append('file',$('#imagefile')[0].files[0]);
        myform.append('pwkid',$('#pwkid').val());
        myform.append('pwkname',$('#pwkname').val());
        myform.append('snst',$('#snst').val());

        console.log(myform);
        $.ajax({
            type: "POST",
            url: "rest/upload/uploadImage",
            processData: false,
            contentType: false,
            data: myform,
            success: function (data) {
                if (data == "") {    document.getElementById("jindutiao").setAttribute("style", "width:60%;");
                    $("#jindutiao").text("60%");
                } else {
                    $('#tbodyone').empty();
                    document.getElementById("jindutiao").setAttribute("style", "width:100%;");
                    $("#jindutiao").text("100%");
                    var html;
                    $.each(data, function (index, item) {
                        html = showlist(index, item);
                        $('#tbodyone').append(html);
                    })
                    nullto();

                }
            },
            error: function (e) {
                document.getElementById("jindutiao").setAttribute("style", "width:60%;");
                $("#jindutiao").text("20%")
            }
        });
    });
});
function deletefunc(self){

    info=self.href.split("/");
    var id=info[info.length-1];
    alert(id);
    if (confirm("是否要删除该记录？")){
        $.ajax({
            url:"rest/upload/deletePicture",
            data:{"id":id},
            type: "POST",
            dataType: "json",
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
};
function  searchfunc() {
    var searchcondition = $("#searchcondition").val();
    var url = "rest/upload/searchdata";
    $.ajax({
        url:url,
        data:{"searchcondition":searchcondition},
        type:"POST",
        datatype:"json",
        success:function (data) {
            alert(data);
            $('#tbodyone').empty();
            var html;
            $.each(data, function (index, item) {
                html = showlist(index, item);
                $('#tbodyone').append(html);
            })
            nullto();
        }

    })
}