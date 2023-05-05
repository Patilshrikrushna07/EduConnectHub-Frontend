import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[gray]'>
      <Navbar/>
    </div>
  )
}
