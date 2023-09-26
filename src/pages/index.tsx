
import { Inter } from 'next/font/google'

import { ListAnime } from '@/components/ListAnime'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <ListAnime/>
   </div>
  )
}
