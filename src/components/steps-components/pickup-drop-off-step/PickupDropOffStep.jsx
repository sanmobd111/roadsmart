"use client";

import ProgressIndicator from '@/components/progressIndicator/ProgressIndicator';
import BackButton from '@/components/shared/back-button/BackButton';
import Container from '@/components/shared/container/Container';
import { Button } from '@/components/ui/button';
import { setRequestedVehicle } from '@/store/Feature/request-data-slice';
import { MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const options = [
    { id: 1, name: "Plant All Risks ", description: "Covers various risks associated with plant, equipment and machinery. Mitigates financial loss resulting from damage, loss or disruption caused by failure of plant equipment.  " },
];

export default function coverage() {
    const [locations, setLocations] = useState({ from: "", to: "" });
    const [allLocations, setAllLocations] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [allSelectedOptions, setAllSelectedOptions] = useState([]);

    const [currentStep, setCurrentStep] = useState(1)
    const router = useRouter()
    const vehicles = useSelector((state) => state?.vehicle?.vehicles);
    const selectedVehicles = vehicles.filter((vehicle) => vehicle.selected)
    const dispatch = useDispatch();

    const handleNext = () => {
        setAllLocations(prev => [...prev, { ...vehicles[currentStep - selectedVehicles.length - 1], ...locations, type: "transport" }]);
        setLocations({ from: "", to: "" })
        if (currentStep === selectedVehicles.length) {
            dispatch(setRequestedVehicle([...allLocations, { ...vehicles[currentStep - selectedVehicles.length - 1], ...locations, type: "transport" }]));
            router.push("/review-services")
            return
        } else {
            setSelectedOption(null)
        }

        setCurrentStep(currentStep + 1)
    }

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

            const previousLocation = allSelectedOptions[currentStep - totalVehicles - 2];
            setSelectedOption(previousLocation?.selectedOption || null);
        }

        // Going back from a vehicle step
        else if (currentStep <= totalVehicles + 1) {
            setCurrentStep(prev => prev - 1);

            // Remove last sum insured entry
            setAllLocations(prev => prev.slice(0, -1));

            const previousVehicle = allLocations[currentStep - 2];
            setLocations(previousVehicle || []);
        }
    };

    return (
        <Container>
            <div>
                <ProgressIndicator className={"mt-10 w-[90%]"} vehicles={selectedVehicles} currentStep={currentStep} drivers={[]} />
                <Step1 setCurrentStep={setCurrentStep} handleNext={handleNext} handlePrev={handlePrev} selectedOption={selectedOption} locations={locations} setLocations={setLocations} />
            </div>
        </Container>
    )
}

function Step1({ handleNext, handlePrev, locations, setLocations, selectedOption }) {
    return (
        <div className='min-w-lg max-w-2xl mx-auto pb-10'>
            <h1
                type="button"
                className="text-xl lg:text-3xl font-semibold text-gray-secondary mb-6 lg:text-nowrap relative pl-10 lg:pl-0 text-left"
            >
                <BackButton className={"lg:-translate-x-[10vw] top-0"} onclick={handlePrev} />
                Where to?
            </h1>
            <div className='space-y-4 mx-auto'>
                <div className="flex items-center w-full max-w-xl p-4 border border-gray-300 rounded-lg bg-white">
                    {/* The map pin icon, styled with a specific color. */}
                    <MapPin className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" />

                    {/* The input field for the pickup location. */}
                    <input
                        value={selectedOption?.from || locations.from}
                        onChange={(e) => setLocations({ ...locations, from: e.target.value })}
                        type="text"
                        placeholder="Pickup location"
                        className="flex-grow text-gray-700 placeholder-gray-500 placeholder:font-semibold focus:outline-none"
                    />
                </div>
                <div className="flex items-center w-full max-w-xl p-4 border border-gray-300 rounded-lg bg-white">
                    {/* The map pin icon, styled with a specific color. */}
                    <MapPin className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" />

                    {/* The input field for the pickup location. */}
                    <input
                        value={selectedOption?.to || locations.to}
                        onChange={(e) => setLocations({ ...locations, to: e.target.value })}
                        type="text"
                        placeholder="Drop off location"
                        className="flex-grow text-gray-700 placeholder-gray-500 placeholder:font-semibold focus:outline-none"
                    />
                </div>
            </div>
            <Button onClick={handleNext} className="bg-primary w-1/3 m-auto flex mt-8 hover:bg-primary text-white px-8 py-3 lg:py-6 rounded-lg font-medium">
                Next
            </Button>
        </div>
    )
}