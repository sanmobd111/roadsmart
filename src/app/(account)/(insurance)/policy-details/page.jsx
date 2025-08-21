"use client"

import carImg from '@/assets/images/pngwing.com (3).png'
import StatusProgressbar from '@/components/account/StatusProgressbar'
import RequestHeader from '@/components/account/request/RequestHeader'
import Container from '@/components/shared/container/Container'
import Image from 'next/image'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { SlCloudUpload } from 'react-icons/sl'

export default function page() {
    return (
        <Container>
            <div className='w-full space-y-6'>
                <RequestHeader />
                <div className='flex flex-col lg:flex-row justify-between gap-16 lg:gap-0 '>
                    <div className='flex-grow space-y-10'>
                        <div>
                            <h3 className='border-b pb-4 mb-4 text-xl text-center lg:text-left font-bold'>Coverage</h3>
                            <div className='space-y-4'>
                                <PolicyDetailsCard />
                                <PolicyDetailsCard />
                                <PolicyDetailsCard />
                                <p className='text-sm text-gray-500 text-left mt-6'>+ Add Coverage</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='border-b pb-4 mb-4 text-xl text-center lg:text-left font-bold'>Coverage</h3>
                            <div className='space-y-4'>
                                <PolicyDetailsCard />
                                <PolicyDetailsCard />
                                <PolicyDetailsCard />
                                <p className='text-sm text-gray-500 text-left mt-6'>+ Add Coverage</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='border-b pb-4 mb-4 text-xl text-center lg:text-left font-bold'>Coverage</h3>
                            <div className='space-y-4'>
                                <PolicyDetailsCard />
                                <PolicyDetailsCard />
                                <PolicyDetailsCard />
                                <p className='text-sm text-gray-500 text-left mt-6'>+ Add Coverage</p>
                            </div>
                        </div>
                        <Documents />
                    </div>
                    <StatusProgressbar />
                </div>
            </div>
        </Container>
    )
}

function Documents() {
    const [dropdawnOpen, setDropdownOpen] = useState(true)
    return (
        <div>
            <div className="flex justify-between items-center border-b border-gray-400 mb-4" onClick={() => setDropdownOpen(!dropdawnOpen)}>
                <h2 className="font-bold text-2xl pb-2 ">Policy Documents</h2>
                {/* <p className="text-gray cursor-pointer" onClick={handleUpload}>+ upload</p> */}

                <IoIosArrowDown className={`${dropdawnOpen ? "rotate-180" : ""} text-gray text-2xl`} />
            </div>
            {
                dropdawnOpen && <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center px-4 py-3 mt-4 custom-shadow rounded-xl">
                        <div className="flex gap-2 items-center">
                            <Image src={carImg} className="w-16 h-16 object-cover" />
                            <p className="font-medium">Stella Bella (A99087)</p>
                        </div>
                        <SlCloudUpload className="text-primary text-2xl" />
                    </div>
                    <div className="flex justify-between items-center px-4 py-3 mt-4 custom-shadow rounded-xl">
                        <div className="flex gap-2 items-center">
                            <Image src={carImg} className="w-16 h-16 object-cover" />
                            <p className="font-medium">Stella Bella (A99087)</p>
                        </div>
                        <SlCloudUpload className="text-primary text-2xl" />
                    </div>
                    <div className="flex justify-between items-center px-4 py-3 mt-4 custom-shadow rounded-xl">
                        <div className="flex gap-2 items-center">
                            <Image src={carImg} className="w-16 h-16 object-cover" />
                            <p className="font-medium">Stella Bella (A99087)</p>
                        </div>
                        <SlCloudUpload className="text-primary text-2xl" />
                    </div>
                    <div className="flex justify-between items-center px-4 py-3 mt-4 custom-shadow rounded-xl">
                        <div className="flex gap-2 items-center">
                            <Image src={carImg} className="w-16 h-16 object-cover" />
                            <p className="font-medium">Stella Bella (A99087)</p>
                        </div>
                        <SlCloudUpload className="text-primary text-2xl" />
                    </div>
                </div>
            }
        </div>
    )
}



function PolicyDetailsCard() {
    return (
        <div className='flex flex-row  gap-4 lg:gap-0 justify-between items-center'>
            <div className='flex gap-4 flex-row items-center'>
                <Image src={carImg} alt="Car" width={60} height={60} className="rounded-lg object-contain w-20 h-20" />
                <h4 className='text-lg font-semibold text-gray-600'>2016 Toyota Harrier ALJ1687</h4>
            </div>
            <span className='text-gray-400'>View</span>
        </div>
    )
}

