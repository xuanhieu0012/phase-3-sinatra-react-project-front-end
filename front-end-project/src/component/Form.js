import React, {useState} from "react"

function Form(){
const [pictureURL, setPictureURL] = useState("https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg")
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
        <h1>Submit Your New Flower</h1>
        <img src={pictureURL} alt="flower image" />
        <br />
        <label>
            Name of Flower:
            <input type="text" id="name" value={formData.name} onChange={handleChange}></input>
        </label>
        <br />
        <label>Color: 
            <input type="text" id="color" value={formData.color} onChange={handleChange}></input>
        </label>
        <br />
        <label>Url Image: 
            <input type="text" id="image_url" value={formData.image_url} onChange={handleChange}></input>
        </label>
        <br />
        <label>Season: 
            <input type="text" id="season" value={formData.season} onChange={handleChange}></input>
        </label>
        <br />
        <label>Price: 
            <input type="number" id="price" value={formData.price} onChange={handleChange}></input>
        </label>
        <br />
        <label>Quantity: 
            <input type="number"id="quantity" value={formData.quantity} onChange={handleChange}></input>
        </label>
        <br />
        <label>Description: </label>
        <textarea id="description" value={formData.description} onChange={handleChange}></textarea>
        <br />
        
        <button type="submit">Add to List</button>
    </form>
    </div>
}

export default Form