import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook } from "lucide-react";
import SocialSignIn from "@/components/auth/social-sign-in/SocialSignIn";
import Container from "@/components/shared/container/Container";

export default function SignInPage() {
  return (
    <Container className="flex flex-col my-10 lg:my-16">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Sign In to your account
            </h1>
            <p className="text-gray-800 font-semibold">
              New to roadsmart?{" "}
              <Link href="/auth/signup" className="text-gray-900 underline">
                Create account
              </Link>
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">
                Email or mobile number
              </Label>
              <Input
                id="email"
                type="email"
                className="w-full px-3 py-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <Link href="/auth/signin-password">
              <Button className="w-full bg-primary hover:bg-primary text-white py-6 px-4 rounded-md font-medium">
                Continue
              </Button>
            </Link>
            <p className="text-sm text-gray my-4">By continuing, you agree to roadsmart’s <span className="text-gray-800 underline cursor-pointer">Conditions of Use and Privacy Notice</span>.</p>

            <SocialSignIn />
            <div className="text-start space-y-2">
              <Link
                href="/reset-password"
                className="text-gray-600 hover:text-gray-900  font-medium"
              >
                Forget password?
              </Link>
              <p className="text-gray mt-3">
                {"Don't have an account? "}
                <Link href="/signup" className="text-gray-900 font-medium">
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Container>
  )
}
