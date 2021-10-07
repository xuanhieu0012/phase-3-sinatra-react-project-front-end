
import './App.css';
import { Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Home from "./component/Home"
import NavBar from "./component/NavBar"
import About from "./component/About"
import Cart from "./component/Cart"
import SubmitForm from './component/SubmitForm';

function App() {
  const [page, setPage] =useState("/")
  const [toggleDetail, settoggleDetail] = useState(false)
  const [cartData, setCartData]= useState([])
  
  function handleCartData(flowerData){
    if (cartData.find(flower => flower.id === flowerData.id) === undefined){
    setCartData([...cartData, flowerData ])
    }
}
  function handleRemoveCartList(id){
    const newCart = cartData.filter(flower => flower.id != id)
    setCartData(newCart)
  }
  return (
    <div className="App">
        <NavBar onChangePage={setPage} settoggleDetail={settoggleDetail}/>
        <Switch>
                <Route exact path="/">
                    <Home settoggleDetail={settoggleDetail} toggleDetail={toggleDetail} handleCartData={handleCartData} />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/cart">
                    <Cart cartData={cartData} handleRemoveCartList={handleRemoveCartList}/>
                </Route>
                <Route path="/submitForm">
                  <SubmitForm/>
                  </Route>
            </Switch>
        
    </div>
  );
}

export default App;
