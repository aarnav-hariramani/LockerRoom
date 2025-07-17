import clientPromise from '../../lib/mongo';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();
  const users = db.collection('users');

  const athletes = await users.find({}, { projection: { password: 0 } }).toArray();

  res.status(200).json(athletes);
}
