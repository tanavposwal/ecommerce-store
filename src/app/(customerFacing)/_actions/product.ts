"use server";

import db from "@/db/db";
import { UserProfile } from "@auth0/nextjs-auth0/client";

export default async function CartAdd(id: string, authuser: UserProfile) {
  // algorithm to add product to user cart
  
  // TODO: error here
  if (authuser.email != null) {
    const user = await db.user.findUnique({ where: { email: authuser.email } })
    const userField = { email: authuser.email, cart: { create: { productId: id, userId: user?.id } } };
    await db.user.upsert({
        where: { email: authuser.email },
        create: userField,
        update: userField,
      })
  }
}
