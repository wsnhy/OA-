var $, form, table;
layui.config({
	base: '../layuiadmin/' //静态资源所在路径
}).extend({
	index: 'lib/index' //主入口模块
}).use(['index', 'form', 'table'], function() {
	$ = layui.jquery
	
// 项目管理
// 发掘
  PostIndexData({
    TblNum: 9999,

  }, function (returnData) {
    console.log(returnData)

  })




});

// 001
var myChart = echarts.init(document.getElementById('project'));
option = {
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b}: {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'left',
		data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
	},
	series: [{
			name: '访问来源',
			type: 'pie',
			selectedMode: 'single',
			radius: [0, '30%'],

			label: {
				normal: {
					position: 'inner'
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},

		},
		{
			name: '访问来源',
			type: 'pie',
			radius: ['40%', '55%'],
			label: {
				normal: {
					formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
					backgroundColor: '#eee',
					borderColor: '#aaa',
					borderWidth: 1,
					borderRadius: 4,
					// shadowBlur:3,
					// shadowOffsetX: 2,
					// shadowOffsetY: 2,
					// shadowColor: '#999',
					// padding: [0, 7],
					rich: {
						a: {
							color: '#999',
							lineHeight: 22,
							align: 'center'
						},
						// abg: {
						//     backgroundColor: '#333',
						//     width: '100%',
						//     align: 'right',
						//     height: 22,
						//     borderRadius: [4, 4, 0, 0]
						// },
						hr: {
							borderColor: '#aaa',
							width: '100%',
							borderWidth: 0.5,
							height: 0
						},
						b: {
							fontSize: 16,
							lineHeight: 33
						},
						per: {
							color: '#eee',
							backgroundColor: '#334455',
							padding: [2, 4],
							borderRadius: 2
						}
					}
				}
			},
			data: [{
					value: 335,
					name: '直达'
				},
				{
					value: 310,
					name: '邮件营销'
				},
				{
					value: 234,
					name: '联盟广告'
				},
				{
					value: 135,
					name: '视频广告'
				},
				{
					value: 1048,
					name: '百度'
				},
				{
					value: 251,
					name: '谷歌'
				},
				{
					value: 147,
					name: '必应'
				},
				{
					value: 102,
					name: '其他'
				}
			]
		}
	]
};
myChart.setOption(option);
// 2.1文物等级
var myChart = echarts.init(document.getElementById('wwdj'));
option = {
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b}: {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'left',
		data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
	},
	series: [{
		name: '访问来源',
		type: 'pie',
		radius: ['50%', '70%'],
		avoidLabelOverlap: false,
		label: {
			normal: {
				show: false,
				position: 'center'
			},
			emphasis: {
				show: true,
				textStyle: {
					fontSize: '30',
					fontWeight: 'bold'
				}
			}
		},
		labelLine: {
			normal: {
				show: false
			}
		},
		data: [{
				value: 335,
				name: '直接访问'
			},
			{
				value: 310,
				name: '邮件营销'
			},
			{
				value: 234,
				name: '联盟广告'
			},
			{
				value: 135,
				name: '视频广告'
			},
			{
				value: 1548,
				name: '搜索引擎'
			}
		]
	}]
}
myChart.setOption(option);
// 2.2文物修复概况
var myChart = echarts.init(document.getElementById('wwxf'));
option = {
	color: ['#3398DB'],
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		axisTick: {
			alignWithLabel: true
		}
	}],
	yAxis: [{
		type: 'value'
	}],
	series: [{
		name: '直接访问',
		type: 'bar',
		barWidth: '60%',
		data: [10, 52, 200, 334, 390, 330, 220]
	}]
};

myChart.setOption(option);
// 3.1档案数据类型
var myChart = echarts.init(document.getElementById('dang_a'));
option = {
	xAxis: {
		type: 'category',
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	},
	yAxis: {
		type: 'value'
	},
	series: [{
		data: [120, 200, 150, 80, 70, 110, 130],
		type: 'bar'
	}]
};
myChart.setOption(option);

// 4.1人力职称统计
var myChart = echarts.init(document.getElementById('rlzc'));
option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};

myChart.setOption(option);
