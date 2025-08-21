import { Check, ChevronRight } from 'lucide-react'
import React from 'react'

export default function ScheduleEstimateHeader() {
    return (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-4 hover:bg-green-100 transition-colors cursor-pointer">
            {/* Green checkmark icon */}
            <div className="bg-green-500 rounded-2xl p-3 flex-shrink-0">
                <Check className="w-6 h-6 text-white stroke-2" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Schedule</h3>
                <p className="text-sm text-gray-600">
                    Estimate created on Jul 25, 2025 | 10:45 AM. You can{" "}
                    <span className="font-medium text-gray-900">view the estimate</span>
                </p>
            </div>

            {/* Arrow icon */}
            <div className="flex-shrink-0">
                <ChevronRight className="w-5 h-5 text-green-600" />
            </div>
        </div>
    )
}
