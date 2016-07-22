/**
 * Created by Administrator on 2016/7/19.
 */
exports.list=function(req,res){
    console.log('列表页');
    res.render('list/list', { title: 'list', message: '我是列表页22'});
};