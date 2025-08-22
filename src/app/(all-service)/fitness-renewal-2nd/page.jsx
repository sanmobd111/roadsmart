


"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { MdArrowBackIos } from "react-icons/md";
import { Button } from "@/components/ui/button";
import ProgressIndicator from "@/components/progressIndicator/ProgressIndicator";
import Modal from "@/components/shared/modal/Modal";
import DateModalContents from "@/components/modal-contents/DateModalContents";
import { setRequestedVehicle } from "@/store/Feature/request-data-slice";
import BackButton from "@/components/shared/back-button/BackButton";

export default function Component() {
    const dispatch = useDispatch();
    const [allPreferredDates, setAllPreferredDates] = useState([])
    const vehicles = useSelector((state) => state?.vehicle?.vehicles || []);
    const selectedVehicles = vehicles.filter((v) => v.selected);
    const router = useRouter();

    const [currentStep, setCurrentStep] = useState(1);
    const [preferredDate, setPreferredDate] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNext = () => {
        if (currentStep === selectedVehicles.length) {
            dispatch(setRequestedVehicle([...allPreferredDates, { ...vehicles[currentStep - 1], preferredDate, type: "fitness-renewal" }]));
            router.push("/review-services");
        } else {
            setCurrentStep((prev) => prev + 1);
            setAllPreferredDates(prev => [...prev, { ...vehicles[currentStep - 1], preferredDate, type: "fitness-renewal" }]);
            setPreferredDate("");
        }
    };

    const handlePrev = () => {
        router.back();
    };


    const formatDate = (date) => {
        const options = { day: "2-digit", month: "short", year: "numeric" };
        return date.toLocaleDateString("en-GB", options);
    };

    return (
        <div className="mt-10 flex items-center justify-center p-4">
            <div className="w-full h-[70vh] mb-10 flex flex-col justify-between max-w-md bg-white rounded-lg">

                {/* Progress */}
                <div className="w-fit">
                    <ProgressIndicator
                        className="mt-10 w-[90%]"
                        vehicles={selectedVehicles}
                        currentStep={currentStep}
                    />

                    {/* Question */}
                    <div className="mb-6">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-secondary mb-6 text-center lg:text-nowrap relative pl-10 lg:pl-0">
                            <BackButton className={"lg:-translate-x-[20vw] top-0"} onclick={handlePrev} />
                            Do you have a preferred date for the{" "}
                            <br className="hidden lg:block" /> service?
                        </h2>
                    </div>

                    {/* Date Input Options */}
                    <div className="lg:w-[90%] mx-auto space-y-4">
                        {/* Add Date Button */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full px-3 py-2 lg:px-4 lg:py-5 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Add Preferred date
                        </button>

                        {/* Selected Date Preview */}
                        {preferredDate && (
                            <div className="bg-[#fef2f24f] rounded-lg px-3 py-2 lg:px-4 lg:py-3 mb-4">
                                <div className="flex justify-between">
                                    <p className="md:text-lg lg:text-xl text-gray-500 font-semibold">Preferred date</p>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="text-red-500 cursor-pointer md:text-lg"
                                    >
                                        Edit
                                    </button>
                                </div>

                                <div className="mt-2 text-sm md:text-base space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-600 font-medium">Date:</span>
                                        <span className="text-gray-400 font-medium">{formatDate(preferredDate)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-600 font-medium">Pick up required:</span>
                                        <span className="text-gray-400 font-medium">Yes</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* No Preferred Date */}
                        <button className="w-full px-3 py-2 lg:px-4 lg:py-5 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500">
                            No preferred date
                        </button>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-6 mt-6">
                        <Button
                            className="text-gray-400 border border-gray-400 hover:bg-transparent px-12 py-3 md:py-4 lg:py-6 rounded-lg font-medium bg-transparent cursor-pointer w-[35%]"
                        >
                            <MdArrowBackIos className="size-3" /> Back
                        </Button>
                        <Button
                            onClick={handleNext}
                            className="bg-primary hover:bg-primary text-white px-12 py-3 md:py-4 lg:py-6 rounded-lg font-medium w-[35%]"
                        >
                            Next <MdArrowBackIos className="rotate-180 size-3" />
                        </Button>
                    </div>
                </div>

                {/* Date Modal */}
                <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                    <DateModalContents
                        selectedDate={preferredDate}
                        setSelectedDate={setPreferredDate}
                        setIsModalOpen={setIsModalOpen}
                    />
                </Modal>
            </div>
        </div>
    );
}
