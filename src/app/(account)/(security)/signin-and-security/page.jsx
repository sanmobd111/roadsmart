"use client"
const securityOptions = [
    {
        id: "passkeys",
        label: "Passkeys",
        description: "Sign in across devices with your face, fingerprint, or PIN using a passkey stored in your password manager.",
        type: "switch",
        checked: true, // Example state
        path: "/passkey"
    },
    {
        id: "password",
        label: "Password",
        description: "Create a password or modify your existing one.",
        type: "button",
        actionText: "Edit",
        modal: "password",
    },
    {
        id: "two-step-verification",
        label: "2 step verification",
        description: "Protect your account by adding an extra layer of security.",
        type: "button",
        actionText: "Edit",
        path: "/two-factor"
    },
    {
        id: "devices-you-trust",
        label: "Devices you trust",
        description: "Review the devices you've decided to trust.",
        type: "button",
        actionText: "View",
        path: "/trust-device"
    },
    {
        id: "sign-in-activity",
        label: "Sign in activity",
        description: "View your sign in history.",
        type: "button",
        actionText: "View",
        path: "/activity"
    },
];
const securityOptions2 = [
    {
        id: "Google",
        label: "Google",
        description: "unlike",
        type: "button",
        actionText: "Edit",
        path: "/google-signin"
    },
    {
        id: "Facebook",
        label: "Facebook",
        description: "unlike",
        type: "button",
        actionText: "Edit",
        path: "/facebook-signin"
    },
    {
        id: "Apple",
        label: "Apple",
        description: "unlike",
        type: "button",
        actionText: "Edit",
        path: "/apple-signin"
    },
];



export default function page() {
    return (
        <Container className={"!space-y-0"}>
            <div>
                <div className='border-b !mb-6'>
                    <h1 className="text-2xl font-semibold mb-6 pb-4 border-b border-gray-200">Sign in and security</h1>
                    <Contents securityOptions={securityOptions} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 border-b'>
                    <h3 className="text-lg font-medium text-gray-800">Social sign in</h3>
                    <Contents securityOptions={securityOptions2} middleTextStyle={"text-center"} />
                </div>
                <div className=''>
                    <Contents securityOptions={[securityOptions[0]]} />
                </div>
            </div>
        </Container>
    )
}


import Container from '@/components/shared/container/Container';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Switch } from '@/components/ui/switch'; // Assuming Shadcn UI switch is available
import combinedClasses from '@/utils/tailwind';
import { Eye, EyeOff } from 'lucide-react'; // For eye icons
import Link from 'next/link';
import { useState } from 'react';

function Contents({ securityOptions, middleTextStyle }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState("");
    return (
        <div className="">
            {/* Header */}


            <div className='overflow-x-auto'>
                {/* Security Options List */}
                {securityOptions.map((option, index) => (
                    <div key={option.id} className={`grid grid-cols-[auto_auto_auto] gap-4 lg:gap-0 lg:grid-cols-3 items-center py-4 ${index < securityOptions.length - 1 ? 'border-b border-gray-200' : ''}`}>
                        <h3 className="text-lg font-medium text-gray-800">{option.label}</h3>

                        {
                            currentModal === "password" && option.id === "password" ? <div className="grid grid-cols-1 gap-8">
                                <div>
                                    <p className="text-base text-gray-600 mb-6">
                                        Create a password or modify your existing one.
                                    </p>

                                    {/* Current password */}
                                    <div className="mb-4">
                                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                            Current password
                                        </label>
                                        <Input
                                            id="currentPassword"
                                            type="password"
                                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                                        />
                                    </div>

                                    {/* New password */}
                                    <div className="mb-4">
                                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                            New password
                                        </label>
                                        <div className="relative">
                                            <Input
                                                id="newPassword"
                                                type="password"
                                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12 pr-10"
                                            />
                                            <Eye size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
                                        </div>
                                    </div>

                                    {/* Confirm password */}
                                    <div className="mb-6">
                                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                            Confirm password
                                        </label>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                                        />
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-start gap-4">
                                        <Button
                                            variant="outline"
                                            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </div> :
                                <>
                                    <p className={combinedClasses("text-sm text-gray-500", middleTextStyle)}>{option.description}</p>
                                    <div className="w-fit ml-auto">
                                        {option.type === "switch" ? (
                                            <Link href={option?.path || "#"}>
                                                <Switch checked={option.checked} className={""} />
                                            </Link>
                                        ) : (
                                            <Link href={option?.path || "#"}>
                                                <Button onClick={option?.modal ? () => {
                                                    setCurrentModal(option?.modal)
                                                    setIsModalOpen(true)
                                                } : null} variant="link" className="text-gray-600 hover:text-gray-600 hover:no-underline p-0 h-auto">
                                                    {option.actionText}
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                </>
                        }
                    </div>
                ))
                }
            </div>

            {/* <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                {
                    currentModal === "password" && <PasswordModalContents />
                }
            </Modal> */}
        </div >
    );
}

