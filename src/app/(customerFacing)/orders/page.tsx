"use client";

import { emailOrderHistory } from "@/actions/orders";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
//@ts-ignore
import { useActionState } from "react";

export default function MyOrdersPage() {
  const [state, formAction, isPending] = useActionState(emailOrderHistory, {});
  return (
    <form action={formAction} className="max-w-md mx-auto ">
      <div>
        <h2 className="text-2xl font-bold">My Orders</h2>
        <p className="opacity-70 mt-2">
          Enter your email and we will email you your order history and download
          links for bill.
        </p>
      </div>
      <div className="my-4">
        <Label htmlFor="email" className="text-sm opacity-80">
          Email
        </Label>
        <Input type="email" required name="email" id="email" />
        {state.error && <div className="text-destructive">{state.error}</div>}
      </div>
      <div>
        {state.message ? (
          <p>{state.message}</p>
        ) : (
          <Button
            className="w-full font-bold"
            size="lg"
            disabled={isPending}
            type="submit"
          >
            {isPending ? "Sending..." : "Send"}
          </Button>
        )}
      </div>
    </form>
  );
}
