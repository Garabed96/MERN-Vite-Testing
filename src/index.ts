import express from 'express'
import { gamesRouter } from './routes/games.routes'

const app = express()
const port = process.env.PORT || 8000
app.get('/', gamesRouter)
app.listen(port, () => {
   console.log(`Server is listening on port ${port}`)
})
