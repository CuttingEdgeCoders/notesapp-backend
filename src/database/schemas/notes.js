import mongoose from 'mongoose'

const NotesSchema = new mongoose.Schema({
  userId: mongoose.ObjectId,
  title: String,
  description: String,
  background: String,
  images: [String],
  trashed: Boolean,
  trashedAt: Date
})

export const NotesModel = mongoose.model('notes', NotesSchema)
