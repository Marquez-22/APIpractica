
import { AllAnime } from "../interface/allAnime"
export const getAllAnime = async () => {
    try {
        const url = 'https://api.jikan.moe/v4/anime'
        const response = await fetch(url, {
            method: "get",
        })
        const result = await response.json()
        console.log("anime api",result);
    
        return {
            type: "ok",
            result: result as AllAnime
        }

    } catch (error) {
        console.log(error);
        return {
            type: "error",
            error: new Error(`${error}`)

        }
    }

}