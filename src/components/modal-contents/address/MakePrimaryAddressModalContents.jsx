import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available

export default function MakePrimaryAddressModalContents({ setIsModalOpen }) {
    return (
        <div className="w-full max-w-xl space-y-6">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Update Primary address
            </h1>

            {/* Confirmation Message */}
            <p className="text-base text-gray-600 mb-8">
                Are you sure you want to update your primary address
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Button
                    onClick={() => setIsModalOpen(false)}
                    variant="outline"
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                    No
                </Button>
                <Button
                    onClick={() => setIsModalOpen(false)}
                    className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                >
                    Yes
                </Button>
            </div>
        </div>
    );
}
