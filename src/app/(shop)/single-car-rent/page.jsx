"use client";

import SingleItemCard from "@/components/shop/SingleItemCard";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRef, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function CarDealership() {
  const specifications = [
    { label: "Condition", value: "Used" },
    { label: "Model", value: "R35" },
    { label: "Make", value: "Audi" },
    { label: "Number of Previous Owners", value: "2" },
    { label: "Vehicle Title", value: "Rebuilt, Refurbishable & Reconstructed" },
    { label: "Body Type", value: "Sedan" },
    { label: "Number of Cylinders", value: "6" },
    { label: "Car Type", value: "Passenger Vehicles" },
    { label: "For Sale By", value: "Dealer" },
    { label: "VIN (Vehicle Identification number)", value: "WUABWGFF59KA007311" },
    { label: "Year", value: "2019" },
    { label: "Mileage", value: "73851" },
    { label: "Interior Color", value: "Black" },
    { label: "Number of Seats", value: "5" },
    { label: "Transmission", value: "Automatic" },
    { label: "Fuel Type", value: "Gasoline" },
    { label: "Drive Side", value: "Left-Hand Drive" },
    { label: "Exterior Color", value: "Black" },
    { label: "Number of Doors", value: "4" },
    { label: "Engine", value: "2.0L" },
  ];

  const [activeTab, setActiveTab] = useState("finance");

  return (
    <div className="min-h-screen max-w-[1600px] mx-auto">
      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Column */}
          <div className="w-full lg:w-[55%] flex flex-col space-y-8 justify-between">
            <SingleItemCard />
            <CarDetails className={"lg:hidden"} />

            {/* Tabs Section */}
            <div className="bg-white rounded-lg w-full">
              {/* Tab buttons */}
              <div className="flex space-x-2 border-b border-gray-200 pb-4 mb-4">
                {/* Active tab button */}
                <button className="py-2 px-6 bg-red-600 text-white rounded-md font-semibold text-xs lg:text-sm">
                  About this item
                </button>
                {/* Inactive tab button */}
                <button className="py-2 px-6 bg-white border border-gray-300 text-gray-600 rounded-md font-semibold text-xs lg:text-sm hover:bg-gray-50 transition-colors">
                  Vehicle history report
                </button>
              </div>

              {/* Tab content */}
              <div className="flex flex-col md:flex-row justify-between text-sm text-gray-600 space-y-4 md:space-y-0 md:space-x-8">
                <p className="md:w-1/2">
                  Seller assumes all responsibility for this listing. Lorem Ipsum is simply dummy text
                </p>
                <p className="">
                  Lorem Ipsum is simply dummy text
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <CarDetails className={"hidden lg:block"} />
        </div>

        {/* Item Specifics */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Item Specifics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            {specifications.map((spec, index) => (
              <div key={index} className="grid grid-cols-2 py-2 border-b border-gray-100">
                <span className="text-gray-600">{spec.label}</span>
                <span className="text-gray-900 font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Item Description */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Item description from the seller</h2>
          <Card className="bg-secondary">
            <CardContent className="">
              <p className="text-gray-600 mb-4">
                It is a long established fact that a reader will be distracted by the readable content
              </p>
              <h3 className="font-bold text-gray-900 mb-4">Lorem Ipsum is simply dummy text</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">VIN (Vehicle Identification number):</span>
                  <span className="text-gray-900">WUABWGFF59KA007311</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mileage:</span>
                  <span className="text-gray-900">73851</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vehicle Title:</span>
                  <span className="text-gray-900">Rebuilt, Refurbishable & Reconstructed</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  <strong>Exterior Condition:</strong> It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at its layout.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About the Seller */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">About the seller</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-gray-200">Image</AvatarFallback>
              </Avatar>
              <div>
                <Link href={"/seller-profile"}>
                  <h3 className="font-bold text-gray-900 mb-2">Lorem Ipsum is simply dummy text</h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4">Lorem Ipsum is simply dummy text</p>
                <div className="flex space-x-4">
                  <Button variant="outline" className="bg-white text-gray-600">
                    Contact
                  </Button>
                  <Button variant="outline" className="bg-white text-gray-600">
                    Save for later
                  </Button>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Seller Feedback</h3>
                <p className="text-gray-600 text-sm">Lorem Ipsum is simply dummy text</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}



const CarDetails = ({ className }) => {
  const [activeTab, setActiveTab] = useState("cash")
  return (
    <div className={cn("max-w-lg w-full space-y-4", className)}>
      {/* Title and description section */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-gray-800">2012 Audi Q7 3.0 TDI S Line Plus Limited Edition4dr Tip Auto Quattro</h1>
        <p className="text-sm text-gray-800 font-semibold">NEW MOT / Timing chain / Well serviced</p>
      </div>

      {/* Reviews section */}
      <div className="flex items-center space-x-2 border-b border-gray-200 pb-4">
        <div className="flex text-primary">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <i className="fas fa-star-half-alt"></i>
        </div>
        <p className="text-sm text-gray-600">(53 Reviews)</p>
      </div>

      <div className="space-y-1">
        {/* Price and condition section */}
        <div className="space-y-1">
          <p className="text-2xl font-bold text-gray-800">ZK150,000</p>
          <p className="text-sm text-gray-600">Condition: Used</p>
        </div>
        <p className="flex items-center  text-xl bg-secondary py-2 w-fit pl-4 pr-10 rounded-sm my-4">
          <IoLocationOutline className="mr-2 text-primary" />
          <span>Lusaka</span>
        </p>
        <div className="flex space-x-4 border rounded-lg">
          <DateInput label={"Drop-off"} />
          <div className="w-px bg-gray-300"></div>
          <DateInput label={"Pick-up"} />
        </div>
        <button className="w-full mt-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors duration-200 block">
          Check availability
        </button>
        <SellerInfo />
      </div>
    </div>
  );
};


function SellerInfo() {
  return (
    <div className="border-t border-gray-300 pt-4 space-y-1 mt-10">
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


import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5";

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
    <div ref={calendarRef} className="relative w-full flex items-center justify-center lg:min-w-[200px] min-h-[40px] py-2">
      {/* Date Input Field */}
      <button
        type="button"
        className="flex items-center space-x-2 px-2 lg:px-4 text-gray-700 font-medium rounded-full  transition-colors duration-200"
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
      >
        <span>
          {selectedDate
            ? `${selectedDate.getDate()} ${months[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`
            : label} <br />
          <span className="text-sm text-gray-400">Add date</span>
        </span>
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