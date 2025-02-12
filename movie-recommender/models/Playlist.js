import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    mediaId: { type: String, required: true },
    mediaType: { type: String, required: true },
    title: { type: String, required: true },
    posterPath: { type: String },
    addedAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;