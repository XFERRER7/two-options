import { InputHTMLAttributes } from "react"
import { twMerge } from 'tailwind-merge'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
}

export const Input = ({ id, ...rest }: IInputProps) => {
  return (
    <div>
      <input
        id={id}
        {...rest}
        className="w-full p-3 bg-transparent text-white
        focus:outline-none border border-gray-200
        rounded-xl sm:text-sm"/>
    </div>
  )
}
