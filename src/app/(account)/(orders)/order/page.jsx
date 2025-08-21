"use client"

import MoreActionButton from '@/components/account/request/more-action-button/MoreActionButton'
import SubTItle from '@/components/account/SubTItle'
import VehicleCardWithBadge from '@/components/account/VehicleCardWithBadge'
import Container from '@/components/shared/container/Container'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/Title'

const insuranceItems = [
    {
        id: 1,
        name: "Motor Insurance",
        quantity: 1,
        icon: <Car className="w-6 h-6 text-primary" />,
        hasNotification: true,
    },
    {
        id: 2,
        name: "Plant Insurance",
        quantity: 2,
        icon: <Factory className="w-6 h-6 text-primary" />,
        hasNotification: true,
    },
    {
        id: 3,
        name: "Special Insurance",
        quantity: 2,
        icon: <Shield className="w-6 h-6 text-primary" />,
        hasNotification: true,
    },
]



export default function page() {
    const router = useRouter()
    const moreActions = [
        { title: "Contact Seller", handleOnClick: () => { router.push("/feedback") } },
        { title: "Feedback", handleOnClick: () => { router.push("/feedback") } },
    ]
    return (
        <Container className={"block lg:!mb-28"}>
            <div>
                <Title text={"Your Orders"} className={"text-left mb-4"} />
                <OrderSummary />
            </div>
            <div>
                <SubTItle text={"Delivered"} subText={"Jan 20,2025"} textClassName={"text-gray"} subTextClassName={"text-gray font-semibold"} />
                <div className='flex flex-col lg:flex-row gap-4 justify-between items-start'>
                    <div className='space-y-4'>
                        {insuranceItems.map((item) => (
                            <VehicleCardWithBadge key={item.id} item={item} hasViewMore={false} hasQuantity quantityClassName={"text-gray-black"} />
                        ))}
                    </div>
                    <div className='flex flex-col gap-4 justify-between pr-6'>
                        <Link href={"/feedback"} className='w-full lg:w-fit'>
                            <button
                                // onClick={handleLeaveFeedback}
                                className="min-w-[250px] lg:w-auto bg-primary hover:bg-primary text-white font-semibold py-2 md:py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                            >
                                Product Support
                            </button>
                        </Link>
                        <MoreActionButton actions={moreActions} btnClassName={"py-3 min-w-[250px]"} />
                    </div>
                </div>
            </div>
        </Container>
    )
}


// order summary
import { Car, Check, Factory, Shield } from "lucide-react"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from "react"
function OrderSummary() {
    return (
        <div className="">
            {/* Order Summary Card */}
            <div className=" rounded-lg p-6 bg-red-50">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                    {/* Order Status */}
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                            <Check className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-primary">Order placed</h3>
                            <p className="text-sm text-gray-600">Order date: 5 Nov, 2024  - Order total: $500 -  Order number: 24-566738-45608 </p>
                        </div>
                    </div>

                    {/* Order Details */}
                    <div>
                        <Link href={"/order-details"}>
                            <Button
                                // onClick={() => setCurrentServiceModal("service-details")}
                                variant="outline"
                                className="min-w-[200px] !py-3 border border-primary text-primary hover:text-primary bg-transparent rounded-md hover:bg-transparent transition-colors duration-200"
                            >
                                View order details
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

