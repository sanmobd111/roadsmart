// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import { useRouter } from "next/navigation";

// import bgImageS from "@/assets/images/soft-evening.png";

// import {
//   Search,
//   FileText,
//   Settings,
//   Shield,
//   Wrench,
//   Zap,
//   Truck,
//   DollarSign,
//   Sparkles,
//   ChevronRight,
// } from "lucide-react";

// export default function RoadSmartServicesPage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const router = useRouter();
//   const popularServices = [
//     { name: "Change of ownership", icon: FileText },
//     { name: "Registration", icon: FileText },
//     { name: "Tune up", icon: Settings },
//     { name: "Body repairs", icon: Wrench },
//     { name: "Motor Insurance", icon: Shield },
//     { name: "Electrical diagnosis", icon: Zap, isRed: true },
//   ];

//   const serviceCategories = [
//     { name: "Repairs", icon: Wrench, isRed: true, url: "/repair" },
//     { name: "Insurance", icon: Shield, url: "/insurance" },
//     { name: "Compliance", icon: FileText, url: "/compliance" },
//     { name: "Towing", icon: Truck, url: "/towing" },
//     { name: "Finance", icon: DollarSign, url: "/finance" },
//     { name: "Cleaning", icon: Sparkles, url: "/cleaning" },
//   ];

//   const handelRoute = (href) => {
//     router.push(href);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section with Car Background */}
//       <div className="relative h-80 overflow-hidden rounded-2xl container mt-10 mx-auto max-w-[1600px]">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${bgImageS.src})`,
//             backgroundRepeat: "no-repeat",
//           }}
//         ></div>
//         <div className="relative h-full flex items-center justify-center">
//           <h1 className="text-5xl font-bold text-white">Select a Service</h1>
//         </div>
//         <Button className="absolute top-6 right-6 bg-black bg-opacity-40 hover:bg-opacity-60 text-white border-0">
//           Need assistance
//         </Button>
//       </div>

//       {/* Search Bar */}
//       <div className="container mx-auto max-w-[1600px] px-4 relative mb-16 mt-16">
//         <Card className="rounded-0 py-3 max-w-3xl shadow-none border-[#A7A7A7]  rounded-[10px]">
//           <CardContent className="rounded-0 py-0">
//             <div className="relative">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
//               <Input
//                 type="text"
//                 placeholder="Search services or describe problem"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-12 pr-4 outline-0 focus-visible:outline-0 focus-visible:shadow-none focus-visible:ring-0 shadow-none w-full border-0 focus:ring-0 text-gray-700 placeholder-gray-500 text-base"
//               />
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto max-w-[1600px] px-4  sm:px-6 lg:px-8">
//         {/* Popular Services */}
//         <section className="mb-16">
//           <h2 className="text-2xl border-b pb-5 font-semibold text-gray-900 mb-8">
//             Popular services
//           </h2>
//           <div className="grid grid-cols-2 gap-6">
//             {popularServices.map((service, index) => {
//               const IconComponent = service.icon;
//               return (
//                 <div
//                   key={index}
//                   className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 px-4 py-4 hover:shadow-lg  rounded-[10px]"
//                 >
//                   <IconComponent
//                     className={`h-5 w-5 ${
//                       service.isRed ? "text-primary" : "text-gray-500"
//                     }`}
//                   />
//                   <span
//                     className={`${
//                       service.isRed ? "text-primary" : "text-gray-700"
//                     }`}
//                   >
//                     {service.name}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* Categories */}
//         <section className="mb-16">
//           <h2 className="text-2xl border-b pb-5 font-semibold text-gray-900 mb-8">
//             Categories
//           </h2>
//           <div className="grid grid-cols-3 gap-4">
//             {serviceCategories.map((category, index) => {
//               const IconComponent = category.icon;
//               return (
//                 <div
//                   onClick={() => handelRoute(category.url)}
//                   key={index}
//                   className="cursor-pointer px-3 py-4 shadow-none rounded-[10px] hover:shadow-md transition-shadow border border-gray-200"
//                 >
//                   <div className="p-0 flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <IconComponent
//                         className={`h-5 w-5 ${
//                           category.isRed ? "text-primary" : "text-gray-500"
//                         }`}
//                       />
//                       <span className="text-gray-700 font-medium">
//                         {category.name}
//                       </span>
//                     </div>
//                     <ChevronRight className="h-4 w-4 text-gray-400" />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

import bgImageS from "@/assets/images/soft-evening.png";

import {
  Search,
  FileText,
  Settings,
  Shield,
  Wrench,
  Zap,
  Truck,
  DollarSign,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function RoadSmartServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isPopularServicesOpen, setIsPopularServicesOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const router = useRouter();

  const popularServices = [
    { name: "Change of ownership", icon: FileText, path: "#" },
    { name: "Registration", icon: FileText, path: "#" },
    { name: "Tune up", icon: Settings, path: "#" },
    { name: "Body repairs", icon: Wrench, path: "/repair/location" },
    { name: "Motor Insurance", icon: Shield, path: "/motor-insurance/location" },
    { name: "Electrical diagnosis", icon: Zap, isRed: true, path: "/repair/location" },
  ];

  const serviceCategories = [
    { name: "Repairs", icon: Wrench, isRed: true, url: "/repair" },
    { name: "Insurance", icon: Shield, url: "/insurance" },
    { name: "Compliance", icon: FileText, url: "/compliance" },
    { name: "Roadside Assistance", icon: Truck, url: "/towing" },
    { name: "Finance", icon: DollarSign, url: "/finance" },
    { name: "Car Care & Maintenance", icon: Sparkles, url: "/cleaning" },
  ];

  const handelRoute = (href) => {
    console.log(href)
    router.push(href);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-60 sm:h-80 overflow-hidden rounded-2xl container mt-6 sm:mt-10 mx-auto max-w-[1600px] px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImageS.src})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">Select a Service</h1>
        </div>
        <Button className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-black bg-opacity-40 hover:bg-opacity-60 text-white border-0">
          Need assistance
        </Button>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto max-w-[1600px] px-4 mt-10 mb-14">
        <div className="relative w-fit">
          <Card className="rounded-[10px] py-3 lg:w-3xl shadow-none border-[#A7A7A7]">
            <CardContent className="py-0 shadow-none">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
                <Input
                  onFocus={() => setIsPopularServicesOpen(true)}
                  onBlur={() => setIsPopularServicesOpen(false)}
                  type="text"
                  placeholder="Search services or describe problem"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    if (popularServices.filter((service) => service.name.toLowerCase().includes(e.target.value.toLowerCase())).length === 0) {
                      setIsPopularServicesOpen(false)
                    } else {
                      setIsPopularServicesOpen(true)
                    }
                  }}
                  className="pl-12 pr-4 w-full  text-gray-700 placeholder-gray-500 text-base focus:!outline-none !ring-0 !border-none shadow-none"
                />
              </div>
            </CardContent>
          </Card>
          {
            isPopularServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white p-6 w-full h-[50vh] md:h-auto overflow-y-auto lg:px-20 md:py-10 custom-shadow rounded-xl scrollbar-hide z-50">
                <h3 className="flex items-center space-x-3 cursor-pointer  px-4 py-4 text-xl">Popular Services</h3>
                <div>
                  {searchQuery == "" ?
                    popularServices.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <div
                          // onClick={() =>setCurrentCategory(service.name)}
                          key={index}
                          className="flex items-center space-x-3 cursor-pointer  px-4 py-4 rounded-[10px] group"
                        >
                          <IconComponent
                            className={`h-5 w-5 group-hover:!text-primary`}
                          />
                          <span
                            className={`group-hover:!text-primary`}
                          >
                            {service.name}
                          </span>
                        </div>
                      );
                    }) : popularServices.filter((service) => service.name.toLowerCase().includes(searchQuery.toLowerCase())).map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <div
                          // onClick={() =>setCurrentCategory(service.name)}
                          key={index}
                          className="flex items-center space-x-3 cursor-pointer  px-4 py-4 rounded-[10px] group"
                        >
                          <IconComponent
                            className={`h-5 w-5 group-hover:!text-primary`}
                          />
                          <span
                            className={`group-hover:!text-primary`}
                          >
                            {service.name}
                          </span>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">

        {/* Categories */}
        <section className="mb-14">
          <h2 className="text-xl sm:text-2xl border-b pb-4 font-semibold text-gray-900 mb-6 sm:mb-8">
            Browse category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  onClick={() => handelRoute(category.url)}
                  key={index}
                  className="cursor-pointer px-3 py-4 shadow-none rounded-[10px] hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <IconComponent
                        className={`h-5 w-5 ${category.isRed ? "text-primary" : "text-gray-500"
                          }`}
                      />
                      <span className="text-gray-700 text-sm sm:text-base font-medium">
                        {category.name}
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
