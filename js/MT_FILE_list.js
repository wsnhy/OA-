
var $, form, table;
layui.config({
  base: '../layuiadmin/' //静态资源所在路径
}).extend({
  index: 'lib/index' //主入口模块
}).use(['index', 'form', 'table'], function () {
  $ = layui.jquery

  $(function () {
    $().ready(function () {
      // getAlldata()   // 项目管理系统数据  
      // getEq()//项目待提交
      // getDtj()
      // gtrTsgl() // 库房管理系统
      // getRlgl() // 人力资源系统
      // getcwgl() // 财务系统
    });


  })
// 一，项目管理系统数据
// 项目总数

  PostIndexData({
    XKLX: 'sygl',
    TblNum: 9999
  }, function (returnData) {
    // console.log(returnData)
    $("#allnum").text(returnData.count);
  })

//项目待提交
  PostIndexData({
    XKLX: 'sygl',
    TblNum: 9999,
    T42: 'EQ待提交'
  }, function (returnData) {
    // console.log(returnData)
    $("#anum").text(returnData.count);

  })
  // 项目待审核
  PostIndexData({
    XKLX: 'sygl',
    TblNum: 9999,
    T42: 'EQ待完成'
  }, function (returnData) {
    // console.log(returnData)
    $("#bnum").text(returnData.count);
  })
  // 项目已立项
  PostIndexData({
    XKLX: 'sygl',
    TblNum: 9999,
    T335: 'EQ已立项'
  }, function (returnData) {
    // console.log(returnData)
    $("#cnum").text(returnData.count);
  })


  // 人力资源系统
  // 员工总数
  PostRlgl({
    type: '3',
    value: '0'
  }, function (returnData) {
    console.log(returnData)
    // $("#cnum").text(returnData.count);
  })


  // 文物保护系统数据

  // 库房管理系统


  // 财务系统

});





// function getDtj() {
//   PostIndexData({
//     XKLX: 'sygl',
//     TblNum: 9999,
//     T42: "EQ待提交"
//   }, function (returnData) {
//     console.log(returnData)

//   })

// }

//  库房管理系统
// function gtrKfgl() {
//   PostKfgl({

//   }, function (returnData) {
//     console.log(returnData)

//   })


// }
// 人力资源系统
function getRlgl() {

  PostRlgl({
    type: 3,
    value: 0
  },function(returnData) {
    alert(1)
    console.log(returnData)
  })
}
  // 财务系统
  // function getcwgl() {
  //   PostCwgl({
  //   }, function (returnData) {
  //     console.log(returnData)
  //   })
  // }






// 项目数据概况
var myChart = echarts.init(document.getElementById('xmtj'));
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
  series: [
    {
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
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ]
    }
  ]
};
myChart.setOption(option);

// 项目可用资金
var myChart = echarts.init(document.getElementById('xmzj'));
option = {
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '直接访问',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
};

myChart.setOption(option);

// 项目账单
var myChart = echarts.init(document.getElementById('xmzd'));
option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '2015', '2016', '2017'],
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
    { type: 'bar' },
    { type: 'bar' },
    { type: 'bar' }
  ]
};
myChart.setOption(option);

//员工数据统计
var myChart = echarts.init(document.getElementById('ygtj'));
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


//已修复文物统计

var myChart = echarts.init(document.getElementById('xfwu'));
option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '2015', '2016', '2017'],
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
    { type: 'bar' },
    { type: 'bar' },
    { type: 'bar' }
  ]
};
myChart.setOption(option);

//学历统计
var myChart = echarts.init(document.getElementById('xltj'));
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
  series: [
    {
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
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ]
    }
  ]
};
myChart.setOption(option);

//文物等级
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
  series: [
    {
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
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ]
    }
  ]
};
myChart.setOption(option);


