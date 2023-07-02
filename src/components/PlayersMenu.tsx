'use client'
import { AvatarBar } from "@/components/infoPlayer"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"

export const PlayersMenu = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })

  return (
    <div className="
    absolute top-0 left-0 h-screen w-screen bg-black/50
    ">
      <div
        data-responsive={isMobile ? 'true' : 'false'}
        className="flex-col items-center justify-center 
        flex pt-5
        sm:w-2/4
        md:w-1/4
        z-10
        ">


        <div className="text-lg font-semibold tracking-tighter
         text-white flex items-center justify-center mb-5">
          <div className="mx-auto mr-4">
            <span className="font-semibold font-mono text-emerald-600">2</span>
            <span className="font-semibold font-mono text-white">OP</span>
          </div>
          <span className="inline-flex items-center text-lg">
            Two options
          </span>
        </div>

        {/* Host */}
        <AvatarBar.root>
          <AvatarBar.avatar />
          <AvatarBar.bar userType="host" />
        </AvatarBar.root>


        {/* Guests */}
        <div className="flex flex-col items-center justify-center gap-1 mt-5">

          {
            [1, 2, 3, 4].map((_, index) => (
              <AvatarBar.root key={index}>
                <AvatarBar.avatar />
                <AvatarBar.bar userType="guest" />
              </AvatarBar.root>
            ))
          }

        </div>

      </div>
    </div>
  )
}
