"use client";

import { Button } from "@/components/ui/button";

import carImg from "@/assets/images/pngwing.com (3).png";
import DocumentSection from "@/components/account/request/DocumentSection";
import RequestHeader from "@/components/account/request/RequestHeader";
import CancelRequestModalContents from "@/components/modal-contents/request/CancelRequestModalContents";
import Modal from "@/components/shared/modal/Modal";
import { Card, CardContent } from "@/components/ui/card";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
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
]

export default function page() {
    const [openCard, setOpenCard] = useState(-1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(false);
    const handleCancelRequest = () => {
        setIsModalOpen(true);
    }
    const { status } = useParams()

    const handleUpload = () => {
        setIsDocumentModalOpen(true)
    }
    return (
        <Container className="!mt-4">
            <div className="w-full">
                <RequestHeader handleCancelRequest={handleCancelRequest} />
                {/* <AcceptedRequestDetails /> */}
                <StatusHeader Icon={PiBellRingingThin} title={"Your request has been cancelled"} subText={"Cancelled on J10 Jul, 2025"} />
                <div className=" flex flex-col-reverse lg:flex-row justify-between">
                    <div className="space-y-10 xl:space-y-16 mt-4 md:mb-6 xl:mb-10 lg:w-[70%]">
                        <div>
                            <SectionHeadingWithBottomBorder text={"Items"} />
                            <div className="space-y-4 md:space-y-8 w-[95%]">
                                <VehicleDetailsCollapseCard openCard={openCard} setOpenCard={setOpenCard} index={0} containerClassName={"shadow-none border-none"} />
                                <VehicleDetailsCollapseCard openCard={openCard} setOpenCard={setOpenCard} index={1} containerClassName={"shadow-none border-none"} />
                                <VehicleDetailsCollapseCard openCard={openCard} setOpenCard={setOpenCard} index={2} containerClassName={"shadow-none border-none"} />
                            </div>
                        </div>
                        <div className="">
                            <h2 className="border-b border-gray-400 font-medium text-2xl pb-2 mb-4">Drivers</h2>
                            <div className="flex gap-2 mt-4 items-center">
                                <Image src={carImg} className="w-16 h-16 object-cover" />
                                <p className="font-medium">Stella Bella (A99087)</p>
                            </div>
                        </div>
                        <div className="">
                            {
                                status !== "request-estimate" && <DocumentSection handleUpload={handleUpload} />
                            }
                        </div>
                    </div>
                    {
                        status === "support" || status === "claim" || status === "accept" || status == "request-estimate" ? <CollapseRequestInfo /> : <div className="mt-4 lg:w-[20%]">
                            <Location />
                        </div>
                    }
                </div>

                <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                    <CancelRequestModalContents />
                </Modal>
                <Modal isModalOpen={isDocumentModalOpen} setIsModalOpen={setIsDocumentModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                    <DocumentModalContents />
                </Modal>
            </div>
        </Container>
    )
}

function AcceptedRequestDetails() {
    return (
        <div className="space-y-4">
            <div className="bg-transparent border border-primary rounded-lg p-4 flex items-center gap-4 transition-colors cursor-pointer my-4 xl:my-6">
                {/* Green checkmark icon */}
                <div className="bg-secondary rounded-2xl p-3 flex-shrink-0">
                    <IoCheckmarkCircleOutline className="w-6 h-6 text-primary stroke-2" />
                </div>

                <div className="flex items-center justify-between flex-1">
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Claim Accepted</h3>
                        <p className="text-sm text-gray-600">
                            Estimate created on Jul 25, 2025 | 10:45 AM. You can{" "}
                        </p>
                    </div>
                    <Link href={"/view-claim"}>
                        <Button className="w-full bg-primary hover:bg-primary text-white text-sm px-8 py-2.5">View claim</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


import combinedClasses from "@/utils/tailwind";
import { ChevronDown, ChevronUp, FileText, Upload } from "lucide-react";
import { FaArrowRotateRight } from "react-icons/fa6";
import Container from "@/components/shared/container/Container";
import StatusHeader from "@/components/account/request/status-header/StatusHeader";
import Location from "@/components/account/request/location/Location";
import SectionHeadingWithBottomBorder from "@/components/shared/section-heading/SectionHeadingWithBottomBorder";

const documents = [
    { id: 1, name: "Lorem Ipsum", type: "PDF" },
    { id: 2, name: "Lorem Ipsum", type: "PDF" },
]

function VehicleDetailsCollapseCard({ openCard, setOpenCard, index, isCollapsable = true, containerClassName }) {
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
                        <div className="text-lg font-medium">Mahindra XUV 700</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                            Toyota Rav-4 ALX3203
                        </div>
                    </div>
                </div>
                {
                    isCollapsable && <div className="text-gray-500">
                        {openCard == index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                }
            </div>
            {isCollapsable && openCard == index && (
                <div className="w-[80%] left-[10%]  absolute z-[99999] top-full">
                    <Card className="border border-gray-200 !border-none">
                        <CardContent className="p-4 sm:p-6 space-y-8">
                            {/* Details Section */}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Details</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 text-sm">
                                    <div className="space-y-3">
                                        <div>
                                            <span className="text-gray-600">Quarters: </span>
                                            <span className="font-medium text-gray-900">2 Quarters</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Note</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <span className="text-gray-600">Use: </span>
                                            <span className="font-medium text-gray-900">Business use</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Coverage: </span>
                                            <span className="font-medium text-gray-900">Comprehensive</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Uploads Section */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Uploads</h3>
                                <div className="grid grid-cols-5 gap-3 lg:w-1/2">
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <div
                                            key={index}
                                            className="aspect-square border-2 border-dashed border-red-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-red-400 hover:bg-red-50/50 transition-all duration-200 bg-red-50/30"
                                        >
                                            <Upload className="w-6 h-6 text-red-400" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Documents Section */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Documents</h3>
                                <div className="flex flex-wrap gap-4">
                                    {documents.map((doc) => (
                                        <div key={doc.id} className="flex items-center gap-3 group cursor-pointer">
                                            <div className="relative">
                                                <FileText className="w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                                <div className="absolute -bottom-1 -right-1 bg-primary text-white text-xs px-1.5 py-0.5 rounded font-medium">
                                                    {doc.type}
                                                </div>
                                            </div>
                                            <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{doc.name}</span>
                                        </div>
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


