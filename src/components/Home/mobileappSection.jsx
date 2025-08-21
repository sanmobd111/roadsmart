import React from "react";
import Image from "next/image";
import mobileapp from "@/assets/images/Mobileapp.png";
import Link from "next/link";
import AppleStore from "@/assets/images/Apple.png";
import GStore from "@/assets/images/Google.png";

const MobileappSection = () => {
  return (
    <div className="my-6 md:my-10 lg:my-20 py-6 md:py-10 lg:py-15">
      <div className="container max-w-[1600px] mx-auto px-3">
        <div className="flex flex-col lg:flex-row items-center gap-4 md:justify-between">
          <div className="py-4 md:py-0">
            <h4 className="font-semibold text-xl md:text-[40px]">
              Roadsmart Mobile Apps
            </h4>
            <p className="py-4">Find a solution anywhere you are</p>
            <div className="flex gap-3">
              <Link href={"#"}>
                <Image src={AppleStore} alt="App"></Image>
              </Link>
              <Link href={"#"}>
                <Image src={GStore} alt="App"></Image>
              </Link>
            </div>
          </div>
          <div className="app-img">
            <Image src={mobileapp} quality={100} className="" alt="App"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileappSection;
