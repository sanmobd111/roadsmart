"use client"

import BackButton from '@/components/shared/back-button/BackButton';
import BackGroundColorDiv from '@/components/shared/background-color-div/BackGroundColorDiv';
import FileUpload from '@/components/shared/file-upload/FileUpload';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { RiUserReceivedLine } from "react-icons/ri";

const App = () => {
    const [isClaimSummaryOpen, setIsClaimSummaryOpen] = useState(true); // State for the dropdown
    const router = useRouter()
    // Reusable component for the detail rows
    const DetailItem = ({ label, value }) => (
        <div>
            <span className="font-medium text-gray-500 mr-1">{label}</span>
            <span className="text-gray">{value}</span>
        </div>
    );

    // Reusable component for the upload boxes
    const UploadBox = () => (
        <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-red-300 rounded-lg h-24 w-full">
            {/* Cloud Upload Icon */}
            <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
            </svg>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="bg-white rounded-lg max-w-4xl w-full mx-auto overflow-hidden">
                {/* Page Header */}
                <div className="p-6 sm:p-8 text-center border-gray-200">
                    {/* <h1 className="text-2xl sm:text-3xl font-semibold text-gray"></h1> */}
                    <h1 className="relative pl-10 lg:pl-0 text-2xl lg:text-4xl font-bold text-center mb-4 lg:mb-8 pb-4">
                        Your Claim Request
                        <BackButton onclick={() => {
                            router.back()
                        }} className={"top-0"} />

                    </h1>
                </div>


                {/* Single Vehicle Accident Claim Section */}
                <div className="mb-4 lg:mb-6 border-gray-200">
                    <div className="flex flex-col gap-4 lg:flex-row items-center justify-between">
                        <div className="flex items-center gap-4">
                            <BackGroundColorDiv className={"p-4 aspect-square"}>
                                <Image src={"/icon/car-icon.svg"} alt={"car-icon"} width={40} height={40} />
                            </BackGroundColorDiv>
                            <div>
                                <p className="text-lg font-medium text-gray-800">Single Vehicle Accident Claim</p>
                                <p className="text-sm text-gray-500">Incident #12098ZM</p>
                            </div>
                        </div>
                        <div>
                            {/* Dropdown Arrow */}
                            <button
                                onClick={() => setIsClaimSummaryOpen(!isClaimSummaryOpen)}
                                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 mx-auto lg:ml-auto block mt-2"
                            >
                                <svg
                                    className={`h-5 w-5 transform transition-transform duration-200 ${isClaimSummaryOpen ? 'rotate-180' : 'rotate-0'}`}
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
                <div className='border border-gray-200 rounded-lg'>

                    {/* Toyota Hilux Section */}
                    {isClaimSummaryOpen && (
                        <div className="p-4 sm:p-6 border-b border-gray-200">
                            <div className="flex items-center mb-4">
                                <BackGroundColorDiv className={"p-4 aspect-square mr-4"}>
                                    <Image src={"/icon/car-icon.svg"} alt={"car-icon"} width={40} height={40} />
                                </BackGroundColorDiv>
                                <div>
                                    <p className="text-lg font-medium text-gray-800">Toyota Hilux ALC1809</p>
                                    <p className="text-sm text-gray-500">Own damage</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 text-sm mb-6  font-bold">
                                <DetailItem label="Insurance Status" value="Valid" className={"!text-gray"} />
                                <DetailItem label="Insurance Cover" value="Comprehensive" />
                                <DetailItem label="Insurer" value="Hollmark" />
                                <DetailItem label="Driver Status" value="Licenced" />
                                <DetailItem label="Driver name" value="Mark Phiri" />
                                <DetailItem label="License Status" value="Valid" />
                                <DetailItem label="At fault?" value="No" />
                                <DetailItem label="Damage" value="Rear fender" />
                            </div>
                            <div className="grid grid-cols-5 gap-3 lg:w-[40%]">
                                {[...Array(5)].map((_, index) => (
                                    <FileUpload />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Mwansa Biko Section */}
                    {isClaimSummaryOpen && (
                        <div className="p-4 sm:p-6 border-b border-gray-200">
                            <div className=" mb-4">
                                <div className="flex items-center">
                                    {/* Person Icon */}
                                    <RiUserReceivedLine className='h-10 w-10 text-primary mr-3' />
                                    <div>
                                        <p className="text-lg font-medium text-gray-800">Mwansa Biko</p>
                                        <p className="text-sm text-gray-500">Third Party Bodily Injury</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 text-sm font-medium mt-4 w-fit ml-auto">
                                    <button className="text-gray transition-colors duration-200 underline">
                                        Edit
                                    </button>
                                    <button className="text-gray transition-colors duration-200 underline">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 lg:mt-16 lg:w-fit mx-auto">
                    <Link href={"/claim?step=1"} className="px-6 py-2 border border-red-400 text-red-600 font-semibold rounded-md shadow-sm hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                        +Add another claim
                    </Link>
                    <button className="bg-primary text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;