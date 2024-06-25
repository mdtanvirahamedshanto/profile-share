'use server'


import { redirect } from 'next/navigation'
import { addServiceByEmail, addServiceById, createUser, findUserByCredentials, findUserByUsername, updateContactById, updateSocialById } from './db/queries';
import { revalidatePath } from 'next/cache';



export async function registerUser(fromData) {
  const user = Object.fromEntries(fromData);
  const created = await createUser(user);
  console.log(created);
  redirect("/login");
}

export async function performLogin(userData) {
  try {

    const found = await findUserByCredentials(userData);
    return found;
  } catch (error) {
    throw error;
  }
}

export async function findUser(username){
  try {
    const user = await findUserByUsername(username)
    if(!user){
      redirect("/notfound")
    }
    return user
  } catch (error) {
    throw error
  }
}

export async function updateContact(email,contactData){
  try {
    const data = await updateContactById(email,contactData)
    return data
  } catch (error) {
    throw error
  }
}

export async function updateSocial(email,contactData){
  try {
    const data = await updateSocialById(email,contactData)
    return data
  } catch (error) {
    throw error
  }
}

export async function addService(id,service){
  try {
    const data = await addServiceById(id,service)
    
      revalidatePath("/")
      redirect("/")
    
    return data
  } catch (error) {
    console.log(error)
  }
}




