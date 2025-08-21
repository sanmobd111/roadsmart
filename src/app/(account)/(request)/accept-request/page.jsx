"use client";


import carImg from "@/assets/images/pngwing.com (3).png";
import DocumentSection from "@/components/account/request/DocumentSection";
import RequestHeader from "@/components/account/request/RequestHeader";
import CancelRequestModalContents from "@/components/modal-contents/request/CancelRequestModalContents";
import Modal from "@/components/shared/modal/Modal";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { PiBellRingingThin } from "react-icons/pi";


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
        id: 3,
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
]


export default function page() {
    const [openCard, setOpenCard] = useState(-1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(false);
    const [hasEstimates, setHasEstimates] = useState(false)
    const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false)
    const [hasScrollCard, setHasScrollCard] = useState(false)
    const handleCancelRequest = () => {
        setIsModalOpen(true);
    }
    const { status } = useParams()

    const handleUpload = () => {
        setIsDocumentModalOpen(true)
    }
    return (
        <Container>
            <div className="w-full">
                <Path>
                    Your Account › Your Requests › Requests details
                </Path>
                <RequestHeader handleCancelRequest={handleCancelRequest} />
                {/* <p className="text-xs my-4">Your Account › Your Requests› Requests details</p> */}
                <StatusHeader Icon={PiBellRingingThin} title={"Your request has been submitted"} subText={"You will be notified when your request changes status"} />
                <StatusHeader Icon={IoCheckmarkCircleOutline} title={"Claim Accepted"} subText={"You will be notified once your claim changes status "} hasBtn={true} path={"/view-claim"} btnText={"View claim"} />
                <div className=" flex flex-col-reverse lg:flex-row justify-between">
                    <div className="space-y-10 xl:space-y-16 mt-4 md:my-6 xl:my-10 lg:w-[70%]">
                        <div>
                            <SectionHeadingWithBottomBorder text={"Items"} />
                            <div className="space-y-6 md:space-y-8 w-[95%]">
                                <VehicleDetailsCollapseCard openCard={openCard} setOpenCard={setOpenCard} index={0} containerClassName={"shadow-none border-none"} setIsModalOpen={setIsEstimateModalOpen} hasScrollCard={hasScrollCard} />
                                <VehicleDetailsCollapseCard openCard={openCard} setOpenCard={setOpenCard} index={1} containerClassName={"shadow-none border-none"} setIsModalOpen={setIsEstimateModalOpen} hasScrollCard={hasScrollCard} />
                            </div>
                        </div>

                        <DocumentSection handleUpload={handleUpload} />
                    </div>
                    {/* <CollapseRequestInfo /> */}
                    <CollapseAddress containerClassName={"mt-4"} />
                </div>

                <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                    <CancelRequestModalContents />
                </Modal>
                <Modal isModalOpen={isEstimateModalOpen} setIsModalOpen={setIsEstimateModalOpen} containerClassName={"w-[90%] lg:w-auto lg:min-w-[1024px]"}>
                    <EstimateModalContents />
                </Modal>
                <Modal isModalOpen={isDocumentModalOpen} setIsModalOpen={setIsDocumentModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                    <DocumentModalContents />
                </Modal>
            </div>
        </Container >
    )
}

import CollapseAddress from "@/components/account/collapse-address/CollapseAddress";
import StatusHeader from "@/components/account/request/status-header/StatusHeader";
import Container from "@/components/shared/container/Container";
import Path from "@/components/shared/path/Path";
import SectionHeadingWithBottomBorder from "@/components/shared/section-heading/SectionHeadingWithBottomBorder";
import combinedClasses from "@/utils/tailwind";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaArrowRotateRight } from "react-icons/fa6";

const documents = [
    { id: 1, name: "Lorem Ipsum", type: "PDF" },
    { id: 2, name: "Lorem Ipsum", type: "PDF" },
]

function VehicleDetailsCollapseCard({ openCard, setOpenCard, index, isCollapsable = true, containerClassName, setIsModalOpen, hasScrollCard }) {
    const [expandedDriver, setExpandedDriver] = useState(2)

    return (
        <div className={combinedClasses('w-full relative shadow-lg rounded-lg', containerClassName)}>
            <div
                className="flex items-center justify-between gap-4 cursor-pointer"
                onClick={() => openCard == index ? setOpenCard(-1) : setOpenCard(index)}
            >
                <div className="flex items-center gap-4">
                    <Image
                        src={carImg}
                        alt="Car"
                        width={60}
                        height={60}
                        className="rounded-lg object-contain"
                    />
                    <div>
                        <div className="text-lg font-medium">Own Vehicle</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                            Toyota Rav-4 ALX3203
                        </div>
                    </div>
                </div>
                {
                    isCollapsable && <div className="text-gray-500">
                        {openCard == index ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
                    </div>
                }
            </div>
            {isCollapsable && openCard == index && (
                <div className="mt-6 shadow-xl p-4 lg:p-6 lg:ml-20 rounded-xl">
                    <div className="flex items-center justify-center">
                        <div className="w-full">

                            {/* Driver Section */}
                            <div className="mb-6 pb-4 border-b border-gray-200">
                                <div className="flex items-center mb-3 gap-2">
                                    <h3 className="text-sm font-semibold text-gray-800">Driver</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 text-gray-700 text-sm">
                                    <div>
                                        <span className="font-medium text-gray-500 mr-1">Driver name</span>
                                        <span className="font-semibold">Mwansa Biko</span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-500 mr-1">License Status</span>
                                        <span className="font-semibold">Valid</span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-500 mr-1">At fault?</span>
                                        <span className="font-semibold">No</span>
                                    </div>
                                </div>
                            </div>

                            {/* Insurance Section */}
                            <div className="mb-6 pb-4 border-b border-gray-200">
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-sm font-semibold text-gray-800">Insurance</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 text-gray-700 text-sm">
                                    <div>
                                        <span className="font-medium text-gray-500 mr-1">Insurer</span>
                                        <span className="font-semibold">Hollamark Insurance</span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-500 mr-1">Cover</span>
                                        <span className="font-semibold">Third Party</span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-500 mr-1">Expiry</span>
                                        <span className="font-semibold">31 Oct 2025</span>
                                    </div>
                                </div>
                            </div>

                            {/* Damage Section */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-sm font-semibold text-gray-800">Damage</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 text-gray-700 text-sm mb-6">
                                    <div>
                                        <span className="font-medium text-gray-500 mr-1">Description</span>
                                        <span>Rear fender</span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-500 mr-1">Mobility</span>
                                        <span>No</span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-500 mr-1">Inspection</span>
                                        <span>Not yet</span>
                                    </div>
                                </div>

                                {/* Upload Boxes */}
                                <div className="grid grid-cols-5 gap-4 lg:w-[50%]">
                                    {[...Array(5)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center justify-center border-2 border-dashed border-red-300 rounded-lg w-full aspect-square"
                                        >
                                            {/* Cloud Upload Icon */}
                                            <svg
                                                className="w-4 h-4 text-red-500"
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
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-3">
                            <h3 className="text-lg font-semibold text-gray-800">Estimates</h3>
                            <button onClick={() => setIsModalOpen(true)} className="text-sm text-gray-400">Request estimate</button>
                        </div>
                        {
                            hasScrollCard && <ScrollCarCards items={estimates} />
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

function CollapseRequestInfo() {
    const [sections, setSections] = useState([
        { id: "location", title: "Location", isExpanded: true },
        { id: "incident", title: "Incident details", isExpanded: true },
    ])

    const toggleSection = (sectionId) => {
        setSections(
            sections.map((section) => (section.id === sectionId ? { ...section, isExpanded: !section.isExpanded } : section)),
        )
    }

    const getSectionExpanded = (sectionId) => {
        return sections.find((s) => s.id === sectionId)?.isExpanded ?? false
    }
    return (
        <div className="mt-20 w-[70%] mx-auto lg:mx-0 lg:w-[25%]">
            <div className="w-full mx-auto">
                <Card className="border-none shadow-none border-gray-200">
                    <CardContent className="space-y-6 px-0">
                        {/* Location Section */}
                        <div>
                            <button
                                onClick={() => toggleSection("location")}
                                className="flex items-center justify-between w-full pb-3 border-b border-gray-200"
                            >
                                <h3 className="text-base font-medium text-gray-900">Location</h3>
                                {getSectionExpanded("location") ? (
                                    <ChevronUp className="w-4 h-4 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                )}
                            </button>

                            {getSectionExpanded("location") && (
                                <div className="pt-4 space-y-1 text-sm text-gray-600 p-2 rounded-lg">
                                    <div>15 Blue Stare Road</div>
                                    <div>23 CA New York City</div>
                                    <div>NY 345678</div>
                                </div>
                            )}
                        </div>

                        {/* Incident Details Section */}
                        <div>
                            <button
                                onClick={() => toggleSection("incident")}
                                className="flex items-center justify-between w-full pb-3 border-b border-gray-200"
                            >
                                <h3 className="text-base font-medium text-gray-900">Incident details</h3>
                                {getSectionExpanded("incident") ? (
                                    <ChevronUp className="w-4 h-4 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                )}
                            </button>

                            {getSectionExpanded("incident") && (
                                <div className="pt-4 space-y-4 text-sm p-2 rounded-lg">
                                    <div>
                                        <div className="text-gray-600 mb-1">Incident type</div>
                                        <div className="font-medium text-gray-900">Multi vehicle Accident</div>
                                    </div>

                                    <div>
                                        <div className="text-gray-600 mb-1">Incident date</div>
                                        <div className="font-medium text-gray-900">31 Oct 2024</div>
                                    </div>

                                    <div>
                                        <div className="text-gray-600 mb-1">Vehicle</div>
                                        <div className="font-medium text-gray-900">2021 BMW X3 ALG 38</div>
                                    </div>

                                    <div>
                                        <div className="text-gray-600 mb-1">Incident town</div>
                                        <div className="font-medium text-gray-900">Lusaka</div>
                                    </div>

                                    <div>
                                        <div className="text-gray-600 mb-1">Damages</div>
                                        <div className="font-medium text-gray-900">Own, Third Party Property</div>
                                    </div>

                                    <div>
                                        <div className="text-gray-600 mb-1">Description</div>
                                        <div className="font-medium text-gray-900">
                                            Was joining great east road and vehicle cut in front and hit into my vehicle
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

function DocumentModalContents() {

    // This state would typically manage actual file uploads and their progress
    const [files, setFiles] = useState([
        {
            id: 1,
            name: 'Police report',
            size: '32.7 mb',
            progress: 53,
            statusText: '53% done',
            type: 'pdf',
            canRetry: false,
            status: "uploading"
        },
        {
            id: 2,
            name: 'Application form',
            size: '', // Size not shown in image for failed upload
            progress: 0,
            statusText: 'Upload failed',
            type: 'pdf',
            canRetry: true,
            status: "failed"
        },
        {
            id: 3,
            name: 'Drivers License',
            size: '8 mb',
            progress: 100,
            statusText: 'Completed',
            type: 'pdf',
            canRetry: false,
            status: "complete"
        },
    ]);

    const handleFileDelete = (id) => {
        setFiles(files.filter(file => file.id !== id));
        // In a real app, you'd also send a request to delete the file from the server
    };

    const handleFileRetry = (id) => {
        // In a real app, you'd trigger the upload process again for this file
        console.log(`Retrying upload for file ID: ${id}`);
        setFiles(files.map(file =>
            file.id === id ? { ...file, statusText: 'Uploading...', progress: 0, canRetry: false } : file
        ));
    };

    return (
        <div className="">
            {/* Modal/Card Container */}
            <div className=" w-full mx-auto overflow-hidden space-y-4 xl:space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Upload files</h2>
                </div>

                {/* Drag and Drop Area */}
                <div className="">
                    <div className="border-2 border-dashed border-red-300 rounded-lg p-8 text-center flex flex-col items-center justify-center">
                        {/* Cloud Upload Icon */}
                        <svg
                            className="w-12 h-12 text-red-500 mb-4"
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
                        <p className="text-gray-600 mb-2">
                            Drag and drop or{' '}
                            <span className="text-red-600 font-medium cursor-pointer hover:underline">browse</span> to choose file
                        </p>
                        <a href="#" className="text-red-600 text-sm hover:underline">
                            Add from URL
                        </a>
                    </div>
                </div>

                {/* Uploads Section */}
                <div className="">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Uploads</h3>
                    <div className="space-y-4">
                        {files.map((file) => (
                            <div key={file.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
                                <div className="flex items-center flex-grow">
                                    {/* PDF Icon */}
                                    {file.type === 'pdf' && (
                                        <svg
                                            className="h-8 w-8 text-red-500 mr-3 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v4h5v12H6z" />
                                            <path d="M10 10h4v2h-4zM10 14h4v2h-4z" />
                                        </svg>
                                    )}
                                    <div className="flex-grow">
                                        <div className="flex gap-2">
                                            <p className="text-gray-800 font-medium text-sm">{file.name}</p>
                                            {
                                                file.status === "uploading" && <p className="text-xs text-gray-500 mt-1">{file.size} {" | "} {"53% done"} {" - "}{"2sec left"}</p>
                                            }
                                        </div>
                                        <div className="text-xs text-gray-500 mt-1">
                                            {file.progress > 0 && file.progress < 100 && (
                                                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                                    <div className="bg-red-600 h-1.5 rounded-full" style={{ width: `${file.progress}%` }}></div>
                                                </div>
                                            )}
                                            {file.statusText && <span className={`mt-2 block ${file.status === "failed" ? "text-red-600" : "text-gray-500"}`}>{file.statusText}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center ml-4 space-x-2 flex-shrink-0">
                                    {file.canRetry && (
                                        <button
                                            onClick={() => handleFileRetry(file.id)}
                                            className="text-red-600 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100"
                                        >
                                            <FaArrowRotateRight />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleFileDelete(file.id)}
                                        className="text-red-600 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100"
                                    >
                                        {/* Delete Icon (Trash) */}
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className=" flex justify-center space-x-3">
                    <button className="bg-red-600 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75">
                        Upload
                    </button>
                    <button className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-md shadow-sm hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}




import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { MapPin, Search, Star } from "lucide-react";

import Checkbox from "@/components/shared/check-box/Checkbox";
import SectionHeading from "@/components/shared/section-heading/SectionHeading";
function EstimateModalContents() {
    const [searchTerm, setSearchTerm] = useState("")
    const [scrollPosition, setScrollPosition] = useState(0)
    const scrollContainerRef = useRef(null)
    const [openCard, setOpenCard] = useState(-1)
    const [isExpanded, setIsExpanded] = useState(false)

    const [vendors, setVendors] = useState([
        { id: 1, name: "Carlaw Tire & Auto Service Centre", rating: 4.5, reviewCount: "1% ratings", address: "45 Pondfield Rd W #1C", image: "/placeholder.svg?height=120&width=160", isSelected: false },
        { id: 2, name: "AutoZone Auto Parts & Service", rating: 4.2, reviewCount: "2% ratings", address: "123 Main Street #2A", image: "/placeholder.svg?height=120&width=160", isSelected: false },
        { id: 3, name: "Quick Fix Auto Repair", rating: 4.8, reviewCount: "3% ratings", address: "789 Oak Avenue #3B", image: "/placeholder.svg?height=120&width=160", isSelected: false },
        { id: 4, name: "Premium Car Service Center", rating: 4.6, reviewCount: "4% ratings", address: "456 Pine Road #4C", image: "/placeholder.svg?height=120&width=160", isSelected: false },
        { id: 5, name: "Elite Auto Workshop", rating: 4.3, reviewCount: "5% ratings", address: "321 Elm Street #5D", image: "/placeholder.svg?height=120&width=160", isSelected: false },
        { id: 6, name: "Master Mechanic Services", rating: 4.7, reviewCount: "6% ratings", address: "654 Maple Drive #6E", image: "/placeholder.svg?height=120&width=160", isSelected: false },
        { id: 7, name: "Speedy Auto Solutions", rating: 4.4, reviewCount: "7% ratings", address: "987 Cedar Lane #7F", image: "/placeholder.svg?height=120&width=160", isSelected: false },
        { id: 8, name: "Professional Car Care", rating: 4.9, reviewCount: "8% ratings", address: "147 Birch Boulevard #8G", image: "/placeholder.svg?height=120&width=160", isSelected: false },
    ])

    const toggleVendorSelection = (vendorId) => {
        setVendors((prev) =>
            prev.map((vendor) =>
                vendor.id === vendorId ? { ...vendor, isSelected: !vendor.isSelected } : vendor
            )
        )
    }

    const selectedVendors = vendors.filter((v) => v.isSelected)

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
            const scrollPercentage = scrollTop / (scrollHeight - clientHeight)
            setScrollPosition(scrollPercentage)
        }
    }

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll)
            return () => scrollContainer.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <div>
            <div className="flex justify-between pb-2 border-b mb-4">
                <SectionHeading text={"Request Estimate "} />
                <div className="text-sm text-gray-secondary flex gap-2">
                    <p>#LCS23</p>
                    <p>Hollmark</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="lg:w-[60%]">
                    <div className="space-y-4 mb-4">
                        <SectionHeading text={"Service"} />
                        <Card className="border border-gray-200 rounded-xl py-0">
                            <CardContent className="p-0">
                                <CarSelect />

                                {isExpanded && (
                                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100 ">
                                        <div className="pt-4 space-y-4">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <div className="text-gray-600 mb-1">Repair Type:</div>
                                                    <div className="font-medium text-gray-900">Body Work</div>
                                                </div>
                                                <div>
                                                    <div className="text-gray-600 mb-1">Estimated Cost:</div>
                                                    <div className="font-medium text-gray-900">$2,500</div>
                                                </div>
                                                <div>
                                                    <div className="text-gray-600 mb-1">Duration:</div>
                                                    <div className="font-medium text-gray-900">5–7 days</div>
                                                </div>
                                                <div>
                                                    <div className="text-gray-600 mb-1">Status:</div>
                                                    <div className="font-medium text-green-600">Approved</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-gray-600 mb-1">Description:</div>
                                                <div className="font-medium text-gray-900">
                                                    Front bumper replacement and paint work required due to collision damage.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Vendor Selection */}
                    <div className="">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 mt-8 border-b pb-4">
                            <h1 className="text-xl font-semibold text-gray-900">Select Vendors</h1>
                            <div className="relative w-full sm:w-80">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <Input
                                    type="text"
                                    placeholder="Search Products"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                />
                            </div>
                        </div>

                        {/* Vendor Grid & Scrollbar */}
                        <div className="flex gap-4 mb-6">
                            <div className="w-0.5 bg-primary/30 flex-shrink-0 rounded-full relative h-44">
                                <div
                                    className="w-[600%] -translate-x-[40%] bg-primary rounded-xs transition-all duration-150 ease-out"
                                    style={{
                                        height: "60%",
                                        transform: `translateY(${scrollPosition * 65}%)`,
                                    }}
                                />
                            </div>

                            <div
                                ref={scrollContainerRef}
                                className="flex-1 overflow-y-auto  h-96 pr-2"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                <style jsx>{`
                                        div::-webkit-scrollbar {
                                            display: none;
                                        }
                                    `}</style>

                                <div className="grid grid-cols-1 gap-6">
                                    {vendors.map((vendor) => (
                                        <Card
                                            key={vendor.id}
                                            onClick={() => toggleVendorSelection(vendor.id)}
                                            className={`border-none cursor-pointer shadow-none py-0 transition-all duration-200 ${vendor.isSelected
                                                ? "border-red-500 bg-red-50"
                                                : "border-gray-200 hover:border-gray-300"
                                                }`}
                                        >
                                            <CardContent className="p-4">
                                                <div className="flex flex-col lg:flex-row gap-4">
                                                    <div className="flex-shrink-0">
                                                        <div className="w-20 h-16 sm:w-24 sm:h-20 bg-gray-100 rounded-lg overflow-hidden">
                                                            <Image
                                                                src={carImg}
                                                                alt={vendor.name}
                                                                width={96}
                                                                height={80}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-start justify-between mb-2">
                                                            <div className="flex items-center gap-2">
                                                                <div className="flex items-center gap-1">
                                                                    <Star className="w-4 h-4 fill-red-500 text-red-500" />
                                                                    <span className="text-sm font-medium">{vendor.rating}</span>
                                                                </div>
                                                                <span className="text-xs text-gray-500">{vendor.reviewCount}</span>
                                                            </div>
                                                            <Checkbox checked={vendor.isSelected} setChecked={() => toggleVendorSelection(vendor.id)} />
                                                        </div>
                                                        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{vendor.name}</h3>
                                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                                            <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                                                                <MapPin className="w-3 h-3 text-white" />
                                                            </div>
                                                            <span className="truncate">{vendor.address}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden mb-4">
                            <SectionHeading text={"Claim Item"} />
                            <VehicleSelectCollapseCard openCard={openCard} setOpenCard={setOpenCard} index={0} />
                        </div>

                        {/* Footer */}
                        <div className="space-y-4 pl-6">
                            <div className="flex justify-start">
                                <button className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                                    See all garages
                                </button>
                            </div>
                            <div className="w-full max-w-md">
                                <Link href={"/claim-request"}>
                                    <Button
                                        // onClick={handleSubmit}
                                        // disabled={selectedVendors.length === 0}
                                        className="w-full max-w-[350px] bg-primary hover:bg-primary text-white py-3 text-base font-medium rounded-lg"
                                    >
                                        Submit
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[35%] hidden lg:block">
                    <SectionHeading text={"Claim Item"} />
                    <VehicleSelectCollapseCard openCard={openCard} setOpenCard={setOpenCard} index={0} />
                </div>
            </div>
        </div>
    )
}

import BackGroundColorDiv from "@/components/shared/background-color-div/BackGroundColorDiv";
import FileUpload from "@/components/shared/file-upload/FileUpload";
import ScrollCarCards from "@/components/account/request/scroll-car-cards/ScrollCarCards";
import FileInput from "@/components/shared/file-input/FileInput";
function VehicleSelectCollapseCard({ openCard, setOpenCard, index }) {

    return (
        <div className='w-full relative rounded-lg'>
            <div
                className="flex items-center justify-between gap-4 p-4  cursor-pointer border-b"
                onClick={() => openCard == index ? setOpenCard(-1) : setOpenCard(index)}
            >
                <div className="flex items-center gap-4">
                    <BackGroundColorDiv className={"p-2"}>
                        <Image
                            src={carImg}
                            alt="Car"
                            width={60}
                            height={60}
                            className="rounded-lg object-contain"
                        />
                    </BackGroundColorDiv>
                    <div>
                        <div className="text-sm text-gray">
                            <p>Toyota Hilux ALC1800ZM</p>
                            <div className="flex justify-between items-center">
                                <p>Insurer <span>Hollard</span></p>
                                {openCard == index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openCard == index && (
                <div className=" mx-auto top-full">
                    <Card className="border-none shadow-none">
                        <CardContent className="space-y-8">
                            <div>
                                <p className="text-sm text-gray-secondary">Damages</p>
                                <p className="text-sm font-semibold text-gray-black">Right fender and bumper</p>
                            </div>
                            {/* Uploads Section */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-black mb-4">Uploads</h3>
                                <div className="grid grid-cols-4 gap-3">
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <FileInput />
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    )
}



const CarSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select the service type");

    const options = [
        "Repairs",
        "Courtesy Vehicle",
        "Towing",
        "Other"
    ];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full">
            {/* Select Box Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            >
                <div className="flex items-center">
                    {/* Document Icon (mimicking the image) */}
                    <svg
                        className="h-5 w-5 text-red-500 mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v4h5v12H6z" />
                    </svg>
                    <span>{selectedOption}</span>
                </div>
                {/* Down Arrow Icon */}
                <svg
                    className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>

            {/* Dropdown Options */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10">
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};




