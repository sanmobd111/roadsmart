"use client"

import DriverStep1 from "@/components/claim-steps/driver-steps/DriverStep1"
import DriverStep2 from "@/components/claim-steps/driver-steps/DriverStep2"
import ProgressIndicator from "@/components/progressIndicator/ProgressIndicator"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useSelector } from "react-redux"

export default function page() {
    const router = useRouter()
    const vehicles = useSelector((state) => state?.vehicle?.vehicles);
    const selectedVehicles = vehicles.filter((vehicle) => vehicle.selected)
    const persons = useSelector((state) => state?.person?.persons);
    const selectedPersons = persons.filter((person) => person.selected)
    const [progressStep, setProgressStep] = useState(selectedVehicles.length + 1)
    const license = useSelector((state) => state?.claimServices?.claimServices?.license)
    const natureOfAccident = useSelector((state) => state?.claimServices?.claimServices?.natureOfAccident)
    console.log(natureOfAccident, "natureOfAccident")

    const [step, setStep] = useState(1)
    // const [driver, setDriver] = useState([])
    const handleNext = () => {
        setStep(step + 1)
    }

    const handleAddDriverDetails = () => {
        console.log(progressStep, "progressStep")
        if (progressStep === selectedPersons.length + selectedVehicles.length) {
            router.push("/claim/upload-document")
        } else {
            setProgressStep(progressStep + 1)
            // setDriver([])
            setStep(1)
        }
    }

    const handlePrev = () => {
        setStep(step - 1)
        // setProgressStep(progressStep - 1)
    }

    console.log(selectedPersons[progressStep - selectedVehicles.length - 1], "selectedPersons[progressStep - selectedVehicles.length - 1]")
    return (
        <div className="my-10 lg:my-16">
            <ProgressIndicator vehicles={selectedVehicles} currentStep={progressStep} drivers={selectedPersons} />
            {
                step === 1 && <DriverStep1 handleNext={handleNext} driver={persons} setDriver={() => { }} currentPerson={selectedPersons[progressStep - selectedVehicles.length - 1]} license={license} />
            }
            {
                step === 2 && <DriverStep2 handleAddDriverDetails={handleAddDriverDetails} currentPerson={selectedPersons[progressStep - selectedVehicles.length - 1]} natureOfAccident={natureOfAccident} handlePrev={handlePrev} />
            }
        </div>
    )
}
