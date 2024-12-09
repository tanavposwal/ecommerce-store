"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { toast } from "sonner";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-background flex px-4 py-4 border-b items-center justify-between shadow">
      <div className="h-fit w-fit flex gap-1 items-center">{children}</div>
      <div className="flex gap-4">
        <UserState />
        <ModeToggle />
      </div>
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "px-3 py-1 rounded-md transition h-fit w-fit",
        pathname === props.href && "bg-secondary"
      )}
    />
  );
}

function UserState() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="flex gap-4 items-center">
        <div className="rounded-md w-9 h-9 bg-secondary animate-pulse"></div>
        <div className="rounded-md w-16 h-9 bg-secondary animate-pulse"></div>
      </div>
    )
  }
  if (error) {
    toast.error("Login Failed Paijaan!!");
    return "⚠️";
  }
  if (!user)
    return (
      <Button variant="ghost" asChild>
        <Link href="/api/auth/login">Login</Link>
      </Button>
    );

  if (user)
    return (
      <div className="flex gap-2 items-center">
        <img className="rounded-full w-9 h-9" src={user.picture!} alt={user.name!} />
        <Button variant="ghost" asChild>
          <Link href="/api/auth/logout">Logout</Link>
        </Button>
      </div>
    );
}
