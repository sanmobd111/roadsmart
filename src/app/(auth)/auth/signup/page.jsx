"use client";

import SignUp from "@/assets/images/Signup.png";
import SocialSignIn from "@/components/auth/social-sign-in/SocialSignIn";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import Container from "@/components/shared/container/Container";
import TextInput from "@/components/shared/input/TextInput";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

export default function SignupForm() {
  const router = useRouter()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    router.push("/auth/personal/signup-verify")
  }
  return (
    <Container className="">
      <div className="grid md:grid-cols-2 w-full">
        <div className="">
          <Image src={SignUp} quality={100} className="mx-auto"></Image>
        </div>
        <div className="lg:max-w-lg">
          <h1 className="text-2xl font-bold mb-2">Create an account</h1>

          <p className=" mb-6 text-gray">
            Already have an account?{" "}
            <Link href="/auth/signin-user" className="underline">
              Sign in
            </Link>
          </p>

          <div className="space-y-4 pb-6 border-gray-tertiary border-b">
            <div className="grid grid-cols-2 gap-4">
              <TextInput value={firstName} setValue={setFirstName} name={"firstName"} placeholder={""} label={"First name"} />
              <TextInput value={lastName} setValue={setLastName} name={"lastName"} placeholder={""} label={"Last name"} />
            </div>

            <TextInput value={email} setValue={setEmail} name={"email"} placeholder={""} label={"Email"} />
            <TextInput value={password} setValue={setPassword} name={"password"} placeholder={""} label={"password"} />

            <div className="flex items-center gap-2 mb-6 text-xs">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0 text-[#1196AB]" />
              <span>
                At least 1 letter, a number or symbol, at least 8 characters.
              </span>
            </div>

            <PrimaryButton btnText={"Continue"} onClick={handleSubmit} />
          </div>

          <div className="mt-6">
            <p className="mb-2 text-[#343434] font-bold">Are you a business or non-profit?</p>
            <Link
              href="/auth/business-signup"
              className="text-xs text-[#CA2626] hover:underline"
            >
              Create business account
            </Link>

            <p className="text-xs text-gray mt-2">
              By creating an account you agree to our User Agreement and
              acknowledge reading our User Privacy Notice.
            </p>
          </div>
          <SocialSignIn />
        </div>
      </div>
    </Container>
  );
}
