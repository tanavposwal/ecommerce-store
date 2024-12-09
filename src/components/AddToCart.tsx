"use client";

import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import { useTransition } from "react";
import CartAdd from "@/app/(customerFacing)/_actions/product";
import { toast } from "sonner";

export default function AddToCart({ id }: { id: string }) {
  const { user } = useUser();
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      disabled={isPending}
      variant="outline"
      size="icon"
      onClick={() => {
        if (user) {
          startTransition(async () => {
            await CartAdd(id, user);
          });
        } else {
          toast.error("Login first.");
        }
      }}
      className="h-full p-2"
    >
      <ShoppingBagIcon className="h-5 stroke-2" />
    </Button>
  );
}
