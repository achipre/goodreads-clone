'use client'
import Link from 'next/link'
import { login } from '../auth/action'
import { motion } from 'framer-motion'
import { poppisLight, ralewayBold, ralewayLigth } from '@/assets/fonts'
import { IconEmail, IconLock, SocialApple, SocialFacebook, SocialGoogle, SocialX } from '@/assets/Icons'
import { InputPrimary } from '../components/Inputs/inputPrimary'
import { ButtonPrimary } from '../components/Buttons/buttonPrimary'
import { FormProvider, useForm } from 'react-hook-form'

export default function SignIn () {
  const methods = useForm()
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex justify-center mt-16">
      <section className="flex flex-col items-center px-3 w-full max-w-md min-w-[288px]">
        <h2 className={`${ralewayLigth.className} text-4xl sm:text-5xl text-millbrook-900 [letter-spacing:-3px] text-nowrap`}>Sign <span className={`${ralewayBold.className}`}>In</span> </h2>
        <FormProvider {...methods}>

          <form className="flex flex-col my-6 w-full">
            <InputPrimary className='mb-4 pl-10 w-full' type='email' label='email' placeholder={'Email'} icon={<IconEmail className='absolute p-[2px] top-0 translate-y-1/2 ml-2 fill-millbrook-900 pointer-events-none' />} />
            <InputPrimary className='pl-10 w-full' type='password' label='password' placeholder={'Password'} icon={<IconLock className='absolute top-0 translate-y-1/2 ml-2 fill-millbrook-900 pointer-events-none' />} />
            <p className={`${poppisLight.className} text-millbrook-900 underline cursor-pointer text-right mt-2 text-md xs:text-lg sm:text-xl`}>Forgot password?</p>
            <ButtonPrimary actionAuth={login} className='mt-8 py-[10px]'>Sign In</ButtonPrimary>
          </form>
        </FormProvider>

        <div className="flex items-center gap-8 w-full">
          <span className="border-b w-full"></span>
          <h2 className={`${poppisLight.className} text-lg text-nowrap text-md xs:text-lg sm:text-xl`}>Or</h2>
          <span className="border-b w-full"></span>
        </div>
        <div className="flex gap-2 my-6 justify-center flex-wrap">
          <SocialGoogle className='cursor-pointer' />
          <SocialApple className='cursor-pointer' />
          <SocialFacebook className='cursor-pointer' />
          <SocialX className='cursor-pointer' />
        </div>
        <p className={`${poppisLight.className} text-center text-md xs:text-lg sm:text-xl`}>Are you new? <Link href='/sign-up' className={`${poppisLight.className} underline text-millbrook-600`}>Create Account</Link></p>
      </section>
    </motion.main>
  )
}
