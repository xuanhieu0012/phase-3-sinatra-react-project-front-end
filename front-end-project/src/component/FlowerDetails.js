import React from "react"

function FlowerDetails({flower, handleCartData}){
    const {name, image_url, price, quantity, season, description, color} = flower
    return (
    <div className="flowerCardDetails">
        <div>
            <img className="flowerImgDetails" src={image_url} alt={name} />
        </div>
        <div className="flowerDetailsText">
                <h3>{name}</h3>
                <p>Price: ${price} Quantity: {quantity}</p>
                <p>Season: {season}</p>
                <p> Color: {color}</p>
            <div className="description">
                <p>{description}</p>
            </div>
            
                <button onClick={()=> handleCartData(flower)}>Add To Cart</button>
                <button>Delete</button>
            
        </div>
    </div>
    )}

export default FlowerDetails