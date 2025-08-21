import combinedClasses from "@/utils/tailwind"
import { X, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"

export default function StatusProgressbar({ progress, handleNext, handlePrev, disabled, containerClassName }) {

    return (
        <div className={combinedClasses("w-full max-w-md mx-auto  px-16 pb-8", containerClassName)}>
            <div className="flex justify-between items-center mb-6">
                <h5 className="text-2xl font-semibold text-gray-600">Status</h5>
                <p className="bg-green-100 text-green-500  mt-2 px-4 py-1 rounded-sm">Active</p>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div
                    className="bg-primary h-3 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center mb-4 gap-4 lg:gap-0">
                <p className="text-gray-400">Your policy is expiring</p>
                <p>30 Aug 2025</p>
            </div>

            {/* Action Buttons */}
            <Button className={"w-full text-white"}>Renew</Button>
        </div>
    )
}