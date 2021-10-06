import React,{useState, useEffect} from "react"
import Flower from "./Flower"
function FlowersContainer(){
    const [flowersData, setFlowersData] =useState([])
    useEffect(() =>{
        fetch('http://localhost:9292/flowers')
        .then(res =>res.json())
        .then(flowerArray => setFlowersData(flowerArray))
    },[])
    const displayFlowers = flowersData.map(flower => <Flower flower={flower}/>)
    return <div className="flowerContainer">
            {displayFlowers}
    </div>
}

export default FlowersContainer


