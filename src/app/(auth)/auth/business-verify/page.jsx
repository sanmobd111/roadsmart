"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronUp, ChevronDown, Upload } from "lucide-react"

export default function BusinessVerificationForm() {
  const [formData, setFormData] = useState({
    nameOnCard: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    savePaymentMethod: false,
    useBusinessAddress: false,
    taxId: "",
    invitationCode: "",
    businessWebsite: "",
  })

  const [expandedSections, setExpandedSections] = useState({
    creditCard: true,
    taxId: false,
    invitationCode: false,
    businessWebsite: false,
    officialDocuments: false,
  })

  const [uploadedFiles, setUploadedFiles] = useState({
    officialDocument: null,
    letterheadDocument: null,
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleCheckboxChange = (field, checked) => {
    setFormData((prev) => ({
      ...prev,
      [field]: checked,
    }))
  }

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section ],
    }))
  }

  const handleFileUpload = (field, file) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [field]: file,
    }))
  }

  const handleSubmit = () => {
    console.log("Form data:", formData)
    console.log("Uploaded files:", uploadedFiles)
    // Handle form submission
  }

  const handleSkip = () => {
    console.log("User chose to skip verification")
    // Handle skip action
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-10 p-4">
      <div className="w-full max-w-lg space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">Get verified quickly (optional)</h1>
          <p className="text-sm text-gray-600">
            Choose any of the following options to help speed up the verification process
          </p>
        </div>

        {/* Business Credit Card Section */}
        <Card className="border border-gray-200">
          <CardContent className="p-0">
            <button
              onClick={() => toggleSection("creditCard")}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
            >
              <h2 className="text-lg font-medium text-gray-900">Business Credit Card</h2>
              {expandedSections.creditCard ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>

            {expandedSections.creditCard && (
              <div className="px-4 pb-4 space-y-4 border-t border-gray-100">
                <div className="space-y-2">
                  <Label htmlFor="name-on-card" className="text-sm text-gray-700">
                    Name on card
                  </Label>
                  <Input
                    id="name-on-card"
                    type="text"
                    value={formData.nameOnCard}
                    onChange={(e) => handleInputChange("nameOnCard", e.target.value)}
                    className="w-full h-10 px-3 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="card-number" className="text-sm text-gray-700">
                    Card number
                  </Label>
                  <Input
                    id="card-number"
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                    className="w-full h-10 px-3 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiration-month" className="text-sm text-gray-700">
                      Expiration date(Month)
                    </Label>
                    <Input
                      id="expiration-month"
                      type="text"
                      value={formData.expirationMonth}
                      onChange={(e) => handleInputChange("expirationMonth", e.target.value)}
                      className="w-full h-10 px-3 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expiration-year" className="text-sm text-gray-700">
                      Year
                    </Label>
                    <Input
                      id="expiration-year"
                      type="text"
                      value={formData.expirationYear}
                      onChange={(e) => handleInputChange("expirationYear", e.target.value)}
                      className="w-full h-10 px-3 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="save-payment"
                    checked={formData.savePaymentMethod}
                    onCheckedChange={(checked) => handleCheckboxChange("savePaymentMethod", checked)}
                  />
                  <Label htmlFor="save-payment" className="text-sm text-gray-700 cursor-pointer">
                    Save this payment method to my account
                  </Label>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-900">Billing Address</h3>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="use-business-address"
                      checked={formData.useBusinessAddress}
                      onCheckedChange={(checked) => handleCheckboxChange("useBusinessAddress", checked )}
                    />
                    <Label htmlFor="use-business-address" className="text-sm text-gray-700 cursor-pointer">
                      Use my business address
                    </Label>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tax ID Section */}
        <Card className="border border-gray-200">
          <CardContent className="p-0">
            <button
              onClick={() => toggleSection("taxId")}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
            >
              <h2 className="text-lg font-medium text-gray-900">Tax ID, EIN or SSN</h2>
              {expandedSections.taxId ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>

            {expandedSections.taxId && (
              <div className="px-4 pb-4 space-y-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Enter your business tax ID or employer ID number (EIN). If you're a sole proprietor, enter your social
                  security number (SSN).
                </p>
                <div className="space-y-2">
                  <Label htmlFor="tax-id" className="text-sm text-gray-700">
                    Tax ID, EIN or SSN
                  </Label>
                  <Input
                    id="tax-id"
                    type="text"
                    value={formData.taxId}
                    onChange={(e) => handleInputChange("taxId", e.target.value)}
                    className="w-full h-10 px-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Invitation Code Section */}
        <Card className="border border-gray-200">
          <CardContent className="p-0">
            <button
              onClick={() => toggleSection("invitationCode")}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
            >
              <h2 className="text-lg font-medium text-gray-900">Invitation Code</h2>
              {expandedSections.invitationCode ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>

            {expandedSections.invitationCode && (
              <div className="px-4 pb-4 space-y-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Your invitation code is given to you by roadSmart Business to verify your account. Note: this is
                  different than your one-time password.
                </p>
                <div className="space-y-2">
                  <Label htmlFor="invitation-code" className="text-sm text-gray-700">
                    Invitation code
                  </Label>
                  <Input
                    id="invitation-code"
                    type="text"
                    value={formData.invitationCode}
                    onChange={(e) => handleInputChange("invitationCode", e.target.value)}
                    className="w-full h-10 px-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Business Website Section */}
        <Card className="border border-gray-200">
          <CardContent className="p-0">
            <button
              onClick={() => toggleSection("businessWebsite")}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
            >
              <h2 className="text-lg font-medium text-gray-900">Business Website Url</h2>
              {expandedSections.businessWebsite ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>

            {expandedSections.businessWebsite && (
              <div className="px-4 pb-4 space-y-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout.
                </p>
                <div className="space-y-2">
                  <Label htmlFor="business-website" className="text-sm text-gray-700">
                    Business website url
                  </Label>
                  <Input
                    id="business-website"
                    type="url"
                    value={formData.businessWebsite}
                    onChange={(e) => handleInputChange("businessWebsite", e.target.value)}
                    className="w-full h-10 px-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Official Documents Section */}
        <Card className="border border-gray-200">
          <CardContent className="p-0">
            <button
              onClick={() => toggleSection("officialDocuments")}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
            >
              <h2 className="text-lg font-medium text-gray-900">Official documents</h2>
              {expandedSections.officialDocuments ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>

            {expandedSections.officialDocuments && (
              <div className="px-4 pb-4 space-y-6 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Upload a document on official letterhead that shows your organization's status.
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm text-gray-700">
                      Official documents that contain your EIN, or sole proprietor, or individual status.
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        type="file"
                        accept=".pdf,.jpeg,.jpg"
                        onChange={(e) => handleFileUpload("officialDocument", e.target.files?.[0] || null)}
                        className="flex-1 h-10 px-3 border border-gray-300 rounded-md"
                      />
                      <Button variant="outline" size="sm" className="px-3">
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">PDF or JPEG format, size limit of 10 MB</p>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm text-gray-700">
                      Official letterhead document with employment confirmation.
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        type="file"
                        accept=".pdf,.jpeg,.jpg"
                        onChange={(e) => handleFileUpload("letterheadDocument", e.target.files?.[0] || null)}
                        className="flex-1 h-10 px-3 border border-gray-300 rounded-md"
                      />
                      <Button variant="outline" size="sm" className="px-3">
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">PDF or JPEG format, size limit of 10 MB</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <Button onClick={handleSubmit} className="flex-1 h-12 bg-primary hover:bg-primary text-white font-medium">
            Submit
          </Button>
          <Button
            onClick={handleSkip}
            variant="outline"
            className="flex-1 h-12 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
          >
            Skip this step
          </Button>
        </div>
      </div>
    </div>
  )
}
