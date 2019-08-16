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
                    var value = [];
                    $.each(data,function (index,item) {
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
function showlist(item) {
    var showlist = "<tr id=\"t" + item.id + "\" class='noExl'><td><input type=\"checkbox\" name=\"piliang\" value=\"" + item.id + "\"/></td><td>" + item.id + "</td><td><a href=\"" + item.id + "\" onclick=\"editfunc(this);return false;\"><span class=\"glyphicon glyphicon-edit\"></span></a>" +
        "</td><td><a href=\"" + item.id + "\" onclick=\"deletefunc(this);return false;\"><span class=\"glyphicon glyphicon-trash\"></span></a>" + "</td><td>" + item.pwkName + "</td><td>" + item.type + "</td><td>" + item.city + "</td><td>" + item.year +
        "</td><td>" + item.month + "</td><td>" + item.zbname + "</td><td>" + item.value +
        "</td></tr>";
    return showlist;
}