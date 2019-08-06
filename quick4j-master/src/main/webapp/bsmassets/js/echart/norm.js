var flag=0;
$(function(){
    var tableCont = document.querySelector('#table-cont')
    function scrollHandle (e){
        var scrollTop = this.scrollTop;
        var a = this.querySelector('thead').getElementsByTagName("th");
        for(var i=0;i<a.length;i++)
            a[i].style.transform = 'translateY(' + scrollTop + 'px)';
        //this.querySelector('thead').style.transform = 'translateY(' + scrollTop + 'px)';
    }
    tableCont.addEventListener('scroll',scrollHandle);

    $("#mulpwkanalyze").click(function () {
        $('#mulModal').modal('show');
    });

    $("#reset").click(function () {
        $("#pwk0").val("");
        $("#pwk1").val("");
        $("#pwk2").val("");
        $("#pwk3").val("");
        $("#pwk4").val("");
        $("#pwk5").val("");
        $("#pwk6").val("");
    });
    //春赏百花秋望月，夏沐凉风冬听雪
    //若无闲事挂心头，便是人生好时节

    //多指标现值分析
    $("#xzanalyze").click(function() {
        var url = "rest/statistics/multarget"
        //排放口名字
        var pwkname = $("#pwk0").val();
        //排放口类型
        var pwkselect =$("#pwk1").val();
        //统计开始年份
        var tjstart = $("#pwk2").val();
        //统计结束年份
        var tjend = $("#pwk3").val();
        //监测年份
        var monitoryear = $("#pwk4").val();
        //监测月份
        var monitormonth = $("#pwk5").val();
        //达标类型
        var zbtype =$("#pwk6").val();

        var data={
            "pkwname":pwkname,
            "pwkselect":pwkselect,
            "tjstart":tjstart,
            "tjend":tjend,
            "monitoryear":monitoryear,
            "monitormonth":monitormonth,
            "zbtype":zbtype,
        };

        console.log(data);
        $.ajax({
            url:url,
            type:"POST",
            data:data,
            datatype:"json",
            success:function(data){
                console.log(data[0]);
                //下方列表
                console.log(data.pkwname);
                var attrlist={
                    "id":1,
                    "pwkName":pwkname,
                    "type":pwkselect,
                    "tjyear":monitoryear,
                    "tjmonth":monitormonth,
                    "salt":data[0],
                    "cod":data[1],
                    "nh3":data[2],
                    "p":data[3],
                    "n":data[4],
                    "cr6":data[5],
                    "cn":data[6],
                    "fdcjqs":data[7],
                    "bod5":data[8],
                    "xfw":data[9],
                    "oil":data[10],
                    "dzwy":data[11],
                    "phenol":data[12],
                    "as":data[13],
                    "hg":data[14],
                    "pb":data[15],
                    "cd":data[16],
                    "ph":data[17],
                    "chloride":data[18],
                    "sulfide":data[19],
                    "ylzbmhxj":data[20],
                };
                html = allhtml(attrlist);
                $('#tbodyone').empty();
                $('#tbodyone').append(html);
                //echart图
                var myChart = echarts.init(document.getElementById('main'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '排放口全指标达标情况'
                    },
                    tooltip: {},
                    legend: {
                        data: ['折线图', '柱状图']
                    },
                    xAxis: {
                        data: ["盐度", "化学需氧量", "氨氮", "总磷", "总氮", "六价铬",
                            "氰化物","粪大肠菌群数","五日生化需氧量","悬浮物","石油类",
                            "动植物油","挥发酚","总砷","总汞","总铅","总镉","PH值",
                            "氯化物","硫化物","阴离子表面活性剂"]
                    },
                    yAxis: {},
                    series: [{
                        name: '折线图',
                        type: 'line',
                        data: data
                    }, {
                        type: 'bar',
                        data: data,
                        name: '柱状图',
                        // barWidth: 20,
                    }]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        })
    });

    //多指标倍数分析
    $("#bsanalyze").click(function(){
        var url = "rest/statistics/multargetbs"
        //排放口名字
        var pwkname = $("#pwk0").val();
        //排放口类型
        var pwkselect =$("#pwk1").val();
        //统计开始年份
        var tjstart = $("#pwk2").val();
        //统计结束年份
        var tjend = $("#pwk3").val();
        //监测年份
        var monitoryear = $("#pwk4").val();
        //监测月份
        var monitormonth = $("#pwk5").val();
        //达标类型
        var zbtype =$("#pwk6").val();

        var data={
            "pkwname":pwkname,
            "pwkselect":pwkselect,
            "tjstart":tjstart,
            "tjend":tjend,
            "monitoryear":monitoryear,
            "monitormonth":monitormonth,
            "zbtype":zbtype,
        };

        $.ajax({
            url:url,
            type:"POST",
            data:data,
            datatype:"json",
            success:function(data){
                var attrlist={
                    "id":1,
                    "pwkName":pwkname,
                    "type":pwkselect,
                    "tjyear":monitoryear,
                    "tjmonth":monitormonth,
                    "salt":data[0],
                    "cod":data[1],
                    "nh3":data[2],
                    "p":data[3],
                    "n":data[4],
                    "cr6":data[5],
                    "cn":data[6],
                    "fdcjqs":data[7],
                    "bod5":data[8],
                    "xfw":data[9],
                    "oil":data[10],
                    "dzwy":data[11],
                    "phenol":data[12],
                    "as":data[13],
                    "hg":data[14],
                    "pb":data[15],
                    "cd":data[16],
                    "ph":data[17],
                    "chloride":data[18],
                    "sulfide":data[19],
                    "ylzbmhxj":data[20],
                };
                html = allhtml(attrlist);;
                $('#tbodyone').empty();
                $('#tbodyone').append(html);
                var myChart = echarts.init(document.getElementById('main'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '排放口全指标达标情况'
                    },
                    tooltip: {},
                    legend: {
                        data: ['折线图', '柱状图']
                    },
                    xAxis: {
                        data: ["盐度", "化学需氧量", "氨氮", "总磷", "总氮", "六价铬",
                            "氰化物","粪大肠菌群数","五日生化需氧量","悬浮物","石油类",
                            "动植物油","挥发酚","总砷","总汞","总铅","总镉","PH值",
                            "氯化物","硫化物","阴离子表面活性剂"]
                    },
                    yAxis: {},
                    series: [{
                        name: '折线图',
                        type: 'line',
                        data: data
                    }, {
                        type: 'bar',
                        data: data,
                        name: '柱状图',
                        // barWidth: 20,
                    }]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        });
    });

    //多年单月单指标现值分析
    $("#dndyxzanalyze").click(function () {
        var url = "rest/statistics/dndydtarget";

        //排放口名字
        var pwkname = $("#pwk0").val();
        //排放口类型
        var pwkselect =$("#pwk1").val();
        //统计开始年份
        var tjstart = $("#pwk2").val();
        //统计结束年份
        var tjend = $("#pwk3").val();
        //监测年份
        var monitoryear = $("#pwk4").val();
        //监测月份
        var monitormonth = $("#pwk5").val();
        //达标类型
        var zbtype =$("#pwk6").val();

        var data={
            "pwkname":pwkname,
            "pwkselect":pwkselect,
            "tjstart":tjstart,
            "tjend":tjend,
            "monitoryear":monitoryear,
            "monitormonth":monitormonth,
            "zbtype":zbtype,
        };

        $.ajax({
            url:url,
            type:"POST",
            data:data,
            datatype:"json",
            success:function(data){
                var attrlist={
                    "id":1,
                    "pwkName":pwkname,
                    "type":pwkselect,
                    "tjstart":tjstart,
                    "tjend":tjend,
                    "tjmonth":monitormonth,
                    "salt":data[0],
                    "cod":data[1],
                    "nh3":data[2],
                    "p":data[3],
                    "n":data[4],
                    "cr6":data[5],
                    "cn":data[6],
                    "fdcjqs":data[7],
                    "bod5":data[8],
                    "xfw":data[9],
                    "oil":data[10],
                    "dzwy":data[11],
                    "phenol":data[12],
                    "as":data[13],
                    "hg":data[14],
                    "pb":data[15],
                    "cd":data[16],
                    "ph":data[17],
                    "chloride":data[18],
                    "sulfide":data[19],
                    "ylzbmhxj":data[20],
                };
                html = dndyallhtml(attrlist);;
                $('#tbodyone').empty();
                $('#tbodyone').append(html);

                var myChart = echarts.init(document.getElementById('main'));

                var dnlist = new Array();
                for(i = parseInt(tjstart); i <= parseInt(tjend); i++){
                    dnlist.push(i);
                }
                console.log(dnlist);
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '排放口全指标达标情况'
                    },
                    tooltip: {},
                    legend: {
                        data: ['折线图', '柱状图']
                    },
                    xAxis: {
                        data: ["盐度", "化学需氧量", "氨氮", "总磷", "总氮", "六价铬",
                            "氰化物","粪大肠菌群数","五日生化需氧量","悬浮物","石油类",
                            "动植物油","挥发酚","总砷","总汞","总铅","总镉","PH值",
                            "氯化物","硫化物","阴离子表面活性剂"]
                    },
                    yAxis: {},
                    series: [{
                        name: '折线图',
                        type: 'line',
                        data: data
                    }, {
                        type: 'bar',
                        data: data,
                        name: '柱状图',
                        // barWidth: 20,
                    }]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        });

    })

    //多年单月单指标倍数分析
});
function addmessage() {
    var temp1 = "<div class=\"input-group\">\n" +
        "                        <span class=\"input-group-addon\">排污口名称</span>\n" +
        "                        <input id=\"pwkname\" name=\"tjyear\" type=\"text\" class=\"form-control\" placeholder=\"请输入指定的排放口名称\">\n" +
        "                        <span class=\"input-group-addon\">所属排放口类别</span>\n" +
        "\n" +
        "                        <select name=\"pwkType\" class=\"form-control\" onchange=\"editpre()\">\n" +
        "                            <option value=\"\"></option>\n" +
        "                            <option value=\"工业废水排污口\">工业废水排污口</option>\n" +
        "                            <option value=\"工业生活混合污水排污口\">工业生活混合污水排污口</option>\n" +
        "                            <option value=\"生活污水排污口\">生活污水排污口</option>\n" +
        "                            <option value=\"畜禽养殖排污口\">畜禽养殖排污口</option>\n" +
        "                            <option value=\"农田退水入海口\">农田退水入海口</option>\n" +
        "                            <option value=\"水产养殖排污口\">水产养殖排污口</option>\n" +
        "                            <option value=\"雨污混合排污口\">雨污混合排污口</option>\n" +
        "                            <option value=\"雨水排放口\">雨水排放口</option>\n" +
        "                            <option value=\"泄洪口\">泄洪口</option>\n" +
        "                            <option value=\"其他\">其他</option>\n" +
        "                        </select>\n" +
        "<span id=\"addmul\" onclick=\"addmessage()\" class=\"input-group-addon glyphicon glyphicon-plus\" aria-hidden=\"true\" style=\"cursor:pointer;\">\n" +
        "\n" +
        "                        </span>\n" +
        "                    </div>";
    if(flag == 0){
        $("#div_0").html(temp1);
        $("#div_0").show();
        flag=flag+1;
    }else if(flag == 1){
        $("#div_1").html(temp1);
         $("#div_1").show();
        flag=flag+1;
    }else if(flag == 2){
        $("#div_2").html(temp1);
        $("#div_2").show();
        flag=flag+1;
    }else if(flag == 3){
        $("#div_3").html(temp1);
        $("#div_3").show();
        flag=flag+1;
    }else if(flag == 4){
        $("#div_4").html(temp1);
        $("#div_4").show();
        flag=flag+1;
    }else if(flag == 5){
        $("#div_5").html(temp1);
        $("#div_5").show();
        flag=flag+1;
    }else if(flag == 6){
        $("#div_6").html(temp1);
        $("#div_6").show();
        flag=flag+1;
    }else if(flag == 7){
        $("#div_7").html(temp1);
        $("#div_7").show();
        flag=flag+1;
    }else if(flag == 8){
        $("#div_8").html(temp1);
        $("#div_8").show();
        flag=flag+1;
    }else if(flag == 9){
        $("#div_9").html(temp1);
        $("#div_9").show();
        flag=flag+1;
    }else if(flag == 10){
        $("#div_10").html(temp1);
        $("#div_10").show();
        flag=flag+1;
    }
}

function allhtml(item) {
    var allhtml= "<tr id=\"t"+item.id+"\" class='noExl'><td><input type=\"checkbox\" name=\"piliang\" value=\""+item.id+"\"/></td><td>"+item.id+
        "</td><td><a href=\""+item.id+"\" onclick=\"editfunc(this);return false;\"><span class=\"glyphicon glyphicon-edit\"></span></a>"+
        "</td><td><a href=\""+item.id+"\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>"+
        "</td><td>"+item.pwkName+"</td><td>"+item.type+"</td><td>"+item.tjyear+"</td><td>"+item.tjmonth+
        "</td><td>"+item.salt+"</td><td>"+item.cod+"</td><td>"+item.nh3+"</td><td>"+item.p+"</td><td>"+item.n+
        "</td><td>"+item.cr6+"</td><td>"+item.cn+"</td><td>"+item.fdcjqs+"</td><td>"+item.bod5+"</td><td>"+item.xfw+"</td><td>"+item.oil+"</td><td>"+item.dzwy+"</td><td>"+item.phenol+
        "</td><td>"+item.as+"</td><td>"+item.hg+"</td><td>"+item.pb+"</td><td>"+item.cd+"</td><td>"+item.ph+"</td><td>"+item.chloride+"</td><td>"+item.sulfide+"</td><td>"+item.ylzbmhxj+
        "</td></tr>";
    return allhtml;
}
function  dndyallhtml(item) {
    var allhtml= "<tr id=\"t"+item.id+"\" class='noExl'><td><input type=\"checkbox\" name=\"piliang\" value=\""+item.id+"\"/></td><td>"+item.id+
        "</td><td><a href=\""+item.id+"\" onclick=\"editfunc(this);return false;\"><span class=\"glyphicon glyphicon-edit\"></span></a>"+
        "</td><td><a href=\""+item.id+"\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>"+
        "</td><td>"+item.pwkName+"</td><td>"+item.type+"</td><td>"+item.tjstart+"</td><td>"+item.tjend+"</td><td>"+item.tjmonth+
        "</td><td>"+item.salt+"</td><td>"+item.cod+"</td><td>"+item.nh3+"</td><td>"+item.p+"</td><td>"+item.n+
        "</td><td>"+item.cr6+"</td><td>"+item.cn+"</td><td>"+item.fdcjqs+"</td><td>"+item.bod5+"</td><td>"+item.xfw+"</td><td>"+item.oil+"</td><td>"+item.dzwy+"</td><td>"+item.phenol+
        "</td><td>"+item.as+"</td><td>"+item.hg+"</td><td>"+item.pb+"</td><td>"+item.cd+"</td><td>"+item.ph+"</td><td>"+item.chloride+"</td><td>"+item.sulfide+"</td><td>"+item.ylzbmhxj+
        "</td></tr>";
    return allhtml;
}