import { twMerge } from "tailwind-merge"

interface TitleProps {
    text: string
    subText: string
    containerClassProps?: string
    titleClassProps?: string
    subTitleClassProps?: string
}

const Title = ({ text, subText, containerClassProps, titleClassProps, subTitleClassProps }: TitleProps) => {
  return (
    <div className={twMerge("text-center", containerClassProps)}>
      <h1 className={twMerge("mb-1", titleClassProps)}>{text}</h1>
      <h2 className={subTitleClassProps}>{subText}</h2>
    </div>
  )
}

export default Title