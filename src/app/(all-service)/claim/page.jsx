"use client"

import ClaimStep1 from '@/components/claim-steps/ClaimStep1'
import ClaimStep2 from '@/components/claim-steps/ClaimStep2'
import Container from '@/components/shared/container/Container'
import { setIncident as setIncidentAction } from '@/store/Feature/claim-services'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function page() {
    const dispatch = useDispatch()
    const incidents = useSelector((state) => state?.claimServices?.claimServices?.incident)
    console.log(incidents)
    const searchParams = useSearchParams();
    const [step, setStep] = useState(parseInt(searchParams.get("step")) || 1)

    const handleNext = () => {
        setStep(step + 1)
    }
    const handlePrev = () => {
        setStep(step - 1)
    }

    const setIncidents = (incidents) => {
        dispatch(setIncidentAction([...incidents]))
    }
    return (
        <div>
            <Container>
                {
                    step === 1 && <ClaimStep1 incidents={incidents} handleNext={setStep} />
                }


                {/* {
                    step === 3 && <ClaimStep3 incidents={incidents} />
                } */}
                {/* {
                    step === 4 && <ClaimStep3 />
                } */}
                {
                    step === 2 && <ClaimStep2 handlePrev={handlePrev} handleNext={handleNext} setIncidents={setIncidents} incidents={incidents} />
                }
            </Container>
        </div>
    )
}
