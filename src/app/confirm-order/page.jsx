import { CheckCircle2 } from 'lucide-react';

export default function page() {
    return (
        <div className="max-w-[1600px] w-full p-8 mx-auto my-8 lg:my-16">
            {/* Header section with icon and title */}
            <div className="flex items-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-500 mr-3" />
                <h1 className="text-2xl font-bold text-gray-800">Thank you. Your order has been placed</h1>
            </div>

            {/* Main description text */}
            <p className="text-gray-600 mb-6 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            {/* Shipping and delivery details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-0 sm:gap-x-12 mb-8">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Ship to</h3>
                    <address className="text-gray-600 text-sm not-italic leading-relaxed">
                        Billy Smith<br />
                        Lorem Ipsum is simply<br />
                        dummy text of the printing<br />
                        and typesetting industry.<br />
                        United States
                    </address>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Estimated Delivery date</h3>
                    <p className="text-gray-600 text-sm">
                        10 Dec 2025 - 14 Dec 2025
                    </p>
                </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 w-fit space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                <button
                    className="flex-1 py-3 px-6 text-gray-700 font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                    View order details
                </button>
                <button
                    className="flex-1 py-3 px-6 text-white font-medium bg-primary rounded-lg hover:bg-primary transition-colors duration-200"
                >
                    Browse deals
                </button>
            </div>
        </div>
    )
}
