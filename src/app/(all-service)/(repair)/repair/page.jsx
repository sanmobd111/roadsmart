"use client";

import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";

import {
  Search,
  ChevronDown,
  ChevronUp,
  Wrench,
  Wind,
  Zap,
  Truck,
  Shield,
  Car,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import ServiceBanner from "@/components/all-service/service-banner/ServiceBanner";

const serviceCategories = [
  {
    id: "general",
    name: "General",
    icon: Wrench,
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
    ],
  },
  {
    id: "aircon",
    name: "Aircon",
    icon: Wind,
    color: "text-blue-500",
    services: [{ name: "Aircon service" }, { name: "Re-gassing" }],
  },
  {
    id: "electrical",
    name: "Electrical",
    icon: Zap,
    color: "text-yellow-500",
    services: [
      { name: "Electrical diagnosis" },
      { name: "Electrical diagnosis" },
    ],
  },
  {
    id: "exhaust",
    name: "Exhaust",
    icon: Truck,
    color: "text-gray-600",
    services: [{ name: "Exhaust system repair" }],
  },
  {
    id: "glass",
    name: "Glass & Windshield",
    icon: Shield,
    color: "text-cyan-500",
    services: [{ name: "Windscreen replacement" }],
  },
  {
    id: "bodywork",
    name: "Body Work",
    icon: Car,
    color: "text-purple-500",
    services: [{ name: "Full body spay" }, { name: "Fender repair" }],
  },
  {
    id: "wheels",
    name: "Wheels & Tires",
    icon: Settings,
    color: "text-orange-500",
    services: [{ name: "Tire replacement" }],
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

      {/* Service Categories */}
      <div className="container mx-auto">
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
                  <div className="flex items-center justify-between py-3  border-gray-300 border-b transition-colors">
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
                        <Link href={"/repair-service"} key={index} className="w-full block">
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
