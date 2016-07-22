/**
 * Created by Administrator on 2016/7/19.
 */

exports.index=function(req,res){
    console.log('首页');
    // console.log('======session=======');
    // console.log(req.session.user);
    // console.log('======session=======');
    if(!req.session.user){
        res.redirect('/login');
    }
    res.render('index', { title: 'index', message: '我是首页22',tip:req.session.user||''});
};
