import { Heart, Clock, Star, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { FaStoreAlt } from "react-icons/fa"

export default function TyreKingProfile() {
    return (
        <div className="min-h-screen">
            <div className="max-w-[1600px] mx-auto p-6 space-y-6">
                {/* Header Section */}
                <Card className={"shadow-none border-none"}>
                    <CardContent className="p-0">
                        <div className="flex flex-col lg:flex-row items-start gap-6">
                            <div className="w-20 h-20 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <FaStoreAlt className="w-10 h-10 text-primary" />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tyre King</h1>
                                        <p className="text-gray-600 mb-3">Stand 68789, Great east Road, Lusaka</p>
                                    </div>

                                    <Button variant="ghost" size="sm" className="text-gray-600">
                                        <Heart className="w-4 h-4 mr-2" />
                                        Save Seller
                                    </Button>
                                </div>
                                <div className="flex flex-col lg:flex-row lg:items-center gap-4 text-sm">
                                    <div className="flex items-center gap-1 text-green-600">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span>Open now</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Clock className="w-4 h-4" />
                                        <span>Closes 11:59 pm</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span>99.33% Positive feedback</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <span>📅 Live since 2023</span>
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row gap-3 mt-4">
                                    <Link href={"/store-shop"} className="w-full lg:w-auto block">
                                        <Button className="bg-primary hover:bg-primary text-white w-full lg:w-fit">Visit Store</Button>
                                    </Link>
                                    <Button variant="outline">Request A Service</Button>
                                    <Button variant="outline">Send Message</Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Performance Section */}
                <Card className={"shadow-none border-none"}>
                    <CardContent className="p-0">
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Performance</h2>
                            <span className="text-primary text-sm font-medium bg-secondary rounded-sm py-1 px-4">30 Days</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="text-gray-600 text-sm mb-2">Orders fulfilled by seller</h3>
                                <p className="text-base font-bold text-primary bg-secondary w-[40%] flex justify-center items-center px-3 py-1 rounded-sm">100+ Orders</p>
                            </div>
                            <div>
                                <h3 className="text-gray-600 text-sm mb-2">Orders fulfilled by Road Smart</h3>
                                <p className="text-base font-bold text-primary bg-secondary w-[40%] flex justify-center items-center px-3 py-1 rounded-sm">100%</p>
                            </div>
                            <div>
                                <h3 className="text-gray-600 text-sm mb-2">Reviews</h3>
                                <p className="text-base font-bold text-primary bg-secondary w-[40%] flex justify-center items-center px-3 py-1 rounded-sm">92 Feedback</p>
                            </div>
                        </div>

                        <p className="text-gray-500 text-sm mt-6">
                            It is a long established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout.
                        </p>
                    </CardContent>
                </Card>

                <h2 className="text-xl pb-6 border-b font-bold text-gray-900 mb-6">Seller Information</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Seller Information */}
                    <Card className={"shadow-none border-none !border-l"}>
                        <CardContent className="p-0">

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-gray-600 text-sm mb-1">Business Name</h3>
                                    <p className="font-semibold">Ghandis Automotive</p>
                                </div>

                                <div>
                                    <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Distributor</span>
                                </div>

                                <div className="flex items-start gap-2">
                                    <Flag className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <div className="text-sm text-gray-600">
                                        <p>iShop ZAMBIA, Unit E, Kendal House,</p>
                                        <p>Victoria Way Burgess Hill, West Sussex</p>
                                        <p>RH15 9NF</p>
                                        <p>United Kingdom</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Reviews */}
                    <Card className={"shadow-none lg:border-l border-y-0 border-r-0 lg:pl-12 rounded-none"}>
                        <CardContent className="p-0">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Reviews</h2>

                            <div className="space-y-4">
                                {[1, 2, 3].map((review) => (
                                    <div key={review} className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-sm font-medium">L</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-medium text-gray-900">Lorem Ipsum</span>
                                                <span className="text-gray-500 text-sm">Last month</span>
                                            </div>
                                            <p className="text-gray-600 text-sm">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                <button className="text-primary text-sm font-medium hover:underline">See more</button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Products Section */}
                <Card className={"shadow-none border-none"}>
                    <CardContent className="p-0">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Products</h2>
                        <div className="flex items-center gap-2 text-sm">
                            <button className="text-primary font-medium hover:underline">See all products and services</button>
                            <span className="text-gray-500">currently offered by the seller</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
