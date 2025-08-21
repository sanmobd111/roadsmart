"use client"

import { useState } from "react"
import { ChevronDown, Car } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ReviewServiceCard() {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleEdit = () => {
        console.log("Edit insurance details")
        // Handle edit functionality
    }

    const handleDelete = () => {
        console.log("Delete insurance")
        // Handle delete functionality
    }

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <Card className="shadow-sm border-none rounded-2xl overflow-hidden">
            <CardContent className="p-0">
                {/* Header Section */}
                <div className="flex items-center p-6">
                    {/* Icon Section */}
                    <div className="bg-red-50 rounded-2xl p-4 mr-6">
                        <Car className="w-8 h-8 text-primary" />
                    </div>

                    {/* Title Section */}
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold text-gray-900 mb-1">Motor Insurance</h2>
                        <p className="text-gray-600">Toyota Rav-4 ALX3203</p>
                    </div>

                    {/* Dropdown Arrow */}
                    <button onClick={toggleExpanded} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                </div>

                {/* Details Section */}
                <div className="px-6 pb-6">
                    <div className="flex items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 mr-3">Details</h3>
                        <button
                            onClick={handleEdit}
                            className="text-primary hover:text-primary font-medium text-sm transition-colors"
                        >
                            Edit
                        </button>
                    </div>

                    {/* Coverage and Sum Insured */}
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="text-gray-600 text-sm">Coverage</span>
                            <p className="font-semibold text-gray-900">Comprehensive</p>
                        </div>
                        <div className="text-right">
                            <span className="text-gray-600 text-sm">Sum Insured</span>
                            <p className="font-semibold text-gray-900">$15,000</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center lg:justify-end space-x-4">
                        <button
                            onClick={handleEdit}
                            className="text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors underline"
                        >
                            Edit
                        </button>
                        <button
                            onClick={handleDelete}
                            className="text-gray-600 hover:text-primary font-medium text-sm transition-colors underline"
                        >
                            Delete
                        </button>
                    </div>
                </div>

                {/* Expandable Content (if needed) */}
                {isExpanded && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                        <div className="pt-4 space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Policy Number:</span>
                                <span className="font-medium">POL-2024-001234</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Expiry Date:</span>
                                <span className="font-medium">Dec 31, 2024</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Premium:</span>
                                <span className="font-medium">$1,200/year</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Deductible:</span>
                                <span className="font-medium">$500</span>
                            </div>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
