import { MongoClient } from "mongodb"; 

let cachedClient = null;
let cachedDb = null;
const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const dbName = "find-place";

async function dbConnect() {
  /* if database is connected return from function */
  if(cachedClient && cachedDb) {
    return {client: cachedClient, db: cachedDb};
  }
  /* if not connected then setup connection */
  await client.connect();
  const db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return {client, db};
}

export default dbConnect;