import combinedClasses from "@/utils/tailwind";

export default function VehicleCardWithBadge({ item, hasViewMore = false, hasPrice = false, hasBadge = true, hasQuantity = false, subTexts, quantityClassName }) {
    return (
        <div key={item.id} className="flex items-center gap-3 sm:gap-4">
            {/* Icon with Notification */}
            <div className="relative flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-100 rounded-lg flex items-center justify-center">
                    {item.icon}
                </div>
                {
                    hasBadge && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-white text-[10px] p-3">
                            11
                        </div>
                    )
                }
            </div>

            {/* Insurance Details */}
            <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.name}</h3>
                {
                    subTexts?.map((text, index) => (
                        <p className="text-sm text-gray-600">{text}</p>
                    ))
                }
                {
                    hasQuantity && (
                        <p className={combinedClasses("text-primary text-xs sm:text-sm font-medium mt-1", quantityClassName)}>Quantity {item.quantity}</p>
                    )
                }
                {
                    hasPrice && (
                        <p className="text-sm font-semibold mt-2">$200.00</p>
                    )
                }
                {
                    hasViewMore && (
                        <button className="text-xs text-primary hover:text-primary">
                            View more
                        </button>
                    )
                }
            </div>
        </div>
    )
}
