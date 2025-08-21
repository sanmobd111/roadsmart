"use client"

import carImg from "@/assets/images/pngwing.com (3).png"
import Checkbox from "@/components/shared/check-box/Checkbox"
import Pagination from "@/components/shared/pagination/Pagination"
import FilterDropdown from "@/components/shop/FilterDropdown"
import VehicleFilter from "@/components/shop/parts/VehicleFilter"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ChevronDown, Filter } from "lucide-react"
import { useState } from "react"
import { MdClose } from "react-icons/md"

const vehicles = [
    {
        id: 1,
        year: "2022",
        make: "BMW",
        model: "2022 BMW X3",
        image: "/placeholder.svg?height=40&width=60",
    },
    {
        id: 2,
        year: "2004",
        make: "Acura",
        model: "2004 Acura MDX",
        image: "/placeholder.svg?height=40&width=60",
    },
    {
        id: 3,
        year: "2022",
        make: "BMW",
        model: "2022 BMW X3",
        image: "/placeholder.svg?height=40&width=60",
    },
    {
        id: 4,
        year: "2004",
        make: "Acura",
        model: "2004 Acura MDX",
        image: "/placeholder.svg?height=40&width=60",
    },
]

const carListings = Array(7)
    .fill(null)
    .map((_, i) => ({
        id: i + 1,
        title: "Lorem Ipsum is simply dummy text",
        subtitle: "Lorem Ipsum",
        price: "300000",
        image: "/placeholder.svg?height=200&width=300",
        badge: "Lorem Ipsum",
        features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
        description: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text",
    }))

export default function CarDealership() {
    const selectedVehicleForPartsState = useSelector(state => state?.selectedItems?.selectedCarForParts);
    // const [selectedVehicleForPartsState, setSelectedVehicleForParts] = useState(selectedVehicleForPartsState);
    const dispatch = useDispatch();
    const setSelectedVehicleForParts = (vehicle) => {
        dispatch(setSelectedCarForPartsAction(vehicle));
    }
    const [currentTab, setCurrentTab] = useState("all")
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [isConditionDropdownOpen, setIsConditionDropdownOpen] = useState(false);
    const [condition, setCondition] = useState([]);
    const [sort, setSort] = useState("Sort: Best Match");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [collapsedSections, setCollapsedSections] = useState({
        bodyType: false,
        modelYear: false,
        fuelType: false,
        forSaleBy: false,
        vehicleTitle: false,
        cylinders: false,
        exteriorColor: false,
        interiorColor: false,
        driveType: false,
        doors: false,
        engineSize: false,
        buyingFormat: false,
        condition: false,
        price: false,
    })

    const toggleSection = (section) => {
        setCollapsedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }))
    }

    const FilterContent = () => (
        <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">BMW X3 Cars</h2>

            {/* Model Year Filter */}
            <FilterDropdown toggleSection={toggleSection} collapsedSectionsType={collapsedSections.fuelType} type={"fuelType"} title={"Fuel Type"} />
            <Separator />
            <FilterDropdown toggleSection={toggleSection} collapsedSectionsType={collapsedSections.bodyType} type={"bodyType"} title={"Body Type"} />
            <Separator />
            <FilterDropdown toggleSection={toggleSection} collapsedSectionsType={collapsedSections.modelYear} type={"modelYear"} title={"Model Year"} />
            <Button variant="outline" className="w-full bg-white text-gray-700 border-gray-300">
                More Filters
            </Button>
        </div>
    )
    console.log(selectedVehicleForPartsState)
    return (
        <div className="min-h-screen ">

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    <div className="hidden lg:block w-64 flex-shrink-0">
                        <div className="bg-white rounded-lg p-6 sticky top-4">
                            <FilterContent />
                        </div>
                    </div>




                    {/* Mobile Filter Sheet */}
                    <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="lg:hidden w-fit bg-transparent">
                                <Filter className="w-4 h-4 mr-2" />
                                Filters
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-80 overflow-y-auto">
                            <SheetHeader>
                                <SheetTitle>Filters</SheetTitle>
                            </SheetHeader>
                            <div className="mt-6">
                                <FilterContent />
                            </div>
                        </SheetContent>
                    </Sheet>

                    {/* Main Content */}
                    <div className="grow overflow-hidden">

                        {/* Filter Tabs */}
                        <div className="bg-white rounded-lg mb-4 sm:mb-6 pr-1">
                            <div className="flex flex-wrap justify-between gap-2 sm:gap-3 py-3 sm:items-center">
                                {/* Button Group */}
                                <div className="flex flex-wrap gap-4">
                                    {console.log(currentTab)}
                                    <Button
                                        variant="default"
                                        className={cn("bg-secondary text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100", currentTab === "all" && "bg-primary text-white")}
                                        onClick={() => setCurrentTab("all")}
                                    >
                                        All listings
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className={cn("text-gray-700 bg-secondary px-4 py-2 text-sm font-medium", currentTab === "buy-now" && "bg-primary text-white")}
                                        onClick={() => setCurrentTab("buy-now")}
                                    >
                                        Buy It Now
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className={cn("text-gray-700 bg-secondary px-4 py-2 text-sm font-medium", currentTab === "finance" && "bg-primary text-white")}
                                        onClick={() => setCurrentTab("finance")}
                                    >
                                        Finance
                                    </Button>

                                    {/* Condition Dropdown */}
                                    <DropdownMenu
                                        open={isConditionDropdownOpen}
                                        onOpenChange={setIsConditionDropdownOpen}
                                    >
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                onClick={() => setIsConditionDropdownOpen(prev => !prev)}
                                                variant="ghost"
                                                className="bg-secondary text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-medium flex items-center gap-1"
                                            >
                                                Condition
                                                <ChevronDown className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent align="start">
                                            <DropdownMenuItem
                                                onSelect={e => {
                                                    e.preventDefault(); // keep dropdown open
                                                    setCondition(prev =>
                                                        prev.includes("New")
                                                            ? prev.filter(item => item !== "New")
                                                            : [...prev, "New"]
                                                    );
                                                }}
                                            >
                                                <Checkbox checked={condition.includes("New")} /> New
                                            </DropdownMenuItem>

                                            <DropdownMenuItem
                                                onSelect={e => {
                                                    e.preventDefault();
                                                    setCondition(prev =>
                                                        prev.includes("Used")
                                                            ? prev.filter(item => item !== "Used")
                                                            : [...prev, "Used"]
                                                    );
                                                }}
                                            >
                                                <Checkbox checked={condition.includes("Used")} /> Used
                                            </DropdownMenuItem>

                                            <DropdownMenuItem
                                                onSelect={e => {
                                                    e.preventDefault();
                                                    setCondition(prev =>
                                                        prev.includes("Refurbished")
                                                            ? prev.filter(item => item !== "Refurbished")
                                                            : [...prev, "Refurbished"]
                                                    );
                                                }}
                                            >
                                                <Checkbox checked={condition.includes("Refurbished")} /> Refurbished
                                            </DropdownMenuItem>

                                            <DropdownMenuItem
                                                onSelect={e => {
                                                    e.preventDefault();
                                                    setCondition(prev =>
                                                        prev.includes("For parts or not working")
                                                            ? prev.filter(item => item !== "For parts or not working")
                                                            : [...prev, "For parts or not working"]
                                                    );
                                                }}
                                            >
                                                <Checkbox checked={condition.includes("For parts or not working")} /> For parts or not working
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>


                                    <div className={"lg:hidden"}>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    className="bg-secondary text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-medium flex items-center gap-1"
                                                >
                                                    {sort}
                                                    <ChevronDown className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>

                                            <DropdownMenuContent align="start">
                                                {[
                                                    "Best Price",
                                                    "Lowest Price + P&P",
                                                    "Highest Price + P&P",
                                                    "Newly Listed",
                                                    "Ending Soonest",
                                                    "Nearest First",
                                                ].map((option) => (
                                                    <DropdownMenuItem
                                                        key={option}
                                                        onSelect={() => setSort(option)} // ✅ no preventDefault
                                                    >
                                                        {option}
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>


                                    </div>
                                </div>


                                {/* Shipping & Pickup Dropdown */}
                                <div className={"hidden lg:block"}>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="bg-secondary text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-medium flex items-center gap-1"
                                            >
                                                {sort}
                                                <ChevronDown className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent align="start">
                                            {[
                                                "Best Price",
                                                "Lowest Price + P&P",
                                                "Highest Price + P&P",
                                                "Newly Listed",
                                                "Ending Soonest",
                                                "Nearest First",
                                            ].map((option) => (
                                                <DropdownMenuItem
                                                    key={option}
                                                    onSelect={() => setSort(option)} // ✅ no preventDefault
                                                >
                                                    {option}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                {
                                    condition?.map((item, index) => (
                                        <div className="flex items-center gap-4 bg-secondary w-fit py-2 pl-2 pr-10 rounded-sm">
                                            <span className="bg-primary text-white p-2 rounded-sm cursor-pointer" onClick={() => setCondition(condition.filter((sCondition) => sCondition !== item))}><MdClose /></span>
                                            <span>{item}</span>
                                        </div>
                                    ))
                                }
                            </div>


                            {/* <ShopFilter /> */}
                        </div>

                        {/* Vehicle Selection */}

                        {
                            selectedVehicleForPartsState?.name|| selectedVehicleForPartsState?.id ? <ShoppingCard carImage={selectedVehicleForPartsState?.image} carName={selectedVehicleForPartsState.name} carDetails={selectedVehicleForPartsState} buttonText={"Change"} onClick={() => setIsDropdownOpen(prev => !prev)} /> : <div className="">
                                <div className="py-4">
                                    <div className="w-full  p-4 lg:p-5 rounded-lg bg-secondary flex flex-col justify-center overflow-x-auto">
                                        <div className="w-full lg:w-fit mx-auto">
                                            <p className="mb-4 font-medium text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <VehicleFilter vehicles={vehicles} onClick={(vehicle) => dispatch(setSelectedCarForPartsAction(vehicle))} currentVehicle={selectedVehicleForPartsState} buttonClick={() => setIsDropdownOpen(prev => !prev)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }


                        {/* Car Listings */}
                        <div className="space-y-4 lg:space-y-10 mt-10">
                            {carListings.map((car) => (
                                <FilterCard data={car} path={"/single-parts"} />
                            ))}
                        </div>
                        <Modal isModalOpen={isDropdownOpen} setIsModalOpen={setIsDropdownOpen} containerClassName={"w-[90%] lg:w-auto"} contentContainerClassName={" rounded-xl"} backBtnClassName={" p-2 bg-secondary rounded-lg"}>
                            <ChangeVehicleModalContents setIsModalOpen={setIsDropdownOpen} />
                        </Modal>

                        {/* Pagination */}
                        <Pagination currentPage={5} totalPage={10} />
                    </div>
                </div>
            </div>
        </div>
    )
}

import ChangeVehicleModalContents from "@/components/modal-contents/vehicle/ChangeVehicleModalContents"
import BackGroundColorDiv from "@/components/shared/background-color-div/BackGroundColorDiv"
import Modal from "@/components/shared/modal/Modal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { FaHeart, FaStar } from "react-icons/fa6"
import { SiFireship } from "react-icons/si"
import { TbTruckDelivery } from "react-icons/tb"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedCarForParts as setSelectedCarForPartsAction } from "@/store/Feature/selected-items"

function FilterCard({ data, path, isFinance }) {
    return (
        <Link href={path || "#"} className="block">
            <Card className="w-full overflow-hidden py-0 shadow-none border-none">
                <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                        <div className="relative w-full sm:w-[40%] ">
                            <BackGroundColorDiv className={"p-6 lg:h-full pt-16 lg:!pt-10"}>
                                <Image
                                    src={carImg}
                                    alt={data.title}
                                    className="object-contain rounded-t sm:rounded-none sm:rounded-l w-full h-full"
                                // sizes="(max-width: 640px) 100vw, 40vw"
                                />
                            </BackGroundColorDiv>
                            <Badge className="absolute top-4 left-0 bg-primary text-white text-xs rounded-l-none py-1 px-4 rounded-r-sm">
                                {data.badge}
                            </Badge>
                            <Button
                                size="sm"
                                variant="ghost"
                                className="absolute top-2 right-2 bg-secondary hover:bg-white p-2 border border-primary"
                            >
                                <FaHeart className="w-4 h-4 text-primary" />
                            </Button>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 pt-4 lg:pt-0 sm:pl-6 self-center">
                            <div className=" flex gap-4 items-center justify-between lg:justify-start mb-4">
                                <div className="flex items-center gap-2">
                                    <SiFireship className="text-primary text-xl" />
                                    <p className="text-[8px] lg:text-sm">Brand New</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <TbTruckDelivery className="text-primary text-xl" />
                                    <p className="text-[8px] lg:text-sm">Free Shipping</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaStar className="text-primary text-xl" />
                                    <p className="text-[8px] lg:text-sm">Brand New</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                                <div className="flex-1">
                                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 line-clamp-2">
                                        {data.title}
                                    </h3>
                                    <p className=" mb-4">Good qualify brake pads that don’t squeak</p>
                                    {/* <p className="text-xs sm:text-sm text-gray-600 mb-2">{data.subtitle}</p> */}
                                    <p className="text-lg sm:text-xl font-bold mb-3">
                                        <span className="text-gray font-normal text-sm sm:text-base mr-1">

                                        </span>
                                        ZK {data.price}
                                        {isFinance && <span className="text-primary font-normal text-sm ml-2">ZK 518 /mo</span>}
                                    </p>
                                </div>
                            </div>

                            <button className="bg-primary hover:bg-primary text-white py-2 rounded-lg w-full lg:w-[60%]">
                                View Product
                            </button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}



const ShoppingCard = ({ carImage, carName, carDetails, buttonText, onClick }) => {
    return (
        // The main container for the card with a light red background, rounded corners, and padding.
        // It uses a flexbox layout for aligning the content.
        <div className="bg-secondary p-6 rounded-xl my-4">

            {/* Container for the title "Currently Shopping For:". */}
            <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-800">Currently Shopping For:</h2>
            </div>

            {/* Main content area of the card, using flexbox to align image, text, and button. */}
            {/* It wraps on smaller screens and uses `justify-between` to push the button to the right. */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between">

                {/* Container for the image and car details. */}
                <div className="flex items-center space-x-6 flex-grow">
                    {/* Car image, with a placeholder for demonstration. The image has rounded corners. */}
                    <Image
                        src={carImg}
                        alt={carName}
                        className="w-24 aspect-[2/1] object-cover rounded-lg"
                    />

                    {/* Container for the car details text. */}
                    <div className="flex flex-col text-left">
                        {/* Bold car name. */}
                        <h3 className="text-lg font-bold text-gray-900">{carName}</h3>

                        {/* Car details, with links. The `a` tags are styled with underlines. */}
                        <p className="text-sm text-gray-600">
                            <a href="#" className="underline hover:text-blue-500">
                                Diesel SUV 18d sDrive <br />
                                RWD--F25 1995cc 110KW 150HP B47 D20 A
                            </a>
                            <br />
                        </p>
                    </div>
                </div>

                {/* Change button. It has a red border, red text, rounded corners, and padding. */}
                {/* On mobile, it will be centered below the card content due to flex-col on the parent. */}
                <div className="mt-4 md:mt-0 md:ml-4">
                    <button className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300 bg-white w-[200px]" onClick={onClick}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};


