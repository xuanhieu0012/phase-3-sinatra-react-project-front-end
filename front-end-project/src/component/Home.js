import React,{useState} from "react"
import Header from "../component/Header"
import FlowersContainer from "../component/FlowersContainer"
function Home({toggleDetail, settoggleDetail,handleCartData}){

    return <div>
        <Header />
        <FlowersContainer settoggleDetail={settoggleDetail} toggleDetail={toggleDetail} handleCartData={handleCartData}/>
    </div>
}

export default Home