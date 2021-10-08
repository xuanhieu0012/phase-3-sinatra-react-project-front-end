import React, {useState} from "react"
import UpdateForm from "./UpdateForm"
function FlowerDetails({flower, handleCartData, setToggleUpdate}){
    const {name, image_url, price, quantity, season, description, color, id} = flower
    const [toggleUpdateForm, setToggleUpdateForm] = useState(false)
    function handleUpdateButton(){
        setToggleUpdateForm(toggleUpdateForm => !toggleUpdateForm)
    }


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
                <button onClick={handleUpdateButton}>Update</button>
            </div>
            <div className="updateForm">
               {toggleUpdateForm === true ? <UpdateForm setToggleUpdate={setToggleUpdate} id={id}/> : null}
            </div>
            
        </div>
    </div>
    )}

export default FlowerDetails