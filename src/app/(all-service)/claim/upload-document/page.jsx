"use client"
import DocumentModalContent from '@/components/modal-contents/DocumentModalContent'
import BackButton from '@/components/shared/back-button/BackButton'
import Modal from '@/components/shared/modal/Modal'
import RedBtn from '@/components/ui/RedBtn'
import Title from '@/components/ui/Title'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function page() {
    const [file, setFile] = useState([])
    const [hasDocument, setHasDocument] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editId, setEditId] = useState(null)
    const router = useRouter()

    console.log(file, "file")

    const handleEdit = (editId) => {
        setEditId(editId)
        setIsModalOpen(true)
    }
    return (
        <div className='w-fit mx-auto custom-padding'>
            {/* <Title text={"Upload necessary documents to support <br class='hidden lg:block'/> your claim"} className={"text-center lg:text-nowrap lg:text-4xl"} /> */}
            <h1 className="relative pl-10 lg:pl-0 text-2xl lg:text-4xl font-bold text-center mb-4 lg:mb-8 pb-4">
                Upload necessary documents to support <br class='hidden lg:block' /> your claim
                <BackButton onclick={() => {
                    router.back()
                }} className={"top-0 lg:-translate-x-[10vw]"} />

            </h1>
            <div className='space-y-4 w-[70%] mx-auto mt-6 lg:mt-10'>
                <button
                    onClick={() => {
                        setHasDocument(true)
                        setIsModalOpen(true)
                    }}
                    className="w-full py-4 px-6 rounded-lg border-2 text-left transition-colors text-gray-secondary font-semibold block">
                    Add documents
                </button>

                {
                    file?.map((localFile, index) => (
                        <>
                            <div className="bg-[#fef2f24f] rounded-lg px-3 py-2 lg:px-4 lg:py-3 mb-4 w-[90%] mx-auto" key={index}>
                                {/* Pick Up Button */}
                                <div className="flex justify-between mb-4">
                                    <p className="md:text-lg lg:text-xl text-gray-black font-bold">Documents</p>
                                    <button className="text-red-500 cursor-pointer md:text-lg" onClick={() => handleEdit(localFile.id)}>
                                        Edit
                                    </button>
                                </div>
                                <div className="mt-2  text-sm md:text-base space-y-4">
                                    {file?.map((item, index) =>
                                        item.localFile?.map((fileObj, fileIndex) => (
                                            <div key={`${index}-${fileIndex}`} className="flex items-center space-x-3">
                                                <Image src={"/icon/pdf-icon.svg"} alt={"pdf-icon"} width={20} height={20} />
                                                <span className="text-gray-800 font-medium">{fileObj.name}</span>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                        </>)
                    )
                }
                <button onClick={() => setHasDocument(false)} className="w-full py-4 px-6 rounded-lg border-2 text-left transition-colors text-gray-secondary font-semibold block">
                    No documents available
                </button>
            </div>

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-fit"}>
                <DocumentModalContent setFile={setFile} file={file} setIsModalOpen={setIsModalOpen} editId={editId} />
            </Modal>

            <RedBtn path={"/claim-service"} text={"Next"} hasIcon className={"!mt-6 lg:!mt-8 block"} />

        </div>
    )
}
