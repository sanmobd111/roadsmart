"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import Container from "@/components/shared/container/Container"
import Link from "next/link"

export default function NewPasswordForm() {
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleDone = async () => {
    if (!newPassword.trim() || !confirmPassword.trim()) {
      return
    }

    if (newPassword !== confirmPassword) {
      console.log("Passwords don't match")
      return
    }

    setIsLoading(true)

    // Simulate API call to update password
    setTimeout(() => {
      console.log("Password updated successfully")
      setIsLoading(false)
      // Here you would typically redirect to login or show success message
    }, 2000)
  }

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <Container className="">
      <div className="w-full max-w-sm space-y-6 mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900">Reset your password</h1>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* New Password Field */}
          <div className="space-y-2">
            <Label htmlFor="new-password" className="text-sm font-medium text-gray-700">
              Please enter new password
            </Label>
            <div className="relative">
              <Input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full h-12 px-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
              <button
                type="button"
                onClick={toggleNewPasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showNewPassword ? <EyeOff className="h-5 w-5 text-primary" /> : <Eye className="h-5 w-5 text-primary" />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">
              Confirm new password
            </Label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-12 px-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5 text-primary" /> : <Eye className="h-5 w-5 text-primary" />}
              </button>
            </div>
          </div>

          {/* Done Button */}
          <Link href={"/success-screen"}>
            <Button
              onClick={handleDone}
              disabled={!newPassword.trim() || !confirmPassword.trim() || isLoading}
              className="w-full h-12 bg-primary hover:bg-primary disabled:bg-red-400 text-white font-medium rounded-md transition-colors"
            >
              {isLoading ? "Updating..." : "Done"}
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
