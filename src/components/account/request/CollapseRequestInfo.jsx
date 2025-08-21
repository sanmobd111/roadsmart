import React, { useState } from 'react'
import { Card, CardContent } from '../../ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Badge } from '../../ui/badge'
import { Button } from '../../ui/button'
import combinedClasses from '@/utils/tailwind'

export default function CollapseRequestInfo({ containerClassName }) {
    const [sections, setSections] = useState([
        { id: "location", title: "Location", isExpanded: true },
        { id: "incident", title: "Incident details", isExpanded: true },
    ])

    const toggleSection = (sectionId) => {
        setSections(
            sections.map((section) => (section.id === sectionId ? { ...section, isExpanded: !section.isExpanded } : section)),
        )
    }

    const getSectionExpanded = (sectionId) => {
        return sections.find((s) => s.id === sectionId)?.isExpanded ?? false
    }
    return (
        <div className={combinedClasses(" w-[70%] mx-auto lg:mx-0 lg:w-[25%]", containerClassName)}>
            <div className="w-full mx-auto">
                <Card className="border-none shadow-none border-gray-200 p-0">
                    <CardContent className="space-y-6 px-0">
                        {/* Location Section */}
                        <div>
                            <button
                                onClick={() => toggleSection("location")}
                                className="flex items-center justify-between w-full pb-3 border-b border-gray-200"
                            >
                                <h3 className="text-lg font-medium text-gray-900">Location</h3>
                                {getSectionExpanded("location") ? (
                                    <ChevronUp className="w-4 h-4 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                )}
                            </button>

                            {getSectionExpanded("location") && (
                                <div className="pt-4 space-y-1 text-sm text-gray-600 p-2 rounded-lg">
                                    <div>15 Blue Stare Road</div>
                                    <div>23 CA New York City</div>
                                    <div>NY 345678</div>
                                </div>
                            )}
                        </div>

                        {/* Incident Details Section */}
                        <div>
                            <button
                                onClick={() => toggleSection("incident")}
                                className="flex items-center justify-between w-full pb-3 border-b border-gray-200"
                            >
                                <h3 className="text-lg font-medium text-gray-900">Incident details</h3>
                                {getSectionExpanded("incident") ? (
                                    <ChevronUp className="w-4 h-4 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                )}
                            </button>

                            {getSectionExpanded("incident") && (
                                <div className="pt-4 space-y-4 text-sm p-2 rounded-lg">
                                    <div>
                                        <div className="text-gray-600 mb-1">Incident type</div>
                                        <div className="font-medium text-gray-900">Multi vehicle Accident</div>
                                    </div>

                                    <div>
                                        <div className="text-gray-600 mb-1">Incident date</div>
                                        <div className="font-medium text-gray-900">31 Oct 2024</div>
                                    </div>

                                    <div>
                                        <div className="text-gray-600 mb-1">Vehicle</div>
                                        <div className="font-medium text-gray-900">2021 BMW X3 ALG 38</div>
                                    </div>

                                    <div>
                                        <div className="text-gray-600 mb-1">Incident town</div>
                                        <div className="font-medium text-gray-900">Lusaka</div>
                                    </div>

                                    <div>
                                        <div className="text-gray-600 mb-1">Damages</div>
                                        <div className="font-medium text-gray-900">Own, Third Party Property</div>
                                    </div>

                                    <div>
                                        <div className="text-gray-600 mb-1">Description</div>
                                        <div className="font-medium text-gray-900">
                                            Was joining great east road and vehicle cut in front and hit into my vehicle
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
