"use client"

import { Car, ChevronDown } from 'lucide-react';

import Container from '@/components/shared/container/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { HiMiniUserCircle } from 'react-icons/hi2';



import EstimateHeader from '@/components/account/estimate/EstimateHeader';
import Path from '@/components/shared/path/Path';
import { FileText, Flame, Shield } from "lucide-react";

const coverageData = [
    {
        id: 1,
        title: "COMPREHENSIVE COVERAGE",
        description: "Covers you for damage to your vehicle",
        icon: Shield,
        enabled: true,
        coverage: ["If you hit another vehicle or object", "If another vehicle hits you", "Weather, theft and fire"],
        amount: "20000$",
        label: "Sum Insured",
        percentage: "10-20%",
        excess: "Excess",
    },
    {
        id: 2,
        title: "FIRE AND THEFT",
        description: "Covers you for damage to your vehicle",
        icon: Flame,
        enabled: true,
        coverage: ["If you hit another vehicle or object", "If your vehicle catches fire", "Weather, theft and fire"],
        amount: "20000$",
        label: "Sum Insured",
        percentage: "10-20%",
        excess: "Excess",
    },
    {
        id: 3,
        title: "THIRD PARTY",
        description: "Covers damage to other vehicles or property",
        icon: FileText,
        enabled: false,
        coverage: [
            "If you hit another vehicle",
            "If you hit others property",
            "Medical expenses for others injured by you",
        ],
        amount: "$20,000",
        label: "Combined",
        percentage: "10-20%",
        excess: "Excess",
    },
]

const insuranceItems = [
    {
        id: 1,
        title: "Motor Insurance",
        vehicle: "BMW X3 ALJ3405",
        period: "1 Quarter",
        startDate: "1 Jan 2025",
        price: "$580",
        expanded: false,
    },
    {
        id: 2,
        title: "Motor Insurance",
        vehicle: "BMW X3 ALJ3405",
        period: "3 Quarters",
        startDate: "1 Jan 2025",
        price: "$580",
        expanded: true,
    },
    {
        id: 3,
        title: "Motor Insurance",
        vehicle: "BMW X3 ALJ3405",
        duration: "12 months",
        startDate: "1 Jan 2025",
        price: "$580",
        expanded: true,
    },
]

export default function EstimateSection() {
    return (
        <Container className={"block"}>
            <Path>
                Your Account › Your Requests › Requests details › Requests details
            </Path>
            <EstimateHeader />
            <div className="flex flex-col lg:flex-row gap-6 lg:items-start justify-between ">
                <div className=' lg:w-[60%]'>
                    {/* <SectionHeading text={"Items"} /> */}
                    {/* Left Section */}
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center w-fit mx-auto lg:mx-0'>
                            <div className='text-primary flex items-center gap-1'><HiMiniUserCircle className='text-6xl' /> </div>
                            <div className='flex flex-col text-sm'>
                                <span className='border-b border-gray-700 w-fit'>Hallmark Insurance </span>
                                <span>94.5% positive feedback</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                            <SelectField label={'Period'} value={"2 Quarters"} />
                            <DateSelect label="Start date:" value={"1 Jan 2025"} />
                            <DateSelect label="End date:" value={"1 Jan 2025"} />
                        </div>
                    </div>
                    <div className=" flex flex-col items-center lg:items-start mt-4">

                        {/* Insurance Items */}
                        <div className=" space-y-6 w-full">
                            {insuranceItems.map((item) => (
                                <EstimateDetailsCard item={item} coverageData={coverageData} />
                            ))}
                        </div>
                    </div>
                </div>


                <div className="lg:w-[35%] bg-white rounded-lg overflow-hidden ">
                    <div className="bg-red-50 px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className='flex  font-bold gap-2 items-center'>
                                <CiCircleCheck className='text-primary text-xl' />
                                <p className="text-gray text-sm order-2 sm:order-1 font-normal">Hi Joyce, Here’s your estimate</p>
                            </div>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 order-1 sm:order-2">ZK 3, 480</p>
                        </div>
                    </div>

                    <div className="space-y-6 sm:space-y-8 mt-4">
                        <AddressSection title="Shipping address" />
                        <AddressSection title="Billing address" />

                        <div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 pb-2 border-b border-gray-200">
                                Payment Info
                            </h3>
                            <div className="space-y-2 sm:space-y-3">
                                <PaymentRow label="1 Item" value="ZK 4,280" />
                                <PaymentRow label="Item Discount" value="ZK 600" />
                                <PaymentRow label="Shipping" value="ZK 100" />
                                <div className="pt-2 sm:pt-3 border-t border-gray-200">
                                    <PaymentRow label="Order Total" value="ZK 3, 480" bold />
                                </div>
                            </div>
                        </div>

                        <Link href={"/submit-estimate"}>
                            <Button className="w-full bg-primary hover:bg-primary text-white py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg touch-manipulation mb-4">
                                Submit
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
}

// Helper Components
const SelectField = ({ label, value }) => (
    <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600 whitespace-nowrap">{label}</span>
        <div className="relative">
            <select className="appearance-none bg-white border-gray-300 rounded-md px-3 py-1.5 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-0 focus:border-none">
                <option>{value}</option>
                <option>2 Quarters</option>
                <option>4 Quarters</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
    </div>
);


const DateSelect = ({ label, value, setValue }) => (
    <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600 whitespace-nowrap">{label}</span>
        <div className="relative">
            <input
                type="date"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="appearance-none bg-white border-none rounded-md px-3 py-1.5 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-0 focus:border-gray-400 cursor-pointer"
            />
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
    </div>
);

const AddressSection = ({ title }) => (
    <div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 pb-2 border-b border-gray-200">{title}</h3>
        <div className="space-y-1 text-sm sm:text-base text-gray-600">
            <p className="font-medium text-gray-900">Joyce Smith</p>
            <p>15 Blue Stare Road</p>
            <p>23 CA New York City</p>
            <p>NY345678</p>
        </div>
    </div>
);

const PaymentRow = ({ label, value, bold }) => (
    <div className="flex justify-between items-center text-sm sm:text-base text-gray-600">
        <span className={bold ? 'text-base sm:text-lg font-semibold text-gray-900' : ''}>{label}</span>
        <span className={bold ? 'text-lg sm:text-xl font-bold text-gray-900' : 'font-medium'}>{value}</span>
    </div>
);


function EstimateDetailsCard({ item, coverageData }) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div key={item.id} className="space-y-4 w-full border lg:border-0 p-6 lg:p-0 rounded-xl">
            {/* Estimate Card */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full rounded-lg transition-colors cursor-pointer"
            >
                <div className="w-full">
                    <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 pr-0 sm:pr-3">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 bg-red-50 rounded-lg flex items-center justify-center border-gray-200">
                            <Car className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                        </div>

                        {/* Item Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-col lg:flex-row lg:items-center sm:justify-between gap-3 sm:gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 text-center lg:text-left">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 mb-4 text-center lg:text-left">
                                        {item.vehicle}
                                    </p>
                                </div>

                                {/* Price & Toggle */}
                                <div className="flex flex-col  gap-2 flex-shrink-0 lg:pr-4">
                                    <span className="font-bold">{item.price}</span>
                                    <button className="text-primary hover:text-gray-700 transition-colors duration-200 mx-auto lg:ml-auto block mt-2 p-2 bg-secondary rounded-full">
                                        <svg
                                            className={`h-5 w-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
            {
                isExpanded && <div className=' mx-auto space-y-6 border border-gray-300 p-6 px-10 rounded-xl'>
                    <EstimateDetailsCollapseCard isOpen={isExpanded} setIsOpen={setIsExpanded} />
                    <EstimateDetailsCollapseCard isOpen={isExpanded} setIsOpen={setIsExpanded} />
                    <EstimateDetailsCollapseCard isOpen={isExpanded} setIsOpen={setIsExpanded} />
                    <EstimateDetailsCollapseCard isOpen={isExpanded} setIsOpen={setIsExpanded} />
                </div>
            }
        </div>
    )
}


const EstimateDetailsCollapseCard = ({ isOpen, setIsOpen }) => {
    const [isCoverageEnabled, setIsCoverageEnabled] = useState(true);

    return (
        <div className="bg-white border-b last:border-b-0 border-gray-200 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">

                {/* Left section: Icon and text */}
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 lg:items-start md:items-center space-x-4">
                    {/* The icon container */}
                    <div className="flex-shrink-0 p-3 bg-red-100 rounded-lg">
                        {/* Inline SVG for the shield icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-600">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                        </svg>
                    </div>

                    {/* Text content */}
                    <div className="flex-1">
                        <h2 className="text-sm font-bold text-gray-800">COMPREHENSIVE COVERAGE</h2>
                        <p className="text-gray-600 text-sm mt-1">Covers you for damage to your vehicle</p>
                    </div>
                </div>

                {/* Right section: Toggle switch */}
                <div className="mt-4 md:mt-0 mx-auto lg:ml-auto lg:mr-0">
                    <div
                        className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isCoverageEnabled ? 'bg-red-500' : 'bg-gray-300'}`}
                        onClick={() => setIsCoverageEnabled(!isCoverageEnabled)}
                    >
                        <div
                            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${isCoverageEnabled ? 'translate-x-6' : 'translate-x-0'}`}
                        ></div>
                    </div>
                </div>
            </div>

            {/* Bullet points section */}
            <div className="mt-6 lg:ml-14">
                <ul className="list-none space-y-2 text-gray-600">
                    <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-red-500 mr-2 flex-shrink-0"></span>
                        <span>If you hit another vehicle or object</span>
                    </li>
                    <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-red-500 mr-2 flex-shrink-0"></span>
                        <span>If another vehicle hits you</span>
                    </li>
                    <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-red-500 mr-2 flex-shrink-0"></span>
                        <span>Weather, theft and fire</span>
                    </li>
                </ul>
            </div>

            {/* Pricing details section */}
            <div className="mt-6 pt-4  grid lg:grid-cols-2 gap-4">
                {/* Sum Insured */}
                <div className='flex gap-4 items-center'>
                    <span className="text-red-500 bg-secondary py-1 px-4 rounded-lg font-bold text-xl">20000$</span>
                    <p className="text-sm mt-1 text-gray-600 font-semibold">Sum Insured</p>
                </div>
                {/* Divider */}
                {/* Excess */}
                <div className='flex gap-4 items-center'>
                    <span className="text-red-500 bg-secondary py-1 px-4 rounded-lg font-bold text-xl">10-20%</span>
                    <p className="text-sm mt-1 text-gray-600 font-semibold">Excess</p>
                </div>
            </div>
        </div>
    );
};