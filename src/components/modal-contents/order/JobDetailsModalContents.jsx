import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { CheckCircle } from 'lucide-react'; // For check icon
import BackGroundColorDiv from '@/components/shared/background-color-div/BackGroundColorDiv';
import carImg from "@/assets/images/pngwing.com (3).png";
import Image from 'next/image';

export default function JobDetailsModalContents() {
    const scopeOfWork = [
        "Check noise from engine top",
        "Perform routine engine service",
    ];

    const workCarriedOut = [
        "Replaced cabin filter",
        "Replaced engine oil",
    ];

    const recommendations = [
        "Replace the spark plugs",
        "Replace the air filter",
    ];

    return (
        <div className="w-full max-w-6xl space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-gray-800">Job Details</h1>
                <button className="text-primary hover:underline text-base">Contact garage</button>
            </div>

            {/* Booking Confirmation */}
            <div className="flex items-center space-x-2 mb-8">
                <CheckCircle size={20} className="text-green-500" />
                <p className="text-base font-semibold text-gray-800">Booking confirmed</p>
            </div>

            {/* Vehicle and Repairs Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Left Side: Vehicle Details */}
                <div className="flex items-start space-x-4">
                    <BackGroundColorDiv className={"p-2"}>
                        <Image src={carImg} alt="Vehicle" className="w-24 h-auto object-cover rounded-md flex-shrink-0" width={80} height={50} />
                    </BackGroundColorDiv>
                    <div>
                        <p className="text-base font-semibold text-gray-800">Mercedes Benz CAC2035</p>
                        <p className="text-sm text-gray-600">Mileage: 34,548 Km</p>
                    </div>
                </div>

                {/* Right Side: Repairs Progress */}
                <div>
                    <p className="text-base font-semibold text-gray-800">Repairs CAC3456</p>
                    <p className="text-base text-gray-600 mb-2">Completed on 8 Aug</p>
                    <p className="text-sm text-gray-600 mb-2">Vehicle delivered to Martin Phiri</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '80%' }}></div> {/* Example progress */}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Scheduled</span>
                        <span>In Progress</span>
                        <span>Completed</span>
                    </div>
                </div>
            </div>

            {/* Pickup Details */}
            <div className="mb-8">
                <p className="text-base text-gray-800 font-semibold">10 AM on Tue, 23 July</p>
                <p className="text-sm text-gray-600">Pickup from 27 Manchinachi Road, Lusaka</p>
            </div>

            {/* Scope of Work, Work Carried Out, Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Scope Of Work</h2>
                    <div className="space-y-1 mb-2">
                        {scopeOfWork.map((item, index) => (
                            <p key={index} className="text-base text-gray-600 flex items-center">
                                <span className="mr-2">+</span> {item}
                            </p>
                        ))}
                    </div>
                    <button className="text-primary hover:underline text-sm">Edit</button>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Work Carried Out</h2>
                    <div className="space-y-1">
                        {workCarriedOut.map((item, index) => (
                            <p key={index} className="text-base text-gray-600 flex items-center">
                                <span className="mr-2">+</span> {item}
                            </p>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Recommendations</h2>
                    <div className="space-y-1">
                        {recommendations.map((item, index) => (
                            <p key={index} className="text-base text-gray-600 flex items-center">
                                <span className="mr-2">+</span> {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-4 lg:items-center justify-between'>
                <Button
                    variant="outline"
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                    View Inspection form
                </Button>
                {/* Next Service Check */}
                <div className="flex flex-col gap-4 mb-8">
                    <h2 className=" font-semibold text-gray mr-4">Next Service Check</h2>
                    <div className="flex space-x-4">
                        <div className="border border-gray-300 rounded-md px-6 py-1 text-center text-sm font-medium text-gray-800">
                            21,000 Km
                        </div>
                        <div className="border border-gray-300 rounded-md px-6 py-1 text-center text-sm font-medium text-gray-800">
                            21 Nov 26
                        </div>
                    </div>
                </div>
            </div>

            {/* Sign Off Section */}
            <div className="pt-6 border-t border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Sign Off</h2>
                <Button
                    className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200 mb-2"
                >
                    Accept
                </Button>
                <p className="text-sm text-gray-500">Accepted on 29 Nov 2024</p>
            </div>
        </div>
    );
}
