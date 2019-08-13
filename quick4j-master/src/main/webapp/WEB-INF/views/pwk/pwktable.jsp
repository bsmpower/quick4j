<%--
  Created by IntelliJ IDEA.
  User: Deity
  Date: 2019/6/30
  Time: 22:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>排污口基本信息查询与维护</title>
</head>
<body>
<input type="button" id="button" value="提交" />
<table id="table"></table>
<script type ="text/javascript">
    $(document).ready(function(){
        var pwlurl = "rest/pwk/pwkshowlist"
        name = "沈阳";
        var pwkmessage = {};
        pwkmessage.name = name;
        console.log(pwkmessage);
//        var pwkmessage1 = JOSN.stringify(pwkmessage);
//        console.log(pwkmessage1);
        $.ajax({
            url:pwlurl,
            type:"POST",
            data:pwkmessage,
            contentType:"application/json",
            success:function(data){
                var dataList = data.data;
                var item;
                $.each(data,function (i,result) {
                    item="<tr><td>"+result['id']+"</td><td>"+result['tjyear']+"</td><td>"+result['tjmonth']+"</td><td>"
                        +result['tjday']+"</td><td>"+result['pwkCode']+"</td><td>" +result['name']+"</td><td>"+result['pwkName']+
                        "</td><td>"+result['pwkType']+"</td><td>"+result['city']+"</td><td>"+result['county']+"</td><td>" +
                        result['village']+"</td><td>"+result['address']+"</td><td>"+result['longitude']+"</td><td>"+result['latitude']+"</td><td>"+
                        result['isShenpi']+"</td><td>"+result['shenpi']+"</td><td>"+result['mainType']+"</td><td>"+result['dayAllow']+"</td><td>"+
                        result['yearAllow']+"</td><td>"+result['isPermit']+"</td><td>"+ result['pwCode']+"</td><td>"+result['usetime']+"</td><td>"+
                        result['isInlaw']+"</td><td>"+result['isReasonable']+"</td><td>"+result['position']+"</td><td>"+result['processTech']+"</td><td>"+
                        result['emissionMode']+"</td><td>"+result['pwqx']+"</td><td>"+result['riverMode']+"</td><td>"+result['riverName']+"</td><td>"+
                        result['riverLevel']+"</td><td>"+ result['riverType']+"</td><td>"+result['tosea']+"</td><td>"+result['seaMode']+"</td><td>"+
                        result['seaName']+"</td><td>"+result['emissionStandard']+"</td><td>"+ result['riverGnq']+"</td><td>"+result['riverSzmb']+"</td><td>"+
                        result['hyGnq']+"</td><td>"+result['hySzmb']+"</td><td>"+result['hyseaGnq']+"</td><td>"+result['hyseaSzmb']+"</td><td>"+
                        result['isGet']+"</td><td>"+result['nogetItems']+"</td></tr>";
                    $('#table').append(item);
                })
            }
        });
    })
//    var pwlurl = "rest/pwk/pwkshowlist"
//    $("#button").click(function () {
//        name = "沈阳";
//        var pwkmessage = {};
//        pwkmessage.name = name;
//        console.log(pwkmessage);
////        var pwkmessage1 = JOSN.stringify(pwkmessage);
////        console.log(pwkmessage1);
//        $.ajax({
//            url:pwlurl,
//            type:"POST",
//            data:pwkmessage,
//            contentType:"application/json",
//            success:function(data){
//                var dataList = data.data;
//                var item;
//                $.each(data,function (i,result) {
//                    item="<tr><td>"+result['id']+"</td><td>"+result['name']+"</td><td>"+result['pwkCode']+"</td></tr>";
//                    $('#table').append(item);
//                })
//            }
//            });
//    })
</script>
</body>
</html>
