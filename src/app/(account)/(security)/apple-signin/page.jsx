import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available

export default function App() {
    return (
        <div className="min-h-[60vh] bg-white font-sans text-gray-900 p-6 flex items-center justify-center">
            <div className="w-full max-w-xl space-y-6 bg-white p-8 rounded-lg text-center">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Link your RSS account with Google</h1>
                <p className="text-base text-gray-600 mb-8">
                    Enter your Google account details to finish linking your accounts. You'll then be able to sign in to RSS with Google.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button
                        variant="outline"
                        className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    >
                        Back
                    </Button>
                    <Button
                        className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
}
