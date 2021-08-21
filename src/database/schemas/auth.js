import mongoose from 'mongoose'

const AuthSchema = new mongoose.Schema({
  email: String,
  password: String,
  userId: mongoose.ObjectId,
  type: String
})

export const Model = mongoose.model('auth', AuthSchema)
