"use client"

import Container from '@/components/shared/container/Container'
import { Card, CardContent } from '@/components/ui/card'
import Title from '@/components/ui/Title'
import { Car } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function page() {
    const [currentTab, setCurrentTab] = React.useState("policy")
    return (
        <Container className={"block lg:mb-28"}>
            <div className='flex flex-col md:flex-row justify-between md:items-end mb-4 pb-3 border-b'>
                <Title text={"Your Insurance"} className={"text-left"} />
                <div className='flex flex-col md:flex-row gap-2  text-sm text-gray/50'>
                    <p>Add Policy</p>
                    <Link href={"/incident"}>
                        <p>File Claim</p>
                    </Link>
                    <Link href={"/report-incident"}>
                        <p>Report Incident</p>
                    </Link>
                </div>
            </div>
            <div className='flex gap-2 text-sm'>
                <p className={`${currentTab === "policy" ? "text-gray font-semibold" : "text-gray/50"} cursor-pointer`} onClick={() => setCurrentTab("policy")}>Policy</p>
                <p className={`${currentTab === "claim" ? "text-gray font-semibold" : "text-gray/50"} cursor-pointer`} onClick={() => setCurrentTab("claim")}>Claim</p>
                <p className={`${currentTab === "incident" ? "text-gray font-semibold" : "text-gray/50"} cursor-pointer`} onClick={() => setCurrentTab("incident")}>Incident</p>
            </div>
            <div>
                {
                    currentTab === "policy" && <InsurancePolicies />
                }
                {
                    currentTab === "claim" && <ClaimPolicies />
                }
                {
                    currentTab === "incident" && <Incidents />
                }

            </div>
        </Container>
    )
}


function InsurancePolicies() {
    const policies = [
        {
            id: 1,
            title: "Multi Auto",
            status: "Active",
            statusColor: "green",
            policyNumber: "345667890832O",
            insurer: "Honnet",
            expiryDate: "5 Nov, 2025",
            isExpired: false,
        },
        {
            id: 2,
            title: "Multi Auto",
            status: "Expired",
            statusColor: "red",
            policyNumber: "345667890832O",
            insurer: "Honnet",
            expiryDate: "30 April, 2025",
            isExpired: true,
        },
    ]

    const handleSubmitClaim = (policyId) => {
        console.log(`Submit claim for policy ${policyId}`)
    }

    const handleViewDetails = (policyId) => {
        console.log(`View details for policy ${policyId}`)
    }

    return (
        <div className="bg-white">
            <div className="space-y-8 lg:space-y-4">
                {policies.map((policy) => (
                    <div key={policy.id} className="rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center justify-between w-full lg:w-auto">
                            {/* Policy Info */}
                            <div className="flex items-center w-full lg:w-auto space-x-4">
                                {/* Icon with Notification */}
                                <div className="relative flex-shrink-0">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-100 rounded-lg flex items-center justify-center">
                                        <Car className="text-red-500 text-xl" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-white text-[10px] p-3">
                                        11
                                    </div>
                                </div>

                                {/* Policy Details */}
                                <div>
                                    <div className="flex items-center space-x-3 mb-1">
                                        <h3 className="text-lg font-semibold text-gray-800">{policy.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">Policy No. {policy.policyNumber}</p>
                                    <p className="text-sm text-gray-600">
                                        {policy.isExpired ? "Expired on" : "Expires on"} {policy.expiryDate}
                                    </p>
                                    <span
                                        className={`px-2 py-1 rounded text-xs font-medium ${policy.statusColor === "green" ? "bg-green-100 text-green-700" : "bg-red-100 text-primary"
                                            }`}
                                    >
                                        {policy.status}
                                    </span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-3 mt-4 md:mt-0">
                                <Link href={"/policy-details"}>
                                    <button
                                        className="border-2 text-nowrap border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-2 rounded-lg transition-colors"
                                    >
                                        View Details
                                    </button>
                                </Link>
                                {/* <Link href={"/policy-details"}>
                                    <button
                                        onClick={() => handleViewDetails(policy.id)}
                                        className="bg-primary hover:bg-primary text-white font-medium px-4 py-2 rounded-lg transition-colors"
                                    >
                                        View details
                                    </button>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function ClaimPolicies() {
    const policies = [
        {
            id: 1,
            title: "Multi Auto",
            status: "Active",
            statusColor: "green",
            policyNumber: "345667890832O",
            insurer: "Honnet",
            expiryDate: "5 Nov, 2025",
            isExpired: false,
        },
        {
            id: 2,
            title: "Multi Auto",
            status: "Expired",
            statusColor: "red",
            policyNumber: "345667890832O",
            insurer: "Honnet",
            expiryDate: "30 April, 2025",
            isExpired: true,
        },
    ]

    const handleSubmitClaim = (policyId) => {
        console.log(`Submit claim for policy ${policyId}`)
    }

    const handleViewDetails = (policyId) => {
        console.log(`View details for policy ${policyId}`)
    }

    return (
        <div className="bg-white">
            <div className="space-y-8 lg:space-y-4">
                {policies.map((policy) => (
                    <div key={policy.id} className="rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center justify-between w-full lg:w-auto">
                            {/* Policy Info */}
                            <div className="flex items-center w-full lg:w-auto space-x-4">
                                {/* Icon with Notification */}
                                <div className="relative flex-shrink-0">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-100 rounded-lg flex items-center justify-center">
                                        <Car className="text-red-500 text-xl" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-white text-[10px] p-3">
                                        11
                                    </div>
                                </div>

                                {/* Policy Details */}
                                <div>
                                    <div className="flex items-center space-x-3 mb-1">
                                        <h3 className="text-lg font-semibold text-gray-800">{policy.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">Policy No. {policy.policyNumber}</p>
                                    <p className="text-sm text-gray-600">
                                        {policy.isExpired ? "Expired on" : "Expires on"} {policy.expiryDate}
                                    </p>
                                    <span
                                        className={`px-2 py-1 rounded text-xs font-medium ${policy.statusColor === "green" ? "bg-green-100 text-green-700" : "bg-red-100 text-primary"
                                            }`}
                                    >
                                        {policy.status}
                                    </span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-3 mt-4 md:mt-0">
                                <Link href={"/view-claim"}>
                                    <button
                                        className="border-2 text-nowrap border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-2 rounded-lg transition-colors"
                                    >
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}



function Incidents() {
    const policies = [
        {
            id: 1,
            title: "Multi Auto",
            status: "Active",
            statusColor: "green",
            policyNumber: "345667890832O",
            insurer: "Honnet",
            expiryDate: "5 Nov, 2025",
            isExpired: false,
        },
        {
            id: 2,
            title: "Multi Auto",
            status: "Expired",
            statusColor: "red",
            policyNumber: "345667890832O",
            insurer: "Honnet",
            expiryDate: "30 April, 2025",
            isExpired: true,
        },
    ]

    const handleSubmitClaim = (policyId) => {
        console.log(`Submit claim for policy ${policyId}`)
    }

    const handleViewDetails = (policyId) => {
        console.log(`View details for policy ${policyId}`)
    }

    return (
        <div className="bg-white">
            <div className="space-y-8 lg:space-y-4">
                <VehicleCollapseCard status={"open"} />
                <VehicleCollapseCard status={"close"} />
            </div>
        </div>
    )
}


import carImg from "@/assets/images/pngwing.com (3).png"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import { IoCloseSharp } from 'react-icons/io5'
function VehicleCollapseCard({ status }) {
    const [openCard, setOpenCard] = useState(false)

    return (
        <div className='w-full relative flex flex-col justify-between items-center '>

            <div
                className="w-full flex flex-col lg:flex-row lg:items-center justify-between py-4 cursor-pointer shadow-xs lg:shadow-none rounded-xl"
                onClick={() => setOpenCard(!openCard)}
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

                        <div className="text-lg font-medium flex items-center gap-2"><p className="text-nowrap">Mahindra XUV 700</p> {
                            status == "open" ? <span className="bg-yellow-200 text-xs py-1 px-4 rounded-sm text-yellow-600">Open</span> : <span className="bg-green-200 text-xs py-1 px-4 rounded-sm text-green-600">Close</span>
                        }</div>
                        <p className="text-sm text-gray-300">Reported on 20 Jan 2025</p>
                        <p className="text-sm">View details</p>
                    </div>
                </div>
                {
                    status == "open" ? <Button className="w-fit mt-4 text-white">Free a claim</Button> : <Link href={"/view-claim"} className='text-sm text-gray'>View claim filed on 22 May 2025</Link>
                }
            </div>
            {status === "open" &&openCard && (
                <div className={`w-full max-w-4xl mx-auto p-4 sm:p-6 z-[99999] top-[70%] relative`}>
                    <Card className="relative">
                        <CardContent className="p-4 sm:p-6 space-y-6">
                            <div className='absolute right-4 top-4 p-2 bg-secondary rounded-sm'>
                                <IoCloseSharp className='text-primary' />
                            </div>
                            {/* Vehicle Details - Top Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-sm">
                                <div>
                                    <span className="text-gray-black">Incident date: </span>
                                    <span className="text-gray/70">21 Nov 2024</span>
                                </div>
                                <div>
                                    <span className="text-gray-black">Incident town: </span>
                                    <span className="text-gray/70">Lusaka</span>
                                </div>
                                <div>
                                    <span className="text-gray-black">Vehicle: </span>
                                    <span className="text-gray/70">2018 Toyota Hilux</span>
                                </div>
                            </div>

                            {/* Note and Coverage - Second Row */}
                            <div className="text-sm">
                                <div>
                                    <span className="text-gray-black">Incident details: </span>
                                    <span className="text-gray/70">I was crossing Cairo road and suddenly a vehicle beat traffic lights and hit into my vehicle.</span>
                                </div>
                            </div>

                            {/* Uploads */}
                            <div>
                                <h3 className="mb-4 text-gray-black">Images: </h3>
                                <div className="grid grid-cols-5 gap-3 lg:w-1/2">
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
                        </CardContent>
                    </Card>
                </div>
            )}

        </div>
    )
}



