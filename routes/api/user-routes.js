const User = require('../../models/user');

const router = require('express').Router();


router.get('api/users', (req,res) => {
    //get all of the users
    User.find({})
     .populate('thoughts')
     .populate('friends')
     .then((users) => {
        res.json(users);
     });

});

router.get('api/users/:id', (req,res) =>{
    //get user by id
});

router.post('api/users', (req,res) => {
    //create a user
});

router.put('api/users/:id', (req,res) =>{
    //update a user
});

router.delete('api/users/:id', (req,res) =>{
    //delete a user
});

module.exports = router;