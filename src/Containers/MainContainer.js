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

        <>
            <section id="product-list-container">
                <ProductList products={products} addToBasket={addToBasket} />
            </section>
                
            <section id="basket-container">
                {basket.length > 0 ? <Basket  basket={basket} /> : <div>add to basket pls my family are starving</div>}
            </section>
        </>

    )

}

   

export default MainContainer;