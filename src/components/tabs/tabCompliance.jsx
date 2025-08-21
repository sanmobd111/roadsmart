"use client";

import BannerInputs from "../Home/BannerInputs";
export default function TabCompliance() {
  const popularServices = [
    { name: "Fitness Renewal ", path: "/fitness-renewal/addvehicle" },
    { name: "Road Tax Renewal", path: "/road-tax/addvehicle" },
    { name: "Change of Ownership", path: "/compliance/addvehicle" },
    { name: "Vehicle Registration", path: "/compliance/addvehicle" },
    { name: "Change of Engine", path: "/compliance/addvehicle" },
    { name: "Change of Color", path: "/compliance/addvehicle" },
    { name: "Popular Services", path: "/compliance/addvehicle" },
    { name: "View All Compliance Services", path: "/compliance", isRedirect: true },
  ];
  return (
    <div>
      <div className="text-center py-9">
        <h3 className="md:text-[45px] text-[24px] font-extrabold text-black">
          Discover ways to be road compliant
        </h3>
      </div>
      <BannerInputs defaultPath={"/compliance"} serviceInputPlaceholder="Search Compliance services" popularServices={popularServices} />
    </div>
  );
}
