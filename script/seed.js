// scripts/seed.js

import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Mongo URI not found');
}

const athleteSchema = new mongoose.Schema({
  sport: String,
  major: String,
  name: String,
});

const Athlete = mongoose.model('Athlete', athleteSchema);

const athletes = [
  { sport: 'basketball', major: 'quantative finance', name: 'harm' },
  {sport: 'basketball', major: 'quantative finance', name: 'Aarnav'},
];

async function seedDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    await Athlete.deleteMany({});
    await Athlete.insertMany(athletes);

    console.log('Database seeded with athletes');
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedDB();
