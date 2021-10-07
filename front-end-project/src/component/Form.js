import React, {useState} from "react"

function Form(){
const [pictureURL, setPictureURL] = useState("https://i.imgur.com/CBtjmX0.png")
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
    setPictureURL('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg')
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
    const key = event.target.id
    if (key === "image_url" ) {
    setPictureURL(()=>event.target.value) 
    }
    setFormData({...formData, [key]: event.target.value})
    
}

    return <div className="formSubmit">
    <form onSubmit={handleSubmit}>
        <h1 id="submitHeader">Submit A New Flower!</h1>
        <img className="submitImage"src={pictureURL} alt="flower image" />
        <br />
        <label id="nameForm">
            Name of Flower:
            <input type="text" id="nameBox" value={formData.name} onChange={handleChange}></input>
        </label>
        <br />
        <label id="colorForm">Color: 
            <input type="text" id="colorBox" value={formData.color} onChange={handleChange}></input>
        </label>
        <br />
        <label id="urlForm">Url Image: 
            <input type="text" id="image_urlBox" value={formData.image_url} onChange={handleChange}></input>
        </label>
        <br />
        <label id="seasonForm">Season: 
            <input type="text" id="seasonBox" value={formData.season} onChange={handleChange}></input>
        </label>
        <br />
        <label id="priceForm">Price: 
            <input type="number" id="priceBox" value={formData.price} onChange={handleChange}></input>
        </label>
        <br />
        <label id="quantityForm">Quantity: 
            <input type="number"id="quantityBox" value={formData.quantity} onChange={handleChange}></input>
        </label>
        <br />
        <label id="descriptionForm">Description: </label>
        <textarea id="descriptionBox" value={formData.description} onChange={handleChange}></textarea>
        <br />
        
        <button className="submitButton" type="submit">Add to List</button>
    </form>
    </div>
}

export default Form