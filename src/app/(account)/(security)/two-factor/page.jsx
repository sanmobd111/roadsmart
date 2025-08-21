"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Checkbox } from '@/components/ui/checkbox'; // Assuming Shadcn UI checkbox is available
import {
    MessageSquare, // For 'Text me' icon
    Smartphone, // For 'App notification' icon
    Scan, // For 'Authenticator app' icon
    // CheckSquare is no longer needed as we are using Checkbox
} from 'lucide-react'; // Using lucide-react for icons
import Container from '@/components/shared/container/Container';
import Modal from '@/components/shared/modal/Modal';
import TurnOffTwoStepVerificationModalContents from '@/components/modal-contents/security/TurnOffTwoStepVerificationModalContents';
import Link from 'next/link';

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const verificationMethods = [
        {
            id: "text-me",
            icon: MessageSquare,
            title: "Text me",
            status: "Active",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            active: true,
        },
        {
            id: "app-notification",
            icon: Smartphone,
            title: "App notification",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            active: false,
        },
        {
            id: "authenticator-app",
            icon: Scan,
            title: "Authenticator app",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            active: false,
        },
    ];

    return (
        <Container className="min-h-[60vh] bg-white font-sans text-gray-900 flex items-start justify-center">
            <div className="w-full space-y-6 bg-white rounded-lg">
                {/* Header */}
                <h1 className="text-2xl font-semibold mb-6 pb-4 border-b border-gray-200">2-step verification</h1>

                <div className=' max-w-3xl'>
                    {/* Status Message */}
                    <div className="flex items-center space-x-2 mb-8">
                        {/* Replaced CheckSquare with Checkbox */}
                        <Checkbox checked={true} className="data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                        <p className="text-base text-gray-800">Lorem Ipsum is simply dummy text</p>
                    </div>

                    {/* Verification Methods */}
                    <div className="space-y-4 mb-8">
                        {verificationMethods.map((method) => (
                            <div
                                key={method.id}
                                className={`border rounded-lg p-4 flex items-start space-x-4 ${method.active ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'
                                    }`}
                            >
                                <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full ${method.active ? 'bg-red-100 text-primary' : 'bg-gray-100 text-gray-500'}`}>
                                    <method.icon size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-medium text-gray-800">
                                        {method.title}{" "}
                                        {method.status && (
                                            <span className="ml-2 text-xs font-semibold text-primary">{method.status}</span>
                                        )}
                                    </h3>
                                    <p className="text-sm text-gray-500">{method.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Other Ways to Verify */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">Other ways to verify it's you</h2>
                        <div className="flex justify-between items-center py-2 border-gray-200">
                            <p className="text-base text-gray-800">dav*****@gmail.com</p>
                            <Link href={"/protect-account"}>
                                <Button variant="link" className="text-primary hover:text-primary p-0 h-auto">
                                    Edit
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-start gap-4">
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            variant="outline"
                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                        >
                            Turn off
                        </Button>
                        <Button
                            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                        >
                            Switch method
                        </Button>
                    </div>
                </div>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                <TurnOffTwoStepVerificationModalContents setIsModalOpen={setIsModalOpen} />
            </Modal>
        </Container>
    );
}
