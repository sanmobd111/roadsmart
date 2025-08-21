"use client";

import carImg from "@/assets/images/pngwing.com (3).png";
import VehicleCollapseCard from "@/components/account/request/VehicleCollapseCard";
import VehicleCardWithBadge from "@/components/account/VehicleCardWithBadge";
import CancelRequestModalContents from "@/components/modal-contents/request/CancelRequestModalContents";
import Modal from "@/components/shared/modal/Modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Check, Factory, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



const tabs = ["All Requests", "Estimates", "Claims", "Cancelled", "Archived", "Active", "Inactive"]
const estimates = [
    {
        id: 1,
        carName: "Mahindra XUV 700",
        rating: 4.97,
        expiryDate: "29 June, 2025",
        price: 100,
        image: "/placeholder.svg?height=80&width=120",
    },
    {
        id: 2,
        carName: "Mahindra XUV 700",
        rating: 4.97,
        expiryDate: "29 June, 2025",
        price: 100,
        image: "/placeholder.svg?height=80&width=120",
    },
    {
        id: 3,
        carName: "Mahindra XUV 700",
        rating: 4.97,
        expiryDate: "29 June, 2025",
        price: 100,
        image: "/placeholder.svg?height=80&width=120",
    },
    {
        id: 4,
        carName: "Mahindra XUV 700",
        rating: 4.97,
        expiryDate: "29 June, 2025",
        price: 100,
        image: "/placeholder.svg?height=80&width=120",
    },
]

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
        icon: <Factory className="w-6 h-6 text-primary" />,
        hasNotification: true,
    },
    {
        id: 3,
        name: "Special Insurance",
        quantity: 2,
        icon: <Shield className="w-6 h-6 text-primary" />,
        hasNotification: true,
    },
]

export default function page() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const moreActions = [
        { title: "Cancel Request", handleOnClick: () => setIsModalOpen(true) },
    ]
    return (
        <Container className="lg:!my-8">
            <div className="w-full">
                {/* <p className="text-[10px] md:text-xs xl:text-sm mb-2 xl:mb-4"><span className="underline">Your Account</span> › Your Requests</p> */}
                <Path>
                    <span className="underline">Your Account</span> › Your Requests
                </Path>
                <h1 className="text-2xl xl:text-3xl font-bold pb-2 xl:pb-4 border-b">Your Requests</h1>
                <div className=" flex justify-between text-[#484848] mt-2 xl:mt-3 text-xs md:text-sm xl:text-base w-full mb-2 xl:mb-4">
                    <div className="flex gap-2 md:gap-3 xl:gap-4">
                        <button>Estimates</button>
                        <button>Claims</button>
                    </div>
                    <div>
                        <button className="flex gap-2 items-center"><span>All</span> <IoChevronDownOutline /></button>
                    </div>
                </div>
                <RequestCardWithStatus statusText={"Confirm"} requestTitle={"Gathering estimates"} viewDetailsPath={"/estimate-request-details"} moreActions={moreActions} />
                <hr className="my-14" />
                <RequestCardWithStatus statusText={"Confirm"} requestTitle={"3 Estimates found!"} hasViewEstimate={true} viewBtnText={"View estimate"} moreActions={moreActions} viewBtnPath={"/compare-estimate"} />
                <hr className="my-14" />
                <RequestCardWithStatus statusText={"Complete"} date={"Friday 16 Jul, 2025"} requestTitle={"Approved"} hasViewEstimate={true} viewBtnText={"View Claim"} viewDetailsPath={"/accept-request"} viewBtnPath="/view-claim" moreActions={moreActions} />

                <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                    <CancelRequestModalContents />
                </Modal>
            </div>
        </Container>
    )
}


import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useRef } from 'react';
import { IoChevronDownOutline } from "react-icons/io5";
import MoreActionButton from "@/components/account/request/more-action-button/MoreActionButton";
import Path from "@/components/shared/path/Path";
import Container from "@/components/shared/container/Container";

function CarSlider({ cars }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);


    return (
        <div className="relative px-12">
            {/* Custom Prev Button */}
            <button
                ref={prevRef}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border rounded-md w-10 h-10 flex items-center justify-center"
            >
                <span className="text-xl">{'‹'}</span>
            </button>

            {/* Custom Next Button */}
            <button
                ref={nextRef}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 text-white shadow-md border rounded-md w-10 h-10 flex items-center justify-center"
            >
                <span className="text-xl">{'›'}</span>
            </button>

            <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                onInit={(swiper) => {
                    // Connect custom buttons
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className="px-10"
            >
                {cars.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Card key={item.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                            <CardContent className="p-4 sm:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                    {/* Car Image */}
                                    <div className="flex justify-center mb-4">
                                        <div className="w-24 h-16 sm:w-32 sm:h-20 relative">
                                            <Image
                                                src={carImg}
                                                alt={item.carName}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Car Details */}
                                    <div className="space-y-2 mb-6 flex flex-col items-center sm:items-start">
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.carName}</h3>
                                        <div className="flex items-center gap-1">
                                            <span className="text-primary text-xs sm:text-sm font-medium">{item.rating} Ratings</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600">Expires {item.expiryDate}</p>
                                    </div>
                                </div>

                                {/* Price and Actions */}
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <div className="text-xl sm:text-2xl font-bold text-primary">${item.price}</div>

                                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                        <Button
                                            variant="outline"
                                            className="flex-1 text-xs sm:text-sm py-2 shadow-none border-none bg-secondary text-gray"
                                        >
                                            View details
                                        </Button>
                                        <Button className="flex-1 text-xs sm:text-sm py-2 bg-secondary hover:bg-primary text-primary hover:text-white">
                                            Accept
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

function Status({ status, path, handleViewDetailsOnclick }) {
    return (
        <Card className="bg-secondary p-4 sm:p-6 !py-4 shadow-none border-none">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    {/* Status Icon */}
                    <div className="flex-shrink-0 mt-1 sm:mt-0">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                    </div>

                    {/* Request Details */}
                    <div className="space-y-1 min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">{status}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 break-words">
                            <span className="block sm:inline">Request date: 5 Nov, 2024</span>
                            <span className="hidden sm:inline"> - </span>
                            <span className="block sm:inline">Request number: 24-566738-45608</span>
                        </p>
                    </div>
                </div>

                {/* Action Button */}
                <Link href={path ? path : "#"} className="min-w-[200px]">
                    <Button onClick={handleViewDetailsOnclick} className="!w-full bg-transparent hover:bg-transparent text-primary px-4 sm:px-6 py-2 text-sm sm:w-auto border border-primary">
                        View request details
                    </Button>
                </Link>
            </div>
        </Card>
    )
}


function RequestCardWithStatus({ requestTitle, viewBtnText, statusText, handleViewDetailsOnclick, viewDetailsPath, viewBtnPath, moreActions, date }) {
    return (
        <div>
            <Status status={statusText} handleViewDetailsOnclick={handleViewDetailsOnclick ? handleViewDetailsOnclick : () => { }} path={viewDetailsPath} />
            <div className="w-full pr-6">
                <div className="flex justify-between items-center  my-4">
                    <div>
                        <h3 className="text-gray font-bold">{requestTitle}</h3>
                        {
                            date && (
                                <p className="text-gray/50 text-sm mt-1">{date}</p>
                            )
                        }
                    </div>
                    {
                        viewBtnText && (
                            <Link href={viewBtnPath ? viewBtnPath : "#"} className="lg:min-w-[200px]">
                                <Button className="w-full bg-primary hover:bg-primary text-white text-sm py-2.5">{viewBtnText}</Button>
                            </Link>
                        )
                    }
                </div>
                <Card className="border-none border-gray-200 shadow-none mt-0 p-0">
                    <CardContent className="p-0">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                            {/* Insurance Items Section */}
                            <div className="flex-1 space-y-4 sm:space-y-6">
                                {insuranceItems?.map((item) => (
                                    <VehicleCardWithBadge key={item.id} item={item} hasQuantity={true} quantityClassName={"text-gray font-semibold"} />
                                ))}
                            </div>

                            {/* Action Buttons Section */}
                            <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[200px]">
                                <Link href={"/request/support/request-details"}>
                                    <Button className="w-full bg-primary hover:bg-primary text-white text-sm py-2.5">Product</Button>
                                </Link>
                                <MoreActionButton actions={moreActions} />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
