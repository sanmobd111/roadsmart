import Image from "next/image"
import { Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import carImg from "@/assets/images/pngwing.com (3).png";
import Container from "@/components/shared/container/Container";
import Link from "next/link";
import Path from "@/components/shared/path/Path";

const serviceProviders = [
    {
        id: 1,
        name: "Carlaw Tire & Auto Service Centre",
        rating: 4.5,
        reviewCount: "1.5k ratings",
        location: "45 Pondfield Rd W #1C",
        price: "$900.00",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 2,
        name: "Almer's Tire & Auto Workshop",
        rating: 4.5,
        reviewCount: "1.5k ratings",
        location: "Seattle, Washington, USA",
        price: "$1000.00",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 3,
        name: "Khawar Tire & Auto Service Centre",
        rating: 4.5,
        reviewCount: "1.5k ratings",
        location: "Seattle, Washington, USA",
        price: "$850.00",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 4,
        name: "Almer's Tire & Auto Workshop",
        rating: 4.5,
        reviewCount: "1.5k ratings",
        location: "Seattle, Washington, USA",
        price: "$1000.00",
        image: "/placeholder.svg?height=80&width=80",
    },
]

export default function CompareEstimates() {
    return (
        <Container className={"block"}>
            <Path>
                Your Account › Your Requests › Requests details › Compare Estimates
            </Path>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Compare Estimates</h1>

            <div className="space-y-3 sm:space-y-4">
                {serviceProviders.map((provider) => (
                    <div
                        key={provider.id}
                        className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 sm:p-4  rounded-lg "
                    >
                        {/* Mobile: Top section with image and basic info */}
                        <div className="flex items-start gap-3 sm:gap-4 flex-1">
                            {/* Business Image */}
                            <div className="flex-shrink-0">
                                <Image
                                    src={carImg}
                                    alt={provider.name}
                                    width={60}
                                    height={60}
                                    className="sm:w-20 sm:h-20 rounded-lg object-cover"
                                />
                            </div>

                            {/* Business Details */}
                            <div className="flex-1 min-w-0">
                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-red-500 text-red-500" />
                                        <span className="text-xs sm:text-sm font-medium text-gray-700">{provider.rating}</span>
                                    </div>
                                    <span className="text-xs sm:text-sm text-gray-500">{provider.reviewCount}</span>
                                </div>

                                {/* Business Name */}
                                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1 sm:mb-2 line-clamp-2 sm:line-clamp-1">
                                    {provider.name}
                                </h3>

                                {/* Location */}
                                <div className="flex items-start sm:items-center gap-1 text-xs sm:text-sm text-gray-600">
                                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 flex-shrink-0 mt-0.5 sm:mt-0" />
                                    <span className="line-clamp-2 sm:line-clamp-1">{provider.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Mobile: Bottom section with price and button / Desktop: Right section */}
                        <div className="flex items-center justify-between sm:justify-end gap-3 md:gap-20 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                            <div className="text-left sm:text-right">
                                <div className="text-lg sm:text-xl font-semibold text-primary">{provider.price}</div>
                            </div>

                            <Link href={"/not-accepted-estimate"}>
                                <Button className="bg-primary hover:bg-primary text-white px-4 sm:px-6 py-2 text-sm sm:text-base min-w-[70px] sm:min-w-[80px]">
                                    View
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Container >
    )
}
