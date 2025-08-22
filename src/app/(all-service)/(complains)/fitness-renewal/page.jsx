"use client";

import AddNoteStep from "@/components/steps-components/repair/add-note-step/AddNoteStep";
import Location from "@/components/steps-components/location-step/LocationStep";
import VehicleStep from "@/components/steps-components/vehicle-step/VehicleStep";
import { addRequest } from "@/store/Feature/my-request";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import PreferredDateStep from "@/components/steps-components/complaince/fitness-renwal/preferred-date-step/PreferredDateStep";

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
    dispatch(addRequest({ ...data?.current, type: "fitness-renewal" }));
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
          data={data?.current?.vehicles}
          setData={addData}
          handleNext={() => setCurrentStep("preferred-date")}
          handlePrev={() => {
            setCurrentStep("location");
          }}
        />
      )}

      {currentStep === "preferred-date" && (
        <PreferredDateStep
          handleNext={handleAddTransportService}
          handlePrev={() => setCurrentStep("add-vehicle")}
          setData={addData}
          data={data?.current?.vehicles}
        />
      )}
    </div>
  );
}
