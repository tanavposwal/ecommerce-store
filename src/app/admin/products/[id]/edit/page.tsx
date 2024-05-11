import db from "@/db/db";
import { ProductForm } from "../../_components/ProductForm";

export default async function EditProduct({ params: { id } }: { params: { id: string } }) {
    const product = await db.product.findUnique({ where: { id }})

    return (
        <>
        <div className="flex justify-between items-center gap-4 mb-5">
        <h1 className="text-4xl font-bold">Edit Product</h1>
        </div>
        <ProductForm product={product} />
        </>
    )
}
