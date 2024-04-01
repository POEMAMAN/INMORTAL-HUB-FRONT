const express = require('express');
const chatsController = require('./chat.controller');

const router = express.Router();

router.get('/chats', chatsController.getChats);

module.exports = router;