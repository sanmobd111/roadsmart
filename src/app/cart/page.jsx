"use client"

import { useState } from "react"
import { Trash2, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import carImg from "@/assets/images/pngwing.com (3).png";
import Image from "next/image"
import Checkbox from "@/components/shared/check-box/Checkbox"
import Link from "next/link"

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: "Lorem Ipsum is simply dummy text",
            price: 300000,
            quantity: 1,
            rating: 5,
            reviews: 53,
            deliveryText: "Free delivery in 2-3 days",
            addedDate: "25sept 2024",
            soldCount: 422,
            selected: true,
        },
        {
            id: 2,
            title: "Lorem Ipsum is simply dummy text",
            price: 300000,
            quantity: 1,
            rating: 5,
            reviews: 53,
            deliveryText: "Free delivery in 2-3 days",
            addedDate: "25sept 2024",
            soldCount: 422,
            selected: true,
        },
        {
            id: 3,
            title: "Lorem Ipsum is simply dummy text",
            price: 300000,
            quantity: 1,
            rating: 5,
            reviews: 53,
            deliveryText: "Free delivery in 2-3 days",
            addedDate: "25sept 2024",
            soldCount: 422,
            selected: false,
        },
        {
            id: 4,
            title: "Lorem Ipsum is simply dummy text",
            price: 300000,
            quantity: 1,
            rating: 5,
            reviews: 53,
            deliveryText: "Free delivery in 2-3 days",
            addedDate: "25sept 2024",
            soldCount: 422,
            selected: false,
        },
        {
            id: 5,
            title: "Lorem Ipsum is simply dummy text",
            price: 300000,
            quantity: 1,
            rating: 5,
            reviews: 53,
            deliveryText: "Free delivery in 2-3 days",
            addedDate: "25sept 2024",
            soldCount: 422,
            selected: false,
        },
        {
            id: 6,
            title: "Lorem Ipsum is simply dummy text",
            price: 300000,
            quantity: 1,
            rating: 5,
            reviews: 53,
            deliveryText: "Free delivery in 2-3 days",
            addedDate: "25sept 2024",
            soldCount: 422,
            selected: false,
        },
        {
            id: 7,
            title: "Lorem Ipsum is simply dummy text",
            price: 300000,
            quantity: 1,
            rating: 5,
            reviews: 53,
            deliveryText: "Free delivery in 2-3 days",
            addedDate: "25sept 2024",
            soldCount: 422,
            selected: false,
        },
        {
            id: 8,
            title: "Lorem Ipsum is simply dummy text",
            price: 300000,
            quantity: 1,
            rating: 5,
            reviews: 53,
            deliveryText: "Free delivery in 2-3 days",
            addedDate: "25sept 2024",
            soldCount: 422,
            selected: false,
        },
    ])

    const [deliveryOption, setDeliveryOption] = useState("express")

    const selectedItems = cartItems.filter((item) => item.selected)
    const selectedCount = selectedItems.length

    const toggleItemSelection = (id) => {
        setCartItems((items) => items.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item)))
    }

    const updateQuantity = (id, quantity) => {
        setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity } : item)))
    }

    const removeItem = (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id))
    }

    const formatPrice = (price) => {
        return `${price.toLocaleString()}$`
    }

    return (
        <div className="min-h-screen p-4 md:p-6 lg:p-8">
            <div className="max-w-[1600px] mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <Card key={item.id} className="overflow-hidden border-l-0 border-r-0 border-b-1 border-t-0 border-gray-200 shadow-none rounded-none">
                                <CardContent className="">
                                    <div className="flex flex-col items-center sm:flex-row gap-4">
                                        {/* Checkbox */}
                                        <div className="">
                                            {/* <Checkbox
                                                checked={item.selected}
                                                onCheckedChange={() => toggleItemSelection(item.id)}
                                                className="mt-1 border-2 border-gray-300 data-[state=checked]:border-gray-300 data-[state=checked]:bg-white data-[state=checked]:text-red-500"
                                            /> */}
                                            <Checkbox checked={item.selected} setChecked={() => toggleItemSelection(item.id)} />
                                        </div>

                                        {/* Product Image */}
                                        <div className="flex-shrink-0 relative flex flex-col justify-center items-center h-44 lg:w-[25%]">
                                            <div className="w-full h-40 bg-gray-200 rounded-sm  relative">
                                                <Image
                                                    src={carImg}
                                                    width={200}
                                                    height={200}
                                                    alt="Product"
                                                    className="w-full h-full object-contain pt-4 lg:pt-6"
                                                />
                                                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded-sm">
                                                    {item.soldCount} Sold
                                                </div>
                                            </div>
                                            <div className="mt-4 lg:mt-6">

                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <span>Added {item.addedDate}</span>
                                                    <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-primary">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 lg:gap-10">
                                                <div className="">
                                                    <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>

                                                    {/* Rating */}
                                                    <div className="flex items-center gap-1 mb-2">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                                                        ))}
                                                        <span className="text-sm text-gray-600 ml-1">({item.reviews} Reviews)</span>
                                                    </div>

                                                    <p className="text-sm text-gray-600 mb-2">{item.deliveryText}</p>
                                                </div>

                                                {/* Quantity and Price */}
                                                <div className="flex flex-col gap-2">
                                                    <span className="text-sm text-gray-600">Quantity</span>
                                                    <Select
                                                        value={item.quantity.toString()}
                                                        onValueChange={(value) => updateQuantity(item.id, Number.parseInt(value))}
                                                    >
                                                        <SelectTrigger className="w-16">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {[1, 2, 3, 4, 5].map((num) => (
                                                                <SelectItem key={num} value={num.toString()}>
                                                                    {num}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div className="text-right">
                                                    <div className="text-sm text-gray-600 mb-1">Subtotal</div>
                                                    <div className="text-lg font-semibold">{formatPrice(item.price * item.quantity)}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        {/* Pagination */}
                        <div className="flex justify-center gap-2 mt-6">
                            <Button variant="outline" size="icon" className="bg-white text-gray-600">
                                <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="bg-primary text-white">
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-4">
                            <CardContent className="p-6">
                                <h2 className="text-lg font-semibold mb-4">Selected Items({selectedCount})</h2>

                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-700 mb-3">Choose Delivery Options</h3>

                                    <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption}>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="free" id="free" />
                                            <Label htmlFor="free" className="text-sm">
                                                Free delivery
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="express" id="express" />
                                            <Label htmlFor="express" className="text-sm">
                                                Express delivery ( Estimated delivery : 27sept 2024)
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                <Link href={"/checkout"}>
                                    <Button className="w-full bg-primary hover:bg-primary text-white">Review & Pay</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
