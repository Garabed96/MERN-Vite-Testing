// External Dependencies
import express, { type Request, type Response } from 'express'
import { ObjectId } from 'mongoose'
import type Game from '../models/game'
// Global Config
export const gamesRouter = express.Router()

gamesRouter.use(express.json())
// GET
// Returns all games in the database as an array of Game objects (JSON)
gamesRouter.get('/', async (_req: Request, res: Response) => {
   try {
      if (collections.games) {
         const games = (await collections.games.find({}).toArray()) as Game[]
         res.status(200).send(games)
      }
   } catch (error) {
      if (error instanceof Error) {
         res.status(500).send(error.message)
      } else {
         res.status(500).send('An unknown error occurred')
      }
   }
})

// id route checks for valid ObjectId and returns 404 if not found
gamesRouter.get('/:id', async (req: Request, res: Response) => {
   const id = req?.params?.id

   try {
      if (collections.games) {
         const query = {
            _id: new ObjectId(id),
         }
         const game = (await collections.games.findOne(query)) as Game

         if (game) {
            res.status(200).send(game)
            return
         }
      }
      throw new Error('Game not found or collection not initialized')
   } catch (error) {
      res.status(404).send(`Unable to find matching document with id: ${req.params.id}`)
   }
})

// POST
// Creates a new game in the database and returns the id of the new game as a string (JSON)
// Example POST body: { "name": "New Game", "description": "A new game", "price": 0 }
// Example response: "Successfully created a new game with id 60b0a4b0b3b0b0b0b0b0b0b0"

gamesRouter.post('/', async (req: Request, res: Response) => {
   try {
      const newGame = req.body as Game
      if (collections.games) {
         const result = await collections.games.insertOne(newGame)
         result
            ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
            : res.status(500).send('Failed to create a new game.')
      }
   } catch (error) {
      console.error(error)
      res.status(400).send(error.message)
   }
})
// PUT
gamesRouter.put('/:id', async (req: Request, res: Response) => {
   const id = req?.params?.id

   try {
      const updatedGame: Game = req.body as Game
      const query = { _id: new ObjectId(id) }
      if (collections.games) {
         const result = await collections.games.updateOne(query, {
            $set: updatedGame,
         })

         result
            ? res.status(200).send(`Successfully updated game with id ${id}`)
            : res.status(304).send(`Game with id: ${id} not updated`)
      }
   } catch (error) {
      console.error(error.message)
      res.status(400).send(error.message)
   }
})
// DELETE
gamesRouter.delete('/:id', async (req: Request, res: Response) => {
   const id = req?.params?.id

   try {
      const query = { _id: new ObjectId(id) }
      if (collections.games) {
         const result = await collections.games.deleteOne(query)
         if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed game with id ${id}`)
         } else if (!result) {
            res.status(400).send(`Failed to remove game with id ${id}`)
         } else if (!result.deletedCount) {
            res.status(404).send(`Game with id ${id} does not exist`)
         }
      }
   } catch (error) {
      console.error(error.message)
      res.status(400).send(error.message)
   }
})
