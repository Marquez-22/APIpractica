import { AnimeVideosEpisodes } from "@/interface/animeVideosEpisodes"
import { useState } from "react"

export const useAnimeVideosEpisodes = () => {
    const [loader, setLoader] = useState(true)
    const [animevideiosepisodes, setAnimeVideiosEpisodes] = useState<AnimeVideosEpisodes | undefined>(undefined)
    const [error, setError] = useState<Error | undefined>(undefined)

}