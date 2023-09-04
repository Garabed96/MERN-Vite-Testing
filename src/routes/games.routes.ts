// External Dependencies
import express, { Request, Response, Router } from 'express'
import Game from '../schemas/game'
export const gamesRouter = Router()

gamesRouter.use(express.json())
// GET
// Returns all games in the database as an array of Game objects (JSON)
gamesRouter.get('/', async (_req: Request, res: Response) => {
   try {
      const games = await Game.find() // No new instance created here
      res.status(200).send(games)
   } catch (error) {
      if (error instanceof Error) {
         res.status(500).send(error.message)
      } else {
         res.status(500).send('An unknown error occurred')
      }
   }
})

// id route checks for valid ObjectId and returns 404 if not found
// gamesRouter.get('/:id', async (req: Request, res: Response) => {
//
//    try {
//       const games = await Game.find() // No new instance created here
//       if (games) {
//          const query = {
//             _id: new ObjectId(id),
//          }
//          const game = (await collections.games.findOne(query)) as Game
//
//          if (game) {
//             res.status(200).send(game)
//             return
//          }
//       }
//       throw new Error('Game not found or collection not initialized')
//    } catch (error) {
//       res.status(404).send(`Unable to find matching document with id: ${req.params.id}`)
//    }
// })

// POST
// Creates a new game in the database and returns the id of the new game as a string (JSON)
// Example POST body: { "name": "New Game", "description": "A new game", "price": 0 }
// Example response: "Successfully created a new game with id 60b0a4b0b3b0b0b0b0b0b0b0"

gamesRouter.post('/', async (req: Request, res: Response) => {
   try {
      const newGame = new Game(req.body)
      const result = await newGame.save()
      result
         ? res.status(201).send(`Successfully created a new game with id ${result._id}`)
         : res.status(500).send('Failed to create a new game.')
   } catch (error) {
      console.error(error)
      res.status(400).send(error.message)
   }
})
// PUT
gamesRouter.put('/:id', async (req, res) => {
   try {
      const game = await Game.findById(req.params.id) // Get an existing document
      if (game) {
         game.name = req.body.name // Modify the instance
         game.price = req.body.price
         await game.save() // Save the instance back to the database
         res.status(200).send(`Successfully updated game with id ${req.params.id}`)
      } else {
         res.status(404).send('Game not found')
      }
   } catch (error) {
      console.error(error)
      res.status(400).send(error.message)
   }
})

// DELETE
gamesRouter.delete('/:id', async (req: Request, res: Response) => {
   try {
      const game = await Game.findByIdAndDelete(req.params.id)
      if (game) {
         res.status(200).send(`Successfully deleted game with id ${req.params.id}`)
      } else {
         res.status(404).send('Game not found')
      }
   } catch (error) {
      console.error(error.message)
      res.status(500).send(error.message) // Respond with 500 for other types of errors
   }
})
