"use client";
import StepIndicator from '@/components/step-indicator/StepIndicator';
import Container from '@/components/ui/Container';
import RedBtn from '@/components/ui/RedBtn';
import Title from '@/components/ui/Title'
import React, { useState } from 'react'

const options = [
    { id: 1, name: "Comprehensive", description: "Full coverage for your vehicle and third-party liability." },
    { id: 2, name: "Third-Party", description: "Covers damages to others but not your own vehicle." },
    { id: 3, name: "Collision", description: "Covers damages to your vehicle in case of an accident." },
    { id: 4, name: "Personal Injury Protection", description: "Covers medical expenses for you and your passengers." }
];

export default function page() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(option.id);
    }
    return (
        <Container className={"h-screen py-20"}>
            <div className='space-y-6'>
                <StepIndicator src={"/images/review-services-step-svg.svg"} className={"mb-10"} />
                <Title text={"Choose your coverage "} className="mb-10" />
                <div className='space-y-3'>
                    {
                        options.map((option, index) => (
                            <div key={index} className={`border border-gray-400 p-4 rounded-lg ${selectedOption === option?.id ? "border-red-400" : ""}`} onClick={() => handleOptionChange(option)}>
                                <p className='text-lg'>{option.name}</p>
                                <p className='text-sm text-gray-500'>{option.description}</p>
                            </div>
                        ))
                    }
                </div>
                <RedBtn text={"Next"} btnClass={"!ml-auto mr-0"} className={""} path={"/coverage"} />
            </div>
        </Container>
    )
}
