"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps, ReactNode } from "react"
import { ModeToggle } from "./theme-toggle"

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-background flex px-4 py-4 border-b items-center justify-between shadow">
      <div className="h-fit w-fit flex gap-1 items-center">
      {children}
      </div>
      <ModeToggle/> 
    </nav>
  )
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname()
  return (
    <Link
      {...props}
      className={cn(
        "px-3 py-1 rounded-md transition h-fit w-fit",
        pathname === props.href && "bg-secondary"
      )}
    />
  )
}