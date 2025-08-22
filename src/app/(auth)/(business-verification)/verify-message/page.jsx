"use client"

import Container from "@/components/shared/container/Container"
import { Button } from "@/components/ui/button"
import { Package, TrendingUp, Zap } from "lucide-react"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function VerificationLandingPage() {
  const router = useRouter();
  const handleCheckStatus = () => {
    // router.push("/verify-status")
  }

  const handleStartBrowsing = () => {
  }

  return (
    <Container className="">
      <div className="max-w-[1600px] mx-auto">
        {/* Hero Section */}
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Thank you.
                  <br />
                  We are verifying your information.
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We'll email you to notify your verification status in 24 to 48 hours. You may also check your status
                  at any time using the link below.
                </p>
              </div>
              <Link href={"/verify-status"}>
                <Button
                  onClick={handleCheckStatus}
                  variant="outline"
                  className="px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Check Status
                </Button>
              </Link>
            </div>

            {/* Right Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80">
                {/* Illustration placeholder - using simple shapes to represent the verification graphic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Main card/document */}
                    <div className="w-32 h-20 bg-primary rounded-lg flex items-center justify-center transform rotate-12">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                      </div>
                    </div>

                    {/* Coins */}
                    <div className="absolute -top-8 -left-8 w-12 h-12 bg-yellow-400 rounded-full border-4 border-yellow-300"></div>
                    <div className="absolute -bottom-4 -right-6 w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-300"></div>

                    {/* Dotted lines */}
                    <div className="absolute -top-4 left-16 w-24 h-px border-t-2 border-dashed border-gray-300"></div>
                    <div className="absolute top-8 -right-12 w-16 h-px border-t-2 border-dashed border-gray-300 transform rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Browse Section */}
        <div className="py-16 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Want to browse in the meantime?</h2>
            <p className="text-lg text-gray-600">
              Explore business-only prices and selection while you wait for the verification.
            </p>
            <Button onClick={handleStartBrowsing} className="bg-primary hover:bg-primary text-white px-8 py-3 text-lg">
              Start Browsing
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                  <Zap className="w-16 h-16 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Save on over 50 million items with business-only pricing, Quantity Discounts, and Progressive Discounts.
              </h3>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Enjoy free features that empower your purchasing team such as multi-user setting and business analytics.
              </h3>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                  <Package className="w-16 h-16 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Explore the membership suited for work. Gain more insights with member exclusive benefits.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
