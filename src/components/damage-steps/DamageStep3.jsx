import React, { useState } from 'react'
import Title from '../ui/Title'
import Modal from '../shared/modal/Modal'
import DamageModalContents from '../modal-contents/DamageModalContents'
import { Edit } from 'lucide-react'
import PrimaryButton from '../shared/buttons/PrimaryButton'
import Link from 'next/link'

export default function DamageStep3({ handleAddDamageDetails }) {
    const [currentInsuranceStatus, setCurrentInsuranceStatus] = useState("")

    return (
        <div className='w-fit'>
            <Title text={"What is the insurance status of the vehicle?"} className={"text-center lg:text-nowrap lg:text-4xl"} />
            <hr className='lg:mt-4 lg:mb-10 my-4' />
            <div className='lg:w-[60%] max-w-xl mx-auto'>
                <button
                    onClick={() => setCurrentInsuranceStatus("valid")}
                    className={`w-full py-4 px-6 rounded-lg border-2 mb-4 text-left font-medium transition-colors ${currentInsuranceStatus === "valid" ? "border border-primary" : ""}`}
                >
                    Valid
                </button>
                <button
                    onClick={() => setCurrentInsuranceStatus("not-valid")}
                    className={`w-full py-4 px-6 rounded-lg border-2 mb-4 text-left font-medium transition-colors ${currentInsuranceStatus === "not-valid" ? "border border-primary" : ""}`}
                >
                    Not valid
                </button>
                <button
                    onClick={() => setCurrentInsuranceStatus("unknown")}
                    className={`w-full py-4 px-6 rounded-lg border-2 mb-6 text-left font-medium transition-colors ${currentInsuranceStatus === "unknown" ? "border border-primary" : ""}`}
                >
                    I don’t know
                </button>
                <div className='w-fit mx-auto'>
                    {/* <Link href={"/claim/insurance"}> */}
                        <PrimaryButton btnText={"Next"} onClick={handleAddDamageDetails} className={"w-fit mt-2  min-w-[200px] mx-auto"} />
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}
