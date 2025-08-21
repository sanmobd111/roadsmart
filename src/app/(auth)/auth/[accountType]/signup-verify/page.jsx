"use client";

import VerifyCode from "@/components/auth/verify-code/VerifyCode";
import OutlineButton from "@/components/shared/buttons/OutlineButton";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import Container from "@/components/shared/container/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function VerificationCodeInput() {
  const [verificationCode, setVerificationCode] = useState(Array(6).fill(""));
  const [email] = useState("dorcus@roadsmartsolutions.com");
  const inputRefs = useRef([]);
  const router = useRouter();
  const { accountType } = useParams();

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  const handleVerify = (e) => {
    e.preventDefault();
    const code = verificationCode.join("");
    console.log("Verification code:", code);
    // Handle verification logic here
    router.push(`/auth/${accountType}/add-phone`)
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
      <div className="max-w-md w-min mx-auto">
        <div className="text-center">
          <h1 className=" text-2xl md:text-3xl font-bold mb-4 lg:mb-10 text-nowrap">
            Verify Your Email Address
          </h1>

          <div className="mb-4">
            <p className="text-gray-secondary mb-2 text-sm">We emailed a security code to</p>
            <p className="font-bold text-gray-900 mb-2">{email}</p>
            <p className="text-sm text-gray-secondary">
              If you can't find it, check your spam folder.{" "}
              <Link
                href="/change-email"
                className="text-black font-medium hover:underline"
              >
                Wrong email?
              </Link>
            </p>
          </div>

          <form onSubmit={handleVerify}>
            <VerifyCode verificationCode={verificationCode} inputRefs={inputRefs} setVerificationCode={setVerificationCode} />

            <div className="grid grid-cols-2 gap-3 mb-6">
              <OutlineButton btnText={"Cancel"} onClick={handleCancel} />
              <PrimaryButton btnText={"Verify"} onClick={handleVerify} />
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-secondary">
              Didn't get any code?{" "}
              <button
                onClick={handleResendCode}
                className="text-primary font-medium hover:underline"
              >
                Get another code
              </button>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
