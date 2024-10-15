import React from 'react';
import './ProductList.module.css'

const ProductList = (props) => {

    return (
        <div>
            <h2>Items List</h2>
            <ul>
                {props.list.map((product) => (
                    <li
                        key={product.id} > {product.name}
                    </li>))}
            </ul>
        </div>
    );
};

export default ProductList;