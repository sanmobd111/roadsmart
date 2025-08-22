"use client";

import DriverName from "@/components/driver/DriverName";
import DriverStepContainer from "@/components/driver/DriverStepContainer";
import BackButton from "@/components/shared/back-button/BackButton";
import Container from "@/components/shared/container/Container";
import StepProgressbar2 from "@/components/step-progressbar/StepPrograssbar2";
import AddButton from "@/components/ui/AddButton";
import RedBtn from "@/components/ui/RedBtn";
import SelectInput2 from "@/components/ui/SelectInput2";
import TextInput from "@/components/ui/TextInput";
import Title from "@/components/ui/Title";
import DriverWrapper from "@/components/wrapper/DriverWrapper";
import Image from "next/image";
import { useState } from "react";

export default function DriverStep({ data, setData, handleNext, handlePrev }) {
  const [step, setStep] = useState(1);

  //   driver information
  const [drivers, setDrivers] = useState(data || []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [license, setLicense] = useState("");
  const [status, setStatus] = useState("");
  const [validity, setValidity] = useState("");
  const [gender, setGender] = useState("");

  let disabled = false;

  if (step === 2 && !firstName && !lastName) {
    disabled = true;
  } else if (step === 3 && !status) {
    disabled = true;
  } else if (step === 4 && !validity) {
    disabled = true;
  } else if (step === 5 && !license) {
    disabled = true;
  } else if (step === 6 && !gender) {
    disabled = true;
  } else {
    disabled = false;
  }

  let progress = 0;
  switch (step) {
    case 1:
      progress = 0;
      break;
    case 2:
      progress = 20;
      break;
    case 3:
      progress = 40;
      break;
    case 4:
      progress = 60;
      break;
    case 5:
      progress = 80;
      break;
    case 6:
      progress = 100;
      break;
    default:
      progress = 0;
      break;
  }

  const handleSubmit = () => {
    setData({
      allDrivers: drivers,
      selectedDrivers: drivers.filter((d) => d.selected),
    });
    handleNext();
  };

  const handleAddDriver = () => {
    const newDriver = {
      id: Date.now(),
      firstName,
      lastName,
      license,
      status,
      validity,
      selected: true,
    };
    setDrivers((prev) => [...prev, newDriver]);
    setFirstName("");
    setLastName("");
    setLicense("");
    setStatus("");
    setValidity("");
    setGender("");

    setStep(1);
  };

  const toggleDriverForService = (driverId) => {
    const updatedDrivers = drivers.map((d) =>
      d.id === driverId ? { ...d, selected: !d.selected } : d
    );
    setDrivers(updatedDrivers);
  };

  const suggestions = {
    status: [
      { label: "Valid", value: "valid" },
      { label: "Expired", value: "expired" },
      { label: "Foreign", value: "foreign" },
    ],
    year: [
      { label: "Less than 1 year", value: "Less than 1 year" },
      { label: "2-3 years", value: "2-3 years" },
      { label: "Over 3 years", value: "over 3 years" },
    ],
    gender: [
      { label: "Male", value: "Male" },
      { label: "Female", value: "Female" },
      { label: "Other", value: "Other" },
    ],
  };

  return (
    <Container className={"lg:!my-20"}>
      <div className="w-full mx-auto h-[70vh] relative">
        <BackButton className={"top-0"} onclick={handlePrev} />
        <Title
          text={"Add drivers would you like to insure"}
          className={"text-center"}
        />
        <hr className="my-6 lg:mt-6 lg:mb-10" />
        <div className="lg:w-[40%] mx-auto">
          <div className="space-y-4">
            {drivers.length > 0 &&
              drivers.map((driver, index) => (
                <div className="flex justify-between items-center border p-4 rounded-lg">
                  <Image
                    src={"/icon/driver-icon.svg"}
                    className="w-10 h-10"
                    width={40}
                    height={40}
                  />
                  <p className="text-sm lg:text-lg">
                    {driver.firstName} {driver.lastName}
                  </p>
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => toggleDriverForService(driver.id)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                        driver.selected ? "bg-primary" : "bg-gray-200"
                      }`}
                      role="switch"
                      aria-checked={driver.selected}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          driver.selected ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              ))}
          </div>
          {step === 1 && (
            <>
              <AddButton
                text={"Add drivers"}
                className={"block mx-auto my-6"}
                handleNext={() => setStep(2)}
              />
              {drivers.length > 0 && (
                <RedBtn
                  text={"Next"}
                  disabled={!drivers.length}
                  btnClass={"gap-4"}
                  onClick={handleSubmit}
                />
              )}
            </>
          )}
          {step > 1 && (
            <DriverStepContainer className={"border border-gray-300"}>
              {step === 2 && (
                <DriverWrapper title={"What’s their legal name?"}>
                  <DriverName
                    firstName={firstName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                  />
                </DriverWrapper>
              )}

              {step === 3 && (
                <DriverWrapper title={"What’s the status of Betty’s license?"}>
                  {/* {console.log(suggestions.status)} */}
                  <SelectInput2
                    label={"Choose Status"}
                    placeholder={"status"}
                    setValue={setStatus}
                    value={status}
                    options={suggestions.status}
                  />
                </DriverWrapper>
              )}
              {console.log(validity)}
              {step === 4 && (
                <DriverWrapper title={"How long have they been licensed?"}>
                  <SelectInput2
                    label={"Choose Status"}
                    placeholder={"select"}
                    setValue={setValidity}
                    value={validity}
                    options={suggestions.year}
                  />
                </DriverWrapper>
              )}
              {step === 5 && (
                <DriverWrapper title={"What is their license number?"}>
                  <TextInput
                    label={"License Number"}
                    inputProps={{
                      placeholder: "License Number",
                      value: license,
                      onChange: (e) => setLicense(e.target.value),
                    }}
                  />
                </DriverWrapper>
              )}
              {step === 6 && (
                <DriverWrapper title={"How are they listed on their license?"}>
                  <SelectInput2
                    label={"Choose sex"}
                    placeholder={"Male(M)"}
                    setValue={setGender}
                    value={gender}
                    options={suggestions.gender}
                  />
                </DriverWrapper>
              )}
              <StepProgressbar2
                disabled={disabled}
                progress={progress}
                handleNext={() => {
                  if (step < 6) {
                    setStep(step + 1);
                  }
                }}
                handlePrev={() => {
                  if (step > 1) {
                    setStep(step - 1);
                  }
                }}
                containerClassName={"mt-6"}
                isLastStep={step === 6}
                handleAddVehicle={handleAddDriver}
                hasBackBtn
              />
            </DriverStepContainer>
          )}
        </div>
      </div>
    </Container>
  );
}
