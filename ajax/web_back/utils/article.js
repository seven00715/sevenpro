var article = {

    get: function (data, callback) {
        $.get(apis.article_get, data, function (res) {

            callback(res);
        });
    },

    add: function (fd, callback) {
        $.ajax({
            url: apis.article_add,
            type: "post",
            data: fd,
            success: function (res) {
                callback(res);
            },
            processData: false,
            contentType: false,
        });
    },

    delete: function (id, callback) {

        $.get(apis.article_delete, { id: id }, function (res) {
            callback(res);
        });

    },

    edit: function (fd, callback) {

        // $.post(apis.article_edit,data,function (res) {
        //     console.log(res);

        //     callback(res)

        // })
        $.ajax({
            url: apis.article_edit,
            type: "post",
            data: fd,
            success: function (res) {
                callback(res);
            },
            processData: false,
            contentType: false,
        });
    }

}