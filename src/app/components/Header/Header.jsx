import Link from 'next/link'
import { Logo } from '@/assets/Icons'
import { ButtonPrimary } from '../Buttons/buttonPrimary'
import { ButtonSecondary } from '../Buttons/buttonSecondary'
import { poppisLight, ralewayBold, ralewayLigth } from '@/assets/fonts'
import { createClient } from '@/utils/supabase/server'
import { signOut } from '@/app/auth/action'

export const Header = async () => {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  console.log(user)

  return (
  <nav className="relative flex justify-between items-center py-4 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-9 min-w-72">
    <Link href={'/'} className="w-8 xs:w-9 sm:w-10 md:w-11 lg:w-12">
      <Logo />
    </Link>
    <h1 className={`${ralewayLigth.className} hidden absolute right-1/2 translate-x-1/2 cursor-default sm:block text-4xl [letter-spacing:-2px] sm:[letter-spacing:-3px] text-millbrook-900`} >
    good
      <span className={`${ralewayBold.className} text-millbrook-900 [letter-spacing:-2px] sm:[letter-spacing:-3px]`}>reads</span>
    </h1>
    <div className="flex gap-2 items-center">
      <span className={`${poppisLight.className} text-millbrook-900 text-xl sm:text-2xl`}>|</span>
      {user
        ? <form action={signOut}>
            <button >Logout</button>
        </form>
        : <>
        <Link href="/sign-in">
          <ButtonSecondary>Sign In</ButtonSecondary>
        </Link>
        <Link href="/sign-up">
          <ButtonPrimary>Sign Up</ButtonPrimary>
        </Link>
        </>

      }
    </div>
  </nav>
  )
}
