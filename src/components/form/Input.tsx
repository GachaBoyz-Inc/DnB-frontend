import type React from "react"
import { twMerge } from "tailwind-merge"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string
    label: string
    classProps?: string
    [key: string]: any
}

const Input = ({ id, label, classProps, ...props }: InputProps) => {
  return (
    <div className={twMerge("group relative", classProps)}>
        <label className="group-focus-within:text-primary-200 absolute left-6 -top-3 px-2 bg-contrast-100 transition-colors" htmlFor={id}>{label}</label>
        <input className='focus:outline-primary-200 outline-2 outline-secondary-200 rounded p-2 h-12 w-full transition-colors' id={id} {...props} />
    </div>
  )
}

export default Input