"use client";

import carImg from "@/assets/images/pngwing.com (3).png";
import Container from '@/components/shared/container/Container';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star } from "lucide-react";
import Image from 'next/image';
import { useState } from 'react';

const allProducts = [
    ...Array(9)
        .fill(null)
        .map((_, index) => ({
            id: 7 + index,
            name: "Lorem Ipsum is simply dummy text",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: "/placeholder.svg?height=200&width=200",
            price: "300000$",
            originalPrice: null,
            salePercentage: "25% Sale",
            rating: 4.5,
            reviews: 1402,
            isBrandNew: true,
            hasFreeShipping: true,
        })),
]

export default function page() {
    return (
        <Container>
            <div className="space-y-6">
                <WatchListHeader />
                <div className='flex flex-col-reverse lg:flex-row justify-between items-start'>
                    <WatchListTopCard />
                    <MoreActionsDropdown />
                </div>
                <div>
                    <div className="flex items-center justify-between mb-4 border-b pb-4">
                        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">My Watchlist</h1>
                    </div>
                    <WatchListFilter />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {
                            allProducts.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                        }
                    </div>
                    <Pagination totalPage={10} currentPage={1} setCurrentPage={() => { }} />
                </div>
            </div>
        </Container>
    )
}


const WatchListHeader = () => {
    return (
        <div className="font-sans text-gray-800">
            <header className="">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">My Watchlist</h1>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                        Back to shopping
                    </a>
                </div>
                <hr className="border-t border-gray-300 mb-6" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Category Tabs */}
                    <nav className="flex flex-wrap space-x-4 sm:space-x-6 text-xs sm:text-base">
                        <button className="py-2 px-3 rounded-md text-gray-700 font-medium transition-colors duration-200">
                            All categories(2)
                        </button>
                        <button className="py-2 px-3 rounded-md transition-colors duration-200">
                            Car parts & Accessories(1)
                        </button>
                        <button className="py-2 px-3 rounded-md transition-colors duration-200">
                            Seller(1)
                        </button>
                    </nav>

                    {/* Search Input */}
                    <div className="relative w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search your watchlist"
                            className="w-full pl-24 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 min-w-[350px]"
                        />
                        <div className="absolute inset-y-0 left-16 flex items-center pointer-events-none">
                            {/* Search Icon (SVG for better control) */}
                            <svg
                                className="h-5 w-5 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};


const WatchListTopCard = () => {
    return (
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">

            {/* Left Section - Image */}
            <div className="relative flex-shrink-0 w-full lg:w-1/2 bg-pink-50 flex items-center justify-center p-4">
                {/* "422 Sold" Badge */}
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-md">
                    422 Sold
                </span>
                {/* Heart Icon */}
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-red-500 hover:text-primary transition-colors duration-200">
                    <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                {/* Product Image */}
                <Image
                    width={400}
                    height={300}
                    src={carImg}
                    alt="Product Image"
                    className="w-full h-auto max-w-xs lg:max-w-full object-contain rounded-md"
                // onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/FEE2E2/B91C1C?text=Image+Error"; }}
                />
            </div>

            {/* Right Section - Details */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                {/* Top Badges */}
                <div className="flex space-x-2 mb-4">
                    <span className="border border-gray-200 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-sm">
                        Brand New
                    </span>
                    <span className="border border-gray-200 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-sm">
                        Free Shipping
                    </span>
                </div>

                {/* Product Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Lorem Ipsum is simply dummy text
                </h2>

                {/* Price and Rating */}
                <div className="flex items-center mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900 mr-4">
                        300000$
                    </span>
                    <div className="flex items-center border border-gray-200 rounded-sm px-3 py-1 text-sm">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="font-semibold text-gray-800">4.5</span>
                        <span className="text-gray-500 ml-1">(365)</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing
                </p>

                {/* Buy Now Button */}
                <button className="bg-primary text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

const MoreActionsDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex items-center space-x-6 mb-8">
            <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
                View product
            </button>
            <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
                Delete
            </button>

            {/* More Actions Dropdown */}
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 focus:outline-none focus:ring-opacity-50"
                >
                    More Actions
                </button>

                {isOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10">
                        <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                            View seller's other items
                        </button>
                        <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                            Leave feedback
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import Pagination from "@/components/shared/pagination/Pagination";

function WatchListFilter() {
    return (
        <div className="lg:w-[60%]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4">
                {/* Filter Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full sm:w-auto flex-1">
                    {/* Vehicle Select */}
                    <Select>
                        <SelectTrigger className="w-full bg-secondary text-sm">
                            <SelectValue placeholder="Any Vehicle" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="any">All Makes</SelectItem>
                            <SelectItem value="audi">Audi</SelectItem>
                            <SelectItem value="bmw">BMW</SelectItem>
                            <SelectItem value="mercedes">Mercedes</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Year/Model Select */}
                    <Select>
                        <SelectTrigger className="w-full bg-secondary text-sm">
                            <SelectValue placeholder="2022 BMW X3" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="x3-2022">2022 BMW X3</SelectItem>
                            <SelectItem value="x3-2021">2021 BMW X3</SelectItem>
                            <SelectItem value="x3-2020">2020 BMW X3</SelectItem>
                        </SelectContent>
                    </Select>
                    {/* Year/Model Select */}
                    <Select>
                        <SelectTrigger className="w-full bg-secondary text-sm">
                            <SelectValue placeholder="2022 BMW X3" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="x3-2022">2022 BMW X3</SelectItem>
                            <SelectItem value="x3-2021">2021 BMW X3</SelectItem>
                            <SelectItem value="x3-2020">2020 BMW X3</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}

const ProductCard = ({ product }) => (
    <Card className="group hover:shadow-lg transition-shadow duration-300 relative py-0">
        <CardContent className="p-4">
            {/* Sale Badge */}
            {product.salePercentage && (
                <div className="absolute top-7 left-6 bg-primary text-white px-2 py-1 text-xs rounded z-10">
                    {product.salePercentage}
                </div>
            )}

            {/* Heart Icon */}
            <Button size="sm" variant="outline" className="absolute top-6 right-6 p-2 bg-white/80 hover:bg-white z-10">
                <Heart className="h-4 w-4" />
            </Button>

            {/* Product Image */}
            <div className="relative mb-4 bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-800 rounded-full relative">
                    {/* Brake disc representation */}
                    <div className="absolute inset-2 border-4 border-gray-600 rounded-full"></div>
                    <div className="absolute inset-6 border-2 border-gray-500 rounded-full"></div>
                    {/* Brake caliper */}
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-8 h-12 bg-primary rounded"></div>
                </div>
            </div>

            {/* Product Badges */}
            <div className="flex items-center justify-between mb-2 text-xs">
                {product.isBrandNew && (
                    <div className="flex items-center text-primary">
                        <div className="w-3 h-3 bg-primary rounded-full mr-1"></div>
                        Brand New
                    </div>
                )}
                {product.hasFreeShipping && (
                    <div className="flex items-center text-primary">
                        <div className="w-3 h-3 bg-primary rounded-full mr-1"></div>
                        Free Shipping
                    </div>
                )}
            </div>

            {/* Rating */}
            <div className="flex items-center mb-2">
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                        />
                    ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
            </div>

            {/* Product Name */}
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

            {/* Price */}
            <div className="text-lg font-bold text-gray-900 mb-2">{product.price}</div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">{product.description}</p>

            {/* View Product Button */}
            <Button className="w-full bg-primary hover:bg-primary text-white">View Product</Button>
        </CardContent>
    </Card>
)


