import dbConnect from '../../lib/db';
import User from '../../models/User';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { email, sport, major } = req.body;

  if (!email || !sport || !major)
    return res.status(400).json({ message: 'Missing fields' });

  try {
    await dbConnect();

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.sport = sport;
    user.major = major;
    await user.save();

    res.status(200).json({ message: 'Profile completed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}
