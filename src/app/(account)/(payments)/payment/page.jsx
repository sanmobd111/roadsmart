"use client"

import AddPaymentMethodModalContents from '@/components/modal-contents/payments/AddPaymentMethodModalCOntents';
import BankPaymentModalContents from '@/components/modal-contents/payments/BankPaymentModalContents';
import CardPaymentModalContents from '@/components/modal-contents/payments/CardPaymentModalContents';
import EditAddressModalContents from '@/components/modal-contents/payments/EditAddressModalContents';
import MobilePaymentModalContents from '@/components/modal-contents/payments/MobilePaymentModalContents';
import MethodDetailsModalContents from '@/components/modal-contents/payments/PaymentMethodDetailsModalContents';
import Container from '@/components/shared/container/Container';
import Modal from '@/components/shared/modal/Modal';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { useState } from 'react';

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [step, setStep] = useState("methods-details")

    const handleNext = () => {
        setStep(step + 1)
    }
    return (
        <Container className="min-h-screen bg-white font-sans text-gray-900 flex items-start justify-center">
            <div className="w-full space-y-6 bg-white rounded-lg">
                {/* Breadcrumb Navigation */}
                <nav className="text-sm text-gray-500 mb-6">
                    <a href="#" className="hover:underline">Account</a> &gt;{" "}
                    <span className="font-semibold text-gray-700">Payments & Payouts</span>
                </nav>

                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200">
                    Your Payments
                </h1>

                {/* Payment methods section */}
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment methods</h2>
                <p className="text-base text-gray-600 mb-8">
                    Add a payment method using our secure payment system, then start planning your next trip.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-start gap-4 mt-8">
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                    >
                        Add Payment Method
                    </Button>
                    <Button
                        variant="link"
                        className="px-0 py-2 text-gray h-auto"
                    >
                        View Saved Methods
                    </Button>
                </div>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                {/* {
                    step === "methods" && <AddPaymentMethodModalContents setStep={setStep} />
                } */}

                {
                    step === "methods-details" && <MethodDetailsModalContents setStep={setStep} />
                }

                {
                    step === "credit-debit-cards" && <CardPaymentModalContents setStep={setStep} />
                }

                {
                    step === "mobile-money" && <MobilePaymentModalContents setStep={setStep} />
                }

                {
                    step === "bank-account" && <BankPaymentModalContents setStep={setStep} />
                }

                {
                    step === "edit-address" && <EditAddressModalContents setStep={setStep} />
                }
            </Modal>
        </Container>
    );
}
