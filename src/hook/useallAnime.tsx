import { getAllAnime } from "@/api/allAnime"
import { AllAnime } from "@/interface/allAnime"
import { useEffect, useState } from "react"

export const useAllAnime = () => {
    const [loader, setloader] = useState(false)
    const [allanime, setAllAnime] = useState<AllAnime | undefined>(undefined)
    const [error, setError] = useState<Error | undefined>(undefined)

    const onLoaderAllAnime = async () => {
        const response = await getAllAnime()
        if (response.type == "ok") {

            setAllAnime(response.result)

        } else {
            setError(response.error)
        }
        setloader(true)
    }
    useEffect(() => {
        onLoaderAllAnime()
    }, [])
    return {
        allanime,
        error,
        loader

    }

}