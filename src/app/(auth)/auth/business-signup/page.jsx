"use client";

import SignUp from "@/assets/images/Signup.png";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import SelectInput from "@/components/shared/input/SelectInput";
import TextInput from "@/components/shared/input/TextInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn UI select is available
import { setUser } from "@/store/Feature/user-slice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";

export default function SignupForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", formData);
    // dispatch(setUser(formData));
    router.push("/auth/business/signup-verify");
  };

  return (
    <div className="container mx-auto flex  max-w-[1600px]">
      <div className="grid md:grid-cols-2 py-10 w-full">
        <div className="">
          <Image src={SignUp} quality={100} className="mx-auto"></Image>
        </div>
        <div className="max-w-lg  p-6">
          <h1 className="text-2xl font-bold mb-2">Create a business account</h1>

          <p className="mb-6 text-gray">
            Already have  a business account?{" "}
            <Link href="/auth/signin-user" className="underline text-primary">
              Sign in
            </Link>
          </p>

          <div className="space-y-4">
            <TextInput value={name} setValue={setName} name={"name"} placeholder={""} label={"Business name"} />
            <TextInput value={email} setValue={setEmail} name={"email"} placeholder={""} label={"Business email"} />
            <TextInput value={password} setValue={setPassword} name={"password"} placeholder={""} label={"password"} />

            <div className="flex items-center gap-2 mb-6 text-xs">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0 text-[#1196AB]" />
              <span>
                At least 1 letter, a number or symbol, at least 8 characters.
              </span>
            </div>
            <SelectInput label={"Where is your business registered?"} name={"country"} value={country} setValue={setCountry} placeholder={"Please select the country"} options={[{ name: "United States", value: "usa" }, { name: "Canada", value: "canada" }, { name: "United Kingdom", value: "uk" }]} />

            <p className="text-xs text-gray-secondary my-4">If your business isn't registered, select your country of residence.</p>

            <PrimaryButton btnText={"Continue"} onClick={handleSubmit} />
          </div>

          <div className="mt-6">
            <p className="text-xs text-gray-secondary mt-2">
              By selecting Create personal account, you agree to our User Agreement and acknowledge reading our User Privacy Notice.
            </p>
          </div>

          <div className="mt-6 text-gray font-medium">
            <p>Create a personal account? <span className="text-primary underline cursor-pointer">Sign up here</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
