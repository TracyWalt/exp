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

    // if(username && password){
    //     req.session.user = username;
    //     var userdata = {"username":username,"password":password};
    //     var user = new User(userdata);
    //     console.log('=======user22==========');
    //     User.find({username:'walt'},function(err,docs){
    //         console.log(docs);
    //         console.log('find success');
    //     });
    //     console.log('=========user22//========');
    //     //保存数据
    //     user.save(function(err) {
    //         if (err) {
    //             console.log('保存失败');
    //         }else{
    //             console.log('数据保存成功');
    //             return res.redirect('/');
    //         }
    //     });
    //     //res.redirect('/');
    // }else{
    //     res.render('login', { title: 'login', message: '登录',tip:'用户名密码不能为空'});
    // }
}