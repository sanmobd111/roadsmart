"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import Container from '@/components/shared/container/Container';
import Modal from '@/components/shared/modal/Modal';
import MakePrimaryAddressModalContents from '@/components/modal-contents/address/MakePrimaryAddressModalContents';

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const addresses = [
        {
            id: 1,
            name: "Davy Nanduba DN124900",
            details: "iShop ZAMBIA, Unit E, Kendal House, Victoria Way Burgess Hill, West Sussex RH15 9NF",
            country: "United Kingdom",
            phone: "1444243935",
            isPrimary: true,
        },
        {
            id: 2,
            name: "Davy Nanduba DN124900",
            details: "iShop ZAMBIA, Unit E, Kendal House, Victoria Way Burgess Hill, West Sussex RH15 9NF",
            country: "United Kingdom",
            phone: "1444243935",
            isPrimary: false,
        },
        {
            id: 3,
            name: "Davy Nanduba DN124900",
            details: "iShop ZAMBIA, Unit E, Kendal House, Victoria Way Burgess Hill, West Sussex RH15 9NF",
            country: "United Kingdom",
            phone: "1444243935",
            isPrimary: false,
        },
        {
            id: 4,
            name: "Davy Nanduba DN124900",
            details: "iShop ZAMBIA, Unit E, Kendal House, Victoria Way Burgess Hill, West Sussex RH15 9NF",
            country: "United Kingdom",
            phone: "1444243935",
            isPrimary: false,
        },
        {
            id: 5,
            name: "Davy Nanduba DN124900",
            details: "iShop ZAMBIA, Unit E, Kendal House, Victoria Way Burgess Hill, West Sussex RH15 9NF",
            country: "United Kingdom",
            phone: "1444243935",
            isPrimary: false,
        },
    ];

    return (
        <Container className="">
            <div className="w-full max-w-3xl space-y-6 mx-auto">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                    Your Addresses
                </h1>

                {/* Primary Shipping Address */}
                {addresses.filter(addr => addr.isPrimary).map(primaryAddr => (
                    <div key={primaryAddr.id} className="border border-gray-200 rounded-lg p-4 mb-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                            Primary shipping address
                        </h2>
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-base font-medium text-gray-800 mb-1">{primaryAddr.name}</p>
                                <p className="text-sm text-gray-600">{primaryAddr.details}</p>
                                <p className="text-sm text-gray-600">{primaryAddr.country}</p>
                                <p className="text-sm text-gray-600">{primaryAddr.phone}</p>
                            </div>
                            <Button
                                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                            >
                                Edit
                            </Button>
                        </div>
                    </div>
                ))}

                {/* Other Shipping Addresses */}
                <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                    Other shipping address
                </h2>
                <div className="space-y-6">
                    {addresses.filter(addr => !addr.isPrimary).map((otherAddr) => (
                        <div key={otherAddr.id} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-base font-medium text-gray-800 mb-1">{otherAddr.name}</p>
                                    <p className="text-sm text-gray-600">{otherAddr.details}</p>
                                    <p className="text-sm text-gray-600">{otherAddr.country}</p>
                                    <p className="text-sm text-gray-600">{otherAddr.phone}</p>
                                    <div className='flex gap-2'>
                                        <button onClick={() => setIsModalOpen(true)} className="text-gray-600 hover:underline text-sm">Make primary</button>
                                        <button className="text-gray-600 hover:underline text-sm">Delete</button>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end space-y-2">
                                    <Button
                                        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                                    >
                                        Edit
                                    </Button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Links */}
                <div className="flex justify-start gap-4 mt-8">
                    <button className="text-primary hover:underline text-sm">Show more</button>
                    <button className="text-primary hover:underline text-sm">Add another address</button>
                </div>
            </div>

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                <MakePrimaryAddressModalContents setIsModalOpen={setIsModalOpen} />
            </Modal>
        </Container>
    );
}
