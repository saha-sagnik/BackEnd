import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

//get a list of any data

app.get('/friends',(req,res)=>{
    const friends =[
        {
            id: 1,
            title: 'Ayush'
        },
        {
             id: 2,
             title: 'Ajay'   
        },
        {
            id: 3,
            title: 'Madhuri'
        }
    ];
    res.send(friends);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})