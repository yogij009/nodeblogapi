const Comments = require('../models/commentdata');
let faker = require('faker');

exports.test = function (req, res) {
    res.send('Greetings from the Comment controller!');
};


exports.comment_create = function (req, res,next) {
 
    let comment = new Comments(
        {        
            author: req.body.author,
            comment: req.body.comment,
            posted_at:faker.date.past(),
            likes_count:Math.round(Math.random() * 20),
            dislikes_count:Math.round(Math.random() * 20)
        }
        
    );
    console.log(comment);
    comment.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Comment Created successfully');
    })
};

exports.comment_details = function (req, res,next) {
   
    Comments.findById(req.params.id, function (err, comment) {
        if (err) return next(err);
        res.send(comment);
    })
};

//update the data 
exports.comment_update = function (req, res) {
    Comments.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, comment) {
        if (err) return next(err);
        res.send('comment udpated');
    });
};

// delete the data
exports.comment_delete = function (req, res,next) {
    Comments.findOneAndDelete(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};