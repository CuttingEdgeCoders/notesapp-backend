import { Schema, model } from 'mongoose'

const UsersSchema = new Schema({
  name: String,
  theme: String
})

export const UsersModel = model('users', UsersSchema)
