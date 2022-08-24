import React, {useState,useEffect} from "react";
import gamesForSale from "../Data/data";
import ProductList from "../Components/ProductList";
import Basket from "../Components/Basket";

// bAAKET WITH state []
// productToAddToBasket with state

//function to add to list

const MainContainer = () => {
    const [products, setProducts] = useState(gamesForSale);
    const [selectedPurchase, setSelectedPurchase] = useState(null);
    const [basket, setBasket] = useState([])



    const addToBasket = () => {
            let newBasket = [...basket];
            newBasket.push(selectedPurchase)
            setBasket(newBasket)
        
       
    }

    useEffect(() => {
        setSelectedPurchase()
    }, [])



    // const onPurchaseSelected = (product) => {
    //     setSelectedPurchase(product);
    // }
    
    
    return (
        <div>
        <ProductList products={products} addToBasket={addToBasket} setSelectedPurchase={setSelectedPurchase}/>
        <Basket  basket={basket} setSelectedPurchase={setSelectedPurchase}/>
        </div>

    )

}

   

export default MainContainer;