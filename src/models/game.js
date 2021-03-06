import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: String,
  timeleft: { type: Number, default: 0 },
  word: String,
  guess: [{ type: String }],
  tries: { type: Number, default: 5 },
  win: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Game', taskSchema);
