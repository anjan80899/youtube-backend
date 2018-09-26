const comments=require('./comments');

module.exports=function(app,db){
    comments(app,db);
};