import mongoose from 'mongoose'

const UsersSchema = new mongoose.Schema({
  name: String,
  theme: String
})

export const UsersModel = mongoose.model('users', UsersSchema)
