import Link from 'next/link'
import React from 'react'

const defaultTabs = ["Request #1001", "Requested on Oct 30, 2025"]



export default function RequestHeader({ handleCancelRequest, status, title = "Request details", tabs = defaultTabs, actions }) {
    const [currentTab, setCurrentTab] = React.useState(0)
    return (
        <div className="w-full">
            {/* Left side - Request Information */}
            <div className="space-y-2 flex flex-col md:flex-row justify-between border-b border-gray-200 mb-4">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h1>
                {/* Right side - Action Buttons */}
                <div className="flex flex-row gap-2 sm:gap-3 w-full sm:w-auto text-gray cursor-pointer mb-4 lg:mb-0">
                    {/* <Link href="/request-estimate">
                        <span>Request Estimate</span>
                    </Link> */}

                    {
                        actions ? actions.map((action, index) => (
                            <span className="text-gray-700 hover:text-gray-900 text-sm transition-colors" onClick={action?.handleOnClick || null}>{action.title}</span>
                        )) : (<span onClick={handleCancelRequest}>Cancel Request</span>)
                    }

                </div>
            </div>
            <div className="flex flex-row sm:items-center gap-1 sm:gap-4 text-sm text-gray-600">
                {/* {tabs} */}
                {
                    tabs.map((tab, index) => (
                        <span
                            key={index}
                            className={`${currentTab === index ? 'bg-secondary px-3 py-1 rounded-sm font-medium' : ""}`}
                            onClick={() => setCurrentTab(index)}
                        >
                            {tab}
                        </span>
                    ))
                }
            </div>

        </div>
    )
}
