import { UserModel } from '@/models/user.model.js'
import { dbConnect } from './conectMongo';



export async function createUser(user) {
  try {
    await dbConnect();
    const userData = {
      name: user?.name,
      username: user?.name?.split(" ").join("").toLocaleLowerCase(),
      email: user?.email,
      password: user?.password,
      bio: "",
      contact: {},
      socail: {},
      service: [],
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

export async function findUserByUsername(username) {
  await dbConnect();
  const user = await UserModel.findOne({ username: username }).lean();
  return user
}

export async function updateContactById(email, contactData) {
  await dbConnect();
  const data = await UserModel.findOneAndUpdate(
    { email },
    {
      contact: contactData,
    },
    { new: true }
  );
  // const data = JSON.parse(JSON.stringify(sampleData))
  return JSON.parse(JSON.stringify(data))
}

export async function updateSocialById(email, contactData) {
  await dbConnect();
  const data = await UserModel.findOneAndUpdate(
    { email },
    {
      social: contactData,
    },
    { new: true }
  );
  return JSON.parse(JSON.stringify(data))
}

export async function addServiceById(id, service) {
  await dbConnect();
  const user = await UserModel.findOne({ _id: id });
  // console.log(user)
  if (user) {
    const foundService = user?.service?.find((ser) => ser === service);
    // console.log("first0", foundService)
    if (!foundService) {
      user.service.push(service);
    } else {
      return new Error
    }
  }
  user.save();
  return JSON.parse(JSON.stringify(user))
}

export async function updateBioByEmail(email, bio) {
  await dbConnect();

  const data = await UserModel.findOneAndUpdate({ email }, { bio }, { new: true });
  return JSON.parse(JSON.stringify(data))
}

export async function updateUsernameByEmail(email, username) {
  await dbConnect();

  const data = await UserModel.findOneAndUpdate({ email }, { username }, { new: true });
  return JSON.parse(JSON.stringify(data))
}

export async function deleteServiceById(id, service) {
  await dbConnect();
  const user = await UserModel.findOne({ _id: id });

  if (user) {
    const foundService = user?.service?.find((ser) => ser === service);
  
    if (foundService) {
      user.service.pull(service);
    } else {
      return new Error
    }
  }
  user.save();
  return JSON.parse(JSON.stringify(user))
}

