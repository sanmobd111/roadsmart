import combinedClasses from '@/utils/tailwind'
import Link from 'next/link'
import PrimaryBtn from './PrimaryBtn'

export default function RedBtn({ path, text, disabled, className, btnClass, onClick, hasIcon = true }) {
    return (
        <Link href={path || "#"} className={combinedClasses("", className)}>
            <PrimaryBtn text={text} disabled={disabled} className={combinedClasses("mt-8 w-1/3 m-auto", btnClass)} btnClass={btnClass} hasIcon={hasIcon} onClick={onClick} />
        </Link>
    )
}
