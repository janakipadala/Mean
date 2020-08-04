const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
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
