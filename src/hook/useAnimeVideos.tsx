
import { getAnimeVideos } from "@/api/AnimeVideos"
import { AnimeVideos } from "@/interface/animeVideos"
import { useQuery } from "fenextjs-hook"
import { useEffect, useState } from "react"

export const useAnimeVideos = () => {
    const [loader, setloader] = useState(true)
    const [animevideos, setAnimeVideos] = useState<AnimeVideos | undefined>(undefined)
    const [error, seterror] = useState<Error | undefined>(undefined)
    const { query, } = useQuery()

    const onLoaderAnimeVideos = async () => {
        if(query.id){
            const response = await getAnimeVideos({
                id: parseInt(query.id ?? "0")
            })
            if (response.type == "ok") {
    
                setAnimeVideos(response.result)
            } else {
                seterror(response.error)
            }
            setloader(true)
        }

    }
    useEffect(() => {
        onLoaderAnimeVideos()
    }, [query])
    return {
        animevideos,
        error,
        loader

    }
}