import express from 'express'
import { mongooseConnect } from './db/mongoose'
import { gamesRouter } from './routes/games.routes'

const app = express()
const port = process.env.PORT || 8000
app.get('/', gamesRouter)
app.listen(port, () => {
   console.log(`Server is listening on port ${port}`)
})

mongooseConnect().catch((e) => {
   console.log(e)
})
