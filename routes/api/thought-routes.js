// const User = require('../../models/user');
// const Thought = require('../../models/thoughts');

const router = require('express').Router();

const {
    getThoughts,
    createThought,
} = require('../../controllers/thought-controller')

router.route('/').get(getThoughts).post(createThought);

// router.get('api/thoughts', (req,res) => {
//     //get all of the thoughts
//     console.log("these are all the thoughts")
//         Thought.find()
//           .then((thoughts) => 
//           !thoughts
//           ? res.status(404).json( {message: 'No thoughts found'})
//           : res.json(thoughts))
    
    
// });

// router.get('api/thoughts/:id', (req,res) =>{
//     //get thought by id
// });

// // router.post('api/thoughts', (req,res) => {
// //     //create a thought
// //     console.log("you are creating a thought")
// //     Thought.create({text: req.body.text})
// //     .then((thought) => {
// //         User.findOneAndUpdate(
// //             {_id: req.body.user_id}, 
// //             {$addToSet: { thought: req.body.text}},
// //             { runValidators: true, new: true },
// //             res.json(thought)     
// //         )
        
// //     .catch((err) => res.status(500).json(err,req.body));
// //     })
// // });



// router.put('api/thoughts/:id', (req,res) =>{
//     //update a thought
// });

// router.delete('api/thoughts/:id', (req,res) =>{
//     //delete a thought
// });

module.exports = router;