import dotenv from 'dotenv'
import axios from 'axios'
import express from 'express'

import { connectToDatabase, getDatabase } from './utils/database.ts'

dotenv.config

const app = express()
const port = process.env.PORT || 3001

if (!process.env.MONGODB_URI) {
  throw new Error("Couldn't connect to the database")
}

app.use(express.json())

app.get('/', (_request, response) => {
  response.json('Hello World!')
})

app.post('/api/submitRequest', async (request, response) => {
  const newRequest = request.body
  {
    await getDatabase().insertOne(newRequest)
    response.send('Request received')
  }
  response.end()
})

connectToDatabase(process.env.MONGODB_URI || '').then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
