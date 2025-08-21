// "use client"

// import ProgressIndicator from "@/components/progressIndicator/ProgressIndicator"
// import Container from "@/components/shared/container/Container"
// import { Button } from "@/components/ui/button"
// import { ChevronRight } from "lucide-react"
// import { useRouter } from "next/navigation"
// import { useState } from "react"
// import { useSelector } from "react-redux"

// export default function QuatreSection() {
//     const vehicles = useSelector((state) => state?.vehicle?.vehicles);
//     const [currentStep, setCurrentStep] = useState(1)
//     const router = useRouter()
//     const selectedVehicles = vehicles.filter((vehicle) => vehicle.selected)
//     const [selectedQuarters, setSelectedQuarters] = useState("")
//     // const [activeQuarter, setActiveQuarter] = useState(null)

//     const quarterOptions = [
//         { id: "1", label: "1 Quarter", value: "1" },
//         { id: "2", label: "2 Quarters", value: "2" },
//         { id: "3", label: "3 Quarters", value: "3" },
//         { id: "4", label: "4 Quarters", value: "4" },
//     ]

//     const handleNext = () => {
//         console.log(currentStep, selectedVehicles.length)
//         if (currentStep === selectedVehicles.length) {
//             router.push("/review-services")
//             return
//         } else {
//             setCurrentStep(currentStep + 1)
//             setSelectedQuarters("")
//         }
//     }

//     return (
//         <Container>

//             <div className="w-full lg:w-fit bg-white rounded-lg">
//                 {/* <div className="flex items-center justify-center mb-8 w-2/3 lg:w-1/2 mx-auto">
//                     <Image src={"/images/road-tax-step-svg.svg"} alt="Progress Indicator" width={500} height={500} />
//                 </div> */}
//                 <ProgressIndicator className={"mt-10 w-[90%]"} currentStep={currentStep} vehicles={selectedVehicles} />
//                 {/* Question */}
//                 <h2 className="text-xl lg:text-3xl font-semibold text-gray-secondary mb-6 text-center">How many quarters would you like?</h2>

//                 {/* Radio Options */}
//                 <div className="space-y-3 mb-8 md:w-[80%] mx-auto">
//                     {quarterOptions.map((option) => (
//                         <label
//                             key={option.id}
//                             className={`flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${selectedQuarters === option.value ? "border-red-500" : ""}`}
//                             onClick={() => {
//                                 setSelectedQuarters(option.value)
//                             }}
//                         >
//                             <span className="ml-3 text-gray-700 font-medium text-sm lg:text-base">{option.label}</span>
//                         </label>
//                     ))}

//                     {/* Next Button */}
//                     <div className="flex justify-center mt-10">
//                         {/* <Link href={"/review-services"}> */}
//                         <Button
//                             onClick={handleNext}
//                             disabled={!selectedQuarters}
//                             className="bg-primary hover:bg-primary text-white px-6 py-3 h-12 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 min-w-[150px]"
//                         >
//                             Next
//                             <ChevronRight className="w-4 h-4" />
//                         </Button>
//                         {/* </Link> */}
//                     </div>
//                 </div>
//             </div>
//         </Container>
//     )
// }


"use client";

import ProgressIndicator from "@/components/progressIndicator/ProgressIndicator";
import BackButton from "@/components/shared/back-button/BackButton";
import Container from "@/components/shared/container/Container";
import { Button } from "@/components/ui/button";
import { setRequestedVehicle } from "@/store/Feature/request-data-slice";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function QuatreSection() {
    const router = useRouter();
    const vehicles = useSelector((state) => state?.vehicle?.vehicles || []);
    const selectedVehicles = vehicles.filter((vehicle) => vehicle.selected);
    const [allQuarters, setAllQuarters] = useState([])
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedQuarters, setSelectedQuarters] = useState("");
    const dispatch = useDispatch();

    const quarterOptions = [
        { id: "1", label: "1 Quarter", value: "1" },
        { id: "2", label: "2 Quarters", value: "2" },
        { id: "3", label: "3 Quarters", value: "3" },
        { id: "4", label: "4 Quarters", value: "4" },
    ];

    const handleNext = () => {
        if (currentStep === selectedVehicles.length) {
            dispatch(setRequestedVehicle([...allQuarters, { ...vehicles[currentStep - 1], selectedQuarters, type: "road-tax" }]));
            router.push("/review-services");
        } else {
            setCurrentStep((prev) => prev + 1);
            setAllQuarters(prev => [...prev, { ...vehicles[currentStep - 1], selectedQuarters, type: "road-tax" }]);
            setSelectedQuarters("");
        }
    };

    const handlePrev = () => {
        router.back();
    };




    return (
        <Container className={"relative"}>
            <div className="w-full lg:w-fit bg-white rounded-lg relative">
                <ProgressIndicator
                    className="mt-10 w-[90%]"
                    currentStep={currentStep}
                    vehicles={selectedVehicles}
                />

                {/* Heading */}
                <h2 className="text-xl lg:text-3xl font-semibold text-gray-secondary mb-6 text-center relative pl-10">
                    <BackButton className={"lg:-translate-x-[10vw] top-0"} onclick={handlePrev} />
                    How many quarters would you like?
                </h2>

                {/* Quarter Selection */}
                <div className="space-y-3 mb-8 md:w-[80%] mx-auto">
                    {quarterOptions.map((option) => (
                        <label
                            key={option.id}
                            onClick={() => setSelectedQuarters(option.value)}
                            className={`flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${selectedQuarters === option.value ? "border-red-500" : ""
                                }`}
                        >
                            <span className="ml-3 text-gray-700 font-medium text-sm lg:text-base">
                                {option.label}
                            </span>
                        </label>
                    ))}

                    {/* Next Button */}
                    <div className="flex justify-center mt-10">
                        <Button
                            onClick={handleNext}
                            disabled={!selectedQuarters}
                            className="bg-primary hover:bg-primary text-white px-6 py-3 h-12 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 min-w-[150px]"
                        >
                            Next
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}
