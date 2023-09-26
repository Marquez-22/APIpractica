import { useAnimeVideos } from "@/hook/useAnimeVideos"
import Link from "next/link"
export type AnimeVideosType = "AnimeVideos"
export interface AnimeVideosProps {

    styleTemplate?: AnimeVideosType
}

export const AnimeVideos = ({ styleTemplate = "AnimeVideos" }: AnimeVideosProps) => {
    const { error, animevideos, loader } = useAnimeVideos()
    return (
        <>
            <div className={`AnimeVideos ${styleTemplate}`}>
                {!loader && "Cargando..."}
                {error && error.message}

                {
                    animevideos?.data?.episodes?.map((ele, i) => {
                        return <>
                            <div key={i}>
                               <h3>{ele.title}</h3>
                               <Link  href={ele.url} target="_blank">
                                Ver episodio
                               </Link>
                               <img src={ele.images.jpg.image_url} alt=""/>
                                

                            </div>



                        </>




                    })
                }








            </div>
        </>
    )
}