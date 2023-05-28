// import { MongoClient } from 'mongodb'
const { MongoClient } = require('mongodb')

let cachedClient = null;
let cachedDb = null;

//const client = new MongoClient("mongodb+srv://m2101760:LNndSjHPdxRWRDx4@wishes.a3tqmko.mongodb.net/SberWishes")

export async function connectToDatabase() {

    if (cachedClient && cachedDb) {
      return {
          client: cachedClient,
          db: cachedDb,
      };
    }
    
    let client = new MongoClient("mongodb+srv://m2101760:LNndSjHPdxRWRDx4@wishes.a3tqmko.mongodb.net/SberWishes");
    await client.connect();
    let db = client.db("SberWishes");

    cachedClient = client;
    cachedDb = db;
    
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }
