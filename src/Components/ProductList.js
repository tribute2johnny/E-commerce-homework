import React from "react";
import ListItem from './ListItem';

const ProductList = ({products, addToBasket}) => {
    const allProducts = products.map((product, index) => {
        return <ListItem product={product} key={index} addToBasket={addToBasket}/>
})


      return (
        <ul>
            {allProducts}
        </ul>
      )
}

export default ProductList;