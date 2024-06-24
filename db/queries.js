import { UserModel } from '@/models/user.model.js'
import { dbConnect } from './conectMongo';



export async function createUser(user) {
  try {
    await dbConnect();
    const userData = {
      name:user?.name,
      username:user?.name?.split(" ").join("").toLocaleLowerCase(),
      email: user?.email,
      password: user?.password,
      bio:"",
      contact:{},
      socail:{},
      service:[],
    }
    console.log(userData);
    await UserModel.create(userData);
  } catch (error) {
    console.log("Error: ", error);
  }
}

export async function findUserByCredentials(userData) {
  await dbConnect();
  const user = await UserModel.findOne(userData).lean();

  if (!user) {
    throw new Error
  }
  return user
  
}