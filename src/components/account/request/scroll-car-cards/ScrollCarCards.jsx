import carImg from "@/assets/images/pngwing.com (3).png";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import combinedClasses from "@/utils/tailwind";
import Image from 'next/image';
import Link from "next/link";

export default function ScrollCarCards({ items, cardClassName }) {
    return (
        <div>
            <div className="w-full overflow-x-auto custom-scroll mb-4 xl:mb-6">
                <div className="flex gap-[4%] pb-2 w-full custom-scroll overflow-x-auto ">
                    {
                        items.map((item) => (
                            <Card key={item.id} className={combinedClasses("border border-gray-200 hover:shadow-md transition-shadow", cardClassName)}>
                                <CardContent className="px-4 sm:px-6">
                                    <div className="flex flex-row sm:items-center gap-4">
                                        {/* Car Image */}
                                        <div className="flex justify-center mb-4">
                                            <div className="w-16 h-16 sm:w-14 sm:h-14 relative">
                                                <Image
                                                    src={carImg}
                                                    alt={item.carName}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>

                                        {/* Car Details */}
                                        <div className="space-y-1 mb-6 flex flex-col items-start">
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base text-nowrap">{item.carName}</h3>
                                            <div className="flex items-center gap-1">
                                                <span className="text-primary text-xs sm:text-sm font-medium text-nowrap">{item.rating} Ratings</span>
                                            </div>
                                            <p className="text-xs sm:text-sm text-gray-600 text-nowrap">Expires {item.expiryDate}</p>
                                        </div>
                                    </div>

                                    {/* Price and Actions */}
                                    <div className="flex flex-row items-center gap-4">
                                        <div className="text-xl sm:text-lg font-bold text-primary">${item.price}</div>

                                        <div className="grid grid-cols-2 gap-2 grow-1">
                                            <Link href={"/estimate-details"} className="w-full">
                                                <Button
                                                    variant="outline"
                                                    className="flex-1 text-xs py-1 shadow-none border-none bg-secondary text-gray h-7 w-full"
                                                >
                                                    View
                                                </Button>
                                            </Link>
                                            <Button className="flex-1 text-xs py-1 bg-secondary hover:bg-primary text-primary hover:text-white h-7">
                                                submit
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
