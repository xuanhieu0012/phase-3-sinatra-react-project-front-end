import React from "react"

function Flower({flower, settoggleDetail, setFlowerDetails, handleCartData}){
   
    const {name, image_url, price, quantity, season, id} = flower
    
    function handleImageDetails(){
        settoggleDetail(true)
        fetch(`http://localhost:9292/flowers/${id}`)
        .then(res =>res.json())
        .then(flowerArray =>setFlowerDetails(flowerArray))
    }
    return <div className="flowerCard">
        <img className="flowerImg" src={image_url} alt={name} onClick={handleImageDetails}/>
        <div className="flowerDetails">
            <h3>{name}</h3>
            <p>Price: ${price} Quantity: {quantity}</p>
            <p>Season: {season}</p>
            <div className="button">
            <button onClick={() => handleCartData(flower)}>Add To Cart</button>
            <button>Delete</button>
            </div>
        </div>
    </div>
}

export default Flower