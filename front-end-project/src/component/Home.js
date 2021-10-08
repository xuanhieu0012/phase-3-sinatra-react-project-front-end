import React,{useState} from "react"
import Header from "../component/Header"
import FlowersContainer from "../component/FlowersContainer"
import Search from "./Seach"
function Home({toggleDetail, settoggleDetail,handleCartData}){
    const [searchWord, setSearchWord] = useState("")
    return <div>
        <Header />
        <Search onSearchWord={setSearchWord}/>
        <FlowersContainer settoggleDetail={settoggleDetail} toggleDetail={toggleDetail} handleCartData={handleCartData} searchWord={searchWord}/>
    </div>
}

export default Home