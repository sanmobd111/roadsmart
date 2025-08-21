"use client"

import carImg from "@/assets/images/pngwing.com (3).png"
import ChangeVehicleModalContents from "@/components/modal-contents/vehicle/ChangeVehicleModalContents"
import Checkbox from "@/components/shared/check-box/Checkbox"
import Modal from "@/components/shared/modal/Modal"
import Path from "@/components/shared/path/Path"
import SingleItemCard from "@/components/shop/SingleItemCard"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import combinedClasses from "@/utils/tailwind"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineLike } from "react-icons/ai"
import { useSelector } from "react-redux"


const feedbackItems = [
    {
        id: 1,
        name: "Lorem Ipsum",
        time: "Last month",
        feedback:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
        id: 2,
        name: "Lorem Ipsum",
        time: "Last month",
        feedback:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
        id: 3,
        name: "Lorem Ipsum",
        time: "Last month",
        feedback:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
        id: 4,
        name: "Lorem Ipsum",
        time: "Last month",
        feedback:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
]
const cardData = {
    title: 'Confirm this item fits',
    subtitle: 'Select your vehicle to make sure it fites',
    buttonText: 'Change',
};
export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const selectedCarForParts = useSelector(state => state?.selectedItems?.selectedCarForParts);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <div className="bg-white text-black text-sm font-sans py-6 lg:py-12 max-w-[1600px] mx-auto">

            <Path className="lg:!text-base">Automotive › Replacement Parts › Brake System › Brake Kits</Path>
            {/* Main Product Section */}
            {
                selectedCarForParts?.name ? <div  className="grid grid-cols-1 lg:grid-cols-[1fr_auto_2fr] gap-4 lg:gap-8 bg-secondary p-4">
                    <div className="">
                        <div className="flex items-center gap-2">
                            <Checkbox checked={true} setChecked={() => { }} isPrimary />
                            <p>This item fits</p>
                        </div>
                        <div className='w-full overflow-x-auto mt-4'>
                            <div className={combinedClasses("grid grid-cols-[repeat(5,max-content)]  lg:w-fit overflow-x-auto gap-4")}>
                                {/* Add Vehicle Button */}
                                <Button onClick={() => setIsDropdownOpen(true)} className="flex items-center h-full justify-start  text-black  rounded-lg border border-gray-200 bg-white hover:bg-white cursor-pointer p-2 px-4">
                                    <Plus className="mr-2 bg-primary hover:bg-primary  !aspect-square text-white rounded-sm size-4 lg:size-6" />
                                    Add Vehicle
                                </Button>

                                {/* Vehicle Cards */}
                                <div key={selectedCarForParts.id} onClick={() => onClick(selectedCarForParts)} className={combinedClasses("flex items-center border border-gray-200 rounded-lg p-2 px-4 bg-white cursor-pointer")}>
                                    <Image src={carImg} alt={selectedCarForParts.name} width={200} height={200} className="object-cover w-16 h-8 mr-2" />
                                    <p className="text-xs text-nowrap">{selectedCarForParts.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-px bg-gray-400"/>
                    <p className="text-gray-500 text-lg">Fitment ensures you get the correct part </p>
                </div> :

                    <ConfirmFitCard {...cardData} buttonClick={() => setIsDropdownOpen(prev => !prev)} />
            }
            <div className=" grid md:grid-cols-2 gap-8 items-center">
                {/* Left: Images */}
                <div>
                    <SingleItemCard />
                </div>

                {/* Right: Product Info */}
                <div className="space-y-1">

                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold text-gray-800">Rear Brake Discs Internally Vented Coated + Fits BMW X3 X4 BREMBO</h1>
                        <p className="text-sm text-gray-800">High quality brake pads</p>
                    </div>
                    {/* Price and condition section */}
                    <div className="space-y-1">
                        <p className="text-2xl font-bold text-gray-800">ZK150,000</p>
                        <p className="text-sm text-gray-600">Condition: Used</p>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Quantity:</span>
                            <Select
                                value={quantity.toString()}
                                onValueChange={(value) => setQuantity(Number.parseInt(value))}
                            >
                                <SelectTrigger className="w-16">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <SelectItem key={num} value={num.toString()}>
                                            {num}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="space-y-4 mt-4">
                        <Link href={"/cart"} className="block">
                            <button className="w-[60%] py-2 px-4 border border-primary text-primary rounded-md font-semibold text-lg hover:bg-red-50 transition-colors">
                                Add to Cart
                            </button>
                        </Link>
                        <Link href={"/checkout"}>
                            <button className="w-[60%] py-2 px-4 bg-primary text-white rounded-md font-semibold text-lg shadow-lg hover:bg-red-700 transition-colors">
                                Buy Now
                            </button>
                        </Link>
                    </div>
                    <SellerInfo />
                </div>
            </div>

            {/* Compatibility Table */}
            <div className=" max-w-[1600px] mx-auto mt-6 lg:mt-10">
                <h2 className="text-2xl font-bold mb-2 lg:mb-6 flex items-center">
                    <span>Compatibility</span>
                    <span className="text-sm text-gray-500 font-normal ml-2">This part is compatible with 167 vehicle(s)</span>
                </h2>
                <div className="overflow-x-auto border border-red-500 rounded-lg">
                    <table className="w-full border-none text-left">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="p-4 rounded-tl-lg">Year</th>
                                <th className="p-4">Model</th>
                                <th className="p-4">Make</th>
                                <th className="p-4">Trim</th>
                                <th className="p-4">Engine</th>
                                <th className="p-4 rounded-tr-lg">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(8)
                                .fill(0)
                                .map((_, i) => (
                                    <tr key={i} className="border-none">
                                        <td className="p-4">2016</td>
                                        <td className="p-4">BMW</td>
                                        <td className="p-4">220d</td>
                                        <td className="p-4">Trim</td>
                                        <td className="p-4">2.0L 1997CC l4 GAS DOHC Turbocharged</td>
                                        <td className="p-4">w/HID D1S</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Item Specifications */}
            <div className="bg-white max-w-[1600px] mx-auto w-full mt-6 lg:mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
                    Item Specifies
                </h2>
                <ItemSpecifies />
            </div>

            {/* Description from Seller */}
            <div className="max-w-[1600px] mx-auto bg-white mt-6 lg:mt-10">
                <h1 className="text-2xl font-semibold text-gray-900 mb-8">About the seller</h1>

                <div className="flex flex-col lg:flex-row gap-4  justify-between">
                    {/* Left side - Seller Info */}
                    <div className="space-y-6 lg:w-[40%]">
                        <div className="flex flex-col items-center lg:items-start space-y-4">
                            {/* Seller Image Placeholder */}
                            <div className="w-32 h-32 bg-pink-50 rounded-full flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Image</span>
                            </div>

                            {/* Seller Details */}
                            <div className="text-center lg:text-left">
                                <h2 className="text-xl font-medium text-gray-900 mb-2">Lorem Ipsum is simply dummy text</h2>
                                <p className="text-gray-600">Lorem Ipsum is simply dummy text</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                                <Button variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 px-8 py-2">
                                    Contact
                                </Button>
                                <Button variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 px-8 py-2">
                                    Save for later
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Seller Feedback */}
                    <div className="lg:w-[60%] border border-gray-200 rounded-lg p-6">
                        <div className="mb-6">
                            <h3 className="text-xl font-medium text-gray-900">
                                Seller Feedback <span className="text-gray-500">(443)</span>
                            </h3>
                            <p className="text-gray-600 mt-1">Lorem Ipsum is simply dummy text</p>
                        </div>

                        {/* Feedback List */}
                        <div className="space-y-4 mb-6">
                            {feedbackItems.map((item) => (
                                <div key={item.id} className="flex gap-3">
                                    {/* Avatar */}
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-xs font-medium">L</span>
                                    </div>

                                    {/* Feedback Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-medium text-gray-900">{item.name}</span>
                                            <span className="text-gray-500 text-sm">({item.time})</span>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.feedback}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View All Button */}
                        <Button variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 px-6 py-2">
                            View all
                        </Button>
                    </div>
                </div>
            </div>

            <Modal isModalOpen={isDropdownOpen} setIsModalOpen={setIsDropdownOpen} containerClassName={"w-[90%] lg:w-auto"} contentContainerClassName={" rounded-xl"} backBtnClassName={" p-2 bg-secondary rounded-lg"}>
                <ChangeVehicleModalContents setIsModalOpen={setIsDropdownOpen} />
            </Modal>
        </div>
    )
}

function SellerInfo() {
    return (
        <div className="border-t border-gray-400 pt-4 space-y-1 mt-10">
            <Link href={"seller-profile"}>
                <p className="text-sm text-gray-600">Sold and shipped by <span className="font-semibold">Saro Auto</span></p>
            </Link>
            <p className="text-sm flex font-semibold items-center gap-1 text-primary">
                <AiOutlineLike />
                100% Positive
            </p>
        </div>
    )
}


const ConfirmFitCard = ({ title, subtitle, buttonText, buttonClick }) => {
    return (
        // Main container for the card with a light red background, padding, rounded corners, and a shadow.
        <div className="bg-secondary p-6 rounded-xl m-4 w-full max-w-[1600px] mx-auto">

            {/* Container for the text content, using flexbox to align the text and button. */}
            {/* It uses `items-center` for vertical alignment and `justify-between` to space the elements. */}
            {/* It wraps to a column layout on smaller screens. */}
            <div className="flex flex-col md:flex-row items-center justify-between">

                {/* Container for the heading and subheading. */}
                <div className="flex flex-col text-left">
                    {/* Main title text. */}
                    <h2 className="text-xl font-bold text-gray-800">{title}</h2>

                    {/* Subtitle text. */}
                    <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
                </div>

                {/* The "Change" button. It has a red border, rounded corners, and hover effects. */}
                <div className="mt-4 md:mt-0 md:ml-4" onClick={buttonClick}>
                    <button className="px-6 py-3 border border-primary text-primary font-semibold rounded-xl  transition-colors duration-300 w-[200px]">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};


const ItemSpecifies = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-12">
            {/* Left Column */}
            <div className="flex flex-col space-y-4">
                <ItemRow
                    label="Lorem Ipsum"
                    value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    isLongText
                    showMore
                />
                {Array.from({ length: 8 }).map((_, i) => (
                    <ItemRow key={i} label="Lorem Ipsum" value="Lorem Ipsum" />
                ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col space-y-4">
                <ItemRow
                    label="Lorem Ipsum"
                    value={`Lorem Ipsum, `.repeat(30)}
                    isLongText
                />
                <ItemRow
                    label="Lorem Ipsum"
                    value={`Lorem Ipsum, `.repeat(25)}
                    isLongText
                />
                <ItemRow label="Lorem Ipsum" value="Lorem Ipsum" />
                <ItemRow label="Lorem Ipsum" value="Lorem Ipsum" />
            </div>
        </div>
    );
};

const ItemRow = ({ label, value, isLongText, showMore }) => {
    return (
        <div className="flex flex-col sm:flex-row sm:space-x-4">
            <span className="font-bold text-gray-700 w-fit text-nowrap">{label}</span>
            {isLongText ? (
                <p className="text-gray-600 mt-1 sm:mt-0">
                    {value}
                    {showMore && (
                        <a href="#" className="text-blue-500 hover:underline ml-1">
                            Show More
                        </a>
                    )}
                </p>
            ) : (
                <span className="text-gray-600 mt-1 sm:mt-0">{value}</span>
            )}
        </div>
    );
};
