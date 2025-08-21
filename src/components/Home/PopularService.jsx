import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import ServiceImage1 from "@/assets/images/Service1.png";
import Link from "next/link";

// Dummy data
const arr = [{ name: "Motor Insurance", path: "/insurance-motor/location" }, { name: "Vehicle Service", path: "/repair/location" }, { name: "Electrical diagnosis", path: "/repair/location" }, { name: "General Diagnosis", path: "/repair/location" }, { name: "Change of Ownership", path: "#" }, { name: "CRegistration", path: "#" }];

const PopularService = () => {
  return (
    <div className="my-6 md:my-10 lg:my-20 py-6 md:py-10 lg:py-15">
      <div className="container max-w-[1600px] mx-auto">
        <div className=" flex md:flex-row flex-col items-center justify-between">
          <h3 className="lg:text-[40px] font-semibold text-[28px] mb-3">
            Popular Services
          </h3>
          <div className="Service-btn">
            <Button className="md:px-10 md:py-5 bg-[#CA2026] text-white">
              View All Services
            </Button>
          </div>
        </div>
        {/* Service */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pt-10 pb-5">
          {arr.map((item, index) => {
            return (
              <Link className="block" href={item?.path}>
                <Card key={index} className="p-1 shadow-none border-0">
                  <CardContent className={"p-0"}>
                    <Image
                      src={ServiceImage1}
                      quality={100}
                      alt="Road Smart Service"
                      className="w-full h-[130px]"
                    ></Image>
                    <h5 className="text-center pt-5 font-semibold">
                      {item?.name}
                    </h5>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularService;
