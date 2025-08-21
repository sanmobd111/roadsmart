"use client"

import DamageModalContents from '@/components/modal-contents/DamageModalContents'
import Modal from '@/components/shared/modal/Modal'
import Title from '@/components/ui/Title'
import { useState } from 'react'
import PrimaryButton from '../shared/buttons/PrimaryButton'
import BackButton from '../shared/back-button/BackButton'
import { useRouter } from 'next/navigation'

export default function DamageStep2({ handleNext, currentVehicle, damageDetails, damageType: currentDamage, setDamageType: setCurrentDamage }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editId, setEditId] = useState(null)
    const handleEdit = (editId) => {
        setEditId(editId)
        setIsModalOpen(true)
    }
    const router = useRouter()

    console.log(currentDamage, "currentDamage")
    return (
        <div className='w-fit'>
            {/* <Title text={"What is the nature of the damage to the <br class='hidden lg:block'/> Toyota Hilux?"} className={"text-center lg:text-nowrap lg:text-4xl"} /> */}
            <h1 className="relative pl-10 lg:pl-0 text-2xl lg:text-4xl font-bold text-center mb-4 lg:mb-8 pb-4">
                What is the nature of the damage to the <br class='hidden lg:block' /> Toyota Hilux?
                <BackButton onclick={() => {
                    router.back()
                }} className={"top-0 -translate-x-[10vw]"} />

            </h1>
            <hr className='mb-10 mt-3' />
            <div className='lg:w-[70%] max-w-xl mx-auto'>
                <button
                    onClick={() => setCurrentDamage("own-damage")}
                    className={`w-full py-4 px-6 rounded-lg border-2 mb-4 text-left transition-colors text-gray-secondary font-semibold ${currentDamage === "own-damage" ? "border border-primary" : ""}`}
                >
                    Own damage
                </button>
                {
                    damageDetails.find(item => item?.vehicle?.id == currentVehicle?.id) && damageDetails.filter(item => item?.vehicle?.id == currentVehicle.id).map((damage, index) => (<div className=" bg-secondary p-4 rounded-lg mb-10 w-[90%] mx-auto">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium text-gray-900">Damages</h2>
                            <button onClick={() => handleEdit(damage.id)} className="text-primary text-sm font-medium hover:text-primary transition-colors">
                                Edit
                            </button>
                        </div>

                        {/* Damage Information List */}
                        <div className="space-y-2">
                            <p key={index} className="text-gray-500 text-sm">
                                {damage.damageType}
                            </p>
                            <p key={index} className="text-gray-500 text-sm">
                                {damage.damageDescription}
                            </p>
                            <p key={index} className="text-gray-500 text-sm">
                                {damage.vehicleMobile}
                            </p>
                            <p key={index} className="text-gray-500 text-sm">
                                {damage.damageInspected}
                            </p>
                            <PrimaryButton btnText={"Confirm"} className={"w-fit mt-2 mx-auto min-w-[200px]"} />
                        </div>
                    </div>))
                }
                {
                    currentDamage === "own-damage" && damageDetails.find(item => item?.vehicle?.id == currentVehicle.id) === undefined &&
                    <div className="mb-6 lg:mb-10 w-[70%]">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className={`w-full py-4 px-6 rounded-lg border-2 text-left transition-colors text-gray-secondary font-semibold`}
                        >
                            Add damage details
                        </button>
                        <PrimaryButton btnText={"Confirm"} className={"w-fit mt-2 mx-auto min-w-[200px]"} hasIcon={true} />
                    </div>
                }
                <button
                    onClick={() => setCurrentDamage("third-party-damage")}
                    className={`w-full py-4 px-6 rounded-lg border-2 mb-4 text-left transition-colors text-gray-secondary font-semibold ${currentDamage === "third-party-damage" ? "border border-primary" : ""}`}
                >
                    Third Party Damage
                </button>
                <button
                    onClick={() => setCurrentDamage("add-damage-details")}
                    className={`w-full py-4 px-6 rounded-lg border-2 text-left transition-colors text-gray-secondary font-semibold ${currentDamage === "add-damage-details" ? "border border-primary" : ""}`}
                >
                    Add damage details
                </button>
                <PrimaryButton btnText={"Next"} className={"w-fit mt-4 lg:mt-6 mx-auto min-w-[200px]"} hasIcon={true} onClick={handleNext} />
            </div>
            <Modal isModalOpen={isModalOpen}
                setIsModalOpen={() => {
                    setIsModalOpen(false)
                    setEditId(null)
                }
                } containerClassName={"w-[90%] lg:w-fit"} >
                <DamageModalContents damageDetails={damageDetails} currentVehicle={currentVehicle} setIsModalOpen={setIsModalOpen} editId={editId} setEditId={setEditId} handleNext={handleNext} />
            </Modal>
        </div >
    )
}
