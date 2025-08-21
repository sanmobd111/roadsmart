import combinedClasses from "@/utils/tailwind"
import { X, ChevronRight } from "lucide-react"

export default function StepProgressbar({ progress, handleNext, handlePrev, disabled, containerClassName }) {

    return (
        <div className={combinedClasses("w-full max-w-md mx-auto  px-16 pb-8", containerClassName)}>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div
                    className="bg-primary h-3 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
                {/* Close Button */}
                <button onClick={handlePrev} className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 bg-red-100 hover:bg-red-200 rounded-sm md:rounded-lg lg:rounded-xl flex items-center justify-center transition-colors duration-200">
                    <X className="w-5 h-5 text-primary" />
                </button>

                {/* Next Button */}
                <button disabled={disabled} onClick={handleNext} className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 bg-primary hover:bg-primary rounded-sm md:rounded-lg lg:rounded-xl flex items-center justify-center transition-colors duration-200 disabled:!bg-gray-300">
                    <ChevronRight className="w-5 h-5 text-white " />
                </button>
            </div>
        </div>
    )
}
