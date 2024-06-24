import { UserModel } from '@/models/User.js'
import bcrypt from 'bcryptjs'
import connectMongo from './conectMongo.js'

// register a user
const createUser = async (user) => {
  try {
    await connectMongo()

    const existingUser = await UserModel.findOne({ email: user.email })
    if (existingUser) {
      return {
        msg: 'user already exists',
      }
    }

    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(user.password, salt)
    const data = await UserModel.create({
      ...user,
      firstName: user.fname,
      lastName: user.lname,
      password: hashedPassword,
      favorites: [],
    })
    return data
  } catch (error) {
    console.error('Error creating user:', error)
    throw error
  }
}

// get a user
const findUser = async (credentials) => {
  try {
    await connectMongo()

    const user = await UserModel.findOne({ email: credentials.email })
    return user
  } catch (error) {
    console.error('Error finding user:', error)
    throw error
  }
}


export {
  createUser,
  findUser,
}
