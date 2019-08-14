var $, form, table;
layui.config({
  base: '../layuiadmin/' //静态资源所在路径
}).extend({
  index: 'lib/index' //主入口模块
}).use(['index', 'form', 'table'], function () {
  $ = layui.jquery
  });