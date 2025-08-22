"use client"

import RequestHeader from '@/components/account/request/RequestHeader';
import Container from '@/components/shared/container/Container';

const tabs = ["Claim #105", "Claim date on Oct 30, 2024", "Policy No 352785679", "Vehicle Toyota Hilux ALC1234"]

export default function page() {
    const moreActions = [
        { title: "Contact Insurer", handleOnClick: () => { } },
        { title: "Leave feedback", handleOnClick: () => { } },
    ]

    const actions = [
        { title: "Send Message" },
        { title: "Vew Request " },
    ]

    return (
        <Container className={"block"}>
            <div className='space-y-6'>
                <Path>
                    Your Account › Your Requests› Requests details › Claim details
                </Path>
                <RequestHeader title={"Claim Details"} tabs={tabs} actions={actions} />
                {/* <PaymentSummary /> */}
                <StatusHeader Icon={DollarSign} title={"Your Total Excess"} subText={"$550 Jack Tow Inc"} hasBtn btnText={"Pay Now"} />
            </div>
            <Container className={"flex flex-col-reverse lg:flex-row gap-6 lg;gap-0 items-start !p-0 !my-6"}>
                <div className='lg:w-[65%] !ml-0 space-y-6 md:space-y-8 xl:space-y-10'>
                    <StatusTracking moreActions={moreActions} />
                    <VehicleSection />
                    <DeclinedStatus />
                </div>
                <div className='lg:w-[25%]'>
                    <Location title='Address' subTitle='15 Blue Stare Road, <br /> 23 CA New York City, <br /> NY345678' />
                </div>
            </Container>
        </Container>
    )
}




// Vehicle Section
import { Check } from "lucide-react";
function VehicleSection() {
    const [openCard, setOpenCard] = useState(-1)

    const items = [
        {
            id: 1,
            name: "Courtesy Vehicle",
            vehicle: "T",
            expiryDate: "29 June, 2025",
            price: 100,
            image: "/placeholder.svg?height=80&width=120",
        },
        {
            id: 2,
            name: "Towing",
            vehicle: "Toyota Hillux ALJ1829",
            expiryDate: "29 June, 2025",
            price: 100,
            image: "/placeholder.svg?height=80&width=120",
        },
        {
            id: 2,
            name: "Third Party Body Injury ",
            vehicle: "Martin Phiri",
            expiryDate: "29 June, 2025",
            price: 100,
            image: "/placeholder.svg?height=80&width=120",
        }
    ]
    return (
        <div className="">
            <div className="space-y-4 mb-4">
                {/* Status Item */}
                <div className="flex items-center space-x-3 pb-2">
                    {/* Status Icon */}
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                    </div>

                    {/* Status Content */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Confirmed</h3>
                        <p className="text-sm text-gray-500">Updated January 11, 2025</p>
                    </div>
                </div>

                {/* Separator Line */}
                <div className="border-b border-gray-200"></div>
            </div>
            {/* Vehicle Cards */}
            <div className='space-y-4 md:space-y-8'>
                {items.map((item) => (
                    <VehicleDetailsCollapseCard containerClassName={"shadow-none border-none"} openCard={openCard} setOpenCard={setOpenCard} index={0} isCollapsable={false} item={item} />
                ))}
            </div>
        </div>
    )
}

// Declined Status
import { ChevronDown, Clock } from "lucide-react";
import { useState } from "react";
function DeclinedStatus() {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleOpenCard = () => {
        setOpenCard(true)
    }

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="space-y-6">
            {/* Declined Status */}
            <div className="pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between cursor-pointer" onClick={toggleExpanded}>
                    <div className="flex items-center space-x-3">
                        {/* Status Icon */}
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                            <Clock className="w-4 h-4 text-primary" />
                        </div>

                        {/* Status Content */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Declined</h3>
                            <p className="text-sm text-gray-500">Updated January 11, 2025</p>
                        </div>
                    </div>

                    {/* Chevron */}
                    <ChevronDown
                        className={`w-5 h-5 text-primary transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    />
                </div>
            </div>

            <VehicleDetailsCollapseCard containerClassName={"shadow-none border-none"} isCollapsable={false} item={{ name: "Third Party Property Damage", vehicle: "Toyota Hillux ALJ1829", expiryDate: "29 June, 2025", price: 100, image: "/placeholder.svg?height=80&width=120" }} />
        </div>
    )
}

// payment summary
import { DollarSign } from "lucide-react";


// Status Tracking Section
import MoreActionButton from '@/components/account/request/more-action-button/MoreActionButton';
import StatusHeader from '@/components/account/request/status-header/StatusHeader';
import VehicleDetailsCollapseCard from '@/components/account/VehicleDetailsCollapseCard';
import BackGroundColorDiv from "@/components/shared/background-color-div/BackGroundColorDiv";
import Path from "@/components/shared/path/Path";
import SideLocation from '@/components/shared/side-location/SideLocation';
import Image from 'next/image';
import Location from '@/components/account/request/location/Location';
function StatusTracking({ moreActions }) {
    const [expandedItems, setExpandedItems] = useState([1]) // Start with first item expanded

    const statusItems = [
        {
            id: 1,
            title: "Approved",
            date: "Updated January 11, 2025",
            description: "This claim documents will soon be available",
            status: "completed",
            isExpanded: true,
        },
        {
            id: 2,
            title: "Confirmed",
            date: "Updated December 31, 2024",
            description: null,
            status: "current",
            isExpanded: false,
        },
    ]

    const handleTrackJob = () => {
    }

    const handleViewInspection = () => {
    }
    const toggleExpanded = (itemId) => {
        setExpandedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
    }

    return (
        <div className="space-y-6">
            {/* Status Timeline */}
            <div className="relative border-b">
                {statusItems.map((item, index) => (
                    <div key={item.id} className="relative pb-3">
                        {/* Timeline Line */}
                        {index < statusItems.length - 1 && <div className="absolute left-4 top-8 w-0.5 h-[calc(100%-16px)] border-l border-dashed border"></div>}

                        {/* Status Item */}
                        <div className="flex items-start space-x-4 pb">
                            {/* Status Icon */}
                            <div className="flex-shrink-0 mt-1">
                                {item.status === "completed" ? (
                                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                        <Check className="w-5 h-5 text-primary" />
                                    </div>
                                ) : (
                                    <div className='mt-2 w-8 h-8'>
                                        <div className="w-4 h-4 bg-primary rounded-sm mx-auto"></div>
                                    </div>
                                )}

                            </div>

                            {/* Status Content */}
                            <div className="flex-1 min-w-0">
                                <div
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={() => toggleExpanded(item.id)}
                                >
                                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                    {
                                        index !== 1 && <div className='p-2 bg-secondary rounded-full'>
                                            <ChevronDown
                                                className={`w-5 h-5 text-primary transition-transform duration-200 ${expandedItems.includes(item.id) ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </div>
                                    }
                                </div>
                                <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                                {expandedItems.includes(item.id) && item.description && (
                                    <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Own Damage Section */}
            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
                {/* Vehicle Info */}
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-0 space-x-4">
                    {/* Car Icon */}
                    <BackGroundColorDiv className={"p-2"}>
                        <Image src={"/icon/car-icon.svg"} className="w-10 h-10 object-contain" width={40} height={40} />
                    </BackGroundColorDiv>

                    {/* Vehicle Details */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Own Damage</h3>
                        <p className="text-gray-600 text-sm">Toyota Hillux ALJ1829</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2">
                    <button
                        onClick={handleTrackJob}
                        className="bg-primary hover:bg-primary text-white font-medium px-6 py-2 rounded-lg transition-colors"
                    >
                        Track Job
                    </button>
                    <button
                        onClick={handleViewInspection}
                        className="border border-primary text-primary hover:bg-red-50 font-medium px-6 py-2 rounded-lg transition-colors"
                    >
                        View documents
                    </button>
                    <MoreActionButton actions={moreActions} />
                </div>
            </div>
        </div>
    )
}


