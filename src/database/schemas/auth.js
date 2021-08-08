import { Schema, ObjectId, model } from 'mongoose'

const AuthSchema = new Schema({
  email: String,
  password: String,
  userId: ObjectId,
  type: String
})

export const Model = model('auth', AuthSchema)
