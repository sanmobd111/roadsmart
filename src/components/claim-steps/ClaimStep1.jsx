"use client"

import { setSelectedIncident } from "@/store/Feature/claim-services"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import BackButton from "../shared/back-button/BackButton"
import AddButton from "../ui/AddButton"

export default function ClaimStep3({ handleNext, incidents }) {
    const router = useRouter()
    const dispatch = useDispatch()

    const handleSubmit = () => {
        // dispatch(setIncident(selectedIncident))
        router.push("/claim/addvehicle")
    }
    return (
        <div className="relative my-10 md:my-20 w-full">
            <div className="lg:h-[60vh] w-fit bg-white mx-auto">
                {/* <Title className="pl-6 md:pl-0 md:text-nowrap text-center mb-4 lg:mb-8 pb-4" text="Which incident are you filing a claim for?" /> */}
                <h1 className="relative pl-10 lg:pl-0 text-2xl lg:text-4xl font-bold text-center mb-4 lg:mb-8 pb-4">
                    Which incident are you filing a claim for?
                    <BackButton onclick={() => {
                        if (incidents.length > 0) {
                            handleNext(2)
                        }
                        else {
                            router.back()
                        }
                    }} className={"lg:-translate-x-[10vw] top-0"} />

                </h1>

                <div className="space-y-3 mb-4">

                    {
                        incidents.map((incident, index) => (
                            <div
                                className={`border rounded-lg p-4 cursor-pointer ${incident.selected ? "border-red-500 border-2" : "border-gray-200"
                                    }`}
                                onClick={() => {
                                    dispatch(setSelectedIncident({ id: incident.id }))
                                }}
                            >
                                <div className="text-xl font-bold text-gray-900 mb-2">{incident.incidentType}</div>
                                <div className=" text-gray-500">{incident.date}</div>
                            </div>
                        ))
                    }
                </div>

                {/* <AddButton text="Create Claim" className="w-full mb-6" /> */}
                {/* <button className="text-gray-400 text-lg block mx-auto my-6 md:mt-10 md:mb-6 p-4 border border-gray-400" onClick={() => handleNext(2)}>+ Create Incident</button> */}
                <AddButton text="Create Claim" className="w-full mb-6" handleNext={() => handleNext(2)} />

                <button onClick={handleSubmit} className="w-fit mx-auto block bg-primary text-white py-2 lg:py-3 px-10 rounded-lg font-medium hover:bg-primary transition-colors">
                    Next
                </button>
            </div>
        </div>
    )
}
