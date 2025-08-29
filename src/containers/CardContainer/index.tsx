import React from 'react';
import './cardContainer.scss';

export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface Props {
    product: Product;
}
const CardContainer : React.FC<Props> = ({ product }) => {
    return (
            <div className='card-container'>
                <div className="card">
                    <img src={product.image} alt={product.title} className="card-image" />
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-price">R$ {product.price.toFixed(2)}</p>
                    <button className="card-button">COMPRAR</button>
                </div>
            </div>
    );
};

export default CardContainer;
