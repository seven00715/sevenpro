var baseUrl = 'http://localhost:8000/';

var apis = {

    category_get: baseUrl + "admin/category_search",//获取分类
    category_add: baseUrl + "admin/category_add",//添加分类
    category_delete: baseUrl + "admin/category_delete",//删除分类
    category_edit: baseUrl + "admin/category_edit",//编辑分类

    // user_login : baseUrl + "admin/login",//登录
    // user_logout : baseUrl + "admin/logout",//退出
    // user_getInfo : baseUrl + "admin/getuser",//获取用户资料


    //文章相关接口
    article_get: baseUrl + "admin/search",//获取文章
    article_add: baseUrl + "admin/article_publish",//发布文章

    article_delete:baseUrl+"admin/article_delete", //删除文章
    article_edit:baseUrl+"admin/article_edit", //编辑文章

    
}