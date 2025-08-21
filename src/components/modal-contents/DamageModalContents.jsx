"use client"

import { useState } from "react"
import FileInput from "../shared/file-input/FileInput"
import ModalTitle from "../shared/modal/ModalTitle"
import { useDispatch } from "react-redux"
import { setDamage, updateDamage } from "@/store/Feature/claim-services"

export default function DamageModalContents({ currentVehicle, setIsModalOpen, editId, damageDetails, setEditId }) {
    const currentDamage = damageDetails?.find(damage => damage.id === editId)
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        id: editId !== null ? editId : damageDetails?.length,
        damageType: currentDamage ? currentDamage.damageType : "",
        damageDescription: currentDamage ? currentDamage.damageDescription : "",
        vehicleMobile: currentDamage ? currentDamage.vehicleMobile : "",
        damageInspected: currentDamage ? currentDamage.damageInspected : "",
    })

    const [uploadedFiles, setUploadedFiles] = useState([])

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSave = () => {
        if (editId !== null) {
            const restDamages = damageDetails.filter(damage => damage.id !== editId)
            dispatch(updateDamage({ ...formData, ...restDamages }))
        } else {
            dispatch(setDamage([{ ...formData, id: damageDetails.length + 1, vehicle: currentVehicle }]))
        }
        setIsModalOpen(false)
        setEditId(null)
        // handleNext()
        // console.log("Uploaded files:", uploadedFiles)
    }

    return (
        // <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto bg-white rounded-lg max-w-xs lg:max-w-3xl">
            <ModalTitle title={"Damage to vehicle"} className={"text-center mb-6 lg:mb-10"} />
            <div className="lg:w-2/3 mx-auto">
                {/* Form Fields */}
                <div className="space-y-4 mb-8">
                    <div>
                        <input
                            type="text"
                            placeholder="What is the type of damage (partial damage or total loss)"
                            value={formData.damageType}
                            onChange={(e) => handleInputChange("damageType", e.target.value)}
                            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors placeholder-gray-500 text-sm"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Describe the damage"
                            value={formData.damageDescription}
                            onChange={(e) => handleInputChange("damageDescription", e.target.value)}
                            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors placeholder-gray-500 text-sm"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Is the vehicle mobile?"
                            value={formData.vehicleMobile}
                            onChange={(e) => handleInputChange("vehicleMobile", e.target.value)}
                            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors placeholder-gray-500 text-sm"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Has the damage been inspected?"
                            value={formData.damageInspected}
                            onChange={(e) => handleInputChange("damageInspected", e.target.value)}
                            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors placeholder-gray-500 text-sm"
                        />
                    </div>
                </div>

                {/* Upload Section */}
                <div className="mb-8">
                    <h3 className="text-gray-800 font-medium mb-6 text-sm">
                        Upload close-up and full view photos of the damage/vehicle (if available)
                    </h3>

                    <div className="grid grid-cols-5 gap-2">
                        {[...Array(5)].map((_, index) => (
                            <FileInput />
                        ))}
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleSave}
                        className="bg-primary hover:bg-primary text-white px-8 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto sm:min-w-[200px]"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
        // </div>
    )
}
