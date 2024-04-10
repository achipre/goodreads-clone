'use client'
import { InputPrimary } from "../components/Inputs/inputPrimary";
import { ButtonPrimary } from "../components/Buttons/buttonPrimary";
import { SocialFacebook, SocialGoogle, SocialApple, SocialX, IconUser, IconEmail, IconLock } from "@/assets/Icons";
import { poppisBold, poppisLight, ralewayBold, ralewayLigth } from "@/assets/fonts";
import { motion } from 'framer-motion'
import Link from 'next/link'


export default function SignUp () {
  return (
    <motion.main initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}  className="flex justify-center mt-16">
      <section className="flex flex-col items-center px-3 w-full max-w-md min-w-[288px]">
        <h2 className={`${ralewayLigth.className} text-4xl sm:text-5xl text-millbrook-900 [letter-spacing:-3px] text-nowrap`}>Create <span className={`${ralewayBold.className}`}>Account</span> </h2>
        <form className="gap-2 max-w-md w-full">
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
          <div className="flex gap-4 flex-col">
            <InputPrimary className='pl-10 w-full' type='text' placeholder='Full Name' icon={<IconUser className='absolute p-[2px] top-0 translate-y-1/2 ml-2 stroke-millbrook-900 pointer-events-none' />}/>
            <InputPrimary className='pl-10 w-full' type='email' placeholder='Email' icon={<IconEmail className='absolute p-[2px] top-0 translate-y-1/2 ml-2 fill-millbrook-900 pointer-events-none' />} />
            <InputPrimary className='pl-10 w-full' type='password' placeholder='Password' icon={<IconLock className='absolute top-0 translate-y-1/2 ml-2 fill-millbrook-900 pointer-events-none' />}/>
            <InputPrimary className='pl-10 w-full' type='password' placeholder='Repeat Password' icon={<IconLock className='absolute top-0 translate-y-1/2 ml-2 fill-millbrook-900 pointer-events-none' />}/>
            <ButtonPrimary className='py-2'>Sign Up</ButtonPrimary>
          </div>
          <h2 className={`${poppisLight.className} text-lg text-center mt-4 text-md xs:text-lg sm:text-xl`}>Already a member? <Link href='/sign-in' className={`${poppisLight .className} cursor-pointer underline text-millbrook-600`}>Sign In</Link></h2>
        </form>
      </section>
    </motion.main>
  )
}
