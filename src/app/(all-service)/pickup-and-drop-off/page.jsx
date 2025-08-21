"use client";

import ProgressIndicator from "@/components/progressIndicator/ProgressIndicator";
import BackButton from "@/components/shared/back-button/BackButton";
import Container from "@/components/shared/container/Container";
import { Button } from "@/components/ui/button";
import useGetSelectedVehicle from "@/hooks/useGetSelectedVehicle";
import { MapPin } from "lucide-react";
import { useRef, useState } from "react";

export default function PickupAndDropOffStep({
  setData,
  handleNext,
  handlePrev,
  data,
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [locations, setLocations] = useState({ from: "", to: "" });
  const selectedVehicles = useGetSelectedVehicle();
  const localData = useRef(data || selectedVehicles);

  const currentVehicle = selectedVehicles[currentStep - 1];

  const handleSubmit = () => {
    localData.current[currentStep - 1] = {
      ...currentVehicle,
      ...locations,
    };
    setLocations({ from: "", to: "" });
    if (currentStep === selectedVehicles.length) {
      setData({ vehicles: localData.current });
      handleNext();
      return;
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <Container>
      <div>
        <ProgressIndicator
          className={"mt-10 w-[90%]"}
          vehicles={selectedVehicles}
          currentStep={currentStep}
          drivers={[]}
        />
        <div className="min-w-lg max-w-2xl mx-auto pb-10">
          <h1
            type="button"
            className="text-xl lg:text-3xl font-semibold text-gray-secondary mb-6 lg:text-nowrap relative pl-10 lg:pl-0 text-left"
          >
            <BackButton
              className={"lg:-translate-x-[10vw] top-0"}
              onclick={handlePrev}
            />
            Where to?
          </h1>
          <div className="space-y-4 mx-auto">
            <div className="flex items-center w-full max-w-xl p-4 border border-gray-300 rounded-lg bg-white">
              {/* The map pin icon, styled with a specific color. */}
              <MapPin className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" />

              {/* The input field for the pickup location. */}
              <input
                value={locations.from}
                onChange={(e) =>
                  setLocations({ ...locations, from: e.target.value })
                }
                type="text"
                placeholder="Pickup location"
                className="flex-grow text-gray-700 placeholder-gray-500 placeholder:font-semibold focus:outline-none"
              />
            </div>
            <div className="flex items-center w-full max-w-xl p-4 border border-gray-300 rounded-lg bg-white">
              {/* The map pin icon, styled with a specific color. */}
              <MapPin className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" />

              {/* The input field for the pickup location. */}
              <input
                value={locations.to}
                onChange={(e) =>
                  setLocations({ ...locations, to: e.target.value })
                }
                type="text"
                placeholder="Drop off location"
                className="flex-grow text-gray-700 placeholder-gray-500 placeholder:font-semibold focus:outline-none"
              />
            </div>
          </div>
          <Button
            onClick={handleSubmit}
            className="bg-primary w-1/3 m-auto flex mt-8 hover:bg-primary text-white px-8 py-3 lg:py-6 rounded-lg font-medium"
          >
            Next
          </Button>
        </div>
      </div>
    </Container>
  );
}
