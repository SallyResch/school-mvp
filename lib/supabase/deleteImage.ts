import { createClient } from "./server-client";

export const deleteImage = async (imageUrl:string)=>{
    const supabase = await createClient()
    const imageName = imageUrl.split("/").pop()
    if(!imageName){
        throw new Error("could not find image name")
    }
    
    const {error} = await supabase.storage.from("images").remove([imageName])

    if(error){
        throw error
    }
}