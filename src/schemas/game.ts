import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
   name: { type: String, required: true },
   price: { type: Number, required: true },
   category: { type: String, required: true },
   _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
})

const Game = mongoose.model('Game', gameSchema)
export default Game
