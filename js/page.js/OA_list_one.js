var $, form, table;
layui.config({
    base: '../layuiadmin/' //静态资源所在路径
}).extend({
    index: 'lib/index' //主入口模块
}).use(['index', 'form', 'table'], function() {
    $ = layui.jquery
});

// 001
var myChart = echarts.init(document.getElementById('project'));
kyoption = {
    title: {
        text: '我的科研统计',
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    tooltip: {
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    // grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    // },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [120, 200, 150, 80, 70, 110, 130]

    }]
};
myChart.setOption(kyoption);