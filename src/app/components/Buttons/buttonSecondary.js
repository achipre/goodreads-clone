import { Poppins } from 'next/font/google'

const poppisLight = Poppins({ subsets: ['latin'], weight: '200' })

export const ButtonSecondary = ({ children }) => {
  return (
    <button
      className={`${poppisLight.className} cursor-pointer text-millbrook-900 text-nowrap text-md xs:text-lg sm:text-xl md:text-2xl text-center px-4 sm:px-5 md:px-5 py-1 hover:bg-millbrook-100`}
    >
      {children}
    </button>
  )
}
