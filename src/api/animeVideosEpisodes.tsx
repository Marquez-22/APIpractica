import { AnimeVideosEpisodes } from "@/interface/animeVideosEpisodes"

export interface AnimeVideosEpisodesProps {
    id: number
    page: number
}

export const getAnimeVideosEpisodes = async ({ id, page }: AnimeVideosEpisodesProps) => {
    try {
        const url = `https://api.jikan.moe/v4/anime/${id}/videos/episodes`
        const response = await fetch (url, {
            method:"get",
        })
       
        const result= await response.json()
        console.log("animeVideosEpisodes",result)
        return{
            type:"ok",
            result: result as AnimeVideosEpisodes
        }

    } catch (error) {
        return {
            type: "error",
            error: new Error(`${error}`)
        }
    }

}