"use client"
import FileInput from '@/components/shared/file-input/FileInput'
import FileUpload from '@/components/shared/file-upload/FileUpload'
import SideLocation from '@/components/shared/side-location/SideLocation'
import Container from '@/components/ui/Container'
import { ChevronDown, ChevronUp, MoreHorizontal } from "lucide-react"
import { useState } from "react"

const services = [
    {
        id: 0,
        title: "Engine Replacement",
        vehicle: "2012 BMW X3",
        icon: ">",
    },
    {
        id: 1,
        title: "Tune up scheduled maintenance",
        vehicle: "2018 Toyota Hilux",
        icon: ">",
    },
]

export default function page() {
    const [expandedService, setExpandedService] = useState(1)



    const toggleService = (id) => {
        setExpandedService(expandedService === id ? null : id)
    }
    return (
        <Container className={"flex flex-col-reverse lg:flex-row"}>
            <Container className={"lg:w-[70%] ml-0 bg-white rounded-lg !my-0"}>
                <div>
                    {/* Header */}
                    <div className="p-6 border-b border-gray-200">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Request #R1205</h1>
                    </div>

                    {/* Services List */}
                    <div className="divide-y divide-gray-200">
                        {services.map((service) => (
                            <div key={service.id} className="p-4 sm:p-6">
                                <div
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={() => toggleService(service.id)}
                                >
                                    <div className="flex items-center space-x-3 sm:space-x-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-400 rounded-sm opacity-60"></div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{service.title}</h3>
                                            <p className="text-gray-500 text-xs sm:text-sm">{service.vehicle}</p>
                                        </div>
                                    </div>
                                    <div className="text-red-500">
                                        {expandedService === service.id ? (
                                            <ChevronUp className="w-5 h-5" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Details Section - Only show when second service is expanded */}
                    {expandedService === 1 && (
                        <div className="border-t border-gray-200">
                            <div className="p-4 sm:p-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Details</h2>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm text-gray-500 block mb-1">Cover</label>
                                            <p className="text-gray-800 font-medium">Comprehensive</p>
                                        </div>
                                        <div>
                                            <label className="text-sm text-gray-500 block mb-1">Date Required</label>
                                            <p className="text-gray-800 font-medium">5 May, 2005</p>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm text-gray-500 block mb-1">Note</label>
                                        <p className="text-gray-800">Top Tech Is The Preferred Garage</p>
                                    </div>
                                </div>

                                {/* Upload Section */}
                                <div className="mt-6">
                                    <div className="border-2 border-dashed border-gray-200 rounded-lg p-6">
                                        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                                            {[...Array(5)].map((_, index) => (
                                                <FileInput />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Documents />
            </Container>
            <SideLocation className={"bg-secondary p-4 rounded-lg h-fit"} />
        </Container>
    )
}


function Documents({ }) {
    const [showMenu, setShowMenu] = useState(null)

    const documents = [
        {
            id: 1,
            name: "Policy report",
            addedBy: "Billy Smith",
            date: "25 Sep 2025",
        },
        {
            id: 2,
            name: "Driver License",
            addedBy: "Billy Smith",
            date: "25 Sep 2025",
        },
    ]

    const toggleMenu = (id) => {
        setShowMenu(showMenu === id ? null : id)
    }

    return (
        <div className="">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Documents</h2>
                <button className="text-sm text-gray-600 hover:text-gray-800 font-medium">Upload</button>
            </div>

            {/* Documents List */}
            <div className="space-y-4">
                {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0   relative" onClick={() => toggleMenu(doc.id)}>
                        <div className="flex items-center justify-between  w-full space-x-4">
                            {/* PDF Icon */}
                            <div className='flex gap-2 items-center'>
                                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                                    <div className="w-6 h-6 bg-red-500 rounded-sm flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">PDF</span>
                                    </div>
                                </div>
                                <h3 className="font-medium text-gray-900 mb-1">{doc.name}</h3>
                            </div>

                            {/* Document Info */}
                            <p className="text-sm text-gray-500">
                                Added by {doc.addedBy} on {doc.date}
                            </p>
                        </div>



                        {/* Dropdown Menu */}
                        {showMenu === doc.id && (
                            <>
                                {/* Backdrop */}
                                {/* <div className="fixed inset-0 z-10" onClick={() => setShowMenu(null)} /> */}

                                {/* Menu */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-[2000] min-w-[120px]">
                                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                        View
                                    </button>
                                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                        Download
                                    </button>
                                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}