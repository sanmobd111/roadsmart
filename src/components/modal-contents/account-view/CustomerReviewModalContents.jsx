import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { User, Star } from 'lucide-react'; // For user and star icons
import carImg from "@/assets/images/pngwing.com (3).png";
import Image from 'next/image';

export default function CustomerReviewModalContents() {
    const productRatingBreakdown = [
        { stars: "5 star", percentage: 65 },
        { stars: "4 star", percentage: 45 },
        { stars: "3 star", percentage: 25 },
        { stars: "2 star", percentage: 15 },
        { stars: "1 star", percentage: 5 },
    ];

    return (
        <div className="text-left">
            <div className="w-full max-w-3xl space-y-8">
                {/* Customer Review Section */}
                <div className="mb-8 pb-4 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Customer Review</h1>

                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                            <User size={32} />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold text-gray-800 mb-1">Lorem Ipsum</h2>
                            <div className="flex items-center mb-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} size={16} className="fill-red-500 text-red-500" />
                                ))}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p className="text-sm text-gray-600 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p className="text-sm text-gray-800 font-medium mb-4">Satisfied with this product</p>
                            <div className="flex space-x-3 text-sm">
                                <Button variant="outline" className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200">
                                    Helpful
                                </Button>
                                <Button variant="link" className="px-0 py-2 text-gray-700 hover:text-blue-600 h-auto">
                                    Report
                                </Button>
                                <Button variant="link" className="px-0 py-2 text-gray-700 hover:text-blue-600 h-auto">
                                    Permalink
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Details Section */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Product Details</h1>

                    <div className="flex items-start space-x-4 mb-8">
                        <Image
                            width={200}
                            height={200}
                            src={carImg} // Placeholder image for brake
                            alt="Product Image"
                            className="w-24 h-auto object-cover rounded-md flex-shrink-0"
                        />
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold text-gray-800 mb-1">Lorem Ipsum is simply dummy text</h2>
                            <p className="text-sm text-gray-600 mb-2">By: Lorem Ipsum</p>
                            <div className="flex items-center mb-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} size={16} className="fill-red-500 text-red-500" />
                                ))}
                                <span className="text-sm text-gray-500 ml-2">(4.5)</span>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">53 global ratings</p>

                            {/* Rating Breakdown Bars */}
                            <div className="space-y-2">
                                {productRatingBreakdown.map((item, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <span className="text-sm text-gray-700 w-16 flex-shrink-0">{item.stars}</span>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div
                                                className="bg-red-500 h-2.5 rounded-full"
                                                style={{ width: `${item.percentage}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm text-gray-700 w-8 text-right">{item.percentage}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* See all buying options Button */}
                    <div className="flex justify-start w-fit ml-auto">
                        <Button
                            className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                        >
                            See all buying options
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
