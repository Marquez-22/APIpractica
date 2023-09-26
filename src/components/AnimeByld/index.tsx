import { useAnimeByld } from "@/hook/useAnimeByld";
import { AnimeVideos } from "../AnimeVideos";
import { AnimePictures } from "../AnimePictures";

export type AnimeByldType = "AnimeByld"
export interface AnimeByldProps {
    styleTemplate?: AnimeByldType
}

export const AnimeByld = ({ styleTemplate = "AnimeByld" }: AnimeByldProps) => {
    const { animebyld, error, loader } = useAnimeByld()
    return (
        <>
            <div className={`AnimeByld ${styleTemplate}`}>
                {
                    !loader && "Cargando..."
                }
                {
                    error && error.message
                }
                <div className="contentId">
                    <h1>
                        {animebyld?.data?.title}
                    </h1>
                    <h2>
                        {animebyld?.data?.title_english}
                    </h2>
                    <h3>
                        {animebyld?.data?.title_synonyms}
                    </h3>
                    <h3>
                        {animebyld?.data?.title_japanese}
                    </h3>
                    <h4>
                        {animebyld?.data?.duration} {animebyld?.data?.episodes}
                    </h4>
                    <img src={animebyld?.data?.images?.jpg?.image_url} alt="" />
                    <p>
                        Fecha de emision
                        {animebyld?.data?.year}
                    </p>
                    <p>
                        {animebyld?.data?.synopsis}
                    </p>
                    {animebyld?.data?.trailer?.embed_url}
                    <AnimeVideos/>
                    <AnimePictures/>
                </div>
            </div>

        </>
    )


}