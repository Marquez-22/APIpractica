import { AnimePictures } from "@/interface/animePictures"

export interface AnimePicturesProps{
    id:number
}

export const getAnimePictures = async ({id}:AnimePicturesProps) => {
    try {
        const url = `https://api.jikan.moe/v4/anime/${id}/pictures`
        const response = await fetch(url, {
            method: "get",
        })
        const result = await response.json()
        console.log("anime picture api",(result));
        return {
            type: "ok",
            result: result as AnimePictures
        }

    } catch (error) {
        return {
            type: "error",
            error: new Error(`${error}`)
        }
    }


}