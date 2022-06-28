const User = require('../../models/user');
const Thought = require('../../models/thoughts')

const router = require('express').Router();


router.get('/', (req,res) => {
    //get all of the users
    User.find({})
     .populate('thoughts')
     .populate('friends')
     .then((users) => {
        res.json(users);
     })

});

router.get('/:id', (req,res) =>{
    //get user by id
    User.findOne({_id: req.params.id})
    .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({user})
        )
});

router.post('/', (req,res) => {
    //create a user
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
});

router.put('/:id', (req,res) =>{
    //update a user
    User.findOneAndUpdate(
        {_id: req.params.id},
        {$set: req.body},
        {new:true})
    .then((user) => {
        if (!user) {
            res.status(404).json({ message: 'No user with this id!' });
            return;
        }
        res.json(user)
    })
        .catch((err) => res.status(500).json(err));

});

router.delete('/:id', (req,res) =>{
    //delete a user
    User.findOneAndRemove({ _id: req.params.id })
        .then((user) => 
            !user
             ? res.status(404).json({message: 'No user exists by the ID'})
             : Thought.findOneAndUpdate(
                {users: req.params.id},
                {$pull: {users: req.params.id}},
                {new:true}
             )
        )
        .then((thought) => 
          !thought
           ? res.status(404).json({ message: 'User deleted, but no thoughts found',}) 
           : res.json({ message: 'User successfully deleted'})
           )
           .catch((err) => {
            console.log(err);
            res.status(500).json(err, {message:"whoops caught an err"});
           })
});

module.exports = router;