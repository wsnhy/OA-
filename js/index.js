var $,element,layer,laydate,form;
layui.config({
  base: 'layuiadmin/' //静态资源所在路径
}).extend({
  index: 'lib/index' //主入口模块
}).use(['index'], function () {
  $ = layui.$, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form;
  $("#userName").html(getCookie("mUserName"));
  //退出
  $("#signOut").click(function() {
    $("#signOut").click(function() {
      delCookie('adminUserId');
      delCookie('adminUserName');
      localStorage.clear('adminSytoken');
      window.location.href = "./login.html";
    });
  })


});
