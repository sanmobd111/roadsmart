import Image from "next/image";

import Link from "next/link";
import { Button } from "../ui/button";

const RequestSection = () => {
  return (
    <div className="px-6">
      <div className="container max-w-[1600px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 xl:gap-8">
          <div className="RQS_imagecontent">
            <div
              className=" relative w-[95%] lg:w-[424px]  m-auto  block  content-none 
              before:-z-10 lg:before:left-0 before:bottom-0 before:w-[95%] lg:before:w-[424px] before:h-[410px] before:m-auto md:before:h-[590px] before:translate-x-0"
            >
              <Image
                width={500}
                height={500}
                className="relative mx-auto w-[90%]"
                src={"/images/home/home-request.svg"}
                quality={100}
                alt="RoadSmart"
              ></Image>
            </div>
          </div>
          <div className="px-4 py-4 md:py-0">
            <h4 className="font-semibold text-[26px] lg:text-[40px] mt-10 lg:mt-0">
              Request a service for your car
            </h4>
            <p className="py-4 lg:w-[70%]">
              Fusce rutrum auctor odio vel sodales maecenas sit amet dignissim ex. Sed volutpat hendrerit nisl eget at mattis praesent maximus lectus in nulla fringilla, id euismod libero consequat etiam tellus justot.
            </p>
            <Link href={"/services"}>
              <Button className="bg-[#CA2026] text-white h-[45px] rounded-[10px] px-14 mt-4">
                Request Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestSection;
