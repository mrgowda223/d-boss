var express=require('express')
var app=express()



app.route('/home')
.get((req,res)=>{
    res.send('<h1>hello world</h1>')
})

.put((req,res)=>{
    res.send('hello')
})
.delete((req,res)=>{
    res.send('hello')
})
.post((req,res)=>{
    res.send('hello')
})



app.listen(8004,()=>{
    console.log('it is working port no 8004')
})
