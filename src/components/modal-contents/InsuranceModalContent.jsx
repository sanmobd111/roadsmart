import React, { useState } from 'react'
import SelectInput from '../ui/SelectInput'
import TextInput from '../ui/TextInput'
import ModalTitle from '../shared/modal/ModalTitle'

export default function InsuranceModalContent({ setSumInsured, id, setIsModalOpen }) {
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState('')
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg space-y-4">
      <ModalTitle title={"Add Sum Insured"} />
      <TextInput inputProps={{ placeholder: "Amount", className: "w-full", onChange: (e) => setAmount(e.target.value) }} />
      <SelectInput defaultValue="Currency" setValue={setCurrency} options={[{ label: "USD", value: "usd" }, { label: "EUR", value: "eur" }, { label: "BDT", value: "bdt" }]} />

      <button className="w-full cursor-pointer bg-primary hover:bg-primary text-white text-sm py-3 px-4 rounded-md" onClick={() => {
        setSumInsured({ id, amount, currency })
        setIsModalOpen(false)
      }}>
        Save
      </button>
    </div >
  )
}
