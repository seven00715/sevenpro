// var baseUrl = 'http://localhost:8000/';

var category = {
    //获取分类
    get: function (callback) {
        $.ajax({
            type: "GET",
            url: apis.category_get,

            success: function (res) {
                console.log(res);
                callback(res);

            }
        })
    },

    //新增分类

    add: function (name, slug, callback) {
        $.post(apis.category_add, { name, slug }, function (res) {
            // alert(res.msg)
            // //重新渲染页面
            // loadData();
            callback(res);


        })

    },

    //删除分类
    delete: function (id, callback) {
        $.post(apis.category_delete, { id }, function (res) {

            console.log(res);
            callback(res);
            // alert(res.msg);

            // if (res.code == 200) {

            //     that.parents("tr").remove();
            // }

        })

    },

    //编辑分类
    edit: function (id, name, slug, callback) {


        $.post(apis.category_edit, { id, name, slug }, function (res) {
            console.log(res);
            callback(res);
            // alert(res.msg);
            // //渲染页面
            // loadData();

        })


    }
}