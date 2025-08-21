"use client"

import AccountViewHeader from "@/components/account/AccountViewHeader";
import CustomerReviewModalContents from "@/components/modal-contents/account-view/CustomerReviewModalContents";
import Container from "@/components/shared/container/Container";
import Modal from "@/components/shared/modal/Modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import carImg from "@/assets/images/pngwing.com (3).png";

export default function page() {
    const [isPrivateView, setIsPrivateView] = useState(false);
    return (
        <div>
            <AccountViewHeader isPrivateView={isPrivateView} setIsPrivateView={setIsPrivateView} />
            <Container className="block">
                <AccountView />
            </Container>
        </div>
    )
}



function AccountView() {
    return (
        <Tabs defaultValue="reviews" className="w-full">
            <TabsList className="mb-6 bg-transparent justify-start border-b border-gray-200 p-0 w-full h-auto">
                <div className="pb-4 mb-4 border-b">
                    <TabsTrigger
                        value="reviews"
                        className="px-4 py-2 text-gray-600 data-[state=active]:text-white data-[state=active]:bg-primary shadow-none rounded-md"
                    >
                        Reviews
                    </TabsTrigger>
                    <TabsTrigger
                        value="all-posts"
                        className="px-4 py-2 text-gray-600 data-[state=active]:text-white data-[state=active]:bg-primary shadow-none rounded-md"
                    >
                        All Posts
                    </TabsTrigger>
                </div>
            </TabsList>

            <TabsContent value="reviews">
                <div className="text-center text-gray-500">
                    <Reviews />
                </div>
            </TabsContent>
            <TabsContent value="all-posts">
                {/* Secondary Tabs/Filters */}
                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="mb-6 bg-transparent justify-start p-0 space-x-4">
                        <TabsTrigger
                            value="all"
                            className="px-4 py-2 data-[state=active]:text-primary data-[state=active]:bg-red-100 rounded-md hover:bg-red-200 transition-colors duration-200 !shadow-none"
                        >
                            All
                        </TabsTrigger>
                        <TabsTrigger
                            value="idea-lists"
                            className="px-4 py-2 text-gray-600 data-[state=active]:text-primary data-[state=active]:bg-red-100 rounded-md hover:bg-red-200 transition-colors duration-200"
                        >
                            Idea lists
                        </TabsTrigger>
                        <TabsTrigger
                            value="photos"
                            className="px-4 py-2 text-gray-600 data-[state=active]:text-primary data-[state=active]:bg-red-100 rounded-md hover:bg-red-200 transition-colors duration-200"
                        >
                            Photos
                        </TabsTrigger>
                        <TabsTrigger
                            value="videos"
                            className="px-4 py-2 text-gray-600 data-[state=active]:text-primary data-[state=active]:bg-red-100 rounded-md hover:bg-red-200 transition-colors duration-200"
                        >
                            Videos
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        <div className="text-center text-gray-500 py-10">
                            Lorem ipsum is simply dummy text
                        </div>
                    </TabsContent>
                    <TabsContent value="idea-lists">
                        <div className="text-center text-gray-500 py-10">
                            No idea lists to display.
                        </div>
                    </TabsContent>
                    <TabsContent value="photos">
                        <div className="text-center text-gray-500 py-10">
                            No photos to display.
                        </div>
                    </TabsContent>
                    <TabsContent value="videos">
                        <div className="text-center text-gray-500 py-10">
                            No videos to display.
                        </div>
                    </TabsContent>
                </Tabs>
            </TabsContent>
        </Tabs>
    );
}

import { Heart, Star } from 'lucide-react'; // For star and heart icons
import { useState } from "react";
import Image from "next/image";

function Reviews() {
    const products = [
        {
            id: 1,
            image: "https://placehold.co/150x100/FEE2E2/EF4444?text=Brake", // Placeholder image for brake
            rating: 5,
            reviews: 2,
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text",
        },
        {
            id: 2,
            image: "https://placehold.co/150x100/FEE2E2/EF4444?text=Brake", // Placeholder image for brake
            rating: 5,
            reviews: 2,
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text",
        },
        {
            id: 3,
            image: "https://placehold.co/150x100/FEE2E2/EF4444?text=Brake", // Placeholder image for brake
            rating: 5,
            reviews: 2,
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text",
        },
        {
            id: 4,
            image: "https://placehold.co/150x100/FEE2E2/EF4444?text=Brake", // Placeholder image for brake
            rating: 5,
            reviews: 2,
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text",
        },
        {
            id: 5,
            image: "https://placehold.co/150x100/FEE2E2/EF4444?text=Brake", // Placeholder image for brake
            rating: 5,
            reviews: 2,
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text",
        },
        {
            id: 6,
            image: "https://placehold.co/150x100/FEE2E2/EF4444?text=Brake", // Placeholder image for brake
            rating: 5,
            reviews: 2,
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text",
        },
        {
            id: 7,
            image: "https://placehold.co/150x100/FEE2E2/EF4444?text=Brake", // Placeholder image for brake
            rating: 5,
            reviews: 2,
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text",
        },
        {
            id: 8,
            image: "https://placehold.co/150x100/FEE2E2/EF4444?text=Brake", // Placeholder image for brake
            rating: 5,
            reviews: 2,
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text",
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Container className="mt-0 p-0">
            <div className="w-full space-y-6" onClick={() => setIsModalOpen(true)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
                            <Image src={carImg} alt={product.title} className="w-full h-36 object-cover" width={200} height={200} />
                            <div className="p-4 flex-grow flex flex-col justify-between">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center">
                                        {Array.from({ length: product.rating }).map((_, i) => (
                                            <Star key={i} size={16} className="fill-red-500 text-red-500" />
                                        ))}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Heart size={16} className="text-red-500 mr-1" /> ({product.reviews})
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.title}</h3>
                                <p className="text-sm text-gray-600">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                <CustomerReviewModalContents />
            </Modal>
        </Container>
    );
}
