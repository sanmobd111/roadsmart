import React from 'react'
import { Button } from "@/components/ui/button"

export default function CheckoutModalContents() {
    return (
        <div>
            {/* Content */}
            <div className="text-center pt-8">
                <p className="text-red-500 text-lg mb-8">Sorry, You don't have any payment method.</p>

                <Button
                    onClick={onAddPayment}
                    className="bg-primary hover:bg-primary text-white px-8 py-3 rounded-md font-medium"
                >
                    Add payment method
                </Button>
            </div>
        </div>
    )
}
