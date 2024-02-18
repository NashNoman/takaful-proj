import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  price: number;
  name: string;
};

export default function ProductCard({ image, price, name }: Props) {
  return (
    <Card className="shadow-md">
      <CardContent className="flex flex-col items-center justify-center gap-3 pt-4">
        <Image src={image} alt="product" width={120} height={120} />
        <p className="font-semibold text-lg">{name}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <p className="text-sm">From ${price}/MO</p>
      </CardFooter>
    </Card>
  );
}
