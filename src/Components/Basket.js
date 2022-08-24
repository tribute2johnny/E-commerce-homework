import React from "react";

const Basket = ({basket}) => {

        // const handleClick = (event) => {
        //     setSelectedPurchase(basket[event.target.value])
        // }

         const basketNodes = basket.map((product) => {

            return <p>{product.name}</p>               
      
         })

    

    return (

       <>
        {basketNodes}
       </>
   
    )

}


export default Basket;