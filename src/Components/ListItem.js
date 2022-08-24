import React from "react";

const ListItem = ({product, addToBasket}) => {

    const handleAddClick = () => {
        addToBasket(product)
    }


    return (
        <div>
        <li>
            {product.name}, £{product.price}
        
        <button className="btn" onClick={handleAddClick}> Add to Basket </button>
        </li>
        </div>
    )

}

export default ListItem;