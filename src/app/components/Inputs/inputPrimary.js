import { Poppins } from "next/font/google";

const poppisLight = Poppins({ subsets: ["latin"], weight: "200" });

export const InputPrimary = ({type, placeholder, icon}) => {
  return (
    <>
      <input className={`${poppisLight.className} w-96 bg-millbrook-100 py-3 px-4 focus-visible:outline-none`} type={type} placeholder={placeholder} />
      {icon}
    </>
  )
}
