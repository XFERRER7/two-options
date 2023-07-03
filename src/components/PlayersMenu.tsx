'use client'
import { AvatarBar } from "@/components/infoPlayer"


const players = [
  {
    id: 1,
    name: "Ana",
    userType: "host"
  },
  {
    id: 2,
    name: "João",
    userType: "guest"
  },
  {
    id: 3,
    name: "Maria",
    userType: "guest"
  },
  {
    id: 4,
    name: "Pedro",
    userType: "guest"
  }
]

export const PlayersMenu = () => {

  return (
    <div
      className="flex items-center justify-center 
        pt-5">


      {/* Guests */}
      <div className="flex items-center justify-center gap-2 flex-wrap">

        {
          players.map((player) => (
            <AvatarBar.root key={player.id}>
              <AvatarBar.avatar />
              <AvatarBar.bar
                name={player.name}
                userType={
                  player.userType as "host" | "guest"
                } />
            </AvatarBar.root>
          ))
        }

      </div>

    </div>
  )
}
