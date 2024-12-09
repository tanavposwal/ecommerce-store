import db from "@/db/db";
import { Suspense } from "react";
import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";

async function getCartProducts() {
  const session = await getSession();
  const authUser = session?.user;

  if (authUser) {
    const user = await db.user.findUnique({
      where: { email: authUser.email },
      select: {
        cart: {
          select: {
            product: {
              select: {
                id: true,
                name: true,
                priceInCents: true,
                imagePath: true,
                description: true,
              },
            },
          },
        },
      },
    });
    return user?.cart;
  }
}

export default async function ProductsPage() {
  const session = await getSession();
  if (session == null) {
    return <div>Login to Add products to cart.</div>;
  } else {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Suspense
          fallback={
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          }
        >
          <ProductsSuspense />
        </Suspense>
      </div>
    );
  }
}

async function ProductsSuspense() {
  const products = await getCartProducts();

  if (products)
    return products.map((item) => (
      <ProductCard key={item.product.id} {...item.product} />
    ));
}
