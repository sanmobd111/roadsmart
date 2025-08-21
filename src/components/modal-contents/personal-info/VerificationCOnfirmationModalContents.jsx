import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available

export default function VerificationCOnfirmationModalContents({ setIsModalOpen }) {
    return (
        <div className="w-full max-w-xl space-y-6 bg-white lg:p-8 rounded-lg text-center">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                We'll let you know as soon as you're verified
            </h1>

            {/* Description */}
            <p className="text-base text-gray-600 mb-8">
                We'll let you know if you've been successfully verified or if we need any more info from you
            </p>

            {/* Got it Button */}
            <Button
                onClick={() => setIsModalOpen(false)}
                className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
            >
                Got it
            </Button>
        </div>
    );
}
