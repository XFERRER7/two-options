import { X } from "lucide-react"

interface IOptionProps {
  text: string
  type: "first" | "second"
  selected?: boolean
  onClick?: () => void
}

export const Option = ({ text, type, selected, onClick }: IOptionProps) => {
  return (
    <div
      className={`py-2 w-80 rounded-xl ${selected ? "bg-emerald-500" : "bg-gray-600"}
    flex items-center justify-between px-2 md:hover:scale-105 cursor-pointer transition-all duration-200 ease-in
    `}
      onClick={onClick}
    >
      {
        !selected && (
          <X className="hover:scale-105 hover:bg-gray-400 rounded-xl" />
        )
      }
      <span className="text-center font-mono mx-auto">
        {text}
      </span>
    </div>
  )
}
