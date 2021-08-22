import mongoose from 'mongoose'

const AttachmentsSchema = new mongoose.Schema({
  name: String,
  noteId: mongoose.ObjectId
})

export const AttachmentsModel = mongoose.model('attachments', AttachmentsSchema)
