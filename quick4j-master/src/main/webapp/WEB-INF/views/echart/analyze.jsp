<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <title>layui</title>
    <%--<style type="text/css">--%>
    <%--#echartGen{--%>
    <%--width:26%;--%>
    <%--}--%>
    <%--</style>--%>
    <script type="text/javascript" src="app/js/echart/echarts-all.js"></script>
    <script type="text/javascript" src="bsmassets/js/echart/analyze.js"></script>
</head>
<body>
<div class="row">
    <div class="col-lg-6">
        <form class="bs-example bs-example-form" role="form" id="echartGen">
            <div class="input-group">
                <span class="input-group-addon">排污口</span>
                <input id="pwk0" name="tjyear" type="text" class="form-control" placeholder="请输入要统计的排污口名称">
            </div>
            <br>
            <div class="input-group">
                <span class="input-group-addon">监测年份</span>
                <input id="pwk1" name="tjmonth" list="yearlist" type="text" class="form-control" placeholder="请选择监测年份">
                <datalist id="yearlist">
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                </datalist>
            </div>
            <br>
            <div class="input-group">
                <span class="input-group-addon">达标类型</span>
                <input id="pwk2" name="tjday" list="jctype" type="text" class="form-control" placeholder="请选择要进行分析的类型">
                <datalist id="jctype">
                    <option value="salt">盐度(‰)</option>
                    <option value="COD">化学需氧量(mg/L)</option>
                    <option value="NH3">氨氮(mg/L)</option>
                    <option value="P">总磷(mg/L)</option>
                    <option value="N">总氮(mg/L)</option>
                    <option value="Cr6">六价铬(mg/L)</option>
                    <option value="CN">氰化物(mg/L)</option>
                    <option value="fdcjqs">粪大肠菌群数 (个/L)</option>
                    <option value="BOD5">五日生化需氧量(mg/L)</option>
                    <option value="xfw">悬浮物 (mg/L)</option>
                    <option value="oil">石油类 (mg/L)</option>
                    <option value="dzwy">动植物油(mg/L)</option>
                    <option value="phenol">挥发酚(mg/L)</option>
                    <option value="As">总砷(mg/L)</option>
                    <option value="Hg">总汞(mg/L)</option>
                    <option value="Pb">总铅(mg/L)</option>
                    <option value="Cd">总镉(mg/L)</option>
                    <option value="PH">PH值</option>
                    <option value="chloride">氯化物(mg/L)</option>
                    <option value="sulfide">硫化物(mg/L)</option>
                    <option value="ylzbmhxj">阴离子表面活性剂(mg/L)</option>
                    <option value="others">其它监测指标</option>
                </datalist>
            </div>
            <br>
            <div class="input-group">
                <span class="input-group-addon">设置达标线</span>
                <input id="pwk3" name="tjday" type="text" class="form-control" placeholder="请设置达标元素的值">
            </div>
        </form>
    </div>
    <div class="col-lg-6">
        <div class="btn-group" role="group" aria-label="...">
            <button id="submitemi" type="button" class="btn btn-primary">开始分析</button>
            <button id="reset" type="button" class="btn btn-primary">重置</button>
            <button id="yearAnalyze" type="button" class="btn btn-primary">全指标年度平均值分析</button>
            <button id="sameCompare" type="button" class="btn btn-primary">全指标同比分析</button>
            <button id="linkCompare" type="button" class="btn btn-primary">全指标环比分析</button>
        </div>
    </div>
</div>
<div id="main" style="width: 600px;height:400px;margin-left: 381px;"></div>
<script type="text/javascript">
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '排污口全指标达标情况'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>
</body>
</html>