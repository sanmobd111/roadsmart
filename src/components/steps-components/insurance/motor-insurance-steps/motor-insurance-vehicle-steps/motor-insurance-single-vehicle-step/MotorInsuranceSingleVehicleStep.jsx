import { useState } from "react";
import CoverageStep from "./coverage-step/CoverageStep";
import UsedTypeStep from "./used-type-step/UsedTypeStep";

export default function MotorInsuranceSingleVehicleSteps({
  vehicle,
  handleNext,
  handlePrev,
}) {
  const [currentStep, setCurrentStep] = useState("coverage");
  console.log(vehicle, "vehicle in single vehicle step");
  return (
    <div>
      {currentStep === "coverage" && (
        <CoverageStep
          handleNext={() => {
            setCurrentStep("used-type");
          }}
          handlePrev={() => handlePrev()}
          vehicle={vehicle}
        />
      )}
      {currentStep === "used-type" && (
        <UsedTypeStep
          handleNext={() => {
            handleNext();
          }}
          handlePrev={() => {
            setCurrentStep("coverage");
          }}
          vehicle={vehicle}
        />
      )}
    </div>
  );
}
