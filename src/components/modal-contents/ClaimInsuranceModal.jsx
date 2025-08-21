import { useState } from 'react'
import TextInput from '../ui/TextInput'
import ModalTitle from '../shared/modal/ModalTitle'
import { useDispatch } from 'react-redux'
import { setInsurance, updateInsurance } from '@/store/Feature/claim-services'

export default function ClaimInsuranceModal({ currentPerson, setIsModalOpen, editId, insuranceDetails, setEditId }) {
    const currentInsurance = insuranceDetails?.find(insurance => insurance.id === editId)
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        id: editId !== null ? editId : insuranceDetails?.length,
        insurer: currentInsurance ? currentInsurance.insurer : "",
        cover: currentInsurance ? currentInsurance.cover : "",
        expiryDate: currentInsurance ? currentInsurance.expiryDate : "",
        insuranceInspected: currentInsurance ? currentInsurance.insuranceInspected : "",
    })

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSave = () => {
        if (editId !== null) {
            const restInsurances = insuranceDetails.filter(insurance => insurance.id !== editId)
            console.log({ ...formData, ...restInsurances })
            // setInsuranceDetails(prev => [...restInsurances, formData])
            dispatch(updateInsurance({ ...formData, ...restInsurances }))

        } else {
            // setInsuranceDetails(prev => [...prev, formData])
            dispatch(setInsurance([{ ...formData, id: insuranceDetails.length + 1, person: currentPerson }]))
        }
        setIsModalOpen(false)
        setEditId(null)
        // console.log("Uploaded files:", uploadedFiles)
    }

    return (
        <div>
            <ModalTitle title={"Insurance details"} className={"text-center mb-6 lg:mb-10"} />
            <div className='space-y-4 lg:w-[60%] mx-auto'>
                <TextInput inputProps={{
                    placeholder: "Insurer", className: "w-full", value: formData.insurer, onChange: (e) => { handleInputChange("insurer", e.target.value) }
                }} />
                <TextInput inputProps={{
                    placeholder: "Cover", className: "w-full", value: formData.cover, onChange: (e) => { handleInputChange("cover", e.target.value) }
                }} />
                <TextInput inputProps={{
                    placeholder: "Expiry date", className: "w-full", value: formData.expiryDate, onChange: (e) => { handleInputChange("expiryDate", e.target.value) }
                }} />
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
    )
}
