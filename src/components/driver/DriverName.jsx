import TextInput from '../ui/TextInput'

export default function DriverName({ firstName, setFirstName, lastName, setLastName }) {
    return (
        <div className=''>
            <div className='flex flex-col lg:flex-row gap-2 lg:gap-6 justify-between'>
                <TextInput label={"First Name"} containerClassName={" lg:w-[48%]"} inputProps={{ placeholder: "First Name", value: firstName, onChange: (e) => setFirstName(e.target.value) }} />
                <TextInput label={"Last Name"} containerClassName={" lg:w-[48%]"} inputProps={{ placeholder: "First Name", value: lastName, onChange: (e) => setLastName(e.target.value) }} />
            </div>
        </div>
    )
}
