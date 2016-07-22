/**
 * Created by Administrator on 2016/7/19.
 */

var express = require('express');
var router = express.Router();
var indexController = require('../controller/index');
var listController = require('../controller/list');
var loginController = require('../controller/login');
var regController = require('../controller/reg');

//登录
router.get('/login',loginController.login);
router.post('/login',loginController.signin);

//注册
router.get('/reg',regController.reg);
router.post('/reg',regController.singup);
//首页
router.get('/',indexController.index);

//列表页
router.get('/list',listController.list);

// router.get('/',function(req,res){
//     res.render('index', { title: 'index', message: '我是首页'});
//     //res.send('我是首页');
// });

// router.get('/list',function(req,res){
//     res.render('list/list', { title: 'list', message: '我是列表页'});
// });

module.exports = router;