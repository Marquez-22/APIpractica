import { AnimeByld } from "@/interface/animeByld";

export interface getAnimeByIdProps {
    id:number
}

export const getAnimeById = async ({id}:getAnimeByIdProps) =>{
    try{
        const url =`https://api.jikan.moe/v4/anime/${id}`
        const response = await fetch (url, {
            method: "get",
        })
        const result = await response.json()
        console.log("anime by id api",result);
        return{
            type:"ok",
            result:result as AnimeByld
        }

    }catch(error){
        return {
        type:"error",
        error: new Error (`${error}`)
        
    }

    }
}
