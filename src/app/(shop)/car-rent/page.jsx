"use client";

import carImg from "@/assets/images/pngwing.com (3).png";
import BackGroundColorDiv from "@/components/shared/background-color-div/BackGroundColorDiv";
import Pagination from "@/components/shared/pagination/Pagination";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Plane } from 'lucide-react';
import Image from "next/image";
import { useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

export default function RoadSmartShopPage() {

  const [totalPage, setTotalPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [location, setLocation] = useState('Cars');
  const [pickUpDate, setPickUpDate] = useState('Drop-off');
  const [dropOffDate, setDropOffDate] = useState('Pick-up');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['Cars', 'Bikes', 'Trucks', 'Boats'];

  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isDropOffDateDropdownOpen, setIsDropOffDateDropdownOpen] = useState(false);
  const [isPickUpDateDropdownOpen, setIsPickUpDateDropdownOpen] = useState(false);


  const locations = [
    {
      type: 'Airport',
      name: 'Lusaka (LUN)',
      subtext: 'Lusaka Province, Zambia',
      icon: <Plane size={20} />,
    },
    {
      type: 'City',
      name: 'Lusaka',
      subtext: 'Lusaka Province, Zambia',
      icon: <Building size={20} />,
    },
    {
      type: 'City',
      name: 'Lusaka',
      subtext: 'Central Region, Uganda',
      icon: <Building size={20} />,
    },
    {
      type: 'City',
      name: 'Lusaka',
      subtext: 'Free State, South Africa',
      icon: <Building size={20} />,
    },
    {
      type: 'City',
      name: 'Mwenshangombe',
      subtext: 'Lusaka Province, Zambia',
      icon: <Building size={20} />,
    },
  ];
  return (
    <div className="min-h-screen max-w-[1600px] mx-auto bg-white w-[90%] lg:w-full mt-6 lg:mt-10">

      <div className="lg:border-b lg:border-gray-200 lg:pb-8">
        <div className="w-fit bg-white rounded-lg border border-gray-400 flex pr-1.5 mx-auto">

          {/* Category Dropdown */}
          <div className="relative hover:bg-gray-100 flex items-center justify-center rounded-l-lg lg:min-w-[200px] min-h-[40px]" onClick={() => {
            setIsLocationDropdownOpen(!isLocationDropdownOpen)
            setIsPickUpDateDropdownOpen(false)
            setIsDropOffDateDropdownOpen(false)
          }
          }>
            <button
              type="button"
              className="flex items-center space-x-2 px-2 lg:px-4 text-gray-700 font-medium rounded-full  transition-colors duration-200"

            >
              <span>{location}</span>
              <MdKeyboardArrowDown className={`w-5 h-5 text-gray-500 ${isLocationDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {isLocationDropdownOpen && (
              <div className="absolute z-10 mt-2 top-full left-0 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                {locations.length > 0 ? (
                  locations.map((location, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-20 lg:gap-40 p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => {
                        setLocation(location.name); // Set input to selected item's name
                        setIsLocationDropdownOpen(false); // Close dropdown
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-gray-500">{location.icon}</div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{location.name}</p>
                          <p className="text-xs text-gray-500">{location.subtext}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400 py-1">
                        {location.type}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    No results found.
                  </div>
                )}
              </div>
            )}
          </div>




          {/* Separator */}
          <div className="w-px bg-gray-300"></div>
          <DateInput label={"Pick-up"} />




          {/* Separator */}
          <div className="w-px bg-gray-300"></div>
          <DateInput label={"Drop-off"} />



          {/* Search Input */}
          <div className="lg:flex-1 flex items-center space-x-2 py-1.5">
            {/* Search Button */}
            <Link href={"/car-filter"}>
              <button
                type="submit"
                className="bg-primary text-white font-semibold px-8 py-2.5 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200 hidden lg:block"
              >
                Search
              </button>
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary mt-4 mx-auto text-white font-semibold px-8 py-2.5 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200 block lg:hidden"
        >
          Search
        </button>
      </div>


      <main className="py-8 space-y-8 lg:space-y-12">
        <CarSlider title={"Popular cars for rent"} />
        <CarSlider title={"Check out cars for rent in Lusaka"} />
        <CarSlider title={"Popular cars to rent in Ndola"} />
        <CarSlider title={"Popular cars to rent in Kitwe"} />
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
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
            <Link href={"/single-car"} className="h-full block">
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
              <Link href={"/single-car"} className="h-full block">
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



import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

const DateInput = ({ label }) => {
  // State for the currently displayed month and year
  const [currentDate, setCurrentDate] = useState(new Date());
  // State for the date that has been selected by the user
  const [selectedDate, setSelectedDate] = useState(null);
  // State to control the visibility of the calendar dropdown
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Ref to handle clicks outside the calendar to close it
  const calendarRef = useRef(null);

  // Effect to handle clicks outside the calendar
  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calendarRef]);

  // Handle changing to the previous month
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Handle changing to the next month
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Handle selecting a specific day
  const handleDayClick = (day) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newDate);
    setIsCalendarOpen(false); // Close the calendar after selection
  };

  // Helper function to get all days for the current month view
  const getCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];

    // Add empty cells for the days of the previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Add the days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  // Array of day names for the calendar header
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  console.log(selectedDate, "selectedDate")

  return (
    <div ref={calendarRef} className="relative w-full flex items-center justify-center lg:min-w-[200px] min-h-[40px]">
      {/* Date Input Field */}
      <button
        type="button"
        className="flex items-center space-x-2 px-2 lg:px-4 text-gray-700 font-medium rounded-full  transition-colors duration-200"
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
      >
        <span>
          {selectedDate
            ? `${selectedDate.getDate()} ${months[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`
            : label}
        </span>
        <MdKeyboardArrowDown className={`w-5 h-5 text-gray-500 ${isCalendarOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Calendar Dropdown */}
      {isCalendarOpen && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white border border-gray-300 rounded-md shadow-lg p-4 z-10 w-max">
          {/* Header with Month, Year and Navigation */}
          <div className="flex justify-between items-center mb-4">
            <button onClick={handlePrevMonth} className="p-1 rounded-full hover:bg-gray-200">
              <ChevronLeft size={20} />
            </button>
            <span className="text-md font-semibold text-gray-700">
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
            <button onClick={handleNextMonth} className="p-1 rounded-full hover:bg-gray-200">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Days of the week */}
          <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500 mb-2">
            {daysOfWeek.map(day => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Calendar Days Grid */}
          <div className="grid grid-cols-7 gap-1">
            {getCalendarDays().map((day, index) => (
              <div key={index} className="text-center">
                {day ? (
                  <button
                    onClick={() => handleDayClick(day)}
                    className={`
                        w-8 h-8 flex items-center justify-center rounded-full text-sm
                        ${selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear()
                        ? 'bg-blue-500 text-white font-bold'
                        : 'text-gray-700 hover:bg-gray-200'
                      }
                      `}
                  >
                    {day}
                  </button>
                ) : (
                  <span className="w-8 h-8"></span> // Placeholder for empty cells
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};




