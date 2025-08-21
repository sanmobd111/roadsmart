"use client";

import BackButton from "@/components/shared/back-button/BackButton";
import Container from "@/components/shared/container/Container";
import FileInput from "@/components/shared/file-input/FileInput";
import Title from "@/components/shared/title/Title";
import { addRequest } from "@/store/Feature/my-request";
import { setRequestedVehicle } from "@/store/Feature/request-data-slice";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { useDispatch } from "react-redux";

export default function ClaimStep2() {
    const router = useRouter();

    // Form state
    const [vehicleName1, setVehicleName1] = useState("");
    const [vehicleName2, setVehicleName2] = useState("");
    const [currency, setCurrency] = useState("USD");
    const [downPayment, setDownPayment] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState([null, null, null, null, null]);
    const [amount, setAmount] = useState("");
    const dispatch = useDispatch();

    const dateInputRef = useRef(null);
    const handleDateClick = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker();
        }
    };

    const handleBack = () => {
        router.back();
    };

    const handleNext = () => {
        dispatch(addRequest({ manufacturer: vehicleName1, model: vehicleName2, currency, amount, downPayment, uploadedFiles, type: "finance" }))
        router.push("/review-services")
    };

    // Handle file change for each FileInput (index based)
    const handleFileChange = (file, index) => {
        setUploadedFiles((prev) => {
            const newFiles = [...prev];
            newFiles[index] = file;
            return newFiles;
        });
    };

    return (
        <Container className={"!my-10 md:!my-32 relative"}>
            {/* <BackButton onClick={handleBack} className={"lg:-translate-x-[10vw] top-0"} /> */}
            <div className="bg-white">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    {/* <Title text={"Apply for finance"} className="mb-4 lg:mb-10 text-center pb-4 border-b" /> */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-secondary mb-6 text-center lg:text-nowrap relative pl-10 lg:pl-0">
                        <BackButton className={"lg:-translate-x-[10vw] top-0 left-4"} onclick={handleBack} />
                        Apply for finance
                    </h2>

                    <div className="mx-auto space-y-4 max-w-xl">
                        {/* Vehicle Inputs */}
                        <input
                            id="vehicle1"
                            type="text"
                            value={vehicleName1}
                            onChange={(e) => setVehicleName1(e.target.value)}
                            placeholder="Name of vehicle ex. year, make, model"
                            className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input
                            id="vehicle2"
                            type="text"
                            value={vehicleName2}
                            onChange={(e) => setVehicleName2(e.target.value)}
                            placeholder="Name of vehicle ex. year, make, model"
                            className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />

                        {/* Currency and Down Payment */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <CurrencyDropdown currency={currency} setCurrency={setCurrency} amount={amount} setAmount={setAmount} />
                            <input
                                id="downPayment"
                                type="number"
                                value={downPayment}
                                onChange={(e) => setDownPayment(e.target.value)}
                                placeholder="Down payment"
                                className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                min="0"
                            />
                        </div>

                        {/* Photo Upload */}
                        <div className="space-y-3 mt-4 md:mt-8">
                            <label className="block text-sm font-medium text-gray-700 pb-2 border-b border-gray-200">
                                Upload photos of the incident (optional)
                            </label>
                            <div className="grid grid-cols-5 gap-4 lg:w-[70%]">
                                {[...Array(5)].map((_, index) => (
                                    <FileInput
                                        key={index}
                                        onChange={(file) => handleFileChange(file, index)}
                                        value={uploadedFiles[index]}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end mt-4 md:mt-10">
                            <button
                                type="button"
                                onClick={handleNext}
                                className="flex gap-2 items-center justify-center py-2 px-4 border border-transparent rounded-md bg-primary text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors min-w-[200px]"
                            >
                                <span>Next</span>
                                <SlArrowRight className="text-sm" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Container>
    );
}

// const CurrencyDropdown = ({ currency, setCurrency }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const currencies = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD"];

//     // Close dropdown when clicking outside or losing focus
//     const handleBlur = () => {
//         setTimeout(() => setIsOpen(false), 100);
//     };

//     const handleCurrencySelect = (selected) => {
//         setCurrency(selected);
//         setIsOpen(false);
//     };

//     return (
//         <div className="relative w-full max-w-sm">
//             <button
//                 type="button"
//                 onClick={() => setIsOpen(!isOpen)}
//                 onBlur={handleBlur}
//                 className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
//             >
//                 <span className="text-gray-500 font-normal">Loan amount</span>
//                 <span className="flex items-center space-x-1 text-gray-700 font-semibold">
//                     <span>{currency}</span>
//                     <svg
//                         className={`h-4 w-4 text-gray-500 transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                     </svg>
//                 </span>
//             </button>

//             {isOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10">
//                     {currencies.map((cur) => (
//                         <button
//                             key={cur}
//                             onClick={() => handleCurrencySelect(cur)}
//                             className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
//                             type="button"
//                         >
//                             {cur}
//                         </button>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };



const CurrencyDropdown = ({ currency, setCurrency, amount, setAmount }) => {
    const [isOpen, setIsOpen] = useState(false);
    const currencies = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD"];

    const handleBlur = () => {
        setTimeout(() => setIsOpen(false), 100);
    };

    const handleCurrencySelect = (selected) => {
        setCurrency(selected);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full">
            <div className="flex gap-2 border border-gray-200 rounded-lg px-2 py-3">
                {/* Amount Input */}
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="text-gray-700 outline-none block w-[80%]"
                />

                {/* Currency Button */}
                <div className="relative border-l border-gray-200 pl-2">
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        onBlur={handleBlur}
                        className="h-full flex items-center justify-between text-gray-700 hover:bg-gray-50 focus:outline-none gap-2 grow"
                    >
                        <span className="font-semibold">{currency}</span>
                        <svg
                            className={`h-4 w-4 text-gray-500 transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>

                    {/* Dropdown List */}
                    {isOpen && (
                        <div className="absolute right-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            {currencies.map((cur) => (
                                <button
                                    key={cur}
                                    onClick={() => handleCurrencySelect(cur)}
                                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                    type="button"
                                >
                                    {cur}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

