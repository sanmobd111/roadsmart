"use client";

import OutlineButton from "@/components/shared/buttons/OutlineButton";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import Container from "@/components/shared/container/Container";
import CountrySelectInput from "@/components/shared/input/CountrySelectInput";
import TextInput from "@/components/shared/input/TextInput";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function PhoneNumberVerification() {
  const router = useRouter();
  const { accountType } = useParams();


  const handleContinue = (e) => {
    e.preventDefault();

    router.push(`/auth/${accountType}/security-code`)
  };

  const handleCancel = () => {
    console.log("Phone verification cancelled");
    // Handle cancel logic here
  };



  return (
    <Container>
      <div className="text-center lg:w-min">
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

        <h1 className="text-2xl font-medium mb-4">Add your Phone Number</h1>

        <p className="text-gray-secondary mb-8 text-sm lg:text-nowrap">
          We'll text a security code to your mobile phone to finish setting up
          your account.
        </p>

        <form onSubmit={handleContinue}>
          <div className="grid grid-cols-2 gap-3 mb-6 text-left">
            <CountrySelectInput name={"countryCode"} label={"Country"} />
            <TextInput name={"phoneNumber"} placeholder={"22222222"} label={"Mobile number"} />
          </div>

          <p className="text-xs text-gray-500 mb-6 text-left">
            By selecting Continue, you agree to receive a text message with a
            security code. Standard rates may apply.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6 w-[80%] mx-auto">
            <OutlineButton btnText={"Cancel"} onClick={handleCancel} />
            <PrimaryButton btnText={"Continue"} onClick={handleContinue} />
          </div>
        </form>
      </div>

    </Container>
  );
}
