"use client"

import FileUpload from "@/components/shared/file-upload/FileUpload"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertTriangle } from 'lucide-react'; // For the warning icon
import Link from "next/link"
import { useState } from "react"

export default function BusinessVerificationDashboard() {
  const [invitationCode, setInvitationCode] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState({
    officialDocument: null,
    letterheadDocument: null,
  })

  const handleFileUpload = (field, file) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [field]: file,
    }))
  }

  const handleSubmitDocuments = () => {
  }

  const handleSubmitInvitation = () => {
  }

  const handleEditInformation = () => {
  }

  const handleStartBrowsing = () => {
  }

  return (
    <Container>
      <div className="max-w-lg mx-auto space-y-6">
        <div className="">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Manage Your Business <br className="hidden lg:block" /> Registration</h1>
          <p className="text-sm text-gray-secondary mb-6">Your application was submitted on <span className="text-gray-black font-bold">Thursday, March 20, <br className="hidden lg:block" /> 2025</span></p>

          {/* Warning Message */}
          <div className="bg-orange-50 border-b-4 border-orange-500 text-orange-700 p-4 flex items-start space-x-3 rounded-md" role="alert">
            <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xl font-semibold mb-1 text-gray-black">We were unable to verify your business account.</h2>
              <p className="text-sm lg:text-lg text-gray-black">
                See below to upload more information to help us verify your business. We will reply
                within 24 hours of when your new information is received. In the meantime,
                to avoid delays, do not open new business accounts.
              </p>
            </div>
          </div>
        </div>
        {/* Official Documents Section */}
        <Card className="border border-gray-200">
          <CardContent className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl  font-semibold text-gray-900 mb-2">Official documents</h2>
              <p className="text-sm text-gray-600">
                Upload a document on official letterhead that shows your organization's status.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="text-sm text-gray-700">
                  Official documents that contain your EIN, or sole proprietor, or individual status.
                </Label>
                <FileInput />
                <p className="text-xs text-gray-500">PDF or JPEG format, size limit of 10 MB</p>
              </div>

              <div className="space-y-3">
                <Label className="text-sm text-gray-700">
                  Official letterhead document with employment confirmation.
                </Label>
                <FileInput />
                <p className="text-xs text-gray-500">PDF or JPEG format, size limit of 10 MB</p>
              </div>

              <Button
                onClick={handleSubmitDocuments}
                className="w-full h-12 bg-primary hover:bg-primary text-white font-medium"
              >
                Submit for verification
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Invitation Code Section */}
        <Card className="border border-gray-200">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-bold text-gray-900">Use an Invitation Code</h2>
            <p className="text-sm text-gray-600">
              Your invitation code is given to you by roadSmart Business to instantly verify your account. It's
              different to your OTP.
            </p>

            <div className="space-y-3">
              <Label htmlFor="invitation-code" className="text-sm text-gray-700">
                Invitation code
              </Label>
              <Input
                id="invitation-code"
                type="text"
                value={invitationCode}
                onChange={(e) => setInvitationCode(e.target.value)}
                className="w-full h-10 px-3 border border-gray-300 rounded-md"
              />
            </div>

            <Button
              onClick={handleSubmitInvitation}
              className="w-full h-12 bg-primary hover:bg-primary text-white font-medium"
            >
              Submit for verification
            </Button>
          </CardContent>
        </Card>

        {/* Business Info Section */}
        <Card className="border border-gray-200">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-bold text-gray-900">Business Info</h2>

            <div className="space-y-4">
              <div>
                <Label className="text-sm font-semibold text-gray-700">Registered business name</Label>
                <p className="text-sm text-gray-900 mt-1">Oraion Capital</p>
              </div>

              <div>
                <Label className="text-sm font-semibold text-gray-700">Address</Label>
                <div className="text-sm text-gray-900 mt-1">
                  <p>2425 Makishi Road</p>
                  <p>Thorn Park, 10101</p>
                  <p>Lusaka, ZM</p>
                </div>
              </div>

              <div>
                <Label className="text-sm font-semibold text-gray-700">Business Phone</Label>
                <p className="text-sm text-gray-900 mt-1">+260978500078</p>
              </div>

              <Button
                onClick={handleEditInformation}
                variant="outline"
                className="w-full h-10 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Edit information
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Browse Section */}
        <div className="text-center space-y-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900">Want to browse in the meantime?</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Explore business-only prices and selection while you wait for verification
          </p>
          <Link href={"/"}>
            <Button
              onClick={handleStartBrowsing}
              className="w-full max-w-sm h-12 bg-primary hover:bg-primary text-white font-medium"
            >
              Start browsing
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

import { UploadCloud } from 'lucide-react'; // For the cloud upload icon
import React from 'react'
import Container from "@/components/shared/container/Container"

function FileInput() {
  // State to hold the selected file name
  const [fileName, setFileName] = React.useState('');
  // Ref for the hidden file input
  const fileInputRef = React.useRef(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      // You can also handle the file upload logic here, e.g., send to server
    } else {
      setFileName('');
    }
  };

  // Function to trigger the hidden file input click
  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full flex items-center space-x-4 bg-white rounded-lg">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden" // Hide the default file input
      />

      {/* Input Field to display file name */}
      <Input
        type="text"
        value={fileName}
        readOnly // Make it read-only as it's for display
        onClick={handleUploadButtonClick} // Added onClick to trigger file input
        className="flex-grow border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12 cursor-pointer" // Added cursor-pointer
      />

      {/* Upload Button */}
      <button
        onClick={handleUploadButtonClick}
        className="w-12 h-12 flex items-center justify-center border-2 border-dashed border-red-300 rounded-md text-primary hover:bg-red-50 transition-colors duration-200 flex-shrink-0"
        aria-label="Upload file"
      >
        <UploadCloud size={24} />
      </button>
    </div>
  );
}

