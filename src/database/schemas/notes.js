import { Schema, ObjectId, model } from 'mongoose'

const NotesSchema = new Schema({
  userId: ObjectId,
  title: String,
  description: String,
  background: String,
  images: [String],
  trashed: Boolean,
  trashedAt: Date
})

export const NotesModel = model('notes', NotesSchema)
