import mongoose from 'mongoose'
import q from 'q'
mongoose.promise = q.Promise

const tileSchema = new mongoose.Schema(
  {
    name: {type: String},
    color: {type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  {
    collection: 'tiles'
  }
)

export default mongoose.model('Tile', tileSchema)