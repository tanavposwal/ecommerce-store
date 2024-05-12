import { Nav, NavLink } from "@/components/Nav"
import { Button } from "@/components/ui/button"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Nav>
        <Button asChild className="mr-3"><Link href="/"><ShoppingBagIcon className="w-6 h-6" /></Link></Button>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/orders">My Orders</NavLink>
        <NavLink href="/cart">My Cart</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  )
}