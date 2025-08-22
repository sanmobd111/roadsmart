

"use client";

import ApplyFinanceStep from "@/components/steps-components/finance/apply-finance-step/ApplyFinanceStep";
import Location from "@/components/steps-components/location-step/LocationStep";
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

  const handleAddApplyFinanceService = () => {
    dispatch(addRequest({ ...data?.current, type: "finance" }));
    router.push("/review-services");
  };

  return (
    <div>
      {currentStep === "location" && (
        <Location
          handleNext={() => setCurrentStep("apply-finance")}
          setData={addData}
          handlePrev={() => router.back()}
          data={data?.current?.locations}
        />
      )}
      {
        currentStep === "apply-finance" && (
          <ApplyFinanceStep
            handleNext={handleAddApplyFinanceService}
            handlePrev={() => setCurrentStep("location")}
            setData={addData}
            data={data?.current?.selectedVehicles}
          />
        )
      }
    </div>
  );
}
