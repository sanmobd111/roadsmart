import carImg2 from "@/assets/images/car2.png";
import carImg from "@/assets/images/pngwing.com (3).png";
import Image from 'next/image';
import React from 'react';
import { FaHeart } from 'react-icons/fa6';
import { HiOutlineArrowLongLeft } from 'react-icons/hi2';
import BackGroundColorDiv from '../shared/background-color-div/BackGroundColorDiv';
import { Card, CardContent } from '../ui/card';
import { cn } from "@/lib/utils";

const images = [
    carImg,
    carImg2,
    carImg,
    carImg2,
    carImg,
];

export default function SingleItemCard({ }) {
    const [activeImg, setActiveImg] = React.useState(0);
    return (
        <div className="select-none">
            <Card className={"shadow-none border-none relative"}>
                <CardContent className="p-4">
                    <div className='relative mb-4 p-4'>
                        <Image
                            width={200}
                            height={200}
                            src={images[activeImg]}
                            alt="Main Product"
                            className="w-full aspect-[2/1] rounded-lg object-contain"
                        />
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                        <div className="cursor-pointer flex justify-center items-center bg-secondary rounded-lg text-red-400" onClick={() => {
                            if (activeImg > 0) {
                                setActiveImg(activeImg - 1);
                            }
                        }}>
                            <HiOutlineArrowLongLeft className="text-4xl" />
                        </div>
                        {images
                            .map((image, i) => (
                                <Image
                                    width={200}
                                    height={200}
                                    key={i}
                                    src={image}
                                    className={cn("w-full border p-1 rounded object-cover", activeImg === i && "border-primary")}
                                />
                            ))}
                        <div className=" cursor-pointer flex justify-center items-center bg-secondary rounded-lg text-red-400" onClick={() => {
                            if (activeImg < images.length - 1) {
                                setActiveImg(activeImg + 1);
                            }
                        }}>
                            <HiOutlineArrowLongLeft className="text-4xl rotate-180" />
                        </div>
                    </div>
                </CardContent>
                <div className='absolute top-2 lg:top-8 right-2 lg:right-8 flex items-center p-2  gap-2 text-primary cursor-pointer '>
                    <span>36</span>
                    <span className='p-2 bg-secondary border border-primary rounded-sm'><FaHeart className="" /> </span>
                </div>
            </Card>
        </div>
    )
}
