"use client"

export default function DropdownContent({ recentLocations, onSelect }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 mt-1">
      <div className="p-2">
        <div className="text-xs text-gray-500 mb-2 px-2">Recent Locations</div>
        {recentLocations.map((location, index) => (
          <button
            key={index}
            onClick={() => onSelect(location)}
            className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              {location}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
