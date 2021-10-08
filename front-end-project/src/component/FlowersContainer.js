import React,{useState, useEffect} from "react"
import Flower from "../component/Flower"
import FlowerDetails from "../component/FlowerDetails"
function FlowersContainer({toggleDetail, settoggleDetail, handleCartData, searchWord}){
    
    const [flowersData, setFlowersData] =useState([])
    const [flowerDetailsData, setFlowerDetailsData] = useState([])
    const [deletebtn, setDeletebtn] = useState(false)
    const [toggleUpdate, setToggleUpdate] = useState(false)

    useEffect(() =>{
        fetch('http://localhost:9292/flowers')
        .then(res =>res.json())
        .then(flowerArray =>  setFlowersData(flowerArray))
    },[deletebtn, toggleUpdate])

    function handleDeleteBtn(id){
        setDeletebtn(deletebtn => !deletebtn)
        fetch(`http://localhost:9292/flowers/${id}`,{
            method: "DELETE"
        })
    }
    const filterSearch = flowersData.filter(flower => 
   
        flower.name.toLowerCase().includes(searchWord.toLowerCase())
    
    )
    const displayFlowers = filterSearch.map(flower => <Flower key={flower.id} 
                                                    flower={flower} 
                                                    settoggleDetail={settoggleDetail} 
                                                    setFlowerDetails={setFlowerDetailsData}
                                                    handleCartData={handleCartData}
                                                    handleDeleteBtn={handleDeleteBtn}
                                                    />)

    const flowerDetails = flowerDetailsData === null ? settoggleDetail(true) : <FlowerDetails  flower={flowerDetailsData} settoggleDetail={settoggleDetail} handleCartData={handleCartData} setToggleUpdate={setToggleUpdate}/>
    return <div className="flowerContainer">
        { toggleDetail === true ? flowerDetails :  displayFlowers}
    </div>
}

export default FlowersContainer


