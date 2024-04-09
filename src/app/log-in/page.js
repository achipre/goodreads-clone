import { Raleway } from "next/font/google";
import { InputPrimary } from "../components/Inputs/inputPrimary";
import { ButtonPrimary } from "../components/Buttons/buttonPrimary";

const ralewayLigth = Raleway({ subsets: ["latin"], weight: "100" });
const ralewayBold = Raleway({ subsets: ["latin"], weight: "500" });

export default function Dashboard () {
  return (
    <form className="flex mt-6 flex-col items-center gap-2">
      <h1 className={`${ralewayLigth.className} text-4xl sm:text-5xl text-millbrook-900 [letter-spacing:-3px] text-nowrap`}>Create <span className={`${ralewayBold.className}`}>Account</span> </h1>
      <hr />
      <InputPrimary type='text' placeholder={'Full Name'}/>
      <InputPrimary type='email' placeholder={'Email'} />
      <InputPrimary type='password' placeholder={'Password'} />
      <InputPrimary type='password' placeholder={'Repeat Password'} />
      <ButtonPrimary>Sign Up</ButtonPrimary>
    </form>
  )
}
