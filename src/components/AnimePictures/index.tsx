import { useAnimePictures } from "@/hook/useAnimePictures";

export type AnimePicturesType = "AnimePictures"
export interface AnimePicturesProps {
    styleTemplate?: AnimePicturesType

}

export const AnimePictures = ({ styleTemplate = "AnimePictures" }: AnimePicturesProps) => {
    const { error, loader, animepictures } = useAnimePictures()
    return (
        <>
            <div className={`AnimePictures ${styleTemplate}`}>
                {!loader && "Cargando..."}
                {error && error.message}
                <div className="contentPictures">
                    {
                        animepictures?.data?.map((item, i) => {
                            return <>

                                <img key={i} src={item?.jpg?.image_url} alt="" />
                            </>
                        })
                    }
                </div>
            </div>
        </>
    )
}