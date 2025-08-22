"use client"

import DamageStep1 from '@/components/damage-steps/DamageStep1'
import DamageStep2 from '@/components/damage-steps/DamageStep2'
import DamageStep3 from '@/components/damage-steps/DamageStep3'
import ProgressIndicator from '@/components/progressIndicator/ProgressIndicator'
import Container from '@/components/shared/container/Container'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDamage as setDamageAction } from '@/store/Feature/claim-services'

export default function page() {
    const dispatch = useDispatch()
    const damageDetails = useSelector((state) => state?.claimServices?.claimServices?.damage)
    const insuranceDetails = useSelector((state) => state?.claimServices?.claimServices?.insurance)
    (insuranceDetails, "insuranceDetails")
    const [progressStep, setProgressStep] = useState(1)
    const router = useRouter()
    const vehicles = useSelector((state) => state?.vehicle?.vehicles);
    const selectedVehicles = vehicles.filter((vehicle) => vehicle.selected)
    const persons = useSelector((state) => state?.person?.persons);
    const selectedPersons = persons.filter((person) => person.selected)
    const [step, setStep] = useState(1)


    const handleNext = () => {
        setStep(step + 1)
    }

    const handleAddDamageDetails = () => {
        if (progressStep == selectedVehicles.length + selectedPersons.length) {
            router.push("/claim/driver")
            return
        } else if (progressStep < selectedVehicles.length) {
            setStep(1)
        } else {
            setStep(2)
        }
        setProgressStep(progressStep + 1)
    }
    const [damageType, setDamageType] = useState("") // This can be set based on the step or user selection

    const handlePrev = () => {
        setStep(step - 1)
        setProgressStep(progressStep - 1)
    }

    return (
        <Container className={"lg:!my-16"}>
            <div className=' w-fit mx-auto'>
                <ProgressIndicator vehicles={selectedVehicles} currentStep={progressStep} drivers={selectedPersons} />
                {
                    step == 1 && <DamageStep1 currentVehicle={selectedVehicles[progressStep - 1]} handleNext={handleAddDamageDetails} damageDetails={damageDetails} damageType={damageType} setDamageType={setDamageType} />
                }
                {
                    step === 2 && <DamageStep2 handleAddDamageDetails={handleAddDamageDetails} currentPerson={selectedPersons[progressStep - selectedVehicles.length - 1]} insuranceDetails={insuranceDetails} handlePrev={handlePrev} />
                }
                {/* {
                    step === 2 && <DamageStep3 handleAddDamageDetails={handleAddDamage} damageDetails={damageDetails} setDamageDetails={setDamageDetails} />
                } */}

            </div>
        </Container>
    )
}
