"use client"

import OutlineButton from '@/components/shared/buttons/OutlineButton';
import PrimaryButton from '@/components/shared/buttons/PrimaryButton';
import Container from '@/components/shared/container/Container';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Label } from '@/components/ui/label'; // Assuming Shadcn UI label is available
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'; // Assuming Shadcn UI radio group is available
import {
    Banknote, // For Lorem Ipsum item 3
    CreditCard, // For Bank account
    Smartphone
} from 'lucide-react'; // Using lucide-react for icons
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function App() {
    const router = useRouter();
    const paymentMethods = [
        {
            id: "visa-1",
            icon: "https://placehold.co/40x25/FFFFFF/000000?text=VISA", // Placeholder VISA icon
            label: "Lorem Ipsum",
            nameOnCard: "Davy Nanduba",
            status: "Expired",
            action: "Update",
        },
        {
            id: "visa-2",
            icon: "https://placehold.co/40x25/FFFFFF/000000?text=VISA", // Placeholder VISA icon
            label: "Lorem Ipsum",
            nameOnCard: "Davy Nanduba",
            status: "Expired",
            action: "Update",
        },
        {
            id: "visa-3",
            icon: "https://placehold.co/40x25/FFFFFF/000000?text=VISA", // Placeholder VISA icon
            label: "Lorem Ipsum",
            nameOnCard: "Davy Nanduba",
            status: "Expired",
            action: "Update",
        },
        {
            id: "visa-4",
            icon: "https://placehold.co/40x25/FFFFFF/000000?text=VISA", // Placeholder VISA icon
            label: "Lorem Ipsum",
            nameOnCard: "Davy Nanduba",
            status: "Expired",
            action: "Update",
        },
    ];

    const handleSignUp = () => {
        router.push("/verify-message")
    }
    const handleSkip = () => {
        router.push("/verify-message")
    }

    return (
        <Container className="">
            <div className="w-full max-w-3xl space-y-6 mx-auto">
                {/* Introductory Text */}
                <p className="text-lg lg:text-xl text-gray text-center mb-4">
                    It is a long established fact that a reader will be distracted.
                </p>

                {/* Highlighted Message */}
                <div className="bg-red-50 p-4 rounded-md text-center text-2xl lg:text-3xl font-bold text-[#343434] mb-8">
                    Lorem Ipsum is simply dummy text
                </div>

                {/* Lorem Ipsum Sections */}
                <div className="space-y-4 mb-8 lg:ml-28">
                    <div className="flex items-center space-x-4">
                        <Image
                            src="/images/payment/p-icon2.svg"
                            alt="package"
                            width={24}
                            height={24}
                            className='h-12 w-12'
                        />
                        <div>
                            <h3 className="text-base font-semibold text-[#343434]">Lorem Ipsum is simply dummy text</h3>
                            <p className="text-sm text-gray-secondary">It is a long established fact that a reader will be distracted.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Image
                            src="/images/payment/p-icon.svg"
                            alt="package"
                            width={24}
                            height={24}
                            className='h-10 w-10'
                        />
                        <div>
                            <h3 className="text-base font-semibold text-[#343434]">Lorem Ipsum is simply dummy text</h3>
                            <p className="text-sm text-gray-secondary">It is a long established fact that a reader will be distracted.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Image
                            src="/images/payment/p-icon3.svg"
                            alt="package"
                            width={24}
                            height={24}
                            className='h-10 w-10'
                        />
                        <div>
                            <h3 className="text-base font-semibold text-[#343434]">Lorem Ipsum is simply dummy text</h3>
                            <p className="text-sm text-gray-secondary">It is a long established fact that a reader will be distracted.</p>
                        </div>
                    </div>
                    <p className="text-base text-[#343434] font-bold mb-0 mt-6">Lorem Ipsum</p>
                    <p className="text-sm text-gray">It is a long established fact that a reader will be distracted.</p>
                </div>

                {/* Add a payment method Section */}
                <div className="border border-gray-200 rounded-lg px-12 py-6 mb-4 overflow-hidden">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-3 border-gray-200">
                        Add a payment method
                    </h2>
                    <div className='overflow-x-auto'>
                        <div className='w-max lg:w-full'>
                            <div className="grid grid-cols-[auto_2fr_1fr_1fr] items-center gap-x-4 gap-y-2 text-sm text-gray-600 font-medium mb-2">
                                {/* placeholder for radio button column */}
                                <RadioGroup defaultValue="visa-1" className="space-y-3 opacity-0">
                                    <RadioGroupItem />
                                </RadioGroup>
                                <div></div> {/* Empty for Update column */}
                                <div className='text-center text-nowrap block text-xs'>Name on card</div>
                                <div className='text-center text-nowrap block text-xs'>Expires on</div>
                            </div>
                            <RadioGroup defaultValue="visa-1" className="space-y-3">
                                {paymentMethods.map((method) => (
                                    <div key={method.id} className="grid grid-cols-[auto_2fr_1fr_1fr] items-center gap-x-4">
                                        <RadioGroupItem value={method.id} id={method.id} />
                                        <Label htmlFor={method.id} className="flex items-center space-x-2 cursor-pointer">
                                            <Image src={"/images/payment/card.svg"} alt={method.label} className="object-contain w-10 h-10" width={40} height={40} />
                                            <span className="text-xs text-gray text-nowrap block">{method.label}</span>
                                        </Label>
                                        <span className="text-sm text-gray text-center font-semibold text-nowrap block">{method.nameOnCard}</span>
                                        <div className='flex flex-col items-center'>
                                            <span className="text-primary text-sm text-nowrap block">{method.status}</span>
                                            <a href="#" className="hover:underline text-sm text-nowrap block">{method.action}</a>
                                        </div>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>
                    </div>
                </div>

                {/* More Payment Options */}
                <h2 className="text-lg font-semibold text-gray-800 mb-8 pb-4 border-b">More Payment Options</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <Button variant="outline" className="flex items-center justify-start p-4 h-auto border-none shadow-sm rounded-md hover:bg-gray-50 transition-colors duration-200">
                        <div className='p-4 bg-secondary flex justify-center items-center rounded-md mr-3'>
                            <CreditCard size={24} className="text-primary !w-6 !h-6" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-base font-medium text-gray-800">Debit Card</span>
                            <span className="text-sm text-gray-500">Pay via your debit card</span>
                        </div>
                    </Button>
                    <Button variant="outline" className="flex items-center justify-start p-4 h-auto border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
                        <div className='p-4 bg-secondary flex justify-center items-center rounded-md mr-3'>
                            <CreditCard size={24} className="text-primary !w-6 !h-6" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-base font-medium text-gray-800">Credit Card</span>
                            <span className="text-sm text-gray-500">Pay via your credit card</span>
                        </div>
                    </Button>
                    <Button variant="outline" className="flex items-center justify-start p-4 h-auto border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
                        <div className='p-4 bg-secondary flex justify-center items-center rounded-md mr-3'>
                            <Banknote size={24} className="text-primary !w-6 !h-6" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-base font-medium text-gray-800">Bank account</span>
                            <span className="text-sm text-gray-500">Pay via your bank account</span>
                        </div>
                    </Button>
                    <Button variant="outline" className="flex items-center justify-start p-4 h-auto border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
                        <div className='p-4 bg-secondary flex justify-center items-center rounded-md mr-3'>
                            <Smartphone size={24} className="text-primary !w-6 !h-6" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-base font-medium text-gray-800">Mobile Pay</span>
                            <span className="text-sm text-gray-500">Pay via your mobile money</span>
                        </div>
                    </Button>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4 lg:pt-6 lg:w-1/2 mx-auto">
                    <PrimaryButton onClick={handleSignUp} className="w-full sm:w-auto" btnText={'Sign Up'} />
                    <OutlineButton onClick={handleSkip} className="w-full sm:w-auto" btnText={'Skip the step'} />
                </div>
            </div>
        </Container>
    );
}
