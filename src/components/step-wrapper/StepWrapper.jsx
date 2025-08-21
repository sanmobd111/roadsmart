"use client"

import { useState } from "react"
import { ChevronLeft, X, ChevronRight } from "lucide-react"

export default function BettySexForm() {
  const [selectedSex, setSelectedSex] = useState("Female(F)")

  const sexOptions = ["Female(F)", "Male(M)", "Other", "Prefer not to say"]

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-6 sm:p-8">
        {/* Header with back button */}
        <div className="flex items-center mb-8">
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-medium text-gray-900 mb-8 text-center">What is Betty's sex?</h1>

      </div>
    </div>
  )
}
