import { useState } from "react"

export default function AddNoteModalContents({ note, setNote, setIsModalOpen }) {
  console.log(note, "note in AddNoteModalContents")
  const [noteContent, setNoteContent] = useState(note || '')
  const handleSave = (e) => {
    setNote(noteContent)
    setIsModalOpen(false)
  }
  return (
    <div className="bg-white flex items-center justify-center">
      <div className="w-full max-w-xs lg:max-w-sm ">
        <h1 className="border-b pb-4 mb-4 text-xl font-bold text-center">Add note</h1>
        {/* Input Field */}
        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          type="text"
          placeholder="Type here..."
          className="w-full px-4 py-3 border border-gray-400 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mb-4 h-[15vh] resize-none"
        />

        {/* Submit Button */}
        <button onClick={handleSave} className="w-full bg-red-500 hover:bg-primary text-white font-medium py-3 px-4 rounded-md transition-colors">
          Save
        </button>
      </div>
    </div>
  )
}