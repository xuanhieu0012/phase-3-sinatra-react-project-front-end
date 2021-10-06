import React from "react"
import flowerBanner from "./assets/flowerBanner.png"
import { ImageData }  from "./ImageData"
import ImageSlider from "./ImageSlider"
function Header(){
    return <ImageSlider imageData={ImageData} />
        
    
}

export default Header