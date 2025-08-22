"use client";

import ProgressIndicator from "@/components/progressIndicator/ProgressIndicator";
import BackButton from "@/components/shared/back-button/BackButton";
import Container from "@/components/shared/container/Container";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const quarterOptions = [
  { id: "1", label: "1 Quarter", value: "1" },
  { id: "2", label: "2 Quarters", value: "2" },
  { id: "3", label: "3 Quarters", value: "3" },
  { id: "4", label: "4 Quarters", value: "4" },
];

export default function QuatreStep({ handleNext, handlePrev, setData, data }) {
  const [currentStep, setCurrentStep] = useState(1);

  const currentVehicle = data[currentStep - 1];
  const [quatre, setQuatre] = useState(currentVehicle?.quatre || "");

  const handleSubmit = () => {
    data[currentStep - 1] = {
      ...currentVehicle,
      quatre,
    };
    setQuatre("");
    if (currentStep === data.length) {
      setData({ vehicles: data });
      handleNext();
      return;
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      handlePrev();
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  //   set default value of quatre
  useEffect(() => {
    setQuatre(currentVehicle?.quatre || "");
  }, [currentStep, setCurrentStep]);

  return (
    <Container className={"relative"}>
      <div className="w-full lg:w-fit bg-white rounded-lg relative">
        <ProgressIndicator
          className="mt-10 w-[90%]"
          currentStep={currentStep}
          vehicles={data}
        />

        {/* Heading */}
        <h2 className="text-xl lg:text-3xl font-semibold text-gray-secondary mb-6 text-center relative pl-10">
          <BackButton
            className={"lg:-translate-x-[10vw] top-0"}
            onclick={handleBack}
          />
          How many quarters would you like?
        </h2>

        {/* Quarter Selection */}
        <div className="space-y-3 mb-8 md:w-[80%] mx-auto">
          {quarterOptions.map((option) => (
            <label
              key={option.id}
              onClick={() => setQuatre(option.value)}
              className={`flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                quatre === option.value ? "border-red-500" : ""
              }`}
            >
              <span className="ml-3 text-gray-700 font-medium text-sm lg:text-base">
                {option.label}
              </span>
            </label>
          ))}

          {/* Next Button */}
          <div className="flex justify-center mt-10">
            <Button
              onClick={handleSubmit}
              disabled={!quatre}
              className="bg-primary hover:bg-primary text-white px-6 py-3 h-12 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 min-w-[150px]"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
