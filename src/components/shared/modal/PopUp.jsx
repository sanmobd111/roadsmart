import React from 'react'
import BackButton from '../back-button/BackButton'

export default function PopUp({ handleBack, isPopupOpen, children, containerClassName, backButtonClassName }) {
    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/30 overflow-y-auto ${isPopupOpen ? 'block' : 'hidden'}`}>
            <div className={`w-full bg-white h-[100vh] lg:px-20 scrollbar-hide overflow-y-auto py-10 relative lg:w-[70vw] ${containerClassName}`}>
                <BackButton onclick={handleBack} className={`top-12 lg:top-10 left-2 lg:left-[15%] ${backButtonClassName}`} />
                <div className='w-[78%] lg:w-[60%] mx-auto'>
                    {children}
                </div>
            </div>
        </div>
    )
}