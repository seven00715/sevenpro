var article = {
    hotpic: function (callback) {
        $.get(apis.article_hotpic, function (res) {
            callback(res);
        })

    },
    rank: function (callback) {
        $.get(apis.article_rank, function (res) {
            callback(res)
        })
    },
    latest:function(callback){
        $.get(apis.article_latest,function(res){
            callback(res)
        })
    },
    article:function(id,callback){

        $.get(apis.article_article,{id:id},function(res){
            callback(res);
        })
    },
    search:function(data,callback){
        $.get(apis.article_search,data,function(res){
            callback(res);
            
        })
    }
}