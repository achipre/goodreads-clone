'use client'
import { Player } from '@lottiefiles/react-lottie-player'
import { motion } from 'framer-motion'

export default function Error () {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <main className='flex justify-center h-screen -mt-16 xs:-mt-[68px] sm:-mt-[72px] md:-mt-20 items-center'>
        <Player
          loop
          src='https://lottie.host/91417089-5fb6-43f0-8918-0f50366c0039/kfmsarLuoC.json'
          autoplay
          style={{ maxHeight: '500px', minHeight: '250px' }}
        ></Player>
      </main>
    </motion.main>

  )
}
