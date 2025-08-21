"use client"

import ClaimInsuranceModal from '@/components/modal-contents/ClaimInsuranceModal'
import Modal from '@/components/shared/modal/Modal'
import Title from '@/components/ui/Title'
import { useState } from 'react'
import PrimaryButton from '../shared/buttons/PrimaryButton'
import BackButton from '../shared/back-button/BackButton'

export default function page({ handleAddDamageDetails, currentPerson, insuranceDetails, handlePrev }) {
    console.log(currentPerson, "currentPerson")
    const [modalOpen, setModalOpen] = useState(false)
    const [editId, setEditId] = useState(null)
    // const [insuranceDetails, setInsuranceDetails] = useState([])

    const handleEdit = (editId) => {
        setEditId(editId)
        setModalOpen(true)
    }
    return (
        <div className='lg:w-fit mx-auto'>
            {/* <Title text={"What is the insurance status of the vehicle?"} className={"text-center lg:text-nowrap lg:text-4xl"} /> */}
            <h1 className="relative pl-10 lg:pl-0 text-2xl lg:text-4xl font-bold text-center mb-4 lg:mb-8 pb-4">
                What is the insurance status of the vehicle?
                <BackButton onclick={handlePrev} className={"top-0 -translate-x-[10vw]"} />

            </h1>
            <hr className='my-4 lg:mt-5 lg:mb-10' />
            <div className='space-y-4 lg:w-[60%] max-w-xl mx-auto'>
                <button onClick={() => setModalOpen(true)} className="w-full py-4 px-6 rounded-lg border-2 text-left transition-colors text-gray-secondary font-semibold">
                    Valid
                </button>

                {
                    insuranceDetails.find(item => item?.person?.id == currentPerson.id) && insuranceDetails.filter(item => item?.person?.id == currentPerson.id).map((insurance, index) => (<div className=" bg-secondary p-4 rounded-lg w-[90%] mx-auto">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium text-gray-900">Insurances</h2>
                            <button onClick={() => handleEdit(insurance.id)} className="text-primary text-sm font-medium hover:text-primary transition-colors">
                                Edit
                            </button>
                        </div>

                        {/* Insurance Information List */}
                        <div className="space-y-2">
                            <p key={index} className="text-gray-500 text-sm">
                                {insurance.insurer}
                            </p>
                            <p key={index} className="text-gray-500 text-sm">
                                {insurance.cover}
                            </p>
                            <p key={index} className="text-gray-500 text-sm">
                                {insurance.expiryDate}
                            </p>
                        </div>
                    </div>))
                }
                <button className="w-full py-4 px-6 rounded-lg border-2 text-left transition-colors text-gray-secondary font-semibold">
                    Not valid
                </button>
                <button className="w-full py-4 px-6 rounded-lg border-2 text-left transition-colors text-gray-secondary font-semibold">
                    I don’t know
                </button>

                {
                    insuranceDetails?.length > 0 && <PrimaryButton btnText={"Next"} className={"w-fit mt-4 lg:mt-6 mx-auto min-w-[200px]"} hasIcon={true} onClick={handleAddDamageDetails} />
                }
            </div>

            <Modal isModalOpen={modalOpen} setIsModalOpen={() => { setModalOpen(false); setEditId(null) }}>
                <ClaimInsuranceModal currentPerson={currentPerson} setIsModalOpen={setModalOpen} editId={editId} insuranceDetails={insuranceDetails} setEditId={setEditId} />
            </Modal>
        </div>
    )
}
