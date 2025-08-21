"use client"

import Container from "@/components/shared/container/Container"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PasswordSuccessScreen() {
  const handleSignIn = () => {
    console.log("Redirecting to sign in...")
    // Here you would typically redirect to the login page
    // window.location.href = '/login'
  }

  return (
    <Container className="">
      <div className="w-full max-w-sm space-y-8 text-center">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Congratulations</h1>
        </div>

        {/* Success Message */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex-shrink-0">
            <CheckCircle className="h-6 w-6 text-primary fill-current" />
          </div>
          <p className="text-sm text-gray-700">You have changed password successfully.</p>
        </div>

        {/* Sign In Button */}
        <div className="pt-4">
          <Link href={"/auth/signin-user"}>

            <Button
              onClick={handleSignIn}
              className="w-full h-12 bg-primary hover:bg-primary text-white font-medium rounded-md transition-colors"
            >
              Sign in
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
