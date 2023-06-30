// 'use client'
import React from 'react'

// isCreating={isCreating} setIsCreating={setIsCreating}

interface ICreateSessionModalProps {
  isCreating: boolean
  setIsCreating: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateSessionModal = ({ isCreating, setIsCreating }: ICreateSessionModalProps) => {
  


  return (
    <div className='fixed inset-0 z-10 overflow-y-auto
    bg-black bg-opacity-50 flex justify-center items-center px-5'>

      <div className="md:w-[33rem] w-full relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Nova sessão
          </h3>
          <button 
          type="button" 
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal"
          onClick={() => setIsCreating(false)}
          >
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-6 space-y-6">

          <label htmlFor="sessionId" className="block text-xs font-medium text-gray-700">
            Nome da sua sessão
          </label>

          <input
            className="w-full p-3 bg-transparent text-white
            focus:outline-none border border-gray-200
            rounded-xl sm:text-sm" placeholder="Crie um nome para a sessão" type="text" />
        </div>
        <div className="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 
        rounded-b dark:border-gray-600">
          <button className="w-24 0 active:bg-gray-700 bg-gray-500
        text-white before:transition-colors
          flex-none font-medium hover:bg-gray-500 hover:text-white 
          inline-flex justify-center lg:ml-4 outline-2 
          outline-offset-2 px-6 py-2.5 relative rounded-xl"
          onClick={() => setIsCreating(false)}
          type="submit">
            <span>Cancelar</span>
          </button>
            <button className="w-24 0 active:bg-emerald-700 bg-emerald-600
          text-white before:transition-colors
            flex-none font-medium hover:bg-emerald-500 hover:text-white 
            inline-flex justify-center lg:ml-4 outline-2 
            outline-offset-2 px-6 py-2.5 relative rounded-xl" type="submit">
              <span>Criar</span>
            </button>
        </div>
      </div>

    </div>
  )
}
