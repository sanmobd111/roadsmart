"use client";

import { useState } from "react";

import bannerImage1 from "@/assets/images/image.png";
import bannerImage2 from "@/assets/images/banner2.png";
import bannerImage3 from "@/assets/images/banner3.png";
import bannerImage4 from "@/assets/images/banner4.png";
import bannerImage5 from "@/assets/images/banner5.png";

import TabComponents from "../tabs/tab-components";
const bannerImages = [
  {
    id: 1,
    path: "Repairs",
    image: bannerImage1,
  },
  {
    id: 2,
    path: "features",
    image: bannerImage2,
  },
  {
    id: 3,
    path: "pricing",
    image: bannerImage3,
  },
  {
    id: 4,
    path: "Finance",
    image: bannerImage4,
  },
  {
    id: 5,
    path: "Compliance",
    image: bannerImage5,
  },
];
const BannerSection = () => {
  const [activeTab, setActiveTab] = useState("Repairs");
console.log(bannerImages.find((item) => item.path === activeTab)?.image?.src)
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImages.find((item) => item.path === activeTab)?.image?.src})`,
        backgroundRepeat: "no-repeat",
      }}
      className="w-full py-10 md:py-20 bg-cover"
    >
      <div className=" h-[100%] flex  items-center justify-center w-[10vvw]">
        <div className="bg-white flex-col  container mx-auto flex  max-w-[1600px] rounded-[20px] h-[700px] pt-10 lg:pt-24 pb-32">
          <TabComponents activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

    </div>
  );
};

export default BannerSection;
