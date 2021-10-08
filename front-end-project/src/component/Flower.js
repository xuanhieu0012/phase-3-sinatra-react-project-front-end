import React from "react"

function Flower({flower, settoggleDetail, setFlowerDetails, handleCartData, handleDeleteBtn}){
   
    const {name, image_url, price,  id} = flower
    
    function handleImageDetails(){
        settoggleDetail(true)
        fetch(`http://localhost:9292/flowers/${id}`)
        .then(res =>res.json())
        .then(flowerArray =>setFlowerDetails(flowerArray))
    }
    return <div className="flowerCard">
        <img className="flowerImg" src={image_url} alt={name} onClick={handleImageDetails}/>
        <div className="flowerDetails">
            <div className="nameProduct">
                <h3 >{name} </h3>
            </div> 
            <div className="price">
                <h3 >${price} </h3>
            </div>
        </div>
            {/* <p>${price}</p> */}
            {/* <p>Overnight Shipping</p> */}
            <div className="buttonContainer">
                <div className="buttonAdd">
                    <button onClick={() => handleCartData(flower)}>Add To Cart</button>
                </div>
                <div>
                    <button onClick={() =>handleDeleteBtn(id)}>🗑️</button>
                </div>
            </div>
    </div>
}

export default Flower