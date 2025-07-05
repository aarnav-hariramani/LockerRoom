import dbConnect from '../../lib/db';
import Athlete from '../../models/Athlete';

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  if (method === 'GET') {
    const { sport, major, name } = req.query;
    const filter = {};
    if (sport) filter.sport = sport;
    if (major) filter.major = major;
    if (name) filter.name = new RegExp(name, 'i');

    const athletes = await Athlete.find(filter).limit(50);
    return res.status(200).json(athletes);
  }

  if (method === 'POST') {
    try {
      const newAthlete = await Athlete.create(req.body);
      return res.status(201).json(newAthlete);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${method} Not Allowed`);
}
