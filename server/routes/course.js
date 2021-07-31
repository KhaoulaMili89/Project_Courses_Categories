const express = require('express')
const router = express.Router();
const{ add_Course,get_Course, delete_Course, get_Course_ByInstr }=require('../controllers/course');
const { authMiddleware } = require('../middleware/userAuth');

router.post('/newcourse',authMiddleware,add_Course)
router.get('/',get_Course)
router.delete('/deletecourse/:id',delete_Course)
router.get('/:id',get_Course_ByInstr)


module.exports = router;

