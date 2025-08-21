import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available

export default function RemoveModalContents() {
    return (
        <div className="bg-white font-sans text-gray-900  flex items-center justify-center">
            <div className="w-full space-y-6 bg-white">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Remove payment method</h1>
                <p className="text-base text-gray-600 mb-8">
                    Are you sure you want to remove this payment method?
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        variant="outline"
                        className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    >
                        Back
                    </Button>
                    <Button
                        className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                    >
                        Remove
                    </Button>
                </div>
            </div>
        </div>
    );
}
