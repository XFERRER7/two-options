'use client'
import { CreateSessionModal } from '@/components/CreateSessionModal'
import { PrimaryButton } from '@/components/PrimaryButton'
import { useState } from 'react'

export default function Home() {

  const [isCreating, setIsCreating] = useState(false)

  return (
    <div className="flex items-center bg-primary-100">
      <div className="relative items-center w-full gap-12 p-8 mx-auto lg:inline-flex lg:p-20 max-w-7xl rounded-3xl">
        <div className="max-w-2xl mx-auto text-center">
          <div>
            <span className="inline-flex items-center"><span className="px-6 py-2 text-base font-bold text-white uppercase rounded-lg bg-white/10">Two options</span></span>
            <p className="mt-8 text-5xl font-extrabold tracking-tight text-white">
              Você tem duas <span className="text-emerald-500">opções</span>, sem meio-termo
            </p>

            <p className="max-w-xl mt-4 text-lg lg:text-xl text-slate-200">
              Funciona como verdade ou desafio, mas sem desafio. Você terá coragem de ser 100% verdadeiro?
            </p>
          </div>
          <div className="w-full flex-col justify-center mt-10 sm:flex-row">
            <form className="md:w-96 sm:80 mx-auto bg-white/20 border-2 border-white/30  p-1.5 rounded-2xl">
              <div className="w-full flex items-center justify-between">
                <div className="flex-1">
                  <input
                    className="w-full p-3 text-black bg-transparent border 
                  border-transparent appearance-none focus:border-slate-500 
                  focus:outline-none focus:ring-slate-500 
                 rounded-xl sm:text-sm" placeholder="Insira o código de uma sessão" type="text" />
                </div>
                <button className="w-24 0 active:bg-emerald-700 bg-emerald-600
                  text-white before:transition-colors
                 flex-none font-medium hover:bg-emerald-500 hover:text-white 
                 inline-flex justify-center lg:ml-4 outline-2 
                 outline-offset-2 px-6 py-2.5 relative rounded-xl" type="submit">
                  <span>Entrar</span>
                </button>
              </div>
            </form>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            <PrimaryButton text="Criar uma sessão" onClick={() => setIsCreating(true)} />

          </div>
        </div>
      </div>
      {
        isCreating && <CreateSessionModal isCreating setIsCreating={setIsCreating} />
      }
    </div>
  )
}
