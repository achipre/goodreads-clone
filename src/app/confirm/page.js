import { poppisBold, poppisLight } from '@/assets/fonts'

export default function ConfirmPage ({ searchParams }) {
  return (
    <div className="w-full px-8 sm:max-w-lg mx-auto mt-8">
        <p className={`${poppisLight.className} text-lg border p-4 border-millbrook-800 rounded-lg text-millbrook-900`} >Check your email <span className={poppisBold.className}>{searchParams.message}</span> to continue sign in process </p>
      </div>
  )
}
