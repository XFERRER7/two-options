import { FormQuestion } from "@/components/FormQuestion";
import { PlayersMenu } from "@/components/PlayersMenu";




export default function session() {

  return (
    <div className="flex flex-col min-h-screen bg-primary-100 py-2 text-white relative">

      <div className="w-full flex px-5 mt-3">

        <div className="text-lg font-semibold tracking-tighter
         text-white flex items-center justify-center mb-5">
          <div className="mx-auto mr-4 font-semibold">
            <span className="text-emerald-600">2</span>
            <span className="font-mono text-white">OP</span>
          </div>
          <span className="inline-flex items-center text-lg">
            Two options
          </span>
        </div>

        <h1 className="font-bold text-2xl mx-auto">
          Sessão da Ana
        </h1>

      </div>

      <PlayersMenu />

      <div className="flex items-center justify-center px-2">
        <FormQuestion />
      </div>

    </div>
  )
}