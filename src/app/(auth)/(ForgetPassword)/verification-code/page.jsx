"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Info } from "lucide-react"
import Container from "@/components/shared/container/Container"
import Link from "next/link"
import { FaCircleInfo } from "react-icons/fa6"

export default function VerificationCodeForm() {
  const [verificationCode, setVerificationCode] = useState("")
  const [countdown, setCountdown] = useState(85)
  const [canResend, setCanResend] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Countdown timer for resend functionality
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [countdown])

  const handleResendCode = () => {
    if (!canResend) return

    console.log("Resending verification code...")
    setCountdown(85)
    setCanResend(false)
    // Here you would typically make an API call to resend the code
  }

  const handleResetPassword = async () => {
    if (!verificationCode.trim()) {
      return
    }

    setIsLoading(true)

    // Simulate API call to verify code and reset password
    setTimeout(() => {
      console.log("Verification code submitted:", verificationCode)
      setIsLoading(false)
      // Here you would typically verify the code and proceed to password reset
    }, 2000)
  }

  return (
    <Container className="">
      <div className="w-full max-w-md space-y-6 mx-auto">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-semibold text-gray-900">Enter Verification Code</h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            For your security, we've sent the code to your email <span className="font-medium">g*****@gmail.com</span>.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Verification Code Input */}
          <div className="space-y-3">
            <Input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full h-12 px-4 text-center text-lg tracking-widest border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder=""
              maxLength={6}
            />

            {/* Resend Code Link */}
            <div className="text-center">
              <button
                onClick={handleResendCode}
                disabled={!canResend}
                className={`text-sm underline ${canResend ? "text-gray-900 hover:text-gray-700 cursor-pointer" : "text-gray-400 cursor-not-allowed"
                  }`}
              >
                Resend code
              </button>
            </div>
          </div>

          {/* Info Message */}
          <div className="flex items-start gap-2 p-3">
            <FaCircleInfo className="h-4 w-4 text-[#1196AB] mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700">Please wait {countdown} seconds before requesting another code.</p>
          </div>

          {/* Reset Password Button */}
          <Link href={"/new-password"}>
            <Button
              onClick={handleResetPassword}
              disabled={!verificationCode.trim() || isLoading}
              className="w-full h-12 bg-primary hover:bg-primary disabled:bg-red-400 text-white font-medium rounded-md transition-colors"
            >
              {isLoading ? "Verifying..." : "Reset password"}
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
