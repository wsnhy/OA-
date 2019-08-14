// var ipUrl = "http://192.168.28.251:8111/xdData/xdDataManage.ashx?XAction=GetDataInterface&XKLX=WWBH", //公用的ip地址，公用的图片地址
//     ipUploadUrl = "http://192.168.28.251:8111/xddata/xdFileAllSysUpload.ashx?XKLX=WWBH",
//     baseUrl = "/wwbh",
//     httpUrl = "http://192.168.28.251:8111/xdData/xdDataManage.ashx?XKLX=WWBH"
// var basePathImg = "http://192.168.28.251:8111/wwbh/Widget";
// var ip_urlll = "http://192.168.28.251:8111/api/kf/data?sykf=syyh&XKLX=syyh&xmbh=wwbh&XAction=wwGetDataList"
//     //请求数据ajax
// ipIndexurl = "http://192.168.28.251:8111/xdData/xdDataManage.ashx?XAction=ExtFC&XDLMCID=IndexStatistics&XKLX=wwbh"
// var  httpip = "http://192.168.28.251:8111",
api="http://192.168.28.251:8111/"
ipIndexurl = "wwSYGR/wwData/wwDataManageGR.ashx?XAction=wwGetDataList"  // 一，项目管理系统数据
ipIndexkf = "http://192.168.28.251:8111/wwSYGR/wwData/wwDataManageGR.ashx?XAction=wwGetDataList"  // 库房管理系统

 indexRldata="rsgl/Controllers/Hr_User/GetUserState?"         // 人力资源系统

 // 财务系统

// 一，项目管理系统数据
function PostIndexData(mActionData, callback) { //异步的ajax请求
    var rv;
    try {
        $.ajax({
            async: false,
            cache: false,
            type: "post",
            url: api+ipIndexurl,
            data: mActionData, // $('#mkufang').val() 
            dataType: 'json',
            success: function (returnValue) {
                callback(returnValue)
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                rv = XMLHttpRequest.responseText;
              

            }

        })
    } catch (e) {
        rv = e.message;
    }
    return rv;
}


//  库房管理系统
function PostKfgl(requestData, callback) { //同步的ajax请求
    var rv
    try {
        $.ajax({
            async: false,
            cache: false,
            type: "post",
            url: ipIndexkf,
            data: requestData, // $('#mkufang').val() 
            dataType: 'json',
            // headers: {
            //     Authorization: ""
            // },
            success: function (returnData) {
                callback(returnValue)
       
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                rv = XMLHttpRequest.responseText;
                layer.msg(rv)

            }
        });
    } catch (e) {

        rv = e.message;
    }
    return rv;
}
// 人力资源系统
function PostRlgl(mActionData, callback) { //异步的ajax请求
    var rv;
    try {
        $.ajax({
            async: false,
            cache: false,
            type: "post",
            url:'http://192.168.28.251:8111/rsgl/Controllers/Hr_User/GetUserState',
            data: mActionData, // $('#mkufang').val() 
            dataType: 'json',
            success: function (returnData) {
                callback(returnData, this)
             
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                rv = XMLHttpRequest.responseText;

            }

        })
    } catch (e) {
        rv = e.message;
    }
    return rv;
}
 // 财务系统
 function PostCwgl(mActionData, callback) { //异步的ajax请求
    var rv;
    try {
        $.ajax({
            async: false,
            cache: false,
            type: "post",
            url: "http://192.168.28.251:8111/rsgl/Controllers/Hr_User/GetUserState?type=3&value=0",
            
            data: mActionData, // $('#mkufang').val() 
            dataType: 'json',
            success: function (returnData) {
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
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                rv = XMLHttpRequest.responseText;

            }

        })
    } catch (e) {
        rv = e.message;
    }
    return rv;
}





function getAuth() {
    if (localStorage.getItem("mSytoken")) {

        return localStorage.getItem("mSytoken")
    } else {
        window.location.href = baseUrl + "/login.html"
    }

}





function PostData(requestData, callback) { //异步的ajax请求

    try {
        $.ajax({
            async: true,
            cache: false,
            type: "post",
            url: ipUrl,
            data: requestData, // $('#mkufang').val() 
            dataType: 'json',
            headers: {
                Authorization: getAuth()
            },
            success: function (returnData) {

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
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                rv = XMLHttpRequest.responseText;
                layer.msg(rv)
            }
        });
    } catch (e) {

        rv = e.message;
    }
}

function PostallData(requestData, callback) { //异步的ajax请求
    try {
        $.ajax({
            async: true,
            cache: false,
            type: "post",
            url: ipUrl,
            data: requestData, // $('#mkufang').val() 
            dataType: 'json',
            headers: {
                Authorization: getAuth()
            },
            success: function (returnData) {
                callback(returnData, this);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                rv = XMLHttpRequest.responseText;
                layer.msg(rv)
            }
        });
    } catch (e) {

        rv = e.message;
    }
}

function PostDatalll(requestData, callback) { //异步的ajax请求

    try {
        $.ajax({
            async: true,
            cache: false,
            type: "post",
            url: ip_urlll,
            data: requestData, // $('#mkufang').val() 
            dataType: 'json',
            headers: {
                Authorization: getAuth()
            },
            success: function (returnData) {

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
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                rv = XMLHttpRequest.responseText;
                layer.msg(rv)

            }
        });
    } catch (e) {

        rv = e.message;
    }
}

function PostData_(requestData, callback) { //异步的ajax请求

    try {
        $.ajax({
            async: true,
            cache: false,
            type: "post",
            url: httpUrl,
            data: requestData, // $('#mkufang').val() 
            dataType: 'json',
            headers: {
                Authorization: getAuth()
            },
            success: function (returnData) {

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
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                rv = XMLHttpRequest.responseText;
                layer.msg(rv)

            }
        });
    } catch (e) {

        rv = e.message;
    }
}
String.prototype.getQuery = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = this.substr(this.indexOf("?") + 1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
//刷新
function updateData() {
    window.location.reload()
    return false
}

function updateDataTable() {
    tableins.reload()
    return false
}

//时间设置
function currentDate() {
    var d = new Date(),
        str = '';
    str += d.getFullYear() + '-';

    if ((d.getMonth() + 1) < 10) {

        str += '0' + parseInt(d.getMonth() + 1) + '-';
    } else {
        str += d.getMonth() + 1 + '-';
    }
    if (d.getDate() < 10) {
        str += '0' + d.getDate();
    } else {
        str += d.getDate();
    }
    return str;
}

function currentDateMonth() {
    var d = new Date(),
        str = '';
    str += d.getFullYear() + '-';

    if ((d.getMonth() + 1) < 10) {

        str += '0' + parseInt(d.getMonth() + 1);
    } else {
        str += d.getMonth() + 1;
    }

    return str;
}

function lastcurrentDate() {
    var d = new Date(),
        str = '';
    str += d.getFullYear() - 1 + '-';

    if ((d.getMonth() + 1) < 10) {

        str += '0' + parseInt(d.getMonth() + 1) + '-';
    } else {
        str += d.getMonth() + 1 + '-';
    }
    if (d.getDate() < 10) {
        str += '0' + d.getDate();
    } else {
        str += d.getDate();
    }
    return str;
}

function curDateTime() {
    var d = new Date();
    var year = d.getFullYear() + "";
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var day = d.getDay();
    var Hours = d.getHours(); //获取当前小时数(0-23)
    var Minutes = d.getMinutes(); //获取当前分钟数(0-59)
    var Seconds = d.getSeconds(); //获取当前秒数(0-59)
    var Milliseconds = d.getMilliseconds();
    var curDateTime = year;
    if (month > 9) {
        curDateTime = curDateTime + month;

    } else {
        curDateTime = curDateTime + "0" + month;
    }
    if (date > 9)
        curDateTime = curDateTime + date;
    else
        curDateTime = curDateTime + "0" + date;
    if (Hours > 9)
        curDateTime = curDateTime + Hours;
    else
        curDateTime = curDateTime + "0" + Hours;
    if (Minutes > 9)
        curDateTime = curDateTime + Minutes;
    else
        curDateTime = curDateTime + "0" + Minutes;
    if (Seconds > 9)
        curDateTime = curDateTime + Seconds;
    else
        curDateTime = curDateTime + "0" + Seconds;
    curDateTime = curDateTime + "0" + Milliseconds;
    return curDateTime;
}

function RndNum(n) {
    var rnd = "";
    for (var i = 0; i < n; i++) {
        rnd += Math.floor(Math.random() * 10);
    }

    return rnd;
}

function getTimeAndRandom() {
    return curDateTime() + RndNum(4);
}

function currentTime() {
    var d = new Date(),
        str = '';
    var times = d.toLocaleDateString();
    if (d.getHours() < '10') {
        str += '0' + d.getHours() + ':';
    } else {
        str += d.getHours() + ':';
    }
    if (d.getMinutes() < '10') {
        str += '0' + d.getMinutes() + ':';
    } else {
        str += d.getMinutes() + ':';
    }
    if (d.getSeconds() < '10') {
        str += '0' + d.getSeconds() + '';
    } else {
        str += d.getSeconds() + '';
    }
    return str;
}

function currentYear() {
    var d = new Date(),
        str = '';
    str += d.getFullYear() - 1;
    return str;
}

//时间格式化
function timeEXchange(obj) {

    if (obj == '') {
        return '';
    } else {

        if (obj.split(' ')[0].indexOf('-') != '-1') {
            var arrTime = obj.split(' ')[0].trim().split('-');
        } else {
            var arrTime = obj.split(' ')[0].trim().split('/');
        }
        return arrTime[0] + '年' + arrTime[1] + '月' + arrTime[2] + '日';
    }

}
//查询变色
function QueryKeyColor(field) {
    var dd = $('#keyWords').val().split(" ");
    if (field != null) {
        for (var i = 0; i < dd.length; i++) {
            field = field.replace(dd[i], "<span style='color:red;'>" + dd[i] + "</span>");
        }
    }

    return field;
}
// 获取项目查询下拉

//
function getSelect(id, data, key, attr, attrValue) { //获取下拉框形式的模板
    var select = key
    if (attrValue) {
        select = attrValue
    }
    var xmmcTemplate = "<option value=''>请选择</option>";
    $('#' + id).empty()
    if (data.length > 0) {
        if (attr) {
            for (var i = 0; i < data.length; i++) {
                xmmcTemplate += '<option value="' + data[i][select] + '" id="' + data[i][select] + '" attrData="' + data[i][attr] + '">' + data[i][key] + '</option>'
            }
        } else {
            for (var i = 0; i < data.length; i++) {
                xmmcTemplate += '<option value="' + data[i][select] + '" id="' + data[i][select] + '">' + data[i][key] + '</option>'
            }
        }

    }

    $('#' + id).append(xmmcTemplate)

}

function getSelectNoDefine(id, data, key, attr, attrValue) { //没有默认的数据
    var select = key
    if (attrValue) {
        select = attrValue
    }
    var xmmcTemplate = "";
    $('#' + id).empty()
    if (data.length > 0) {
        if (attr) {
            for (var i = 0; i < data.length; i++) {
                xmmcTemplate += '<option value="' + data[i][select] + '" id="' + data[i][select] + '" attrData="' + data[i][attr] + '">' + data[i][key] + '</option>'
            }
        } else {
            for (var i = 0; i < data.length; i++) {
                xmmcTemplate += '<option value="' + data[i][select] + '" id="' + data[i][select] + '">' + data[i][key] + '</option>'
            }
        }

    }

    $('#' + id).append(xmmcTemplate)

}

function getSelectDefined(id, data, key, attr, attrValue) { //获取默认为空的下拉框形式的模板
    var select = key
    if (attrValue) {
        select = attrValue
    }
    var xmmcTemplate = "<option value=''>全部</option>";
    $('#' + id).empty()
    if (data.length > 0) {
        //		data.reverse()
        if (attr) {
            for (var i = 0; i < data.length; i++) {

                xmmcTemplate += '<option value="' + data[i][select] + '" id="' + data[i][select] + '" attrData="' + data[i][attr] + '">' + data[i][key] + '</option>'
            }
        } else {
            for (var i = 0; i < data.length; i++) {
                xmmcTemplate += '<option value="' + data[i][select] + '" id="' + data[i][select] + '">' + data[i][key] + '</option>'
            }
        }

    }

    $('#' + id).append(xmmcTemplate)

}
//写cookies 
//这是有设定过期时间的使用示例： 
//s20是代表20秒 
//h是指小时，如12小时则是：h12 
//d是天数，30天则：d30 
//setCookie("name","hayden","s20");
function setCookiee(name, value, time) {
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}

function getsec(str) {
    // alert(str);
    var str1 = str.substring(1, str.length) * 1;
    var str2 = str.substring(0, 1);
    if (str2 == "s") {
        return str1 * 1000;
    } else if (str2 == "h") {
        return str1 * 60 * 60 * 1000;
    } else if (str2 == "d") {
        return str1 * 24 * 60 * 60 * 1000;
    }
}

//删除cookies 
function delCookie(name) {

    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookieName(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function getUserName() {
    var name = 'mUserName';
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg)) {
        return decodeURIComponent(arr[2]);
    } else {

    }
    //		window.parent.location.href = "/kf/login.html";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}

function getCookieName(name) {

    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg)) {
        return decodeURIComponent(arr[2]);

    } else {

        // var isQcode = window.location.href.getQuery("ewm"); //是否手机打开的
        // if (isQcode) {
        //     window.location.href = window.location.origin + basePath + "/login-app.html?nextUrl=" + escape(window.location.href)
        // } else {
        //     parent.location.href = basePath + "/login.html"
        // }

    }

}

function getStore(callback, data) {
    var wheredata = {
        TblNum: 162
    }
    if (data) {
        wheredata = data
    }
    postData("wwGetDataList", wheredata, function (data) {
        if (callback) {
            callback(data)
        }
    })
}

function QXALL() {

    var indexlayer = parent.layer.getFrameIndex(window.name); //获取窗口索引
    if (parent.tableins) {
        parent.tableins.reload();
    }
    parent.layer.close(indexlayer);

}

function closeCurrentLayer() {
    var indexlayer = parent.layer.getFrameIndex(window.name); //获取窗口索引
    parent.layer.close(indexlayer);
}
//弹出窗口新页面
function openWindow(type, url, title, w, h, anim) {
    let maxmin = true;
    if (title == null || title == '') {
        title = false;
        maxmin = false;
    };
    if (url == null || url == '') {
        url = "/404.html";
    };
    if (w == null || w == '') {
        w = ($(window).width() - 200);
    };
    if (h == null || h == '') {
        h = ($(window).height() - 100);
    };
    if (anim == null || anim == "") {
        anim = 5
    }
    var layerPage = layer.open({
        type: type * 1,
        area: [w + 'px', h + 'px'],
        fix: false, //不固定
        maxmin: maxmin,
        shade: 0.4,
        title: title,
        content: url,
        anim: anim,
        success: function (layero) { },
        end: function () {

        }

    });
    return layerPage
}
// 切换页面

function changePage(url) {
    window.location.href = url;
}

function delData(id, XDLMSID, callback) { //删除数据
    layui.use(['layer'], function () {
        layer.confirm('确定要删除？删除后不可恢复！！', {
            btn: ['确定删除', '再想想'] //按钮
        },
            function () //确定
            {
                layer.msg('确定删除，请稍等...', {
                    icon: 1,
                    time: 500,
                    success: function () {

                        PostData({

                            XDLMCID: 4000,
                            XDLMROWID: id,
                            XDLMSID: XDLMSID
                        }, function (data) {
                            if (data.msg || data.success) {
                                tipMsg(data, callback)
                            }
                        })
                    }
                });

            }
        );
    });

}

//批量删除
function delDataVolume(XDLMSID, callback) {
    var ids = [];
    layui.use('table', function () {
        var table = layui.table;
        var checkStatus = table.checkStatus('tableLayui'),
            data = checkStatus.data;
        for (var i = 0; i < data.length; i++) {
            ids.push(data[i].id);
        }
        if (ids.length < 1) {
            layer.msg("请选中行")
        } else {
            submitDataVertifyModule("确定要批量删除吗", function () {
                PostData({
                    XDLMCID: 4000,
                    XDLMROWID: ids.join(","),
                    XDLMSID: XDLMSID
                }, function (data) {
                    if (data.msg || data.success) {
                        tipMsg(data, callback)
                    }
                })
            })
        }
    });
}
//批量变更存放位置
function changeSite() {
    var ids = [];
    layui.use('table', function () {
        var table = layui.table;
        var checkStatus = table.checkStatus('tableLayui'),
            data = checkStatus.data;
        for (var i = 0; i < data.length; i++) {
            ids.push(data[i].id);
        }
        if (ids.length < 1) {
            layer.msg("请选中行")
        } else {
            openWindow("2", "../xfgl/SY_WW_JL_GH_ADD.html?AllId=" + ids, "变更存放位置", 800, 360)
            // console.log(ids)
            // submitDataVertifyModule("确定要变更存放位置吗", function() {
            //     PostData({
            //         XDLMCID: 6000,
            //         XDLMID: ids.join(","),
            //         XDLMSID: XDLMSID
            //     }, function(data) {
            //         if (data.msg || data.success) {
            //             tipMsg(data, callback)
            //         }
            //     })
            // })
        }
    });
}


function tipMsg(data, callback) {

    var iconType = "";
    var tipMessage = data.message;

    if (data.msg || data.success) {
        iconType = 1;
        if (data.message) {

        } else {
            tipMessage = "操作成功"
        }
    } else {
        iconType = 5;
        if (data.message) {

        } else {
            tipMessage = "操作失败"
        }
    }

    layer.msg(tipMessage, {
        icon: iconType,
        time: 500
    }, function () {
        if (callback) {
            callback(data)
        } else {
            QXALL()
            //          console.log(tableins)
            //          if(tableins){
            //          tableins.reload()
            //          	
            //          }

        }

    });
}

function newTab(url, tit) {
    if (top.layui.index) {
        top.layui.index.openTabsPage(url, tit)
    } else {
        window.open(url)
    }
}

function checkTable(TblNum, ids, t) { //选中table
    if (ids.length == 0) {
        layer.msg('请先选中行！', {
            title: '提示框',
            icon: 0,
            time: 800
        });
    } else {

        var index002 = layer.confirm('确定要导出吗？', {
            btn: ['确定', '再想想'] //按钮
        }, function () {
            var index3 = layer.msg('正在导出,请稍等...', {
                time: 0,
                shade: 0.3,
                //content: '测试回调',
                success: function (index, layero) {

                    postData("wwTableSaveToExcel", {
                        TblNum: TblNum,
                        [t]: "in (" + ids.join(',') + ")"
                    }, function (returnData) {
                        if (returnData.success || returnData.msg) {
                            layer.msg('导出完成', {
                                time: 500,
                                icon: 1
                            }, function () {
                                layer.closeAll();
                                window.location = returnData.FilePath;

                            });

                        } else {
                            layer.msg(returnData, {
                                icon: 0,
                                time: 2000
                            });

                        }
                    }, "/xdGetData/DataHandler.ashx");

                }
            });

        }, function () {
            layer.close(index002);
        });

    }
}

function submitDataTip(tip, callback, data) { //没有验证码的弹框	
    layer.confirm(tip, {
        btn: ['确定', '再想想'] //按钮
    },
        function () //确定
        {
            var index000002 = layer.msg('正在提交，请稍等...', {
                icon: 1,
                time: 500,
                success: function () {
                    layer.close(index000002)
                    callback(data)

                }
            });
        }

    );

}

function submitDataVertifyModule(tip, callback) { //有验证码的弹框
    layer.open({
        title: tip,
        type: 1,
        content: `<div id='vertifyCode' style="padding-top:15px;padding-right:30px;"></div>
		<div class="layui-layer-btn layui-layer-btn-" style="position:absolute;bottom:0px;left:55px;"><a class="layui-layer-btn0" id="confirmBtn">确定</a><a class="layui-layer-btn1">再想想</a></div>
				`, //这里content是一个普通的String
        area: ['280px', '260px'],
        success: function () {
            $('#vertifyCode').codeVerify({
                type: 1,
                width: '200px',
                height: '50px',
                fontSize: '30px',
                codeLength: 4,
                btnId: 'confirmBtn',
                ready: function () { },
                success: function () {
                    callback()
                },
                error: function () {
                    layer.msg('验证码不匹配！');
                    return false;
                }
            });

        }
    });

}

function submitDataVertifyPassword(tip, callback) { //验证密码的弹框

    var index002 = layer.prompt({
        formType: 1,
        value: '',
        title: '警告！系统关键操作，必须再次输入确认密码',

    }, function (value, index, elem) {
        if (value == "3.1415") {
            layer.close(index002);
            if (callback) {
                callback()
            }
        } else {
            layer.msg("密码错误")
        }

    });
}
//搜索
function searchTableGY(where, tableins) {
    where.QueryType = $("#cxlb").find("option:selected").attr("attrdata");
    // where.QueryKey = $("#ztss").val();
    where.QueryKey = $("#keyWords").val();
    // where.QueryKey = $("#xmcx").val();
    tableins.reload({
        where: where,
        page: {
            curr: 1
        }
    });
}

function searchTableData(where, tableins) {
    // where.QueryType = $("#cxlb").find("option:selected").attr("attrdata");
    where.QueryType = $("#cxlb").val();
    where.QueryKey = $("#keyWords").val();
    // where.QueryKey = $("#xmcx").val();
    tableins.reload({
        where: where,
        page: {
            curr: 1
        }
    });
}

function cnmd(qingqiu, tableins) {
    qingqiu.QueryType = "项目名称";
    qingqiu.QueryKey = $("#xmcx").val();
    tableins.reload({
        where: qingqiu,
        page: {
            curr: 1
        }
    });
}

// function wwcxd(qingqiu, tableins) {
// 	qingqiu.QueryType ="登记名称";
// 	qingqiu.QueryKey = $("#xmcx").val();
// 	tableins.reload({
// 		where: qingqiu,
// 		page: {
// 			curr: 1
// 		}
// 	});
// }

//***上传图片相关部分start****
function uploadFilex(id, callback, type) {

    var loading, files = []
    layui.use('upload', function () {
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({
            elem: '#' + id, //绑定元素				
            url: ipUploadUrl, //上传接口		
            accept: 'file',
            auto: true,
            multiple: true,
            number: 10,
            before: function (obj) {
                //				files = obj.pushFile();
                loading = layer.msg("正在上传...", {
                    time: 3000
                })

                //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
                obj.preview(function (index, file, result) {
                    // console.log(index);
                    files.push(index);
                    // console.log(files);
                });
            },
            done: function (res) {

                //上传完毕回调
                if (res) {
                    callback(res, type)

                }
                layer.close(loading)

            },
            error: function () {
                //请求异常回调
            }
        });
    });

}

function uploadFile(id, showId) {

    var loading, files = []
    layui.use('upload', function () {
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({
            elem: '#' + id, //绑定元素				
            url: ipUploadUrl, //上传接口		
            accept: 'file',
            auto: true,
            multiple: true,
            number: 10,
            before: function (obj) {
                //				files = obj.pushFile();
                loading = layer.msg("正在上传...", {
                    time: 3000
                })

                //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
                obj.preview(function (index, file, result) {
                    // console.log(index);
                    files.push(index);
                    // console.log(files);
                });
            },
            done: function (res) {

                //上传完毕回调
                if (res) {
                    // console.log(res)
                    //回显图片
                    showImg(showId, res.filepath, res.filename, "new")

                }
                layer.close(loading)

            },
            error: function () {
                //请求异常回调
            }
        });
    });

}

function showImg(id, src, name, type, imgId) { //给服务器上传图片待到服务器返回地址之后回显这个图片

    let html = '<li class="picture-moudle " type="' + type + '">' +
        '<i class="delete" onclick="deleteFileImg(this)" type="' + type + '" imgid="' + imgId + '"></i>' +
        '<div>' +
        '<div class="picture-moudle-img">' +
        '<img  onclick=lookPicx("' + src + '") src=' + httpip + src.replace("ss.", ".") + ' data="' + src + '" alt="" />' +
        '</div>' +
        '<div class="picture-moudle-text">' +
        '<p class="imgName">' + name + '</p>' +
        '</div>' +
        '</div>' +
        '</li>'
    $("#" + id).append(html)
}

function lookPicx(imgSrc) {

    ShowVideox(false, imgSrc, '90%', '90%', 1, "03");

}

function ShowVideox(mtitle, mpath, w, h, clobtn, system) {
    if (mpath == '') {
        layer.msg('未找到文件');
    } else {
        // console.log(mpath);
        var yl = false;
        url = basePathImg + '/imgTools/ShowImage.html?path=' + mpath.replace("ss.", ".");
        // console.log(url)
        yl = true;
    }

    if (yl) {
        if (clobtn) {
            clobtn = 1;
        } else {
            clobtn = clobtn;
        }
        var index = layer.open({
            type: 2,
            content: url,
            area: [w, h],
            title: "查看",
            closeBtn: clobtn,
            shadeClose: true
        });
    } else {
        layer.msg('当前格式暂不支持预览', {
            icon: 2,
            time: 2000,
            anim: 5
        });
    }

}

function ShowVideo(mtitle, mpath, w, h, clobtn) {
    // console.log(w)

    if (mpath == '') {
        layer.msg('未找到文件');
    } else {
        var yl = false;

        var index = mpath.lastIndexOf("\.");
        var r = mpath.substring(index + 1, mpath.length);

        //		var r = mpath.split('.');
        var url = basePathImg + "/video/ShowVideo.html?path=" + mpath;

        switch (r.toLowerCase()) {
            case "doc":
            case "docx":
            case "txt":
            case "zip":
            case "rar":
            case "xls":
            case "xlsx":
                break;
            case "pdf":
                //              url = '/widget/pdfD/ShowPDF.html?path=' + mpath;
                url = basePathImg + '/pdfViewer/pdfView.html?path=' + escape(mpath);
                yl = true;
                break;
            case "png":
            case "jpg":
            case "bmp":
            case "gif":
            case "jpeg":
            case "tiff":
            case "psd":
            case "svg":
                url = basePathImg + '/imgTools/ShowImage.html?path=' + mpath;
                yl = true;
                break;
            case "3gp":
            case "asf":
            case "avi":
            case "flv":
            case "mkv":
            case "mov":
            case "mp4":
            case "mpeg":
            case "n avi":
            case "rmvb":
            case "wmv":
            case "swf":
            case "mp5":
                url = basePathImg + "/video/ShowVideo.html?path=" + mpath;
                yl = true;
                break;
            default:
                yl = false;

        }
        if (yl) {
            if (clobtn) {
                clobtn = 1;
            } else {
                clobtn = clobtn;
            }
            var index = layer.open({
                type: 2,
                //      maxmin: true,
                content: url,
                area: [w + "px", h + "px"],
                title: mtitle,
                closeBtn: clobtn,
                shadeClose: true
            });
        } else {
            layer.msg('当前格式暂不支持预览', {
                icon: 2,
                time: 2000,
                anim: 5
            });
        }

    }

}
// 查看图片
function seeImg(id, src, name, type, imgId) { //给服务器上传图片待到服务器返回地址之后回显这个图片

    let html = '<li class="picture-moudle " type="' + type + '">' +
        '<div>' +
        '<div class="picture-moudle-img">' +
        '<img onclick=lookPicx("' + src + '") src=' + httpip + src.replace("ss.", ".") + ' data="' + src + '" alt="" />' +
        '</div>' +
        '<div class="picture-moudle-text">' +
        '<p class="imgName">' + name + '</p>' +

        '</div>' +
        '</div>' +
        '</li>'

    $("#" + id).append(html)
}

function chooseImg(id, src, name, type, imgId) { //给服务器上传图片待到服务器返回地址之后回显这个图片
    // console.log(httpip)
    let html = '<li class="picture-moudle " type="' + type + '"  picId="' + imgId + '">' +
        '<input type="checkbox" />' +
        '<div>' +
        '<div class="picture-moudle-img">' +
        '<img onclick=lookPicx("' + src + '") src="' + httpip + src.replace("ss.", ".") + '" data="' + src + '" alt="" />' +
        '</div>' +
        '<div class="picture-moudle-text">' +
        '<p class="imgName">' + name + '</p>' +
        '<input type="checkbox" class="check" checked="checked"/>' +
        '</div>' +
        '</div>' +
        '</li>'
    $("#" + id).append(html)
}
//删除图片
function deleteFileImg(that) {

    submitDataTip("确定要删除图片吗?", function () {
        //从当前表单删除图片
        if ($(that).attr("type") == "old") { //之前添加的图片,需要从表里删除
            PostData({
                XDLMCID: "4000",
                XDLMSID: "DYBH201906031130243024118124",
                XDLMROWID: $(that).attr("imgid")
            }, function (returnData) {
                if (returnData.success) {
                    $(that).parents(".picture-moudle").remove()
                }
            })
        } else {
            $(that).parents(".picture-moudle").remove()

        }
    })

}
//***上传图片相关部分end****

function getProject(rowid) { //获取项目基础信息
    PostData({
        page: 1,
        rows: 1,
        XDLMCID: 1001,
        XDLMSID: "DYBH20190603113024302420431",
        QueryType: "项目编号",
        QueryKey: rowid

    }, function (data) {
        if (data.success) {
            for (var k in data.rows[0]) {
                $("#" + k).html(data.rows[0][k])
            }

        }
    })
}
//获取文物信息
function getWWbaseData(wwknbh) { //获取项目基础信息
    PostData({
        page: 1,
        rows: 1,
        XDLMCID: 1001,
        XDLMSID: "DYBH2019060311302430249401",
        XDLMB: wwknbh

    }, function (data) {
        if (data.success) {
            //          for (var k in data.rows[0]) {
            $("#文物名称").html(data.rows[0]["登记名称"])
            //          }
            updateStepStatus(data.rows[0].修复中节点名)
            //          var currentStepName = data.rows[0].修复中节点名
            //          $(".process-text").each(function(key, val) {
            //
            //              if ($(val).children("p").text() == currentStepName) {
            //                  //先判断当前是否是当前页面
            //                  if (!$(val).siblings(".process-step").hasClass("process-active")) {
            //                      $(val).siblings(".process-step").addClass("process-end")
            //
            //
            //                  } else {
            //
            //                      $(".next-content").css("display", "block");
            //                  }
            //                  return false
            //
            //              } else {
            //                  if (!$(val).siblings(".process-step").hasClass("process-active")) {
            //                      $(val).siblings(".process-step").addClass("process-end")
            //                  }
            //                  // console.log($(val).find("p").text())
            //              }
            //          })

        }
    })
}

function updateStepStatus(stepName) {
    var currentStepName = stepName
    $(".process-text").each(function (key, val) {

        if ($(val).children("p").text() == currentStepName) {
            //先判断当前是否是当前页面
            if (!$(val).siblings(".process-step").hasClass("process-active")) {
                $(val).siblings(".process-step").addClass("process-end")

            } else {

                $(".next-content").css("display", "block");
                $("#submit").css("display", "inline-block")
                $(".xiugai").css("display", "none");
            }
            return false

        } else {
            if (!$(val).siblings(".process-step").hasClass("process-active")) {
                $(val).siblings(".process-step").addClass("process-end")
            }
            // console.log($(val).find("p").text())
        }
    })
}
//更改当前节点状态
function updateCurrentStep(stepName, stepNum, rowid) {
    PostDataAsync({
        XDLMCID: 6000,
        XDLMSID: "DYBH20190603113024302410405",
        XDLMID: rowid,
        XDLM修复中节点名: stepName,
        XDLM修复中节点序号: stepNum
    }, function () {

    })
}
//增加流程运行记录表
function runList(jdName, jdNum, wwNub) {
    PostDataAsync({
        XDLMCID: 5000,
        XDLMSID: "DYBH20190603113024302410313",
        XDLM执行人: getCookie("mUserName"),
        XDLM执行时间: currentDate() + " " + currentTime(),
        XDLM节点名称: jdName,
        XDLM节点序号: jdNum,
        XDLM文物编号: wwNub
    }, function () {

    })
}
// 添加【文物_档案记录表】
function recordList(dawwknbh, daxmbh, datype) {
    PostData({
        XDLMCID: 5000,
        XDLMSID: "DYBH201907221528212821151183",
        XDLM操作人: getCookie("mUserName"),
        XDLM记录时间: currentDate() + " " + currentTime(),
        XDLM文物库内编号: dawwknbh,
        XDLM项目编号: daxmbh,
        XDLM类型: datype

    }, function (returnData) {

    })
}



function gobanck() {
    if (operate == "edit") {
        form.on('submit(wwlbbtn)', function (obj) {
            submitDataTip("确定要返回档案列表吗？", function () {
                changePage("../../page/wwgl/SY_WW_List.html?zt=51&limit=2019071817035135181061178124");
            })
            return false;
        })

    } else {
        form.on('submit(wwlbbtn)', function (obj) {
            submitDataTip("确定要返回文物列表吗？", function () {
                changePage("../../page/wwgl/SY_WW_List.html?zt=23&kc=2&limit=20190716101258125888882411131");
            })
            return false;
        })

    }

}

// })

//显示按钮
function shHideBtn() {
    var flag = operate
    return flag
}