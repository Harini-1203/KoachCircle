const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  circleId: { type: Schema.Types.ObjectId, ref: 'Circle' },
  content: String,
  mediaUrl: String,
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);