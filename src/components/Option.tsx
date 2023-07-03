import { X } from "lucide-react"

interface IOptionProps {
  text: string
  type: "first" | "second"
}

export const Option = ({ text, type }: IOptionProps) => {
  return (
    <div 
    className={`py-2 w-80 rounded-xl ${type === "first" ? "bg-blue-600" : "bg-red-600"}
    flex items-center justify-between px-2 hover:bg-emerald-500 cursor-pointer transition-colors`}>
      <X className="hover:scale-105 hover:bg-red-600 rounded-xl"/>
      <span className="text-center font-mono mx-auto">
        {text}
      </span>
    </div>
  )
}
