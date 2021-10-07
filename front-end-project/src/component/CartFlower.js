import React,{useState} from "react";

function CartFlower({eachFlower, handleRemoveCartList}){
    
    const [quantityValue, setQuantityValue] = useState(1)
    const {image_url, name,  price, quantity, id}= eachFlower
    function handleButtonAdd(){
        if (quantityValue < quantity){
            setQuantityValue(quantityValue => quantityValue + 1)
        }
        else
        setQuantityValue(quantity)
    }
    function handleButtonRemove(){
        if (quantityValue > 1){
            setQuantityValue(quantityValue => quantityValue - 1)
        }else {
            handleRemoveCartList(id)
        }

        
    
    }
    return(
    <div className="cartContainer">
        
        <div className="imageContainer">
            <img  className="imageContainer" src={image_url} alt ={name}></img>
        </div>

        <div className ="cartTextDetail">
            <div className="flowerName">
            <h1>{name}</h1> 
            </div >
        
      
            Quanity: 
        
            <button onClick={handleButtonRemove} >-</button>
                {quantityValue}
            <button onClick={handleButtonAdd}>+</button>    
            <p>${price}</p>
        </div>
        
    </div>
    )
}

export default CartFlower