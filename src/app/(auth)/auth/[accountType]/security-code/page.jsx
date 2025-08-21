"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/shared/container/Container";
import { IoChevronBackSharp } from "react-icons/io5";
import { useParams, useRouter } from "next/navigation";
import VerifyCode from "@/components/auth/verify-code/VerifyCode";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/Feature/user-slice";

export default function VerificationSecurityCodeInput() {
  const [verificationCode, setVerificationCode] = useState(Array(6).fill(""));
  const [number] = useState("+260 9xxxxxx32");
  const inputRefs = useRef([]);
  const router = useRouter();
  const { accountType } = useParams();
  const dispatch = useDispatch()

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  const handleVerify = (e) => {
    e.preventDefault();
    const code = verificationCode.join("");
    console.log("Verification code:", code);
    dispatch(setUser({ email: "test@test.com", phoneNumber: number, verificationCode: code }))
    // Handle verification logic here
    router.push(`/auth/${accountType}/account-created`)
  };

  const handleCancel = () => {
    console.log("Verification cancelled");
    // Handle cancel logic here
  };

  const handleResendCode = () => {
    console.log("Resending verification code");
    // Handle resend code logic here
    setVerificationCode(Array(6).fill(""));
    inputRefs.current[0]?.focus();
  };



  return (
    <Container className="">
      <div className="max-w-sm w-full mx-auto">
        <div className="text-center">
          {/* <div className="-my-8 flex justify-center">
            <Image
              src={"/images/logo-2.svg"}
              quality={100}
              width={200}
              height={200}
              alt="Brand Logo"
            />
          </div> */}
          <div className="flex items-start justify-between gap-2 lg:-translate-x-6">
            <div className="p-2 lg:p-4 lg:text-lg bg-gray-100 rounded-full cursor-pointer" onClick={() => router.back()}>
              <IoChevronBackSharp />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold flex-1 text-center mb-4">
                Enter security Code
              </h1>
              <div className="mb-8 text-sm text-center">
                <p className="text-gray-secondary mb-2 inline">We sent a security code to </p>
                <p className="font-medium text-gray-900 mb-2 inline">{number}</p>
              </div>
            </div>
          </div>


          <form onSubmit={handleVerify}>
            <VerifyCode verificationCode={verificationCode} inputRefs={inputRefs} setVerificationCode={setVerificationCode} />

            <div className="grid grid-cols-2 gap-3 mb-6">
              <OutlineButton btnText={"Cancel"} onClick={handleCancel} />
              <PrimaryButton btnText={"Verify"} onClick={handleVerify} />
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Didn't get any code?{" "}
              <button
                onClick={handleResendCode}
                className="text-primary font-medium hover:underline"
              >
                Text me again
              </button>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
