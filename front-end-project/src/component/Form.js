import React, {useState} from "react"
function Form(){
const [pictureURL, setPictureURL] = useState("")
const [formData, setFormData] = useState({
    name: "",
    season: "",
    color:"",
    price: 0,
    quantity: 1,
    image_url: "",
    description:"",
    store_id: 1
})
function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:9292/flowers',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    setPictureURL("https://i.imgur.com/CBtjmX0.png")
    setFormData({
        name: "",
        season: "",
        color:"",
        price: 0,
        quantity: 1,
        image_url: "",
        description:"",
        store_id: 1
    })
}
function handleChange(event){
    
    const key = event.target.name
    if (key === "image_url" ) {
    setPictureURL(()=> event.target.value) 
    }
    setFormData({...formData, [key]: event.target.value})
}
    return (
    <form onSubmit={handleSubmit} >
        <div className="formDetails">
            <h1 id="submitHeader">Submit A New Flower!</h1>
            <img className="submitImage"src={pictureURL === "" ? "https://i.imgur.com/CBtjmX0.png" : pictureURL } alt="flower" />
        
        
            <div className="input-container"> 
                <label className="nameForm">Name of Flower:</label>
                <input type="text" id="nameBox" name="name" value={formData.name} onChange={handleChange}></input>
            </div>
            <div className="input-container"> 
                <label id="colorForm">Color: </label>
                <input type="text" id="colorBox" name="color" value={formData.color} onChange={handleChange}></input>
            </div> 
        
            <div className="input-container"> 
                <label id="urlForm">Url Image: </label>
                <input type="text" id="image_urlBox" name="image_url" value={formData.image_url} onChange={handleChange}></input>
            </div>
            <div className="input-container"> 
                <label id="seasonForm">Season: </label>
                <input type="text" id="seasonBox" name="season" value={formData.season} onChange={handleChange}></input>
            </div>
            <div className="input-container"> 
                <label id="priceForm">Price: </label>
                <input type="number" id="priceBox" name="price" value={formData.price} onChange={handleChange}></input>
            </div>
            <div className="input-container"> 
                <label id="quantityForm">Quantity: </label>
                <input type="number"id="quantityBox" name="quantity" value={formData.quantity} onChange={handleChange}></input>
            </div>
            <div className="input-container"> 
                <label id="descriptionForm">Description: </label>
                <textarea type="text" id="descriptionBox" name="description" value={formData.description} onChange={handleChange}></textarea>
            </div>
        
            <div class="input-container">
                <input type="submit" value="Add To List" />
            </div>
        </div>
    </form>
    )
}
export default Form