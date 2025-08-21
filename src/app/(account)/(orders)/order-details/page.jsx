"use client"

import SubTItle from '@/components/account/SubTItle'
import VehicleCardWithBadge from '@/components/account/VehicleCardWithBadge'
import DocumentsModalContents from '@/components/modal-contents/order/DocumentsModalContents'
import InspectionModalContents from '@/components/modal-contents/order/InspectionModalContents'
import JobDetailsModalContents from '@/components/modal-contents/order/JobDetailsModalContents'
import TrackJobModalContents from '@/components/modal-contents/order/TrackJobModalContents'
import Container from '@/components/shared/container/Container'
import Modal from '@/components/shared/modal/Modal'
import { Car, Check, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FaCircleCheck } from 'react-icons/fa6'
import { GoShieldCheck } from 'react-icons/go'

const insuranceItems = [
    {
        id: 1,
        name: "Motor Insurance",
        quantity: 1,
        icon: <Car className="w-6 h-6 text-primary" />,
        hasNotification: true,
    },
    {
        id: 2,
        name: "Plant Insurance",
        quantity: 2,
        icon: <Car className="w-6 h-6 text-primary" />,
        hasNotification: true,
    },
    {
        id: 3,
        name: "Special Insurance",
        quantity: 2,
        icon: <Car className="w-6 h-6 text-primary" />,
        hasNotification: true,
    },
]

export default function page() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentModal, setCurrentModal] = useState("documents");
    const [expandedItems, setExpandedItems] = useState([1]) // Start with first item expanded
    const [isDeliveredOpen, setIsDeliveredOpen] = useState(true)

    const statusItems = [
        {
            id: 1,
            title: "Approved",
            date: "Updated January 11, 2025",
            description: "This claim documents will soon be available",
            status: "completed",
            isExpanded: true,
        },
        {
            id: 2,
            title: "Confirmed",
            date: "Updated December 31, 2024",
            description: null,
            status: "current",
            isExpanded: false,
        },
    ]
    const toggleExpanded = (itemId) => {
        setExpandedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
    }


    return (
        <Container className={"block lg:mb-28"}>
            <OrderHeader />


            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='w-full lg:w-[70%]'>
                    <div className="relative border-b">
                        {statusItems.map((item, index) => (
                            <div key={item.id} className="relative pb-3">
                                {/* Timeline Line */}
                                {index < statusItems.length - 1 && <div className="absolute left-4 top-8 w-0.5 h-[calc(100%-16px)] border-l border-dashed border"></div>}

                                {/* Status Item */}
                                <div className="flex items-start space-x-4 pb">
                                    {/* Status Icon */}
                                    <div className="flex-shrink-0 mt-1">
                                        {item.status === "completed" ? (
                                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                                <Check className="w-5 h-5 text-primary" />
                                            </div>
                                        ) : (
                                            <div className='mt-2 w-8 h-8'>
                                                <div className="w-4 h-4 bg-primary rounded-sm mx-auto"></div>
                                            </div>
                                        )}

                                    </div>

                                    {/* Status Content */}
                                    <div className="flex-1 min-w-0">
                                        <div
                                            className="flex items-center justify-between cursor-pointer"
                                            onClick={() => toggleExpanded(item.id)}
                                        >
                                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                            {
                                                index !== 1 && <div className='p-2 bg-secondary rounded-full'>
                                                    <ChevronDown
                                                        className={`w-5 h-5 text-primary transition-transform duration-200 ${expandedItems.includes(item.id) ? "rotate-180" : ""
                                                            }`}
                                                    />
                                                </div>
                                            }
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                                        {expandedItems.includes(item.id) && item.description && (
                                            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='space-y-20 lg:w-full'>
                        <div>
                            <div className='flex flex-col lg:flex-row gap-4 justify-between items-start border-t pt-4'>
                                <div className='space-y-4'>
                                    {insuranceItems.map((item) => (
                                        <VehicleCardWithBadge key={item.id} item={item} hasPrice={true} hasBadge={false} />
                                    ))}
                                </div>
                                <div className='flex flex-col gap-4 w-full lg:w-fit'>
                                    <button
                                        onClick={() => {
                                            setIsModalOpen(true)
                                            setCurrentModal("documents")
                                        }}
                                        // onClick={handleLeaveFeedback}
                                        className="lg:w-[300px] bg-primary hover:bg-primary text-white font-semibold py-2 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        View policy
                                    </button>
                                    <button
                                        // onClick={handleLeaveFeedback}
                                        className="lg:w-[300px] bg-transparent hover:bg-transparent text-primary border border-primary font-semibold py-2 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        View documents
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between items-center' onClick={() => setIsDeliveredOpen(!isDeliveredOpen)}>
                                <div className='flex gap-4'>
                                    <AiOutlineCheckCircle className='text-primary text-xl mt-2' />
                                    <SubTItle text={"Delivered"} subText={"11 Nov, 2024"} />
                                </div>
                                <div className='p-2 bg-secondary rounded-full'>
                                    <ChevronDown
                                        className={`w-5 h-5 text-primary transition-transform duration-200 ${isDeliveredOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </div>
                            </div>
                            {
                                isDeliveredOpen && (
                                    <div className='flex flex-col lg:flex-row gap-4 justify-between items-start border-t pt-4'>
                                        <div className='space-y-4'>
                                            {insuranceItems.map((item) => (
                                                <VehicleCardWithBadge key={item.id} item={item} hasPrice={true} hasBadge={false} />
                                            ))}
                                        </div>
                                        <div className='flex flex-col gap-4 w-full lg:w-auto'>
                                            <button
                                                // onClick={handleLeaveFeedback}
                                                onClick={() => {
                                                    setIsModalOpen(true)
                                                    setCurrentModal("job-track")
                                                }}
                                                className="lg:w-[300px] bg-primary hover:bg-primary text-white font-semibold py-2 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                                            >
                                                View job
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            <div className='flex gap-4'>
                                <GoShieldCheck className='text-primary text-xl mt-2' />
                                <SubTItle text={"Confirmed"} subText={"11 Nov, 2024"} />
                            </div>
                            <div className='flex justify-between items-start border-t pt-4'>
                                <div className='space-y-4'>
                                    {insuranceItems.map((item) => (
                                        <VehicleCardWithBadge key={item.id} item={item} hasPrice={true} hasBadge={false} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CheckoutSummary />
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto pb-10"}>
                {
                    currentModal === "documents" && <DocumentsModalContents />
                }
                {
                    currentModal === "job-track" && <TrackJobModalContents setCurrentModal={setCurrentModal} />
                }
                {
                    currentModal === "inspection" && <InspectionModalContents />
                }

                {
                    currentModal === "repair" && <JobDetailsModalContents />
                }
            </Modal>
        </Container>
    )
}





import { HiMiniUserCircle } from "react-icons/hi2"



function OrderHeader() {
    return (
        <div className="w-full">
            {/* Left side - Request Information */}
            <div className="space-y-2 flex flex-col md:flex-row justify-between border-b border-gray-200 mb-4">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center md:text-left">Order details</h1>
                {/* Right side - Action Buttons */}
                <div className="flex flex-col items-center md:flex-row gap-2 sm:gap-3 w-full sm:w-auto mb-4 lg:mb-0 text-sm text-gray-black">
                    <span>Contact seller</span>
                    <span>Leave feedback</span>
                    <span>Archive order</span>

                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-1 sm:gap-4 text-sm text-gray-600">
                <span className="bg-secondary px-3 py-1 rounded-sm font-medium">Request #1001</span>
                <span>Requested on Oct 30, 2025</span>
                <span className='text-primary flex items-center gap-1'><HiMiniUserCircle /> <span className='underline'>Hallmark Insurance </span></span>
            </div>
        </div>
    )
}




function CheckoutSummary() {
    return (
        <div className="space-y-8 mt-6 lg:w-[25%] lg:mt-10">
            {/* Delivery Address */}
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Delivery Address</h2>
                <div className="space-y-1 text-gray-700">
                    <p className="font-medium">Joyce Smith</p>
                    <p className="text-sm">15 Blue Stare Road</p>
                    <p className="text-sm">23 CA New York City</p>
                    <p className="text-sm">NY345678</p>
                </div>
            </div>

            {/* Payment Info */}
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Payment Info</h2>

                {/* Order Breakdown */}
                <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-gray-700">
                        <span>1 Item</span>
                        <span>ZK 4,280</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <span>Item Discount</span>
                        <span>ZK 600</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <span>Shipping</span>
                        <span>ZK 100</span>
                    </div>
                </div>

                {/* Order Total */}
                <div className="flex justify-between font-bold text-gray-900 text-lg pt-3 border-t border-gray-200 mb-6">
                    <span>Order Total</span>
                    <span>ZK 3,480</span>
                </div>

                {/* Payment Method */}
                <div className="rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            {/* Visa Logo */}
                            <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">VISA</span>
                            </div>

                            {/* Card Info */}
                            <div>
                                <p className="text-sm text-gray-600">Ending in 4617</p>
                                <p className="text-sm text-gray-600">Miller Musa</p>
                            </div>
                        </div>

                        {/* Converted Amount */}
                        <div className="text-right">
                            <p className="font-semibold text-gray-900">GBP 21.81</p>
                            <p className="text-xs text-gray-500">at 1.61 GBP</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

