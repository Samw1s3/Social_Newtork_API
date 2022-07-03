// const User = require('../../models/user');
// const Thought = require('../../models/thoughts');

const router = require('express').Router();

const {
    getThoughts,
    createThought,
    findThought,
    updateThought, 
    removeThought, 
    addReaction,
    removeReaction,
} = require('../../controllers/thought-controller')


//get all of the thoughts
// http://localhost:3001/thoughts
router.route('/').get(getThoughts).post(createThought);

//get thought by id
// http://localhost:3001/thoughts/:id
router.route('/:id').get(findThought);

//update a thought
// http://localhost:3001/thoughts/:id
router.route('/:id').get(findThought).put(updateThought);
//delete a thought
// http://localhost:3001/thoughts/:id/thought/:thoughtId
router.route('/:id/thought/:thoughtId').delete(removeThought);

//add a reaction
// http://localhost:3001/thoughts/:id
router.route('/:id').post(addReaction);

//delete a reaction
// http://localhost:3001/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);


module.exports = router;