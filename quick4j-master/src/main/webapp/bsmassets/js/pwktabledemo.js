$(function(){
    $("#submitPwk").click(function(){
       var addurl = "/rest/pwk/addpwk";
       pwkCode = "1";
       var addpwkmsc = {};
       addpwkmsc.pwkCode = pwkCode;
        console.log(addpwkmsc);
       $.ajax({
           url:addurl,
           type:"POST",
           data:JSON.stringify(addpwkmsc),
           datatype:"json",
           contentType:"application/json",
           success:function(data){
               if(data.success){
                   alert("数据添加成功！")
               }else{
                   alert(data.errMsg);
               }
           }
       });
        // $.getJSON(addurl, function(data){
        //     if(data.success)
        // });
    });

    /**
     * 去掉model的遮罩层
     * */
    $("#closeMod").click(function () {
        $('.modal-backdrop').remove();
    })
});