"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Card, CardContent } from '@/components/ui/card'; // Assuming Shadcn UI card is available
import Container from '@/components/shared/container/Container';
import Link from 'next/link';
import Modal from '@/components/shared/modal/Modal';
import MakePrimaryAddressModalContents from '@/components/modal-contents/address/MakePrimaryAddressModalContents';

export default function page() {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <Container className="lg:!my-16">
            <div className="w-full space-y-6 bg-white">
                {/* Header */}
                <div className="flex justify-between items-center mb-4 pb-4 lg:pb-6 lg:mb-10 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-800">Your Addresses</h1>
                    <Link href={"/add-address"}>
                        {/* <button className="text-gray hover:text-gray cursor-pointer text-sm font-medium">Add another address</button> */}
                    </Link>
                </div>

                <div className='border border-gray-200 rounded-lg shadow-sm p-6 lg:w-[90%] mx-auto'>
                    <div>
                        <h1 className='text-xl font-bold my-4 lg:my-6'>Primary shipping address</h1>
                        {/* Address Card */}
                        <Card className="border-none shadow-none py-0">
                            <CardContent className="p-0 flex flex-col sm:flex-row justify-between items-start sm:items-center  border-b pb-4">
                                <div className="flex-1 text-gray-800 mb-4 sm:mb-0">
                                    <p className="font-bold text-lg mb-1 text-gray">Martin Fingers</p>
                                    <p className="text-base text-gray-secondary">
                                        iShop ZAMBIA, Unit E, Kendal House, Victoria<br />
                                        Way Burgess Hill, West Sussex RH15 9NF<br />
                                        United Kingdom<br />
                                        1444243935
                                    </p>
                                </div>
                                <Link href={"/edit-address"}>

                                    <Button
                                        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200 min-w-[150px] text-sm font-medium"
                                    >
                                        Edit
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold my-4 lg:my-6'>Other shipping address</h1>
                        {/* Address Card */}
                        <div className='space-y-4'>
                            <Card className="border-none shadow-none py-0">
                                <CardContent className="p-0 flex flex-col sm:flex-row justify-between items-start sm:items-center  border-b pb-4">
                                    <div className="flex-1 text-gray-800 mb-4 sm:mb-0">
                                        <p className="font-bold text-lg mb-1 text-gray">Martin Fingers</p>
                                        <p className="text-base text-gray-secondary">
                                            iShop ZAMBIA, Unit E, Kendal House, Victoria<br />
                                            Way Burgess Hill, West Sussex RH15 9NF<br />
                                            United Kingdom<br />
                                            1444243935
                                        </p>
                                        <div className='flex gap-4 text-gray font-semibold mt-4'>
                                            <button>Make primary</button>
                                            <button>delete</button>
                                        </div>
                                    </div>
                                    <Link href={"/edit-address"}>

                                        <Button
                                            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200 min-w-[150px] text-sm font-medium"
                                        >
                                            Edit
                                        </Button>
                                    </Link>

                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-none py-0">
                                <CardContent className="p-0 flex flex-col sm:flex-row justify-between items-start sm:items-center  border-b pb-4">
                                    <div className="flex-1 text-gray-800 mb-4 sm:mb-0">
                                        <p className="font-bold text-lg mb-1 text-gray">Martin Fingers</p>
                                        <p className="text-base text-gray-secondary">
                                            iShop ZAMBIA, Unit E, Kendal House, Victoria<br />
                                            Way Burgess Hill, West Sussex RH15 9NF<br />
                                            United Kingdom<br />
                                            1444243935
                                        </p>
                                        <div className='flex gap-4 text-gray font-semibold mt-4'>
                                            <button onClick={() => setModalOpen(true)}>Make primary</button>
                                            <button>delete</button>
                                        </div>
                                    </div>
                                    <Link href={"/edit-address"}>

                                        <Button
                                            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200 min-w-[150px] text-sm font-medium"
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-none py-0">
                                <CardContent className="p-0 flex flex-col sm:flex-row justify-between items-start sm:items-center  border-b pb-4">
                                    <div className="flex-1 text-gray-800 mb-4 sm:mb-0">
                                        <p className="font-bold text-lg mb-1 text-gray">Martin Fingers</p>
                                        <p className="text-base text-gray-secondary">
                                            iShop ZAMBIA, Unit E, Kendal House, Victoria<br />
                                            Way Burgess Hill, West Sussex RH15 9NF<br />
                                            United Kingdom<br />
                                            1444243935
                                        </p>
                                        <div className='flex gap-4 text-gray font-semibold mt-4'>
                                            <button>Make primary</button>
                                            <button>delete</button>
                                        </div>
                                    </div>
                                    <Link href={"/edit-address"}>

                                        <Button
                                            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200 min-w-[150px] text-sm font-medium"
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-none py-0">
                                <CardContent className="p-0 flex flex-col sm:flex-row justify-between items-start sm:items-center  border-b pb-4">
                                    <div className="flex-1 text-gray-800 mb-4 sm:mb-0">
                                        <p className="font-bold text-lg mb-1 text-gray">Martin Fingers</p>
                                        <p className="text-base text-gray-secondary">
                                            iShop ZAMBIA, Unit E, Kendal House, Victoria<br />
                                            Way Burgess Hill, West Sussex RH15 9NF<br />
                                            United Kingdom<br />
                                            1444243935
                                        </p>
                                    </div>
                                    <Link href={"/edit-address"}>

                                        <Button
                                            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200 min-w-[150px] text-sm font-medium"
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setModalOpen}>
                <MakePrimaryAddressModalContents setIsModalOpen={setModalOpen} />
            </Modal>
        </Container>
    );
}
