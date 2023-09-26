
import { Inter } from 'next/font/google'

import { ListAnime } from '@/components/ListAnime'
import { AnimeByld } from '@/components/AnimeByld'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <AnimeByld/>
    
   </div>
  )
}
