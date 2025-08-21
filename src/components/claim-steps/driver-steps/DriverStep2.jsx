"use client"
import BackButton from '@/components/shared/back-button/BackButton'
import PrimaryButton from '@/components/shared/buttons/PrimaryButton'
import Title from '@/components/ui/Title'
import { cn } from '@/lib/utils'
import { setNatureOfAccident, updateNatureOfAccident } from '@/store/Feature/claim-services'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function page({ handleAddDriverDetails, currentPerson, natureOfAccident, handlePrev }) {
  const [lossType, setLossType] = useState(natureOfAccident.find(item => item.person.id == currentPerson.id) && natureOfAccident.find(item => item.person.id == currentPerson.id).lossType)
  console.log(lossType, "lossType")
  const dispatch = useDispatch()
  const handleNext = () => {
    if (natureOfAccident.find(item => item.person.id == currentPerson.id)) {
      dispatch(updateNatureOfAccident({ id: natureOfAccident.find(item => item.person.id == currentPerson.id).id, person: currentPerson, lossType }))
    } else {
      dispatch(setNatureOfAccident([{ id: natureOfAccident.length + 1, person: currentPerson, lossType }]))
    }
    handleAddDriverDetails()
  }
  return (
    <div className='lg:w-fit mx-auto px-4'>
      {/* <Title text={"What is the nature of loss suffered by Billy <br class='hidden lg:block'/> Smith?"} className={"text-center lg:text-nowrap lg:text-4xl"} /> */}
      <h1 className="relative pl-10 lg:pl-0 text-2xl lg:text-4xl font-bold text-center mb-4 lg:mb-8 pb-4">
        What is the nature of loss suffered by Billy <br class='hidden lg:block' /> Smith?
        <BackButton onclick={handlePrev} className={"top-0 lg:-translate-x-[10vw]"} />

      </h1>
      <div className='space-y-4 lg:w-[60%] mx-auto mt-6 lg:mt-10'>
        <button onClick={() => setLossType("injury")} className={cn("w-full py-4 px-6 rounded-lg border-2 text-left transition-colors text-gray-secondary font-semibold block", lossType === "injury" ? "border border-primary" : "")}>
          Injury
        </button>
        <button onClick={() => setLossType("death")} className={cn("w-full py-4 px-6 rounded-lg border-2 text-left transition-colors text-gray-secondary font-semibold block", lossType === "death" ? "border border-primary" : "")}>
          Death
        </button>
      </div>

      <div className='w-fit mx-auto'>
        <PrimaryButton btnText={"Next"} className={"w-fit mt-4 lg:mt-6 mx-auto min-w-[200px]"} hasIcon={true} onClick={handleNext} />
      </div>
    </div>
  )
}
