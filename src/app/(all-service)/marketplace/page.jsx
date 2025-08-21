"use client";

import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    ChevronDown,
    ChevronUp,
    Search
} from "lucide-react";
import { CgFileDocument } from "react-icons/cg";
import { GiAutoRepair } from "react-icons/gi";
// import InsuranceIcon from "@/assets/images/Group 971.svg";
// import Compliance from "@/assets/images/Vector.jpg";
// import TabFinance from "./tab-finance";
// import TabCompliance from "./tabCompliance";
// import TabInsurance from "./tabInsurance";
// import TabRepairs from "./tabRepairs";
import ServiceBanner from "@/components/all-service/service-banner/ServiceBanner";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { FaRegBuilding } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";

const serviceCategories = [
    {
        id: "repair",
        name: "Repair",
        icon: GiAutoRepair,
        color: "text-red-500",
        services: [
            { name: "Service - scheduled maintenance", featured: true },
            { name: "General Diagnosis" },
            { name: "Engine Service" },
            { name: "Oil Change" },
            { name: "Engine Overhaul" },
            { name: "Engine Replacement" },
            { name: "Brake Service" },
            { name: "Brake Replacement" },
            { name: "Brake Disc Replacement" },
            { name: "Brake Disc & Pads Replacement" },
            { name: "Steering Column Repair" },
            { name: "Steering Column Repair" },
            { name: "Steering Column Repair" },
            { name: "Electrical diagnosis" },
            { name: "Electrical diagnosis" },
            { name: "Exhaust system repair" },
            { name: "Windscreen replacement" },
            { name: "Full body spay" },
            { name: "Fender repair" },
            { name: "Tire replacement" },
        ],
    },
    {
        id: "insurance",
        name: "Insurance",
        icon: CgFileDocument,
        color: "text-blue-500",
        services: [
            { name: "Motor Insurance", featured: true, path: "/insurance-motor/location" },
            { name: "Plant Insurance", path: "/insurance-plants/location" },
            { name: "Marine Insurance ", path: "/consignment-details" },
            { name: "Report Incident", path: "/claim?step=2" }, { name: "Submit Claim", path: "/claim?step=1" }
        ],
    },
    {
        id: "compliance",
        name: "Compliance",
        icon: FaRegBuilding,
        color: "text-blue-500",
        services: [
            { name: "First Registration ", featured: true },
            { name: "Personalised Registration " },
            { name: "Vehicle De-registration " },
            { name: "Change Ownership   " },
            { name: "Change of Absolute Owner" },
            { name: "Vehicle Re-registration" },
            { name: "Registration of Ex-Registration " },
            { name: "Registration of Ex-Red Book" },
            { name: "Change of Color" },
            { name: "Change of Seating Capacity" },
            { name: "Change of Engine " },
            { name: "Road Tax Renewal ", url: "road-tax/location" },
            { name: "Fitness Renewal ", url: "fitness-renewal/location" },
            { name: "Drivers license Renewal" },
            { name: "Whitebook Replacement " },
            { name: "Drivers License Replacement" },
            { name: "Cross Boarder Clearance " },
            { name: "Ex-Red Book Clearance " },
            { name: "Ex-GRZ Book Clearance " },
        ],
    },
    {
        id: "towing",
        name: "Towing",
        icon: FiTruck,
        color: "text-blue-500",
        services: [
        ],
    },
    {
        id: "finance",
        name: "Finance",
        icon: PiCurrencyCircleDollarBold,
        color: "text-blue-500",
        services: [
            { name: "Auto finance", path: "/apply-finance" },
            { name: "TRepair finance ", path: "/apply-finance" },
        ],
    },
];

export default function RoadSmartServices() {
    const [openCategories, setOpenCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleCategory = (categoryId) => {
        setOpenCategories((prev) =>
            prev.includes(categoryId)
                ? prev.filter((id) => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    return (
        <div className="bg-white max-w-[1600px] mx-auto px-4 md:px-6 my-10 md:my-20">
            <ServiceBanner text={"Which repair service do you need?"} />

            {/* Search Bar */}
            <div className="container mx-auto relative my-6 lg:mb-10 lg:mt-14 ">
                <Card className="rounded-0 py-3 max-w-3xl shadow-none border-[#A7A7A7]  rounded-[10px]">
                    <CardContent className="rounded-0 py-0">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
                            <Input
                                type="text"
                                placeholder="Search services or describe problem"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 pr-4 outline-0 focus-visible:outline-0 focus-visible:shadow-none focus-visible:ring-0 shadow-none w-full border-0 focus:ring-0 text-gray-700 placeholder-gray-500 text-base"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                Browse By Category
            </h1>

            {/* Service Categories */}
            <div className="container lg:w-[70%]">
                <div className="space-y-4">
                    {serviceCategories.map((category) => {
                        const IconComponent = category.icon;
                        const isOpen = openCategories.includes(category.id);

                        return (
                            <Collapsible
                                key={category.id}
                                open={isOpen}
                                onOpenChange={() => toggleCategory(category.id)}
                            >
                                <CollapsibleTrigger className="w-full rounded-0 border-0">
                                    <div className="flex items-center justify-between py-6 px-4 custom-shadow transition-colors rounded-xl">
                                        <div className="flex items-center space-x-3 lg:space-x-6">
                                            {/* {IconComponent} */}
                                            <IconComponent className={`w-5 h-5 lg:w-8 lg:h-8 ${isOpen && "text-primary"}`} />
                                            <span className={`text-gray-900 text-lg lg:text-xl ${isOpen && "text-primary"}`}>
                                                {category.name}
                                            </span>
                                        </div>
                                        {isOpen ? (
                                            <ChevronUp className="w-5 h-5 lg:w-8 lg:h-8 text-gray-400" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 lg:w-8 lg:h-8 text-gray-400 -rotate-90" />
                                        )}
                                    </div>
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <div className="mt-4 lg:mt-8 mb-4  border-gray-200">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                                            {category.services.map((service, index) => (
                                                <Link href={"/repair/location"} key={index} className="w-full block">
                                                    <Button
                                                        key={index}
                                                        variant={service.featured ? "default" : "outline"}
                                                        className={`w-full justify-center border text-gray-700 bg-white hover:bg-white  rounded-[10px] text-center h-auto py-4 px-6 ${service.featured
                                                            ? " "
                                                            : "bg-white   border-gray-300"
                                                            }`}
                                                    >
                                                        {service.name}
                                                    </Button>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
