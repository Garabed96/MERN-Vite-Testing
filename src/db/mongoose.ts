import mongoose from 'mongoose'

export async function mongooseConnect() {
   await mongoose.connect('mongodb://localhost:27017/games', {})
   console.log('Connected to MongoDB')
}
