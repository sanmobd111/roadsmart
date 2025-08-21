"use client"

import Pagination from "@/components/shared/pagination/Pagination"
import FilterCard from "@/components/shop/FilterCard"
import FilterDropdown from "@/components/shop/FilterDropdown"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ChevronDown, Filter } from "lucide-react"
import { useState } from "react"

const carListings = Array(7)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    title: "Lorem Ipsum is simply dummy text",
    subtitle: "Lorem Ipsum",
    price: "300000$",
    image: "/placeholder.svg?height=200&width=300",
    badge: "Lorem Ipsum",
    features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    description: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text",
  }))

export default function CarDealership() {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(10)
  const [currentTab, setCurrentTab] = useState("all")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [isConditionDropdownOpen, setIsConditionDropdownOpen] = useState(false);
  const [condition, setCondition] = useState([]);
  const [sort, setSort] = useState("Sort: Best Match");
  const [collapsedSections, setCollapsedSections] = useState({
    bodyType: false,
    modelYear: false,
    fuelType: false,
  })

  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const FilterContent = () => (
    <div className="space-y-4 sm:space-y-6 ">
      <h2 className="text-lg font-semibold text-gray-900">BMW X3 Cars</h2>

      {/* Model Year Filter */}
      <FilterDropdown toggleSection={toggleSection} collapsedSectionsType={collapsedSections.fuelType} type={"fuelType"} title={"Fuel Type"} />
      <Separator />
      <FilterDropdown toggleSection={toggleSection} collapsedSectionsType={collapsedSections.bodyType} type={"bodyType"} title={"Body Type"} />
      <Separator />
      <FilterDropdown toggleSection={toggleSection} collapsedSectionsType={collapsedSections.modelYear} type={"modelYear"} title={"Model Year"} />
      <Button variant="outline" className="w-full bg-white text-gray-700 border-gray-300" onClick={() => setIsFilterModalOpen(true)}>
        More Filters
      </Button>
    </div>
  )

  console.log(sort)

  return (
    <div className="in-h-screen max-w-[1600px] mx-auto bg-white w-[90%] lg:w-full">
      <div className="max-w-[1600px] mx-auto sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Desktop Sidebar Filters */}
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
          <div className="flex-1 min-w-0">
            <p className="text-lg mb-4">5,300,000+ results for Buying Audi</p>
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

            {/* Car Listings */}
            <div className="space-y-4 lg:space-y-10">
              {carListings.map((car) => (
                <FilterCard data={car} path={"/single-car"} isFinance={currentTab === "finance"} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
      <Modal isModalOpen={isFilterModalOpen} setIsModalOpen={setIsFilterModalOpen} containerClassName={"w-[90%] lg:w-auto"} contentContainerClassName={" rounded-xl lg:min-w-5xl"} backBtnClassName={" p-2 bg-secondary rounded-lg"}>
        <FilterModalContents />
      </Modal>
    </div>
  )
}


import Checkbox from "@/components/shared/check-box/Checkbox"
import Modal from "@/components/shared/modal/Modal"
import { MdClose } from "react-icons/md"
import { cn } from "@/lib/utils"

// The main App component containing the entire filter UI
const FilterModalContents = () => {
  // State for the active filter category in the left sidebar
  const [activeFilter, setActiveFilter] = useState('Body Type');

  // State to manage the checked checkboxes.
  const [checkedItems, setCheckedItems] = useState({});

  // Dummy data for the filter categories
  const filterCategories = [
    'Body Type', 'Model', 'Model Year', 'Fule Type', 'For Sale By', 'Vehicle Title',
    'Number of Cylinders', 'Exterior Color', 'Interior Color', 'Drive Type',
    'Number of Doors', 'Engine Size',
  ];

  // Dummy data for the checkbox options
  const checkboxOptions = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    label: 'Lorem Ipsum',
    count: 32,
  }));

  // Handle checkbox state changes
  const handleCheckboxChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Count the number of selected filters
  const selectedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="flex flex-col font-sans relative overflow-y-auto lg:overflow-y-hidden ">
      {/* The main container for the filter panel, using flexbox for layout */}
      <div className="flex-1 flex  flex-col lg:flex-row">

        {/* Left Sidebar - Filter Categories */}
        <div className=" bg-white w-fit">
          <div className="shrink-0 overflow-y-auto custom-scroll space-y-3 lg:pb-10 lg:max-h-[70vh] pr-4 w-fit lg:space-x-0 flex flex-col">
            {filterCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`lg:block lg:w-full text-nowrap text-left py-2 px-6 border-gray-100 transition-colors rounded-lg
                  ${activeFilter === category
                    ? 'bg-primary text-white font-semibold'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-primary'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Area - Checkboxes */}
        <div className="flex-1 flex flex-col lg:p-8 overflow-y-auto relative pt-5 lg:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 justify-center">
            {checkboxOptions.map(item => (
              <label key={item.id} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!checkedItems[item.id]}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="form-checkbox h-5 w-5 text-red-600 rounded focus:ring-red-500"
                />
                <span className="text-gray-800">{item.label} <span className="text-gray-500">({item.count})</span></span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - Filter count and action buttons */}
      <div className="flex flex-col lg:flex-row items-center justify-end p-6 lg:absolute bottom-0 bg-white w-full gap-4">
        <span className="text-gray-700">{selectedCount} Filters selected</span>
        <div className="space-x-4">
          <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            Cancel
          </button>
          <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};


