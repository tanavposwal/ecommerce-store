"use server";

import db from "@/db/db";
import { currentUser } from "@clerk/nextjs/server";

export default async function CartAdd(id: string) {
  const userAuth = await currentUser();
  if (userAuth) {
    const user = await db.user.findUnique({
      where: { email: userAuth.primaryEmailAddress?.emailAddress },
    });

    if (!user) {
      // Create the user if they don't exist
      await db.user.create({
        data: {
          email: userAuth.primaryEmailAddress?.emailAddress as string,
        },
      });
    }

    // Fetch the user again to get the ID
    const updatedUser = await db.user.findUnique({
      where: { email: userAuth.primaryEmailAddress?.emailAddress },
    });

    if (updatedUser) {
      await db.cart.create({
        data: {
          userId: updatedUser.id,
          productId: id,
        },
      });
      return true;
    }
  }
  return false;
}
