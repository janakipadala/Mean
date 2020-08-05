const express = require('express');
const bodyparser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next )=>{
  res.setHeader("Access-control-Allow-Origin", "*");
  res.setHeader("Access-control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
  res.setHeader("Acess-Control-Allow-,Methods", "GET, POST,PATCH,DELETE,OPTIONS");
  next();
});

app.post("/api/posts",(req,res, next)=>{
  const posts = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});
app.get('/api/posts', (req, res, next) => {
const posts= [
{
  id: 'fad',
  title: 'first server-side post',
  content: 'This is coming'
},
{
  id: 'fad2',
  title: 'first name',
  content: 'winter is coming'
}

];
 res.status(200).json({
  message: 'posts fetch susccessfully',
  posts: posts
});
next
});
module.exports = app;
