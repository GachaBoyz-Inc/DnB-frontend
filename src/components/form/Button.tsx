import { twMerge } from "tailwind-merge"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    classProps?: string
    containerClassProps?: string
}

const Button = ({ label, classProps, containerClassProps, ...props }: ButtonProps) => {
  return (
    <div className={containerClassProps}>
      <button className={twMerge("bg-primary-200 text-contrast-100 py-2 px-4 rounded hover:bg-primary-300 transition-colors cursor-pointer text-xl hover:bg-primary-500", classProps)} {...props}>{label}</button>
    </div>
  )
}

export default Button
