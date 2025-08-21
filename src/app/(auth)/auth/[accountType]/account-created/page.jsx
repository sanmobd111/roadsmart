"use client";
import OutlineButton from "@/components/shared/buttons/OutlineButton";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import Container from "@/components/shared/container/Container";
import TextInput from "@/components/shared/input/TextInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

export default function AccountSuccess() {
  const [username, setUsername] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);
  const router = useRouter();
  const { accountType } = useParams();

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    // Reset availability check when typing
    if (hasChecked) {
      setHasChecked(false);
      setIsAvailable(false);
    }

    // Simple check for username availability (would be replaced with API call)
    if (value.length > 2) {
      // Simulate checking username availability
      setTimeout(() => {
        setHasChecked(true);
        setIsAvailable(true);
      }, 500);
    }
  };

  const handleContinue = () => {
    console.log(
      "Continuing with username:",
      username || "No username (skipped)"
    );
    if (accountType === 'personal') {
      router.push("/personal-details");
    } else {
      router.push("/business-details");
    }
    // Handle continue logic here
  };

  const handleSkip = () => {
    // Handle skip logic here
    router.push("/");
  };

  return (
    <Container className="">
      <div className=" w-fit mx-auto">
        <div className="text-center">
          {/* Logo */}
          {/* <div className="-my-8 flex justify-center">
            <Image
              src={"/images/logo-2.svg"}
              quality={100}
              width={200}
              height={200}
              alt="Brand Logo"
            />
          </div> */}
          {/* Success Message */}
          <div className="mb-4 relative">
            <h2 className=" text-2xl lg:text-3xl font-medium relative">
              <FaCheckCircle className="h-4 w-4 lg:h-6 lg:w-6 text-primary lg:absolute top-1.5 -left-2 static inline mr-1" />
              <span className="font-bold">Congrats!</span> Your Account has been
              created
            </h2>
            <h1 className="text-3xl lg:text-[40px] font-bold my-6">
              Welcome to Road Smart Solutions
            </h1>
          </div>


          <div className="mb-6">
            <p className="text-gray-600 text-sm my-6">
              Create user name. You can change it later
            </p>

            <div className="lg:w-[80%] mx-auto space-y-4">
              <TextInput
                placeholder={"Username (optional)"}
                inputClassName={"pl-4"}
              />

              {hasChecked && isAvailable && username && (
                <div className="flex items-center gap-2 mt-2 text-left">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-sm text-gray-600">
                    Great. That one's all yours.
                  </p>
                </div>
              )}

              <div className="flex items-center mb-4 text-gray-secondary">
                <FaCircleCheck className="text-primary inline mr-2" />
                <p className="inline">Great. That one’s all yours.</p>
              </div>

              <div className="lg:w-[80%] grid grid-cols-2 gap-3 mb-6 mx-auto">
                <OutlineButton btnText={"Skip"} onClick={handleSkip} />
                <PrimaryButton btnText={"Continue"} onClick={handleContinue} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </Container>
  );
}
