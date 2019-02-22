const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');
const blog = require('./routes/blog.route'); 
const comment = require('./routes/comment'); 
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/blog', blog);
app.use('/user',userRoute);
app.use('/comment',comment);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
}); 