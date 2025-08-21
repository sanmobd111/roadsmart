import DriverModalContent from '@/components/modal-contents/DriverModalContent'
import BackButton from '@/components/shared/back-button/BackButton'
import PrimaryButton from '@/components/shared/buttons/PrimaryButton'
import Container from '@/components/shared/container/Container'
import Modal from '@/components/shared/modal/Modal'
import Title from '@/components/ui/Title'
import { Item } from '@radix-ui/react-accordion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function DriverStep1({ handleNext, setDriver, currentPerson, license }) {
    // console.log(license, "license")
    const [modalOpen, setModalOpen] = useState(false)
    const [editId, setEditId] = useState(null)

    const [currentDriver, setCurrentDriver] = useState("")
    const handleEdit = (editId) => {
        setEditId(editId)
        setModalOpen(true)
    }
    const router = useRouter()

    return (
        <Container>
            <div className='lg:w-fit mx-auto'>
                {/* <Title text={"Was the driver licensed at the time of accident?"} className={"text-center lg:text-nowrap lg:text-4xl"} /> */}
                <h1 className="relative pl-10 lg:pl-0 text-2xl lg:text-4xl font-bold text-center mb-4 lg:mb-8 pb-4">
                    Was the driver licensed at the time of accident?
                    <BackButton onclick={() => {
                        router.back()
                    }} className={"top-0 lg:-translate-x-[10vw]"} />

                </h1>
                <hr className='my-4 lg:mt-6 lg:mb-10' />
                <div className='space-y-4 lg:w-[60%] max-w-xl mx-auto'>
                    <button
                        onClick={() => setCurrentDriver("yes")}
                        className={`w-full py-4 px-6 rounded-lg border-2 mb-4 text-left transition-colors text-gray-secondary font-semibold ${currentDriver === "third-party-damage" ? "border border-primary" : ""}`}
                    >
                        Yes
                    </button>
                    <div className=''>
                        {
                            license?.filter(item => item.person.id == currentPerson.id).length === 0 && currentDriver === "yes" ?
                                <div className="mb-6 lg:mb-10 w-[70%]">
                                    <button
                                        onClick={() => setModalOpen(true)}
                                        className={`w-full py-4 px-6 rounded-lg border-2 text-left transition-colors text-gray-secondary font-semibold`}
                                    >
                                        Add driver details
                                    </button>
                                    <PrimaryButton btnText={"Confirm"} className={"w-fit mt-2 mx-auto min-w-[200px]"} hasIcon={true} />
                                </div> : license?.filter(item => item.person.id == currentPerson.id).map((d, index) => (<div className="mb-6 bg-secondary p-4 rounded-lg w-[90%] mx-auto">
                                    {console.log(d)}
                                    {/* Header */}
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-lg font-medium text-gray-900">Driver</h2>
                                        <button onClick={() => handleEdit(d.id)} className="text-primary text-sm font-medium hover:text-primary transition-colors">
                                            Edit
                                        </button>
                                    </div>

                                    {/* D Information List */}
                                    <div className="space-y-2">
                                        <p key={index} className="text-gray-500 text-sm">
                                            {d.name}
                                        </p>
                                        <p key={index} className="text-gray-500 text-sm">
                                            {d.status}
                                        </p>
                                        <p key={index} className="text-gray-500 text-sm">
                                            {d.fault}
                                        </p>
                                    </div>
                                </div>))
                        }
                    </div>
                    <button
                        onClick={() => setCurrentDriver("no")}
                        className={`w-full py-4 px-6 rounded-lg border-2 text-left transition-colors text-gray-secondary font-semibold ${currentDriver === "third-party-damage" ? "border border-primary" : ""}`}
                    >
                        No
                    </button>
                    <div className='w-fit mx-auto'>
                        <PrimaryButton btnText={"Next"} className={"w-fit mt-4 lg:mt-6 mx-auto min-w-[200px]"} hasIcon={true} onClick={handleNext} />
                    </div>
                </div>
                <Modal isModalOpen={modalOpen} setIsModalOpen={() => { setModalOpen(false); setEditId(null) }}>
                    <DriverModalContent setDriver={setDriver} setIsModalOpen={setModalOpen} editId={editId} setEditId={setEditId} driverDetails={license} currentPerson={currentPerson} />
                </Modal>

            </div>
        </Container>
    )
}
