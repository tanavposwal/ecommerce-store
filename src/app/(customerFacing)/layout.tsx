import { Nav, NavLink } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";

import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();

  return (
    <>
      <Nav>
        <Link href="/" className="mr-3">
          <ShoppingBagIcon className="w-8 h-8" />
        </Link>
        <NavLink href="/products">Products</NavLink>
        {user && (
          <>
            <NavLink href="/orders">My Orders</NavLink>
            <NavLink href="/cart">My Cart</NavLink>
          </>
        )}
      </Nav>
      <div className="container my-6">
        {children}
      </div>
    </>
  );
}
