import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import Link from 'next/link';

export default function App() {
    return (
        <div className="min-h-[60vh] bg-white font-sans text-gray-900 lg:p-6 flex items-center justify-center">
            <div className="w-full max-w-xl space-y-6 bg-white p-8 rounded-lg text-center">
                {/* Header */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Simplify your sign-in</h1>
                <p className="text-base text-gray-600 mb-8">
                    Use Windows Hello to sign in with your PIN, face, or fingerprint.
                </p>

                {/* Action Buttons */}
                <div className="flex sm:flex-row justify-center gap-4">
                    <Link href="/signin-and-security">
                        <Button
                            variant="outline"
                            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                        >
                            Skip for now
                        </Button>
                    </Link>
                    <Link href="/signin-and-security">
                    <Button
                        className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                    >
                        Continue
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
