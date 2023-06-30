import { AvatarBar } from "@/components/infoPlayer";


export default function session() {

  return (
    <div className="flex flex-col min-h-screen bg-primary-100 py-2">

      <div className="h-24 w-full flex items-center px-5">

          <AvatarBar.root>
            <AvatarBar.avatar />
            <AvatarBar.bar />
          </AvatarBar.root>

      </div>

    </div>
  )
}