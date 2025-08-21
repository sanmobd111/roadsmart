"use client";

import CoverageCard from '@/components/coverage-card/CoverageCard';
import ProgressIndicator from '@/components/progressIndicator/ProgressIndicator';
import BackButton from '@/components/shared/back-button/BackButton';
import Container from '@/components/shared/container/Container';
import PrimaryBtn from '@/components/ui/PrimaryBtn';
// import { setRequestedVehicle } from '@/store/Feature/request-data-slice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const options = [
  { id: 1, name: "Comprehensive", description: "Loss or damage of insured vehicle from accident, fire theft  and legal liabilities to third parties for bodily injury and property damage", hasSumInsured: true },
  { id: 2, name: "Third Party", description: "Covers damage to other people’s vehicles or property if you are at fault in an accident, plus damage to your own car if it’s caused by fire or theft " },
  { id: 3, name: "Third Party Fire  and Theft", description: "Covers property damage, bodily injury and death of third parties resulting from an accident for which you were at fault " },
  { id: 4, name: "Act Only Cover", description: "Covers legal responsibility for damages or injuries caused to third parties due to an accident " },
];

export default function coverage() {
  const [sumInsured, setSumInsured] = useState([]);
  const [allSumInsured, setAllSumInsured] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [allSelectedOptions, setAllSelectedOptions] = useState([]);

  const [currentStep, setCurrentStep] = useState(1)
  const router = useRouter()
  const vehicles = useSelector((state) => state?.vehicle?.vehicles);
  const selectedVehicles = vehicles.filter((vehicle) => vehicle.selected)
  const drivers = useSelector((state) => state?.driver?.drivers);
  const selectedDrivers = drivers.filter((driver) => driver.selected)
  const dispatch = useDispatch();

  const handleNext = () => {
    if (currentStep === selectedVehicles.length + selectedDrivers.length) {
      dispatch(setRequestedVehicle([...allSumInsured,]));
      router.push("/use-type")
      return
    } else if (currentStep <= selectedVehicles.length) {
      setAllSumInsured(prev => [...prev, { ...selectedVehicles[currentStep - 1], ...sumInsured, type: "motor-insurance-vehicle" }]);
      setSumInsured([])
    } else {
      setSelectedOption(null)
    }

    setCurrentStep(currentStep + 1)
  }

  console.log(allSumInsured, "allSumInsured")

  const handlePrev = () => {
    if (currentStep === 1) {
      // Go back to previous page
      router.back();
      return;
    }

    const totalVehicles = selectedVehicles.length;

    // Going back from a driver step
    if (currentStep > totalVehicles + 1) {
      setCurrentStep(prev => prev - 1);

      // Remove last selected driver option
      setAllSelectedOptions(prev => prev.slice(0, -1));

      const previousDriver = allSelectedOptions[currentStep - totalVehicles - 2];
      setSelectedOption(previousDriver?.selectedOption || null);
    }

    // Going back from a vehicle step
    else if (currentStep <= totalVehicles + 1) {
      setCurrentStep(prev => prev - 1);

      // Remove last sum insured entry
      setAllSumInsured(prev => prev.slice(0, -1));

      const previousVehicle = allSumInsured[currentStep - 2];
      setSumInsured(previousVehicle || []);
    }
  };

  return (
    <Container>
      <div>
        <ProgressIndicator className={"mt-10 w-[90%]"} vehicles={selectedVehicles} currentStep={currentStep} drivers={selectedDrivers} />
        {
          currentStep <= selectedVehicles.length && <Step1 setCurrentStep={setCurrentStep} sumInsured={sumInsured} handleNext={handleNext} setSumInsured={setSumInsured} handlePrev={handlePrev} />
        }
        {
          currentStep > selectedVehicles.length && <Step2 handleNext={handleNext} selectedOption={selectedOption} setSelectedOption={setSelectedOption} allSelectedOptions={allSelectedOptions} setAllSelectedOptions={setAllSelectedOptions} handlePrev={handlePrev} />
        }
      </div>
    </Container>
  )
}

function Step1({ sumInsured, handleNext, setSumInsured, handlePrev }) {
  const [isSumInsuredOpen, setIsSumInsuredOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className='max-w-2xl mx-auto pb-10'>
      <h1
        type="button"
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-secondary mb-6 text-center lg:text-nowrap relative pl-10 lg:pl-0"
      >
        <BackButton className={"lg:-translate-x-[10vw] top-0"} onclick={handlePrev} />
        Choose your policy currency
      </h1>
      <div className='space-y-4 lg:w-[90%] mx-auto'>
        {
          options.map((option, index) => (
            <CoverageCard data={option} key={index} setSumInsured={setSumInsured} sumInsured={sumInsured.id === option.id} hasSumInsured={option?.hasSumInsured} setIsSelected={() => setSelectedOption(option?.id)} isSelected={selectedOption === option.id} isSumInsuredOpen={isSumInsuredOpen} setIsSumInsuredOpen={setIsSumInsuredOpen} />
          ))
        }
        {/* <RedBtn text={"Next"} btnClass={"!ml-auto mr-0"} className={""} path={"/motor"} /> */}
        {/* <NextPrevBtn /> */}
        <div className='flex justify-center gap-2 mt-10'>
          {/* <Link href={"/review-services"} > */}
          <PrimaryBtn onClick={handleNext} text={"Next"} />
          {/* </Link> */}
        </div>
      </div>
    </div>
  )
}

function Step2({ handleNext, selectedOption, setSelectedOption, handlePrev }) {

  return (
    <div className="flex items-center justify-center font-sans bg-gray-50">
      <div className="bg-white rounded-lg w-full p-6 sm:p-8 text-center">

        {/* Question */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-secondary mb-6 text-center lg:text-nowrap relative pl-10 lg:pl-0">
          <BackButton className={"lg:-translate-x-[10vw] top-0"} onclick={handlePrev} />
          Let's talk about Alex. Has Alex ever been <br className="hidden lg:block" /> convicted?
        </h2>

        <div className='lg:w-[90%] mx-auto'>
          {/* Yes/No Options */}
          <div className="space-y-4 mb-8">
            <button
              onClick={() => setSelectedOption('Yes')}
              className={`w-full px-6 py-3 border rounded-md shadow-sm transition-all duration-200 ${selectedOption === 'Yes'
                ? 'border-red-500  text-red-700'
                : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-50'
                }`}
            >
              Yes
            </button>
            <button
              onClick={() => setSelectedOption('No')}
              className={`w-full px-6 py-3 border rounded-md shadow-sm transition-all duration-200 ${selectedOption === 'No'
                ? 'border-red-500 text-red-700'
                : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-50'
                }`}
            >
              No
            </button>
          </div>

          {/* Next Button */}
          <div className="flex justify-center">
            <button
              onClick={handleNext}
              className="bg-primary text-white font-semibold py-3 px-8 rounded-md shadow-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75 min-w-[150px]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}