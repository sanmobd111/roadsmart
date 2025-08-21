"use client";

import carImg from "@/assets/images/pngwing.com (3).png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Upload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { CardContent } from "../../ui/card";

const drivers = [
    {
        id: 1,
        name: "Stella Bella",
        age: 38,
        gender: "female",
        status: "currently insured",
        avatar: "/placeholder.svg?height=40&width=40",
        description: "38 years old female,currently insured",
        details: {
            name: "Stella Bella",
            status: "Active",
            birthday: "17/06/1996",
            issueDate: "1-2 years",
            maritalStatus: "Single",
            licenseId: "12345678",
            relationship: "Other",
            trafficViolations: "None",
        },
    },
    {
        id: 2,
        name: "Daniel",
        age: 38,
        gender: "male",
        status: "currently insured",
        avatar: "/placeholder.svg?height=40&width=40",
        description: "38 years old male,currently insured",
        details: {
            name: "Daniel",
            status: "Active",
            birthday: "17/06/1996",
            issueDate: "1-2 years",
            maritalStatus: "Single",
            licenseId: "12345678",
            relationship: "Other",
            trafficViolations: "None",
        },
    },
]



export default function VehicleCollapseCard({ openCard, setOpenCard, index }) {
    const [isDriversExpanded, setIsDriversExpanded] = useState(true)
    const [expandedDriver, setExpandedDriver] = useState(2)

    const toggleDriverExpansion = (driverId) => {
        setExpandedDriver(expandedDriver === driverId ? null : driverId)
    }

    return (
        <div className='w-full relative shadow-sm rounded-lg'>
            <div
                className="flex items-center justify-between gap-4 p-4 py-5 border-b cursor-pointer"
                onClick={() => openCard == index ? setOpenCard(-1) : setOpenCard(index)}
            >
                <div className="flex items-center gap-4">
                    <Image
                        src={carImg}
                        alt="Car"
                        width={60}
                        height={60}
                        className="rounded-lg object-contain"
                    />
                    <div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                            Vehicle
                        </div>
                        <div className="text-lg font-medium">Mahindra XUV 700</div>
                    </div>
                </div>
                <div className="text-gray-500">
                    {openCard == index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
            </div>
            {openCard == index && (
                <div className={`w-full max-w-4xl mx-auto absolute z-[99999] top-[100%] right-0`}>
                    <Card className="border border-gray-200">
                        <CardContent className="p-4 sm:p-6 space-y-6">
                            {/* Vehicle Details - Top Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-sm">
                                <div>
                                    <span className="text-gray-600">Ownership: </span>
                                    <span className="font-medium">Owned</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Use: </span>
                                    <span className="font-medium">Business use</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Quarters: </span>
                                    <span className="font-medium">2 Quarters</span>
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
                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-1/2">
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

                            {/* Drivers */}
                            {
                                (
                                    <div>
                                        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                                            <h3 className="font-medium text-gray-900">Drivers</h3>
                                            <button onClick={() => setIsDriversExpanded(!isDriversExpanded)} className="p-1">
                                                {isDriversExpanded ? (
                                                    <ChevronUp className="w-4 h-4 text-gray-400" />
                                                ) : (
                                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                                )}
                                            </button>
                                        </div>

                                        {isDriversExpanded && (
                                            <div className="space-y-4">
                                                {/* Driver Profiles */}
                                                {drivers.map((driver) => (
                                                    <div key={driver.id} className="space-y-3">
                                                        <div
                                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                                                            onClick={() => toggleDriverExpansion(driver.id)}
                                                        >
                                                            <Avatar className="w-10 h-10">
                                                                <AvatarImage src={driver.avatar || "/placeholder.svg"} alt={driver.name} />
                                                                <AvatarFallback>{driver.name.charAt(0)}</AvatarFallback>
                                                            </Avatar>
                                                            <div className="flex-1">
                                                                <div className="font-medium text-gray-900">{driver.name}</div>
                                                                <div className="text-sm text-gray-600">{driver.description}</div>
                                                            </div>
                                                            {expandedDriver === driver.id ? (
                                                                <ChevronUp className="w-4 h-4 text-gray-400" />
                                                            ) : (
                                                                <ChevronDown className="w-4 h-4 text-gray-400" />
                                                            )}
                                                        </div>

                                                        {/* Driver Details - Only show for expanded driver */}
                                                        {expandedDriver === driver.id && (
                                                            <div className="bg-white border border-gray-200 rounded-lg p-4">
                                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                                                                    <div>
                                                                        <div className="text-gray-600 mb-1">Name:</div>
                                                                        <div className="font-medium text-gray-900">{driver.details.name}</div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-gray-600 mb-1">Status:</div>
                                                                        <div className="font-medium text-gray-900">{driver.details.status}</div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-gray-600 mb-1">Birthday:</div>
                                                                        <div className="font-medium text-gray-900">{driver.details.birthday}</div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-gray-600 mb-1">Issue date:</div>
                                                                        <div className="font-medium text-gray-900">{driver.details.issueDate}</div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-gray-600 mb-1">Marital status:</div>
                                                                        <div className="font-medium text-gray-900">{driver.details.maritalStatus}</div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-gray-600 mb-1">License ID:</div>
                                                                        <div className="font-medium text-gray-900">{driver.details.licenseId}</div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-gray-600 mb-1">Relationship:</div>
                                                                        <div className="font-medium text-gray-900">{driver.details.relationship}</div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-gray-600 mb-1">Traffic violations:</div>
                                                                        <div className="font-medium text-gray-900">{driver.details.trafficViolations}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )
                            }
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    )
}
