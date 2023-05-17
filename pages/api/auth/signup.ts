import { hashPassword } from '../../../lib/auth';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../lib/db';
import User from '../../../models/user';
import { IUser } from '../../../types';
import mongoose from 'mongoose';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDatabase();

  if (req.method === 'POST') {
    if (!req.body || Object.keys(req.body).length === 0)
      return res.status(400).json({ error: 'Data is missing' });

    const { fullName, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).json({ error: 'User already exists' });
    } else {
      if (password.length < 8)
        return res
          .status(409)
          .json({ error: 'Password should be 8 characters long' });

      const hashedPassword = await hashPassword(password);

      const data: IUser = await User.create({
        fullName,
        email,
        password: hashedPassword,
      }).catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) {
          for (let field in err.errors) {
            const msg = err.errors[field].message;
            return res.status(409).json({ error: msg });
          }
        } else {
          return res.status(409).json({ error: err.message });
        }
      });

      const user = {
        email: data.email,
        fullName: data.fullName,
        _id: data._id,
        role: data.role,
      };

      return res.status(201).json({ success: true, user });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default handler;
