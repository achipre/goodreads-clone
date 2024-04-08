import { Raleway } from "next/font/google"

const poppinsLigth = Raleway({ subsets: ["latin"], weight: "100" })
const poppinsBold = Raleway({ subsets: ["latin"], weight: "500" })

export default function Home() {
  return (
    <h1 className={`${poppinsLigth.className} text-5xl [letter-spacing:-4px] text-millbrook-900`}>good<span className={`${poppinsBold.className} text-5xl text-millbrook-900 [letter-spacing:-2px]`}>reads</span></h1>
  )
}
