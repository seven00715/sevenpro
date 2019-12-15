// var baseUrl = 'http://localhost:8000/';

var user = {

    //登录方法

    login: function (username, password, callback) {
        //调用窗口验证用户名和密码是否正确
        //$.post(请求url,请求参数,回调函数,返回数据类型)
        $.post(baseUrl + "admin/login", { user_name: username, password: password }, function (res) {
            console.log(res);
            callback(res);
            // alert(res.msg);
            // $("#myMsg").text(res.msg)
            // $("#myModal").modal("show");//显示弹框

            // // alert(res.msg);
            // if (res.code == 200) {
            //     //成功跳转到后台首页
            //     location.href = 'index.html';
            // }

        });


    },

    //退出方法 
    logout: function (callback) {
        $.post(baseUrl + "admin/logout", function (res) {

            callback(res);
            //退出成功显示
            // if (res.code === 200 && confirm("确认要退出?")) {
            //     location.href = "login.html"
            // }
        });

    },
    //获取用户信息方法
    getInfo: function (callback) {
        $.get(baseUrl + "admin/getuser", function (res) {

            console.log(res);
            callback(res);
            // if (res.code === 200) {
            //     $(".touxiang").prop("src", res.data.user_pic);
            //     $("#myname").text(res.data.nickname).css("font-style", 'normal')


            // }

        })

    }


}
