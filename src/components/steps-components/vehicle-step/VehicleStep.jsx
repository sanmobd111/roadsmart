"use client";

import carImg from "@/assets/images/pngwing.com (3).png";
import BackButton from "@/components/shared/back-button/BackButton";
import Container from "@/components/shared/container/Container";
import AddButton from "@/components/ui/AddButton";
import StepHeading from "@/components/ui/StepHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import AddManualVehicleStep from "./add-manual-vehilce-step/AddManualVehicleStep";

export default function VehicleStep({ handleNext, handlePrev, setData, data }) {
  const [vehicles, setVehicle] = useState(data || []);
  const [currentStep, setCurrentStep] = useState("add-vehicle");
  const [registrationNumber, setRegistrationNumber] = useState("");

  const toggleVehicleForService = (vehicleId) => {
    const updatedVehicles = vehicles.map((vehicle) => {
      if (vehicle.id === vehicleId) {
        return { ...vehicle, selected: !vehicle.selected };
      }
      return vehicle;
    });
    setVehicle(updatedVehicles);
  };

  const handleAddVehicle = () => {
    const newVehicle = {
      id: vehicles.length + 1,
      manufacturer: registrationNumber || `Vehicle ${vehicles.length + 1}`,
      selected: true,
    };
    setVehicle([...vehicles, newVehicle]);
    setRegistrationNumber("");
    setCurrentStep("add-vehicle");
  };

  return (
    <Container className="lg:!my-20">
      <div className="w-full min-h-[70vh] mx-auto bg-white rounded-lg">
        <div className="md:w-[85%] m-auto">
          {/* Header */}
          <div className="text-center mb-4 lg:mb-14">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-2 md:w-[90%] mx-auto relative">
              Select the cars you would like to <br /> order the service for
              <BackButton className={"top-0"} onclick={handlePrev} />
            </h1>
          </div>

          {/* Main Section */}
          <div className="max-w-xs md:max-w-xl mx-auto">
            {/* Vehicle List */}
            <div className="space-y-4 my-8">
              {vehicles.map((vehicle) => (
                <Card
                  key={vehicle.id}
                  className="p-4 bg-white border rounded-[8px]  shadow-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex grow items-center space-x-4">
                      <div className="w-[20%] aspect-[3/2] bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <Image
                          src={carImg}
                          alt={vehicle.name}
                          className="w-full h-full object-contain"
                          style={{
                            filter:
                              "hue-rotate(0deg) saturate(1.5) brightness(0.8)",
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xs md:text-m lg:text-lg font-medium text-gray-900">
                          {vehicle.manufacturer}
                        </h3>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <div className="flex items-center space-x-2">
                      <div className="flex flex-col items-center">
                        <button
                          onClick={() => toggleVehicleForService(vehicle.id)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                            vehicle.selected ? "bg-primary" : "bg-gray-200"
                          }`}
                          role="switch"
                          aria-checked={vehicle.selected}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              vehicle.selected
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Add Vehicle Flow */}
            <div className="flex items-center gap-4 flex-col justify-between">
              {currentStep === "add-vehicle" && (
                <AddButton
                  handleNext={() => setCurrentStep("add-by-registration")}
                  text="Add Vehicles"
                />
              )}

              {currentStep === "add-by-registration" && (
                <div className="w-full p-4 border border-gray-300 rounded-lg">
                  <Card className="border-none shadow-none p-0 w-full">
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2 lg:mb-4">
                            <StepHeading
                              text="Enter Registration number"
                              className=" text-gray-black"
                            />
                            <button
                              onClick={() => setCurrentStep("add-by-manual")}
                              className="text-gray-400 text-[10px] md:text-xs lg:text-sm cursor-pointer w-1/2 text-right"
                            >
                              Enter manually
                            </button>
                          </div>
                          <p className="text-gray font-medium mb-3 text-[10px] md:text-xs lg:text-sm">
                            Reg. number
                          </p>
                          <div className="mt-1 relative">
                            <Input
                              id="registration"
                              type="text"
                              placeholder="Search reg number"
                              value={registrationNumber}
                              onChange={(e) =>
                                setRegistrationNumber(e.target.value)
                              }
                              className="pr-10 pl-6 py-3 md:py-5 lg:py-7 focus:border-0 focus:outline-none text-[10px] md:text-xs lg:text-sm"
                            />
                            {registrationNumber && (
                              <FaCircleCheck className="w-6 h-6 text-green-400 absolute right-3 top-1/2 -translate-y-1/2" />
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center gap-4 mt-6">
                    <button
                      className="w-12 flex justify-center items-center rounded-lg bg-secondary aspect-square"
                      onClick={() => setCurrentStep("add-vehicle")}
                    >
                      <IoCloseOutline className="text-primary w-1/2 h-1/2" />
                    </button>
                    <button
                      className="px-6 py-3 bg-primary text-white rounded-lg font-bold"
                      onClick={handleAddVehicle}
                    >
                      Add Vehicle
                    </button>
                  </div>
                </div>
              )}
              {currentStep === "add-by-manual" && <AddManualVehicleStep />}
            </div>
            {vehicles.length > 0 && (
              <Button
                onClick={() => {
                  setData({ vehicles: vehicles });
                  handleNext();
                }}
                className="bg-primary w-1/3 m-auto flex mt-8 hover:bg-primary text-white px-8 py-3 lg:py-6 rounded-lg font-medium"
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
