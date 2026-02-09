import React from 'react'
import { twMerge } from 'tailwind-merge'

interface RootProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode
    classProps?: string
}

const Root = ({ children, classProps, ...props }: RootProps) => {
  return (
    <form className={twMerge(classProps)} {...props}>{children}</form>
  )
}

export default Root