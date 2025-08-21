"use client";
import VehicleSelection from "@/components/addvehicle/addV";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Addvehicle = () => {
  const { service } = useParams();

  const [currentStep, setCurrentStep] = useState(1);
  const vehicles = useSelector((state) => state?.vehicle?.vehicles);
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <VehicleSelection service={service} currentStep={currentStep} setCurrentStep={setCurrentStep} vehicles={vehicles} />;
    }
  }

  return (
    <div>
      {
        renderStep()
      }
    </div>
  );
};






export default Addvehicle;
