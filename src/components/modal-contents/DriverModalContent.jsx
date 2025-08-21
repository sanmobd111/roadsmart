import React, { useState } from 'react'
import TextInput from '../ui/TextInput'
import RedBtn from '../ui/RedBtn'
import ModalTitle from '../shared/modal/ModalTitle'
import { useDispatch } from 'react-redux'
import { setLicense, updateLicense } from '@/store/Feature/claim-services'

export default function DriverModalContent({ driverDetails, setIsModalOpen, editId, currentPerson, setEditId }) {
    const currentDriver = driverDetails?.find(driver => driver.id === editId)
    const dispatch = useDispatch()

    const [id, setId] = useState(editId !== null ? editId : driverDetails?.length)
    const [name, setName] = useState(currentDriver ? currentDriver?.name : "")
    const [status, setStatus] = useState(currentDriver ? currentDriver?.status : "")
    const [fault, setFault] = useState(currentDriver ? currentDriver?.fault : "")


    const handleSave = () => {
        if (editId !== null) {
            const restDrivers = driverDetails.filter(driver => driver.id !== editId)
            // setDriver(prev => [...restDrivers, { id, name, status, fault }])
            dispatch(updateLicense({ id, name, status, fault, ...restDrivers }))
        } else {
            // setDriver(prev => [...prev, { id, name, status, fault }])
            dispatch(setLicense([{ id, name, status, fault, person: currentPerson }]))
        }
        setIsModalOpen(false)
        setEditId(null)
    }
    return (
        <div>
            <ModalTitle title={"Driver details"} className={"text-center mb-6 lg:mb-10"} />
            <div className='space-y-4 w-[60%] mx-auto'>
                <TextInput inputProps={{ placeholder: "Name Of Driver", className: "w-full", onChange: (e) => setName(e.target.value), value: name }} />
                <TextInput inputProps={{ placeholder: "License status", className: "w-full", onChange: (e) => setStatus(e.target.value), value: status }} />
                <TextInput inputProps={{ placeholder: "Driver was at fault?", className: "w-full", onChange: (e) => setFault(e.target.value), value: fault }} />
                <RedBtn text={"Save"} hasIcon={false} onClick={handleSave} />
            </div>
        </div>
    )
}
