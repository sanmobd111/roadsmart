import React from 'react'
import Title from '../ui/Title'
import AddButton from '../ui/AddButton'

export default function claimStep4() {
    return (
        <div>
            <Title text={"Who was driving the vehicle?"} />
            <hr className='my-10' />
            <AddButton text={"Add driver"} />
        </div>
    )
}
