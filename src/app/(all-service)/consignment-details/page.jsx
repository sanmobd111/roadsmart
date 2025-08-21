"use client";

import Container from '@/components/shared/container/Container';
import PrimaryBtn from '@/components/ui/PrimaryBtn';
// import { Textarea } from '@/components/ui/TextArea';
import BackButton from '@/components/shared/back-button/BackButton';
import TextInput from '@/components/ui/TextInput';
import { setRequestedVehicle } from '@/store/Feature/request-data-slice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { useDispatch } from 'react-redux';

export default function page() {
  const [currency, setCurrency] = useState("usd");
  const [item, setItem] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");
  const [details, setDetails] = useState("");
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const router = useRouter()


  const handleSubmit = () => {
    dispatch(setRequestedVehicle([{ manufacturer: item, location, designation, currency, details, numberOfItems, type: "marine-insurance" }]))
    router.push("/review-services")
  }

  const handlePrev = () => {
    console.log("first")
    router.back();
  };
  return (
    <Container className={"my-6 lg:my-20"}>
      <div className=''>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-secondary mb-6 text-center lg:text-nowrap relative pl-10 lg:pl-0">
          <BackButton className={"lg:-translate-x-[10vw] top-0 left-4"} onclick={handlePrev} />
          Tell us about your consignment
        </h2>
        <div className='max-w-xl mx-auto space-y-4'>
          <TextInput inputProps={{ placeholder: "Type/Nature of Goods", className: "w-full", onChange: (e) => setItem(e.target.value), value: item }} containerClassName={"!mb-0"} />
          <p className='text-xs !mt-1 ml-4 !text-gray-500'>Ex. Vehicles, trucks, Equipment</p>
          <TextInput inputProps={{ placeholder: "Consignment location ", className: "w-full pl-10", onChange: (e) => setLocation(e.target.value), value: location }} Icon={<CiLocationOn />} iconClassName={"left-3 text-red-500"} hasIcon />
          <TextInput inputProps={{ placeholder: "Destination", className: "w-full pl-10", onChange: (e) => setDesignation(e.target.value), value: designation }} Icon={<CiLocationOn />} iconClassName={"left-3 text-red-500"} hasIcon />
          <TextInput inputProps={{ placeholder: "Mode of transport ex. land", className: "w-full pl-10", onChange: (e) => setDesignation(e.target.value), value: designation }} Icon={<CiLocationOn />} iconClassName={"left-3 text-red-500"} hasIcon />
          <div className="lg:grid grid-cols-2 gap-4">
            {/* <SelectInput defaultValue="Value" setValue={setCurrency} options={[{ label: "USD", value: "usd" }, { label: "EUR", value: "eur" }, { label: "BDT", value: "bdt" }]} containerClassName={"w-[48%]"} /> */}
            <ValueInput value={value} setValue={setValue} currency={currency} setCurrency={setCurrency} />
            <TextInput inputProps={{ placeholder: "Number of items" }} containerClassName={"w-full"} type="number" onChange={(e) => setNumberOfItems(e.target.value)} value={numberOfItems} />
          </div>
          <textarea className={"w-full h-[100px] border-2 rounded-md p-4 text-sm resize-none outline-1 focus:outline-primary focus:ring-primary"} onChange={(e) => setDetails(e.target.value)} value={details} placeholder={"Provide details on the route that will be used "} />
          {/* < Link href={"/review-services"}> */}
          <PrimaryBtn onClick={handleSubmit} text={"Next"} className={"ml-auto"} />
          {/* </Link> */}
        </div>
      </div>
    </Container>
  )
}

import { ChevronDown } from "lucide-react";

function ValueInput({
  value,
  setValue,
  currency,
  setCurrency,
  currencies = ["USD", "EUR", "GBP"],
}) {
  return (
    <div className="flex items-center justify-between border-2 border-gray-300 rounded-lg px-4 py-2 w-full bg-white">
      {/* Left Side Input */}
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Value"
        className="w-full outline-none text-gray-700 placeholder:text-gray-400 placeholder:font-medium text-sm"
      />

      {/* Right Side Dropdown */}
      <div className="flex items-center gap-1 ml-2 relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="appearance-none bg-transparent pr-6 font-semibold text-gray-400 cursor-pointer outline-none"
        >
          {currencies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <ChevronDown size={16} className="absolute right-0 pointer-events-none text-gray-600" />
      </div>
    </div>
  );
}

