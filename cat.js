





const express=require('express')


const app=express()
app.listen(9000,'localhost',(err)=>{
    if(err) throw err;
})
app.set('view engine','ejs')
app.get('/addition',(req,res)=>{
res.render('./calculator')
}
)
app.get('/multiplication',(req,res)=>{
    res.render('../calculator')

    
})


