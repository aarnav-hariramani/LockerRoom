import dbConnect from '../../../lib/db';
import Athlete from '../../../models/Athlete';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === 'GET') {
    const athlete = await Athlete.findById(id);
    if (!athlete) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json(athlete);
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
