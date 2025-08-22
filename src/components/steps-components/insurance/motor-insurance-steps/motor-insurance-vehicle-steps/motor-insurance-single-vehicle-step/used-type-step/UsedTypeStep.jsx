"use client";

import BackButton from "@/components/shared/back-button/BackButton";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import { cn } from "@/lib/utils";
import { useState } from "react";

const options = [
  { id: 1, name: "Personal Use", value: "Personal Use" },
  { id: 2, name: "Commercial Use", value: "Commercial Use" },
  { id: 3, name: "Special/Other Use", value: "Special/Other Use" },
];

export default function UsedTypeStep({ vehicle, handleNext, handlePrev }) {
  const [usageType, setUsageType] = useState(vehicle?.usageType || "");

  const handleSubmit = () => {
    vehicle.usageType = usageType;
    handleNext();
  };
  return (
    <div className="max-w-2xl mx-auto pb-10">
      <h1
        type="button"
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-secondary mb-6 text-center lg:text-nowrap relative pl-10 lg:pl-0"
      >
        <BackButton
          className={"lg:-translate-x-[10vw] top-0"}
          onclick={handlePrev}
        />
        What is the vehicle used for?
      </h1>
      <div className="space-y-4 lg:w-[90%] mx-auto">
        {options.map((option, index) => (
          <div
            className={cn(
              "flex items-center justify-center font-sans py-4 cursor-pointer rounded-lg border border-gray-400",
              usageType === option?.value && " border-primary"
            )}
            onClick={() => setUsageType(option.value)}
            key={index}
          >
            {option.name}
          </div>
        ))}
        <div className="flex justify-center gap-2 mt-10">
          <PrimaryBtn onClick={handleSubmit} text={"Next"} />
        </div>
      </div>
    </div>
  );
}
