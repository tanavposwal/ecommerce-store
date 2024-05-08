import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl text-primary font-bold">Not Found</h2>
        <p className="">Could not find requested resource</p>
        <Link href="/">
          <Button variant="outline">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
