import { Button } from '@/components/ui/button';
import SelectInput from '@/components/ui/SelectInput';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { IoLocationOutline } from 'react-icons/io5';
import { TiArrowSortedDown } from 'react-icons/ti';
// import SelectInput from './SelectInput';

export default function FinanceContent() {
    const [step, setStep] = useState(1);
    const [downPayment, setDownPayment] = useState("K20");
    const [term, setTerm] = useState("12 months");
    const [interestRate, setInterestRate] = useState("10%");
    const [fees, setFees] = useState("$1000");
    const [carName, setCarName] = useState("BMW");
    const [carAmount, setCarAmount] = useState("100");
    const [payment, setPayment] = useState("100");
    const [dawnPayment, setDawnPayment] = useState("100");
    console.log(step)
    return (
        <div className="space-y-6">
            {
                step === 1 && (
                    <>
                        <div className="">
                            <div className="text-3xl font-bold text-gray-900">
                                ZMW 295/month
                            </div>
                            <div className="text-sm text-gray-600 flex items-center mt-1">
                                est 10 months/K20k down
                                <ChevronDown className="w-4 h-4 ml-1 text-primary" />
                            </div>
                        </div>

                        <div className="w-[90%] mx-auto">
                            <div className="space-y-4  p-8 border border-gray rounded-2xl">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">
                                        Car Price
                                    </label>
                                    <input
                                        type="text"
                                        value="K6461"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">
                                        Down Payment
                                    </label>
                                    <input
                                        type="text"
                                        value={downPayment}
                                        onChange={(e) => setDownPayment(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                    />
                                </div>


                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">
                                        Term
                                    </label>
                                    <input
                                        type="text"
                                        value={term}
                                        onChange={(e) => setTerm(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">
                                        Interest Rate
                                    </label>
                                    <input
                                        type="text"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">
                                        Fees
                                    </label>
                                    <input
                                        type="text"
                                        value={fees}
                                        onChange={(e) => setFees(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                    />
                                </div>
                                <div className="flex justify-between items-center py-3 border-t">
                                    <span className="text-gray-600">
                                        Est. Monthly Payment
                                    </span>
                                    <span className="text-xl font-bold text-primary">
                                        $295.00
                                    </span>
                                </div>

                                <div className="w-fit mx-auto" onClick={() => setStep(2)}>
                                    <Button className="bg-primary hover:bg-primary text-white py-3 px-10 font-medium w-fit mx-auto">
                                        Apply Now
                                    </Button>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-sm">
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Compare offers
                                </a>
                                <div className="text-right flex flex-col items-center">
                                    <div className="text-gray-600">
                                        Sold by:{" "}
                                        <Link
                                            href="/seller-profile"
                                            className="underline"
                                        >
                                            Closewatcg
                                        </Link>
                                    </div>
                                    <div className="text-primary text-xs flex items-center gap-2">
                                        <BiLike className="text-primary" /> 100% Positive
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {
                step === 2 && (
                    <>
                        <div className="">
                            <div className="text-3xl font-bold text-gray-900">
                                Request Finance
                            </div>
                        </div>

                        <div className="w-[90%] mx-auto">
                            <div className="p-8 border border-gray rounded-2xl space-y-4 ">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">
                                        Car Name
                                    </label>
                                    <input
                                        type="text"
                                        value="K6461"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">
                                        Car Amount
                                    </label>
                                    <input
                                        type="text"
                                        value={carAmount}
                                        onChange={(e) => setCarAmount(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">
                                        Payment Period (In Month)
                                    </label>
                                    <SelectInput defaultValue="Currency" setValue={setCarAmount} options={[{ label: "USD", value: "usd" }, { label: "EUR", value: "eur" }, { label: "BDT", value: "bdt" }]} containerClassName={"w-full"} icon={<TiArrowSortedDown className="text-primary" />} />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">
                                        Dawn Payment
                                    </label>
                                    <SelectInput defaultValue="Currency" setValue={setCarAmount} options={[{ label: "USD", value: "usd" }, { label: "EUR", value: "eur" }, { label: "BDT", value: "bdt" }]} containerClassName={"w-full"} icon={<TiArrowSortedDown className="text-primary" />} />
                                </div>

                                <div className="w-fit mx-auto" onClick={() => setStep(3)}>
                                    <Button className="bg-primary hover:bg-primary text-white py-3 px-10 font-medium w-fit mx-auto">
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

            {
                step === 3 && (
                    <>
                        <div className="">
                            <div className="text-3xl font-bold text-gray-900">
                                ZMW 450 <span className='text-sm font-normal text-gray'>2days</span>
                            </div>
                        </div>
                        <div className='flex gap-4 pl-10 py-3 items-center bg-secondary rounded-lg text-xl'>

                            <IoLocationOutline className='text-primary' />
                            <span>Lusaka</span>

                        </div>

                        <div className="">
                            <div className="space-y-4">
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-2">

                                            From
                                        </label>
                                        <input
                                            type="text"
                                            value="K6461"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-gray-600 mb-2">
                                            To
                                        </label>
                                        <input
                                            type="text"
                                            value={downPayment}
                                            onChange={(e) => setDownPayment(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                        />
                                    </div>
                                </div>

                                <div className="w-fit" onClick={() => setStep(2)}>
                                    <Button className="bg-primary hover:bg-primary text-white py-3 px-10 font-medium w-fit mx-auto">
                                        Request
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}
