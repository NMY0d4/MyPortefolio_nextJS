import Message from '../../models/MessageSchema';
import { connectToDatabase } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();
      console.log(req.body.formData);

      const newContact = new Message(req.body);

      const validationError = newContact.validateSync();

      if (validationError) {
        res.status(400).json({
          message: 'Validation error',
          errors: validationError.errors,
        });
        return;
      }

      const savedContact = await newContact.save();

      res.status(201).json({
        message: 'Successfully stored contact!',
        contact: savedContact,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
}

// if (
//   !email ||
//   !email.includes('@') ||
//   !email.includes('.') ||
//   !name ||
//   name.trim() === '' ||
//   !message ||
//   message.trim() === ''
// ) {
//   res.status(422).json({ message: 'Invalid input.' });
//   return;
// }

// Store it in a database
// const newMessage = {
//   email,
//   name,
//   message,
// };

// let client;

// client = await connectDatabase();

// const db = client.db();

// const result = await db.collection('messages').insertOne(newMessage);

// client.close();

// console.log(result);
