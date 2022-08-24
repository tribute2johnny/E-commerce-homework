import React from "react";

const Basket = ({basket}) => {

        // const handleClick = (event) => {
        //     setSelectedPurchase(basket[event.target.value])
        // }

         const basketNodes = basket.map((product, index) => {

            return <p key={index}>{product.name} £{product.price}</p> 
        
        })

        const basketPricesList = basket.map((product) => {
            return product.price
        }) 
            
        const initialTotal = 0;
        

        const totalPrice = basketPricesList.reduce((prevValue, currentValue) => prevValue + currentValue, initialTotal);



        // const basketTotal = basketNodes.reduce(() => )


        // const basketTotal = basketNodes.reduce(() => )



    return (

       <>
        Basket
        <hr width="69%"/>
        {basketNodes}
        <hr width="69%"/>
         Total £{totalPrice}
       </>


   
    )

}


export default Basket;