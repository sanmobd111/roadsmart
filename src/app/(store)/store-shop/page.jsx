"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import SelectInput from "@/components/ui/SelectInput"
import { Clock, Heart, MapPin, Navigation, Search, Share2, Star } from "lucide-react"
import { useState } from "react"

const featuredProducts = [
    {
        id: 1,
        name: "Brake Discs",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/placeholder.svg?height=200&width=200",
        price: "$3,000",
        originalPrice: null,
        salePercentage: "25% Sale",
        rating: 4.5,
        reviews: 1402,
        isBrandNew: true,
        hasFreeShipping: true,
    },
    {
        id: 2,
        name: "Lorem Ipsum is simply dummy text",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/placeholder.svg?height=200&width=200",
        price: "300000$",
        originalPrice: null,
        salePercentage: "25% Sale",
        rating: 4.5,
        reviews: 1402,
        isBrandNew: true,
        hasFreeShipping: true,
    },
    {
        id: 3,
        name: "Lorem Ipsum is simply dummy text",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/placeholder.svg?height=200&width=200",
        price: "300000$",
        originalPrice: null,
        salePercentage: "25% Sale",
        rating: 4.5,
        reviews: 1402,
        isBrandNew: true,
        hasFreeShipping: true,
    },
]

const allProducts = [
    ...Array(9)
        .fill(null)
        .map((_, index) => ({
            id: 7 + index,
            name: "Lorem Ipsum is simply dummy text",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: "/placeholder.svg?height=200&width=200",
            price: "300000$",
            originalPrice: null,
            salePercentage: "25% Sale",
            rating: 4.5,
            reviews: 1402,
            isBrandNew: true,
            hasFreeShipping: true,
        })),
]

const newlyListedProducts = [
    {
        id: 4,
        name: "Lorem Ipsum is simply dummy text",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/placeholder.svg?height=200&width=200",
        price: "300000$",
        originalPrice: null,
        salePercentage: "25% Sale",
        rating: 4.5,
        reviews: 1402,
        isBrandNew: true,
        hasFreeShipping: true,
    },
    {
        id: 5,
        name: "Lorem Ipsum is simply dummy text",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/placeholder.svg?height=200&width=200",
        price: "300000$",
        originalPrice: null,
        salePercentage: "25% Sale",
        rating: 4.5,
        reviews: 1402,
        isBrandNew: true,
        hasFreeShipping: true,
    },
    {
        id: 6,
        name: "Lorem Ipsum is simply dummy text",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/placeholder.svg?height=200&width=200",
        price: "300000$",
        originalPrice: null,
        salePercentage: "25% Sale",
        rating: 4.5,
        reviews: 1402,
        isBrandNew: true,
        hasFreeShipping: true,
    },
]


const ProductCard = ({ product }) => (
    <Card className="group hover:shadow-lg transition-shadow duration-300 relative py-0">
        <CardContent className="p-4">
            {/* Sale Badge */}
            {product.salePercentage && (
                <div className="absolute top-7 left-6 bg-primary text-white px-2 py-1 text-xs rounded z-10">
                    {product.salePercentage}
                </div>
            )}

            {/* Heart Icon */}
            <Button size="sm" variant="outline" className="absolute top-6 right-6 p-2 bg-white/80 hover:bg-white z-10">
                <Heart className="h-4 w-4" />
            </Button>

            {/* Product Image */}
            <div className="relative mb-4 bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-800 rounded-full relative">
                    {/* Brake disc representation */}
                    <div className="absolute inset-2 border-4 border-gray-600 rounded-full"></div>
                    <div className="absolute inset-6 border-2 border-gray-500 rounded-full"></div>
                    {/* Brake caliper */}
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-8 h-12 bg-primary rounded"></div>
                </div>
            </div>

            {/* Product Badges */}
            <div className="flex items-center justify-between mb-2 text-xs">
                {product.isBrandNew && (
                    <div className="flex items-center text-primary">
                        <div className="w-3 h-3 bg-primary rounded-full mr-1"></div>
                        Brand New
                    </div>
                )}
                {product.hasFreeShipping && (
                    <div className="flex items-center text-primary">
                        <div className="w-3 h-3 bg-primary rounded-full mr-1"></div>
                        Free Shipping
                    </div>
                )}
            </div>

            {/* Rating */}
            <div className="flex items-center mb-2">
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                        />
                    ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
            </div>

            {/* Product Name */}
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

            {/* Price */}
            <div className="text-lg font-bold text-gray-900 mb-2">{product.price}</div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">{product.description}</p>

            {/* View Product Button */}
            <Button className="w-full bg-primary hover:bg-primary text-white">View Product</Button>
        </CardContent>
    </Card>
)

export default function TyreKingProfile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState("outlets");
    const [activeTab, setActiveTab] = useState("shop")
    const [activeSubTab, setActiveSubTab] = useState("products")

    console.log(activeTab)
    return (
        <div className="min-h-screen p-4 max-w-[1600px] mx-auto">
            <Card className="bg-secondary shadow-none border-none">
                <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Image Upload Section */}
                        <div className="flex-shrink-0">
                            <div className="w-32 lg:w-64 aspect-square lg:h-full bg-primary rounded-lg flex items-center justify-center text-white">
                                <div className="text-center">
                                    <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-sm lg:text-lg font-medium">Upload image</span>
                                </div>
                            </div>
                        </div>

                        {/* Business Information */}
                        <div className="flex-1 ">
                            <div className="flex flex-col items-start justify-between mb-4">
                                <div>
                                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Tyre King</h1>
                                    <div className="flex cursor-pointer items-center text-gray-600 mb-2" onClick={() => {
                                        setIsModalOpen(true);
                                        setCurrentModal("outlets");
                                    }}>
                                        <MapPin className="w-4 h-4 mr-2" />
                                        <span className="text-xs lg:text-base">Stand 5947 Accacia Park, Great East Road, Lusaka</span>
                                    </div>
                                </div>
                                <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                                    <Share2 className="w-4 h-4 mr-2" />
                                    Share Store
                                </Button>
                            </div>

                            <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 items-center mb-6">
                                {/* Operating Hours */}
                                <div className="flex cursor-pointer items-center border border-red-500 px-4 py-1 text-[9px] lg:text-base rounded-full" onClick={() => {
                                    setIsModalOpen(true);
                                    setCurrentModal("opening-hours");
                                }}>
                                    <div className="flex gap-0.5 lg:gap-2 items-center">
                                        <Clock className="w-3 h-3 lg:w-4 lg:h-4 mr-2 text-gray-600" />
                                        <span className="text-primary font-medium">Open now </span>
                                    </div>

                                    <span className="text-gray-600 ml-1 text-center lg:text-start">- 12midnight-1am, 11am-12midnight(Today)</span>
                                </div>

                                {/* Rating */}
                                <div className="flex flex-col lg:flex-row items-center ">
                                    <div className="flex">
                                        <Star className="w-5 h-5 text-red-500 fill-current mr-2" />
                                        <span className="font-bold text-gray-900">99.33%</span>
                                    </div>
                                    <span className="text-gray-600 ml-2 text-sm lg:text-base">Positive in last 12 months (569 ratings)</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3">
                                <Button
                                    variant="outline"
                                    className="flex items-center border-gray-300 hover:bg-transparent bg-transparent"
                                >
                                    <BiSolidDirectionRight className="w-4 h-4 mr-2 text-primary" />
                                    Direction
                                </Button>
                                <Button
                                    variant="outline"
                                    className="flex items-center border-gray-300 hover:bg-transparent  bg-transparent"
                                >
                                    <BiSolidMessageDetail className="w-4 h-4 mr-2 text-primary" />
                                    Contact
                                </Button>
                                <Button
                                    variant="outline"
                                    className="flex items-center border-gray-300  bg-transparent"
                                >
                                    <BiSolidMessageDetail className="w-4 h-4 mr-2 hover:bg-transparent text-primary" />
                                    Request Service
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className="mt-4">
                {/* Header Navigation */}
                <header className="bg-white shadow-none border-none">
                    <div className="mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <nav className="grid grid-cols-4 lg:space-x-8 mt-4 lga:mt-0">
                                <Button onClick={() => setActiveTab("shop")} className={`${activeTab === "shop" ? "bg-primary hover:bg-primary hover:text-white text-white px-6" : "text-gray-600 bg-transparent hover:bg-transparent"}`}>Shop</Button>
                                <Button onClick={() => setActiveTab("about")} variant="ghost" className={`${activeTab === "about" ? "bg-primary hover:bg-primary hover:text-white text-white px-6" : "text-gray-600 bg-transparent hover:bg-transparent"}`}>
                                    About
                                </Button>
                                <Button onClick={() => setActiveTab("photos")} variant="ghost" className={`${activeTab === "photos" ? "bg-primary hover:bg-primary hover:text-white text-white px-6" : "text-gray-600 bg-transparent hover:bg-transparent"}`}>
                                    Photos
                                </Button>
                                <Button onClick={() => setActiveTab("feedback")} variant="ghost" className={`${activeTab === "feedback" ? "bg-primary hover:bg-primary hover:text-white text-white px-6" : "text-gray-600 bg-transparent hover:bg-transparent"}`}>
                                    Feedback
                                </Button>
                            </nav>
                            <div className="relative border border-gray-300 rounded-xl w-full lg:w-[40%] flex justify-center items-center mt-4 lg:mt-0 py-2">
                                <Search className="h-5 w-5 text-primary mr-2 absolute left-[5%] lg:left-[20%]" />
                                <Input
                                    type="text"
                                    className="py-4 bg-white placeholder-transparent !border-none !ring-0 !outline-none focus:!outline-none focus:!ring-0 focus:!border-none focus:!outline-0 w-[90%] lg:w-[75%] text-start ml-auto"
                                    placeholder="Search services or describe problem"
                                />
                            </div>

                        </div>
                        {
                            activeTab === "shop" && (<div className="text-gray mt-6 mb-4">
                                <Button onClick={() => setActiveSubTab("products")} className={`shadow-none ${activeSubTab === "products" && "text-gray-800"} bg-transparent hover:bg-transparent p-0 mr-4 cursor-pointer `}>Products</Button>
                                <Button onClick={() => setActiveSubTab("services")} className={`shadow-none  cursor-pointer bg-transparent hover:bg-transparent p-0 ${activeSubTab === "services" && "text-gray-800"}`}>Services</Button>
                            </div>)
                        }
                    </div>
                </header>

                {
                    activeTab === "shop" && activeSubTab === "products" && <Products />
                }
                {
                    activeTab === "shop" && activeSubTab === "services" && <Services />
                }
                {
                    activeTab === "shop" && activeSubTab === "services" && <Services />
                }
                {
                    activeTab === "photos" && <Photos />
                }
                {
                    activeTab === "feedback" && <Feedback />
                }
                {
                    activeTab === "about" && <About />
                }
            </div>

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName="w-[95%] lg:w-auto" contentContainerClassName={"px-0"}>
                {
                    currentModal === "outlets" && <OutletsModalContents />
                }

                {
                    currentModal === "opening-hours" && <OpeningHoursModalContents />
                }
            </Modal>
        </div>
    )
}


function Products() {
    return (

        <main className="mx-auto">
            {/* Featured Items */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                {/* Pagination */}
                <div className="flex justify-center">
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-gray-400">
                            {"<"}
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary text-white">
                            1
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400">
                            {">"}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Newly Listed */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Newly Listed</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {newlyListedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                {/* Pagination */}
                <div className="flex justify-center">
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-gray-400">
                            {"<"}
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary text-white">
                            1
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400">
                            {">"}
                        </Button>
                    </div>
                </div>
            </section>

            {/* All Items */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">All items</h2>

                {/* Filter Dropdowns */}
                <div className="flex gap-4 mb-6">
                    <SelectInput
                        containerClassName={"w-[15%]"}
                        defaultValue={"Lorem Ipsum"}
                        // setCurrency={setCurrency}
                        options={[{ label: "All", value: "all" }, { label: "New", value: "new" }]}
                        selectClassName={"bg-secondary"}
                    />
                    <SelectInput
                        containerClassName={"w-[15%]"}
                        defaultValue={"Lorem Ipsum"}
                        // setCurrency={setCurrency}
                        options={[{ label: "All", value: "all" }, { label: "New", value: "new" }]}
                        selectClassName={"bg-secondary"}
                    />
                    <SelectInput
                        containerClassName={"w-[15%]"}
                        defaultValue={"Lorem Ipsum"}
                        // setCurrency={setCurrency}
                        options={[{ label: "All", value: "all" }, { label: "New", value: "new" }]}
                        selectClassName={"bg-secondary"}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {allProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Final Pagination */}
                <div className="flex justify-center">
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-gray-400">
                            {"<"}
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary text-white">
                            1
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400">
                            {">"}
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}


import { ChevronDown } from "lucide-react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    ChevronUp,
    Shield,
    Truck,
    Wind,
    Wrench,
    Zap
} from "lucide-react"
import { useRouter } from "next/navigation"

const serviceCategories = [
    {
        id: "registration",
        name: "registration",
        icon: Wrench,
        color: "text-red-500",
        services: [
            { name: "First Registration ", featured: true },
            { name: "Personalised Registration " },
            { name: "Vehicle De-registration " },
            { name: "Change Ownership   " },
            { name: "Change of Absolute Owner" },
            { name: "Vehicle Re-registration" },
            { name: "Registration of Ex-Registration " },
            { name: "Registration of Ex-Red Book" },
        ],
    },
    {
        id: "Change of Particulars",
        name: "Change of Particulars",
        icon: Wind,
        color: "text-blue-500",
        services: [
            { name: "Change of Color" },
            { name: "Change of Seating Capacity" },
            { name: "Change of Engine " },
        ],
    },
    {
        id: "Renewals",
        name: "Renewals",
        icon: Zap,
        color: "text-yellow-500",
        services: [
            { name: "Road Tax Renewal ", url: "road-tax/location" },
            { name: "Fitness Renewal ", url: "fitness-renewal/location" },
            { name: "Drivers license Renewal" },
        ],
    },
    {
        id: "Replacements",
        name: "Replacements",
        icon: Truck,
        color: "text-gray-600",
        services: [
            { name: "Whitebook Replacement " },
            { name: "Drivers License Replacement" },
        ],
    },
    {
        id: "Clearance",
        name: "Clearance",
        icon: Shield,
        color: "text-cyan-500",
        services: [
            { name: "Cross Boarder Clearance " },
            { name: "Ex-Red Book Clearance " },
            { name: "Ex-GRZ Book Clearance " },
        ],
    },
];

function Services() {
    const [openCategories, setOpenCategories] = useState(["general"]);

    const router = useRouter();
    const toggleCategory = (categoryId) => {
        setOpenCategories((prev) =>
            prev.includes(categoryId)
                ? prev.filter((id) => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const routerHandlerSubmit = (url) => {
        console.log(url);

        router.push(url)
    }



    return (
        <div className="mx-auto max-w-[1600px]  py-0">
            <div className="space-y-4">
                {serviceCategories.map((category) => {
                    const IconComponent = category.icon;
                    const isOpen = openCategories.includes(category.id);

                    return (
                        <Collapsible
                            key={category.id}
                            open={!isOpen}
                            onOpenChange={() => toggleCategory(category.id)}
                        >
                            <CollapsibleTrigger className="w-full rounded-0 border-0">
                                <div className="flex items-center justify-between py-5  border-gray-300 border-b transition-colors">
                                    <div className="flex items-center space-x-3">
                                        <IconComponent className={`w-5 h-5 ${category.color}`} />
                                        <span className="font-medium text-gray-900">
                                            {category.name}
                                        </span>
                                    </div>
                                    {isOpen ? (
                                        <ChevronUp className="w-5 h-5 text-gray-400" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    )}
                                </div>
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                                <div className="mt-10 mb-4  border-gray-200">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                                        {category.services.map((service, index) => (

                                            <button
                                                onClick={() => { routerHandlerSubmit(service.url) }}
                                                key={index}

                                                variant={service.featured ? "default" : "outline"}
                                                className={`justify-start border bg-white cursor-pointer hover:bg-white hover:shadow-lg rounded-[10px] text-left h-auto py-5 px-6 ${service.featured
                                                    ? "bg-primary hover:bg-primary text-white"
                                                    : "bg-white  text-gray-700 border-gray-300"
                                                    }`}
                                            >

                                                {service.name}

                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    );
                })}
            </div>
        </div>
    );
}


import carImg from "@/assets/images/pngwing.com (3).png"

import OpeningHoursModalContents from "@/components/modal-contents/store/OpeningModalContents"
import OutletsModalContents from "@/components/modal-contents/store/OutletsModalContents"
import Modal from "@/components/shared/modal/Modal"
import Image from "next/image"
import { BiSolidDirectionRight, BiSolidMessageDetail, BiSolidRightArrow } from "react-icons/bi"
function Photos() {
    return (
        <div className="container mx-auto max-w-[1600px] px-4  py-0 lg:py-12">
            <p className="mb-6">All</p>

            <div className="grid grid-cols-4 gap-8">
                <Image src={carImg} width={200} height={200} alt="Product" className="w-full aspect-square object-contain" />
                <Image src={carImg} width={200} height={200} alt="Product" className="w-full aspect-square object-contain" />
            </div>
        </div>
    );
}



function Feedback() {

    const feedbacksStats = {
        positive: 1230,
        neutral: 1230,
        negative: 1230,
    }

    const detailedRatings = [
        { label: "Accurate description", rating: 4.9, progress: 98 },
        { label: "Reasonable shipping cost", rating: 4.9, progress: 98 },
        { label: "Shipping speed", rating: 5.0, progress: 100 },
        { label: "Communication", rating: 4.9, progress: 98 },
    ]

    const feedbackData = [
        {
            id: 1,
            name: "Lorem Ipsum",
            timestamp: "Last month",
            review:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            avatar: "/placeholder.svg?height=48&width=48",
        },
        {
            id: 2,
            name: "Lorem Ipsum",
            timestamp: "Last month",
            review:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            avatar: "/placeholder.svg?height=48&width=48",
        },
        {
            id: 3,
            name: "Lorem Ipsum",
            timestamp: "Last month",
            review:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            avatar: "/placeholder.svg?height=48&width=48",
        },
        {
            id: 4,
            name: "Lorem Ipsum",
            timestamp: "Last month",
            review:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            avatar: "/placeholder.svg?height=48&width=48",
        },
        {
            id: 5,
            name: "Lorem Ipsum",
            timestamp: "Last month",
            review:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            avatar: "/placeholder.svg?height=48&width=48",
        },
        {
            id: 6,
            name: "Lorem Ipsum",
            timestamp: "Last month",
            review:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            avatar: "/placeholder.svg?height=48&width=48",
        },
        {
            id: 7,
            name: "Lorem Ipsum",
            timestamp: "Last month",
            review:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            avatar: "/placeholder.svg?height=48&width=48",
        },
        {
            id: 8,
            name: "Lorem Ipsum",
            timestamp: "Last month",
            review:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            avatar: "/placeholder.svg?height=48&width=48",
        },
    ]





    return (
        <div className="container mx-auto max-w-[1600px] py-6 lg:py-12">
            <div className="max-w-[1600px] mx-auto bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-32">
                    {/* Feedback Ratings Section */}
                    <div className="space-y-6">
                        <div className="flex gap-2 lg:gap-4">
                            <h2 className="text-2xl font-semibold text-gray-900">Feedback ratings</h2>
                            <div className="inline-block bg-red-50 text-primary px-3 py-1 rounded text-sm font-medium">
                                Last 12 months
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-8">
                            <div className="text-left space-y-2 ">
                                <h3 className="text-lg font-medium text-gray-700">Positive</h3>
                                <p className="text-2xl font-bold text-gray-900">{feedbacksStats.positive}</p>
                            </div>
                            <div className="text-left space-y-2 justify-self-center">
                                <h3 className="text-lg font-medium text-gray-700">Neutral</h3>
                                <p className="text-2xl font-bold text-gray-900">{feedbacksStats.neutral}</p>
                            </div>
                            <div className="text-left space-y-2 justify-self-end">
                                <h3 className="text-lg font-medium text-gray-700 ">Negative</h3>
                                <p className="text-2xl font-bold text-gray-900">{feedbacksStats.negative}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-400 w-[5px] rounded-full" />

                    {/* Detailed Seller Ratings Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Detailed seller ratings</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-x-20 lg:gap-y-2">
                            {detailedRatings.map((item, index) => (
                                <div key={index} className="space-y-3">
                                    <h3 className="text-base font-medium text-gray-700">{item.label}</h3>
                                    <div className="gap-4 flex items-center">
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-red-500 h-2 rounded-full transition-all duration-300 ease-in-out"
                                                style={{ width: `${item.progress}%` }}
                                            ></div>
                                        </div>
                                            <p className="text-right text-lg font-semibold text-gray-900">{item.rating}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="max-w-[1600px] mx-auto bg-white">
                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Seller feedback</h2>
                        <hr className="border-gray-200" />
                    </div>

                    {/* Feedback List */}
                    <div className="space-y-6">
                        {feedbackData.map((feedback) => (
                            <div key={feedback.id} className="flex gap-4">
                                {/* Avatar */}
                                <div className="flex-shrink-0">
                                    <Image
                                        width={100}
                                        height={100}
                                        src={carImg || "/placeholder.svg"}
                                        alt={`${feedback.name} avatar`}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold text-gray-900">{feedback.name}</h3>
                                        <span className="text-sm text-gray-500">({feedback.timestamp})</span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{feedback.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* See All Button */}
                    <div className="flex justify-center mt-12">
                        <button className="bg-primary hover:bg-primary text-white font-medium px-8 py-3 rounded-md transition-colors duration-200">
                            See All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}





function About() {
    return (
        <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg p-8">
                {/* About Us Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900">About Us</h2>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">22 Malambo Road, Chinka, Lusaka</span>
                        </div>

                        <p className="text-gray-600 ml-8">Free wifi & wait on site</p>

                        <p className="text-gray-600 ml-8">Live on Road Smart since 2022</p>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        Established in 1971 to provide quality tyre services around the country
                    </p>
                </div>

                {/* Direction Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Direction</h2>

                    <div className="relative">
                        <Image
                            src="/map-image.png"
                            alt="Map showing location in Lusaka"
                            width={500}
                            height={300}
                            className="w-full h-64 object-cover rounded-lg border border-gray-200"
                        />
                    </div>

                    <Button
                        variant="outline"
                        className="flex items-center gap-2 border-red-200 text-primary hover:bg-red-50 bg-transparent"
                    >
                        <Navigation className="w-4 h-4" />
                        Get Direction
                    </Button>
                    <p className="text-primary flex gap-2 items-center">See all 23 outlets  in Lusaka <BiSolidRightArrow /></p>
                </div>
            </div>
        </div>
    )
}


