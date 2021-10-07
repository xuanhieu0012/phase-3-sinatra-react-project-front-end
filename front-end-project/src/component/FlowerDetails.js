import React from "react"

function FlowerDetails({flower, handleCartData}){
    const {name, image_url, price, quantity, season, description, color} = flower
    return (
    <div className="flowerCardDetails">
        <div>
            <img className="flowerImgDetails" src={image_url} alt={name} />
        </div>
        <div className="flowerDetailsTextContainer">
            <div className="flowerTitle">
                <h3>{name}</h3>
            </div>
                <p id="Price">Price: ${price} Quantity: {quantity}</p>
                <p id="Season">Season: {season}</p>
                <p id="Color"> Color: {color}</p>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="buttonDetailPage">
                <button onClick={()=> handleCartData(flower)}>Add To Cart</button>
                <button>Update</button>
            </div>
        </div>
    </div>
    )}

export default FlowerDetails