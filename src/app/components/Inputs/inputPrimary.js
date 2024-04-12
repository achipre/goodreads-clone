import { Poppins } from 'next/font/google'

const poppisLight = Poppins({ subsets: ['latin'], weight: '200' })

export const InputPrimary = ({ type, placeholder, className, icon }) => {
  return (
    <div className="relative">
      <input className={`${poppisLight.className} w-96 bg-millbrook-100 py-3 px-4 focus-visible:outline-none placeholder:text-md placeholder:xs:text-lg placeholder:sm:text-xl text-md xs:text-lg sm:text-xl ${className}`} type={type} placeholder={placeholder} />
      {icon}
    </div>
  )
}
