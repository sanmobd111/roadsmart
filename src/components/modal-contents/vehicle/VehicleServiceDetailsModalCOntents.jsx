import React from 'react';
import { CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react'; // For icons
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'; // Assuming Shadcn UI collapsible is available
import carImg from "@/assets/images/pngwing.com (3).png";
import Image from 'next/image';

export default function VehicleServiceDetailsModalContents() {
    const vehicleDetails = {
        year: "2023",
        make: "Mercedes Benz G-Class",
        variant: "BASIC",
        mileage: "19,390 KM",
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
        { text: "Battery not board alkar", status: "checked" },
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
                { text: "Horn working", status: "checked" },
                { text: "Window working", status: "checked" },
                { text: "Window gaining", status: "checked" },
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
            title: "Accessories/Book",
            items: [
                { text: "Wheel spanner available", status: "checked" },
                { text: "First aid kit available", status: "checked" },
                { text: "Jack available", status: "checked" },
                { text: "Spare wheel available", status: "checked" },
                { text: "Lock nut key available", status: "checked" },
            ],
        },
    ];

    const renderCheckItem = (item) => (
        <div className="flex items-center text-sm text-gray-700">
            {item.status === "checked" ? (
                <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
            ) : (
                <XCircle size={16} className="text-red-500 mr-2 flex-shrink-0" />
            )}
            <span>{item.text}</span>
        </div>
    );

    return (
        <div className="w-full max-w-[1600px] space-y-6">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                Vehicle Inspection Report
            </h1>

            {/* Vehicle Summary */}
            <div className="flex items-center space-x-4 mb-8">
                <Image
                    src={carImg}
                    width={200}
                    height={200}
                    alt="Vehicle"
                    className="w-20 h-auto object-cover rounded-md"
                />
                <div>
                    <p className="text-base font-semibold text-gray-800">{vehicleDetails.year} {vehicleDetails.make} {vehicleDetails.variant}</p>
                    <p className="text-sm text-gray-600">{vehicleDetails.mileage}</p>
                </div>
            </div>

            {/* Results Section */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Results</h2>

            {/* Exterior Check Collapsible */}
            <Collapsible defaultOpen={true} className="border border-gray-200 rounded-lg mb-6">
                <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 p-4 border-b border-gray-200">
                    Exterior check
                    <ChevronDown size={20} className="transition-transform duration-200 data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {inspectionSections.map((section, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="text-base font-semibold text-gray-800">{section.title}</h3>
                            {section.items.map((item, itemIndex) => (
                                <React.Fragment key={itemIndex}>
                                    {renderCheckItem(item)}
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </CollapsibleContent>
            </Collapsible>

            {/* Under The Hood Section */}
            <Collapsible defaultOpen={true} className="border border-gray-200 rounded-lg mb-6">
                <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 p-4 border-b border-gray-200">
                    Under The Hood
                    <ChevronDown size={20} className="transition-transform duration-200 data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        {underTheHoodItems.map((item, index) => (
                            <React.Fragment key={index}>
                                {renderCheckItem(item)}
                            </React.Fragment>
                        ))}
                    </div>
                </CollapsibleContent>
            </Collapsible>

            {/* Interior Check Collapsible */}
            <Collapsible defaultOpen={true} className="border border-gray-200 rounded-lg">
                <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 p-4 border-b border-gray-200">
                    Interior check
                    <ChevronDown size={20} className="transition-transform duration-200 data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {interiorCheckSections.map((section, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="text-base font-semibold text-gray-800">{section.title}</h3>
                            {section.items.map((item, itemIndex) => (
                                <React.Fragment key={itemIndex}>
                                    {renderCheckItem(item)}
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
}
