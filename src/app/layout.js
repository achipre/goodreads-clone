import { Header } from './components/Header/Header'
import './globals.css'

export const metadata = {
  title: 'Goodreads | Meet your books',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className='bg-millbrook-50'>
        <Header />
        {children}</body>
    </html>
  )
}
