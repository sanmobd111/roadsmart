"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function QuatreSection() {
    const [selectedQuarters, setSelectedQuarters] = useState("")
    const [activeQuarter, setActiveQuarter] = useState(null)

    const quarterOptions = [
        { id: "1", label: "1 Quarter", value: "1" },
        { id: "2", label: "2 Quarters", value: "2" },
        { id: "3", label: "3 Quarters", value: "3" },
        { id: "4", label: "4 Quarters", value: "4" },
    ]

    const handleNext = () => {
        if (selectedQuarters) {
            console.log("Selected quarters:", selectedQuarters)
            // Handle next step logic here
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-center justify-center mb-8 w-1/3 mx-auto">
                    <Image src={"/images/road-tax-step-svg.svg"} alt="Progress Indicator" width={500} height={500} />
                </div>

                {/* Question */}
                <h2 className="text-lg font-medium text-gray-900 mb-6 text-center">How many quarters would you like?</h2>

                {/* Radio Options */}
                <div className="space-y-3 mb-8">
                    {quarterOptions.map((option) => (
                        <label
                            key={option.id}
                            className={`flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${selectedQuarters === option.value ? "border-red-500" : ""}`}
                            onClick={() => {
                                setSelectedQuarters(option.value)
                            }}
                        >
                            <span className="ml-3 text-gray-700 font-medium">{option.label}</span>
                        </label>
                    ))}
                </div>

                {/* Next Button */}
                <div className="flex justify-end">
                    <Button
                        onClick={handleNext}
                        disabled={!selectedQuarters}
                        className="bg-primary hover:bg-primary text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        Next
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
