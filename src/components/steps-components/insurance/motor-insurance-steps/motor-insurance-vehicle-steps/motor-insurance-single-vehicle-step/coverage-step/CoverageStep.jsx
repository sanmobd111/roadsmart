import CoverageCard from "@/components/coverage-card/CoverageCard";
import ProgressIndicator from "@/components/progressIndicator/ProgressIndicator";
import BackButton from "@/components/shared/back-button/BackButton";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import { useEffect, useState } from "react";

const options = [
  {
    id: 1,
    name: "Comprehensive",
    description:
      "Loss or damage of insured vehicle from accident, fire theft  and legal liabilities to third parties for bodily injury and property damage",
    hasSumInsured: true,
  },
  {
    id: 2,
    name: "Third Party",
    description:
      "Covers damage to other people’s vehicles or property if you are at fault in an accident, plus damage to your own car if it’s caused by fire or theft ",
  },
  {
    id: 3,
    name: "Third Party Fire  and Theft",
    description:
      "Covers property damage, bodily injury and death of third parties resulting from an accident for which you were at fault ",
  },
  {
    id: 4,
    name: "Act Only Cover",
    description:
      "Covers legal responsibility for damages or injuries caused to third parties due to an accident ",
  },
];

export default function CoverageStep({
  vehicle,
  setData,
  handleNext,
  handlePrev,
}) {
  console.log(vehicle, "vehicle in coverage step");
  const [sumInsured, setSumInsured] = useState(vehicle?.sumInsured || null);

  const [selectedId, setSelectedId] = useState(
    vehicle?.sumInsured?.id || null
  );

  console.log(sumInsured, "sumInsured in coverage step");

  const handleSubmit = () => {
    vehicle.sumInsured = sumInsured;
    handleNext();
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto pb-10">
        <h1
          type="button"
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-secondary mb-6 text-center lg:text-nowrap relative pl-10 lg:pl-0"
        >
          <BackButton
            className={"lg:-translate-x-[10vw] top-0"}
            onclick={handlePrev}
          />
          Choose your policy currency
        </h1>
        <div className="space-y-4 lg:w-[90%] mx-auto">
          {options.map((option, index) => (
            <CoverageCard
              key={index}
              option={option}
              data={sumInsured}
              setData={(data) => setSumInsured(data)}
              isSelected={option?.id === selectedId}
              hasSumInsured={option?.hasSumInsured}
              setSelectedId={() => setSelectedId(option?.id)}
            />
          ))}
          <div className="flex justify-center gap-2 mt-10">
            <PrimaryBtn onClick={handleSubmit} text={"Next"} />
          </div>
        </div>
      </div>
    </div>
  );
}
