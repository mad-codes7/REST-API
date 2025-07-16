const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');

const app= express();
const PORT = 8080;

//middleware
app.use(express.urlencoded({ extended : false}))

app.get('/',(req,res)=>{ //ok tested
    res.send("This is home page")
})

app.route('/api/users')
.get((req,res)=>{ //ok testsed
    return res.json(users);
})
.post((req,res)=>{
    const body = req.body;
    console.log(body);
    users.push({id : users.length+1, ...body});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err,data)=>{
        return res.json({status : "Success", id : users.length})
    })
})

app.route('/api/users/:id') //tested ok
.get((req,res)=>{
    const id = Number(req.params.id);
    let user = users.find((user)=>user.id===id)
    return res.json(user);
})
.patch((req,res)=>{ //OK TESTED
    const id = Number(req.params.id);
    let user = users.find((user)=>user.id === id)
    // res.send(`Welcome back ${user.first_name} ${user.last_name}. You can edit your data here.`)

    const updates = req.body;
    // console.log(updates);
    for(let key in updates){
        user[key]=updates[key]; 
    }
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status : "Success", id : users.length});
    })
    

})

app.listen(PORT,()=>{
    console.log(`Server successfully started on PORT: ${PORT}`);  
})