"use client";

import { Card, CardContent } from "@/components/ui/card";
import { addVehicle } from "@/store/Feature/vehicle-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "../shared/container/Container";
import StepProgressbar2 from "../step-progressbar/StepPrograssbar2";
import StepHeading from "../ui/StepHeading";
import StepInput from "../ui/StepInput";
import StepInputLebel from "../ui/StepInputLebel";

const steps = ["year", "manufacturer", "model", "variant", "type", "engine", "use"];

const stepLabels = {
  year: "Select the production year",
  manufacturer: "Select the car's manufacturer",
  model: "Select the car's model",
  variant: "Select the car variant",
  type: "Select the type",
  engine: "Select the engine",
  use: "Select the use",
};

const fieldLabels = {
  year: "Year",
  manufacturer: "Make",
  model: "Model",
  variant: "Variant",
  type: "Type",
  engine: "Engine",
  use: "Use",
};

const suggestions = {
  year: [
    { label: "2022", value: "2022" },
    { label: "2023", value: "2023" },
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
    { label: "2026", value: "2026" },
    { label: "2027", value: "2027" },
    { label: "2028", value: "2028" },
    { label: "2029", value: "2029" },
  ],
  manufacturer: [
    { label: "BMW", value: "BMW" },
    { label: "Toyota", value: "Toyota" },
    { label: "Audi", value: "Audi" },
    { label: "Mercedes", value: "Mercedes" },
    { label: "Volkswagen", value: "Volkswagen" },
  ],
  model: [
    { label: "2022 BMW X3", value: "2022 BMW X3" },
    { label: "2022 Toyota Corolla", value: "2022 Toyota Corolla" },
    { label: "2022 Audi A6", value: "2022 Audi A6" },
    { label: "2022 Mercedes E-Class", value: "2022 Mercedes E-Class" },
    { label: "2022 Volkswagen Passat", value: "2022 Volkswagen Passat" },
  ],
  variant: [
    { label: "SE", value: "SE" },
    { label: "LE", value: "LE" },
    { label: "SLE", value: "SLE" },
    { label: "GSE", value: "GSE" },
    { label: "GLE", value: "GLE" },
  ],
  type: [
    { label: "Hatchback", value: "Hatchback" },
    { label: "Sedan", value: "Sedan" },
    { label: "SUV", value: "SUV" },
    { label: "Coupe", value: "Coupe" },
    { label: "Convertible", value: "Convertible" },
  ],
  engine: [
    { label: "3.5L", value: "3.5L" },
    { label: "4.0L", value: "4.0L" },
    { label: "5.0L", value: "5.0L" },
    { label: "6.0L", value: "6.0L" },
    { label: "8.0L", value: "8.0L" },
    { label: "10.0L", value: "10.0L" },
    { label: "12.0L", value: "12.0L" },
    { label: "14.0L", value: "14.0L" },
    { label: "16.0L", value: "16.0L" },
  ],
  use: [
    { label: "Personal", value: "Personal" },
    { label: "Commercial", value: "Commercial" },
    { label: "Truck", value: "Truck" },
    { label: "Sport", value: "Sport" },
  ],
};

const progress = {
  year: 16,
  manufacturer: 32,
  model: 48,
  variant: 64,
  type: 80,
  engine: 96,
  use: 100,
};

export default function AddVehicle({ vehicles = [], setCurrentStep: setPageStep }) {
  const [currentStep, setCurrentStep] = useState("year");
  const dispatch = useDispatch();

  const [vehicleData, setVehicleData] = useState({
    year: "",
    manufacturer: "",
    model: "",
    variant: "",
    type: "",
    engine: "",
    use: "",
  });

  const handleInputChange = (step, value) => {
    setVehicleData((prev) => ({ ...prev, [step]: value }));
  };

  const handleNext = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const handleBack = () => {
    setPageStep(1);
  };

  const handleAddVehicle = () => {
    const { year, manufacturer, model } = vehicleData;
    if (year && manufacturer && model) {
      dispatch(addVehicle({ ...vehicleData, id: vehicles.length + 1 }));
      setVehicleData({
        year: "",
        manufacturer: "",
        model: "",
        variant: "",
        type: "",
        engine: "",
        use: "",
      });
      setCurrentStep("year");
      setPageStep(1);
    }
  };

  const renderStepCard = (step) => (
    <Card className="max-w-md mx-auto border-none shadow-none">
      <CardContent className="p-0">
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <StepHeading text={stepLabels[step]} />
            {step === "year" && (
              <p className="text-[10px] md:text-xs text-gray-400 text-nowrap cursor-pointer" onClick={() => setPageStep(2)}>Enter Reg. Number</p>
            )}
          </div>
          {console.log(suggestions[step])}
          <div>
            <StepInputLebel htmlFor={step} text={fieldLabels[step]} />
            <StepInput
              value={vehicleData[step]}
              setValue={(val) => handleInputChange(step, val)}
              type={step === "year" ? "number" : "text"}
              className="text-[10px] md:text-xs lg:text-sm"
              suggestions={suggestions[step]}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Container className="w-full !p-0 overflow-visible">
      <main className="rounded-lg md:rounded-xl mx-auto w-full">
        {/* <div className="text-center mx-auto">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-2 md:w-[90%] mx-auto relative">
            <BackButton className={"top-0"} onclick={handleBack} />
            Add the cars you would like to order the <br className="hidden lg:block" /> service for
          </h1>
        </div>
        <hr className="border border-gray-300 mx-auto mb-4 lg:mb-24 lg:w-[20%]" /> */}

        <div className="custom-shadow border border-gray-200 rounded-xl mx-auto p-6">
          {renderStepCard(currentStep)}
          <StepProgressbar2
            hasBackBtn={currentStep !== "year"}
            disabled={!vehicleData[currentStep]}
            progress={progress[currentStep]}
            handleNext={handleNext}
            handlePrev={handlePrev}
            setCurrentStep={setCurrentStep}
            isLastStep={currentStep === "use"}
            handleAddVehicle={handleAddVehicle}
            currentStep={currentStep}
            setValueOfStep={(val) => handleInputChange(currentStep, val)}
          />
        </div>
      </main>
    </Container>
  );
}
