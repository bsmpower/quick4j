function edit(){
    $('#myModal').modal('show')
}


function editpre() {
    var data={};
    var t = $('#addform').serializeArray();
    var list = $("#myModal").find("input")
    data.pwkType = t[0].value;
    if(t[0].value!=""){
        $.ajax({
            url:"rest/standard/select",
            type:"POST",
            data:JSON.stringify(data),
            contentType:"application/json",
            dataType:"json",
            success:function(res){
                list.eq(0).val(res.salt);
                list.eq(1).val(res.cod);
                list.eq(2).val(res.nh3);
                list.eq(3).val(res.p);
                list.eq(4).val(res.n);
                list.eq(5).val(res.cr6);
                list.eq(6).val(res.cn);
                list.eq(7).val(res.fdcjqs);
                list.eq(8).val(res.bod5);
                list.eq(9).val(res.xfw);
                list.eq(10).val(res.oil);
                list.eq(11).val(res.dzwy);
                list.eq(12).val(res.phenol);
                list.eq(13).val(res.as);
                list.eq(14).val(res.hg);
                list.eq(15).val(res.pb);
                list.eq(16).val(res.cd);
                list.eq(17).val(res.ph1);
                list.eq(18).val(res.ph2);
                list.eq(19).val(res.chloride);
                list.eq(20).val(res.sulfide);
                list.eq(21).val(res.ylzbmhxj);
            },
            error: function (e) {
                alert("接口异常，请联系管理员");
            }
        });
    }
    else{
        for(i=0;i<22;i++)  list.eq(i).val("null");
    }
}

function add() {
    var data={};
    var t = $('#addform').serializeArray();
    if(t[0].value==""){alert("请选择类型");return 0;}
    for(var i =0;i<t.length;i++){
        if(t[i].value==""||t[i].value<0) t[i].value=0;
        data[t[i].name] = t[i].value;
    }
    $.ajax({
        url:"rest/standard/update",
        type:"POST",
        data:JSON.stringify(data),
        contentType:"application/json",
        dataType:"json",
        success:function(res){
            alert("修改成功")
        },
        error: function (e) {
            alert("接口异常，请联系管理员");
        }
    });
}



function edit2(){
    $('#myModal2').modal('show')
}


function editpre2() {
    var data={};
    var t = $('#addform2').serializeArray();
    var list = $("#myModal2").find("input")
    data.dmGoal = t[0].value;
    if(t[0].value!=""){
        $.ajax({
            url:"rest/dmstandard/select",
            type:"POST",
            data:JSON.stringify(data),
            contentType:"application/json",
            dataType:"json",
            success:function(res){
                list.eq(0).val(res.salt);
                list.eq(1).val(res.cod);
                list.eq(2).val(res.nh3);
                list.eq(3).val(res.p);
                list.eq(4).val(res.n);
                list.eq(5).val(res.cr6);
                list.eq(6).val(res.cn);
                list.eq(7).val(res.fdcjqs);
                list.eq(8).val(res.bod5);
                list.eq(9).val(res.xfw);
                list.eq(10).val(res.oil);
                list.eq(11).val(res.flow);
                list.eq(12).val(res.phenol);
                list.eq(13).val(res.as);
                list.eq(14).val(res.hg);
                list.eq(15).val(res.pb);
                list.eq(16).val(res.cd);
                list.eq(17).val(res.ph1);
                list.eq(18).val(res.ph2);
                list.eq(19).val(res.chloride);
                list.eq(20).val(res.sulfide);
                list.eq(21).val(res.ylzbmhxj);
            },
            error: function (e) {
                alert("接口异常，请联系管理员");
            }
        });
    }
    else{
        for(i=0;i<22;i++)  list.eq(i).val("null");
    }
}

function add2() {
    var data={};
    var t = $('#addform2').serializeArray();
    if(t[0].value==""){alert("请选择类型");return 0;}
    for(var i =0;i<t.length;i++){
        if(t[i].value==""||t[i].value<0) t[i].value=0;
        data[t[i].name] = t[i].value;
    }
    $.ajax({
        url:"rest/dmstandard/update",
        type:"POST",
        data:JSON.stringify(data),
        contentType:"application/json",
        dataType:"json",
        success:function(res){
            alert("修改成功")
        },
        error: function (e) {
            alert("接口异常，请联系管理员");
        }
    });
}


