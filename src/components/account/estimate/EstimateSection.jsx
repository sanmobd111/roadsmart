"use client"

import { Car, ChevronDown, ChevronUp } from 'lucide-react';

import Container from '@/components/shared/container/Container';
import Modal from '@/components/shared/modal/Modal';
import Path from '@/components/shared/path/Path';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { FaRegBell } from "react-icons/fa";
import { HiMiniUserCircle } from 'react-icons/hi2';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import StatusHeader from '../request/status-header/StatusHeader';
import EstimateHeader from './EstimateHeader';

export default function EstimateSection({
    coverageData,
    insuranceItems,
    status,
}) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <Container className={"block"}>
            <Path>
                Your Account › Your Requests › Requests details › Compare Estimates› Estimates details
            </Path>
            <EstimateHeader />
            <div>
                {
                    (status == "accepted" || status == "confirm") && <StatusHeader title={"You’ve accepted this estimate"} subText={"You will be notified as soon as your estimate changes status"} Icon={FaRegBell} hasBtn btnText={"Pay"} path={"/checkout"} />
                }
                {
                    status == "confirm" && <StatusHeader title={"Your booking is confirmed "} subText={"You’re scheduled for Friday 29, August 2025"} Icon={IoIosCheckmarkCircleOutline} hasBtn btnText={"View details"} btnClick={() => setIsModalOpen(true)} />
                }
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:items-start justify-between ">
                <div className=' lg:w-[60%]'>
                    {/* <SectionHeading text={"Items"} /> */}
                    {/* Left Section */}
                    <div className='flex gap-2 items-center w-fit mx-auto lg:mx-0'>
                        <div className='text-primary flex items-center gap-1'><HiMiniUserCircle className='text-6xl' /> </div>
                        <div className='flex flex-col text-sm'>
                            <span className='border-b border-gray-700 w-fit'>Hallmark Insurance </span>
                            <span>94.5% positive feedback</span>
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

                {/* Right Section (Summary) */}
                {
                    status === "not-accepted" ? (<div className="lg:w-[35%] bg-white rounded-lg overflow-hidden">
                        <div className="bg-red-50 px-4 sm:px-6 py-3 sm:py-4">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <p className="text-gray-600 text-sm sm:text-base order-2 sm:order-1">Hi Joyce, Here's your estimate</p>
                                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 order-1 sm:order-2">ZK 3, 480</p>
                            </div>
                        </div>

                        <div className=" space-y-6 sm:space-y-8 mt-4">
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

                            <Link href={"/accept-estimate"}>
                                <Button className="w-full bg-primary hover:bg-primary text-white py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg touch-manipulation">
                                    Accept
                                </Button>
                            </Link>
                        </div>
                    </div>) :
                        (<div className="lg:w-[35%] bg-white rounded-lg overflow-hidden">
                            <div className="bg-red-50 px-4 sm:px-6 py-3 sm:py-4">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <div className='flex  font-bold gap-2 items-center'>
                                        <CiCircleCheck className='text-primary text-xl' />
                                        <p className="text-gray text-sm order-2 sm:order-1 font-normal">Hi Joyce, Here’s your estimate</p>
                                    </div>
                                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 order-1 sm:order-2">ZK 3, 480</p>
                                </div>
                            </div>

                            <div className="mt-4 space-y-6 sm:space-y-8">
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

                                <Link href={"/checkout"}>
                                    <Button className="w-full bg-primary hover:bg-primary text-white py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg touch-manipulation mb-4">
                                        Pay
                                    </Button>
                                </Link>
                                <Link href={"/date-and-time"}>
                                    <Button className="w-full  bg-white hover:bg-white border border-primary text-primary py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg touch-manipulation">
                                        Book service
                                    </Button>
                                </Link>
                            </div>
                        </div>)
                }
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                <BookAppointmentModalContents />
            </Modal>
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

const ToggleSwitch = ({ enabled, onClick }) => {
    const [checked, setChecked] = useState(false);
    return (
        <button
            onClick={() => setChecked(!checked)}
            className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${checked ? 'bg-primary' : 'bg-gray-200'
                }`}
            role="switch"
            aria-checked={enabled}
        >
            <span
                className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
            />
        </button>
    )
};

const InfoTag = ({ value, label }) => (
    <div className="flex items-center gap-2">
        <span className="font-semibold text-primary bg-secondary px-2 py-0.5 rounded-lg">{value}</span>
        <span className="text-gray-600">{label}</span>
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
    const [checked, setChecked] = useState(false);
    return (
        <div key={item.id} className="space-y-4 w-full border lg:border-0 p-6 lg:p-0 rounded-xl">
            {/* Estimate Card */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full rounded-lg transition-colors cursor-pointer"
            >
                <div className="w-full">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4 pr-0 sm:pr-3">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 bg-red-50 rounded-lg flex items-center justify-center border-gray-200">
                            <Car className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                        </div>

                        {/* Item Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-col lg:flex-row lg:items-start sm:justify-between gap-3 sm:gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 text-center lg:text-left">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 mb-4 text-center lg:text-left">
                                        {item.vehicle}
                                    </p>

                                    {/* Period & Start Date */}
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                                        <SelectField label={item.period ? 'Period:' : 'Duration:'} value={item.period || item.duration} />
                                        <SelectField label="Start date:" value={item.startDate} />
                                    </div>
                                </div>

                                {/* Price & Toggle */}
                                <div className="flex flex-col items-end gap-2 flex-shrink-0 lg:pr-4">
                                    <span className="font-bold">{item.price}</span>
                                    <button
                                        className="w-8 h-8 rounded-full flex items-center justify-center transition-colors p-2 bg-secondary"
                                    >
                                        {isExpanded ? (
                                            <ChevronUp className="w-4 h-4 text-primary" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 text-primary" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </button>

            {/* Coverage Details */}
            {isExpanded && (
                <div className="space-y-4">
                    {coverageData.map((coverage) => {
                        const IconComponent = coverage.icon;
                        return (
                            <div key={coverage.id} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-50 rounded-lg flex items-center justify-center">
                                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{coverage.title}</h3>
                                                <p className="text-xs sm:text-sm text-gray-600">{coverage.description}</p>
                                            </div>

                                            <ToggleSwitch />
                                        </div>

                                        <div className="space-y-2 mb-4">
                                            {coverage.coverage.map((item, index) => (
                                                <div key={index} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-xs sm:text-sm text-gray-600">{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                                            <InfoTag value={coverage.amount} label={coverage.label} />
                                            <InfoTag value={coverage.percentage} label={coverage.excess} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    )
}



function BookAppointmentModalContents() {
    return (
        <div className="w-full lg:w-3xl space-y-6">
            {/* Header */}
            <div className='mb-6 pb-4 border-b border-gray-200'>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-800 ">
                    Booking details
                </h1>
                <p className='text-sm text-gray-600 mb-4'>Your booking reference code is 2Z9456G6</p>

            </div>

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
