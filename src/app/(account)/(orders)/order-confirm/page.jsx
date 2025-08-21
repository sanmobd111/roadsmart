import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function OrderConfirmation() {
    return (
        <div className="container mx-auto flex min-h-screen max-w-[1600px] px-4 md:px-6 py-20">
            <Card className="w-full shadow-none border-none py-0 max-w-[1600px]">
                <CardContent className={"px-0"}>
                    {/* Header with checkmark and title */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                        </div>
                        <h1 className="text-xl font-semibold text-gray-900">Thank you. Your order has been placed</h1>
                    </div>

                    {/* Description text */}
                    <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>

                    {/* Ship to and Delivery sections */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Ship to section */}
                        <div>
                            <h2 className="font-medium text-gray-900 mb-3">Ship to</h2>
                            <div className="text-sm text-gray-600 space-y-1">
                                <p>Billy Smith</p>
                                <p>Lorem Ipsum is simply</p>
                                <p>dummy text of the printing</p>
                                <p>and typesetting industry.</p>
                                <p>United States</p>
                            </div>
                        </div>

                        {/* Estimated Delivery section */}
                        <div>
                            <h2 className="font-medium text-gray-900 mb-3">Estimated Delivery date</h2>
                            <p className="text-sm text-gray-600">10 Dec 2025 - 14 Dec 2025</p>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 w-[40%]">
                        <Button variant="outline" className="flex-1 bg-transparent">
                            View order details
                        </Button>
                        <Button className="flex-1 bg-primary hover:bg-primary text-white">Browse deals</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
