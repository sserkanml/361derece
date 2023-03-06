export const homeController= (req,res)=>{
    res.sendFile("slider.html",{root:"../public"})
}

