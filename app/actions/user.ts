"use server";

import client from "../../db/index";

export async function signUpUser(name: string, email: string) {
  try {
    await client.user.create({
      data: {
        name: name,
        email: email,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
}
