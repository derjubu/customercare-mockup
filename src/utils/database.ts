import type { Collection } from 'mongodb'
import { MongoClient } from 'mongodb'

let client: MongoClient

export async function connectToDatabase(url: string): Promise<void> {
  client = new MongoClient(url)
  await client.connect()
}

export function getDatabase(): Collection<Document> {
  return client.db().collection('CustomerRequests')
}
