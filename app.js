/**
 * Created by Administrator on 2016/7/19.
 */
var express = require('express');
var app = express();

var bodyParser = require('body-parser');  //处理表单提交的数据
//处理客户端提交的JSON数据
// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart();
app.use(bodyParser.json({limit: '1mb'}));  //这里指定参数使用 json 格式 ,要写在所有路由之前，不然该功能就没有被启用
app.use(bodyParser.urlencoded({
   extended: true
}));

//session
var session = require('express-session');   //启用session
app.use(session({
   secret: 'session walt',
   resave: false,
   saveUninitialized: true
}));

//路由
var router = require('./src/router/router');  //路由中间件
app.use(router);


//设置模版路径和模版引擎
app.set('views', './src/views');
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));

//console.log(__dirname);

//端口
app.listen(3000,function(){
   console.log('server start...');
});
