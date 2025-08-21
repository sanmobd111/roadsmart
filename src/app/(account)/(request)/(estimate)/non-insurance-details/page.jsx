"use client"


import { useState } from 'react';

import { FileText, Flame, Shield } from "lucide-react";

const coverageData = [
    {
        id: 1,
        title: "COMPREHENSIVE COVERAGE",
        description: "Covers you for damage to your vehicle",
        icon: Shield,
        enabled: true,
        coverage: ["If you hit another vehicle or object", "If another vehicle hits you", "Weather, theft and fire"],
        amount: "20000$",
        label: "Sum Insured",
        percentage: "10-20%",
        excess: "Excess",
    },
    {
        id: 2,
        title: "FIRE AND THEFT",
        description: "Covers you for damage to your vehicle",
        icon: Flame,
        enabled: true,
        coverage: ["If you hit another vehicle or object", "If your vehicle catches fire", "Weather, theft and fire"],
        amount: "20000$",
        label: "Sum Insured",
        percentage: "10-20%",
        excess: "Excess",
    },
    {
        id: 3,
        title: "THIRD PARTY",
        description: "Covers damage to other vehicles or property",
        icon: FileText,
        enabled: false,
        coverage: [
            "If you hit another vehicle",
            "If you hit others property",
            "Medical expenses for others injured by you",
        ],
        amount: "$20,000",
        label: "Combined",
        percentage: "10-20%",
        excess: "Excess",
    },
]

const insuranceItems = [
    {
        id: 1,
        title: "Motor Insurance",
        vehicle: "BMW X3 ALJ3405",
        period: "1 Quarter",
        startDate: "1 Jan 2025",
        price: "$580",
        expanded: false,
    },
    {
        id: 2,
        title: "Motor Insurance",
        vehicle: "BMW X3 ALJ3405",
        period: "3 Quarters",
        startDate: "1 Jan 2025",
        price: "$580",
        expanded: true,
    },
    {
        id: 3,
        title: "Motor Insurance",
        vehicle: "BMW X3 ALJ3405",
        duration: "12 months",
        startDate: "1 Jan 2025",
        price: "$580",
        expanded: true,
    },
]


export default function page() {
    const [expandedItems, setExpandedItems] = useState([2, 3])

    const toggleExpanded = (id) => {
        setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
    }
    const [toggleStates, setToggleStates] = useState({
        1: true,
        2: true,
        3: false,
    })
    const [isExpanded, setIsExpanded] = useState(true)

    const handleToggle = (id) => {
        setToggleStates((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }
    return (
        <EstimateSection handleToggle={handleToggle} toggleStates={toggleStates} toggleExpanded={toggleExpanded} expandedItems={expandedItems} coverageData={coverageData} insuranceItems={insuranceItems} isCollapsable={false} isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    )
}
