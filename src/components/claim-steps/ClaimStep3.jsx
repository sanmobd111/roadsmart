"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import BackButton from "../shared/back-button/BackButton"
import Title from "../shared/title/Title"
import Link from "next/link"

export default function ClaimStep3({ handleNext, incidents }) {
    const [selectedIncident, setSelectedIncident] = useState(null)
    const router = useRouter()
    console.log(selectedIncident)
    return (
        <div className="relative my-10 md:my-20 w-full">
            <BackButton onClick={() => router.back()} />
            <div className="lg:h-[60vh] w-fit bg-white mx-auto">
                <Title className="pl-6 md:pl-0 md:text-nowrap text-center mb-4 lg:mb-8 pb-4 " text="What type of claim are you filing?" />

                <div className="space-y-3 mb-4">
                    {
                        incidents.map((incident, index) => (
                            <div
                                className={`border rounded-lg p-4 cursor-pointer ${selectedIncident.id === incident.id ? "border-red-500 border-2" : "border-gray-200"
                                    }`}
                                onClick={() => setSelectedIncident(incident)}
                            >
                                <div className="text-xl font-bold text-gray-900 mb-2">{incident.incidentType}</div>
                                <div className=" text-gray-500">{incident.date}</div>
                            </div>
                        ))
                    }
                </div>

                {/* <AddButton text="Create Claim" className="w-full mb-6" /> */}
                <Link href={"/claim/addvehicle"}>
                    <button className="w-fit mx-auto block bg-primary text-white py-2 lg:py-3 px-10 rounded-lg font-medium hover:bg-primary transition-colors">
                        Next
                    </button>
                </Link>
            </div>
        </div>
    )
}
