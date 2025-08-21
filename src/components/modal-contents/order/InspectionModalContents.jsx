import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'; // Shadcn UI
import { CheckCircle, ChevronDown, XCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import carImg from "@/assets/images/pngwing.com (3).png";
import BackGroundColorDiv from '@/components/shared/background-color-div/BackGroundColorDiv';

export default function VehicleInspectionModalContents() {
    const vehicleDetails = {
        year: "2023",
        make: "Mercedes Benz S-Class",
        variant: "BASIC",
        createdDate: "Jan 18, 2024",
        mileage: "13,200 KM",
    };

    const inspectionSections = [
        {
            title: "Roadworthiness",
            items: [
                { text: "Fitness valid", status: "checked" },
                { text: "Road Tax valid", status: "checked" },
                { text: "Insurance valid", status: "checked" },
                { text: "Insurance Company name", status: "checked" },
                { text: "Service provider name", status: "checked" },
                { text: "Service provider name", status: "checked" },
            ],
        },
        {
            title: "Windshield",
            items: [
                { text: "Front windshield no cracked", status: "checked" },
                { text: "Front wipers not worn out", status: "checked" },
                { text: "Rear windshield no cracked", status: "checked" },
                { text: "Rear wipers not worn out", status: "checked" },
            ],
        },
        {
            title: "Body",
            items: [
                { text: "Body not dirty", status: "checked" },
                { text: "No dents front and rear", status: "checked" },
                { text: "No dents & scratches-bumpers", status: "checked" },
                { text: "No dents & scratches-fenders", status: "checked" },
                { text: "Boot shocks working properly", status: "checked" },
                { text: "Boot shocks working properly", status: "checked" },
                { text: "Bonnet shocking working properly", status: "checked" },
            ],
        },
        {
            title: "Side Mirror",
            items: [
                { text: "Side mirrors engraved", status: "checked" },
            ],
        },
        {
            title: "Tires",
            items: [
                { text: "Tire in good condition", status: "checked" },
                { text: "Tire size seen on tire", status: "checked" },
            ],
        },
        {
            title: "Exhaust",
            items: [
                { text: "No sign of tempering", status: "checked" },
            ],
        },
        {
            title: "Lamps",
            items: [
                { text: "Headlights not broken/working", status: "checked" },
                { text: "Parking lights not broken/working", status: "checked" },
                { text: "Book lights not broken/working", status: "checked" },
                { text: "Taillights - not broken/working", status: "checked" },
            ],
        },
    ];

    const underTheHoodItems = [
        { text: "Engine not dirty", status: "checked" },
        { text: "Battery has brand alkar", status: "checked" },
        { text: "Battery clamp in position", status: "checked" },
        { text: "Fluids(Mechanical use)", status: "checked" },
        { text: "Engine oil box the level", status: "checked" },
        { text: "Window average pump low", status: "checked" },
        { text: "No oil leaks", status: "checked" },
    ];

    const interiorCheckSections = [
        {
            title: "Dashboard",
            items: [
                { text: "No cracks", status: "checked" },
                { text: "Mileage reading", status: "checked" },
                { text: "Fuel level above 1/4", status: "checked" },
                { text: "No warning lights", status: "checked" },
            ],
        },
        {
            title: "Transmission",
            items: [
                { text: "Auto/Manual", status: "checked" },
            ],
        },
        {
            title: "Electronics",
            items: [
                { text: "Radio working", status: "checked" },
                { text: "Aircon working", status: "checked" },
                { text: "Horn working", status: "checked" },
                { text: "Window working", status: "checked" },
                { text: "Side mirrors operating", status: "checked" },
                { text: "Central locking working", status: "checked" },
            ],
        },
        {
            title: "Cabling & Panels",
            items: [
                { text: "Boot material not sagging", status: "checked" },
                { text: "Door panels not broken", status: "checked" },
            ],
        },
        {
            title: "Seatbelts & Mats",
            items: [
                { text: "Present in working condition", status: "checked" },
                { text: "All floor mats available", status: "checked" },
            ],
        },
        {
            title: "Personal belongings",
            items: [
                { text: "No personal items found", status: "unchecked" },
            ],
        },
        {
            title: "Accessories/Boot",
            items: [
                { text: "Wheel spanner available", status: "checked" },
                { text: "Fire extinguisher available", status: "checked" },
                { text: "Jack available", status: "checked" },
                { text: "Spare wheel available", status: "checked" },
                { text: "Lock nut key available", status: "checked" },
            ],
        },
    ];

    const renderCheckItem = (item) => (
        <div className="flex items-start text-sm text-gray-700 break-words max-w-full">
            {item.status === "checked" ? (
                <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
            ) : (
                <XCircle size={16} className="text-red-500 mr-2 flex-shrink-0 mt-1" />
            )}
            <span className="break-words">{item.text}</span>
        </div>
    );

    return (
        <div className="xl:min-w-6xl bg-white font-sans text-gray-900 flex items-start justify-center">
            <div className="w-full max-w-[1600px] mx-auto space-y-6 bg-white rounded-lg">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-800">Vehicle Inspection Report</h1>
                </div>

                {/* Vehicle Summary */}
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    <div className='space-y-2 lg:flex gap-4'>
                        <div>
                            <BackGroundColorDiv className={"p-2"}>
                                <Image
                                    src={carImg}
                                    alt="Vehicle"
                                    width={80}
                                    height={50}
                                    className="w-20 h-auto object-cover rounded-md"
                                />
                            </BackGroundColorDiv>
                            <p className="text-xs text-center font-semibold text-red-600 mt-1">{vehicleDetails.variant}</p>
                        </div>
                        <div className='mt-2'>
                            <p className="text-sm font-semibold text-gray">{vehicleDetails.year} {vehicleDetails.make} {vehicleDetails.variant}</p>
                            <p className="text-[10px] text-gray-secondary">Created on {vehicleDetails.createdDate}</p>
                        </div>
                    </div>
                    <div className="lg:w-fit lg:mx-auto self-center">
                        <p className="text-xs text-gray">ODO</p>
                        <p className="text-sm text-gray font-semibold">{vehicleDetails.mileage}</p>
                    </div>
                </div>

                {/* Results Section */}
                <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Results</h2>

                {/* Exterior Check */}
                <Collapsible className=" rounded-lg mb-6">
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 px-4 py-2 custom-shadow rounded-lg">
                        <div className="flex items-center space-x-3">
                            <BackGroundColorDiv className={"p-2"}>
                                <Image src={"/icon/car-icon.svg"} alt="Exterior Check Icon" className="w-6 h-6" width={24} height={24} />
                            </BackGroundColorDiv>
                            <span>Exterior check</span>
                        </div>
                        <IoIosArrowDropdown size={20} className="transition-transform duration-200 data-[state=open]:rotate-180 text-primary" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 xl:gap-x-20">
                        {inspectionSections.map((section, index) => (
                            <Collapsible key={index} className="space-y-2">
                                <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-semibold text-gray-800 pb-2 border-b border-gray/20">
                                    <h3 className=''>{section.title}</h3>
                                    <ChevronDown size={16} className="text-gray-500 transition-transform duration-200 data-[state=open]:rotate-180" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="space-y-2">
                                    {section.items.map((item, itemIndex) => (
                                        <React.Fragment key={itemIndex}>
                                            {renderCheckItem(item)}
                                        </React.Fragment>
                                    ))}
                                </CollapsibleContent>
                            </Collapsible>
                        ))}
                    </CollapsibleContent>
                </Collapsible>

                {/* Under The Hood */}
                <Collapsible className="rounded-lg mb-6">
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 p-4 custom-shadow rounded-lg">
                        <div className="flex items-center space-x-3">
                            <BackGroundColorDiv className={"p-2"}>
                                <Image src={"/icon/car-icon.svg"} alt="Exterior Check Icon" className="w-6 h-6" width={24} height={24} />
                            </BackGroundColorDiv>
                            <span>Under The Hood</span>
                        </div>
                        <IoIosArrowDropdown size={20} className="transition-transform duration-200 data-[state=open]:rotate-180 text-primary" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 xl:gap-x-20">
                        {underTheHoodItems.map((item, index) => (
                            <React.Fragment key={index}>
                                {renderCheckItem(item)}
                            </React.Fragment>
                        ))}
                    </CollapsibleContent>
                </Collapsible>

                {/* Interior Check */}
                <Collapsible className="rounded-lg">
                    <CollapsibleTrigger className="custom-shadow flex items-center justify-between w-full text-lg font-semibold text-gray-800 p-4 rounded-lg">
                        <div className="flex items-center space-x-3">
                            <BackGroundColorDiv className={"p-2"}>
                                <Image src={"/icon/car-icon.svg"} alt="Exterior Check Icon" className="w-6 h-6" width={24} height={24} />
                            </BackGroundColorDiv>
                            <span>Interior check</span>
                        </div>
                        <IoIosArrowDropdown size={20} className="transition-transform duration-200 data-[state=open]:rotate-180 text-primary" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 xl:gap-x-20">
                        {interiorCheckSections.map((section, index) => (
                            <Collapsible key={index} className="space-y-2">
                                <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-semibold text-gray-800 pb-2 border-gray-400 border-b">
                                    <h3>{section.title}</h3>
                                    <ChevronDown size={16} className="text-gray-500 transition-transform duration-200 data-[state=open]:rotate-180" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="space-y-2">
                                    {section.items.map((item, itemIndex) => (
                                        <React.Fragment key={itemIndex}>
                                            {renderCheckItem(item)}
                                        </React.Fragment>
                                    ))}
                                </CollapsibleContent>
                            </Collapsible>
                        ))}
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </div>
    );
}
