// External Dependencies
import express, { type Request, type Response } from 'express'
// import { ObjectId } from 'mongodb'
import { collections } from '../services/database.service'
import type Game from '../models/game'
// Global Config
export const gamesRouter = express.Router()

gamesRouter.use(express.json())
// GET
gamesRouter.get('/', async (_req: Request, res: Response) => {
   try {
      const games = (await collections.games.find({}).toArray()) as Game[]
      res.status(200).send(games)
   } catch (error) {
      if (error instanceof Error) {
         res.status(500).send(error.message)
      } else {
         res.status(500).send('An unknown error occurred')
      }
   }
})
// POST

// PUT

// DELETE
