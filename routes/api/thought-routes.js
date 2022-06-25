const User = require('../../models/user');

const router = require('express').Router();


router.get('api/thoughts', (req,res) => {
    //get all of the thoughts
   

});

router.get('api/thoughts/:id', (req,res) =>{
    //get thought by id
});

router.post('api/thoughts', (req,res) => {
    //create a thought
    Thought.create({
        text: req.body.text,
    })
    .then((thought) => {
        User.findByIdAndUpdate(req.body.user_id, {
            $push: {
                thoughts: thought_id
            }
        })
    })
});

router.put('api/thoughts/:id', (req,res) =>{
    //update a thought
});

router.delete('api/thoughts/:id', (req,res) =>{
    //delete a user
});

module.exports = router;