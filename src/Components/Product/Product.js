import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const { name, img, seller, price, stock, star } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className="product-name">{name}</h2>
                <p><small>By: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Only {stock} Remaining</small></p>
                <Rating emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color" initialRating={star} />
                <br />
                <button className="btn-regular"
                    onClick={() => props.handleAddToCart(props.product)}>{element} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;