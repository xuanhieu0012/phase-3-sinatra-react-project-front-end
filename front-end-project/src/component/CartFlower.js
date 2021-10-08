import React from "react";

function CartFlower({eachFlower, handleRemoveCartList, handleCartData}){
    
   
    const {image_url, name,  price , qty}= eachFlower
    
  
    return(
    <div className="cartContainer">
        
        <img  className="imageContainer" src={image_url} alt ={name}></img>
            <div className="CartFlowerName">
                <h1>{name}</h1> 
            </div>
        
            <div className="cartQuantity">
            Quanity: 
        
            <button onClick={() =>handleRemoveCartList(eachFlower)} >-</button>
                {qty}
            <button onClick={() => handleCartData(eachFlower)}>+</button>  
            </div> 
            <div className="cartPrice"> 
            <p>${qty * price}</p>
            </div>
        </div>
        

    )
}

export default CartFlower