import mongoose from 'mongoose';

const AthleteSchema = new mongoose.Schema({
  name: String,
  major: String,
  sport: String,
});

export default mongoose.models.Athlete || mongoose.model('Athlete', AthleteSchema);
