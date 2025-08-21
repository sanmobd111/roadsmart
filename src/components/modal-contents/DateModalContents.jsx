import { Button } from "@/components/ui/button"
import {
    Calendar,
    ChevronLeft,
    ChevronRight
} from "lucide-react"
import { useState } from "react"

export default function DateModalContents({ selectedDate, setSelectedDate, setIsModalOpen }) {
    const [currentMonth, setCurrentMonth] = useState("June")
    const [currentYear, setCurrentYear] = useState(2025)

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

    const getDaysInMonth = (month, year) => {
        const monthIndex = months.indexOf(month)
        const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
        const firstDayOfMonth = new Date(year, monthIndex, 1).getDay()
        const days = []

        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(null)
        }

        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day)
        }

        return days
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const calendarDays = getDaysInMonth(currentMonth, currentYear)

    const handleDateSelect = (day) => {
        if (day) {
            const monthIndex = months.indexOf(currentMonth)
            const newDate = new Date(currentYear, monthIndex, day)
            setSelectedDate(newDate)
            closeModal()
        }
    }

    const handleTodayClick = () => {
        const today = new Date()
        setSelectedDate(today)
        setCurrentMonth(months[today.getMonth()])
        setCurrentYear(today.getFullYear())
        closeModal()
    }

    const handlePrevMonth = () => {
        const currentMonthIndex = months.indexOf(currentMonth)
        if (currentMonthIndex === 0) {
            setCurrentMonth("December")
            setCurrentYear(currentYear - 1)
        } else {
            setCurrentMonth(months[currentMonthIndex - 1])
        }
    }

    const handleNextMonth = () => {
        const currentMonthIndex = months.indexOf(currentMonth)
        if (currentMonthIndex === 11) {
            setCurrentMonth("January")
            setCurrentYear(currentYear + 1)
        } else {
            setCurrentMonth(months[currentMonthIndex + 1])
        }
    }

    const handleMonthChange = (e) => {
        setCurrentMonth(e.target.value)
    }

    const handleYearChange = (e) => {
        setCurrentYear(parseInt(e.target.value))
    }
    return (
        <div className="max-w-xl mx-auto">
            <Button
                onClick={handleTodayClick}
                variant="outline"
                className="w-full mb-4 flex items-center justify-start gap-2 text-primary border-red-200 hover:bg-red-50"
            >
                <Calendar className="w-4 h-4" />
                Today
            </Button>

            {/* Calendar Header with Selects */}
            <div className="flex items-center justify-between mb-4">
                <button onClick={handlePrevMonth} className="p-1 hover:bg-gray-100 rounded">
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                <div className="flex items-center gap-2">
                    <select
                        value={currentMonth}
                        onChange={handleMonthChange}
                        className="text-gray-900 text-sm px-2 py-1"
                    >
                        {months.map((month) => (
                            <option key={month} value={month}>{month}</option>
                        ))}
                    </select>

                    <select
                        value={currentYear}
                        onChange={handleYearChange}
                        className="text-gray-900 text-sm px-2 py-1"
                    >
                        {Array.from({ length: 20 }, (_, i) => currentYear - 10 + i).map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>

                <button onClick={handleNextMonth} className="p-1 hover:bg-gray-100 rounded">
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
                {daysOfWeek.map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                        {day}
                    </div>
                ))}

                {calendarDays.map((day, index) => (
                    <button
                        key={index}
                        onClick={() => handleDateSelect(day)}
                        disabled={!day}
                        className={` w-full aspect-square text-sm rounded-full flex items-center justify-center transition-colors
                  ${!day ? "invisible" : ""}
                  ${selectedDate &&
                                day === selectedDate.getDate() &&
                                currentMonth === months[selectedDate.getMonth()] &&
                                currentYear === selectedDate.getFullYear()
                                ? "bg-primary text-white"
                                : "hover:bg-gray-100 text-gray-700"}
                `}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {/* Pickup Question (Placeholder) */}
            <div className="border border-gray-400 rounded-lg px-4 py-3">
                <label className="block text-sm font-medium text-gray-700">Do you need pick up?</label>
            </div>
        </div>
    )
}
