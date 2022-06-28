const { Thought, User } = require('../models');

const thoughtController = {
    // get all thoughts 
    getThoughts(req, res) {
        Thought.find()
        .sort({ createdAt: -1})
        .then((thoughtData) => {
            res.json(thoughtData)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json(error)
        })
    },
    // get one thought by id
    findThought(req,res) {
        Thought.findOne({_id: req.params.id})
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json({thought})
        )
    },
    // create thought 
    createThought(req, res) {
        Thought.create(req.body)
            .then((thoughtData) => {
                return User.findOneAndUpdate(
                    // id or UserId or user_id???
                    { _id: req.body.user_id },
                    { $push: { thoughts: thoughtData._id }},
                    { new: true }
                );
            })
            .then((userData) => {
                if (!userData) {
                    return res.status(404).json({ message: 'created but user no exists '})
                }
                res.json({ message: 'successs creating thought'})
            })
            .catch((error) => {
                console.log(error)
                res.status(500).json(error)
            })
    },
    // update thought
    updateThought(req,res) {
       Thought.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new:true})
        .then((thoughtData) => {
            if (!thoughtData) {
                res.status(404).json({ message: 'No user with this id!' });
                return;
            }
            res.json(thoughtData)
        })
            .catch((err) => res.status(500).json(err));
    },
    // delete thought 
    deleteThought(req,res) {

    },
    // add a reaction 
    addReaction(req,res) {

    },
    // remove a reaction
    deleteReaction(req,res) {

    },
};

module.exports = thoughtController;