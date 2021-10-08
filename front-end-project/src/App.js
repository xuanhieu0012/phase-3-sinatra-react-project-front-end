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
    const exist = cartData.find(x => x.id === flowerData.id)
    if (exist){
    setCartData(cartData.map(x => x.id === flowerData.id ? {...exist, qty: exist.qty + 1} : x))
    } else{
      setCartData([...cartData, {...flowerData, qty: 1}])
    }
}
  function handleRemoveCartList(flowerData){
    const exist = cartData.find(x => x.id === flowerData.id)
    if (exist.qty === 1){
      setCartData(cartData.filter(x => x.id !== flowerData.id ))
      } else{
        setCartData(cartData.map(x => x.id === flowerData.id ? {...exist, qty: exist.qty - 1} : x))
      }
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
                    <Cart cartData={cartData} handleRemoveCartList={handleRemoveCartList} handleCartData={handleCartData}/>
                </Route>
                <Route path="/submitForm">
                  <SubmitForm/>
                  </Route>
            </Switch>
        
    </div>
  );
}

export default App;