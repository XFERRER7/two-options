'use client'

interface IPrimaryButtonProps {
  text: string
  onClick: () => void
}

export const PrimaryButton = ({ text, onClick }: IPrimaryButtonProps) => {
  return (
    <>
      <button
        className="inline-block rounded-xl px-12 
        py-3 text-sm font-medium text-white bg-emerald-600
      hover:bg-emerald-500 focus:outline-none active:text-emerald-700"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  )
}
