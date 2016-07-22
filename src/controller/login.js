/**
 * Created by Administrator on 2016/7/20.
 */
//数据操作对象
var User = require('../db/user');

exports.login=function(req,res){
    console.log('登录页');
    res.render('login', { title: 'login', message: '登录',tip:''});
}

exports.signin=function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    User.find({username:username,password:password},function(err,docs){
        //console.log(docs);
        if(docs.length){  //登录成功
            req.session.user = username;
            res.redirect('/');
        }else{
            res.render('login', { title: 'login', message: '登录',tip:'用户名或密码不正确'});
        }
    });
}