"use client";

import carImg from "@/assets/images/pngwing.com (3).png";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp, FileText, Upload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { CardContent } from "../ui/card";
import Checkbox from "../shared/check-box/Checkbox";

const documents = [
    { id: 1, name: "Lorem Ipsum", type: "PDF" },
    { id: 2, name: "Lorem Ipsum", type: "PDF" },
]



export default function VehicleSelectCollapseCard({ openCard, setOpenCard, index }) {

    return (
        <div className='w-full relative rounded-lg'>
            <div
                className="flex items-center justify-between gap-4 p-4  cursor-pointer"
                onClick={() => openCard == index ? setOpenCard(-1) : setOpenCard(index)}
            >
                <div className="flex items-center gap-4">
                    <Checkbox checked={false} setChecked={() => { }} />
                    <Image
                        src={carImg}
                        alt="Car"
                        width={60}
                        height={60}
                        className="rounded-lg object-contain"
                    />
                    <div>
                        <div className="text-sm flex items-center gap-1 text-gray">
                            Vehicle
                        </div>
                    </div>
                </div>
                <div className="text-gray-500">
                    {openCard == index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
            </div>
            {openCard == index && (
                <div className="w-[80%] mx-auto top-full">
                    <Card className="border border-gray-200">
                        <CardContent className="p-4 sm:p-6 space-y-8">
                            {/* Details Section */}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Details</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 text-sm">
                                    <div className="space-y-3">
                                        <div>
                                            <span className="text-gray-600">Quarters: </span>
                                            <span className="font-medium text-gray-900">2 Quarters</span>
                                        </div>
                                        <div>
                                            {/* <span className="text-gray-600">Note</span> */}
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <span className="text-gray-600">Use: </span>
                                            <span className="font-medium text-gray-900">Business use</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Coverage: </span>
                                            <span className="font-medium text-gray-900">Comprehensive</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Uploads Section */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Uploads</h3>
                                <div className="grid grid-cols-5 gap-3">
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <div
                                            key={index}
                                            className="aspect-square border-2 border-dashed border-red-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-red-400 hover:bg-red-50/50 transition-all duration-200 bg-red-50/30"
                                        >
                                            <Upload className="w-6 h-6 text-red-400" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Documents Section */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Documents</h3>
                                <div className="flex flex-wrap gap-4">
                                    {documents.map((doc) => (
                                        <div key={doc.id} className="flex items-center gap-3 group cursor-pointer">
                                            <div className="relative">
                                                <FileText className="w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                                <div className="absolute -bottom-1 -right-1 bg-primary text-white text-xs px-1.5 py-0.5 rounded font-medium">
                                                    {doc.type}
                                                </div>
                                            </div>
                                            <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{doc.name}</span>
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
