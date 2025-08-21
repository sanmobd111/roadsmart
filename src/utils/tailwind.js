import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const combinedClasses = (...classes) => {
  return twMerge(clsx(...classes))
}

export default combinedClasses
