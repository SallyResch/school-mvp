export const formatDate = (date:string)=>{
    return new Date(date).toLocaleDateString("en-EN", {
        year:"numeric",
        month:"long",
        day: "numeric"
    })
}