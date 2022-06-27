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

    // create thought 
    createThought(req, res) {
        Thought.create(req.body)
            .then((thoughtData) => {
                return User.findOneAndUpdate(
                    // id or UserId or user_id???
                    { id: req.body.user_id },
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

    // delete thought 

    // add a reaction 

    // remove a reaction
};

module.exports = thoughtController;