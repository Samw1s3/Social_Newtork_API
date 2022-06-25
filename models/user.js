const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        validate: [ function(email) {
            var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return re.test(email)
        }, "Invalid email"] 
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
      }
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        }
      ],
  },
  {
    id: true,
    timestamps: true,
  }
);

const User = model('user', userSchema);

module.exports = User;
