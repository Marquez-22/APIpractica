import { AnimeCharacters } from "@/interface/animeCharacters"
import { useState } from "react"

export const useAnimeCharacters=()=>{
    const [loader, setloader] = useState(true)
    const [animecharacters, setAnimeCharacters] = useState<AnimeCharacters|undefined>(undefined)
}