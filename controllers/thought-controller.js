const { Thought, User } = require('../models');

const thoughtController = {
    // get all thoughts 
    getThoughts(req, res) {
        Thought.find()
            .sort({ createdAt: -1 })
            .then((thoughtData) => {
                res.json(thoughtData)
            })
            .catch((error) => {
                console.log(error)
                res.status(500).json(error)
            })
    },
    // get one thought by id
    findThought(req, res) {
        Thought.findOne({ _id: req.params.id })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json({ thought })
            )
    },
    // create thought 
    createThought(req, res) {
        Thought.create(req.body)
            .then((thoughtData) => {
                return User.findOneAndUpdate(
                    // id or UserId or user_id???
                    { _id: req.body.user_id },
                    { $push: { thoughts: thoughtData._id } },
                    { new: true }
                );
            })
            .then((userData) => {
                if (!userData) {
                    return res.status(404).json({ message: 'created but user no exists ' })
                }
                res.json({ message: 'successs creating thought' })
            })
            .catch((error) => {
                console.log(error)
                res.status(500).json(error)
            })
    },
    // update thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true })
            .then((thoughtData) => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'No user with this id!' });
                    return;
                }
                res.json(thoughtData)
            })
            .catch((err) => res.status(500).json(err));
        
    // delete thought 
    },
    removeThought(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { thoughts: req.params.thoughtId } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No user found with that ID :(' })
                    : Thought.findOneandDelete(
                        {_id: req.params.thoughtId},
                        { $pull: { thoughts: req.params.thoughtId  } },
                        {new:true}
                        )
            )
            .then(() => res.json({message: 'Thought deleted'}))
            .catch((err) => res.status(500).json(err));
    },
    // add a reaction 
    addReaction (req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { reactions: req.body } },
            { new: true })
            .then((reactionData) => {
                if (!reactionData) {
                    res.status(404).json({ message: 'No thought with this id!' });
                    return;
                }
                res.json(reactionData)
            })
            .catch((err) => res.status(500).json(err));
    },
        // remove a reaction
    deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
        { _id: params.id },
        { $pull: { reactions: params.reactionId } },
        { new: true }
    )
        .then(thoughtData => res.json(thoughtData))
        .catch(err => res.json(err));
    },

};


module.exports = thoughtController;