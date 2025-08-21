"use client"

import Container from '@/components/shared/container/Container';
import Title from '@/components/ui/Title';
import { TbAirConditioning } from "react-icons/tb";

export default function page() {
    return (
        <Container className={"lg:!mb-28"}>
            <div className='w-full'>
                <Title text={"Share Feedback"} className={"text-left mb-4 pb-4 border-b"} />
                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-start'>
                    <div className='space-y-10 lg:w-[65%]'>
                        <ServiceCard />
                        <FeedbackForm />
                        <PhotoUpload />
                    </div>
                    <RatingSection />
                </div>
            </div>
        </Container>
    )
}

function ServiceCard() {
    const handleServiceClick = () => {
        console.log("Air con service clicked")
    }

    return (
        <div className=" bg-white">
            <div
                onClick={handleServiceClick}
                className="relative rounded-3xl cursor-pointe transition-colors"
            >

                <div className="flex items-center space-x-8">
                    {/* Air Conditioning Unit Illustration */}
                    <div className="w-20 h-20 bg-red-100 rounded-sm flex items-center justify-center flex-shrink-0 relative">
                        {/* Air Conditioning Unit SVG */}
                        <div className="relative">
                            <TbAirConditioning className='text-2xl' />

                            {/* Notification Badge */}
                        </div>
                        <div className="absolute -top-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-sm font-bold">11</span>
                        </div>
                    </div>

                    {/* Service Details */}
                    <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-gray-800 mb-1">Air con Service</h2>
                        <p className="text-sm text-gray-600 mb-1">2018 Toyota Hilux</p>
                        <p className="text-xs text-gray-500">
                            Sold by: <Link href={"/seller-profile"}>
                                <span className="font-semibold text-gray-700">Hallmark</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


import { useState } from "react";

function FeedbackForm() {
    const [feedback, setFeedback] = useState("")
    const maxLength = 500

    const handleFeedbackChange = (e) => {
        const value = e.target.value
        if (value.length <= maxLength) {
            setFeedback(value)
        }
    }

    const handleSubmit = () => {
        console.log("Feedback submitted:", feedback)
        // Handle feedback submission
    }

    return (
        <div className="bg-white">
            <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-gray-800">Tell us what you loved about this item</h2>
                    <p className="text-gray-600 text-sm">
                        Was the item/service you received as described? What else was great about this purchase?
                    </p>
                </div>

                {/* Feedback Text Area */}
                <div className="space-y-2">
                    <textarea
                        value={feedback}
                        onChange={handleFeedbackChange}
                        placeholder="Share your feedback here"
                        className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    />

                    {/* Character Counter */}
                    <div className="flex justify-end">
                        <span className="text-sm text-gray-500">
                            {feedback.length}/{maxLength}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

import FileUpload from '@/components/shared/file-upload/FileUpload';

function PhotoUpload() {
    const handleShareFeedback = () => {
        console.log("Share feedback clicked")
    }

    return (
        <div className="bg-white">
            <div className="space-y-6">
                {/* Upload Photos Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Upload photos (optional)</h3>

                    {/* Photo Upload Grid */}
                    <div className="grid grid-cols-5 gap-4 max-w-lg">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <FileInput />
                        ))}
                    </div>

                    {/* Photo Counter */}
                    <p className="text-sm text-gray-500">Add up to 5 photos</p>
                </div>

                {/* Share Feedback Button */}
                <div className="flex justify-start">
                    <button
                        onClick={handleShareFeedback}
                        className="bg-primary hover:bg-primary text-white font-medium px-8 py-3 rounded-lg transition-colors"
                    >
                        Share Feedback
                    </button>
                </div>
            </div>
        </div>
    )
}

import { Star } from "lucide-react";
import Link from 'next/link';
import FileInput from '@/components/shared/file-input/FileInput';

function RatingSection() {
    const [serviceRating, setServiceRating] = useState(0)
    const [deliveryRating, setDeliveryRating] = useState(0)

    const handleStarClick = (rating, type) => {
        if (type === "service") {
            setServiceRating(rating)
        } else {
            setDeliveryRating(rating)
        }
    }

    const renderStars = (currentRating, type) => {
        return Array.from({ length: 5 }).map((_, index) => {
            const starNumber = index + 1
            return (
                <button
                    key={index}
                    onClick={() => handleStarClick(starNumber, type)}
                    className="p-1 hover:scale-110 transition-transform"
                >
                    <Star
                        className={`w-6 h-6 ${starNumber <= currentRating ? "fill-red-500 text-red-500" : "text-red-500 hover:fill-red-200"
                            }`}
                    />
                </button>
            )
        })
    }

    return (
        <div className="bg-white lg:w-[30%] lg:border-l lg:pl-6">
            <div className="space-y-8">
                {/* Header */}
                <h3 className="text-lg font-semibold text-gray-800">Rate the details(optional)</h3>

                {/* Service Description Rating */}
                <div className="space-y-3">
                    <div>
                        <h4 className="font-medium text-gray-800 mb-1">Service description</h4>
                        <p className="text-sm text-gray-600">As described</p>
                    </div>
                    <div className="flex space-x-1">{renderStars(serviceRating, "service")}</div>
                </div>

                {/* Delivery Time Rating */}
                <div className="space-y-3">
                    <div>
                        <h4 className="font-medium text-gray-800 mb-1">Delivery time</h4>
                        <p className="text-sm text-gray-600">It was delivered on time</p>
                    </div>
                    <div className="flex space-x-1">{renderStars(deliveryRating, "delivery")}</div>
                </div>
            </div>
        </div>
    )
}



