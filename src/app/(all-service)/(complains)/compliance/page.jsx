"use client";

import { useState } from "react";
// import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import ServiceBanner from "@/components/all-service/service-banner/ServiceBanner";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Shield,
  Truck,
  Wind,
  Wrench,
  Zap
} from "lucide-react";
import { useRouter } from "next/navigation";

const serviceCategories = [
  {
    id: "registration",
    name: "registration",
    icon: Wrench,
    color: "text-red-500",
    services: [
      { name: "First Registration ", featured: true, url: "/compliance-service" },
      { name: "Personalised Registration ", url: "/compliance-service" },
      { name: "Vehicle De-registration ", url: "/compliance-service" },
      { name: "Change Ownership   ", url: "/compliance-service" },
      { name: "Change of Absolute Owner", url: "/compliance-service" },
      { name: "Vehicle Re-registration", url: "/compliance-service" },
      { name: "Registration of Ex-Registration ", url: "/compliance-service" },
      { name: "Registration of Ex-Red Book", url: "/compliance-service" },
    ],
  },
  {
    id: "Change of Particulars",
    name: "Change of Particulars",
    icon: Wind,
    color: "text-blue-500",
    services: [
      { name: "Change of Color", url: "/compliance-service" },
      { name: "Change of Seating Capacity", url: "/compliance-service" },
      { name: "Change of Engine ", url: "/compliance-service" },
    ],
  },
  {
    id: "Renewals",
    name: "Renewals",
    icon: Zap,
    color: "text-yellow-500",
    services: [
      { name: "Road Tax Renewal ", url: "road-tax" },
      { name: "Fitness Renewal ", url: "fitness-renewal" },
      { name: "Drivers license Renewal", url: "/compliance-service" },
    ],
  },
  {
    id: "Replacements",
    name: "Replacements",
    icon: Truck,
    color: "text-gray-600",
    services: [
      { name: "Whitebook Replacement ", url: "/compliance-service" },
      { name: "Drivers License Replacement", url: "/compliance-service" },
    ],
  },
  {
    id: "Clearance",
    name: "Clearance",
    icon: Shield,
    color: "text-cyan-500",
    services: [
      { name: "Cross Boarder Clearance ", url: "/compliance-service" },
      { name: "Ex-Red Book Clearance ", url: "/compliance-service" },
      { name: "Ex-GRZ Book Clearance ", url: "/compliance-service" },
    ],
  },
];

export default function RoadSmartServices() {
  const [openCategories, setOpenCategories] = useState([""]);
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();
  const toggleCategory = (categoryId) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const routerHandlerSubmit = (url) => {

    router.push(url)
  }



  return (
    <div className=" bg-white container mx-auto max-w-[1600px] px-4 md:px-6">
      <ServiceBanner text={"Which compliance service do you need?"} />
      {/* Search Bar */}
      <div className="my-6 lg:mb-10 lg:mt-14 mb-10 mt-14 px-4 lg:px-0">
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

      {/* Service Categories */}
      <div className=" px-4">
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
                  <div className="flex items-center justify-between py-5  border-gray-300 border-b transition-colors">
                    <div className="flex items-center space-x-3">
                      <IconComponent className={`w-5 h-5 ${category.color}`} />
                      <span className="font-medium text-gray-900">
                        {category.name}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="mt-10 mb-4  border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                      {category.services.map((service, index) => (

                        <button
                          onClick={() => { routerHandlerSubmit(service.url) }}
                          key={index}

                          variant={service.featured ? "default" : "outline"}
                          className={`justify-center border bg-white cursor-pointer text-gray-700 hover:bg-white rounded-[10px] text-center h-auto py-3 px-6 ${service.featured
                            ? "bg-primary hover:bg-primary"
                            : "bg-white   border-gray-300"
                            }`}
                        >

                          {service.name}

                        </button>
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
