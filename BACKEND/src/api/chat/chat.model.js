const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  userId: String,
  messages: [
    {
      sender: String,
      message: String
    }
  ]
});

module.exports = mongoose.model('Chat', chatSchema);