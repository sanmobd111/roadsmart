"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { MdMyLocation } from "react-icons/md";

export default function BannerInputs({ defaultPath, serviceInputPlaceholder, popularServices = [], selectedService, setSelectedService }) {
    const [searchValue, setSearchValue] = useState("");
    const [locationValue, setLocationValue] = useState("");
    const [path, setPath] = useState("");
    const [showServices, setShowServices] = useState(false);
    const [showLocations, setShowLocations] = useState(false);
    const router = useRouter();
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(path, locationValue);
        if (path && locationValue) {
            router.push(path);
        }
    };

    const recentLocations = ["22 Manchinchi Road, Lusaka, ZM"];
    return (
        <div className="max-w-4xl mx-auto">
            <form
                onSubmit={handelSubmit}
                className="flex flex-col md:flex-row  sm:border-[1px] sm:border-[#dadada] sm:rounded-[10px]"
            >
                {/* Search Input */}
                <div className="relative flex-1 sm:border-r">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500 w-5 h-5" />
                        <Input
                            type="text"
                            placeholder={serviceInputPlaceholder}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={() => setShowServices(true)}
                            onBlur={() => setTimeout(() => setShowServices(false), 200)}
                            className="pl-10 h-12 bg-white border mb-2 sm:mb-0  sm:border-0 focus-visible:outline-0 focus-visible:border-0 focus-visible:ring-0"
                        />
                    </div>

                    {/* Popular Services Dropdown */}
                    {showServices && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 text-center">
                            <div className="py-4 px-10">
                                <div className="space-y-2 ">
                                    {popularServices.map((service, index) => (
                                        <button
                                            href={service.path}
                                            key={index}
                                            className={cn("block w-full px-3 py-2 text-gray-400 hover:text-primary rounded transition-colors", index !== popularServices.length - 1 && "border-b border-gray-200")}
                                            onClick={() => {
                                                if (service.isRedirect) {
                                                    router.push(service.path);
                                                } else {
                                                    setSearchValue(service.name);
                                                    setPath(service.path);
                                                    setShowServices(false);
                                                }
                                            }}
                                        >
                                            {service.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Location Input */}
                <div className="relative md:w-60 lg:w-68">
                    <div className="relative">
                        <FaLocationDot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500 w-5 h-5" />
                        <Input
                            type="text"
                            placeholder="Location"
                            value={locationValue}
                            onChange={(e) => setLocationValue(e.target.value)}
                            onFocus={() => setShowLocations(true)}
                            onBlur={() => setTimeout(() => setShowLocations(false), 200)}
                            className="pl-10 h-12 mb-2 sm:mb-0 bg-white border  md:border-0 focus-visible:outline-0 focus-visible:border-0 focus-visible:ring-0"
                        />
                    </div>

                    {/* Location Dropdown */}
                    {showLocations && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            <div className="p-4">
                                <button
                                    className=" w-full text-left py-2 text-red-500 rounded transition-colors mb-3"
                                    onClick={() => {
                                        setLocationValue("Current Location");
                                        setShowLocations(false);
                                    }}
                                >
                                    <div className="flex items-center gap-3 leading-0">
                                        <MdMyLocation className="w-4 h-4" />
                                        <p>Detect Current location</p>
                                    </div>
                                    <span className="text-[5px] ml-7 text-gray-500 h-fit ">Using Gps</span>
                                </button>

                                <div className="border-t pt-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <GoClockFill className="w-4 h-4 text-red-500" />
                                        <span className="text-red-500 font-medium">
                                            Recent Locations
                                        </span>
                                    </div>
                                    {recentLocations.map((location, index) => (
                                        <button
                                            key={index}
                                            className="block w-full text-left px-3 py-2 text-gray-400 rounded transition-colors text-xs cursor-pointer"
                                            onClick={() => {
                                                setLocationValue(location);
                                                setShowLocations(false);
                                            }}
                                        >
                                            <div className="flex items-center gap-2">
                                                <FaLocationArrow className="text-primary" />
                                                {location}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Request Button */}
                <div className=" md:w-auto mx-auto w-fit block my-4 md:my-0">
                    <Button
                        // onClick={handleRequest}
                        type="submit"
                        className="h-12 px-18 bg-primary hover:bg-primary text-white rounded-[8px] cursor-pointer"
                    >
                        Request
                    </Button>
                </div>
            </form>
        </div>
    )
}
