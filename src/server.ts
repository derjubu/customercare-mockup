import dotenv from 'dotenv'
import express from 'express'
import axios from 'axios'
import process from 'process'

import { connectToDatabase, getDatabase } from './utils/database'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

if (!process.env.MONGODB_URI) {
  throw new Error("Couldn't connect to the database")
}

app.use(function (req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(express.json())

app.get('/', (_request, response) => {
  response.json('Hello World!')
})

app.get('/api/requests/', async (_request, response) => {
  const allRequests = await getDatabase().find().toArray()
  response.status(200).send(allRequests)
})

app.post('/api/submitRequest/', async (request: any, response: any) => {
  response.send('POST request to DB')
  const newRequest: any = request.body
  {
    console.log('Start POST in DB')
    await getDatabase().insertOne(newRequest)
  }
  console.log('End POST in DB')
  response.end()
})

app.use(express.static('dist/app'))

connectToDatabase(process.env.MONGODB_URI || '').then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
