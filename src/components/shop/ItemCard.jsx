import carImg from "@/assets/images/pngwing.com (3).png";
import { Star } from "lucide-react";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { useState } from "react";


export default function ItemCard({ vehicle }) {
    const [isHover, setIsHover] = useState(false)
    return (
        <div className="group">
            <Card
                key={vehicle.id}
                className="overflow-hidden hover:shadow-xl hover:border-none  rounded-[10px] border-[#FEE7E7] transition-shadow"
            >
                <div className="relative">
                    <Image
                        src={carImg}
                        alt={vehicle.name}
                        quality={100}
                        className="w-full h-48 object-cover mt-16"
                    />
                    <div className=" absolute top-0 w-full flex justify-between px-4">
                        <div className="flex gap-2">
                            <div className="flex items-center space-x-1 bg-white px-2 py-1 rounded-md text-sm  border border-gray-700">
                                <Star className="w-4 h-4 text-primary fill-current " />
                                <span className="font-medium">{vehicle.rating}</span>
                                <span className="text-gray-500">({vehicle.reviews})</span>
                            </div>

                            <Badge variant="secondary" className="bg-white flex border border-gray-500 rounded-md px-5 text-gray-700">
                                {vehicle.available}
                            </Badge>
                        </div>
                        <div className=" flex space-x-2 bg-secondary p-1 rounded-sm">
                            <FaRegHeart className="w-6 h-6 text-gray-400 cursor-pointer group-hover:text-red-500" />
                        </div>

                    </div>


                </div>

                <CardContent className="p-4">
                    <div className="font-semibold flex justify-between text-lg text-gray-900 mb-4 bg-[#FCF2F2] py-2 px-3 rounded-md">
                        {vehicle.name}

                        <Badge className="text-[#CA2026] bg-transparent text-lg font-semibold">
                            {vehicle.discount}
                        </Badge>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                        <span className="text-sm text-gray-500">Starts From</span>
                        <span className="text-xl font-bold text-gray-900">
                            {vehicle.price}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600">{vehicle.description}</p>
                </CardContent>
            </Card>
        </div>
    )
}
