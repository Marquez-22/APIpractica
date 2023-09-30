import { useAnimeCharacters } from "@/hook/useAnimeCharacters"


export type AnimeCharactersType = "AnimeCharacters"
export interface AnimeCharactersProps {
    styleTemplate?: AnimeCharactersType
}
export const AnimeCharacters = ({ styleTemplate = "AnimeCharacters" }: AnimeCharactersProps) => {
    const { animecharacters, error, loader } = useAnimeCharacters()
    return (
        <>
            <div className={`AnimeCharacters${styleTemplate}`}>
                {!loader && "Cargando..."}
                {error && error.message}

                <div className="contentCharacters">
                    {
                        animecharacters?.data?.map((ele, i) => {
                            return <>

                                <div key={i}>

                                    <img key={i} src={ele.character.images.jpg.image_url} alt="" /><h3>
                                        {ele.character.name}
                                       {ele.role}
                                       
                                    </h3>
                                </div>
                                
                            </>

                        })


                    }

                </div>

            </div>


        </>
    )
}