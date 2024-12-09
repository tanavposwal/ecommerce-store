"use client";

import { Button } from "./ui/button";
import { useActionState } from "react";
import CartAdd from "@/app/(customerFacing)/_actions/product";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";

export default function AddToCart({ id }: { id: string }) {
  const user = useUser();
  const [state, formAction, isPending] = useActionState(CartAdd(id), {});

  if (!user) return;

  return (
    <form action={formAction}>
    <Button
      disabled={isPending}
      type="submit"
      className="h-full w-full font-bold mt-3"
    >
      {isPending ? "loading..." : "Add to cart"}
    </Button>
    </form>
  );
}
