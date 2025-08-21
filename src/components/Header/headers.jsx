"use client"

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import BrandLogo from "@/assets/images/logo.png";
import carImg from "@/assets/images/pngwing.com (3).png";
import { cn } from "@/lib/utils";
import { setUser } from "@/store/Feature/user-slice";
import { Search } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiArrowRightWideLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import ChangeVehicleModalContents from "../modal-contents/vehicle/ChangeVehicleModalContents";
import Container from "../shared/container/Container";
import Modal from "../shared/modal/Modal";

export default function Header() {
  const pathName = usePathname();
  const user = useSelector(state => state.user);
  const selectedCarForParts = useSelector(state => state?.selectedItems?.selectedCarForParts);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isSelectVehicleModalOpen, setIsSelectVehicleModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setUser({ email: "", phoneNumber: "", verificationCode: "" }));
    router.push("/");
  };


  return (
    <div className="sticky top-0 z-50 bg-white">
      <Container className={" w-full my-0 md:my-0 lg:my-0 !py-3 lg:!py-4 xl:!py-5 overflow-visible"}>
        <header className="w-full">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Image
                src={BrandLogo}
                quality={100}
                width={156}
                height={40}
                alt="Brand Logo"
              />
            </Link>
            {
              (pathName === "/car-buy" || pathName === "/car-rent" || pathName === "/parts") && <nav className="hidden items-center gap-6 text-sm font-medium md:flex justify-center md:mr-[24px] min-w-xl">
                <Link
                  href="/car-buy"
                  className={cn(`text-[#727272] hover:text-primary`, pathName === "/car-buy" && "text-primary")}
                  prefetch={false}
                >
                  Cars for Sale
                </Link>
                <Link
                  href="/car-rent"
                  className={cn(`text-[#727272] hover:text-primary`, pathName === "/car-rent" && "text-primary")}
                  prefetch={false}
                >
                  Cars for Rent
                </Link>
                <Link
                  href="/parts"
                  className={cn(`text-[#727272] hover:text-primary`, pathName === "/parts" && "text-primary")}
                  prefetch={false}
                >
                  Parts
                </Link>
                <Link
                  href="/marketplace"
                  className={cn(`text-[#727272] hover:text-primary`, pathName === "/marketplace" && "text-primary")}
                  prefetch={false}
                >
                  Services
                </Link>
              </nav>
            }

            {
              pathName === "/car-filter" && (
                <nav className="hidden items-center gap-6 text-sm font-medium md:flex justify-end md:mr-[24px] min-w-xl">
                  <div className="flex items-center w-full bg-white rounded-lg border border-gray-200 relative">
                    {/* First input field for "Cars" */}
                    <input
                      type="text"
                      placeholder="Cars"
                      className="flex-grow py-3 px-6 text-lg text-gray-700 placeholder:text-gray-500 placeholder:font-semibold focus:outline-none bg-transparent w-[40%]"
                    />

                    {/* Vertical divider */}
                    <div className="w-[1px] h-7 bg-gray-400 mx-1"></div>

                    {/* Second input field for "Audi" */}
                    <input
                      type="text"
                      placeholder="Audi"
                      className="flex-grow py-3 px-6 text-lg text-gray-700 placeholder:text-gray-500 placeholder:font-semibold focus:outline-none bg-transparent w-[60%]"
                    />

                    {/* Search button */}
                    <button className="flex-shrink-0 w-10 h-10 my-4  bg-primary hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-200 absolute right-2">
                      <Search size={16} />
                    </button>
                  </div>
                </nav>
              )

            }
            {
              (pathName === "/parts-filter" || pathName === "/single-parts") && (
                <nav className="hidden lg:block items-center gap-6 text-sm font-medium md:flex justify-end md:mr-[24px] min-w-xl">
                  <div className="flex items-center w-full bg-white rounded-lg border border-gray-200 relative ">
                    {/* First input field for "Cars" */}
                    <div onClick={() => setIsSelectVehicleModalOpen(prev => !prev)} className="cursor-pointer">
                      {
                        selectedCarForParts?.name ? <div className="flex items-center gap-2 px-1 lg:px-4 ">
                          <Image src={carImg} alt={selectedCarForParts.name} className="w-8 lg:w-16 object-contain rounded-md" width={50} height={50} />
                          <p className="text-[8px] lg:text-xs font-semibold text-gray-800 text-nowrap">{selectedCarForParts.name?.slice(0, 8)}</p>
                          <RiArrowRightWideLine className="text-xl" />
                        </div> : <button
                          type="button"
                          className="text-[6px] lg:text-sm flex items-center space-x-2 px-2 lg:px-4 text-gray-700 font-medium rounded-full  transition-colors duration-200 "
                        >
                          <span className="text-gray-500 font-semibold">Add vehicle</span>
                        </button>
                      }
                    </div>

                    {/* Vertical divider */}
                    <div className="w-[1px] h-7 bg-gray-400 mx-1"></div>

                    {/* Second input field for "Audi" */}
                    <input
                      type="text"
                      placeholder="Search Product"
                      className="flex-grow py-3 px-6 text-lg text-gray-700 placeholder:text-gray-500 placeholder:font-semibold focus:outline-none bg-transparent w-[60%]"
                    />

                    {/* Search button */}
                    <button className="flex-shrink-0 w-10 h-10 my-4  bg-primary hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-200 absolute right-2">
                      <Search size={16} />
                    </button>
                  </div>
                </nav>
              )

            }
            {
              pathName === "/single-car" && (
                <nav className="hidden items-center gap-6 text-sm font-medium md:flex justify-end md:mr-[24px] min-w-xl">
                  <div className="flex items-center w-full bg-white rounded-lg border border-gray-200 relative">
                    {/* First input field for "Cars" */}
                    <input
                      type="text"
                      placeholder="Type"
                      className="flex-grow py-3 px-6 text-lg text-gray-700 placeholder:text-gray-500 placeholder:font-semibold focus:outline-none bg-transparent w-[40%]"
                    />

                    {/* Vertical divider */}
                    <div className="w-[1px] h-7 bg-gray-400 mx-1"></div>

                    {/* Second input field for "Audi" */}
                    <input
                      type="text"
                      placeholder="Search"
                      className="flex-grow py-3 px-6 text-lg text-gray-700 placeholder:text-gray-500 placeholder:font-semibold focus:outline-none bg-transparent w-[60%]"
                    />

                    {/* Search button */}
                    <button className="flex-shrink-0 w-10 h-10 my-4  bg-primary hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-200 absolute right-2">
                      <Search size={16} />
                    </button>
                  </div>
                </nav>
              )

            }
            {
              !pathName.includes("auth") && pathName !== "/parts-filter" && pathName !== "/single-parts" && pathName !== "/car-buy" && pathName !== "/parts" && pathName !== "/car-rent" && pathName !== "/car-filter" && pathName !== "/single-car" && <nav className="hidden items-center gap-6 text-sm font-medium md:flex flex-auto justify-center md:mr-[24px]">
                <Link
                  href="/car-buy"
                  className={`text-[#727272] hover:text-gray-900 ${pathName == "/car-buy" && "!text-primary"}`}
                  prefetch={false}
                >
                  Buy a car
                </Link>
                <Link
                  href="/car-rent"
                  className={`text-[#727272] hover:text-gray-900 ${pathName == "/car-rent" && "!text-primary"}`}
                  prefetch={false}
                >
                  Rent a car
                </Link>
                <Link
                  href="/parts"
                  className={`text-[#727272] hover:text-gray-900 ${pathName == "/parts" && "!text-primary"}`}
                  prefetch={false}
                >
                  Buy spares
                </Link>
                <Link
                  href="/services"
                  className={`text-[#727272] hover:text-gray-900 ${pathName == "/services" && "!text-primary"}`}
                  prefetch={false}
                >
                  Request service
                </Link>

              </nav>
            }
            <div className="flex items-center gap-4">
              <div className="hidden items-center gap-6 text-sm font-medium md:flex">
                {
                  user.email === "" && (
                    <Link
                      href="/auth/signin-user"
                      className="text-[#727272] hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      prefetch={false}
                    >
                      Sign In
                    </Link>
                  )
                }
                {
                  user.email === "" ? <Link
                    href={"/auth/signup"}
                    className="bg-[#CA2026] w-[124px] h-[41px] rounded-[9px] flex items-center justify-center text-white"
                  >
                    <span>Sign Up</span>
                  </Link> : <div className="flex items-center gap-4">

                    <Link href={"/"}>
                      <MdOutlineShoppingCart className="text-primary text-lg" />
                    </Link>
                    <Link href={"/"}>
                      <FaRegBell className="text-primary text-lg" />

                    </Link>
                    {/* <span className="bg-[#ddd] w-0.5 h-[25px] block"></span> */}
                    <div className="relative cursor-pointer" onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}>
                      <Image src="/images/user.png" alt="user" width={40} height={40} className="rounded-full border-2 border-primary" />
                      <AccountDropdown isAccountDropdownOpen={isAccountDropdownOpen} handleLogout={handleLogout} />
                    </div>
                  </div>
                }
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full md:hidden"
                  >
                    <MenuIcon className="h-5 w-5 text-[#727272] dark:text-gray-400" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="md:hidden">
                  <div className="grid gap-4 p-4">
                    <Link
                      href="/car-buy"
                      className="text-sm font-medium text-[#727272] hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      prefetch={false}
                    >
                      Shop
                    </Link>
                    <Link
                      href="/"
                      className="text-sm font-medium text-[#727272] hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      prefetch={false}
                    >
                      Vehicles
                    </Link>
                    <Link
                      href="/parts"
                      className="text-sm font-medium text-[#727272] hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      prefetch={false}
                    >
                      Parts
                    </Link>
                    <Link
                      href="#"
                      className="text-sm font-medium text-[#727272] hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      prefetch={false}
                    >
                      Services
                    </Link>
                    <Link
                      href="/auth/signin-user"
                      className="text-sm font-medium text-[#727272] hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      prefetch={false}
                    >
                      Sign In
                    </Link>

                    <div className="items-center gap-6 text-sm font-medium">
                      {
                        user.email === "" ? <Link
                          href={"/auth/signup"}
                          className="bg-[#CA2026] w-[124px] h-[41px] rounded-[9px] flex items-center justify-center text-white"
                        >
                          <span>Sign Up</span>
                        </Link> : <div>
                          <div className="relative cursor-pointer" onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}>
                            <Image src="/images/user.png" alt="user" width={40} height={40} className="rounded-full border-2 border-primary" />
                            <AccountDropdown isAccountDropdownOpen={isAccountDropdownOpen} handleLogout={handleLogout} />
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
        <Modal isModalOpen={isSelectVehicleModalOpen} setIsModalOpen={setIsSelectVehicleModalOpen} containerClassName={"w-[90%] lg:w-auto"} contentContainerClassName={" rounded-xl"} backBtnClassName={" p-2 bg-secondary rounded-lg"}>
          <ChangeVehicleModalContents setIsModalOpen={setIsSelectVehicleModalOpen} />
        </Modal>
      </Container>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}


function AccountDropdown({ isAccountDropdownOpen, handleLogout }) {
  const accountLinks = {
    column1: [
      { label: "Account", href: "/account", bold: true },
      { label: "Account Setting", href: "/account-settings", bold: true },
      { label: "Switch Accounts", href: "/switch-account", bold: true },
      { label: "Sign out", href: "#", bold: true, type: "button", onClick: handleLogout },
    ],
    column2: [
      { label: "Request", href: "/request" },
      { label: "Orders", href: "/order" },
      { label: "vehicles", href: "/vehicle-list" },
      { label: "Insurance", href: "/my-insurance" },
      { label: "Messages", href: "/message" },
      { label: "Addresses", href: "/shipping-address" },
      { label: "Watchlist", href: "/watch-list" },

    ],
  };

  return (
    <div>
      {
        isAccountDropdownOpen && (
          <div className="absolute top-14 right-0 bg-white p-6 w-full md:w-auto lg:w-auto h-[50vh] md:h-auto overflow-y-auto lg:px-20 md:py-10 custom-shadow rounded-xl scrollbar-hide z-50">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
              Your Account
            </h1>

            {/* Account Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-32 gap-y-4 min-w-max">
              <div className="flex flex-col space-y-2">
                {accountLinks.column1.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`text-sm text-gray hover:text-primary transition-colors duration-200 font-normal`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col space-y-2">
                {accountLinks.column2.map((link, index) => (
                  <>
                    {
                      link.type === "button" ? <button
                        key={index}
                        onClick={link.onClick}
                        className={`text-sm w-full text-left text-gray hover:text-primary transition-colors duration-200 font-normal`}
                      >
                        {link.label}
                      </button> : <a
                        key={index}
                        href={link.href}
                        className={`text-sm text-gray hover:text-primary transition-colors duration-200 font-normal`}
                      >
                        {link.label}
                      </a>
                    }
                  </>
                ))}
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

