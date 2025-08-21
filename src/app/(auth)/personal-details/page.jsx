"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"
import Container from "@/components/shared/container/Container"
import { useRouter } from "next/navigation"

export default function PersonalizeAccountForm() {
  const [formData, setFormData] = useState({
    email: "",
    dateOfBirth: "",
    driversLicenseNo: "",
    driversClass: "",
    licenseExpiryDate: "",
  })

  const router = useRouter();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleProceed = () => {
    console.log("Form data:", formData)
    // Handle form submission
    router.push("/")
  }

  const handleDoItLater = () => {
    console.log("User chose to do it later")
    // Handle skip action
    router.push("/")
  }

  return (
    <Container className="">
      <div className="w-full max-w-md space-y-6 mx-auto">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">Personalize your account</h1>
          <p className="text-sm text-gray-600">Enter your details so that we can personalise your experience</p>
        </div>

        <div className="">
          <Card className="">
            <CardContent className="p-6 space-y-6">
              {/* Contact Info Section */}
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">Contact info</h2>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2  selection:bg-blue-200"
                  />
                  <p className="text-xs text-gray-600">We'll email you order confirmations and receipts.</p>
                </div>
              </div>

              {/* Date of Birth Section */}
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">Date of birth</h2>

                <div className="space-y-2">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="dd/mm/yyyy"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      className="w-full h-10 px-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                    />
                    <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-600">
                    To sign up, you need to be at least 18. Your birthday won't be shared with other people on this
                    platform
                  </p>
                </div>
              </div>

              {/* Drivers License Section */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    Drivers licences info <span className="text-sm font-normal text-gray-500">(optional)</span>
                  </h2>
                  <p className="text-xs text-gray-600 mt-1">We'll notify you about the status of your drivers license</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="license-no" className="text-sm font-medium text-gray-700">
                      Drivers license No.
                    </Label>
                    <Input
                      id="license-no"
                      type="text"
                      value={formData.driversLicenseNo}
                      onChange={(e) => handleInputChange("driversLicenseNo", e.target.value)}
                      className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="drivers-class" className="text-sm font-medium text-gray-700">
                      Drivers Class
                    </Label>
                    <Select
                      value={formData.driversClass}
                      onValueChange={(value) => handleInputChange("driversClass", value)}
                    >
                      <SelectTrigger className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="class-1">Class 1</SelectItem>
                        <SelectItem value="class-2">Class 2</SelectItem>
                        <SelectItem value="class-3">Class 3</SelectItem>
                        <SelectItem value="class-4">Class 4</SelectItem>
                        <SelectItem value="class-5">Class 5</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="license-expiry" className="text-sm font-medium text-gray-700">
                      Drivers license expiry date
                    </Label>
                    <div className="relative">
                      <Input
                        id="license-expiry"
                        type="text"
                        placeholder="dd/mm/yyyy"
                        value={formData.licenseExpiryDate}
                        onChange={(e) => handleInputChange("licenseExpiryDate", e.target.value)}
                        className="w-full h-10 px-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                      />
                      <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6 lg:mt-16 w-[80%] mx-auto">
            <Button
              onClick={handleProceed}
              className="flex-1 h-12 bg-primary hover:bg-primary text-white font-medium rounded-md"
            >
              Proceed
            </Button>
            <Button
              onClick={handleDoItLater}
              variant="outline"
              className="flex-1 h-12 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-md"
            >
              Do it later
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
