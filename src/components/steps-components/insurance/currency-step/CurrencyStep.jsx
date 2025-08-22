import BackButton from "@/components/shared/back-button/BackButton";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import { cn } from "@/lib/utils";

const { useState } = require("react");

export default function CurrencyStep({
  data,
  handleNext,
  setData,
  handlePrev,
}) {
  const options = [
    { id: 2, label: "ZMW", label: "zmw" },
    { id: 1, label: "usd" },
  ];
  const [currency, setCurrency] = useState(data || "");

  const handleSubmit = () => {
    setData({ currency });
    handleNext();
  };
  return (
    <div className="max-w-2xl mx-auto py-6 lg:py-10">
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
          <div
            className={cn(
              "cursor-pointer p-4 border rounded-lg",
              currency === option.label
                ? "border-primary"
                : "border-gray-200 bg-white"
            )}
            key={index}
            onClick={() => setCurrency(option.label)}
          >
            {option?.label}
          </div>
        ))}
        <div className="flex justify-center gap-2 mt-10">
          <PrimaryBtn onClick={handleSubmit} text={"Next"} />
        </div>
      </div>
    </div>
  );
}
