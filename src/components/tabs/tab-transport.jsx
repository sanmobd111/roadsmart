"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { MdMyLocation } from "react-icons/md";


export default function TabTransport() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [showDropoffLocations, setShowDropoffLocations] = useState(false);
  const [showPickupLocations, setShowPickupLocations] = useState(false);
  const recentLocations = ["22 Manchinchi Road, Lusaka, ZM"];
  const router = useRouter();
  const handelSubmit = (e) => {
    e.preventDefault();
    router.push(`/transport?step=add-vehicle&from=${pickupLocation}&to=${dropoffLocation}`)
  };
  return (
    <div>
      <div className="text-center py-9">
        <h3 className="md:text-[45px] text-[24px] font-extrabold text-black">
          Move your vehicle from point A to <br /> point B with ease
        </h3>
      </div>
      <div className="max-w-4xl mx-auto">
        <form
          onSubmit={handelSubmit}
          className="flex flex-col md:flex-row  sm:border-[1px] sm:border-[#dadada] sm:rounded-[10px]"
        >
          {/* Search Input */}
          <div className="relative flex-1 sm:border-r">
            <div className="relative">
              {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500 w-5 h-5" /> */}
              <div className="w-4 h-4 rounded-full bg-primary absolute top-1/2 transform -translate-y-1/2 left-[33%]"></div>
              <Input
                type="text"
                placeholder={"Pickup Location"}
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                onFocus={() => setShowPickupLocations(true)}
                onBlur={() => setTimeout(() => setShowPickupLocations(false), 200)}
                className="pl-[40%] h-12 bg-white border mb-2 sm:mb-0  sm:border-0 focus-visible:outline-0 focus-visible:border-0 focus-visible:ring-0"
              />
            </div>

            {/* Location Dropdown */}
            {showPickupLocations && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="p-4">
                  <button
                    className=" w-full text-left py-2 text-red-500 rounded transition-colors mb-3"
                    onClick={() => {
                      setPickupLocation("Current Location");
                      setShowPickupLocations(false);
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
                        type={"button"}
                        key={index}
                        className="block w-full text-left px-3 py-2 text-gray-400 rounded transition-colors text-xs cursor-pointer"
                        onClick={() => {
                          setPickupLocation(location);
                          setShowPickupLocations(false);
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

          {/* Location Input */}
          <div className="relative md:w-60 lg:w-68">
            <div className="relative">
              <div className="w-4 h-4 rounded-sm bg-primary absolute top-1/2 transform -translate-y-1/2 left-[30%]"></div>
              <Input
                type="text"
                placeholder="Dropoff Location"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                onFocus={() => setShowDropoffLocations(true)}
                onBlur={() => setTimeout(() => setShowDropoffLocations(false), 200)}
                className="pl-[40%] h-12 mb-2 sm:mb-0 bg-white border  md:border-0 focus-visible:outline-0 focus-visible:border-0 focus-visible:ring-0"
              />
            </div>

            {/* Location Dropdown */}
            {showDropoffLocations && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="p-4">
                  <button
                    className=" w-full text-left py-2 text-red-500 rounded transition-colors mb-3"
                    onClick={() => {
                      setDropoffLocation("Current Location");
                      setShowDropoffLocations(false);
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
                        type={"button"}
                        key={index}
                        className="block w-full text-left px-3 py-2 text-gray-400 rounded transition-colors text-xs cursor-pointer"
                        onClick={() => {
                          setShowDropoffLocations(false);
                          setDropoffLocation(location);
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
    </div>
  );
}
