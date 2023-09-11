import mongoose from "mongoose";

if (!process.env.MONGO_DB_URL) {
  throw new Error("Please add the database url in .env file");
}

const DATABASE_URL = process.env.MONGO_DB_URL;

let;
