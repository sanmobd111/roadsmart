import { cn } from '@/lib/utils'
import { SlArrowLeft } from 'react-icons/sl'

export default function BackButton({ onclick, className }) {
    return (
        <div className={cn('absolute left-0 top-5 lg:top-0 cursor-pointer', className)} onClick={onclick}><SlArrowLeft className='text-xl lg:text-3xl z-50' /></div>
    )
}
