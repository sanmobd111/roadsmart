import React from "react";
import picon from "@/assets/images/Vector.png";
import Searchbar from "../Search/search";
import Image from "next/image";

import CarouselSize from "./ProductCarousel";

const FeaturedProducts = () => {
  return (
    <div className="my-6 md:my-10 lg:my-20 max-w-[1600px] mx-auto">
      <div className=" bg-white shadow-lg pb-20 pt-6 md:pt-10 lg:pt-20 px-6 xl:px-10 rounded-xl xl:rounded-2xl">
        <div className="flex flex-col md:flex-row lg:items-center lg:justify-between">
          <div className="">
            <div className="flex w-full items-center gap-5">
              <Image src={picon} quality={100} alt="" className="w-6 h-6 md:w-10 md:h-10 rounded-full" />
              <h3 className="font-semibold text-xl md:text-[40px]">
                Featured car parts
              </h3>
            </div>
          </div>
          <div className="max-w-[425px] pt-5 md:pt-0 flex-1/4">
            <Searchbar></Searchbar>
          </div>
        </div>
        {/* Product Carosel */}
        <div className="pt-6 md:pt-14 pb-8">
          <CarouselSize></CarouselSize>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
