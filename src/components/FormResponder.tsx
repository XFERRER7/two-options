'use client'
import { useState } from 'react'
import { Option } from './Option'
import { PrimaryButton } from '@/subcomponents/PrimaryButton'

export const FormResponder = () => {

  const [selected, setSelected] = useState<"first" | "second" | "">("")

  function handleOptionClick(type: "first" | "second") {

    if (selected === type) {
      setSelected("")
      return
    }
    else if (selected === "first") {
      setSelected(type)
      return
    }
    else if (selected === "second") {
      setSelected(type)
      return
    }
    setSelected(type)

  }

  return (
    <div className="md:w-2/4 w-full mt-10 flex flex-col gap-10">

      <h3 className="font-semibold text-center">
        Escolha uma das opções abaixo
      </h3>

      <div className='flex gap-3 items-center justify-center mt-5 flex-wrap'>
        <Option
          text="Pular de um penhasco"
          type="first"
          onClick={() => handleOptionClick("first")}
          selected={selected === "first"}
        />
        <Option
          text="Brigar com um urso"
          type="second"
          onClick={() => handleOptionClick("second")}     
          selected={selected === "second"}
        />
      </div>

      <div className="flex items-center justify-center gap-5 mt-10">
        <PrimaryButton text="Não responder" className='bg-red-600'/>
        <PrimaryButton text="Confirmar escolha" />
      </div>
    </div>
  )
}
