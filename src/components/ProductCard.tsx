import { formatCurrency } from "@/lib/formatters"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"

type ProductCardProps = {
  id: string
  name: string
  priceInCents: number
  description: string
  imagePath: string
}

export function ProductCard({
  id,
  name,
  priceInCents,
  description,
  imagePath,
}: ProductCardProps) {
  return (
    <Card className="flex overflow-hidden flex-col max-w-xs md:max-w-sm">
      <div className="relative w-full h-auto aspect-video">
        <Image src={imagePath} fill alt={name} quality={50} />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{formatCurrency(priceInCents / 100)}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-4">{description}</p>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button asChild className="w-full">
          <Link href={`/products/${id}/purchase`}>Purchase</Link>
        </Button>
        <Button variant="outline" size="icon" className="h-full hover:border-primary">
          <ShoppingCartIcon className="text-xl h-5 mx-2" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden flex flex-col animate-pulse">
      <div className="w-full aspect-video bg-gray-300" />
      <CardHeader>
        <CardTitle>
          <div className="w-3/4 h-6 rounded-full bg-gray-300" />
        </CardTitle>
        <CardDescription>
          <div className="w-1/2 h-4 rounded-full bg-gray-300" />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-3/4 h-4 rounded-full bg-gray-300" />
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled size="lg"></Button>
      </CardFooter>
    </Card>
  )
}