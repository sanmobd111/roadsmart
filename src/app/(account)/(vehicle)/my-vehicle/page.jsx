"use client"

import carImg from "@/assets/images/pngwing.com (3).png"
import ReviewModalContents from "@/components/modal-contents/account/vehicle/ReviewModalContents"
import AddCertificateModalContents from "@/components/modal-contents/certificate/AddCertificateModalContents"
import CertificateModalContents from "@/components/modal-contents/certificate/CertificateModalContents"
import VehicleInspectionModalContents from "@/components/modal-contents/order/InspectionModalContents"
import EditCurrencyModalContents from "@/components/modal-contents/Prefrence/EditCurrencyModalContents"
import PreferenceModalContents from "@/components/modal-contents/Prefrence/PreferenceModalContents"
import AddReminderModalContents from "@/components/modal-contents/reminder/AddReminderModalContents"
import ReminderModalContents from "@/components/modal-contents/reminder/ReminderModalContents"
import ChangeVehicleModalContents from "@/components/modal-contents/vehicle/ChangeVehicleModalContents"
import TransferVehicleModalContents from "@/components/modal-contents/vehicle/TransfarVehicleModalContents"
import TransferRequestModalContents from "@/components/modal-contents/vehicle/TransferRequestModalContents"
import VehicleServiceModalContents from "@/components/modal-contents/vehicle/VehcleServiceModalContents"
import EditDocumentModalContents from "@/components/modal-contents/vehicle/vehicle-info-edit/EditDocumentModalContents"
import EditHarrierSpecsModalContents from "@/components/modal-contents/vehicle/vehicle-info-edit/EditHarrierSpecs"
import EditSizeModalContents from "@/components/modal-contents/vehicle/vehicle-info-edit/EditSizeModalContents"
import EditValueModalContents from "@/components/modal-contents/vehicle/vehicle-info-edit/EditValueModalContents"
import VehicleInfoModalContents from "@/components/modal-contents/vehicle/VehicleInfoModalContents"
import { LicensePlatePopupContents, SelectVehiclePopupContents } from "@/components/popup-contents/AddVehiclePopUpContents"
import BackGroundColorDiv from "@/components/shared/background-color-div/BackGroundColorDiv"
import Container from "@/components/shared/container/Container"
import Modal from "@/components/shared/modal/Modal"
import Modal2 from "@/components/shared/modal/Modal2"
import Path from "@/components/shared/path/Path"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Bell, Calendar, FileText, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { PiCar, PiCarProfileLight } from "react-icons/pi"


const categories = [
    { id: 1, name: "Brakes & Brake Pads" },
    { id: 2, name: "Engines" },
    { id: 3, name: "Lorem Ipsum" },
    { id: 4, name: "Lorem Ipsum" },
    { id: 5, name: "Lorem Ipsum" },
    { id: 6, name: "Lorem Ipsum" },
    { id: 7, name: "Lorem Ipsum" },
    { id: 8, name: "Lorem Ipsum" },
    { id: 9, name: "Lorem Ipsum" },
    { id: 10, name: "Lorem Ipsum" },
    { id: 11, name: "Lorem Ipsum" },
    { id: 12, name: "Lorem Ipsum" },
]

const purchases = [
    {
        id: 1,
        date: "Ordered on Nov 13, 2023",
        status: "Delivered",
        statusColor: "text-primary",
        product: "19 20 21 22 ACURA ILX Genuine Headlamp Right 68088868AD",
        price: "$16.56",
        seller: "Sold by Hype",
    },
    {
        id: 2,
        date: "Ordered on Nov 13, 2023",
        status: "Delivered",
        statusColor: "text-green-600",
        product: "19 20 21 22 ACURA ILX Genuine Headlamp Right 68088868AD",
        price: "$16.56",
        seller: "Sold by Hype",
    },
]

const jobs = [
    {
        id: 1,
        title: "Routine Service",
        createdDate: "Created on Jan 18, 2024",
    },
    {
        id: 2,
        title: "Oil Change",
        createdDate: "Created on Jan 18, 2024",
    },
]

const sidebarItems = [
    { name: "vehicle-info", Icon: PiCar },
    { name: "certificate", Icon: FileText },
    { name: "reminder", Icon: Bell },
    { name: "preferences", Icon: PiCarProfileLight },
]

export default function Component() {
    const [isAddVehiclePopupOpen, setIsAddVehiclePopupOpen] = useState(false)
    const [selectedTab, setSelectedTab] = useState("select-vehicle");
    const [currentModal2, setCurrentModal2] = useState("review-details");
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isGetSpaceOpen, setIsGetSpaceOpen] = useState(true);

    // vehicle info states
    const [riderName, setRiderName] = useState([])
    const [odometer, setOdometer] = useState("000000")
    const [riderNameEdit, setRiderNameEdit] = useState(false)
    const [odometerEdit, setOdometerEdit] = useState(false)

    // modal states
    const [activeTab, setActiveTab] = useState("purchases")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentModal, setCurrentModal] = useState("change-vehicle")
    const [isServiceModalOpen, setIsServiceModalOpen] = useState(false)
    const [currentServiceModal, setCurrentServiceModal] = useState("service")
    const handleBack = () => {
        setIsModalOpen(false)
        setIsServiceModalOpen(false)
        setCurrentModal("")
        setCurrentServiceModal("")
    }

    console.log(isGetSpaceOpen)
    return (
        <div className="max-w-[1600px] mx-auto">
            <Path className={"lg:!text-lg"}><Link href={"/account"}>Your Account</Link> › Your Vehicles</Path>
            <Container className={"mb-6 lg:mb-20"}>
                <div className="w-full">
                    <div className="w-full">
                        <div className="flex flex-col lg:flex-row justify-between mb-4 pb-4 border-b">
                            <h1 className="text-2xl font-bold text-gray-900">Your Vehicles</h1>
                            <div className="space-x-4 mt-4 lg:mt-0">
                                <Button variant="ghost" size="sm" className="text-gray text-sm px-0 hover:text-primary hover:bg-transparent"
                                    onClick={() => setIsAddVehiclePopupOpen(true)}
                                >
                                    Add Vehicle
                                </Button>
                            </div>
                        </div>

                        <div className="bg-white relative">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:items-center lg:gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Eleanor’s Car ALZ6443ZM </h2>
                                        <div className="space-y-1 text-gray-600">
                                            <p className="font-medium">Toyota Harrier 2018</p>
                                            <p className="text-sm">Petrol SUV 2.0 4WD AWD_UE</p>
                                            <p className="text-sm">1987cc 11KW 15HP 3ZR-FAE</p>
                                        </div>
                                    </div>

                                    {
                                        isGetSpaceOpen && <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 relative w-full sm:w-[80%]">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="absolute top-2 right-2 w-6 h-6 p-0 text-red-500 hover:text-primary hover:bg-red-100"
                                                onClick={() => setIsGetSpaceOpen(false)}
                                            >
                                                <X className="w-4 h-4" />
                                            </Button>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Get your Harrier specs</h3>
                                            <p className="text-gray-600 text-sm mb-4">
                                                Get the most out of Road Smart by adding your vehicle reg no. or VIN
                                            </p>
                                            <Button className="bg-primary hover:bg-primary text-white px-6 py-2 rounded"
                                                onClick={() => {
                                                    setIsModalOpen(true)
                                                    setCurrentModal("edit-harrier-specs")
                                                }}
                                            >
                                                Look up your Harrier
                                            </Button>
                                        </div>
                                    }

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 lg:mt-16">
                                        <div className="flex items-center space-x-6">
                                            <Image src={"/icon/my-vehicle/my-vehicle-status-icon-1.svg"} alt="Odometer Icon" width={24} height={24} className="w-10 h-10" />
                                            <div>
                                                <p className=" font-medium text-gray-900">Fitness Expiry</p>
                                                <p className="text-sm text-gray-500">Expires 30 Jun24</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-6">
                                            <Image src={"/icon/my-vehicle/my-vehicle-status-icon-2.svg"} alt="Odometer Icon" width={24} height={24} className="w-10 h-10" />
                                            <div>
                                                <p className=" font-medium text-gray-900">Road Tax</p>
                                                <p className="text-sm text-gray-500">Expires in 9 days</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-6">
                                            <Image src={"/icon/my-vehicle/my-vehicle-status-icon-3.svg"} alt="Odometer Icon" width={24} height={24} className="w-10 h-10" />
                                            <div>
                                                <p className=" font-medium text-gray-900">Insurance Expiry</p>
                                                <p className="text-sm text-gray-500">Expires 30 Jun24</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="mb-4 relative flex items-center justify-center mr-10 lg:mr-0">
                                        <Image src={'/images/car.svg'} alt="Red Toyota Harrier" width={500} height={300} className="w-full aspect-[4/3] md:aspect-[2/1] object-contain" />
                                        <div className=" flex flex-col space-y-3 z-10 flex-shrink-0">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className=" border border-gray-200 rounded lg:rounded-lg overflow-hidden bg-white p-2">
                                                    <Image
                                                        src={"/images/car-image-2.svg"}
                                                        alt={`Car view ${i}`}
                                                        width={64}
                                                        height={48}
                                                        className="w-8 lg:w-16 object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" my-4 lg:my-12 lg:pb-8 lg:border-b">
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:w-fit ">
                                    <button
                                        onClick={() => {
                                            setIsModalOpen(true)
                                            setCurrentModal("vehicle-info")
                                        }}
                                        className="px-6 py-2 border border-gray-300 text-gray-secondary rounded-lg bg-white hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-opacity-50"
                                    >
                                        Vehicle Info
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsModalOpen(true)
                                            setCurrentModal("activity")
                                            setActiveTab("purchases")
                                        }}
                                        className="px-6 py-2 border border-gray-300 text-gray-secondary rounded-lg bg-white hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-opacity-50"
                                    >
                                        Activity
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsModalOpen(true)
                                            setCurrentModal("change-vehicle")
                                        }}
                                        className="px-6 py-2 border border-gray-300 text-gray-secondary rounded-lg bg-white hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-opacity-50"
                                    >
                                        Change vehicle (11)
                                    </button>
                                    <button
                                        className="px-6 py-2 border border-gray-300 text-gray-secondary rounded-lg bg-white hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-opacity-50"
                                    >
                                        Remove Vehicle
                                    </button>
                                </div>
                            </div>
                            {/* </div> */}

                            <div className="bg-white">
                                <div className="mb-8">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-1">Shop for parts and accessories by category</h2>
                                    <p className="text-sm text-gray-600">For your 2018 Toyota Harrier</p>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                                    {categories.map((category) => (
                                        <div key={category.id} className="flex flex-col items-center group cursor-pointer">
                                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors duration-200">
                                                <div className="relative">
                                                    <div className="w-12 h-12 bg-gray-700 rounded-full border-4 border-gray-600 relative">
                                                        <div className="absolute inset-2 bg-gray-100 rounded-full"></div>
                                                        <div className="absolute top-1 left-1 w-2 h-2 bg-gray-600 rounded-full"></div>
                                                        <div className="absolute top-1 right-1 w-2 h-2 bg-gray-600 rounded-full"></div>
                                                        <div className="absolute bottom-1 left-1 w-2 h-2 bg-gray-600 rounded-full"></div>
                                                        <div className="absolute bottom-1 right-1 w-2 h-2 bg-gray-600 rounded-full"></div>
                                                    </div>
                                                    <div className="absolute -right-1 top-2 w-3 h-8 bg-red-500 rounded-sm"></div>
                                                </div>
                                            </div>
                                            <span className="text-sm text-gray-700 text-center leading-tight group-hover:text-gray-900 transition-colors duration-200">
                                                {category.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal isModalOpen={isServiceModalOpen} setIsModalOpen={setIsServiceModalOpen} containerClassName={"w-[90%] lg:w-auto max-w-[1600px]"}>
                        {
                            currentServiceModal === "service" ? <VehicleServiceModalContents setCurrentServiceModal={setCurrentServiceModal} /> : <VehicleInspectionModalContents />
                        }

                    </Modal>
                    {
                        currentModal === "activity" && <Modal headerClassName={"border-b border-gray-200 pb-4"} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] gap-2 lg:w-auto"} title={"Vehicle Activity"}>
                            <div className="space-y-2">
                                <nav className="flex space-x-8">
                                    <button onClick={() => setActiveTab("purchases")} className={cn("py-2 px-1", activeTab === "purchases" ? "text-gray-black font-semibold" : "  text-gray-secondary")}>Purchases</button>
                                    <button onClick={() => setActiveTab("jobs")} className={cn("py-2 px-1", activeTab === "jobs" ? "text-gray-black font-semibold" : "  text-gray-secondary")}>Jobs</button>
                                </nav>
                                {activeTab === "purchases" ? purchases.map((purchase) => (
                                    <Link href={"/order-details"} className="block">
                                        <div key={purchase.id} className="flex flex-col lg:flex-row items-center gap-4 pb-6 border-gray-100 lg:w-[80%]">
                                            <BackGroundColorDiv className="p-4 flex-shrink-0">
                                                <Image
                                                    src={carImg}
                                                    alt="Product"
                                                    width={60}
                                                    height={60}
                                                    className="rounded-lg  object-contain w-20 h-20"
                                                />
                                            </BackGroundColorDiv>
                                            <div className="shrink text-center lg:text-left">
                                                <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-500">
                                                    <span>{purchase.date}</span>
                                                    <span className={`font-medium ${purchase.statusColor}`}>{purchase.status}</span>
                                                </div>
                                                <h3 className="text-lg font-medium text-gray-black">{purchase.product}</h3>
                                                <div className="space-y-2 text-sm">
                                                    <span className="text-gray-500">{purchase.seller}</span>
                                                    <p className="font-bold text-lg text-gray-900">{purchase.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )) : <div className="space-y-4">
                                    {jobs.map((job) => (
                                        <div
                                            key={job.id}
                                            className="flex items-center justify-between  rounded-lg space-y-4 cursor-pointer"
                                            onClick={() => {
                                                setIsServiceModalOpen(true)
                                                setCurrentServiceModal("service")
                                                setIsModalOpen(false)
                                            }}
                                        >
                                            {/* Left Side - Icon and Job Info */}
                                            <div className="flex items-center space-x-4">
                                                {/* Calendar Icon */}
                                                <div className="flex-shrink-0">
                                                    <div className=" p-4 bg-red-100 rounded-lg flex items-center justify-center">
                                                        <Calendar className="w-10 h-10 text-primary" />
                                                    </div>
                                                </div>

                                                {/* Job Details */}
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-black">{job.title}</h3>
                                                    <p className="text-sm text-gray-500 mt-1">{job.createdDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>}
                            </div>
                        </Modal>
                    }

                    {
                        currentModal === "change-vehicle" && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                            <ChangeVehicleModalContents />
                        </Modal>
                    }
                    {
                        currentModal === "transfer-vehicle" && <Modal2 isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                            <TransferVehicleModalContents setCurrentModal={setCurrentModal} />
                        </Modal2>
                    }
                    {
                        currentModal === "transfer-request" && <Modal2 isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                            <TransferRequestModalContents />
                        </Modal2>
                    }

                    {
                        currentModal === "vehicle-info" && <Modal handleBack={handleBack} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                            <VehicleInfoModalContents setCurrentModal={setCurrentModal} riderName={riderName} odometer={odometer} riderNameEdit={riderNameEdit} odometerEdit={odometerEdit} setRiderName={setRiderName} setOdometer={setOdometer} setRiderNameEdit={setRiderNameEdit} setOdometerEdit={setOdometerEdit} />
                        </Modal>
                    }
                    {
                        currentModal === "edit-harrier-specs" && <Modal title={"Looking for your Harrier’s details?"} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto max-w-lg"}>
                            <EditHarrierSpecsModalContents setCurrentModal={setCurrentModal} />
                        </Modal>
                    }
                    {
                        currentModal === "edit-size" && <Modal title={"2018 Toyota Harrier "} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                            <EditSizeModalContents setCurrentModal={setCurrentModal} />
                        </Modal>
                    }
                    {
                        currentModal === "edit-value" && <Modal2 title={"What is the Harriers estimated market value?"} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                            <EditValueModalContents setCurrentModal={setCurrentModal} />
                        </Modal2>
                    }
                    {
                        currentModal === "edit-document" && <Modal2 isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                            <EditDocumentModalContents setCurrentModal={setCurrentModal} />
                        </Modal2>
                    }
                    {
                        currentModal === "certificate" && <Modal handleBack={handleBack} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                            <CertificateModalContents setCurrentModal={setCurrentModal} />
                        </Modal>
                    }
                    {
                        currentModal === "add-certificate" && <Modal title={"Toyota Harrier 2018"} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                            <AddCertificateModalContents setCurrentModal={setCurrentModal} />
                        </Modal>
                    }
                    {
                        currentModal === "reminder" && <Modal handleBack={handleBack} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                            <ReminderModalContents setCurrentModal={setCurrentModal} />
                        </Modal>
                    }
                    {
                        currentModal === "add-reminder" && <Modal title={"Toyota Harrier 2018"} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                            <AddReminderModalContents setCurrentModal={setCurrentModal} />
                        </Modal>
                    }
                    {
                        currentModal === "preferences" && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                            <PreferenceModalContents setCurrentModal={setCurrentModal} />
                        </Modal>
                    }
                    {
                        currentModal === "edit-currency" && <Modal2 isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                            <EditCurrencyModalContents setCurrentModal={setCurrentModal} />
                        </Modal2>
                    }
                </div>

                <Modal2 closeIconContainerClassName={"p-1 bg-secondary rounded-sm"} CloseIcon={IoCloseOutline} closeIconClassName={"w-6 h-6"} title={"Add Vehicle"} isModalOpen={isAddVehiclePopupOpen} setIsModalOpen={setIsAddVehiclePopupOpen} containerClassName={"w-[90%] lg:w-auto"}>
                    {
                        selectedTab === "select-vehicle" && <SelectVehiclePopupContents setSelectedTab={setSelectedTab} />
                    }
                    {
                        selectedTab === "license-plate" && <LicensePlatePopupContents setSelectedTab={setSelectedTab} handleBack={() => setIsAddVehiclePopupOpen(false)} setCurrentModal={setCurrentModal2} setIsModalOpen={setIsModalOpen2} />
                    }
                </Modal2>
                <Modal isModalOpen={isModalOpen2} setIsModalOpen={setIsModalOpen2} containerClassName={"w-[90%] lg:w-auto"} contentContainerClassName={"lg:min-h-[87vh] rounded-xl"} backBtnClassName={"mr-[5%] p-2 bg-secondary rounded-lg"}>

                    {
                        currentModal2 === "review-details" && <div className="lg:px-20">
                            <ReviewModalContents onClick={() => {
                                setSelectedTab("select-vehicle")
                                setCurrentModal2(false)
                                setIsAddVehiclePopupOpen(false)
                                setIsModalOpen2(false)
                            }} />
                        </div>
                    }
                </Modal>
            </Container>
        </div>
    )
}