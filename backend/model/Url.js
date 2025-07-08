// database schema for URL shortening service
import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: '1d' },
});

const Url = mongoose.model('Url', urlSchema);

export default Url;
