const User = require('../../models/user');

const router = require('express').Router();


router.get('/api/users', (req,res) => {
    //get all of the users
    User.find({})
     .populate('thoughts')
     .populate('friends')
     .then((users) => {
        res.json(users);
     })

});

router.get('/api/users/:id', (req,res) =>{
    //get user by id
    User.findOne({_id: req.params.user_id})
    .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
              student
            }))
});

router.post('/api/users', (req,res) => {
    //create a user
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
});

router.put('/api/users/:id', (req,res) =>{
    //update a user
});

router.delete('/api/users/:id', (req,res) =>{
    //delete a user
    User.findOne({ _id: req.params.userId })
});

module.exports = router;