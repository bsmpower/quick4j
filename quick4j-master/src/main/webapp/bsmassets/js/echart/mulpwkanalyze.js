var flag=0;
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
// initMap();
var map, layer, graphicLayer;

$(function () {
    $("#map222").css("display","none");

    var tableCont = document.querySelector('#table-cont')

    function scrollHandle(e) {
        var scrollTop = this.scrollTop;
        var a = this.querySelector('thead').getElementsByTagName("th");
        for (var i = 0; i < a.length; i++)
            a[i].style.transform = 'translateY(' + scrollTop + 'px)';
        //this.querySelector('thead').style.transform = 'translateY(' + scrollTop + 'px)';
    }

    tableCont.addEventListener('scroll', scrollHandle);

    $("#mulpwkanalyze").click(function () {
        $('#mulModal').modal('show');
    });

    $("#mulpwkanalyze1").click(function () {
        $('#mulModal1').modal('show');
    });

    //后台处理不了js可以处理
    $("#mulpwkfx").click(function () {
        var selectemission = {};
        var conditions = [];
        var pwkName = $("#pwkname").val();
        var type = $("#mulpwkType").val();
        var year = $("#pwk7").val();
        var month = $("#pwk8").val();
        selectemission.pwkName = $("#pwkname").val();
        selectemission.type = $("#mulpwkType").val();

        selectemission.tjyear =  $("#pwk7").val();
        selectemission.tjmonth = $("#pwk8").val();
        var select1 = document.getElementById("select1");
        if (select1) {
            var salt = select1.innerHTML;
            conditions.push(salt);
        }
        console.log(selectemission.salt)

        var select2 = document.getElementById("select2");
        if (select2) {
            var COD = select2.innerHTML;
            conditions.push(COD);
        }

        var select3 = document.getElementById("select3");
        if (select3) {
            var NH3 = select3.innerHTML;
            conditions.push(NH3);
        }

        var select4 = document.getElementById("select4");
        if (select4) {
            var P = select4.innerHTML;
            conditions.push(P);
        }

        var select5 = document.getElementById("select5");
        if (select5) {
            var N = select5.innerHTML;
            conditions.push(N);
        }

        var select6 = document.getElementById("select6");
        if (select6) {
            var Cr6 = select6.innerHTML;
            conditions.push(Cr6);
        }

        var select7 = document.getElementById("select7");
        if (select7) {
            var CN = select7.innerHTML;
            conditions.push(CN);
        }

        var select8 = document.getElementById("select8");
        if (select8) {
            var fdcjqs = select8.innerHTML;
            conditions.push(fdcjqs);
        }

        var select9 = document.getElementById("select9");
        if (select9) {
            var BOD5 = select9.innerHTML;
            conditions.push(BOD5);
        }
        var select10 = document.getElementById("select10");
        if (select10) {
            var xfw = select10.innerHTML;
            conditions.push(xfw);
        }

        var select11 = document.getElementById("select11");
        if (select11) {
            var oil = select11.innerHTML;
            conditions.push(oil);
        }

        var select12 = document.getElementById("select12");
        if (select12) {
            var dzwy = select12.innerHTML;
            conditions.push(dzwy);
        }

        var select13 = document.getElementById("select13");
        if (select13) {
            var phenol = select13.innerHTML;
            conditions.push(phenol);
        }

        var select14 = document.getElementById("select14");
        if (select14) {
            var As = select14.innerHTML;
            conditions.push(As);
        }

        var select15 = document.getElementById("select15");
        if (select15) {
            var Hg = select15.innerHTML;
            conditions.push(Hg);
        }

        var select16 = document.getElementById("select16");
        if (select16) {
            var Pb = select16.innerHTML;
            conditions.push(Pb);
        }

        var select17 = document.getElementById("select17");
        if (select17) {
            var Cd = select17.innerHTML;
            conditions.push(Cd);
        }

        var select18 = document.getElementById("select18");
        if (select18) {
            var PH = select18.innerHTML;
            conditions.push(PH);
        }

        var select19 = document.getElementById("select19");
        if (select19) {
            var chloride = select19.innerHTML;
            conditions.push(chloride);
        }

        var select20 = document.getElementById("select20");
        if (select20) {
            var sulfide = select20.innerHTML;
            conditions.push(sulfide);
        }

        var select21 = document.getElementById("select21");
        if (select21) {
            var ylzbmhxj = select21.innerHTML;
            conditions.push(ylzbmhxj);
        }
        var url = "rest/analyze/mulpwkfx";
        console.log(selectemission);
        console.log(conditions);
        $.ajax({
            url: url,
            type: "POST",
            data: JSON.stringify(selectemission),
            datatype: "json",
            contentType: "application/json",
            success:function (data) {
                if(data == ""){
                    alert("该排放口没有数据");
                }else{
                    $('#tbodyone').empty();
                    var allvalue=[];
                    var value = [];
                    var pwknamelist = [];
                    $.each(data,function (index,item) {
                        pwknamelist.push(item.pwkName);
                        //放到列表中
                        var lon = item.longitude;
                        var lat = item.latitude;
                        var cod = item.cod;
                        console.log(lon);
                        console.log(lat);
                        console.log(cod);
                        for(var i = 0; i<conditions.length;i++){
                            if(conditions[i]=="盐度"){
                                value.push(item.salt);
                            }
                            if(conditions[i]=="化学需氧量"){
                                value.push(item.cod);
                            }
                            if(conditions[i]=="氨氮"){
                                value.push(item.nh3);
                            }
                            if(conditions[i]=="总磷"){
                                value.push(item.p);
                            }
                            if(conditions[i]=="总氮"){
                                value.push(item.n);
                            }
                            if(conditions[i]=="六价铬"){
                                value.push(item.cr6);
                            }
                            if(conditions[i]=="氰化物"){
                                value.push(item.cn);
                            }
                            if(conditions[i]=="粪大肠菌群数"){
                                value.push(item.fdcjqs);
                            }
                            if(conditions[i]=="五日生化需氧量"){
                                value.push(item.bod5);
                            }
                            if(conditions[i]=="悬浮物"){
                                value.push(item.xfw);
                            }
                            if(conditions[i]=="石油类"){
                                value.push(item.oil);
                            }
                            if(conditions[i]=="动植物油"){
                                value.push(item.dzwy);
                            }
                            if(conditions[i]=="挥发酚"){
                                value.push(item.phenol);
                            }
                            if(conditions[i]=="总砷"){
                                value.push(item.as);
                            }
                            if(conditions[i]=="总汞"){
                                value.push(item.hg);
                            }
                            if(conditions[i]=="总铅"){
                                value.push(item.pb);
                            }
                            if(conditions[i]=="总镉"){
                                value.push(item.cd);
                            }
                            if(conditions[i]=="PH值"){
                                value.push(item.ph);
                            }
                            if(conditions[i]=="氯化物"){
                                value.push(item.chloride);
                            }
                            if(conditions[i]=="硫化物"){
                                value.push(item.sulfide);
                            }
                            if(conditions[i]=="阴离子表面活性剂"){
                                value.push(item.ylzbmhxj);
                            }
                        }
                        console.log(value);
                        allvalue.push(value);
                        for(var j = 0; j<value.length; j++){
                            var attrlist={
                                "id":index,
                                "pwkName":pwkName,
                                "type":type,
                                "city":item.city,
                                "year": year,
                                "month":month,
                                "zbname":conditions[j],
                                "value":value[j],
                            };
                            html = showlist(attrlist);
                            $('#tbodyone').append(html);
                            console.log(attrlist);
                        }
                        // html = showlist(index, item);
                        // console.log(html);
                        // $('#tbodyone').append(html);
                        //index代表数组下标
                        //item代表每个元素内容
                    })

                    var myChart = echarts.init(document.getElementById('main'));

                    // 指定图表的配置项和数据
                    var option = {
                        title: {
                            text: '单排放口多指标分析'
                        },
                        tooltip: {},
                        legend: {
                            data: ['折线图', '柱状图']
                        },
                        // legend: {
                        //     data: conditions
                        // },
                        // xAxis: [
                        //     {
                        //         type: 'category',
                        //         axisTick: {show: false},
                        //         data: ["s","s","s","s"]
                        //     }
                        // ],
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        // series: [
                        //     {
                        //         name: conditions[0],
                        //         type: 'bar',
                        //         barGap: 0,
                        //         data: [320, 332, 301, 334]
                        //     },
                        //     {
                        //         name: conditions[1],
                        //         type: 'bar',
                        //         data: [220, 182, 191, 234]
                        //     },
                        //     {
                        //         name: conditions[2],
                        //         type: 'bar',
                        //         data: [150, 232, 201, 154]
                        //     },
                        //     {
                        //         name: conditions[3],
                        //         type: 'bar',
                        //         data: [98, 77, 101, 99]
                        //     }
                        // ]
                        xAxis: {
                            data: conditions
                        },
                        yAxis: {},
                        series: [{
                            name: '折线图',
                            type: 'line',
                            data: value
                        }, {
                            type: 'bar',
                            data: value,
                            name: '柱状图',
                            barWidth: 20,
                            itemStyle: {
                                color: 'orange',
                                opacity: 0.5
                            }
                        }]
                    };

                    // 使用刚指定的配置项和数据显示图表。
                    myChart.setOption(option);
                }
            }
        });
    });

    $("#mulpwkfx1").click(function () {
        count = count * 2;
        var conditions = [];
        var pwktypelist = [];
        var pwknamelist = [];
        var t = $('#addform4').serializeArray();
        for (i = 0; i < count; i++) {
            var pwkname = t[i].value;
            var mulpwkType = t[i + 1].value;
            pwknamelist.push(pwkname);
            pwktypelist.push(mulpwkType);
            i = i + 1;
        }

        var jcyear = $("#pwk9").val();
        var jcmonth = $("#pwk10").val();

        var mulselect1 = document.getElementById("mulselect1");
        if (mulselect1) {
            var salt = mulselect1.innerHTML;
            conditions.push(salt);
        }

        var mulselect2 = document.getElementById("mulselect2");
        if (mulselect2) {
            var COD = mulselect2.innerHTML;
            conditions.push(COD);
        }

        var mulselect3 = document.getElementById("mulselect3");
        if (mulselect3) {
            var NH3 = mulselect3.innerHTML;
            conditions.push(NH3);
        }

        var mulselect4 = document.getElementById("mulselect4");
        if (mulselect4) {
            var P = mulselect4.innerHTML;
            conditions.push(P);
        }

        var mulselect5 = document.getElementById("mulselect5");
        if (mulselect5) {
            var N = mulselect5.innerHTML;
            conditions.push(N);
        }

        var mulselect6 = document.getElementById("mulselect6");
        if (mulselect6) {
            var Cr6 = mulselect6.innerHTML;
            conditions.push(Cr6);
        }

        var mulselect7 = document.getElementById("mulselect7");
        if (mulselect7) {
            var CN = mulselect7.innerHTML;
            conditions.push(CN);
        }

        var mulselect8 = document.getElementById("mulselect8");
        if (mulselect8) {
            var fdcjqs = mulselect8.innerHTML;
            conditions.push(fdcjqs);
        }

        var mulselect9 = document.getElementById("mulselect9");
        if (mulselect9) {
            var BOD5 = mulselect9.innerHTML;
            conditions.push(BOD5);
        }
        var mulselect10 = document.getElementById("mulselect10");
        if (mulselect10) {
            var xfw = mulselect10.innerHTML;
            conditions.push(xfw);
        }

        var mulselect11 = document.getElementById("mulselect11");
        if (mulselect11) {
            var oil = mulselect11.innerHTML;
            conditions.push(oil);
        }

        var mulselect12 = document.getElementById("mulselect12");
        if (mulselect12) {
            var dzwy = mulselect12.innerHTML;
            conditions.push(dzwy);
        }

        var mulselect13 = document.getElementById("mulselect13");
        if (mulselect13) {
            var phenol = mulselect13.innerHTML;
            conditions.push(phenol);
        }

        var mulselect14 = document.getElementById("mulselect14");
        if (mulselect14) {
            var As = mulselect14.innerHTML;
            conditions.push(As);
        }

        var mulselect15 = document.getElementById("mulselect15");
        if (mulselect15) {
            var Hg = mulselect15.innerHTML;
            conditions.push(Hg);
        }

        var mulselect16 = document.getElementById("mulselect16");
        if (mulselect16) {
            var Pb = mulselect16.innerHTML;
            conditions.push(Pb);
        }

        var mulselect17 = document.getElementById("mulselect17");
        if (mulselect17) {
            var Cd = mulselect17.innerHTML;
            conditions.push(Cd);
        }

        var mulselect18 = document.getElementById("mulselect18");
        if (mulselect18) {
            var PH = mulselect18.innerHTML;
            conditions.push(PH);
        }

        var mulselect19 = document.getElementById("mulselect19");
        if (mulselect19) {
            var chloride = mulselect19.innerHTML;
            conditions.push(chloride);
        }

        var mulselect20 = document.getElementById("mulselect20");
        if (mulselect20) {
            var sulfide = mulselect20.innerHTML;
            conditions.push(sulfide);
        }

        var mulselect21 = document.getElementById("mulselect21");
        if (mulselect21) {
            var ylzbmhxj = mulselect21.innerHTML;
            conditions.push(ylzbmhxj);
        }
        var data={
            "pwknamelist":JSON.stringify(pwknamelist),
            "pwktypelist":JSON.stringify(pwktypelist),
            "jcyear":jcyear,
            "jcmonth":jcmonth,
            "conditions":JSON.stringify(conditions)
        };
        var url = "rest/analyze/mulpwkzbfx";
        $.ajax({
            url: url,
            type: "POST",
            data: data,
            datatype: "json",
            success:function (data) {
                if(data == ""){
                    alert("该排放口没有数据");
                }else{
                    $('#tbodyone').empty();
                    var index = 1;
                    for(var j = 0; j < conditions.length; j++) {
                        for(var k = 0; k <pwknamelist.length; k++){
                            var attrlist = {
                                "id": index,
                                "pwkName": pwknamelist[k],
                                "type": pwktypelist[k],
                                "city": "辽宁省",
                                "year": jcyear,
                                "month": jcmonth,
                                "zbname": conditions[j],
                                "zbdata": data[j][k],
                            };
                            console.log(data[j][k]);
                            html = mulshowlist(attrlist);
                            $('#tbodyone').append(html);
                        }
                        index=index+1;
                    }
                    var SeriesTotal = [];

                    var myChart = echarts.init(document.getElementById('main'));
                    for(var i = 0; i<conditions.length;i++)
                    {
                        var item = {
                            name: conditions[i],
                            type: 'bar',
                            barGap: 0,
                            data: data[i]
                        };
                        SeriesTotal.push(item);
                    }

                    }
                    // 指定图表的配置项和数据
                    var option = {
                        title: {
                            text: '多排放口多指标分析'
                        },
                        tooltip: {},

                        legend: {
                            data: conditions
                        },
                        toolbox: {
                            show: true,
                            orient: 'vertical',
                            left: 'right',
                            top: 'center',
                            feature: {
                                mark: {show: true},
                                dataView: {show: true, readOnly: false},
                                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                                restore: {show: true},
                                saveAsImage: {show: true}
                            }
                        },
                        xAxis: {
                                data: pwknamelist
                            },

                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        dataZoom : { //数据区域缩放，仅对直角坐标系图表有效
                            show: true, //是否显示，当show为true时则接管使用指定类目轴的全部系列数据，如不指定则接管全部直角坐标系数据
                            realtime: true, //缩放变化是否实时显示。
                            start: 0, //选择起始比例，默认为0%；从第一个数据开始，
                            end: 100
//选择结束比例，默认为100%；到最后一个数据，
                        },
                        series: [
                            // {
                            //     name: conditions[0],
                            //     type: 'bar',
                            //     barGap: 0,
                            //     data: [320, 332, 301, 334]
                            // },
                            // {
                            //     name: conditions[1],
                            //     type: 'bar',
                            //     data: [220, 182, 191, 234]
                            // },
                            // {
                            //     name: conditions[2],
                            //     type: 'bar',
                            //     data: [150, 232, 201, 154]
                            // },
                            // {
                            //     name: conditions[3],
                            //     type: 'bar',
                            //     data: [98, 77, 101, 99]
                            // }
                        ],
                        // grid:{
                        //     x:25,
                        //     y:45,
                        //     x2:5,
                        //     y2:20,
                        //     borderWidth:1
                        // },

                    };

                    // 使用刚指定的配置项和数据显示图表。
                    option.series = SeriesTotal;
                    myChart.setOption(option);
                }
        });
    });

    $("#close").click(function () {
        $("#pwkname").val("");
        $("#mulpwkType").val("");
        $("#pwk7").val("");
        $("#pwk8").val("");
        $("#pwkname").val("");
        $("#mulpwkType").val("");
        $("#pwk7").val("");
        $("#pwk8").val("");
    })
});

var count = 1;
function addmessage() {
    count = count + 1;
    var temp1 = "<div class=\"input-group\">\n" +
        "                        <span class=\"input-group-addon\">排污口名称</span>\n" +
        "                        <input id=\"pwkname\" name=\"tjyear\" type=\"text\" class=\"form-control\" placeholder=\"请输入指定的排污口名称\">\n" +
        "                        <span class=\"input-group-addon\">所属排污口类别</span>\n" +
        "\n" +
        "                        <select name=\"pwkType\" class=\"form-control\">\n" +
        "                            <option value=\"\"></option>\n" +
        "                            <option value=\"工业废水排污口\">工业废水排污口</option>\n" +
        "                            <option value=\"工业生活混合污水排污口\">工业生活混合污水排污口</option>\n" +
        "                            <option value=\"生活污水排污口\">生活污水排污口</option>\n" +
        "                            <option value=\"畜禽养殖排污口\">畜禽养殖排污口</option>\n" +
        "                            <option value=\"农田退水入海口\">农田退水入海口</option>\n" +
        "                            <option value=\"水产养殖排污口\">水产养殖排污口</option>\n" +
        "                            <option value=\"雨污混合排污口\">雨污混合排污口</option>\n" +
        "                            <option value=\"雨水排污口\">雨水排污口</option>\n" +
        "                            <option value=\"泄洪口\">泄洪口</option>\n" +
        "                            <option value=\"其他\">其他</option>\n" +
        "                        </select>\n" +
        "<span id=\"addmul\" onclick=\"addmessage()\" class=\"input-group-addon glyphicon glyphicon-plus\" aria-hidden=\"true\" style=\"cursor:pointer;\">\n" +
        "\n" +
        "                        </span>\n" +
        "                    </div>";
    if (flag == 0) {
        $("#div_0").html(temp1);
        $("#div_0").show();
        flag = flag + 1;
    } else if (flag == 1) {
        $("#div_1").html(temp1);
        $("#div_1").show();
        flag = flag + 1;
    } else if (flag == 2) {
        $("#div_2").html(temp1);
        $("#div_2").show();
        flag = flag + 1;
    } else if (flag == 3) {
        $("#div_3").html(temp1);
        $("#div_3").show();
        flag = flag + 1;
    } else if (flag == 4) {
        $("#div_4").html(temp1);
        $("#div_4").show();
        flag = flag + 1;
    } else if (flag == 5) {
        $("#div_5").html(temp1);
        $("#div_5").show();
        flag = flag + 1;
    } else if (flag == 6) {
        $("#div_6").html(temp1);
        $("#div_6").show();
        flag = flag + 1;
    } else if (flag == 7) {
        $("#div_7").html(temp1);
        $("#div_7").show();
        flag = flag + 1;
    } else if (flag == 8) {
        $("#div_8").html(temp1);
        $("#div_8").show();
        flag = flag + 1;
    } else if (flag == 9) {
        $("#div_9").html(temp1);
        $("#div_9").show();
        flag = flag + 1;
    } else if (flag == 10) {
        $("#div_10").html(temp1);
        $("#div_10").show();
        flag = flag + 1;
    }
}
function showlist(item) {
    var showlist = "<tr id=\"t" + item.id + "\" class='noExl'><td><input type=\"checkbox\" name=\"piliang\" value=\"" + item.id + "\"/></td><td>" + item.id + "</td><td><a href=\"" + item.id + "\" onclick=\"editfunc(this);return false;\"><span class=\"glyphicon glyphicon-edit\"></span></a>" +
        "</td><td><a href=\"" + item.id + "\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>" + "</td><td>" + item.pwkName + "</td><td>" + item.type + "</td><td>" + item.city + "</td><td>" + item.year +
        "</td><td>" + item.month + "</td><td>" + item.zbname + "</td><td>" + item.value +
        "</td></tr>";
    return showlist;
}
function mulshowlist(item) {
    var showlist = "<tr id=\"t" + item.id + "\" class='noExl'><td><input type=\"checkbox\" name=\"piliang\" value=\"" + item.id + "\"/></td><td>" + item.id + "</td><td><a href=\"" + item.id + "\" onclick=\"editfunc(this);return false;\"><span class=\"glyphicon glyphicon-edit\"></span></a>" +
        "</td><td><a href=\"" + item.id + "\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>" + "</td><td>" + item.pwkName + "</td><td>" + item.type + "</td><td>" + item.city + "</td><td>" + item.year +
        "</td><td>" + item.month + "</td><td>" + item.zbname + "</td><td>" + item.zbdata +
        "</td></tr>";
    return showlist;
}