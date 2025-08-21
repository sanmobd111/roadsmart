// "use client"

// import { useState, useRef } from "react"
// import { Calendar, MapPin, Search, Upload } from "lucide-react"
// import Title from "../shared/title/Title"
// import SelectInput from '../ui/SelectInput'
// import FileInput from "../shared/file-input/FileInput"

// export default function ClaimStep2({ handlePrev, handleNext, setIncidents }) {
//     const dateInputRef = useRef(null)
//     const [dateValue, setDateValue] = useState("")
//     const [selectedIncident, setSelectedIncident] = useState("single")
//     const [damageType, setDamageType] = useState("Own damage; Third Party Damage")
//     const [injury, setInjury] = useState("No")

//     const handleDateClick = () => {
//         if (dateInputRef.current) {
//             dateInputRef.current?.showPicker()
//         }
//     }

//     return (
//         <div className=" bg-white w-full">
//             <form className="space-y-6">
//                 <Title text={"Create Incident "} className="mb-10 text-center pb-4 border-b" />
//                 <div className="lg:w-1/2 mx-auto space-y-4">
//                     {/* First Row - Incident Type and Vehicle */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="space-y-2">
//                             <label htmlFor="incident-type" className="block text-sm font-medium text-gray-700">
//                                 What type of incident is it?
//                             </label>
//                             <SelectInput defaultValue="Lorem Ipsum" options={[{ label: "Lorem Ipsum", value: "Lorem Ipsum" }, { label: "Traffic Accident", value: "accident" }, { label: "Vehicle Theft", value: "theft" }, { label: "Vandalism", value: "vandalism" }, { label: "Other", value: "other" }]} setValue={setSelectedIncident} />
//                         </div>

//                         <div className="space-y-2">
//                             <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700">
//                                 Vehicle involved
//                             </label>
//                             <div className="relative">
//                                 <input
//                                     id="vehicle"
//                                     type="text"
//                                     placeholder="Search vehicle"
//                                     className="w-full h-12 pr-12 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
//                                 />
//                                 <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Second Row - Date and Location */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="space-y-2">
//                             <label htmlFor="incident-date" className="block text-sm font-medium text-gray-700">
//                                 When was the incident
//                             </label>

//                             <div className="relative w-full h-12">
//                                 {/* Display input (visual only, behind) */}
//                                 <input
//                                     onChange={(e) => setDateValue(e.target.value)}
//                                     id="incident-date-display"
//                                     type="text"
//                                     placeholder=""
//                                     className="w-full h-full pl-12 pr-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
//                                     value={dateValue}
//                                     readOnly
//                                 />

//                                 {/* Calendar icon (just visual) */}
//                                 <Calendar className="absolute z-1 left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" onClick={handleDateClick} />

//                                 {/* Actual date input (on top) */}
//                                 <input
//                                     ref={dateInputRef}
//                                     type="date"
//                                     className="absolute inset-0 opacity-0 cursor-pointer z-0 w-full h-full"
//                                     onChange={(e) => {
//                                         if (e.target.value) {
//                                             const date = new Date(e.target.value)
//                                             setDateValue(date.toLocaleDateString())
//                                         }
//                                     }}
//                                 />
//                             </div>
//                         </div>



//                         <div className="space-y-2">
//                             <label htmlFor="incident-location" className="block text-sm font-medium text-gray-700">
//                                 In which town was the incident?
//                             </label>
//                             <div className="relative">
//                                 <input
//                                     id="incident-location"
//                                     type="text"
//                                     placeholder=""
//                                     className="w-full h-12 pl-12 pr-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
//                                 />
//                                 <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Third Row - Damage and Injury */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="space-y-2">
//                             <label htmlFor="damage-type" className="block text-sm font-medium text-gray-700">
//                                 What damaged occurred during incident?
//                             </label>
//                             <SelectInput defaultValue="Own damage; Third Party Damage" options={[{ label: "Own damage; Third Party Damage", value: "Own damage; Third Party Damage" }, { label: "Own damage only", value: "own" }, { label: "Third party damage", value: "third-party" }, { label: "Own damage; Third Party Damage", value: "both" }, { label: "No damage", value: "none" }]} setValue={setDamageType} />
//                         </div>

//                         <div className="space-y-2">
//                             <label htmlFor="injury" className="block text-sm font-medium text-gray-700">
//                                 Where there any injury or loss of life?
//                             </label>
//                             <SelectInput defaultValue="No" options={[{ label: "No", value: "no" }, { label: "Minor injury", value: "minor" }, { label: "Serious injury", value: "serious" }, { label: "Fatal", value: "fatal" }]} setValue={setInjury} />
//                         </div>
//                     </div>

//                     {/* Description */}
//                     <div className="space-y-2">
//                         <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                             Briefly describe what happened
//                         </label>
//                         <textarea
//                             id="description"
//                             placeholder=""
//                             rows={4}
//                             className="w-full px-4 py-4 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
//                         />
//                     </div>

//                     {/* Photo Upload */}
//                     <div className="space-y-3">
//                         <label className="block text-sm font-medium text-gray-700">Upload photos of the incident (optional)</label>
//                         <div className="grid grid-cols-5 gap-4 lg:w-[70%]">
//                             {[...Array(5)].map((_, index) => (
//                                 // <div
//                                 //     key={index}
//                                 //     className="aspect-square border-2 border-dashed border-red-200 rounded-lg flex items-center justify-center hover:border-red-300 transition-colors cursor-pointer bg-red-50/30"
//                                 // >
//                                 //     <Upload className="h-6 w-6 text-red-400" />
//                                 // </div>
//                                 <FileInput />
//                             ))}
//                         </div>
//                     </div>

//                     {/* Notify Insurer */}
//                     <div className="space-y-3 bg-secondary py-6 px-4 lg:px-10 rounded-xl mt-4 md:mt-6">
//                         <label className="block text-sm font-medium text-gray-700">Notify insurer of incident</label>
//                         <div className="flex lg:items-center space-x-2">
//                             <input
//                                 type="checkbox"
//                                 className="h-4 w-4 text-primary bg-white border-gray-300 rounded accent-primary checked:border-transparent"
//                             />
//                             <label htmlFor="notify-insurer" className="text-sm text-gray-600 cursor-pointer">
//                                 Send incident details to your insurer now
//                             </label>
//                         </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="grid lg:grid-cols-2 w-fit sm:flex-row gap-3 pt-4 mx-auto">
//                         <button
//                             onClick={() => {
//                                 setIncidents(prev => [...prev, { dateValue, selectedIncident }])
//                                 handlePrev()
//                             }}
//                             type="button"
//                             className="py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 transition-colors"
//                         >
//                             Save & Close
//                         </button>
//                         <button
//                             onClick={handleNext}
//                             type="submit"
//                             className="py-2 px-4 border border-transparent rounded-md bg-primary text-white hover:bg-primary focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-offset-2 transition-colors"
//                         >
//                             <span>Proceed to file a claim</span>
//                         </button>
//                     </div>
//                 </div>

//             </form>
//         </div>
//     )
// }


"use client"

import { useState, useRef } from "react"
import { Calendar, MapPin, Search } from "lucide-react"
import Title from "../shared/title/Title"
import SelectInput from '../ui/SelectInput'
import FileInput from "../shared/file-input/FileInput"
import toast from "react-hot-toast"

export default function ClaimStep2({ handlePrev, handleNext, setIncidents, incidents }) {
    // Refs
    const dateInputRef = useRef(null)

    // State for inputs
    const [dateValue, setDateValue] = useState("")
    const [selectedIncident, setSelectedIncident] = useState("single")
    const [damageType, setDamageType] = useState("Own damage; Third Party Damage")
    const [injury, setInjury] = useState("No")
    const [vehicle, setVehicle] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [notifyInsurer, setNotifyInsurer] = useState(false)

    // Date picker open
    const handleDateClick = () => {
        dateInputRef.current?.showPicker()
    }

    // Gather form data
    const collectIncidentData = () => ({
        incidentType: selectedIncident,
        vehicle,
        date: dateValue,
        location,
        damageType,
        injury,
        description,
        notifyInsurer,
        id: incidents.length + 1
    })

    // Handle save
    const handleSaveAndClose = () => {
        setIncidents([collectIncidentData()])
        toast.success("Incident saved and close the page")
        handlePrev()
    }

    // Handle submit
    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="bg-white w-full pb-4">
            <form className="space-y-6" onSubmit={handleFormSubmit}>
                <Title text={"Create Incident "} className="mb-10 text-center pb-4 border-b" />
                <div className="lg:w-1/2 mx-auto space-y-4">

                    {/* Incident Type & Vehicle */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="incident-type" className="block text-sm font-medium text-gray-700">
                                What type of incident is it?
                            </label>
                            <SelectInput
                                defaultValue="Lorem Ipsum"
                                options={[
                                    { label: "Lorem Ipsum", value: "Lorem Ipsum" },
                                    { label: "Traffic Accident", value: "accident" },
                                    { label: "Vehicle Theft", value: "theft" },
                                    { label: "Vandalism", value: "vandalism" },
                                    { label: "Other", value: "other" }
                                ]}
                                setValue={setSelectedIncident}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700">
                                Vehicle involved
                            </label>
                            <div className="relative">
                                <input
                                    id="vehicle"
                                    type="text"
                                    placeholder="Search vehicle"
                                    value={vehicle}
                                    onChange={(e) => setVehicle(e.target.value)}
                                    className="w-full h-12 pr-12 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                                />
                                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
                            </div>
                        </div>
                    </div>

                    {/* Date & Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="incident-date" className="block text-sm font-medium text-gray-700">
                                When was the incident
                            </label>
                            <div className="relative w-full h-12">
                                <input
                                    id="incident-date-display"
                                    type="text"
                                    readOnly
                                    value={dateValue}
                                    placeholder=""
                                    onChange={(e) => setDateValue(e.target.value)}
                                    className="w-full h-full pl-12 pr-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                                />
                                <Calendar className="absolute z-1 left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" onClick={handleDateClick} />
                                <input
                                    ref={dateInputRef}
                                    type="date"
                                    className="absolute inset-0 opacity-0 cursor-pointer z-0 w-full h-full"
                                    onChange={(e) => {
                                        if (e.target.value) {
                                            const date = new Date(e.target.value)
                                            setDateValue(date.toLocaleDateString())
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="incident-location" className="block text-sm font-medium text-gray-700">
                                In which town was the incident?
                            </label>
                            <div className="relative">
                                <input
                                    id="incident-location"
                                    type="text"
                                    placeholder=""
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-full h-12 pl-12 pr-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                                />
                                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
                            </div>
                        </div>
                    </div>

                    {/* Damage & Injury */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="damage-type" className="block text-sm font-medium text-gray-700">
                                What damaged occurred during incident?
                            </label>
                            <SelectInput
                                defaultValue="Own damage; Third Party Damage"
                                options={[
                                    { label: "Own damage; Third Party Damage", value: "Own damage; Third Party Damage" },
                                    { label: "Own damage only", value: "own" },
                                    { label: "Third party damage", value: "third-party" },
                                    { label: "Own damage; Third Party Damage", value: "both" },
                                    { label: "No damage", value: "none" }
                                ]}
                                setValue={setDamageType}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="injury" className="block text-sm font-medium text-gray-700">
                                Where there any injury or loss of life?
                            </label>
                            <SelectInput
                                defaultValue="No"
                                options={[
                                    { label: "No", value: "no" },
                                    { label: "Minor injury", value: "minor" },
                                    { label: "Serious injury", value: "serious" },
                                    { label: "Fatal", value: "fatal" }
                                ]}
                                setValue={setInjury}
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Briefly describe what happened
                        </label>
                        <textarea
                            id="description"
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-4 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
                        />
                    </div>

                    {/* File Upload */}
                    <div className="space-y-3">
                        <label className="block text-sm font-medium text-gray-700">Upload photos of the incident (optional)</label>
                        <div className="grid grid-cols-5 gap-4 lg:w-[70%]">
                            {[...Array(5)].map((_, index) => (
                                <FileInput key={index} />
                            ))}
                        </div>
                    </div>

                    {/* Notify Insurer */}
                    <div className="space-y-3 bg-secondary py-6 px-4 lg:px-10 rounded-xl mt-4 md:mt-6">
                        <label className="block text-sm font-medium text-gray-700">Notify insurer of incident</label>
                        <div className="flex lg:items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={notifyInsurer}
                                onChange={(e) => setNotifyInsurer(e.target.checked)}
                                className="h-4 w-4 text-primary bg-white border-gray-300 rounded accent-primary checked:border-transparent"
                            />
                            <label htmlFor="notify-insurer" className="text-sm text-gray-600 cursor-pointer">
                                Send incident details to your insurer now
                            </label>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid lg:grid-cols-2 w-fit sm:flex-row gap-3 pt-4 mx-auto">
                        <button
                            type="button"
                            onClick={handleSaveAndClose}
                            className="py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 transition-colors"
                        >
                            Save & Close
                        </button>
                        <button
                            type="submit"
                            className="py-2 px-4 border border-transparent rounded-md bg-primary text-white hover:bg-primary focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                        >
                            <span>Proceed to file a claim</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
