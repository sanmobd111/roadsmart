"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

import RequestHeader from '@/components/account/request/RequestHeader'
import VehicleSelectCollapseCard from '@/components/account/VehicleSelectCollapseCard'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { ChevronDown, ChevronUp, MapPin, Search, Star } from "lucide-react"

import carImg from "@/assets/images/pngwing.com (3).png";
import Checkbox from "@/components/shared/check-box/Checkbox"
import Link from "next/link"

export default function Page() {
    const [searchTerm, setSearchTerm] = useState("")
    const [scrollPosition, setScrollPosition] = useState(0)
    const scrollContainerRef = useRef(null)
    const [openCard, setOpenCard] = useState(-1)
    const [isExpanded, setIsExpanded] = useState(false)

    const [vendors, setVendors] = useState([
        { id: 1, name: "Carlaw Tire & Auto Service Centre", rating: 4.5, reviewCount: "1% ratings", address: "45 Pondfield Rd W #1C", image: "/placeholder.svg?height=120&width=160", isSelected: false },
        { id: 2, name: "AutoZone Auto Parts & Service", rating: 4.2, reviewCount: "2% ratings", address: "123 Main Street #2A", image: "/placeholder.svg?height=120&width=160", isSelected: false },
        { id: 3, name: "Quick Fix Auto Repair", rating: 4.8, reviewCount: "3% ratings", address: "789 Oak Avenue #3B", image: "/placeholder.svg?height=120&width=160", isSelected: false },
        { id: 4, name: "Premium Car Service Center", rating: 4.6, reviewCount: "4% ratings", address: "456 Pine Road #4C", image: "/placeholder.svg?height=120&width=160", isSelected: false },
        { id: 5, name: "Elite Auto Workshop", rating: 4.3, reviewCount: "5% ratings", address: "321 Elm Street #5D", image: "/placeholder.svg?height=120&width=160", isSelected: false },
        { id: 6, name: "Master Mechanic Services", rating: 4.7, reviewCount: "6% ratings", address: "654 Maple Drive #6E", image: "/placeholder.svg?height=120&width=160", isSelected: false },
        { id: 7, name: "Speedy Auto Solutions", rating: 4.4, reviewCount: "7% ratings", address: "987 Cedar Lane #7F", image: "/placeholder.svg?height=120&width=160", isSelected: false },
        { id: 8, name: "Professional Car Care", rating: 4.9, reviewCount: "8% ratings", address: "147 Birch Boulevard #8G", image: "/placeholder.svg?height=120&width=160", isSelected: false },
    ])

    const toggleVendorSelection = (vendorId) => {
        setVendors((prev) =>
            prev.map((vendor) =>
                vendor.id === vendorId ? { ...vendor, isSelected: !vendor.isSelected } : vendor
            )
        )
    }

    const selectedVendors = vendors.filter((v) => v.isSelected)

    const handleSubmit = () => {
        console.log("Selected vendors:", selectedVendors)
    }

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
            const scrollPercentage = scrollTop / (scrollHeight - clientHeight)
            setScrollPosition(scrollPercentage)
        }
    }

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll)
            return () => scrollContainer.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="max-w-[1600px] mx-auto p-4 md:p-0 space-y-4 md:space-y-14 xl:space-y-20 my-10 px-4 md:px-6">
            <RequestHeader />

            {/* Service Section */}
            <div className="space-y-4 mb-4 xl:mb-6">
                <h2 className="text-xl font-medium text-gray-900">Service</h2>
                <Card className="border border-gray-200 rounded-xl py-0">
                    <CardContent className="p-0">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors rounded-xl"
                        >
                            <h3 className="text-lg font-medium text-gray-900">Repairs</h3>
                            {isExpanded ? (
                                <ChevronUp className="w-5 h-5 text-gray-400" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                        </button>

                        {isExpanded && (
                            <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100 ">
                                <div className="pt-4 space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <div className="text-gray-600 mb-1">Repair Type:</div>
                                            <div className="font-medium text-gray-900">Body Work</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-600 mb-1">Estimated Cost:</div>
                                            <div className="font-medium text-gray-900">$2,500</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-600 mb-1">Duration:</div>
                                            <div className="font-medium text-gray-900">5–7 days</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-600 mb-1">Status:</div>
                                            <div className="font-medium text-green-600">Approved</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-gray-600 mb-1">Description:</div>
                                        <div className="font-medium text-gray-900">
                                            Front bumper replacement and paint work required due to collision damage.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Vehicle Cards */}
            <div className="lg:w-[70%]">
                {[0, 1, 2].map((i) => (
                    <VehicleSelectCollapseCard key={i} openCard={openCard} setOpenCard={setOpenCard} index={i} />
                ))}
            </div>

            {/* Vendor Selection */}
            <div className="w-full mx-auto p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <h1 className="text-2xl font-semibold text-gray-900">Select Vendors</h1>
                    <div className="relative w-full sm:w-80">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                            type="text"
                            placeholder="Search Products"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                </div>

                {/* Vendor Grid & Scrollbar */}
                <div className="flex gap-4 mb-6">
                    <div className="w-1 bg-gray-200 flex-shrink-0 rounded-full relative h-96">
                        <div
                            className="w-full bg-primary rounded-full transition-all duration-150 ease-out"
                            style={{
                                height: "25%",
                                transform: `translateY(${scrollPosition * 300}%)`,
                            }}
                        />
                    </div>

                    <div
                        ref={scrollContainerRef}
                        className="flex-1 overflow-y-auto h-96 pr-2"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        <style jsx>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {vendors.map((vendor) => (
                                <Card
                                    key={vendor.id}
                                    onClick={() => toggleVendorSelection(vendor.id)}
                                    className={`border-2 cursor-pointer hover:shadow-md transition-all duration-200 ${vendor.isSelected
                                        ? "border-red-500 bg-red-50"
                                        : "border-gray-200 hover:border-gray-300"
                                        }`}
                                >
                                    <CardContent className="p-4">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-20 h-16 sm:w-24 sm:h-20 bg-gray-100 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={carImg}
                                                        alt={vendor.name}
                                                        width={96}
                                                        height={80}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex items-center gap-1">
                                                            <Star className="w-4 h-4 fill-red-500 text-red-500" />
                                                            <span className="text-sm font-medium">{vendor.rating}</span>
                                                        </div>
                                                        <span className="text-xs text-gray-500">{vendor.reviewCount}</span>
                                                    </div>
                                                    <Checkbox checked={vendor.isSelected} setChecked={() => toggleVendorSelection(vendor.id)} />
                                                </div>
                                                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{vendor.name}</h3>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                        <MapPin className="w-3 h-3 text-white" />
                                                    </div>
                                                    <span className="truncate">{vendor.address}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="space-y-4">
                    <div className="flex justify-start">
                        <button className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                            See all garages
                        </button>
                    </div>
                    <div className="w-full max-w-md mx-auto">
                        <Link href={"/claim-request"}>
                            <Button
                                onClick={handleSubmit}
                                // disabled={selectedVendors.length === 0}
                                className="w-full bg-primary hover:bg-primary text-white py-3 text-base font-medium rounded-lg"
                            >
                                Submit
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
