import { poppisBold } from '@/assets/fonts'
import { Poppins } from 'next/font/google'
import { useFormContext } from 'react-hook-form'

const poppisLight = Poppins({ subsets: ['latin'], weight: '200' })

export const InputPrimary = ({ type, placeholder, className, icon, label }) => {
  const { register, watch, getValues, formState: { errors } } = useFormContext()
  const errorTypeUsername = { required: true, minLength: 5 }
  const errorTypeEmail = { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ }
  const errorTypePassword = { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\-`{-~]).{6,32}$/ }

  return (
    <div className="relative">
      <input
      className={`${poppisLight.className} w-96 bg-millbrook-100 py-3 px-4 box-border focus-visible:outline-none placeholder:text-md placeholder:xs:text-lg placeholder:sm:text-xl text-md xs:text-lg sm:text-xl ${className} ${(errors.fullname && label === 'fullname') ? 'border border-millbrook-700' : ''} ${(errors.email && label === 'email') ? 'border border-millbrook-700' : ''} ${(errors.password && label === 'password') ? 'border border-millbrook-700' : ''} ${(label === 'repeatPassword' && getValues('repeatPassword') === '') ? 'border border-millbrook-700' : ''} ${(label === 'repeatPassword' && (watch('password') !== watch('repeatPassword'))) ? 'border border-millbrook-700' : ''} ${(errors.passwordSignIn && label === 'passwordSignIn') ? 'border border-millbrook-700' : ''}`}
      {...register(label, label === 'username' && errorTypeUsername)}
      {...register(label, label === 'email' && errorTypeEmail)}
      {...register(label, label === 'password' && errorTypePassword)}
      {...register(label, label === 'repeatPassword' && { required: true })}
      {...register(label, label === 'passwordSignIn' && { required: true })}
      type={type}
      placeholder={placeholder} />
      {icon}
      {/* Error campo vacio */}
      {(label === 'username' && errors?.fullname?.type === 'required') && <span className={`${poppisBold.className} text-xs absolute block text-millbrook-500 animate-fade-right`}>* Field required</span>}
      {(label === 'email' && errors?.email?.type === 'required') && <span className={`${poppisBold.className}  absolute block text-xs h-2 text-millbrook-500 animate-fade-right`}>* Field required</span>}
      {(label === 'password' && errors?.password?.type === 'required') && <span className={`${poppisBold.className} text-xs h-2 absolute block text-millbrook-500 animate-fade-right`}>* Field required</span>}
      {(label === 'repeatPassword' && errors?.repeatPassword?.type === 'required') && <span className={`${poppisBold.className} text-xs absolute block text-millbrook-500 animate-fade-right`}>* Field required</span>}
      {(label === 'passwordSignIn' && errors?.passwordSignIn?.type === 'required') && <span className={`${poppisBold.className} text-xs absolute block text-millbrook-500 animate-fade-right`}>* Field required</span>}
      {/* Error otros */}
      {(label === 'username' && errors?.fullname?.type === 'minLength') && <span className={`${poppisBold.className} text-xs  absolute block text-millbrook-500 animate-fade-right `}>* Enter minimum 5 characters</span>}
      {(label === 'email' && errors?.email?.type === 'pattern') && <span className={`${poppisBold.className} text-xs  absolute block text-millbrook-500 animate-fade-right `}>* Email incorrect</span>}
      {(label === 'password' && errors?.password?.type === 'pattern') && <ul className={`${poppisBold.className} text-xs block -mb-4 text-millbrook-500 animate-fade-right `}>* Enter Password with the following requirements:
        <li className='ml-6 text-xs'>- Minimum 6 characters.</li>
        <li className='ml-6 text-xs'>- Max 32 characters.</li>
        <li className='ml-6 text-xs'>- Minimum 1 lowercase character.</li>
        <li className='ml-6 text-xs'>- Minimum 1 uppercase character.</li>
        <li className='ml-6 text-xs'>- Minimum 1 number.</li>
        <li className='ml-6 text-xs'>- Minimum 1 special characters.</li>
      </ul>}
      {(label === 'repeatPassword' && (watch('password') !== watch('repeatPassword')) && getValues('repeatPassword')) && <span className={`${poppisBold.className} text-xs  absolute block text-millbrook-500 animate-fade-right `}>* Valor no coincide </span>}

    </div>
  )
}
