import React, { useState } from 'react'
import Container from '../shared/container/Container'
import { FaUser } from 'react-icons/fa'
import { MdOutlineFileUpload } from 'react-icons/md'
import { Button } from '../ui/button'
import Modal from '../shared/modal/Modal'
import { Edit } from 'lucide-react'
import EditProfileModalContents from '../modal-contents/account-view/EditProfileModalContents'
import UploadProfileImageModalContents from '../modal-contents/account-view/UploadProfileImageModalContents'

export default function AccountViewHeader({ isPrivateView, setIsPrivateView }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState("edit-profile");
    return (
        <div className="bg-secondary py-10 lg:py-16">
            <Container className=" my-0  relative block">
                <div onClick={() => setIsPrivateView(!isPrivateView)}>
                    {
                        isPrivateView ? (<h1 className='text-gray-400 text-center'>This is your private view of your public profile. <span className='text-gray-800 cursor-pointer'>See what others see</span></h1>) : (<h1 className='text-gray-400 text-center cursor-pointer'>Back to private view</h1>)
                    }
                </div>
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    <div className=" bg-primary aspect-square rounded-full flex justify-center items-center w-[30%] lg:w-[10%]">
                        <FaUser className="text-4xl lg:text-7xl text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl lg:text-5xl">Lorem Ipsum</h1>
                        <div className='flex gap-4 mt-4'>
                            <Button className="bg-transparent border border-gray-300 hover:bg-transparent text-gray-500 px-6 py-2 text-sm" onClick={() => {
                                setIsModalOpen(true);
                                setCurrentModal("edit-profile");
                            }}>
                                Edit Profile
                            </Button>
                            <Button className="bg-primary hover:bg-primary text-white px-6 py-2 text-sm">
                                Create review
                            </Button>
                        </div>
                    </div>

                </div>
                {
                    !isPrivateView && (
                        <button className="p-2 border border-gray-500 rounded-sm absolute top-10 right-0"><MdOutlineFileUpload className="text-primary text-2xl" /></button>
                    )
                }
            </Container>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-xs"}>
                {
                    currentModal === "edit-profile" ? <EditProfileModalContents setCurrentModal={setCurrentModal} />: <UploadProfileImageModalContents />
                }
            </Modal>
        </div>
    )
}
