/**
 * Created by Administrator on 2016/7/20.
 */
var mongoose = require("mongoose");

// 连接字符串格式为mongodb://主机/数据库名
mongoose.connect('mongodb://localhost:27017/exp');

// 数据库连接后，可以对open和error事件指定监听函数。
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    console.log('连接成功')
    //在这里创建你的模式和模型
});

var Schema = mongoose.Schema;
var userSchema = new Schema({
    username : String,
    password : String
})

var User = mongoose.model('User', userSchema);

//倒出模型
module.exports = User;