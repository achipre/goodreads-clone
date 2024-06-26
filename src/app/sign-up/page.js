'use client'
import { InputPrimary } from '../components/Inputs/inputPrimary'
import { ButtonPrimary } from '../components/Buttons/buttonPrimary'
import { SocialFacebook, SocialGoogle, SocialX, IconUser, IconEmail, IconLock, SocialGithub } from '@/assets/Icons'
import { poppisLight, ralewayBold, ralewayLigth } from '@/assets/fonts'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { signup } from '../auth/action'
import { useForm, FormProvider } from 'react-hook-form'

export default function SignUp ({ searchParams }) {
  const methods = useForm()

  const onSubmit = (data) => {
    signup(data)
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex justify-center mt-16">
      <section className="flex flex-col items-center px-3 w-full max-w-md min-w-[288px]">
        <h2 className={`${ralewayLigth.className} text-4xl sm:text-5xl text-millbrook-900 [letter-spacing:-3px] text-nowrap`}>Create <span className={`${ralewayBold.className}`}>Account</span> </h2>
        <FormProvider {...methods}>

          <form onSubmit={methods.handleSubmit(onSubmit)} className="gap-2 max-w-md w-full" >
            <div className="my-6">
              <h2 className={`${poppisLight.className} text-2xl text-center`}>Join Us, Today</h2>
              <div className="flex gap-2 my-2 justify-center">
                <SocialGoogle className='cursor-pointer' />
                <SocialGithub className='cursor-pointer' />
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
              <InputPrimary className='pl-10 w-full' type='text' placeholder='Username' label='username' icon={<IconUser className='absolute p-[2px] top-0 translate-y-1/2 ml-2 stroke-millbrook-900 pointer-events-none' />}/>
              <InputPrimary className='pl-10 w-full' type='email' placeholder='Email' label='email' icon={<IconEmail className='absolute p-[2px] top-0 translate-y-1/2 ml-2 fill-millbrook-900 pointer-events-none' />} />
              <InputPrimary className='pl-10 w-full' type='password' placeholder='Password' label='password' icon={<IconLock className='absolute top-0 translate-y-1/2 ml-2 fill-millbrook-900 pointer-events-none' />}/>
              <InputPrimary className='pl-10 w-full' type='password' placeholder='Repeat Password' label='repeatPassword' icon={<IconLock className='absolute top-0 translate-y-1/2 ml-2 fill-millbrook-900 pointer-events-none' />}/>
              <ButtonPrimary type='submit' className='py-2'>Sign Up</ButtonPrimary>
              { searchParams.message &&
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={`${ralewayBold.className} bg-millbrook-100 text-center py-4 text-xl`}>{searchParams.message}</motion.p>
              }
            </div>
            <h2 className={`${poppisLight.className} text-lg text-center mt-4 text-md xs:text-lg sm:text-xl`}>Already a member? <Link href='/sign-in' className={`${poppisLight.className} cursor-pointer underline text-millbrook-600`}>Sign In</Link></h2>
          </form>
        </FormProvider>
      </section>
    </motion.main>
  )
}
