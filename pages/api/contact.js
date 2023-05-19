require('dotenv').config();


export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();
      console.log(req.body);

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

      res
        .status(201)
        .json({ message: 'Successfully stored message!', message: newMessage });
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
}
