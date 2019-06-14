<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <base href="<%=basePath%>">

    <title></title>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
    <meta http-equiv="description" content="This is my page">

    <link rel="stylesheet" type="text/css" href="<%=path%>/static/assets/index/css/normalize.css" />
    <link rel="stylesheet" type="text/css" href="<%=path%>/static/assets/index/css/demo.css" />
    <!--必要样式-->
    <link rel="stylesheet" type="text/css" href="<%=path%>/static/assets/index/css/component.css" />

</head>

<body>
<div class="container demo-1">
    <div class="content">
        <div id="large-header" class="large-header">
            <canvas id="demo-canvas"></canvas>
            <div class="logo_box">
                <h3>X I A Y U N</h3>
                <h3>x y</h3>
                <form action="#" name="f" method="post">
                    <div class="input_outer">
                        <span class="u_user"></span>
                        <input name="logname" class="text" id="loginName" style="color: #FFFFFF !important" type="text" placeholder="请输入账户">
                    </div>
                    <div class="input_outer">
                        <span class="us_uer"></span>
                        <input name="logpass" id="password" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;"value="" type="password" placeholder="请输入密码">
                    </div>
                    <div class="mb2"><a class="act-but submit" href="javascript:void(0);" id="submit1" style="color: #FFFFFF">登录</a></div>
                </form>
            </div>
        </div>
    </div>
</div><!-- /container -->
<script src="<%=path%>/static/assets/index/js/TweenLite.min.js"></script>
<script src="<%=path%>/static/assets/index/js/EasePack.min.js"></script>
<script src="<%=path%>/static/assets/index/js/rAF.js"></script>
<script src="<%=path%>/static/assets/index/js/demo-1.js"></script>
<script src="<%=path %>/static/js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js"></script>　
<script>
    $(function () {
        $("#submit1").click(function () {

            var loginName = $("#loginName").val();
            var password = $("#password").val();

            if (loginName == '') {
                $("#loginName").focus();
                return;
            }
            if (password == '') {
                $("#password").focus();
                return;
            }

            var json = {
                loginName: $('#loginName').val(),
                password: $('#password').val()
            };
            //json字符串 {"username":"admin","password":"123456"}
            var postdata = JSON.stringify(json);//json对象转换json字符串
            $.ajax({
                /**
                 * (默认: true) 默认情况下，通过data选项传递进来的数据，如果是一个对象(技术上讲只要不是字符串)，
                 * 都会处理转化成一个查询字符串，以配合默认内容类型 "application/x-www-form-urlencoded"。
                 * 如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。
                 */
                contentType: "application/json; charset=utf-8",
                type: 'POST',
                url: '<%=path %>/login/login',
                data: postdata,
                dataType: 'text',
                success: function (data) {
                    if(data == "S"){
                        alert("s");
                        //window.location.href = "<%=path%>/login/login";
                    } else {
                        // 登录失败
                        alert("登录失败，请重新登录！");
                    }
                },
                error: function (e) {

                }
            });
        });
    });
</script>
</body>
</html>
