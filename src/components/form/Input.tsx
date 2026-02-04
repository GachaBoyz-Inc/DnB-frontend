import { twMerge } from "tailwind-merge"

interface InputProps {
    id: string
    label: string
    classProps?: string
    [key: string]: string
}

const Input = ({ id, label, classProps, ...props }: InputProps) => {
  return (
    <div className={twMerge("relative", classProps)}>
        <label className="absolute left-4 -top-3 px-2 bg-contrast-100" htmlFor={id}>{label}</label>
        <input className='border-2 border-secondary-200 rounded p-2 h-12' id={id} {...props} />
    </div>
  )
}

export default Input