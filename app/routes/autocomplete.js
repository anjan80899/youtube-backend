module.exports=function(app,db){
    app.get('/autocomplete/:id',(req,res)=>{
        res.send(search(req.params.id));
    });
    app.post('/autocomplete',(req,res)=>{
        console.log(req.body.text);
        add(req.body.text);
        res.send('ok');
    })
}
class TrieNode{
    constructor(ch){
      this.value=ch;
      this.children={};
      this.IsEnd=false;
    }
  }
  var root=new TrieNode('.');
  function add(word){
    var length=word.length;
    console.log(word);
    var crawl=root;
    for(let i=0;i<length;i++){
      var ch=word[i];
      var child=crawl.children;
      if(child[ch]!==undefined){
        crawl=child[ch];
      }else{
        child[ch]=new TrieNode(ch);
        crawl=child[ch];
  //       console.log(child[ch]);
      }
    }
    crawl.IsEnd=true;
  }
  
  function search(word){
    var ans=[];
    var isTrue=true;
    var length=word.length;
    var crawl=root;
    for(let i=0;i<length && isTrue;i++){
      var ch=word[i];
      var child=crawl.children;
      if(child[ch]!==undefined){
        crawl=child[ch];
      }else{
        isTrue=false;
        
      }
    }
    if(isTrue) ans=searchWord(word,ans,crawl);
    return ans;
  }
  function searchWord(word,ans,crawl){
  //   console.log(word);
    if(ans.length>5) return ans;
    if(crawl.IsEnd) ans.push(word);
  //    console.log(crawl.children)
    for(i in crawl.children){
  //     console.log(crawl.children[i])
     ans= searchWord(word+crawl.children[i].value,ans,crawl.children[i]);
    }
    return ans;
  }
  add('anjan');
add('all is well');
add('wish U');
add('anu emmaunuel');
add('dynamic developers');
add('micheal jackson');
add('mike tyson');
add('micheal jackson beat it');