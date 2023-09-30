import { getAnimeCharacters } from "@/api/animeCharacters"
import { AnimeCharacters } from "@/interface/animeCharacters"
import { useQuery } from "fenextjs-hook"
import { use, useEffect, useState } from "react"

export const useAnimeCharacters = () => {
    const [loader, setloader] = useState(true)
    const [animecharacters, setAnimeCharacters] = useState<AnimeCharacters | undefined>(undefined)
    const [error, setError] = useState<Error | undefined>(undefined)
    const { query } = useQuery()

    const onLoaderAnimeCharacters = async () => {
        if (query.id) {
            const response = await getAnimeCharacters({
                id: parseInt(query.id ?? "0")
            })
            if (response.type == "ok") {
                setAnimeCharacters(response.result)
            } else {
                setError(response.error)
            }
            setloader(true)
        }

    }
    useEffect(() => {
        onLoaderAnimeCharacters()
    }, [query])
    return {
        animecharacters,
        error,
        loader
    }
}