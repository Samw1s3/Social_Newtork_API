const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
        body: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
        },
    }, {
    id: true,
    timestamps: true,
    }
);

const thoughtSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    reactions: [
      reactionSchema
    ],
  },
  {
    id: true,
    timestamps: true,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
