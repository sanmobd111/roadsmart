"use client"

import { useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import ModalTitle from "../shared/modal/ModalTitle";
import Image from "next/image";

export default function DocumentModalContent({ file, setFile, setIsModalOpen, editId }) {
    console.log(file, "file")
    const currentLocalFile = file?.find(localFile => localFile?.id === editId)

    console.log(currentLocalFile)
    const [formData, setFormData] = useState({
        id: editId !== null ? editId : file?.length,
        localFile: currentLocalFile ? currentLocalFile.localFile : [],
    })

    // const [uploadedFiles, setUploadedFiles] = useState([])

    const handleInputChange = (field, value) => {
        console.log(value)
        setFormData((prev) => ({
            ...prev,
            [field]: [...formData[field], ...value],
        }))
    }

    //   const handleFileUpload = (event, index) => {
    //     const file = event.target.files[0]
    //     if (file) {
    //       setUploadedFiles((prev) => ({
    //         ...prev,
    //         [index]: file,
    //       }))
    //     }
    //   }

    const handleSave = () => {
        if (editId !== null) {
            const restLocalFiles = file.filter(localFile => localFile.id !== editId)
            setFile([...restLocalFiles, formData])
        } else {
            setFile(prev => [...prev, formData])
        }
        setIsModalOpen(false)
    }

    console.log(formData, " form data")
    const inputRef = useRef(null)

    return (
        <div className="cursor-pointer mx-auto bg-white">
            <ModalTitle title={"Upload Documents"} className={"text-center"} />
            {/* Upload Area */}
            <div className="border-2 border-dashed border-red-300 bg-pink-50 rounded-lg px-12 py-6 text-center mb-6" onClick={() => inputRef.current?.click()}>
                <div className="flex flex-col lg:flex-row justify-center items-center space-x-6">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                        {/* <Upload  /> */}
                        {/* <LuCloudUpload  /> */}
                        <FiUploadCloud className="w-10 h-10 text-red-500" />
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm mb-1">Drag and drop or <span
                            className="text-red-500 cursor-pointer underline"
                        >
                            browse
                        </span> to choose file</p>
                        <button className="text-red-500 text-sm underline">Add from URL</button>
                    </div>
                    <input
                        ref={inputRef}
                        type="file"
                        className="hidden"
                        onChange={(e) => handleInputChange("localFile", e.target.files)}
                        multiple
                    />

                </div>
            </div>

            {/* Document Options */}
            <div className=" mb-8 grid grid-cols-2 gap-4 justify-center items-center">
                {
                    formData?.localFile?.map((file, index) => (<div key={index} className="flex items-center space-x-3">
                        <Image src={"/icon/pdf-icon.svg"} alt={"pdf-icon"} width={20} height={20} />
                        <span className="text-gray-800 font-medium">Police report</span>
                    </div>))
                }

            </div>

            {/* Save Button */}
            <button onClick={handleSave} className="w-full bg-primary hover:bg-primary text-white py-3 px-6 rounded-lg font-medium">Save</button>
        </div>
    )
}
