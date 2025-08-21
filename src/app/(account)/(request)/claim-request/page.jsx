"use client";


import carImg from "@/assets/images/pngwing.com (3).png";
import DocumentSection from "@/components/account/request/DocumentSection";
import RequestHeader from "@/components/account/request/RequestHeader";
import CancelRequestModalContents from "@/components/modal-contents/request/CancelRequestModalContents";
import Modal from "@/components/shared/modal/Modal";
import Image from "next/image";
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
    const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false)

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
                <StatusHeader Icon={PiBellRingingThin} title={"You have received estimates "} subText={"Check the claim item to see the estimates"} />
                <StatusHeader Icon={IoCheckmarkCircleOutline} title={"Claim Accepted"} subText={"You will be notified once your claim changes status "} hasBtn={true} path={"/view-claim"} btnText={"View claim"} />
                <div className=" flex flex-col-reverse lg:flex-row justify-between">
                    <div className="space-y-10 xl:space-y-16 mt-4 md:my-6 xl:my-10 lg:w-[70%]">
                        <div>
                            <SectionHeadingWithBottomBorder text={"Items"} />
                            <div className="space-y-6 md:space-y-8 w-[95%]">
                                <VehicleDetailsCollapseCard openCard={openCard} setOpenCard={setOpenCard} index={0} containerClassName={"shadow-none border-none"} setIsModalOpen={setIsEstimateModalOpen} hasScrollCard={true} />
                                <VehicleDetailsCollapseCard openCard={openCard} setOpenCard={setOpenCard} index={1} containerClassName={"shadow-none border-none"} setIsModalOpen={setIsEstimateModalOpen} hasScrollCard={true} />
                            </div>
                        </div>

                        <DocumentSection handleUpload={handleUpload} />
                    </div>
                    <CollapseAddress containerClassName={"mt-4"} />
                </div>

                <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                    <CancelRequestModalContents />
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
import ScrollCarCards from "@/components/account/request/scroll-car-cards/ScrollCarCards";

const documents = [
    { id: 1, name: "Lorem Ipsum", type: "PDF" },
    { id: 2, name: "Lorem Ipsum", type: "PDF" },
]

function VehicleDetailsCollapseCard({ openCard, setOpenCard, index, isCollapsable = true, containerClassName }) {

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
                            <button onClick={() => setIsModalOpen(true)} className="text-sm text-gray-400">3 Estimates found</button>
                        </div>
                        <ScrollCarCards items={estimates} />
                    </div>
                </div>
            )}
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






