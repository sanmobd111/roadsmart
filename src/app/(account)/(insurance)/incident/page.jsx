"use client"

import Container from "@/components/shared/container/Container";
import Title from "@/components/ui/Title";

export default function page() {
    const [openCard, setOpenCard] = useState(-1);
    return (
        <div>
            <Container className={"block"}>
                <div className='flex flex-col lg:flex-row justify-between border-b'>
                    <Title text={"Your Insurance"} className={"text-left"} />
                    <div className='flex flex-row gap-4 text-sm'>
                        <p>Policy</p>
                        <Link href={"/incident"}>
                            <p>Incident</p>
                        </Link>
                        <Link href={"/report-incident"}>
                            <p>Report Incident</p>
                        </Link>
                    </div>
                </div>
                <div className='flex gap-2 text-sm'>
                    <p>All</p>
                    <p>Active</p>
                    <p>Inactive</p>
                </div>
                <div className="space-y-6 lg:space-y-0">
                    <VehicleCollapseCard index={1} openCard={openCard} setOpenCard={setOpenCard} />
                    <VehicleCollapseCard index={2} openCard={openCard} setOpenCard={setOpenCard} />
                    <VehicleCollapseCard index={3} openCard={openCard} setOpenCard={setOpenCard} />
                </div>
            </Container>
        </div>
    )
}

import carImg from "@/assets/images/pngwing.com (3).png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



function VehicleCollapseCard({ openCard, setOpenCard, index, }) {

    return (
        <div className='w-full relative flex flex-col justify-between items-center '>
            <div
                className="w-full flex flex-col lg:flex-row items-center justify-between lg:items-start p-4 cursor-pointer shadow-xs lg:shadow-none rounded-xl"
                onClick={() => openCard == index ? setOpenCard(-1) : setOpenCard(index)}
            >
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="bg-secondary aspect-[2/1] w-full lg:w-28 rounded-sm flex items-center justify-center">
                        <Image
                            src={carImg}
                            alt="Car"
                            width={60}
                            height={60}
                            className="rounded-lg object-contain "
                        />
                    </div>
                    <div>
                        <div className="text-lg font-medium flex items-center gap-2"><p className="text-nowrap">Mahindra XUV 700</p> <span className="bg-green-200 text-xs py-1 px-4 rounded-sm text-green-600">Open</span></div>
                        <p className="text-sm text-gray-300">Reported on 20 Jan 2025</p>
                        <p className="text-sm">View details</p>
                    </div>
                </div>
                <Button className="w-fit mt-4 text-white">Free claim</Button>
            </div>
            {openCard == index && (
                <div className={`w-full max-w-4xl mx-auto p-4 sm:p-6 relative z-[99999] top-[70%]`}>
                    <Card className="">
                        <CardContent className="p-4 sm:p-6 space-y-6">
                            {/* Vehicle Details - Top Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm">
                                <div>
                                    <span className="text-gray-600">Ownership: </span>
                                    <span className="font-medium">Owned</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Use: </span>
                                    <span className="font-medium">Business use</span>
                                </div>
                            </div>

                            {/* Note and Coverage - Second Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm">
                                <div>
                                    <span className="text-gray-600">Note</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Coverage: </span>
                                    <span className="font-medium">Comprehensive</span>
                                </div>
                            </div>

                            {/* Uploads */}
                            <div>
                                <h3 className="font-medium mb-4 text-gray-900">Uploads</h3>
                                <div className="grid grid-cols-5 gap-3">
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <div
                                            key={index}
                                            className="aspect-square border-2 border-dashed border-red-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-red-400 transition-colors bg-red-50/30"
                                        >
                                            <Upload className="w-6 h-6 text-red-400" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Documents */}
                            <div>
                                <h3 className="font-medium mb-4 text-gray-900">Documents</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["Lorem Ipsum", "Lorem Ipsum"].map((doc, index) => (
                                        <div key={index} className="flex items-center gap-2 bg-red-100 px-3 py-2 rounded text-sm">
                                            <span className="bg-primary text-white px-2 py-1 rounded text-xs font-medium">PDF</span>
                                            <span className="text-gray-700">{doc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

        </div>
    )
}


