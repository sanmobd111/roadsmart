"use client"
import StepIndicator from '@/components/step-indicator/StepIndicator'
import RedBtn from '@/components/ui/RedBtn'
import Title from '@/components/ui/Title'
import React, { useState } from 'react'

export default function page() {
    const [lossType, setLossType] = useState("")
    return (
        <div className='lg:w-fit mx-auto custom-padding'>
            <StepIndicator src={"/images/review-services-step-svg.svg"} />
            <Title text={"What is the nature of loss suffered by Billy <br class='hidden lg:block'/> Smith?"} className={"text-center lg:text-nowrap lg:text-4xl"} />
            <div className='space-y-4 lg:w-[60%] mx-auto mt-6 lg:mt-10'>
                <button onClick={() => setLossType("injury")} className="w-full py-4 px-6 rounded-lg border-2 text-left transition-colors text-gray-secondary font-semibold block">
                    Injury
                </button>
                <button onClick={() => setLossType("death")} className="w-full py-4 px-6 rounded-lg border-2 text-left transition-colors text-gray-secondary font-semibold block">
                    Death
                </button>
            </div>

            {
                lossType && <RedBtn path={"/claim/upload-document"} text={"Next"} hasIcon={true} className={"!mt-6 lg:!mt-8 block"} />
            }
        </div>
    )
}
