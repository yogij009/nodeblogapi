const Blog = require('../models/blog.model');



exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
// insert data
exports.blog_create = function (req, res,next) {
    
    let blog = new Blog(
        {
            name: req.body.name,
            email: req.body.email,
            phoneno:req.body.phoneno,
            description:req.body.description
        }
    );

    blog.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('blog Created successfully');
    })
};

// getbyid
exports.blog_details = function (req, res,next) {
    debugger;
    Blog.findById(req.params.id, function (err, blog) {
        if (err) return next(err);
        res.send(blog);
    })
};

//update the data 
exports.blog_update = function (req, res) {
    Blog.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, blog) {
        if (err) return next(err);
        res.send('blog udpated.');
    });
};

// delete the data
exports.blog_delete = function (req, res,next) {
    Blog.findOneAndDelete(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};