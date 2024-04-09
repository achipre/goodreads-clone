import { Raleway } from "next/font/google";
import { Poppins } from "next/font/google";
import { InputPrimary } from "../components/Inputs/inputPrimary";
import { ButtonPrimary } from "../components/Buttons/buttonPrimary";
import { SocialFacebook, SocialGoogle, SocialApple, SocialX } from "@/assets/Icons";
import Link from 'next/link'

const ralewayLigth = Raleway({ subsets: ["latin"], weight: "100" });
const ralewayBold = Raleway({ subsets: ["latin"], weight: "500" });
const poppisLight = Poppins({ subsets: ["latin"], weight: "200" });
const poppisBold = Poppins({ subsets: ["latin"], weight: "500" });

export default function LogIn () {
  return (
    <main className="flex max-w-96 mx-auto items-center -translate-y-12">
      <section className="flex flex-col items-center">
        <h2 className={`${ralewayLigth.className} text-4xl sm:text-5xl text-millbrook-900 [letter-spacing:-3px] text-nowrap`}>Create <span className={`${ralewayBold.className}`}>Account</span> </h2>
        <form className="gap-2 max-w-md">
          <div className="my-6">
            <h2 className={`${poppisLight.className} text-2xl text-center`}>Join Us, Today</h2>
            <div className="flex gap-2 my-2 justify-center">
              <SocialGoogle className='cursor-pointer' />
              <SocialApple className='cursor-pointer' />
              <SocialFacebook className='cursor-pointer' />
              <SocialX className='cursor-pointer' />
            </div>
            <div className="flex items-center gap-1">
              <span className="border-b w-full"></span>
              <h2 className={`${poppisLight.className} text-lg text-nowrap`}>Sign Up via Email</h2>
              <span className="border-b w-full"></span>
            </div>
          </div>
          <div className="flex gap-6 flex-col">
            <InputPrimary type='text' placeholder='Full Name'/>
            <InputPrimary type='email' placeholder='Email' />
            <InputPrimary type='password' placeholder='Password' />
            <InputPrimary type='password' placeholder='Repeat Password' />
            <ButtonPrimary>Sign Up</ButtonPrimary>
          </div>
          <h2 className={`${poppisLight.className} text-lg text-center mt-4`}>Already a member? <Link href='/sign-in' className={`${poppisBold.className} cursor-pointer hover:underline`}>Sign In</Link></h2>
          
        </form>
      </section>
    </main>
  )
}
