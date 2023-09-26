import { useEffect, useState } from "react"
import { useQuery } from "fenextjs-hook"
import { getAnimePictures } from "@/api/animePictures"
import { AnimePictures } from "@/interface/animePictures"


export const useAnimePictures = () => {
    const [loader, setloader] = useState(true)
    const [animepictures, setAnimePictures] = useState<AnimePictures | undefined>(undefined)
    const [error, setError] = useState<Error | undefined>(undefined)
    const { query } = useQuery()

    const onLoaderAnimePictures = async () => {
        if(query.id){
            const response = await getAnimePictures({
                id: parseInt(query.id ?? "0")
    
            })
            if (response.type == "ok") {
                setAnimePictures(response.result)
            } else {
                setError(response.error)
            }
            setloader(true)
        }

    }
    useEffect(() => {
        onLoaderAnimePictures()


    }, [query])
    return{
    animepictures,
        error,
        loader    
    }
    


}