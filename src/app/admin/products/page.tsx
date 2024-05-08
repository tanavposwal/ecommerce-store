import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
export default function AdminProduct() {
    return (
        <>
            <div className="flex justify-between items-center gap-4 mb-5">
            <h1 className="text-4xl font-bold">Products</h1>
            <Button asChild>
                <Link href="/admin/products/new">Add Products</Link>
            </Button>
            </div>
            <ProductTable />
        </>
    )
}

function ProductTable() {
    return <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="w-0">
                    <span className="sr-only">Available For Purchase</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead className="w-0">
                    <span className="sr-only">Actions</span>
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            
        </TableBody>
    </Table>
}