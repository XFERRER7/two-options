

interface InfoPlayerBarProps {
  name: string
  userType: 'host' | 'guest'
}

export const InfoPlayerBar = ({ name, userType }: InfoPlayerBarProps) => {
  return (
    <div className="flex flex-col gap-1 rounded">


      <div className='h-6 w-44  rounded-xl flex items-center justify-center text-white
      bg-emerald-600'>
        <h1>
          {name}
        </h1>
      </div>

      <div
        data-type={userType}
        className="h-4 w-44
      data-[type=host]:bg-blue-600 data-[type=guest]:bg-gray-500
       text-white rounded-xl flex items-center justify-center"

      >
        <span>
          {userType === 'host' ? 'Host' : 'Guest'}
        </span>
      </div>



    </div>
  )
}
