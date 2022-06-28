// const User = require('../../models/user');
// const Thought = require('../../models/thoughts');

const router = require('express').Router();

const {
    getThoughts,
    createThought,
    findThought,
    updateThought, 
    deleteThought, 
    addReaction,
    deleteReaction,
} = require('../../controllers/thought-controller')


//get all of the thoughts
router.route('/').get(getThoughts).post(createThought);

//get thought by id
router.route('/:id').get(findThought);

//update a thought
router.route('/:id').get(findThought).put(updateThought);
//delete a thought



module.exports = router;