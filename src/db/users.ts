import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   authentication: {
      password: { type: String, required: true, select: false },
      salt: { type: String, select: false },
      sessionToken: { type: String, select: false },
   },
   price: { type: Number, required: true },
   category: { type: String, required: true },
   _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
})

export const UserModel = mongoose.model('Users', gameSchema)

export const getUsers = () => UserModel.find()
export const getUserByEmail = (email: string) => UserModel.findOne({ email })
export const getUserBySessionToken = (sessionToken: string) =>
   UserModel.findOne({
      'authentication.sessionToken': sessionToken,
   })
export const getUserById = (id: string) => UserModel.findById(id)
export const createUser = (values: Record<string, any>) =>
   new UserModel(values).save().then((user) => user.toObject())
export const deleteUserById = (id: string) => UserModel.findOneAndDelete({ _id: id })
export const updateUserById = (id: string, values: Record<string, any>) =>
   UserModel.findByIdAndUpdate(id, values)
