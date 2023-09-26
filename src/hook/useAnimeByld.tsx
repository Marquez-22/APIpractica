import { getAnimeById } from "@/api/animeByld"
import { AnimeByld } from "@/interface/animeByld"
import { useQuery } from "fenextjs-hook"
import { useEffect, useState } from "react"

export const useAnimeByld = () => {
    const [loader, setloader] = useState(true)
    const [animebyld, setAnimeByld] = useState<AnimeByld | undefined>(undefined)
    const [error, setError] = useState<Error | undefined>(undefined)
    const {query} = useQuery()


    const onLoaderAnimeByld = async () => {
        if(query.id){
            const response = await getAnimeById({
                id:parseInt(query.id ?? "0")
            })
            if (response.type == "ok") {
                setAnimeByld(response.result)
    
            } else {
                setError(response.error)
            }
            setloader(true)
        }

    }
    useEffect(() => {
        onLoaderAnimeByld()

    }, [query])
    return {
        animebyld,
        error,
        loader
    }

}