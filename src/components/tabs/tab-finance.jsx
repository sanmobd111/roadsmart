"use client";

import BannerInputs from "../Home/BannerInputs";

export default function TabFinance() {
  const popularServices = [
    { name: "Auto finance", path: "/apply-finance" },
    { name: "TRepair finance ", path: "/apply-finance" },
    { name: "View All Finance Services", path: "/finance", isRedirect: true },
  ];

  return (
    <div>
      <div className="text-center py-9">
        <h3 className="md:text-[45px] text-[24px] font-extrabold text-black">
          Get auto finance Today
        </h3>
      </div>
      <BannerInputs defaultPath={"/finance"} serviceInputPlaceholder="Search Finance services" popularServices={popularServices} />
    </div>
  );
}
