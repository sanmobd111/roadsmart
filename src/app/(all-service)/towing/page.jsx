"use client";

import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

import bgImageS from "@/assets/images/t.png";
import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
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
  Wind,
  Wrench
} from "lucide-react";
import { useRouter } from "next/navigation";

const serviceCategories = [
  {
    id: "Towing",
    name: "Towing",
    icon: Wrench,
    color: "text-red-500",
    services: [{ name: "Towing ", featured: true, url: "/transport" }],
  },
  {
    id: "Breadown Recovery  ",
    name: "Breadown Recovery  ",
    icon: Wind,
    color: "text-blue-500",
    services: [{ name: "Vehicle recovery ", url: "/break-down-recovery" }],
  },
];

export default function RoadSmartServices() {
  const [openCategories, setOpenCategories] = useState(["general"]);
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
    <div className="min-h-screen bg-white">
      {/* Hero Section with Car Background */}
      <div className="relative h-80 overflow-hidden rounded-2xl container mt-10 mx-auto md:max-w-[1600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImageS.src})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="md:text-5xl text-3xl text-center font-bold text-white ">
            Which Roadside assistance do you need?
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
      <div className="container mx-auto max-w-[1600px] px-4 ">
        <div className="space-y-4">
          {serviceCategories.map((category) => {
            const IconComponent = category.icon;
            const isOpen = openCategories.includes(category.id);

            return (
              <Collapsible
                key={category.id}
                open={!isOpen}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                      {category.services.map((service, index) => (
                        <Button
                          onClick={() => { routerHandlerSubmit(service.url) }}
                          key={index}
                          variant={service.featured ? "default" : "outline"}
                          className={`justify-start border bg-white hover:bg-white hover:shadow-lg rounded-[10px] text-left h-auto py-5 px-6 `}
                        >
                          {service.name}
                        </Button>
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
