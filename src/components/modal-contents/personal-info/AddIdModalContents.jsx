import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available

export default function AddIdModalContents({ setCurrentModalContent }) {
    return (
        <div className="w-full max-w-2xl space-y-6">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                Add your ID
            </h1>

            {/* Description */}
            <p className="text-base text-gray-600 mb-8">
                This helps us check that it is really you. Identity verification is one of the ways we keep roadsmart
                secure enable you to access services that need your identity
            </p>

            {/* Add an ID Button */}
            <Button
                onClick={() => setCurrentModalContent("id-verification")}
                className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
            >
                Add an ID
            </Button>
        </div>
    );
}
