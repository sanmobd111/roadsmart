"use client";

import BannerInputs from "../Home/BannerInputs";

export default function TabInsurance() {
  const popularServices = [
    { name: "Motor Insurance", path: "/insurance-motor/addvehicle" },
    { name: "Plant Insurance", path: "/insurance-plants/addvehicle" },
    { name: "Marine Insurance", path: "/consignment-details" },
    { name: "See All Insurance Services", path: "/insurance", isRedirect: true },
  ];

  return (
    <div>
      <div className="text-center py-9">
        <h3 className="md:text-[45px] text-[24px] font-extrabold text-black">
          Order insurance anywhere you are
        </h3>
      </div>
      <BannerInputs defaultPath={"/insurance"} serviceInputPlaceholder="Search Insurance services" popularServices={popularServices} />
    </div>
  );
}
