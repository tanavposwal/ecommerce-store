import { ProductForm } from "../_components/ProductForm";

export default function NewProduct() {
    return (
        <>
        <div className="flex justify-between items-center gap-4 mb-5">
        <h1 className="text-4xl font-bold">Add Product</h1>
        </div>
        <ProductForm />
        </>
    )
}
