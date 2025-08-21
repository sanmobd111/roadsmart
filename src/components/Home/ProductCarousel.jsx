"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CarIcon, Heart } from "lucide-react";
import Product1 from "@/assets/images/Product1.png";
import Link from "next/link";
import Carticon from "@/assets/images/Icon.svg";
import { FaHeart } from "react-icons/fa6";
export default function CarouselSize() {

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full relative "
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </CarouselContent>
      <CarouselPrevious className="top-[115%] left-[35%] absolute lg:left-[45%] z-10 bg-[#CA2026] text-white w-[35px] h-[35px]" />
      <CarouselNext className="absolute lg:left-[52%] z-10 left-[55%] top-[115%] bg-[#CA2026]  text-white w-[35px] h-[35px]" />
    </Carousel>
  );
}

const ProductCard = ({ product }) => {
  const [isFavourite, setIsFavourite] = React.useState(false);
  return (<CarouselItem className="md:basis-1/2 lg:basis-1/4">
    <div className="p-1">
      <Card className="rounded-[7px]">
        <CardContent className="">
          <div className="">
            <div className="wishlist text-end flex justify-end">

              <div onClick={() => setIsFavourite(!isFavourite)} className="cursor-pointer">
                {
                  isFavourite ? (
                    <div className="text-red-500 text-2xl font-medium">
                      <FaHeart />
                    </div>
                  ) : (
                    <div className="text-primary text-sm font-medium">
                      <Heart></Heart>
                    </div>
                  )
                }
              </div>
            </div>
            <div className="product-picture text-center mx-auto py-5">
              <Image
                src={Product1}
                alt="Road Smart Product"
                quality={100}
                className="mx-auto"
              ></Image>
            </div>
            <div className="Product-content flex items-center justify-between border-b pb-5 pt-6">
              <Link href={"/single-parts"}>
                <h4 className="font-semibold">Radiators</h4>
              </Link>
              <div className="product-model font-semibold bg-[#FFF2F3] px-5 py-1 text-sm rounded-[5px] ">
                ZMW 652
              </div>
            </div>
            <div className="flex justify-between items-center pt-4">
              <p className="text-[11px] font-semibold text-[#656565]">
                500+ Saless
              </p>
              <Link
                href={"/parts"}
                className="flex items-center gap-2  border-[2px] px-5 py-2  rounded-[6px]"
              >
                <Image
                  src={Carticon}
                  quality={100}
                  className="h-4 w-4 object-contain"
                  alt="Cart Icon"
                ></Image>
                <span className="text-[12px]"> Visit Store</span>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </CarouselItem>)
}
