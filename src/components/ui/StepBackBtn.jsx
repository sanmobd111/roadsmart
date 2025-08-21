import { MdOutlineArrowBackIosNew } from "react-icons/md";

export default function StepBackBtn({onClick}) {
    return (
        <button className='w-8 h-8 text-xs text-red-500 flex justify-center items-center rounded-sm overflow-hidden bg-[#FCF2F2] cursor-pointer' onClick={onClick}><MdOutlineArrowBackIosNew /></button>)
}
