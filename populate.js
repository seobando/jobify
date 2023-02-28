import { readFile } from "fs/promises";

import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./db/connect.js";
import Job from "./models/Job.js";

const start = async () => {
  try {
    await connectDB(process.env.MONG_URL);
    await Job.deleteMany(); // This wipes out the database
    const jsonProducts = JSON.parse(
      await readFile(new URL(".mock-data.json", import.meta.url))
    );
    await Job.create(jsonProducts);
    console.log("Success!!!");
    process.exit(0);
  } catch (err) {
    console.log(error);
    process.exit(1);
  }
};
