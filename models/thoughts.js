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
    user_id: {
        type: String,
        required: true
    }
  },
  {
    id: true,
    timestamps: true,
  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
