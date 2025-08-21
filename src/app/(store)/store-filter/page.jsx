"use client"

import carImg from "@/assets/images/pngwing.com (3).png"
import Checkbox from "@/components/shared/check-box/Checkbox"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ChevronDown, ChevronRight, MapPin, Star, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function TyreKingDirectory() {
    // const [isConditionDropdownOpen, setIsConditionDropdownOpen] = useState(false);
    const [condition, setCondition] = useState([]);
    const [isConditionDropdownOpen, setIsConditionDropdownOpen] = useState(false);
    console.log(condition)
    const businessListings = Array(8).fill({
        name: "Lorem Ipsum",
        rating: 4.5,
        description: "Lorem Ipsum is simply dummy text",
        address: "Lorem Ipsum is simply dummy text",
        distance: "2.5 km",
        additionalInfo: "Lorem Ipsum is simply dummy text",
    })

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb Navigation */}
            <div className="bg-white border-b">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <nav className="flex flex-wrap items-center space-x-2 text-sm text-gray-600">
                        <span className="hover:text-gray-900 cursor-pointer">Home</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="hover:text-gray-900 cursor-pointer">Zambia</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="hover:text-gray-900 cursor-pointer">Lusaka</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 font-medium">Tyre King</span>
                    </nav>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-white border-b">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-wrap gap-3">
                        <Button variant="outline" className="bg-secondary text-gray-500 p-2">
                            <span className="bg-primary text-white rounded-sm w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">
                                2
                            </span>
                            Filters
                        </Button>

                        <DropdownMenu
                            open={isConditionDropdownOpen}
                            onOpenChange={setIsConditionDropdownOpen}
                        >
                            <DropdownMenuTrigger asChild>
                                <Button
                                    onClick={() => setIsConditionDropdownOpen(prev => !prev)}
                                    variant="ghost"
                                    className="bg-primary text-white hover:bg-primary hover:text-white px-4 py-2 text-sm font-medium flex items-center gap-1"
                                >
                                    Condition
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                align="start"
                                className="bg-white shadow-md rounded-md p-1 min-w-[220px] z-[10000]"
                            >
                                {[
                                    "New",
                                    "Used",
                                    "Refurbished",
                                    "For parts or not working",
                                ].map(option => (
                                    <DropdownMenuItem
                                        key={option}
                                        onSelect={e => {
                                            e.preventDefault(); // ✅ keep dropdown open
                                            setCondition(prev =>
                                                prev.includes(option)
                                                    ? prev.filter(item => item !== option)
                                                    : [...prev, option]
                                            );
                                        }}
                                        className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-gray-700 !border-none"
                                    >
                                        <Checkbox checked={condition.includes(option)} />
                                        {option}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>


                        {
                            condition?.map((item, index) => (
                                <div className="flex items-center  px-3 py-1 rounded bg-secondary text-gray-500">
                                    <div className="p-1 bg-primary mr-2 rounded-sm cursor-pointer" onClick={() => setCondition(condition.filter((sCondition) => sCondition !== item))}>
                                        <X className="w-3 h-3  text-white" />
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))
                        }

                        <Button variant="ghost" className="bg-secondary text-gray-500 hover:text-gray-500 hover:bg-secondary">
                            Pickup and Drop
                        </Button>

                        <Button variant="ghost" className="bg-secondary text-gray-500 hover:text-gray-500 hover:bg-secondary">
                            Lorem Ipsum
                        </Button>

                        <Button variant="ghost" className="bg-secondary text-gray-500 hover:text-gray-500 hover:bg-secondary">
                            Lorem Ipsum
                        </Button>

                        <Button variant="ghost" className="bg-secondary text-gray-500 hover:text-gray-500 hover:bg-secondary">
                            Lorem Ipsum
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Tyre King, Lusaka</h1>

                {/* Business Listings Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
                    {businessListings.map((business, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                            <div className="relative">
                                <Image
                                    src={carImg}
                                    alt="Southern Tyre Mart building"
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-contain rounded-t-lg pt-4 lg:pt-6"
                                />
                            </div>

                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{business.name}</h3>
                                    <div className="flex items-center">
                                        <Star className="w-4 h-4 fill-red-500 text-red-500 mr-1" />
                                        <span className="text-sm font-medium">{business.rating}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 mb-3">{business.description}</p>

                                <div className="flex items-start mb-2">
                                    <div className="bg-primary rounded-sm p-1 mr-2 mt-0.5 flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-600">{business.address}</p>
                                        <p className="text-xs font-medium text-gray-900 mt-1">{business.distance}</p>
                                    </div>
                                </div>

                                <p className="text-xs text-primary">{business.additionalInfo}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* End of Results */}
                <div className="text-center py-6">
                    <p className="text-gray-500 text-sm">End of search results</p>
                </div>
            </div>
        </div>

    )
}

