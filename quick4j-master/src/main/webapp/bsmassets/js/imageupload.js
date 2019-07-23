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
        "</td><td><a href=\"" + item.id + "\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>" + "</td><td>" + item.pwkid + "</td><td>" + item.pwkname + "</td><td>" + item.createtime + "</td><td>" + item.imagename +
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
