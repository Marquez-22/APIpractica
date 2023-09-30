import { AnimeVideos } from "@/interface/animeVideos"

export interface AnimeVideosProps{
    id:number
}

export const getAnimeVideos = async ({id}:AnimeVideosProps) => {
    try {
        const url = `https://api.jikan.moe/v4/anime/${id}/videos`
        const response = await fetch(url, {
            method: "get",
        })
        const result = await response.json()
        console.log("anime videos api",result);
        return {
            type: "ok",
            result: result as AnimeVideos
        }

    } catch (error) {
        return {
            type: "error",
            error: new Error(`${error}`)
        }


    }

}