import React from "react"
import CartFlower from "./CartFlower"

function Cart({cartData, handleRemoveCartList}){
    const displayCartDataFlower= cartData.map(eachflower => eachflower === undefined ? <h1>You have nothing in cart</h1> : <CartFlower key={eachflower.id} eachFlower={eachflower} handleRemoveCartList={handleRemoveCartList}/>)
    return (
    <div className="cartContainerList">
       <div className="header">
            <h2>Picture</h2>
            <h2>Name</h2>
            <span>
            <h2>Price</h2>
            </span>
       </div>
        
        {cartData.length === 0 ? <h1>You have nothing in cart</h1> : displayCartDataFlower}
        
    </div>
    )}

export default Cart