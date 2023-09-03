import mongoDB, { type Db } from 'mongodb'
import * as dotenv from 'dotenv'
// External Dependencies

// Global Variables
export const collections: { games?: mongoDB.Collection } = {}
// Initialize Connection
export async function connectToDatabase(): Promise<Db> {
   dotenv.config()

   const client: mongoDB.MongoClient = new mongoDB.MongoClient(
      process.env.DB_CONN_STRING,
   )

   await client.connect()

   const db: mongoDB.Db = client.db(process.env.DB_NAME)

   const gamesCollection: mongoDB.Collection = db.collection(
      process.env.GAMES_COLLECTION_NAME,
   )

   collections.games = gamesCollection

   console.log(
      `Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`,
   )
   return db
}
