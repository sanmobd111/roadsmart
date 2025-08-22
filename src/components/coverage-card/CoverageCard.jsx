import { useState } from "react";
import InsuranceModalContent from "../modal-contents/InsuranceModalContent";
import Modal from "../shared/modal/Modal";

export default function CoverageCard({
  option,
  data,
  setData,
  hasSumInsured,
  isSelected,
  setSelectedId,
}) {
  console.log(isSelected, "isSelected in coverage card");
  // const [localSumInsured, setLocalSumInsured] = useState(data || {});

  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isSelected);
  return (
    <div className="w-full mx-auto bg-white rounded-lg ">
      <div
        className={`mb-3 cursor-pointer border p-4 rounded-xl ${
          isSelected && "border-red-300"
        }`}
        onClick={() => {
          setSelectedId(option?.id);
        }}
      >
        <h2 className="text-lg lg:text-xl font-semibold text-gray-800">
          {option.name}
        </h2>
        <p className="text-xs lg:text-sm text-gray-600 mt-1">
          {option.description}
        </p>
      </div>
      {hasSumInsured &&
        isSelected &&
        (data?.amount ? (
          <div className="w-[90%] mx-auto bg-secondary p-4 rounded-xl">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">
              Your Sum Insured
            </h3>
            <p className="text-base text-gray-500 mb-4">$1,200</p>
            <p className="text-sm text-gray-400">Saved</p>
          </div>
        ) : (
          <div className="w-[90%] mx-auto bg-secondary p-4 rounded-xl">
            <div
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="cursor-pointer mb-4 border border-gray-200 rounded-lg p-3 text-sm text-gray-700 bg-gray-50"
            >
              Add Sum Insured
            </div>

            {/* <button
              className=" bg-red-400 text-white text-sm py-2 px-4 rounded-md cursor-pointer"
              // onClick={() => setData(localSumInsured)}
            >
              Confirm
            </button> */}
          </div>
        ))}

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <InsuranceModalContent
          setSumInsured={(data) => setData({ ...data, id: option?.id })}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </div>
  );
}
