import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available

export default function TurnOffTwoStepVerificationModalContents({ setIsModalOpen }) {
    return (
        <div className="w-full max-w-xl space-y-6">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Turn off 2 step verification
            </h1>

            {/* Warning Message */}
            <p className="text-base text-gray-600 mb-8">
                You're about to turn off 2-step verification. We recommend
                keeping this on for increased account security
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Button
                    onClick={() => setIsModalOpen(false)}
                    variant="outline"
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                    Back
                </Button>
                <Button
                    onClick={() => setIsModalOpen(false)}
                    className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}
