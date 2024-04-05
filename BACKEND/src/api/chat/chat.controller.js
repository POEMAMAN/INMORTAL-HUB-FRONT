const ChatSchema = require('./chat.model');

exports.getChats = async (req, res) => {
  try {
    const chats = await ChatSchema.find();
    if (chats.length > 0) {
      res.json(chats);
    } else {
      res.status(404).json({ message: 'No hay chats disponibles' });
    }
  } catch (error) {
    console.error('Error al cargar los chats:', error);
    res.status(500).json({ error: 'Error al cargar los chats' });
  }
};