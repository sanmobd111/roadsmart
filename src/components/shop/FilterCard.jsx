import carImg from "@/assets/images/pngwing.com (3).png";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import BackGroundColorDiv from "../shared/background-color-div/BackGroundColorDiv";

export default function FilterCard({ data, path, isFinance }) {
  return (
    <Link href={path || "#"} className="block">
      <Card className="w-full overflow-hidden py-0 shadow-none border-none">
        <CardContent className="p-0">
          <div className="flex flex-col gap-0 lg:gap-10 sm:flex-row">
            {/* Image Section */}
            <div className="relative w-full sm:w-[40%]">
              <BackGroundColorDiv className={"p-6  lg:h-full pt-16 lg:!pt-10"}>
                <Image
                  src={carImg}
                  alt={data.title}
                  className="object-contain rounded-t sm:rounded-none sm:rounded-l w-full h-full"
                // sizes="(max-width: 640px) 100vw, 40vw"
                />
              </BackGroundColorDiv>
              <Badge className="absolute top-4 left-0 bg-primary text-white text-xs rounded-l-none py-1 px-4 rounded-r-sm">
                {data.badge}
              </Badge>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 bg-secondary hover:bg-white p-2 border border-primary"
              >
                <FaHeart className="w-4 h-4 text-primary" />
              </Button>
            </div>

            {/* Content Section */}
            <div className="flex-1 pt-4 lg:pt-0 sm:pl-6 self-center">
              <p className="bg-primary py-1.5 px-3 text-xs sm:text-sm rounded-md text-white mb-4 w-fit">
                Lorem ipsum
              </p>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 line-clamp-2">
                    {data.title}
                  </h3>
                  <p className="text-lg mb-4">NEW MOT / Timing chain / Well serviced</p>
                  {/* <p className="text-xs sm:text-sm text-gray-600 mb-2">{data.subtitle}</p> */}
                  <p className="text-lg sm:text-xl font-bold mb-3">
                    <span className="text-gray font-normal text-sm sm:text-base mr-1">

                    </span>
                    {data.price}
                    {isFinance && <span className="text-primary font-normal text-sm ml-2">ZK 518 /mo</span>}
                  </p>
                </div>
              </div>

              {/* Feature List */}
              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 mb-3">
                {data.features.map((feature, index) => (
                  <span key={index} className="bg-secondary px-3 py-1.5 rounded-md">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm bg-secondary px-3 py-2 rounded-md text-gray-600 mb-4">
                {data.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
