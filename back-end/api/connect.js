import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://Spotify:4tjh8oods3u@cluster0.akbgd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
