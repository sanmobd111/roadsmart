"use client";

import AddNoteModalContents from "@/components/modal-contents/AddNoteModalContents";
import ProgressIndicator from "@/components/progressIndicator/ProgressIndicator";
import BackButton from "@/components/shared/back-button/BackButton";
import Modal from "@/components/shared/modal/Modal";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";

export default function AddNoteStep({ data, setData, handleNext, handlePrev }) {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const [note, setNote] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

      const currentVehicle = data[currentStep - 1];

  const handleSubmit = () => {
    data[currentStep - 1] = {
      ...currentVehicle,
      note,
    };
    setNote("");
    setIsModalOpen(false);
    if (currentStep === data.length) {
      setData({ vehicles: data });
      handleNext();
      return;
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      handlePrev();
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="mt-10 flex items-center justify-center p-4">
      <div className="w-full h-[70vh] mb-10 flex flex-col max-w-md bg-white rounded-lg">
        <div>
          <ProgressIndicator
            className={"mt-10 w-[90%]"}
            currentStep={currentStep}
            vehicles={data}
          />

          {/* Question */}
          <div className="mb-6">
            <h1
              type="button"
              className="text-xl lg:text-3xl font-semibold text-gray-secondary mb-6 text-center lg:text-nowrap relative"
            >
              <BackButton
                className={"-translate-x-[20vw]"}
                onclick={handleBack}
              />
              Add a note to the technician
            </h1>
          </div>

          <div className="lg:w-[90%] mx-auto">
            {/* Input Fields */}
            <div className="space-y-4">
              {/* Add Preferred Date Input */}
              <div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-left"
                >
                  <p className="font-semibold">Add a note</p>
                  <p className="text-sm">Give some details about the problem</p>
                </button>
              </div>

              {/* Display Note if Available */}
              {note && (
                <>
                  <div className="bg-[#fef2f24f] rounded-lg py-3 px-4 mb-4">
                    {/* Pick Up Button */}
                    <div className="flex justify-between text-sm lg:text-lg">
                      <p className=" text-gray-500 font-semibold">Your Notes</p>
                      <button
                        className="text-red-500 cursor-pointer "
                        onClick={() => setIsModalOpen(true)}
                      >
                        Edit
                      </button>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">{note}</p>
                  </div>
                </>
              )}
              {/* No Preferred Date Input */}
              <div>
                <button className="w-full px-3 py-4 lg:px-4 lg:py-6 border border-gray-300 rounded-md text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-left font-semibold">
                  No note
                </button>
              </div>
            </div>
            {/* <Link href={"/review-services"} className="w-[35%] mt-6 ml-auto block"> */}
            <Button
              onClick={handleSubmit}
              className="bg-primary mt-6 ml-auto hover:bg-primary text-white px-12 py-3 md:py-4 lg:py-6 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer w-full"
            >
              Next <MdArrowBackIos className="rotate-180 size-3" />
            </Button>
            {/* </Link> */}
          </div>
        </div>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <AddNoteModalContents
            note={note}
            setNote={setNote}
            setIsModalOpen={setIsModalOpen}
          />
        </Modal>
      </div>
    </div>
  );
}
