"use client";

import AddNoteStep from "@/components/steps-components/repair/add-note-step/AddNoteStep";
import Location from "@/components/steps-components/location-step/LocationStep";
import PickupAndDropOffStep from "@/components/steps-components/transport/pickup-drop-off-step/PickupDropOffStep";
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
    dispatch(addRequest({ ...data?.current, type: "repair" }));
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
          handleNext={() => setCurrentStep("pickup-and-drop-off")}
          handlePrev={() => {
            setCurrentStep("location");
          }}
        />
      )}

      {currentStep === "pickup-and-drop-off" && (
        <AddNoteStep
          handleNext={handleAddTransportService}
          handlePrev={() => setCurrentStep("add-vehicle")}
          setData={addData}
          data={data?.current?.vehicles}
        />
      )}
    </div>
  );
}
