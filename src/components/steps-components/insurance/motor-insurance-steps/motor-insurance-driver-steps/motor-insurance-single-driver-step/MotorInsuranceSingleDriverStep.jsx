import BackButton from "@/components/shared/back-button/BackButton";
import { useState } from "react";

export default function MotorInsuranceSingleDriverSteps({
  driver,
  handleNext,
  handlePrev,
}) {
  const [selectedOption, setSelectedOption] = useState(driver?.convicted || "");

  const handleSubmit = () => {
    driver?.convicted !== selectedOption;
    handleNext();
  };
  return (
    <div className="flex items-center justify-center font-sans bg-gray-50">
      <div className="bg-white rounded-lg w-full p-6 sm:p-8 text-center">
        {/* Question */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-secondary mb-6 text-center lg:text-nowrap relative pl-10 lg:pl-0">
          <BackButton
            className={"lg:-translate-x-[10vw] top-0"}
            onclick={handlePrev}
          />
          Let's talk about Alex. Has Alex ever been{" "}
          <br className="hidden lg:block" /> convicted?
        </h2>

        <div className="lg:w-[90%] mx-auto">
          {/* Yes/No Options */}
          <div className="space-y-4 mb-8">
            <button
              onClick={() => setSelectedOption("Yes")}
              className={`w-full px-6 py-3 border rounded-md shadow-sm transition-all duration-200 ${
                selectedOption === "Yes"
                  ? "border-red-500  text-red-700"
                  : "border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setSelectedOption("No")}
              className={`w-full px-6 py-3 border rounded-md shadow-sm transition-all duration-200 ${
                selectedOption === "No"
                  ? "border-red-500 text-red-700"
                  : "border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
              }`}
            >
              No
            </button>
          </div>

          {/* Next Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-primary text-white font-semibold py-3 px-8 rounded-md shadow-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75 min-w-[150px]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
