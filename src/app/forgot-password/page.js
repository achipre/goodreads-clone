'use client'
import Link from 'next/link'
import { InputPrimary } from '../components/Inputs/inputPrimary'
import { poppisLight, ralewayBold, ralewayLigth } from '@/assets/fonts'
import { FormProvider, useForm } from 'react-hook-form'
import { ButtonPrimary } from '../components/Buttons/buttonPrimary'
import { IconEmail } from '@/assets/Icons'
import { motion } from 'framer-motion'
export default function ForgotPassword ({ searchParams, userConfirm }) {
  const methods = useForm()

  return (
  <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} >
      <div className="sm:max-w-md mx-auto mt-16 flex flex-col items-center px-3 w-full max-w-md min-w-[288px]">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit()} noValidate
          className="flex flex-col w-full justify-center gap-6 text-foreground my-6">
          <h2 className={`${ralewayLigth.className} text-4xl sm:text-5xl text-millbrook-900 [letter-spacing:-3px] text-nowrap text-center`}>Forgot <span className={`${ralewayBold.className}`}>Email</span> </h2>
          <InputPrimary
            className="w-full pl-10"
            icon={<IconEmail className='absolute p-[2px] top-0 translate-y-1/2 ml-2 fill-millbrook-900 pointer-events-none' />}
            type="email"
            label='email'
            placeholder="you@example.com"
            required
          />

          <ButtonPrimary className="px-4 py-2">
            Confirm
          </ButtonPrimary>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </FormProvider>
        <p className={`${poppisLight.className} text-center text-md xs:text-lg sm:text-xl`}>Remember your password? <Link href='/sign-in' className={`${poppisLight.className} underline text-millbrook-600`}>Sign in</Link></p>
      </div>
  </motion.main>
  )
}
