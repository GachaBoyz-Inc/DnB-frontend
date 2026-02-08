import React from 'react'
import { twMerge } from 'tailwind-merge'

interface RootProps {
    children: React.ReactNode
    classProps?: string
}

const Root = ({ children, classProps }: RootProps) => {
  return (
    <form className={twMerge(classProps)}>{children}</form>
  )
}

export default Root