"use client";

import Image from "next/image";
import { useState } from "react";

import RepairsIcon from "@/assets/images/Engineering.png";
import InsuranceIcon from "@/assets/images/Group 971.svg";
import Compliance from "@/assets/images/Vector.jpg";
import TabFinance from "./tab-finance";
import TabCompliance from "./tabCompliance";
import TabInsurance from "./tabInsurance";
import TabRepairs from "./tabRepairs";

import Link from "next/link";
import TabTransport from "./tab-transport";

export default function  Tabs({activeTab, setActiveTab}) {

  return (
    <div>
      <div className="w-full  mx-auto px-4 py-8">
        {/* Tab Menu */}
        <div className="overflow-x-scroll overflow-y-visible scrollbar-hide">
          <div className="flex border-[#d7d7d7] relative pb-[30px] m-auto lg:gap-5 justify-between w-max">
            <div className="absolute bottom-3  left-0 w-full h-0.5 bg-gray/50 z-[10]"></div>
            <div
              onClick={() => setActiveTab("Repairs")}
              className={`bg-transparent z-[10] px-2 py-2 -mb-px text-sm font-medium text-center
            transition-all cursor-pointer duration-300 ${activeTab === "Repairs"
                  ? "border-[#CA2026]  transition-all  duration-300 text-[#CA2026] relative after:border-b after:transition-all after:duration-300 after:h-2 after:w-full after:bg-red-500 after:-bottom-5 after:z-10 after:absolute after:left-0 after:rounded-3xl"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
            >
              <Image
                src={RepairsIcon}
                quality={100}
                className="mb-4 m-auto"
                alt="Repairs Icon"
              ></Image>
              <span>Repairs</span>
            </div>
            <div
              onClick={() => setActiveTab("features")}
              className={`px-4 py-2 -mb-px text-sm font-medium transition-all cursor-pointer duration-300 ${activeTab === "features"
                ? " border-[#CA2026]  text-[#CA2026] relative after:border-b after:transition after:duration-300 after:h-2 after:w-full after:bg-red-500 after:-bottom-5 after:z-10 after:absolute after:left-0 after:rounded-3xl "
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
            >
              <Image
                src={InsuranceIcon}
                quality={100}
                className="mb-4 m-auto"
                alt="Insurance Icon"
              ></Image>
              <span> Insurance</span>
            </div>
            <div
              onClick={() => setActiveTab("Compliance")}
              className={`px-4 py-2 -mb-px cursor-pointer text-sm font-medium transition-all ${activeTab === "Compliance"
                ? "border-[#CA2026]  text-[#CA2026] relative after:border-b after:transition after:duration-300 after:h-2 after:w-full after:bg-red-500 after:-bottom-5 after:z-10 after:absolute after:left-0 after:rounded-3xl  "
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
            >
              <Image src={Compliance} quality={100} className="mb-4 m-auto" alt="Compliance Icon"></Image>

              <span>Compliance</span>
            </div>

            <div
              onClick={() => setActiveTab("pricing")}
              className={`px-4 py-2 -mb-px cursor-pointer text-sm font-medium transition-all ${activeTab === "pricing"
                ? "border-[#CA2026]  text-[#CA2026] relative after:border-b after:transition after:duration-300 after:h-2 after:w-full after:bg-red-500 after:-bottom-5 after:z-10 after:absolute after:left-0 after:rounded-3xl  "
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
            >
              <Image
                src={InsuranceIcon}
                quality={100}
                className="mb-4 m-auto"
                alt="Transport Icon"
              ></Image>

              <span>Transport</span>
            </div>

            <div
              onClick={() => setActiveTab("Finance")}
              className={`px-4 py-2 -mb-px cursor-pointer text-sm font-medium transition-all ${activeTab === "Finance"
                ? "border-[#CA2026]  text-[#CA2026] relative after:border-b after:transition after:duration-300 after:h-2 after:w-full after:bg-red-500 after:-bottom-5 after:z-10 after:absolute after:left-0 after:rounded-3xl  "
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
            >
              <Image
                src={InsuranceIcon}
                quality={100}
                className="mb-4 m-auto"
                alt="Finance Icon"
              ></Image>

              <span>Finance</span>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6 text-gray-700 text-base transition-all duration-300">
          {activeTab === "Repairs" && <TabRepairs></TabRepairs>}
          {activeTab === "features" && <TabInsurance></TabInsurance>}
          {activeTab === "Compliance" && <TabCompliance></TabCompliance>}
          {activeTab === "pricing" && <TabTransport />}
          {activeTab === "Finance" && <TabFinance />}
        </div>
      </div>

      {
        activeTab === "features" && <div className=" px-6 py-3">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <span>Reporting an incident?</span>
              <Link href={"/claim?step=2"} className="text-gray-800 underline hover:text-primary transition-colors">click here</Link>
            </div>
            <div className="flex items-center gap-1">
              <span>Submitting a claim?</span>
              <Link href={"/claim?step=1"} className="text-gray-800 underline hover:text-primary transition-colors">click here</Link>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
