import React from 'react'

export default function Location({title="Location", subTitle="15 Blue Stare Road, <br /> 23 CA New York City, <br /> NY345678"}) {
    return (
        <div className="w-full mx-auto text-center lg:text-left">
            <h3 className="text-gray text-xl pb-4 mb-4 border-b font-bold">{title}</h3>
            <p className="text-[#343434]" dangerouslySetInnerHTML={{ __html: subTitle }}></p>
        </div>
    )
}
