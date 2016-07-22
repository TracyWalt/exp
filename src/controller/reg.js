/**
 * Created by Administrator on 2016/7/20.
 */
//数据操作对象
var User = require('../db/user');

exports.reg=function(req,res){
    console.log('注册页');
    res.render('reg', { title: 'reg', message: '注册',tip:''});
}

exports.singup=function(req,res){
    var username = req.body.username;
    var password = req.body.password;

    if(username && password){

        var userdata = {"username":username,"password":password};
        var user = new User(userdata);

        //保存数据
        user.save(function(err) {
            if (err) {
                console.log('注册失败');
            }else{
                console.log('注册成功');
                req.session.user = username;
                return res.redirect('/');
            }
        });
    }else{
        res.render('reg', { title: 'reg', message: '注册',tip:'用户名密码不能为空'});
    }
}