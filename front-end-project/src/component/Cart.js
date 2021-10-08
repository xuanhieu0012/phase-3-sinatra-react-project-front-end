import React, {useState} from "react"
import CartFlower from "./CartFlower"

function Cart({cartData, handleRemoveCartList, handleCartData}){
   
    const [totalPrice, setTotalPrice]= useState(0)
    
    const itemPrice = cartData.reduce((a,c) => a + c.price * c.qty, 0)
    const taxRate = 8
    const subtotal = (itemPrice + (itemPrice * (taxRate /100))).toFixed(2)
    
    const displayCartDataFlower= cartData.map(eachflower => <CartFlower 
                                                                    key={eachflower.id} 
                                                                    eachFlower={eachflower} 
                                                                    handleRemoveCartList={handleRemoveCartList}
                                                                    setTotalPrice={setTotalPrice}
                                                                    totalPrice={totalPrice}
                                                                    handleCartData={handleCartData}
                                                                    />)


    return (
    <div className="cartContainerList">
       <img className="cartpageImage" src="https://i.imgur.com/571Ap2l.png" alt="cartpageImg" />
       <div className="header">
            <h2>Picture</h2>
            <h2>Name</h2>
            <h2> Quantity </h2>
            <h2>Price</h2>
            
       </div>
        
        {cartData.length === 0 ? <h1>You have nothing in cart</h1> : displayCartDataFlower}
        
        {cartData.length === 0 ? null: <div className="cartTotal">
            =
            <br />
            Total Flower Price: ${itemPrice} 
            <br />
            Tax: {taxRate}%
            <br />
            Subtotal: ${subtotal}
        </div>}
    </div>
    )}

export default Cart