"use client";

import carImg from "@/assets/images/pngwing.com (3).png";
import { Card } from "@/components/ui/card";
import combinedClasses from "@/utils/tailwind";
import { ChevronDown, ChevronUp, FileText, Upload } from "lucide-react";
import Image from "next/image";
import { CardContent } from "../ui/card";
import BackGroundColorDiv from "../shared/background-color-div/BackGroundColorDiv";

const documents = [
    { id: 1, name: "Lorem Ipsum", type: "PDF" },
    { id: 2, name: "Lorem Ipsum", type: "PDF" },
]



export default function VehicleDetailsCollapseCard({ openCard, setOpenCard, index, isCollapsable = true, containerClassName, item }) {
    return (
        <div className={combinedClasses('w-full relative shadow-lg rounded-lg', containerClassName)}>
            <div
                className="flex items-center justify-between gap-4 cursor-pointer"
                onClick={() => openCard == index ? setOpenCard(-1) : setOpenCard(index)}
            >
                <div className="flex items-center gap-4">
                    {/* <Image
                        src={carImg}
                        alt="Car"
                        width={60}
                        height={60}
                        className="rounded-lg object-contain"
                    /> */}
                    <BackGroundColorDiv className={"p-2"}>
                        <Image
                            src={"/icon/car-icon.svg"}
                            alt="Car"
                            width={60}
                            height={60}
                            className="rounded-lg object-contain w-10 h-10"
                        />
                    </BackGroundColorDiv>
                    <div>
                        <div className="text-lg font-medium">{item?.name || "Mahindra XUV 700"}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                            {item?.vehicle || "Toyota Hillux ALJ1829"}
                        </div>
                    </div>
                </div>
                {
                    isCollapsable && <div className="text-gray-500">
                        {openCard == index ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
                    </div>
                }
            </div>
            {isCollapsable && openCard == index && (
                <div className="w-[80%] left-[10%]  absolute z-[99999] top-[110%]">
                    <Card className="border border-gray-200 !border-none">
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
                                            <span className="text-gray-600">Note</span>
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
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 cursor-pointer">Uploads</h3>
                                <div className="grid grid-cols-5 gap-3 lg:w-1/2">
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


