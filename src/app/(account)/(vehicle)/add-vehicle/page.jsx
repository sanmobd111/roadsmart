"use client"

import { useState } from "react";

import carImg from "@/assets/images/pngwing.com (3).png";
import ReviewModalContents from "@/components/modal-contents/account/vehicle/ReviewModalContents";
import Container from "@/components/shared/container/Container";
import Modal from "@/components/shared/modal/Modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bike, Car, Check, Truck, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const vehicles = [
    { icon: <Car className="w-8 h-8 text-red-500" />, label: "Car or Truck" },
    { icon: <Bike className="w-8 h-8 text-red-500" />, label: "Motorbike" },
    { icon: <Truck className="w-8 h-8 text-red-500" />, label: "Trailer" },
    { icon: <Wrench className="w-8 h-8 text-red-500" />, label: "Plant or Machinery" },
];

export default function Component() {
    const [selectedTab, setSelectedTab] = useState("select-vehicle");
    const [currentModal, setCurrentModal] = useState("review-details");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [licensePlate, setLicensePlate] = useState("");
    const [isLicensePlateValid, setIsLicensePlateValid] = useState(false);
    const [vin, setVin] = useState("");
    const [isVinValid, setIsVinValid] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("vin");

    const [manualForm, setManualForm] = useState({
        year: "",
        make: "",
        model: "",
        variant: "",
        type: "",
        chassis: "",
        engine: "",
        color: "",
        estimatedValue: "",
        use: "",
    });

    const handleLicensePlateChange = (e) => {
        const value = e.target.value;
        setLicensePlate(value);
        setIsLicensePlateValid(value.trim().length > 0);
    };

    const handleVinChange = (e) => {
        const value = e.target.value;
        setVin(value);
        setIsVinValid(value.trim().length > 0);
    };

    const handleManualFormChange = (field, value) => {
        setManualForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleEdit = () => {
        // Handle edit action
    }

    const handleConfirm = () => {
        // Handle confirm action
    }


    const isManualFormValid = Object.values(manualForm).some((value) => value.trim().length > 0);

    return (
        <Container className="min-h-[50vh] lg:min-h-[60vh]">
            <div className="lg:min-w-md">
                {selectedTab === "select-vehicle" && (
                    <div className="">
                        <div className="space-y-4">
                            <div className="text-center">
                                <h1 className="text-xl font-semibold text-gray-900">Add Vehicle</h1>
                                <p className="text-gray-600 text-sm">What type of vehicle are you adding?</p>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                {vehicles.map((item, index) => (
                                    <div key={index} onClick={() => setSelectedTab("license-plate")}>
                                        <Card className="p-2 cursor-pointer hover:bg-gray-50 transition-colors aspect-square flex justify-center items-center">
                                            <CardContent className="flex flex-col items-center justify-center p-1 space-y-1">
                                                <div className="w-8 h-8 flex items-center justify-center">{item.icon}</div>
                                                <span className="text-[10px] hidden lg:block font-medium text-gray-700 text-center">
                                                    {item.label}
                                                </span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {selectedTab === "license-plate" && (
                    <div className="">
                        <div className="space-y-4 lg:space-y-6">
                            <h1 className="text-xl font-medium text-gray-900">Add a car</h1>
                            <Tabs defaultValue="license-plate" className="w-full" onValueChange={setActiveTab}>
                                <TabsList className="flex gap-2 bg-transparent h-auto p-0 sm:gap-4">
                                    <TabsTrigger
                                        value="license-plate"
                                        className="text-sm sm:text-base data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:text-primary rounded-none pb-2 px-1 sm:px-0"
                                    >
                                        License Plate
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="manual"
                                        className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:text-primary rounded-none pb-2 px-1 sm:px-0 text-center text-gray text-xs"
                                    >
                                        Add details manually
                                    </TabsTrigger>
                                </TabsList>

                                <div className="mt-2 lg:mt-4 sm:mt-8 mb-0">
                                    <TabsContent value="license-plate" className="lg:space-y-4 mb-0">
                                        <div className="relative">
                                            <Input
                                                type="text"
                                                placeholder="License Plate"
                                                value={licensePlate}
                                                onChange={handleLicensePlateChange}
                                                className="pr-10 !h-12 text-sm sm:text-base"
                                            />
                                            {isLicensePlateValid && (
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                    <Check className="w-5 h-5 text-green-500" />
                                                </div>
                                            )}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="manual" className="space-y-4">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            {[
                                                { field: "year", label: "YEAR", items: ["2024", "2023", "2022", "2021", "2020"] },
                                                { field: "make", label: "MAKE", items: ["Toyota", "Honda", "Ford", "BMW", "Mercedes"] },
                                                { field: "model", label: "MODEL", items: ["Camry", "Accord", "F-150", "3 Series"] },
                                                { field: "variant", label: "VARIANT", items: ["Base", "Sport", "Luxury", "Premium"] },
                                                { field: "type", label: "TYPE", items: ["Sedan", "SUV", "Hatchback", "Truck"] },
                                                { field: "chassis", label: "CHASSIS", items: ["Unibody", "Body-on-Frame", "Monocoque"] },
                                                { field: "engine", label: "ENGINE", items: ["4 Cylinder", "6 Cylinder", "8 Cylinder", "Electric", "Hybrid"] },
                                                { field: "color", label: "COLOR", items: ["White", "Black", "Silver", "Red", "Blue"] },
                                            ].map(({ field, label, items }) => (
                                                <Select key={field} onValueChange={(value) => handleManualFormChange(field, value.toLowerCase())}>
                                                    <SelectTrigger className="!h-12 w-full lg:w-full">
                                                        <SelectValue placeholder={label} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {items.map((item) => (
                                                            <SelectItem key={item} value={item.toLowerCase()}>
                                                                {item}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            ))}

                                            <Input
                                                type="text"
                                                placeholder="ESTIMATED VALUE"
                                                value={manualForm.estimatedValue}
                                                onChange={(e) => handleManualFormChange("estimatedValue", e.target.value)}
                                                className="!h-12 w-full lg:w-full"
                                            />

                                            <Select onValueChange={(value) => handleManualFormChange("use", value)}>
                                                <SelectTrigger className="!h-12 w-full lg:w-full">
                                                    <SelectValue placeholder="USE" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="personal">Personal</SelectItem>
                                                    <SelectItem value="commercial">Commercial</SelectItem>
                                                    <SelectItem value="business">Business</SelectItem>
                                                    <SelectItem value="rental">Rental</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </TabsContent>
                                </div>
                            </Tabs>

                            <Button
                                onClick={() => {
                                    setCurrentModal("review-details");
                                    setIsModalOpen(true);
                                }}
                                className="mt-6 bg-primary hover:bg-primary text-white w-full sm:w-auto px-10 ml-auto block py-3 h-auto text-sm sm:text-base"
                                disabled={!isVinValid && !isLicensePlateValid && !isManualFormValid}
                            >
                                {activeTab === "manual" ? "Go" : "Let's Go"}
                            </Button>
                        </div>
                    </div>
                )}


            </div>

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"} contentContainerClassName={"lg:min-h-[87vh] rounded-xl"} backBtnClassName={"mr-[5%] p-2 bg-secondary rounded-lg"}>

                {
                    currentModal === "review-details" && <div className="lg:px-20">
                        <ReviewModalContents setCurrentModal={setCurrentModal} />
                    </div>
                }
                {
                    currentModal === "confirm-details" && (
                        <div className="">
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-xl font-semibold text-gray-900 pb-4 border-b border-gray-200">Confirm vehicle</h1>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h2 className="text-sm font-medium text-gray-900 mb-1">Registration number</h2>
                                        <p className="text-sm text-gray-600">ALX281BZM</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h2 className="text-lg font-semibold text-gray-900">2018 Toyota Harrier</h2>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            xDrive40i Executive Sport Utility 4-Door
                                            <br />
                                            3.0L 2998CC I6 GAS DOHC Turbocharged
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900 mb-1">Use</h3>
                                        <p className="text-sm text-gray-600">Personal use</p>
                                    </div>
                                </div>

                                <div className="flex justify-center py-8">
                                    <div className="relative w-full max-w-sm">
                                        <Image
                                            src={carImg}
                                            alt="2018 Toyota Harrier - Red sedan car"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto object-contain"
                                            priority
                                        />
                                    </div>
                                </div>

                                <div className="w-[80%] mx-auto grid grid-cols-2 gap-3 pt-4">
                                    <Button
                                        variant="outline"
                                        onClick={handleEdit}
                                        className="flex-1 h-10 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                                    >
                                        Edit
                                    </Button>
                                    <Link href="/my-vehicle" className="block w-full">
                                        <Button onClick={handleConfirm} className="w-full h-10 bg-primary hover:bg-primary text-white">
                                            Confirm
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Modal>
        </Container>
    );
}
