"use client"

import carImg from "@/assets/images/pngwing.com (3).png"
import PaymentModalContents from "@/components/modal-contents/checkout/PaymentModalContents"
import Modal from "@/components/shared/modal/Modal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Component() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedPayment, setSelectedPayment] = useState("visa")

    const products = [
        {
            id: 1,
            title: "Lorem Ipsum is simply dummy text",
            image: "/placeholder.svg?height=80&width=80",
            rating: 4,
            reviews: 53,
            quantity: 2,
            price: 4000,
            deliveryPrice: 200,
            soldCount: 422,
            deliveryText: "27sept 2024",
        },
        {
            id: 2,
            title: "Lorem Ipsum is simply dummy text",
            image: "/placeholder.svg?height=80&width=80",
            rating: 4,
            reviews: 53,
            quantity: 2,
            price: 3000,
            deliveryPrice: 200,
            soldCount: 422,
            deliveryText: "27sept 2024",
        },
    ]

    const formatPrice = (price) => {
        return `${price.toLocaleString()}$`
    }

    const subtotal = products.reduce((sum, product) => sum + product.price, 0)
    const taxes = 500
    const expressDelivery = 400
    const total = subtotal + taxes + expressDelivery

    console.log(isModalOpen)
    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-[1600px] mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Review and Pay</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Product List */}
                    <div className="lg:col-span-2 space-y-6">
                        {products.map((product) => (
                            <Card key={product.id} className="overflow-hidden shadow-none bg-transparent border-none">
                                <CardContent className="">
                                    <div className="flex flex-col items-center sm:flex-row gap-4">
                                        {/* Product Image */}
                                        <div className="flex-shrink-0 relative flex flex-col justify-center items-center h-44 lg:w-[25%]">
                                            <div className="w-full h-40 bg-gray-200 rounded-sm  relative">
                                                <Image
                                                    src={carImg}
                                                    width={200}
                                                    height={200}
                                                    alt="Product"
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded-sm">
                                                    {product.soldCount} Sold
                                                </div>
                                            </div>

                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:justify-between items-center lg:items-start gap-4">
                                                <div className="flex flex-col items-center lg:items-start">
                                                    <h3 className="font-medium text-gray-900 mb-2">{product.title}</h3>

                                                    {/* Rating */}
                                                    <div className="flex items-center gap-1 mb-2">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                                                        ))}
                                                        <span className="text-sm text-gray-600 ml-1">({product.reviews} Reviews)</span>
                                                    </div>

                                                    <p className="text-sm text-gray-600 mb-2">{product.deliveryText}</p>
                                                </div>

                                                <div className="flex gap-20 ">
                                                    {/* Quantity and Price */}
                                                    <div className="flex flex-col gap-2">
                                                        <span className="text-sm text-gray-600">Quantity</span>
                                                        <span>5</span>
                                                    </div>

                                                    <div className="text-right">
                                                        <div className="text-sm text-gray-600 mb-1">Subtotal</div>
                                                        <div className="text-lg font-semibold">{formatPrice(product.price * product.quantity)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row items-center justify-between mt-4 md:mt-2 gap-2">
                                        <div className="flex flex-col lg:flex-row items-center gap-2">
                                            <p className="text-gray-secondary text-[10px] md:text-sm">Added 25sept 2024</p>
                                            <div className={`flex items-center gap-2 text-[10px] md:text-sm text-gray-600`}>
                                                <input
                                                    type="radio"
                                                    readOnly
                                                    className="w-4 h-4 text-red-500 bg-red-500 border-red-500 accent-red-500 flex-shrink-0"
                                                />
                                                <span>
                                                    Express delivery ( Estimated delivery : 27sept 2024)
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-lg font-semibold">ZK 200</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Right Column - Order Summary & Payment */}
                    <div className="space-y-6">
                        {/* Order Summary */}
                        <Card className="p-6 shadow-none bg-transparent">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                {products.map((product) => (
                                    <div key={product.id} className="flex items-center gap-3">
                                        <Image
                                            src={carImg || "/placeholder.svg"}
                                            alt={product.title}
                                            className="w-12 h-12 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-600">
                                                {product.id === 1 ? "Brake Discs" : "Lorem Ipsum"} X {product.quantity}
                                            </div>
                                        </div>
                                        <div className="font-bold">ZK {product.price.toLocaleString()}.00</div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 py-4 border-t">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-bold">ZK {subtotal.toLocaleString()}.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Estimated taxes</span>
                                    <span className="font-bold">ZK {taxes}.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Express Delivery</span>
                                    <span className="font-bold">ZK {expressDelivery}.00</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-4 border-t">
                                <span className="text-lg font-bold">Amounts to pay</span>
                                <div className="text-right">
                                    <div className="text-xs text-gray-500">ZMW</div>
                                    <div className="text-xl font-bold">ZK {total.toLocaleString()}.00</div>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="mt-6">
                                <h3 className="font-bold mb-4">Pay with</h3>
                                <div className="flex items-center justify-between p-3 border rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            readOnly
                                            className="w-4 h-4 text-red-500 bg-red-500 border-red-500 accent-red-500 flex-shrink-0"
                                        />
                                        <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold">VISA</div>
                                        <div className="text-sm">
                                            <div>Visa.....1234</div>
                                            <div className="text-gray-500">Expiry: 12/24</div>
                                        </div>
                                    </div>
                                    <button className="text-gray-500 text-sm" onClick={() => setIsModalOpen(true)}>Change</button>
                                </div>
                            </div>

                            <Link href={"/confirm-order"}>
                                <Button className="w-full bg-primary hover:bg-primary text-white py-3 mt-6">Pay Now</Button>
                            </Link>

                            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600">
                                <Shield className="w-4 h-4" />
                                <span>Secure and Private</span>
                            </div>
                        </Card>

                        {/* Billing Address */}
                        <Card className="p-6 shadow-none bg-transparent">
                            <div>
                                <h3 className="font-bold mb-4">Billing Address</h3>
                                <div className="text-sm text-gray-600 space-y-1">
                                    <div className="font-medium text-gray-800">Billy Smith</div>
                                    <div>Lorem Ipsum is simply</div>
                                    <div>dummy text of the printing</div>
                                    <div>and typesetting industry.</div>
                                    <div>United States</div>
                                    <button className="text-primary text-sm mt-2">Change address</button>
                                </div>
                            </div>
                            <div className="border-t border-gray-400 pt-4">
                                <h3 className="font-bold mb-4">Shipping Address</h3>
                                <div className="text-sm text-gray-600 space-y-1">
                                    <div className="font-medium text-gray-800">Billy Smith</div>
                                    <div>Lorem Ipsum is simply</div>
                                    <div>dummy text of the printing</div>
                                    <div>and typesetting industry.</div>
                                    <div>United States</div>
                                    <button className="text-primary text-sm mt-2">Change address</button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-fit"}>
                <PaymentModalContents />
            </Modal>
        </div>
    )
}
