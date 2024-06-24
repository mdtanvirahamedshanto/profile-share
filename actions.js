'use server'


import { redirect } from 'next/navigation'
import { createUser, findUserByCredentials } from './db/queries';



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





