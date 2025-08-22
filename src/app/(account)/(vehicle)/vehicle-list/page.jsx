"use client"

import carImg from "@/assets/images/pngwing.com (3).png"
import ReviewModalContents from "@/components/modal-contents/account/vehicle/ReviewModalContents"
import { LicensePlatePopupContents, SelectVehiclePopupContents } from "@/components/popup-contents/AddVehiclePopUpContents"
import Container from "@/components/shared/container/Container"
import Modal from "@/components/shared/modal/Modal"
import Modal2 from "@/components/shared/modal/Modal2"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"

const vehicles = [
  {
    id: "1",
    name: "Blue Berry",
    registration: "ALZ2818",
    status: "In Active",
    details: "2002 Toyota Corolla Petrol Estate 1.5 4WD AWD ___E14_ 1497cc 77KW 105HP 1NZ-FE",
    image: "/placeholder.svg?height=40&width=60",
  },
  {
    id: "2",
    name: "Toyota Premio",
    registration: "ALT9009",
    status: "Active",
    details: "2002 Toyota Premio Petrol Saloon 1.8 FWD ___T26_ 1798cc 100KW 144HP 2ZR-FAE",
    image: "/placeholder.svg?height=40&width=60",
  },
  {
    id: "3",
    name: "Bibi",
    registration: "DCD738ZM",
    status: "Active",
    details: "2018 Toyota Hilux Diesel Pickup 3.0 D 4WD Vii _N1__N2__N3_ 2982cc 120KW 163HP 1KD-FTV",
    image: "/placeholder.svg?height=40&width=60",
  },
  {
    id: "4",
    name: "Toyota Hilux",
    registration: "CAA5200ZM",
    status: "Active",
    details: "2019 Toyota Hilux Diesel Pickup 2.5 D 4WD AWD Vii _N1__N2__N3_ 2494cc 75KW 102HP 2KD-FTV",
    image: "/placeholder.svg?height=40&width=60",
  },
  {
    id: "5",
    name: "Blue Origin",
    registration: "BBC2170ZM",
    status: "Active",
    details: "2003 Toyota ALLION Petrol Saloon 1.5 FWD ii _T26_ 1497cc 80KW 109HP 1NZ-FE",
    image: "/placeholder.svg?height=40&width=60",
  },
]

export default function Component() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [itemsPerPage, setItemsPerPage] = useState("10")
  const [currentPage, setCurrentPage] = useState(1)
  const [isAddVehiclePopupOpen, setIsAddVehiclePopupOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("select-vehicle");
  const [currentModal, setCurrentModal] = useState("review-details");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddVehicle = () => {
    setSelectedTab("select-vehicle")
    setIsAddVehiclePopupOpen(true)
  }

  const handleVehicleClick = (vehicleId) => {
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    // Add logic for next page when you have more data
    setCurrentPage(currentPage + 1)
  }

  const filteredVehicles = vehicles.filter((vehicle) => {
    if (activeFilter === "All") return true
    if (activeFilter === "Active") return vehicle.status === "Active"
    if (activeFilter === "Inactive") return vehicle.status === "In Active"
    return true
  })

  return (
    <Container>
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Your Vehicle</h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
            {/* <Link href={"/add-vehicle"}> */}
            <Button
              onClick={handleAddVehicle}
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 w-full sm:w-auto border border-gray"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Vehicle
            </Button>
            {/* </Link> */}

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 w-full sm:w-auto">
              {["All", "Active", "Inactive"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium border-b-2 transition-colors flex-1 sm:flex-none ${activeFilter === filter
                    ? "text-primary border-primary"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Vehicle List */}
        <div className="space-y-3 sm:space-y-4">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              onClick={() => handleVehicleClick(vehicle.id)}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              {/* Vehicle Image */}
              <div className="flex-shrink-0">
                <Image
                  width={120}
                  height={120}
                  src={carImg}
                  alt={`${vehicle.name} vehicle`}
                  className="w-12 h-8 sm:w-16 sm:h-10 object-cover rounded"
                />
              </div>

              {/* Vehicle Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                  <h3 className="text-sm sm:text-base font-medium text-gray-900 truncate">
                    {vehicle.name} {vehicle.registration}
                  </h3>
                  <Badge
                    variant={vehicle.status === "Active" ? "default" : "secondary"}
                    className={`text-xs px-2 py-1 w-fit ${vehicle.status === "Active"
                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                      : "bg-red-100 text-red-800 hover:bg-red-100"
                      }`}
                  >
                    {vehicle.status}
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 sm:truncate">{vehicle.details}</p>
              </div>

              {/* Arrow Icon */}
              <div className="flex-shrink-0">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 pt-4 border-t border-gray-200">
          <div className="text-xs sm:text-sm text-gray-600 order-1 sm:order-none">1-5 of 5 vehicles</div>

          <div className="flex items-center gap-2 order-2 sm:order-none">
            {/* Previous Button */}
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center text-xs sm:text-sm border border-gray-300 text-gray-600 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Current Page */}
            <button className="w-8 h-8 flex items-center justify-center text-xs sm:text-sm border border-primary text-primary rounded">
              {currentPage}
            </button>

            {/* Next Button */}
            <button
              onClick={handleNextPage}
              className="w-8 h-8 flex items-center justify-center text-xs sm:text-sm border border-gray-300 text-gray-600 rounded hover:bg-gray-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-1 order-3 sm:order-none">
            <Select value={itemsPerPage} onValueChange={setItemsPerPage}>
              <SelectTrigger className="w-20 h-8 text-xs sm:text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-xs sm:text-sm text-gray-600">/ page</span>
          </div>
        </div>
      </div>
      <Modal2 closeIconContainerClassName={"p-1 bg-secondary rounded-sm"} CloseIcon={IoCloseOutline} closeIconClassName={"w-6 h-6"} title={"Add Vehicle"} isModalOpen={isAddVehiclePopupOpen} setIsModalOpen={setIsAddVehiclePopupOpen} containerClassName={"w-[90%] lg:w-auto"}>
        {
          selectedTab === "select-vehicle" && <SelectVehiclePopupContents setSelectedTab={setSelectedTab} />
        }
        {
          selectedTab === "license-plate" && <LicensePlatePopupContents setSelectedTab={setSelectedTab} handleBack={() => setIsAddVehiclePopupOpen(false)} setCurrentModal={setCurrentModal} setIsModalOpen={setIsModalOpen} />
        }
      </Modal2>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"} contentContainerClassName={"lg:min-h-[87vh] rounded-xl"} backBtnClassName={"mr-[5%] p-2 bg-secondary rounded-lg"}>

        {
          currentModal === "review-details" && <div className="lg:px-20">
            <ReviewModalContents setCurrentModal={setCurrentModal} />
          </div>
        }
      </Modal>
    </Container>
  )
}
