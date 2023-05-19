import mongoose from 'mongoose';

const { MONGO_DB_URL } = process.env;

if (!MONGO_DB_URL) {
  throw new Error(
    `Invalid environment variable: MONGO_DB_URL => ${MONGO_DB_URL}`
  );
}

let isConnected = false;

export async function connectToDatabase() {
  try {
    if (!isConnected) {
      console.log('Successful database connection');
      await mongoose.connect(MONGO_DB_URL);
      isConnected = true;
    }
  } catch (error) {
    throw new Error(error);
  }
}

export async function disconnectFromDatabase() {
  try {
    if (isConnected) {
      console.log('Disconnecting from the database');
      await mongoose.disconnect();
      isConnected = false;
    }
  } catch (error) {
    throw new Error(error);
  }
}
