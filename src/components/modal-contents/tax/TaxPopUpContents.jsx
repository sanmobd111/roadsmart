import { Button } from '@/components/ui/button'
import React from 'react'

export default function TaxPopUpContents() {
    return (
        <div className="py-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Tax Info is not Needed</h2>
            <p className="text-base text-gray-600 mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <p className="text-base text-gray-600 mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

            {/* Action Buttons */}
            <div className="flex justify-start items-center gap-4">
                <Button
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                >
                    Cancel
                </Button>
                <button className="text-primary hover:underline text-sm">Learn more</button>
            </div>
        </div>
    )
}
