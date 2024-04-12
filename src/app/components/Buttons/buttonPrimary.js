import { Poppins } from 'next/font/google'

const poppisLight = Poppins({ subsets: ['latin'], weight: '200' })

export const ButtonPrimary = ({ children, className, actionAuth, type }) => {
  return (
    <button
      onClick={actionAuth}
      type={type}
      className={`${poppisLight.className} cursor-pointer bg-millbrook-900 hover:bg-millbrook-700 px-3 sm:px-4 md:px-5 py-1 text-millbrook-50 text-nowrap text-md xs:text-lg sm:text-xl md:text-2xl ${className}`}
    >
      {children}
    </button>
  )
}
