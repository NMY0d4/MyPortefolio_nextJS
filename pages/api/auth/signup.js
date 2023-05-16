import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

async function handler(req, res) {
  const data = req.body;

  const { email, password } = data;

  const client = await connectToDatabase();

  const db = client.db();
  const result = await db.collection('greg_portefolio').insertOne({
    email,
    password: hashPassword(password),
  });

  res.status(201).json({ message: 'Created user!' });
}

export default handler;
