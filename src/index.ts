import express, { Request, Response } from 'express'
// import { gamesRouter } from './routes/games.routes'

const app = express()
const port = process.env.PORT || 8000
app.get('/', (_req: Request, res: Response) => {
   res.setHeader('Content-Type', 'text/html')
   res.end('<h1>Hello World</h1>')
})
app.listen(port, () => {
   console.log(`Server is listening on port ${port}`)
})
