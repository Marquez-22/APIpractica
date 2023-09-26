import { useAllAnime } from "@/hook/useallAnime"
import Link from "next/link"


export type ListAnimeType = "ListAnime"

export interface ListAnimeProps {

    styleTemplate?: ListAnimeType
}
export const ListAnime = ({ styleTemplate = "ListAnime" }: ListAnimeProps) => {
    const { allanime, error, loader } = useAllAnime()

    return (
        <>
            <div className={`ListAnime ${styleTemplate} `}>
                {
                    !loader && "Cargando..."
                }
                {
                    error && error.message
                }
                {
                    allanime?.data.map((ele, i) => {
                        return <>

                            <div className="boxAnime">
                                <div key={i}>
                                    <Link href={"/anime/" + ele.mal_id}>
                                        <h1>
                                            {ele.title}
                                        </h1>
                                    </Link>
                                    <h3>
                                        {ele.title_english}
                                    </h3>
                                    <p>
                                       streming: 
                                        {ele.type}
                                    </p>
                                    <div >
                                        <img src={ele.images.jpg.image_url} alt="" />
                                    </div>

                                </div>
                            </div>


                        </>
                    })
                }

            </div>
        </>
    )
}