import React from "react";

import Image from "next/image";
import feedback1 from "@/assets/images/feedback1.png";
import star from "@/assets/images/Star 1.png";

const ClientTesimonials = () => {
  return (
    <div className="my-6 md:my-10 lg:my-20 py-6 md:py-10 lg:py-15">
      <div className="container max-w-[1600px] mx-auto px-4">
        <div className="text-center pb-8">
          <h4 className="lg:text-[40px] text-3xl mb-3">
            What Road Smart users are saying
          </h4>
          <p>Join the words Roadsmart</p>
        </div>
        <CarouselDemo></CarouselDemo>
      </div>
    </div>
  );
};

export default ClientTesimonials;

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoChevronBackSharp } from "react-icons/io5";

function CarouselDemo() {
  return (
    <div>
      <Carousel className="w-full border-0 relative">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="">
                <Card className="border-0 shadow-none">
                  <CardContent className="">
                    <div className="user_feedback max-w-4xl mx-auto">
                      <Image
                        src={feedback1}
                        className="mx-auto"
                        quality={100} alt="alt"
                      ></Image>
                      <div className="flex items-center pt-4 max-w-[10%] mx-auto">
                        <Image
                          src={star}
                          className="mx-auto"
                          quality={100} alt="alt"
                        ></Image>
                        <Image
                          src={star}
                          className="mx-auto"
                          quality={100} alt="alt"
                        ></Image>
                        <Image
                          src={star}
                          className="mx-auto"
                          quality={100} alt="alt"
                        ></Image>

                        <Image
                          src={star}
                          className="mx-auto"
                          quality={100} alt="alt"
                        ></Image>
                        <Image
                          src={star}
                          className="mx-auto"
                          quality={100} alt="alt"
                        ></Image>
                      </div>
                      <div className="title pt-5">
                        <h5 className="font-semibold text-[22px] text-center">
                          Mrs. Phiri
                        </h5>
                      </div>
                      <div className="text-center pt-5">
                        <p>
                          I was involved in a road traffic accident on my way to
                          the office at 7:00 a.m. My vehicle was damaged and
                          couldn’t move. I was stranded and didn’t know what to
                          do. I thought of Roadsmart and called for help. Within
                          10 minutes a tow truck was on site, and they sent me a
                          courtesy vehicle to use for the day. Indeed, Roadsmart
                          works like magic.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>
      <div className="flex justify-center gap-4 mt-10">
        <button className="bg-primary/50 text-white p-3 rounded-full"><IoChevronBackSharp /></button>
        <button className="bg-primary text-white p-3 rounded-full"><IoChevronBackSharp className="rotate-180" /></button>
      </div>
    </div>
  );
}
