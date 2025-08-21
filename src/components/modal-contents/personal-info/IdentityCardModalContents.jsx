import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Upload, FileText } from 'lucide-react'; // For upload and file icons

export default function IdentityCardModalContents({setCurrentModalContent}) {
    return (
        <div className="w-full max-w-2xl space-y-6">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                Upload images of your ID
            </h1>

            {/* Instructions */}
            <p className="text-base text-gray-600 mb-8">
                Make sure your photos aren't blurry and the front of your ID clearly shows your face
            </p>

            {/* Upload Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {/* Upload Front */}
                <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-red-500 transition-colors duration-200">
                    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-primary mb-3">
                        <Upload size={32} />
                    </div>
                    <p className="text-base font-semibold text-gray-800 mb-1">Upload front of ID</p>
                    <p className="text-sm text-gray-500">JPEG or PNG only</p>
                </div>

                {/* Upload Back */}
                <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-red-500 transition-colors duration-200">
                    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-primary mb-3">
                        <Upload size={32} />
                    </div>
                    <p className="text-base font-semibold text-gray-800 mb-1">Upload back ID</p>
                    <p className="text-sm text-gray-500">JPEG or PNG only</p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-start gap-4">
                <Button
                    variant="outline"
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                    Back
                </Button>
                <Button
                    onClick={() => setCurrentModalContent("verification-confirmation")}
                    className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}
