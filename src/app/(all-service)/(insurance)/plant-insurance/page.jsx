"use client";

import CurrencyStep from "@/components/steps-components/insurance/currency-step/CurrencyStep";
import DriverStep from "@/components/steps-components/insurance/driver-step/DriverStep";
import MotorInsuranceSteps from "@/components/steps-components/insurance/motor-insurance-steps/MotorInsuranceSteps";
import Location from "@/components/steps-components/location-step/LocationStep";
import VehicleStep from "@/components/steps-components/vehicle-step/VehicleStep";
import { addRequest } from "@/store/Feature/my-request";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

export default function page() {
  const searchParams = useSearchParams();
  const data = useRef({});
  const step = searchParams.get("step");
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(step || "location");
  const dispatch = useDispatch();

  const addData = (addedData) => {
    data.current = { ...data.current, ...addedData };
  };

  const handleAddTransportService = () => {
    dispatch(addRequest({ ...data?.current, type: "motor-insurance" }));
    router.push("/review-services");
  };

  return (
    <div>
      {currentStep === "location" && (
        <Location
          handleNext={() => setCurrentStep("add-vehicle")}
          setData={addData}
          handlePrev={() => router.back()}
          data={data?.current?.locations}
        />
      )}
      {currentStep === "add-vehicle" && (
        <VehicleStep
          data={data?.current?.allVehicles}
          setData={addData}
          handleNext={() => setCurrentStep("driver")}
          handlePrev={() => {
            setCurrentStep("location");
          }}
        />
      )}

      {currentStep === "driver" && (
        <DriverStep
          handleNext={() => setCurrentStep("currency")}
          handlePrev={() => setCurrentStep("add-vehicle")}
          setData={addData}
          data={data?.current?.allDrivers}
        />
      )}
      {currentStep === "currency" && (
        <CurrencyStep
          handleNext={() => setCurrentStep("motor-insurance-vehicle-steps")}
          handlePrev={() => setCurrentStep("driver")}
          setData={addData}
          data={data?.current?.currency}
        />
      )}

      {currentStep === "motor-insurance-vehicle-steps" && (
        <MotorInsuranceSteps
          vehicles={data?.current?.selectedVehicles}
          drivers={data?.current?.selectedDrivers}
          handleNext={() => handleAddTransportService()}
          handlePrev={() => setCurrentStep("currency")}
          setData={addData}
        />
      )}
    </div>
  );
}
