import { AnimeCharacters } from "@/interface/animeCharacters"

export interface AnimeCharactersProps{
    id:number
}

export const getAnimeCharacters =async ({id}:AnimeCharactersProps)=>{
    try{ 
        const url= `https://api.jikan.moe/v4/anime/${id}/characters`
        const response = await fetch (url, {
            method:"get",
        })
        const result= await response.json()
        console.log("anime-characters", result);
        return{
            type:"ok",
            result: result as AnimeCharacters
        }


    }catch(error){
        return{
            type:"error",
            error: new Error(`${error}`)
        }
    }

}