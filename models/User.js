import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  sport: String,
  major: String,
});

// Avoid redefining the model if it already exists
export default mongoose.models.User || mongoose.model('User', UserSchema);
