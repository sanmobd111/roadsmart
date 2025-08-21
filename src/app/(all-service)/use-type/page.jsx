"use client";

import ProgressIndicator from '@/components/progressIndicator/ProgressIndicator';
import BackButton from '@/components/shared/back-button/BackButton';
import Container from '@/components/shared/container/Container';
import PrimaryBtn from '@/components/ui/PrimaryBtn';
import { cn } from '@/lib/utils';
import { setRequestedVehicle } from '@/store/Feature/request-data-slice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const options = [
    { id: 1, name: "Personal Use", value: "Personal Use", },
    { id: 2, name: "Commercial Use", value: "Commercial Use", },
    { id: 3, name: "Special/Other Use", value: "Special/Other Use", },
];

export default function coverage() {
    const [usageType, setUsageType] = useState("");
    const [allUsageType, setAllUsageType] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [allSelectedOptions, setAllSelectedOptions] = useState([]);

    const [currentStep, setCurrentStep] = useState(1)
    const router = useRouter()
    const vehicles = useSelector((state) => state?.vehicle?.vehicles);
    const selectedVehicles = vehicles.filter((vehicle) => vehicle.selected)
    const drivers = useSelector((state) => state?.driver?.drivers);
    const selectedDrivers = drivers.filter((driver) => driver.selected)
    const dispatch = useDispatch();

    const handleNext = () => {
        if (currentStep === selectedVehicles.length) {
            dispatch(setRequestedVehicle([...allUsageType,]));
            router.push("/review-services")
            return
        } else if (currentStep <= selectedVehicles.length) {
            setAllUsageType(prev => [...prev, { ...selectedVehicles[currentStep - 1], usageType }]);
            setUsageType("")
        } else {
        }

        setCurrentStep(currentStep + 1)
    }

    console.log(allUsageType)

    const handlePrev = () => {
        if (currentStep === 1) {
            // Go back to previous page
            router.back();
            return;
        }

        const totalVehicles = selectedVehicles.length;

        // Going back from a driver step
        if (currentStep > totalVehicles + 1) {
            setCurrentStep(prev => prev - 1);

            // Remove last selected driver option
            setAllSelectedOptions(prev => prev.slice(0, -1));

            const previousDriver = allSelectedOptions[currentStep - totalVehicles - 2];
            setSelectedOption(previousDriver?.selectedOption || null);
        }

        // Going back from a vehicle step
        else if (currentStep <= totalVehicles + 1) {
            setCurrentStep(prev => prev - 1);
            // Remove last sum insured entry
            setAllUsageType(prev => prev.slice(0, -1));

            const previousVehicle = allUsageType[currentStep - 2];
            setUsageType(previousVehicle?.usageType || "");
        }
    };

    return (
        <Container>
            <div>
                <ProgressIndicator className={"mt-10 w-[90%]"} vehicles={selectedVehicles} currentStep={currentStep} drivers={selectedDrivers} />
                {
                    currentStep <= selectedVehicles.length && <Step1 selectedOption={selectedOption} setCurrentStep={setCurrentStep} usageType={usageType} handleNext={handleNext} setUsageType={setUsageType} handlePrev={handlePrev} />
                }
            </div>
        </Container>
    )
}

function Step1({ usageType, handleNext, setUsageType, handlePrev, selectedOption }) {
    return (
        <div className='max-w-2xl mx-auto pb-10'>
            <h1
                type="button"
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-secondary mb-6 text-center lg:text-nowrap relative pl-10 lg:pl-0"
            >
                <BackButton className={"lg:-translate-x-[10vw] top-0"} onclick={handlePrev} />
                What is the vehicle used for?
            </h1>
            <div className='space-y-4 lg:w-[90%] mx-auto'>
                {
                    options.map((option, index) => (
                        <div className={cn("flex items-center justify-center font-sans py-4 cursor-pointer rounded-lg border border-gray-400", (usageType === selectedOption?.value || usageType === option?.value) && " border-primary")} onClick={() => setUsageType(option.value)} key={index}>
                            {option.name}
                        </div>
                    ))
                }
                <div className='flex justify-center gap-2 mt-10'>
                    <PrimaryBtn onClick={handleNext} text={"Next"} />
                </div>
            </div>
        </div>
    )
}