import React, {useState} from "react"
import { ImageData }  from "../component/ImageData"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
const ImageSlider = ({imageData}) =>{
    const [image, setImage]= useState(0)
    const length = imageData.length
    const nextSlide = () =>{
        setImage(image === length - 1 ? 0 : image + 1)
    }
    
    const prevSlide =() =>{
        setImage(image === 0 ? length - 1 : image -1)
    }
    return (
        <section className="slider">
            <FaArrowAltCircleLeft className ="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className ="right-arrow" onClick={nextSlide} />
        {ImageData.map((slide, index) =>{
            return (
                <div className={index === image ? 'slide active' : 'slide'} key={index}>
                {index === image && (<img src={slide.image} alt='Flower' className='imageFlower' />
                )} 
                </div>
               
            )
        })}
        </section>
    )

}

export default ImageSlider