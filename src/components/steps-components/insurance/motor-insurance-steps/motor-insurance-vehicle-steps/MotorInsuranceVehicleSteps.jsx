import { useState } from "react";
import MotorInsuranceSingleVehicleSteps from "./motor-insurance-single-vehicle-step/MotorInsuranceSingleVehicleStep";

export default function MotorInsuranceVehicleSteps({
  vehicles,
  currentIndx,
  handleNext,
  handlePrev,
}) {
  return (
    <div>
      {vehicles?.map((vehicle, index) => (
        <div className={`${index === currentIndx ? "block" : "hidden"}`}>
          <MotorInsuranceSingleVehicleSteps
            key={index}
            vehicle={vehicle}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </div>
      ))}
    </div>
  );
}
