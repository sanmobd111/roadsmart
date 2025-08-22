"use client"

import { Check, ChevronDown } from "lucide-react"
import { useRef, useState } from "react"

import BookAppointmentModalContents from "@/components/modal-contents/estimate/BookAppoinmentModalContents"
import Modal from "@/components/shared/modal/Modal"
import Path from "@/components/shared/path/Path"
import Container from "@/components/ui/Container"
import Title from "@/components/ui/Title"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { FaLocationArrow } from "react-icons/fa6"

export default function page() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [date, setDate] = useState("")
    const handleCancel = () => {
        // Handle cancel action
    }

    const handleConfirmAndBook = () => {
        // Handle booking confirmation
        setIsModalOpen(true)
    }
    return (
        <Container className={"p-4 lg:p-0 block !mt-4"}>
            <div>
                <Path>
                    Your Account › Your Requests › Requests details › Compare Estimates › Estimates details › Booking
                </Path>
                <Title text={"Schedule appointment"} className={"my-6 pb-4 border-b border-gray-200 lg:text-left md:mb-10"} />
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <div className="w-full lg:w-[50%] ml-0 block p-0 space-y-6 md:space-y-10">
                        <DatePicker date={date} setDate={setDate} />
                        {
                            date && <TimePicker setIsModalOpen={setIsModalOpen} />
                        }
                        <VehicleSelector />
                        <PickupForm />
                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={handleCancel}
                                className="text-xs md:text-sm flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirmAndBook}
                                className="text-xs md:text-sm flex-1 py-3 bg-primary text-white rounded-lg hover:bg-primary transition-colors font-medium"
                            >
                                Confirm and Book
                            </button>
                        </div>
                    </div>
                    <BusinessProfile />
                </div>
            </div>

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                <BookAppointmentModalContents />
            </Modal>
        </Container>
    )
}


function VehicleSelector() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedVehicle, setSelectedVehicle] = useState("Toyota Vanguard BAK2344")

    const vehicles = [
        "Toyota Vanguard BAK2344",
        "Honda CR-V HRV1234",
        "BMW X3 BMW5678",
        "Mercedes GLC MER9012",
        "Audi Q5 AUD3456",
    ]

    const handleSelect = (vehicle) => {
        setSelectedVehicle(vehicle)
        setIsOpen(false)
    }

    return (
        <div className="">
            <div className="space-y-2">
                {/* Label */}
                <label className="block text-sm font-medium text-gray-700">Select Vehicle</label>

                {/* Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full px-4 py-3 text-left border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:bg-gray-100 transition-colors"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-gray-900 text-sm">{selectedVehicle}</span>
                            <ChevronDown
                                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                            />
                        </div>
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

                            {/* Menu */}
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                                {vehicles.map((vehicle) => (
                                    <button
                                        key={vehicle}
                                        onClick={() => handleSelect(vehicle)}
                                        className="w-full px-4 py-3 text-left text-sm text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-between"
                                    >
                                        <span>{vehicle}</span>
                                        {selectedVehicle === vehicle && <Check className="w-4 h-4 text-blue-600" />}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}


function DatePicker({ date, setDate }) {
    const [centerDate, setCenterDate] = useState(new Date()) // start from today
    const inputRef = useRef(null)

    // Generate 4 dates with centerDate in the middle
    const generateDates = (centerDate) => {
        const dates = []
        const base = new Date(centerDate)

        // generate [-2, -1, 0, +1] → so centerDate is at index 2 (middle)
        for (let i = -2; i <= 1; i++) {
            const d = new Date(base)
            d.setDate(base.getDate() + i)

            dates.push({
                id: i,
                day: d.getDate().toString().padStart(2, "0"),
                month: d.toLocaleDateString("en-US", { month: "short" }),
                weekday: d.toLocaleDateString("en-US", { weekday: "short" }).toLowerCase(),
                fullDate: d,
            })
        }
        return dates
    }

    const dates = generateDates(centerDate)

    // Handle date selection
    const handleDateSelect = (d, fromCalendar = false) => {
        setDate(d)
        if (fromCalendar) {
            setCenterDate(d) // only recenter if chosen from calendar
        }
    }

    const handlePrevious = () => {
        const prev = new Date(centerDate)
        prev.setDate(centerDate.getDate() - 1)
        setCenterDate(prev)
    }

    const handleNext = () => {
        const next = new Date(centerDate)
        next.setDate(centerDate.getDate() + 1)
        setCenterDate(next)
    }

    const handleOpenCalendar = () => {
        inputRef.current.showPicker?.() // open native calendar picker
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <h2 className="text-lg font-medium text-gray-800">Choose a date</h2>

            {/* Date Selection */}
            <div className="grid grid-cols-6 gap-2 md:gap-4">
                {/* Previous Button */}
                <button
                    onClick={handlePrevious}
                    className="flex justify-center items-center bg-secondary hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-400" />
                </button>

                {/* Date Options */}
                {dates.map((dateObj) => (
                    <button
                        key={dateObj.id}
                        // onClick={() => handleDateSelect(dateObj.fullDate)} // ✅ no recenter here
                        className={`flex flex-col items-center justify-center py-2 md:py-4 rounded-lg transition-colors 
              ${date && date.toDateString() === dateObj.fullDate.toDateString()
                                ? "bg-primary text-white"
                                : "bg-gray-50 text-gray-800 hover:bg-gray-100"}`}
                    >
                        <span className="text-xs font-medium">{dateObj.month}</span>
                        <span className="text-sm md:text-lg font-bold">{dateObj.day}</span>
                        <span className="text-xs">{dateObj.weekday}</span>
                    </button>
                ))}

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="flex justify-center items-center bg-secondary hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
            </div>

            {/* Action Button */}
            {
                !date && <button
                    onClick={handleOpenCalendar}
                    className="py-2 px-4 border-2 border-primary text-primary rounded-lg hover:bg-red-50 transition-colors font-medium"
                >
                    Choose this date & time
                </button>

            }
            {/* Hidden datetime-local input */}
            <input
                ref={inputRef}
                type="datetime-local"
                className="hidden"
                onChange={(e) => {
                    const picked = new Date(e.target.value)
                    if (!isNaN(picked)) {
                        handleDateSelect(picked, true) // ✅ recenter if from calendar
                    }

                    // ✅ reset value so it's ready next time
                    e.target.value = ""

                    // ✅ blur input so calendar closes
                    inputRef.current?.blur()
                }}
            />
        </div>
    )
}


function TimePicker({ setIsModalOpen }) {
    const [selectedTime, setSelectedTime] = useState("8.00 am") // Default selected time

    const timeSlots = [
        "Early Drop off",
        "8.00 am",
        "8.00 am",
        "8.00 am",
        "8.00 am",
        "8.00 am",
        "8.00 am",
        "8.00 am",
        "8.00 am",
        "8.00 am",
        "8.00 am",
        "8.00 am",
    ]

    const handleTimeSelect = (time, index) => {
        setSelectedTime(time)
    }

    return (
        <div className="">
            <div className="space-y-6">
                {/* Header */}
                <h2 className="text-lg font-medium text-gray-800">Choose a drop off time</h2>

                {/* Time Slots Grid */}
                <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time, index) => (
                        <button
                            key={index}
                            onClick={() => handleTimeSelect(time, index)}
                            className={`text-[10px] md:text-sm py-2 md:py-4 px-2 md:px-6 rounded-lg border-2 transition-all duration-200 font-medium ${selectedTime === time && index === 7 // Middle slot selected in the image
                                ? "bg-primary text-white border-primary"
                                : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                }`}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

function BusinessProfile() {
    const services = ["Early drop off", "Loaner car", "Shuttle service", "State inspection", "Free wifi", "Wait on site"]

    const hours = [
        { day: "Mon:", time: "8:00 am - 6:00 pm" },
        { day: "Tue:", time: "8:00 am - 6:00 pm" },
        { day: "Wed:", time: "8:00 am - 6:00 pm" },
        { day: "Thu:", time: "8:00 am - 6:00 pm" },
        { day: "Fri:", time: "8:00 am - 6:00 pm" },
        { day: "Sat:", time: "8:00 am - 6:00 pm" },
        { day: "Sun:", time: "8:00 am - 6:00 pm" },
    ]

    return (
        <div className="lg:w-[30%] ">
            <div className="bg-secondary p-4 h-fit rounded-xl">
                <div className="bg-white rounded-2xl p-6 space-y-6">
                    {/* Business Header */}
                    <div className="text-center space-y-3">
                        <h2 className="text-xl font-bold text-gray-800">A&M Auto Repair Bellevue</h2>

                        {/* Rating */}
                        <div className="flex items-center justify-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-5 h-5 fill-red-500 text-red-500" />
                            ))}
                            <span className="text-gray-600 ml-2">(10)</span>
                        </div>

                        {/* Address */}
                        <p className="text-sm text-gray-600">13551 Se 27th Pl, Bellevue, WA 98005</p>
                    </div>

                    {/* Services */}
                    <div className="grid grid-cols-2 gap-4">
                        {services.map((service, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm text-gray-700">{service}</span>
                            </div>
                        ))}
                    </div>

                    {/* Operating Hours */}
                    <div className="bg-secondary rounded-xl px-4 py-10 space-y-4">
                        {hours.map((schedule, index) => (
                            <div key={index} className="grid grid-cols-[30px_auto] gap-4 items-center w-fit mx-auto">
                                <span className="text-sm font-medium text-gray-800 w-fit">{schedule.day}</span>
                                <span className="text-sm text-gray-600 w-fit">{schedule.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function PickupForm() {
    const [requirePickup, setRequirePickup] = useState(true)
    const [pickupLocation, setPickupLocation] = useState("")
    const [pickupTime, setPickupTime] = useState("")
    const [showLocationDropdown, setShowLocationDropdown] = useState(false)
    const [showTimeDropdown, setShowTimeDropdown] = useState(false)

    const locationSuggestions = [
        "123 Main Street, Seattle, WA",
        "456 Pine Avenue, Bellevue, WA",
        "789 Oak Drive, Redmond, WA",
    ]

    const timeSlots = [
        "8:00 AM",
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
    ]

    const handleLocationChange = (e) => {
        setPickupLocation(e.target.value)
        setShowLocationDropdown(true)
    }

    const handleLocationSelect = (location) => {
        setPickupLocation(location)
        setShowLocationDropdown(false)
    }

    const handleTimeSelect = (time) => {
        setPickupTime(time)
        setShowTimeDropdown(false)
    }

    return (
        <div className="">
            <div className="space-y-6">
                {/* Require Pickup Checkbox */}
                <div className="flex items-center space-x-3">
                    <button
                        onClick={() => setRequirePickup(!requirePickup)}
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${requirePickup ? "bg-red-500 border-red-500" : "border-gray-300 hover:border-gray-400"
                            }`}
                    >
                        {requirePickup && (
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </button>
                    <label className="text-gray-800 font-medium cursor-pointer" onClick={() => setRequirePickup(!requirePickup)}>
                        Require Pick up
                    </label>
                </div>

                {/* Pickup Form Fields */}
                {requirePickup && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Pick up location */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-black mb-2">Pick up location</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={pickupLocation}
                                    onChange={handleLocationChange}
                                    onFocus={() => setShowLocationDropdown(true)}
                                    placeholder="Pick up location"
                                    className="w-full px-4 py-3 pr-10 border border-gray-300 placeholder:text-gray-black placeholder:font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <FaLocationArrow className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-black" />

                                {/* Location Dropdown */}
                                {showLocationDropdown && (
                                    <>
                                        <div className="fixed inset-0 z-10" onClick={() => setShowLocationDropdown(false)} />
                                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                                            {(() => {
                                                const filteredLocations = locationSuggestions.filter((location) =>
                                                    location.toLowerCase().includes(pickupLocation.toLowerCase()),
                                                )

                                                if (filteredLocations.length === 0) {
                                                    return <div className="px-4 py-3 text-sm text-gray-500">No results</div>
                                                }

                                                return filteredLocations.map((location, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handleLocationSelect(location)}
                                                        className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                    >
                                                        {location}
                                                    </button>
                                                ))
                                            })()}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Pick up time */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Pick up time</label>
                            <div className="relative">
                                <button
                                    onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-left bg-white text-gray-black font-semibold"
                                >
                                    {pickupTime || "Pick up time"}
                                </button>

                                {/* Time Dropdown */}
                                {showTimeDropdown && (
                                    <>
                                        <div className="fixed inset-0 z-10" onClick={() => setShowTimeDropdown(false)} />
                                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                                            {timeSlots.map((time, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleTimeSelect(time)}
                                                    className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

