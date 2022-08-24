import React, {useState,useEffect} from "react";
import gamesForSale from "../Data/data";
import ProductList from "../Components/ProductList";
import Basket from "../Components/Basket";

// bAAKET WITH state []
// productToAddToBasket with state

//function to add to list

const MainContainer = () => {
    const [products, setProducts] = useState(gamesForSale);
    const [basket, setBasket] = useState([])



    const addToBasket = (product) => {
            let newBasket = [...basket];
            newBasket.push(product)
            setBasket(newBasket)
        
       
    }





    // const onPurchaseSelected = (product) => {
    //     setSelectedPurchase(product);
    // }
    
    
    return (
        <div>
        <ProductList products={products} addToBasket={addToBasket} />
        <Basket  basket={basket} />
        </div>

    )

}

   

export default MainContainer;