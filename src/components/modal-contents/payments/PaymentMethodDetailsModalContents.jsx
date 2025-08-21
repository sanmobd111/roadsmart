import { Banknote } from 'lucide-react'; // Using lucide-react for icons
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import ModalTitle from '../../shared/modal/ModalTitle';
import { useState } from 'react';

export default function MethodDetailsModalContents({ setStep }) {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const paymentSections = [
        {
            id: "credit-debit-cards",
            title: "Credit or debit cards",
            description: "roadsmart accepts major credit abd debit cards",
            logos: [
                "https://placehold.co/50x30/FFFFFF/000000?text=VISA", // Placeholder for VISA
                "https://placehold.co/50x30/FFFFFF/000000?text=MC", // Placeholder for MasterCard
                "https://placehold.co/50x30/FFFFFF/000000?text=AMEX", // Placeholder for American Express
                "https://placehold.co/50x30/FFFFFF/000000?text=Diners", // Placeholder for Diners Club
            ],
            buttonText: "Add a credit or debit card",
        },
        {
            id: "mobile-money",
            title: "Mobile Money",
            description: "Pay using your mobile money account",
            logos: [
                "https://placehold.co/40x40/FF0000/FFFFFF?text=airtel", // Placeholder for Airtel
                "https://placehold.co/40x40/FFD700/000000?text=MTN", // Placeholder for MTN
                "https://placehold.co/40x40/008000/FFFFFF?text=Zamtel", // Placeholder for Zamtel
            ],
            buttonText: "Add mobile money account",
        },
        {
            id: "bank-account",
            title: "Checking Account",
            description: "Use your checking account",
            icon: Banknote, // Using Lucide icon for bank
            buttonText: "Add checking account",
        },
    ];

    return (
        <div className="bg-white font-sans text-gray-900">
            <ModalTitle title="Add Payment Methods" />
            <div className="w-full max-w-4xl space-y-8 bg-white">
                {paymentSections.map((section, index) => (
                    <div key={section.id} className={`py-6 ${index < paymentSections.length - 1 ? 'border-b border-gray-200' : ''}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800 mb-1">{section.title}</h2>
                                <p className="text-base text-gray-600">{section.description}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                {section.logos && section.logos.map((logo, i) => (
                                    <img key={i} src={logo} alt={`Logo ${i}`} className="h-8 object-contain" />
                                ))}
                                {section.icon && <section.icon size={48} className="text-gray-700" />}
                            </div>
                        </div>
                        <Button
                            onClick={() => setStep(section.id)}
                            variant="outline"
                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                        >
                            {section.buttonText}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
