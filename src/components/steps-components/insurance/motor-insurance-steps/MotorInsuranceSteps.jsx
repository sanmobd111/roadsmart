import ProgressIndicator from "@/components/progressIndicator/ProgressIndicator";
import { useState } from "react";
import MotorInsuranceDriverSteps from "./motor-insurance-driver-steps/MotorInsuranceDriverSteps";
import MotorInsuranceVehicleSteps from "./motor-insurance-vehicle-steps/MotorInsuranceVehicleSteps";

export default function MotorInsuranceSteps({
  vehicles,
  drivers,
  setData,
  handleNext,
  handlePrev,
}) {
  const [progressStep, setProgressStep] = useState(1);

  const [currentStep, setCurrentStep] = useState("vehicle-steps");

  const handleNextStep = () => {
    if (progressStep === vehicles.length + drivers.length) {
      handleNext();
      return;
    } else if (progressStep === vehicles.length) {
      setCurrentStep("driver-steps");
    }
    setProgressStep(progressStep + 1);
  };

  const handlePrevStep = () => {
    if (progressStep === 1) {
      handlePrev();
      return;
    } else if (progressStep === vehicles.length + 1) {
      setCurrentStep("vehicle-steps");
    }
    setProgressStep(progressStep - 1);
  };

  return (
    <div>
      <ProgressIndicator
        className={"mt-10 w-[90%]"}
        vehicles={vehicles}
        currentStep={progressStep}
        drivers={drivers}
      />
      {currentStep === "vehicle-steps" && (
        <MotorInsuranceVehicleSteps
          vehicles={vehicles}
          handleNext={() => handleNextStep()}
          handlePrev={() => handlePrevStep()}
          setData={setData}
          currentIndx={progressStep - 1}
        />
      )}
      {currentStep === "driver-steps" && (
        <MotorInsuranceDriverSteps
          drivers={drivers}
          handleNext={handleNextStep}
          handlePrev={() => {
            setCurrentStep("vehicle-steps");
          }}
          setData={setData}
          currentIndx={progressStep - vehicles.length - 1}
        />
      )}
    </div>
  );
}
