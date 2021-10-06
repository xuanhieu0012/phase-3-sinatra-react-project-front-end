import React from "react"

function Flower({flower}){
    console.log(flower)
    const {name, color, description, image_url, price, quantity, season} = flower
    return <div className="flowerCard">
        <img className="flowerImg" src={image_url} alt={name}/>
        <div className="flowerDetails">
            <h3>{name}</h3>
            <p>Price: ${price} Quantity: {quantity}</p>
            <p>Season: {season}</p>
            <p>Color: {color}</p>
            <p>{description}</p>

        </div>
    </div>
}

export default Flower