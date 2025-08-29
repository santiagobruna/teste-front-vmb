import React, {useEffect, useState} from 'react';
import './cardContainer.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
    const [isFavorited, setIsFavorited] = useState(false);
    useEffect(() => {
        const favData = JSON.parse(localStorage.getItem("favorites") || "[]");
        const favorited = favData.some((item: Product) => item.id === product.id);
        setIsFavorited(favorited);
    }, [product.id]);
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
    const toggleFavorite = () => {
        const favData = JSON.parse(localStorage.getItem("favorites") || "[]");
        let updatedFavorites;

        if (isFavorited) {
            updatedFavorites = favData.filter((item: Product) => item.id !== product.id);
        } else {
            updatedFavorites = [...favData, product];
        }

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        window.dispatchEvent(new Event("favoritesUpdated"));
        setIsFavorited(!isFavorited);
    };
    return (
            <div className='card-container'>
                <div className='card'>
                    <div className="card-image-wrapper">
                        <img src={product.image} alt={product.title} className="card-image" />
                        <button className="favorite-button" onClick={toggleFavorite}>
                            {isFavorited ? <FavoriteIcon sx={{ color: '#f06292' }}/> : <FavoriteBorderIcon />}
                        </button>
                    </div>
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-price">R$ {product.price.toFixed(2)}</p>
                    <button className="card-button" onClick={addToCart}>COMPRAR</button>
                </div>
            </div>
    );
};

export default CardContainer;
