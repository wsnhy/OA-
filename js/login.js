var $, form, layer;
layui.use(['jquery', 'form', 'layer'], function () {
  $ = layui.$,
    form = layui.form,
    layer = layui.layer;


  $('#loginBtn').click(function () {
    UserLogin();
  })

});


function UserLogin() {
  PostDataLogin({
    XDLMCID: '7000',
    XDLMSID: 'DYBH2019052717090201654145',
    XDLMTID: '7001',
    XDLMUserName: $('#mUserName').val(),
    XDLMPassword: $('#mUserPassword').val()
  }, function (data) {
    if (data.message = "登录成功") {
      setCookie("adminUserId", data.data[0].id, "d7");
      setCookie("adminUserName", data.data[0].mUserName, "d7");
      localStorage.setItem("adminSytoken", data.sytoken);
      layer.msg(data.message);
      window.location.href = "./index.html";
    } else {
      console.log('登录失败');
      layer.msg(data.message);
    }

  })
}

// function PostDataLogin(requestData, callback) {
//   // var ipUrl= "/xdData/xdDataManage.ashx?XAction=GetDataInterface&XKLX=syyh";
//   // var ipUrl = "/api/com/account?XAction=Login&XKLX=syyh";
//   var ipUrl = "/api/com/account?XAction=Login&XKLX=syyh";
//   var rv = '';
//   try {
//     $.ajax({
//       async: true,
//       cache: false,
//       type: "post",
//       url: httpip + ipUrl,
//       data: requestData,
//       dataType: 'json',
//       headers: {
//         "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ4ZCIsImF1ZCI6Im9jdG9iZXIiLCJzdWIiOiJ0eWtnIiwianRpIjoieGQifQ.hBTpg2lDbRawh_BVUOfi8aXbA3wxVMsFbB800N7TFQs"
//       },
//       success: function(returnData) {

//         if (returnData.success || returnData.msg) {

//           if (callback) {
//             callback(returnData, this)
//           }
//           rv = returnData
//         } else {
//           rv = returnData.message;
//           if (rv == "NOTLOGIN") {

//             parent.location.href = baseUrl + "/admin/login.html"

//           } else {
//             layer.msg(rv)
//           }
//         }
//       },
//       error: function(XMLHttpRequest, textStatus, errorThrown) {
//         rv = XMLHttpRequest.responseText;
//         layer.msg(rv)

//       }
//     });
//   } catch (e) {

//     rv = e.message;
//   }
// }

function PostDataLogin(requestData, callback) {

  var ipUrl = "/api/com/account?XAction=Login&XKLX=syyh";
  	// var ipUrl= "/xdData/xdDataManage.ashx?XAction=GetDataInterface&XKLX=syyh";
  var rv = '';
  try {
      $.ajax({
          async: true,
          cache: false,
          type: "post",
          url: httpip + ipUrl,
          data: requestData,
          dataType: 'json',
          headers: {
              "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ4ZCIsImF1ZCI6Im9jdG9iZXIiLCJzdWIiOiJ0eWtnIiwianRpIjoieGQifQ.hBTpg2lDbRawh_BVUOfi8aXbA3wxVMsFbB800N7TFQs"
          },
          success: function(returnData) {

              if (returnData.success || returnData.msg) {

                  if (callback) {
                      callback(returnData, this)
                  }
                  rv = returnData
              } else {
                  rv = returnData.message;
                  if (rv == "NOTLOGIN") {
                      parent.location.href = baseUrl + "/login.html"
                  } else {
                      layer.msg(rv)
                  }
              }
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
              rv = XMLHttpRequest.responseText;
              layer.msg(rv)

          }
      });
  } catch (e) {

      rv = e.message;
  }
}
