import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Label } from '@/components/ui/label'; // Assuming Shadcn UI label is available
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'; // Assuming Shadcn UI radio group is available
import {
    Banknote,
    CreditCard,
    Smartphone,
} from 'lucide-react'; // Using lucide-react for icons
import Image from 'next/image';
import Link from 'next/link';

export default function PaymentModalContents() {
    const paymentOptions = [
        {
            id: "visa-1",
            type: "card",
            icon: "/images/payment/card1.svg", // Placeholder VISA icon
            label: "Visa.....1234",
            expiry: "12/24",
        },
        {
            id: "paypal",
            type: "digital",
            icon: "/images/payment/card1.svg", // Placeholder PayPal icon
            label: "Lorem Ipsum",
            email: "loremipsum@gmail.com",
        },
        {
            id: "debit-card",
            type: "custom-card",
            icon: CreditCard,
            label: "Debit Card",
            name: "Davy Nanduba",
            number: "22222222......4445555",
            expiry: "12/24",
        },
        {
            id: "bank-account",
            type: "bank",
            icon: Banknote,
            label: "Bank Account",
            name: "Davy Nanduba",
            number: "000000000000",
            bankName: "Eastern Bank",
        },
        {
            id: "visa-2",
            type: "card",
            icon: "/images/payment/card1.svg", // Placeholder VISA icon
            label: "Visa.....1234",
            expiry: "12/24",
        },
        {
            id: "gpay",
            type: "digital",
            icon: "/images/payment/card1.svg", // Placeholder G Pay icon
            label: "Lorem Ipsum",
            email: "loremipsum@gmail.com",
        },
        {
            id: "credit-card",
            type: "custom-card",
            icon: CreditCard,
            label: "Credit Card",
            name: "Davy Nanduba",
            number: "22222222......4445555",
            expiry: "12/24",
        },
        {
            id: "mobile-pay",
            type: "mobile",
            icon: Smartphone,
            label: "Mobile Pay",
            name: "Davy Nanduba",
            number: "+222222222222",
            carrier: "Airtel",
        },
    ];

    return (
        <div className="w-full max-w-4xl space-y-6">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                Choose your payment method
            </h1>

            {/* Payment Options Grid */}
            <RadioGroup defaultValue="visa-1" className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                {paymentOptions.map((option, indx) => (
                    <div key={option.id} className={`flex space-x-3 ${(indx + 1) % 2 === 0 ? "self-end w-fit" : ""}`}>
                        <RadioGroupItem value={option.id} id={option.id} className="mt-1 self-center" />
                        <Label htmlFor={option.id} className="flex-1 cursor-pointer flex  ">
                            <div className="h-full flex justify-center items-center">
                                {option.type === "card" || option.type === "digital" ? (
                                    <Image src={option.icon} alt={option.label} className="w-full h-full object-cover" width={40} height={40} />
                                ) : (
                                    <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-red-100 text-primary mr-3 ">
                                        <option.icon size={18} />
                                    </div>
                                )}
                            </div>
                            <div>
                                <span className="text-base font-medium text-gray-800">{option.label}</span>
                                {option.type === "card" && (
                                    <p className="text-sm text-gray-600  ">Expiry: {option.expiry}</p>
                                )}
                                {option.type === "digital" && (
                                    <p className="text-sm text-gray-600  ">{option.email}</p>
                                )}
                                {option.type === "custom-card" && (
                                    <>
                                        <p className="text-sm text-gray-600  ">{option.name}</p>
                                        <p className="text-sm text-gray-600  ">{option.number}</p>
                                        <p className="text-sm text-gray-600  ">Expiry: {option.expiry}</p>
                                    </>
                                )}
                                {option.type === "bank" && (
                                    <>
                                        <p className="text-sm text-gray-600  ">{option.name}</p>
                                        <p className="text-sm text-gray-600  ">{option.number}</p>
                                        <p className="text-sm text-gray-600  ">{option.bankName}</p>
                                    </>
                                )}
                                {option.type === "mobile" && (
                                    <>
                                        <p className="text-sm text-gray-600  ">{option.name}</p>
                                        <p className="text-sm text-gray-600  ">{option.number}</p>
                                        <p className="text-sm text-gray-600  ">{option.carrier}</p>
                                    </>
                                )}
                            </div>
                        </Label>
                    </div>
                ))}
            </RadioGroup>

            {/* Add another method Button */}
            <div className="flex justify-start">
                <Link href={"/order-confirm"}>
                    <Button
                        className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                    >
                        Add another method
                    </Button>
                </Link>
            </div>
        </div>
    );
}
