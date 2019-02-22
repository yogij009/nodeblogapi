const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const blog_controller = require('../controller/blog.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', blog_controller.test);
router.post('/create', blog_controller.blog_create);
router.get('/:id', blog_controller.blog_details);
router.put('/update/:id', blog_controller.blog_update);
router.delete('/delete/:id', blog_controller.blog_delete);
module.exports = router;