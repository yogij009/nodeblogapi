const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let CommentSchema = new Schema({
    author: {type: String, required:true, max: 100},
    comment: {type: String,required:true, max: 500},
    posted_at: {type: Date},
    likes_count:{type: Number},
    dislikes_count:{type:Number}

});

mongoose.connect("mongodb://localhost:27017/productdata", {useNewUrlParser: true})
.then(() => {
    console.log('Connected to the database!');
})
.catch((err) => {
    console.log('Connection failed', err);
});


// Export the model
module.exports = mongoose.model('Comment', CommentSchema);