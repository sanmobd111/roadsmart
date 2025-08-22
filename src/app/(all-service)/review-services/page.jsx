"use client"

import BackButton from '@/components/shared/back-button/BackButton';
import BackGroundColorDiv from '@/components/shared/background-color-div/BackGroundColorDiv';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const App = () => {
    const requestedVehicles = useSelector((state) => state?.myRequests?.myRequests);
    const router = useRouter();

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

    const handlePrev = () => {
        router.back();
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="bg-white rounded-lg max-w-4xl w-full mx-auto overflow-hidden px-10">
                {/* Page Header */}
                <div className="p-6 sm:p-8 text-center border-gray-200 relative">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-gray relative">
                        <BackButton className={"-translate-x-[10vw] lg:translate-x-0 top-0"} onclick={handlePrev} />
                        Your Request
                    </h1>
                </div>


                <div>
                    {
                        requestedVehicles.map((vehicle, index) => (
                            <DetailsCard vehicle={vehicle} />
                        ))
                    }
                </div>

                {/* Footer Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 lg:mt-16 lg:w-fit mx-auto">
                    <Link href={"/services"} className="text-nowrap px-6 py-2 border border-red-400 text-red-600 font-semibold rounded-md shadow-sm hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                        + Add another service
                    </Link>
                    <Link href="/confirm-order" onClick={() => toast.success("Successfully submitted!")}>
                        <button className="text-nowrap w-full bg-primary text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75">
                            Submit
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default App;

const DetailsCard = ({ vehicle }) => {
    const [isOpen, setIsOpen] = useState(false);
    let title
    switch (vehicle.type) {
        case "road-tax":
            title = "Road Tax"
            break;
        case "fitness-renewal":
            title = "Fitness"
            break;
        case "repair":
            title = "Repair Claim"
            break;
        case "Plant-insurance-vehicle":
            title = "Insurance Plans Claim"
            break;
        case "motor-insurance-vehicle":
            title = "Motor Insurance"
            break;
        case "marine-insurance":
            title = "Marine Insurance"
            break;
        case "transport":
            title = "Towing"
            break;
        case "finance":
            title = "Finance"
            break;
        default:
            title = "Claim"
    }
    return (
        <div onClick={() => setIsOpen(!isOpen)} className="mb-4 lg:mb-6 border-gray-200 custom-shadow p-6 rounded-xl">
            {/* Single Vehicle Accident Claim Section */}
            <div className="flex flex-col gap-4 lg:flex-row items-center justify-between ">
                <div className="flex items-center gap-4">
                    <BackGroundColorDiv className={"p-4 aspect-square"}>
                        <Image src={"/icon/car-icon.svg"} alt={"car-icon"} width={40} height={40} />
                    </BackGroundColorDiv>
                    <div>
                        <p className="text-lg font-medium text-gray-800">{title}</p>
                        <p className="text-sm text-gray-500">{vehicle.manufacturer || "vehicle"}</p>
                    </div>
                </div>
                <div>
                    <button
                        className="text-gray-500 hover:text-gray-700 transition-colors duration-200 mx-auto lg:ml-auto block mt-2"
                    >
                        <svg
                            className={`h-5 w-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
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



            {
                isOpen && (
                    < div className='pt-4 mt-4 border-t border-gray-200 '>
                        <div className='flex gap-2'>
                            <p className='font-semibold'>Details</p>
                            <button className='text-primary'>Edit</button>
                        </div>
                        {
                            vehicle.type === "road-tax" && <RoadTax details={vehicle} />
                        }
                        {
                            vehicle.type === "fitness-renewal" && <FitnessRenewal details={vehicle} />
                        }
                        {
                            vehicle.type === "motor-insurance-vehicle" && <MotorInsurance details={vehicle} />
                        }
                        {
                            vehicle.type === "marine-insurance" && <MarineInsurance details={vehicle} />
                        }
                        {
                            vehicle.type === "transport" && <Transport details={vehicle} />
                        }
                        {
                            vehicle.type === "finance" && <Finance details={vehicle} />
                        }
                    </div>
                )
            }
        </div >
    )
}

const RoadTax = ({ details }) => {
    return (
        <KeyValuePair label="Quatres" value={`${details.selectedQuarters} Quarters`} />
    )
}

const FitnessRenewal = ({ details }) => {
    const formatDate = (date) => {
        if (!date) return "";
        const d = new Date(date);
        if (isNaN(d)) return ""; // invalid date
        const options = { day: "2-digit", month: "short", year: "numeric" };
        return d.toLocaleDateString("en-GB", options);
    };
    return (
        <div className='grid grid-cols-2'>
            <KeyValuePair label="Preferred Date" value={formatDate(details.preferredDate)} />
            <KeyValuePair label="Note" value={`Vehicle need to be jump started `} />
        </div>
    )
}

const MotorInsurance = ({ details }) => {
    const formatDate = (date) => {
        if (!date) return "";
        const d = new Date(date);
        if (isNaN(d)) return ""; // invalid date
        const options = { day: "2-digit", month: "short", year: "numeric" };
        return d.toLocaleDateString("en-GB", options);
    };
    return (
        <div className='grid grid-cols-2'>
            <KeyValuePair label="Coverage" value={"Comprehensive"} />
            <KeyValuePair label="Sum Insured" value={"$1,200"} />
        </div>
    )
}

const MarineInsurance = ({ details }) => {
    const formatDate = (date) => {
        if (!date) return "";
        const d = new Date(date);
        if (isNaN(d)) return ""; // invalid date
        const options = { day: "2-digit", month: "short", year: "numeric" };
        return d.toLocaleDateString("en-GB", options);
    };
    return (
        <div className='grid grid-cols-2'>
            <KeyValuePair label="Origin" value={details.location} />
            <KeyValuePair label="Mode of Transport" value={details.manufacturer} />
            <KeyValuePair label="Destination" value={details.designation} />
            <KeyValuePair label="Value" value={"ZK 10,000"} />
            <KeyValuePair label="Description " value={details.details} />
            <KeyValuePair label="Quantity " value={details.numberOfItems} />
        </div>
    )
}


const KeyValuePair = ({ label, value }) => {
    return (
        <div className="flex items-center space-x-3 font-medium my-2">
            <p className='text-gray'>{label}</p>
            <p>{value}</p>
        </div>
    )
}

const Transport = ({ details }) => {

    return (
        <div className='grid grid-cols-2'>
            <KeyValuePair label="From" value={details.from} />
            <KeyValuePair label="To" value={details.to} />
        </div>
    )
}

const Finance = ({ details }) => {
    return (
        <div className='grid grid-cols-2'>
            <KeyValuePair label="Item" value={details.manufacturer} />
            <KeyValuePair label="Amount" value={`ZK ${details.amount}`} />
            <KeyValuePair label="Dawn payment" value={`ZK ${details.downPayment}`} />
        </div>
    )
}