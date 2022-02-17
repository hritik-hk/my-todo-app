const express=require('express');
const app=express();
const port=3000;
const {getDate,getDay}=require(`${__dirname}/date.js`);

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/public`));

let tasks=[];

app.get('/',(req,res)=>{

const today=getDate();
 
   res.render('list',{currDay:today, tasks:tasks});
})

app.post("/",(req,res)=>{
    const newTask=req.body.newTask;
   tasks.push(newTask);
    res.redirect('/');
})

app.post('/remove',(req,res)=>{
    const removeTask=req.body.task;
    tasks=tasks.filter(item => item !==removeTask);
    res.redirect('/');
})



app.listen(process.env.PORT || port, ()=>{
    console.log("server is running at port 3000");
})