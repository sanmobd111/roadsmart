"use client";

import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import bgImageS from "@/assets/images/Car.png";

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

const serviceCategories = [
  {
    id: "insure",
    name: "Insure",
    icon: Wrench,
    color: "text-red-500",
    services: [
      { name: "Motor Insurance", featured: true, path: "/insurance-motor/location" },
      { name: "Plant Insurance", path: "/insurance-plants/location" },
      { name: "Marine Insurance ", path: "/consignment-details" },
    ],
  },
  {
    id: "claim",
    name: "Claim",
    icon: Wind,
    color: "text-blue-500",
    services: [{ name: "Report Incident", path: "/claim?step=2" }, { name: "Submit Claim", path: "/claim?step=1" }],
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
    <div className=" bg-white px-4 md:px-6">
      {/* Hero Section with Car Background */}
      <div className="relative h-80 overflow-hidden rounded-2xl container mt-10  mx-auto max-w-[1600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImageS.src})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl bg-[#eaeaea54]  px-8 py-3 rounded-2xl font-bold text-white">
            Which Insurance service do you need?
          </h1>
        </div>
        <Button className="absolute top-6 right-6 bg-black bg-opacity-40 hover:bg-opacity-60 text-white border-0">
          Need assistance
        </Button>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto max-w-[1600px] px-4 relative my-6 lg:mb-10 lg:mt-14 ">
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
      <div className="container mx-auto max-w-[1600px] px-4 mb-24">
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
                      <IconComponent
                        className={`w-10 rounded-lg h-10 bg-[#FCF2F2] p-3 ${category.color}`}
                      />
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
                      {category.services.map((service, index) => (
                        <Link href={service.path} key={index} className="w-full block">
                          <Button
                            key={index}
                            variant={service.featured ? "default" : "outline"}
                            className={`w-full justify-center border bg-white hover:bg-white rounded-[10px] text-left h-auto py-4 px-6 text-gray-700 ${service.featured
                              ? ""
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
