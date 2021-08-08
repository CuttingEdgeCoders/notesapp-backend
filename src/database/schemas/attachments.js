import { Schema, ObjectId, model } from 'mongoose'

const AttachmentsSchema = new Schema({
  name: String,
  noteId: ObjectId
})

export const AttachmentsModel = model('attachments', AttachmentsSchema)
