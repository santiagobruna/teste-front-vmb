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
    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");

        const existingProductIndex = cart.findIndex((item: any) => item.id === product.id);
    
        if (existingProductIndex !== -1) {
            alert("Este item já foi adicionado ao carrinho!");
            return; 
        }
        
        cart.push({ ...product, quantity: 1 });
    
        localStorage.setItem("cart", JSON.stringify(cart));

        window.dispatchEvent(new Event("cartUpdated"));
    
        alert(`${product.title} foi adicionado ao carrinho!`);
    };
    return (
            <div className='card-container'>
                <div className="card">
                    <img src={product.image} alt={product.title} className="card-image" />
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-price">R$ {product.price.toFixed(2)}</p>
                    <button className="card-button" onClick={addToCart}>COMPRAR</button>
                </div>
            </div>
    );
};

export default CardContainer;
