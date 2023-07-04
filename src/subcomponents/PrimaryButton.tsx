'use client'

import { twMerge } from "tailwind-merge"

interface IPrimaryButtonProps {
  text: string
  onClick?: () => void
  className?: string
}

export const PrimaryButton = ({ text, onClick, className }: IPrimaryButtonProps) => {
  return (
    <button
      className={twMerge("inline-block rounded-xl px-12 py-3 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none active:text-emerald-700", className)}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
