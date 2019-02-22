const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const comment_controller = require('../controller/comment');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', comment_controller.test);
router.post('/create', comment_controller.comment_create);
router.get('/:id', comment_controller.comment_details);
router.put('/update/:id', comment_controller.comment_update);
router.delete('/delete/:id', comment_controller.comment_delete);



module.exports = router;