$(function () {
     $("#submitemi").click(function () {
        var url = "rest/analyze/avg";
        var t = $("form").serializeArray();
        var pwkName = t[0].value;
         var jcyear = t[1].value;
         var type = t[2].value;
         var line = t[3].value;
         var data={
             "pkwname":pwkName,
             "jcyear":jcyear,
             "type":type,
             "line":line
         };
         $.ajax({
             url:url,
             type:"POST",
             data:data,
             datatype:"json",
             success:function (data) {
                 var myChart = echarts.init(document.getElementById('main'));

                 // 指定图表的配置项和数据
                 var option = {
                     title: {
                         text: '排污口全指标达标情况'
                     },
                     tooltip: {
                         trigger: 'axis',
                         axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                             type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
                         },
                         formatter: function () {
                             var res = "详情：" + '<br/>';
                             res += '超表线' + ' : ' + line + 'L' + '<br/>';
                             return res;
                         }
                     },
                     legend: {
                         data: ['指标分析']
                     },
                     xAxis: {
                         data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                     },
                     yAxis: {},
                     series: [{
                         name: '指标',
                         type: 'bar',
                         data: data
                     }]
                 };
                 // 使用刚指定的配置项和数据显示图表。
                 myChart.setOption(option);
             }
         })
     });
     $("#yearAnalyze").click(function(){
         //全指标年度凭据分析
         var urlyear = "rest/analyze/avgyear";
         var t = $("form").serializeArray();
         var pwkName = t[0].value;
         var type = t[2].value;
         var line = t[3].value;

         var data = {
             "pwkName":pwkName,
             "type":type,
             "line":line
         };
         $.ajax({
            url:urlyear,
            type:"POST",
            data:data,
            datatype:"json",
            success:function(data){
                var myChart = echarts.init(document.getElementById('main'));
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '排污口全指标达标情况'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: function () {
                            var res = "详情：" + '<br/>';
                            res += '超表线' + ' : ' + line + 'L' + '<br/>';
                            return res;
                        }
                    },
                    legend: {
                        data: ['指标分析']
                    },
                    xAxis: {
                        data: ["2015", "2016", "2017", "2018", "2019"]
                    },
                    yAxis: {},
                    series: [{
                        name: '指标',
                        type: 'bar',
                        data: data
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
         });
     });
     $("#sameCompare").click(function(){
         //全指标年度凭据分析
         var urlyear = "rest/analyze/samecompare";
         var t = $("form").serializeArray();
         var pwkName = t[0].value;
         var type = t[2].value;
         var line = t[3].value;

         var data = {
             "pwkName":pwkName,
             "type":type,
             "line":line
         };
         $.ajax({
             url:urlyear,
             type:"POST",
             data:data,
             datatype:"json",
             success:function(data){
                 var myChart = echarts.init(document.getElementById('main'));
                 // 指定图表的配置项和数据
                 var option = {
                     title: {
                         text: '全指标达标同比情况'
                     },
                     tooltip: {
                         trigger: 'axis',
                         axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                             type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
                         },
                         formatter: function () {
                             var res = "详情：" + '<br/>';
                             res += '超表线' + ' : ' + line + 'L' + '<br/>';
                             return res;
                         }
                     },
                     legend: {
                         data: ['指标分析']
                     },
                     xAxis: {
                         data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                     },
                     yAxis: {},
                     series: [{
                         name: '指标',
                         type: 'bar',
                         data: data
                     }]
                 };
                 // 使用刚指定的配置项和数据显示图表。
                 myChart.setOption(option);
             }
         });
     });

     //环比
     $("#linkCompare").click(function () {
         //全指标年度凭据分析
         var urlyear = "rest/analyze/linkCompare";
         var t = $("form").serializeArray();
         var pwkName = t[0].value;
         var jcyear = t[1].value;
         var type = t[2].value;
         var line = t[3].value;

         var data = {
             "pwkName":pwkName,
             "jcyear":jcyear,
             "type":type,
             "line":line
         };
         $.ajax({
             url:urlyear,
             type:"POST",
             data:data,
             datatype:"json",
             success:function(data){
                 var myChart = echarts.init(document.getElementById('main'));
                 // 指定图表的配置项和数据
                 var option = {
                     title: {
                         text: '全指标达标环比情况'
                     },
                     tooltip: {
                         trigger: 'axis',
                         axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                             type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
                         },
                         formatter: function () {
                             var res = "详情：" + '<br/>';
                             res += '超表线' + ' : ' + line + 'L' + '<br/>';
                             return res;
                         }
                     },
                     legend: {
                         data: ['指标分析']
                     },
                     xAxis: {
                         data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                     },
                     yAxis: {},
                     series: [{
                         name: '指标',
                         type: 'bar',
                         data: data
                     }]
                 };
                 // 使用刚指定的配置项和数据显示图表。
                 myChart.setOption(option);
             }
         });
     });

     $("#reset").click(function () {
         $("#pwk0").val("");
         $("#pwk1").val("");
         $("#pwk2").val("");
         $("#pwk3").val("");
     });
 })