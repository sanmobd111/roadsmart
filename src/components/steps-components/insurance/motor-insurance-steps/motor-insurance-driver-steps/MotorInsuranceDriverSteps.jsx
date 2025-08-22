import MotorInsuranceSingleVehicleSteps from "../motor-insurance-vehicle-steps/motor-insurance-single-vehicle-step/MotorInsuranceSingleVehicleStep";
import MotorInsuranceSingleDriverSteps from "./motor-insurance-single-driver-step/MotorInsuranceSingleDriverStep";

export default function MotorInsuranceDriverSteps({
  drivers,
  handleNext,
  handlePrev,
  currentIndx,
}) {
  console.log(currentIndx)
  return (
    <div>
      {drivers?.map((driver, index) => (
        <div
          key={index}
          className={`${index === currentIndx ? "block" : "hidden"}`}
        >
          <MotorInsuranceSingleDriverSteps
            driver={driver}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </div>
      ))}
    </div>
  );
}
