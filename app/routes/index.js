const comments=require('./comments');
const auto=require('./autocomplete');

module.exports=function(app,db){
    comments(app,db);
    auto(app,db);
};