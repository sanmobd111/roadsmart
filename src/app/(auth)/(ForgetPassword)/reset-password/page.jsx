"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Container from "@/components/shared/container/Container"

export default function PasswordResetForm() {
  const [emailOrPhone, setEmailOrPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleGetCode = async () => {
    if (!emailOrPhone.trim()) {
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Reset code sent to:", emailOrPhone)
      setIsLoading(false)
      // Here you would typically show a success message or redirect
    }, 2000)
  }

  return (
    <Container className="">
      <div className="w-full max-w-lg space-y-6 mx-auto">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">Reset your password</h1>
          <p className="text-sm text-gray-600 leading-relaxed w-fit mx-auto text-left">
            Please enter your email address or mobile number associated <br className="hidden lg:block" /> with your account.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email-phone" className="text-sm font-medium text-gray-700">
              Email address or phone number
            </Label>
            <Input
              id="email-phone"
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder=""
            />
          </div>

          <Link href={"/verification-code"}>
            <Button
              onClick={handleGetCode}
              disabled={!emailOrPhone.trim() || isLoading}
              className="w-full h-12 bg-primary hover:bg-primary disabled:bg-red-400 text-white font-medium rounded-md transition-colors"
            >
              {isLoading ? "Sending..." : "Get code"}
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
