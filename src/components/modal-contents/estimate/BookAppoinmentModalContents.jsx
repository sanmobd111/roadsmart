import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import Link from 'next/link';

export default function BookAppointmentModalContents() {
    return (
        <div className="w-full lg:w-3xl space-y-6">
            {/* Header */}
            <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                Confirm booking details
            </h1>

            {/* Vehicle Details */}
            <div className="mb-6">
                <h2 className="text-base font-semibold text-gray-800 mb-2">Vehicle</h2>
                <p className="text-base text-gray-600">Toyota Vanguard ALC2346</p>
            </div>

            {/* Appointment Details */}
            <div className="mb-6">
                <h2 className="text-base font-semibold text-gray-800 mb-2">Appointment</h2>
                <p className="text-base text-gray-600">Wednesday Nov 02 at 08:00 am</p>
            </div>

            {/* Pick up required */}
            <div className="mb-6">
                <h2 className="text-base font-semibold text-gray-800 mb-2">Pick up required</h2>
                <p className="text-base text-gray-600">Required</p>
            </div>

            {/* Pick up address */}
            <div className="mb-6">
                <h2 className="text-base font-semibold text-gray-800 mb-2">Pick up address</h2>
                <p className="text-base text-gray-600">23 Elms Street, Florida, Lusaka, ZM</p>
            </div>

            {/* Pick up time */}
            <div className="mb-8">
                <h2 className="text-base font-semibold text-gray-800 mb-2">Pick up time</h2>
                <p className="text-base text-gray-600">7:30 am</p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 w-[80%] lg:w-fit lg:!ml-auto lg:!mr-0">
                <Button
                    variant="outline"
                    className="text-sm lg:text-base px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                    Edit
                </Button>
                <Link href={"/confirm-estimate"}>
                    <Button
                        className="text-sm lg:text-base px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                    >
                        Confirm & Book
                    </Button>
                </Link>
            </div>
        </div>
    );
}
