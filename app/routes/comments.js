
module.exports=function(app,db){

    app.get('/comments/:id',(req,res)=>{
        
        db.collection('comments').find({id:req.params.id}).toArray(function(err,result){
           if(err) throw err;
           res.send(result); 
        })
    });
    

    app.post('/comments',(req,res)=>{
        const comment={id:req.body.id,text:req.body.text};

        console.log(req.body);
        db.collection('comments').insert(comment,(err,result)=>{
            if(err){
                res.send({'error':'An error has occured'});
            }else{
                res.send(result.ops[0]);
            }
        });
    });
};