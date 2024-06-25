import { model, models, Schema } from 'mongoose'

const schema = new Schema({
  name: {
    required: true,
    type: String,
  },
  username:{
    required: true,
    type: String,
    unique: true,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
    select: false
  },
  bio: {
    type: String
  },
  contact: {
    type: Object
  },
  social: {
    type: Object
  },
  service: {
    type: Array
  }

})

export const UserModel = models.users || model('users', schema)
