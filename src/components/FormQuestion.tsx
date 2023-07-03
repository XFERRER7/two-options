import { Input } from "@/subcomponents/Input"
import { PrimaryButton } from "@/subcomponents/PrimaryButton"
import { Option } from "./Option"

export const FormQuestion = () => {
  return (
    <div className="md:w-2/4 w-full mt-10 flex flex-col gap-5">

      <h3 className="font-semibold text-center">
        Escreva uma pergunta e duas opções de resposta para ela
      </h3>

      <form className="flex flex-col gap-5">

        <Input id="option" type="text" placeholder="Digite uma opção" />

        <div className="flex items-center justify-center">
          <PrimaryButton text="Confirmar" />
        </div>
      </form>

      <div className="flex gap-3 items-center justify-center mt-5 flex-wrap">
        <Option text="Pular de um penhasco" type="first"/>
        <Option text="Brigar com um urso" type="second"/>
      </div>

    </div>
  )
}
