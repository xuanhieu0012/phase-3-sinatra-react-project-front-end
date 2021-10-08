import React,{useState} from "react"

function UpdateForm({id, setToggleUpdate}){
    const [formDataUpdate, setformDataUpdate]= useState({
    price: 0,
    quantity: 1,
    image_url: ""
    })
    

function handleSubmit(e){
    e.preventDefault();
    setToggleUpdate(toggleUpdate=> !toggleUpdate)
    fetch(`http://localhost:9292/flowers/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataUpdate)
    })
    
    setformDataUpdate({
        price: 0,
        quantity: 1,
        image_url: "",
        
    })
}
function handleChange(event){
    
    const key = event.target.name
 
    setformDataUpdate({...formDataUpdate, [key]: event.target.value})
}
return <div className="formSubmit">
    <form onSubmit={handleSubmit}>
         <div className="formDetailsUpdate">
            <h1 id="submitHeader">Update This Flower</h1>

            <div className="input-container"> 
                <label id="urlForm">Url Image: </label>
                <input type="text" id="image_urlBox" name="image_url" value={formDataUpdate.image_url} onChange={handleChange}></input>
            </div> 
            <div className="input-container"> 
                <label id="priceForm">Price: </label>
                <input type="number" id="priceBox" name="price" value={formDataUpdate.price} onChange={handleChange}></input>
            </div>
            <div className="input-container"> 
                <label id="quantityForm">Quantity: </label>
                <input type="number"id="quantityBox" name="quantity" value={formDataUpdate.quantity} onChange={handleChange}></input>
            </div>
            <div className="input-container"> 
                <label id="descriptionForm">Description: </label>
                <textarea type="text" id="descriptionBox" name="description" value={formDataUpdate.description} onChange={handleChange}></textarea>
            </div>
        
            <div class="input-container">
                <input type="submit" value="Update Flower" />
            </div>
        </div>
    </form>
    </div>
}

export default UpdateForm