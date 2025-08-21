"use client";

import Container from '@/components/shared/container/Container';
import PrimaryBtn from '@/components/ui/PrimaryBtn';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const options = [
    { id: 1, name: "ZMW ", value: "zmw" },
    { id: 2, name: "USD ", value: "usd" },
];

export default function coverage() {
    const service = useParams().service;
    const [currency, setCurrency] = useState("");

    let path;
    switch (service) {
        case 'insurance-motor':
            path = '/motor-coverage'
            break;
        case 'insurance-plants':
            path = '/plant-coverage'
            break;
        default:
            path = `/`;
            break;
    }

    return (
        <Container>
            <div>
                <div className='min-w-lg max-w-2xl mx-auto pb-10'>
                    <h1
                        type="button"
                        className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-secondary mb-6 text-center lg:text-nowrap relative pl-10 lg:pl-0"
                    >

                        Choose your policy currency
                    </h1>
                    <div className='space-y-4 lg:w-[90%] mx-auto'>
                        {
                            options.map((option, index) => (
                                <div className="w-full mx-auto bg-white rounded-lg ">
                                    <div className={`mb-3 cursor-pointer border p-4 rounded-lg ${currency === option.value && "border-red-300"}`} onClick={() => {
                                        setCurrency(option.value)
                                    }}>
                                        <h2 className="text-base lg:text-lg font-semibold text-gray-800">{option.name}</h2>
                                    </div>
                                </div>
                            ))
                        }
                        <div className='flex justify-center gap-2 mt-10'>
                            {/* <Link href={`${path}?currency=${currency}`} > */}
                                <PrimaryBtn text={"Next"} />
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}