import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available

export default function TransferRequestModalContents() {
    return (
        <div className="">
            <div className="w-full space-y-6 bg-white">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                    Vehicle Transfer Request Sent!
                </h1>

                {/* Confirmation Message */}
                <p className="text-base text-gray-600 mb-8">
                    Vehicle transfer request sent to "inonj@gmail.com"
                </p>

                {/* Resend Button */}
                <Button
                    className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                >
                    Resend
                </Button>
            </div>
        </div>
    );
}
