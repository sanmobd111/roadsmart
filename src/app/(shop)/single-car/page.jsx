"use client";

import Path from "@/components/shared/path/Path";
import SingleItemCard from "@/components/shop/SingleItemCard";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";

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
      <div className="max-w-[1600px] mx-auto py-8">
        <Path className="lg:!text-base"><Link href={"/car-buy"}>Vehicles</Link> › Sedans › Audi</Path>
        <div className="flex flex-col lg:flex-row  lg:items-start gap-8">
          {/* Left Column */}
          <div className="w-full lg:w-[55%] flex flex-col lg:space-y-8 justify-between">
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
          <CarDetails className={"hidden lg:block -mt-16 lg:mt-16 grow"} />
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
        <h1 className="text-2xl font-bold text-gray-800">2022 Audi A6 Allroad Quattro</h1>
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

      {/* Cash/Finance tabs */}
      <div className="flex space-x-4 border-b-2 border-gray-200 w-fit">
        <button className="relative pb-2 px-4" onClick={() => setActiveTab("cash")}>
          <span className="font-semibold text-gray-800">Cash</span>
          {
            activeTab === "cash" && <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 rounded-t-md"></div>
          }
        </button>
        <button className="relative pb-2 px-4" onClick={() => setActiveTab("finance")}>
          <span className="font-semibold text-gray-800">Finance</span>
          {
            activeTab === "finance" && <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 rounded-t-md"></div>
          }
        </button>
      </div>

      <div>
        {
          activeTab === "cash" ? <CashTabContent /> : <FinanceTabContent />
        }
      </div>
    </div>
  );
};

const CashTabContent = () => {
  return (
    <div className="space-y-1">
      {/* Price and condition section */}
      <div className="space-y-1">
        <p className="text-2xl font-bold text-gray-800">ZK150,000</p>
        <p className="text-sm text-gray-600">Condition: Used</p>
      </div>

      {/* Action buttons */}
      <div className="space-y-4 mt-4">
        <button className="w-[70%] py-2 px-4 border border-primary text-primary rounded-md font-semibold text-lg hover:bg-red-50 transition-colors">
          Add to Cart
        </button>
        <Link href={"/checkout"}>
          <button className="w-[70%] py-2 px-4 bg-primary text-white rounded-md font-semibold text-lg shadow-lg hover:bg-red-700 transition-colors">
            Buy Now
          </button>
        </Link>
      </div>
      <SellerInfo />
    </div>
  )
}

const FinanceTabContent = () => {
  const [carPrice, setCarPrice] = useState('K6461');
  const [downPayment, setDownPayment] = useState('ZK20,000');
  const [term, setTerm] = useState('12 months');
  const [interestRate, setInterestRate] = useState('10%');
  const [fees, setFees] = useState('$1000');
  const [monthlyPayment, setMonthlyPayment] = useState('$295.00');
  return (
    <div className="w-full space-y-6">
      {/* Main heading and subtitle */}

      <div>
        <h1 className="text-3xl font-bold text-gray-800">ZK 295/month</h1>
        <p className="text-sm text-gray-500 mt-1">Est 10 months/K20k down</p>
      </div>

      <div className="lg:w-[95%] mx-auto">
        {/* Calculator form */}
        <div className="border border-gray-200 rounded-lg p-4 lg:px-10 lg:py-6 space-y-4">
          <div className="space-y-4">
            {/* Car Price Input */}
            <div>
              <label htmlFor="car-price" className="block text-sm font-medium text-gray-700 mb-1">Car Price</label>
              <input
                type="text"
                id="car-price"
                value={carPrice}
                onChange={(e) => setCarPrice(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>

            {/* Down Payment Input */}
            <div>
              <label htmlFor="down-payment" className="block text-sm font-medium text-gray-700 mb-1">Down Payment</label>
              <input
                type="text"
                id="down-payment"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>

            {/* Term Input */}
            <div>
              <label htmlFor="term" className="block text-sm font-medium text-gray-700 mb-1">Term</label>
              <input
                type="text"
                id="term"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>

            {/* Interest Rate Input */}
            <div>
              <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700 mb-1">Interest Rate</label>
              <input
                type="text"
                id="interest-rate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>

            {/* Fees Input */}
            <div>
              <label htmlFor="fees" className="block text-sm font-medium text-gray-700 mb-1">Fees</label>
              <input
                type="text"
                id="fees"
                value={fees}
                onChange={(e) => setFees(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>
          </div>

          {/* Estimated Monthly Payment */}
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm font-medium text-gray-700">Est. Monthly Payment</span>
            <span className="text-xl font-bold text-red-600">{monthlyPayment}</span>
          </div>

          {/* Apply Now button */}
          <button className="w-full py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all !mb-0">
            Apply Now
          </button>
        </div>
        <SellerInfo />
      </div>
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
