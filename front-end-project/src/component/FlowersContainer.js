import React,{useState, useEffect} from "react"
import Flower from "../component/Flower"
import FlowerDetails from "../component/FlowerDetails"
function FlowersContainer({toggleDetail, settoggleDetail, handleCartData}){
    
    const [flowersData, setFlowersData] =useState([])
    const [flowerDetailsData, setFlowerDetailsData] = useState([])
    const [deletebtn, setDeletebtn] = useState(false)
    
    
    
    useEffect(() =>{
        fetch('http://localhost:9292/flowers')
        .then(res =>res.json())
        .then(flowerArray =>  setFlowersData(flowerArray))
    },[deletebtn])

    function handleDeleteBtn(id){
        setDeletebtn(deletebtn => !deletebtn)
        fetch(`http://localhost:9292/flowers/${id}`,{
            method: "DELETE"
        })
    }
    const displayFlowers = flowersData.map(flower => <Flower key={flower.id} 
                                                    flower={flower} 
                                                    settoggleDetail={settoggleDetail} 
                                                    setFlowerDetails={setFlowerDetailsData}
                                                    handleCartData={handleCartData}
                                                    />)

    const flowerDetails = flowerDetailsData === null ? settoggleDetail(true) : <FlowerDetails  flower={flowerDetailsData} settoggleDetail={settoggleDetail} handleCartData={handleCartData}/>
    return <div className="flowerContainer">
        { toggleDetail === true ? flowerDetails :  displayFlowers}
    </div>
}

export default FlowersContainer


