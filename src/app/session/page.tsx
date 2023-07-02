import { PlayersMenu } from "@/components/PlayersMenu";




export default function session() {

  return (
    <div className="flex flex-col min-h-screen bg-primary-100 py-2 text-white relative">

      <div className="w-full flex px-5 mt-3">

        <PlayersMenu />

        <h1 className="font-bold text-2xl mx-auto">
          Sessão da Ana
        </h1>

      </div>

    </div>
  )
}