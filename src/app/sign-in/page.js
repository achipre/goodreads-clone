'use client'
import Link from 'next/link'
import { login, signInWithOauth } from '../auth/action'
import { motion } from 'framer-motion'
import { poppisLight, ralewayBold, ralewayLigth } from '@/assets/fonts'
import { IconEmail, IconLock, SocialFacebook, SocialGithub, SocialGoogle, SocialX } from '@/assets/Icons'
import { InputPrimary } from '../components/Inputs/inputPrimary'
import { ButtonPrimary } from '../components/Buttons/buttonPrimary'
import { FormProvider, useForm } from 'react-hook-form'

export default async function SignIn () {
  const methods = useForm()
  const onSubmit = (data) => {
    login(data)
  }
  const handleGithub = () => {
    signInWithOauth()
  }
  const handleTwitter = () => {
    console.log('hola')
  }
  const handleGoogle = () => {
    console.log('hola')
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex justify-center mt-16">
      <section className="flex flex-col items-center px-3 w-full max-w-md min-w-[288px]">
        <h2 className={`${ralewayLigth.className} text-4xl sm:text-5xl text-millbrook-900 [letter-spacing:-3px] text-nowrap`}>Sign <span className={`${ralewayBold.className}`}>In</span> </h2>
        <FormProvider {...methods}>

          <form
            className="flex flex-col gap-6 w-full my-6"
            onSubmit={methods.handleSubmit(onSubmit)} noValidate>
            <InputPrimary className='pl-10 w-full' type='email' label='email' placeholder={'Email'} icon={<IconEmail className='absolute p-[2px] top-0 translate-y-1/2 ml-2 fill-millbrook-900 pointer-events-none' />} />
            <InputPrimary className='pl-10 w-full' type='password' label='passwordSignIn' placeholder={'Password'} icon={<IconLock className='absolute top-0 translate-y-1/2 ml-2 fill-millbrook-900 pointer-events-none' />} />
            <Link href='/forgot-password' className={`${poppisLight.className} text-millbrook-900 underline cursor-pointer text-right text-md xs:text-lg -mt-5`}>Forgot password?</Link>
            <ButtonPrimary className='py-[10px]'>Sign In</ButtonPrimary>
            {/* { searchParams.message &&
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={`${ralewayBold.className} bg-millbrook-100 text-center py-4 text-xl`}>{searchParams.message}</motion.p>
              } */}
          </form>
        </FormProvider>

        <div className="flex items-center gap-8 w-full">
          <span className="border-b w-full"></span>
          <h2 className={`${poppisLight.className} text-lg text-nowrap text-md xs:text-lg sm:text-xl`}>Or</h2>
          <span className="border-b w-full"></span>
        </div>
        <div className="flex gap-2 my-6 justify-center flex-wrap">
          <form action={handleGoogle}>
            <button>
              <SocialGoogle className='cursor-pointer' />
            </button>
          </form>
          <form action={handleGithub}>
            <button>
              <SocialGithub className='cursor-pointer' />
            </button>
          </form>
          <SocialFacebook className='cursor-pointer' />
          <form action={handleTwitter}>
            <button>
              <SocialX className='cursor-pointer' />
            </button>
          </form>
        </div>
        <p className={`${poppisLight.className} text-center text-md xs:text-lg sm:text-xl`}>Are you new? <Link href='/sign-up' className={`${poppisLight.className} underline text-millbrook-600`}>Create Account</Link></p>
      </section>
    </motion.main>
  )
}
