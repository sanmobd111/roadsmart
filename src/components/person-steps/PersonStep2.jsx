import React from 'react'
import TextInput from '../ui/TextInput'
import PersonStepTitle from './PersonStepTitle'

export default function PersonStep2({ firstName, setFirstName, lastName, setLastName }) {
    return (
        <div>
            <PersonStepTitle text={"What’s their legal name?"} />
            <div className='flex flex-col lg:flex-row gap-4 justify-between'>
                <TextInput label={"First Name"} containerClassName={"lg:w-[48%]"} inputProps={{ placeholder: "First Name", value: firstName, onChange: (e) => setFirstName(e.target.value) }} />
                <TextInput label={"Last Name"} containerClassName={"lg:w-[48%]"} inputProps={{ placeholder: "First Name", value: lastName, onChange: (e) => setLastName(e.target.value) }} />
            </div>
        </div>
    )
}
