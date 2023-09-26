export interface AnimeCharacters {
    data: Array<{
        character: {
            mal_id: number
            url: string
            images: {
                jpg: {
                    image_url: string
                    small_image_url: string
                }
                webp: {
                    image_url: string
                    small_image_url: string
                }
            }
            name: string
        }
        role: string
        voice_actors: Array<{
            person: {
                mal_id: number
                url: string
                images: {
                    jpg: {
                        image_url: string
                    }
                }
                name: string
            }
            language: string
        }>
    }>

}