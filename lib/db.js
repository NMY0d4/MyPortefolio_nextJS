import mongoose from 'mongoose';

const { MONGO_DB_URL } = process.env;

if (!MONGO_DB_URL)
  throw new Error(
    `Invalid environment variable: MONGO_DB_URL => ${MONGO_DB_URL}`
  );

export async function connectToDatabase() {
  try {
    console.log('successful database connection');
    return await mongoose.connect(MONGO_DB_URL);
  } catch (error) {
    throw new Error(error);
  }
}
