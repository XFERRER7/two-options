import { ReactNode } from "react"

interface IAvatarBarRootProps {
  children: ReactNode
}

export const InfoPlayerRoot = ({ children }: IAvatarBarRootProps) => {
  return (
    <div className='flex items-center'>
      {children}
    </div>
  )
}
