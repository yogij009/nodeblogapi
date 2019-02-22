const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BlogSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true},
    phoneno: {type: Number,required:true},
    description: {type:String,required:true,max:100}

});

mongoose.connect("mongodb://localhost:27017/productdata", {useNewUrlParser: true})
.then(() => {
    console.log('Connected to the database!');
})
.catch((err) => {
    console.log('Connection failed', err);
});


// Export the model
module.exports = mongoose.model('Blog', BlogSchema);