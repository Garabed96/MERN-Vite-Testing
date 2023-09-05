import express from 'express'
import http from 'http'
import bodyparser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })
const MONGO_URL = process.env.MONGO_KEY

import router from './router'

const app = express()

app.use(cors({ credentials: true }))
app.use(compression())
app.use(cookieParser())
app.use(bodyparser.json())

const server = http.createServer(app)

const port = process.env.PORT || 8000
server.listen(port, () => {
   console.log(`Server is listening on port ${port}`)
})

mongooseConnection().catch((e) => {
   console.log(e)
})
//
async function mongooseConnection(): Promise<void> {
   if (MONGO_URL === '') {
      throw new Error('MONGO_KEY is not defined in the environment')
   }

   mongoose
      .connect(MONGO_URL as string)
      .then(() => {
         console.log('Connected to MongoDB')
      })
      .catch((error) => {
         console.error('Error connecting to MongoDB:', error)
      })
}

app.use('/', router())
