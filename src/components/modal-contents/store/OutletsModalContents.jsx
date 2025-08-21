import React from 'react';
import { ChevronDown, Clock, Star } from 'lucide-react'; // For icons
import Link from 'next/link';

export default function OutletsModalContents() {
    const outlets = [
        {
            id: 1,
            name: "Sector 44, Gurgaon",
            time: "42 mins",
            distance: "5.5 km",
            rating: "4.1",
            highlight: false,
            active: true, // This one is selected/active based on the red border
        },
        {
            id: 2,
            name: "Sector 50, Gurgaon",
            time: "26 mins",
            distance: "1.4 km",
            rating: "4.1",
            highlight: true, // Nearest available outlet
            active: false,
        },
        {
            id: 3,
            name: "Sector 45, Gurgaon",
            time: "36 mins",
            distance: "2.4 km",
            rating: "4.1",
            highlight: false,
            active: false,
        },
        {
            id: 4,
            name: "Sector 39, Gurgaon",
            time: "29 mins",
            distance: "2.7 km",
            rating: "4.2",
            highlight: false,
            active: false,
        },
        {
            id: 5,
            name: "Ardee City, Gurgaon",
            time: "42 mins",
            distance: "3.0 km",
            rating: "4.2",
            highlight: false,
            active: false,
        },
    ];

    return (
        <div className="w-xs lg:w-md space-y-6 mx-auto">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-200">
                <img
                    src="https://placehold.co/40x40/ADD8E6/333333?text=Logo" // Placeholder for Tyre King logo
                    alt="Tyre King Logo"
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <p className="text-sm text-gray-600">All outlets for</p>
                    <h1 className="text-xl font-bold text-gray-800">Tyre King</h1>
                </div>
            </div>

            {/* Outlets List */}
            <div className="space-y-3">
                {outlets.map((outlet) => (
                    <div
                        key={outlet.id}
                        className={` rounded-lg border overflow-hidden flex flex-col ${outlet.active ? 'border-red-500 ' : 'border-gray-200 bg-white'
                            } ${outlet.highlight ? ' border-green-500' : ''}`}
                    >
                        {outlet.highlight && (
                            <div className="px-4 py-2 flex items-center text-green-700 text-xs font-semibold bg-linear-to-r from-green-300 to-transparent">
                                <Star size={12} className="mr-1 fill-green-700 text-green-700" />
                                Nearest available outlet
                            </div>
                        )}
                        <div className='py-2 px-4'>
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-gray-800">{outlet.name}</h2>
                                <div className="flex items-center text-sm font-semibold text-white bg-green-300 px-2 py-1">
                                    {outlet.rating} <Star size={14} className="ml-1 fill-white text-white" />
                                </div>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                                <Clock size={14} className="mr-1" /> {outlet.time} &bull; {outlet.distance}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* See all outlets */}
            <div className="text-center mt-6">
                <Link href={"/store-filter"} className="text-primary hover:underline flex items-center justify-center mx-auto">
                    See all 127 outlets <ChevronDown size={16} className="ml-2" />
                </Link>
            </div>
        </div>
    );
}
