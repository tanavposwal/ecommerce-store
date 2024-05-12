"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import { useTransition } from "react";
import CartAdd from "@/app/(customerFacing)/_actions/product";
import { useUser } from "@auth0/nextjs-auth0/client";
import { toast } from "sonner";

export default function AddToCart({ id }: { id: string }) {
    const { user } = useUser();
    const [isPending, startTransition] = useTransition()

    return (
        <Button disabled={isPending} variant="outline" size="icon" onClick={() => {
            if (user) {
            startTransition(async () => {
                await CartAdd(id, user)
              })
            } else {
                toast.error("Login first.")
            }
        }} className="h-full hover:border-primary">
          <ShoppingCartIcon className="text-xl h-5 mx-2" />
        </Button>
    )
}