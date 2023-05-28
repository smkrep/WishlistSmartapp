// import { MongoClient } from 'mongodb'
const { MongoClient } = require('mongodb')

const client = new MongoClient("mongodb+srv://m2101760:LNndSjHPdxRWRDx4@wishes.a3tqmko.mongodb.net/SberWishes")

async function run() {
    try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      const db = await client.db("SberWishes");
      await db.command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");

      const collection = db.collection('SberWishes');
      const result = await collection.find().toArray();
      console.log("Result:", result);

    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);