import { HiOutlineCloudUpload } from "react-icons/hi";
import Image from 'next/image';
import React from 'react'

const documents = [
    {
        id: 1,
        name: "Certificate and Insurance",
    },
    {
        id: 2,
        name: "Policy Schedule",
    },
    {
        id: 3,
        name: "Delat Note",
    },
    {
        id: 4,
        name: "Receipt",
    },
    {
        id: 5,
        name: "Policy Wording",
    },
    {
        id: 6,
        name: "Policy Claims",
    },
];

export default function DocumentsModalContents() {
    return (
        <div className="w-full max-w-2xl space-y-6 bg-white">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                Documents
            </h1>

            {/* Document List */}
            <div className="space-y-4">
                {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-md bg-red-50 flex items-center justify-center text-primary flex-shrink-0">
                                <Image src={"/icon/pdf-icon.svg"} alt={doc.name} width={24} height={24} />
                            </div>
                            <span className="text-base font-medium text-gray-800">{doc.name}</span>
                        </div>
                        <button className="text-primary hover:text-primary">
                            <HiOutlineCloudUpload size={24} className="rotate-180" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
