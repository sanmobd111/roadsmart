"use client";

import carImg from "@/assets/images/pngwing.com (3).png";
import BackGroundColorDiv from "@/components/shared/background-color-div/BackGroundColorDiv";
import Pagination from "@/components/shared/pagination/Pagination";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import ChangeVehicleModalContents from "@/components/modal-contents/vehicle/ChangeVehicleModalContents";
import Modal from "@/components/shared/modal/Modal";
import Link from "next/link";
import { RiArrowRightWideLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";

export default function RoadSmartShopPage() {
    const selectedCarForParts = useSelector(state => state?.selectedItems?.selectedCarForParts);
    const [totalPage, setTotalPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const [category, setCategory] = useState('Cars');
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const categories = ['Cars', 'Bikes', 'Trucks', 'Boats'];

    console.log(selectedCarForParts)
    return (
        <div className="min-h-screen max-w-[1600px] mx-auto bg-white w-[90%] lg:w-full mt-6 lg:mt-10">

            <div className="lg:border-b lg:border-gray-200 lg:pb-8">
                <div className="w-full max-w-2xl bg-white rounded-lg border border-gray-400 flex pr-1.5 mx-auto">

                    {/* Category Dropdown */}
                    <div className="relative hover:bg-gray-100 flex items-center justify-center rounded-l-lg" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>

                        {
                            selectedCarForParts?.name ? <div className="flex items-center gap-2 px-1 lg:px-4">
                                <Image src={carImg} alt={selectedCarForParts.name} className="w-8 lg:w-16 object-contain rounded-md" width={50} height={50} />
                                <p className="text-[8px] lg:text-xs font-semibold text-gray-800 text-nowrap">{selectedCarForParts.name?.slice(0, 8)}</p>
                                <RiArrowRightWideLine className="text-xl" />
                            </div> : <button
                                type="button"
                                className="text-[6px] lg:text-sm flex items-center space-x-2 px-2 lg:px-4 text-gray-700 font-medium rounded-full  transition-colors duration-200"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <span>
                                    Shop by vehicle <br />
                                    <span className="text-gray-400">Add vehicle</span>
                                </span>
                                {/* <MdKeyboardArrowDown className={`w-5 h-5 text-gray-500 ${isDropdownOpen ? "rotate-180" : ""}`} /> */}
                            </button>
                        }
                    </div>

                    {/* Separator */}
                    <div className="w-px bg-gray-300 mr-2"></div>

                    {/* Search Input */}
                    <div className="lg:flex-1 flex items-center space-x-2 py-1.5 grow overflow-hidden">
                        <IoSearchOutline className="w-[10%] text-primary grow block" />
                        <input
                            type="text"
                            placeholder="Search make, model and variant"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="py-2 text-gray-700 placeholder-gray-400 focus:outline-none w-[90%]"
                        />

                        {/* Search Button */}
                        <Link href={"/parts-filter"}>
                            <button
                                type="submit"
                                className="bg-primary text-white font-semibold px-8 py-2.5 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200 hidden lg:block"
                            >
                                Search
                            </button>
                        </Link>
                    </div>
                </div>

                <Link href={"/parts-filter"}>
                    <button
                        type="submit"
                        className="bg-primary mt-4 mx-auto text-white font-semibold px-8 py-2.5 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200 block lg:hidden"
                    >
                        Search
                    </button>
                </Link>
            </div>


            <main className="py-8 space-y-8 lg:space-y-12">
                <CarSlider title={"Shop for brake discs"} />
                <CarSlider title={"Shop for brake rotors"} />
                <CarSlider title={"Shop for engine"} />
                <Pagination
                    totalPage={totalPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </main>
            <Modal isModalOpen={isDropdownOpen} setIsModalOpen={setIsDropdownOpen} containerClassName={"w-[90%] lg:w-auto"} contentContainerClassName={" rounded-xl"} backBtnClassName={" p-2 bg-secondary rounded-lg"}>
                <ChangeVehicleModalContents setIsModalOpen={setIsDropdownOpen} />
            </Modal>
        </div>
    );
}


const CarSlider = ({ title }) => {
    const swiperRef = useRef(null);
    const vehicles = Array(6).fill({
        id: 1,
        name: "Toyota Camry",
        imageURL: carImg,
        rating: 4.5,
        reviews: 365,
        price: "$30,000",
        discount: "-15% Off",
        available: "Available Now",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    });
    return (
        <div>
            <div className="flex justify-between items-center mb-4 lg:mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    {title}
                </h1>

                {/* Custom Controls */}
                <div className="flex justify-end gap-4">
                    <button
                        onClick={() => swiperRef.current.slidePrev()}
                        className="bg-secondary text-gray-black px-2 py-2 rounded"
                    >
                        <MdKeyboardArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => swiperRef.current.slideNext()}
                        className="bg-secondary text-gray-black px-2 py-2 rounded"
                    >
                        <MdKeyboardArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="w-full mx-auto">
                {/* Swiper */}
                <Swiper
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    slidesPerView={4}
                    spaceBetween={20}
                    breakpoints={{
                        0: { // mobile
                            slidesPerView: 1,
                        },
                        640: { // tablet
                            slidesPerView: 2,
                        },
                        1024: { // desktop
                            slidesPerView: 5,
                        },
                    }}
                >

                    <SwiperSlide className="!h-auto">
                        <Link href={"/single-parts"} className="h-full block">
                            <div className="group h-full overflow-hidden hover:shadow-xl hover:border-none  rounded-[10px] border-2 !border-gray-200 transition-shadow p-4">
                                <Card
                                    className="border-none shadow-none py-0 gap-4 h-full"
                                >
                                    <div className="relative">
                                        <BackGroundColorDiv className={"p-6"}>
                                            <Image
                                                src={carImg}
                                                alt={"vehicle.name"}
                                                quality={100}
                                                className="w-full aspect-[2/1] object-contain"
                                            />
                                        </BackGroundColorDiv>
                                        <div className=" absolute top-6 right-0 w-fit flex justify-between px-4">
                                            <FaHeart className="w-6 h-6  cursor-pointer text-primary" />

                                        </div>


                                    </div>

                                    <CardContent className="pb-4 p-0 grow flex items-center ">
                                        <div className="font-semibold text-lg text-gray-900 rounded-md space-y-2">
                                            <h1> {"Toyota Camry "}</h1>

                                            <p>{"ZK 97,500"}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Link>
                    </SwiperSlide>
                    {vehicles.map((vehicle, index) => (
                        <SwiperSlide key={index}>
                            <Link href={"/single-parts"} className="h-full block">
                                <div className="group">
                                    <Card
                                        key={vehicle.id}
                                        className="overflow-hidden hover:shadow-xl hover:border-none  rounded-[10px] border-gray-200 transition-shadow py-0 gap-4 p-4"
                                    >
                                        <div className="relative">
                                            <BackGroundColorDiv className={"p-6"}>
                                                <Image
                                                    src={carImg}
                                                    alt={vehicle.name}
                                                    quality={100}
                                                    className="w-full aspect-[2/1] object-contain"
                                                />
                                            </BackGroundColorDiv>
                                            <div className=" absolute top-4 w-fit right-0 flex justify-between px-4">
                                                <div className=" flex space-x-2 bg-secondary p-1 rounded-sm">
                                                    <FaHeart className="w-6 h-6  cursor-pointer text-primary" />
                                                </div>

                                            </div>


                                        </div>

                                        <CardContent className="pb-4 p-0">
                                            <div className="font-semibold mb-0 text-lg text-gray-900 rounded-md space-y-2">
                                                <p>{vehicle.name}</p>
                                                <div className="flex items-center gap-2 text-gray-500">
                                                    <FaStar className="w-4 h-4 text-primary fill-current " />
                                                    <FaStar className="w-4 h-4 text-primary fill-current " />
                                                    <FaStar className="w-4 h-4 text-primary fill-current " />
                                                    <FaStar className="w-4 h-4 text-primary fill-current " />
                                                    <FaStar className="w-4 h-4 text-primary fill-current " />
                                                    <p className="font-normal">{"(218)"}</p>
                                                </div>
                                                <p>ZK 1,500</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </div>
    )
}