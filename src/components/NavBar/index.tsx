import { useState, useEffect } from "react";
import "./navbar.scss";

import logo from "../../assets/logo-neoclassico.png";
import logoMobile from "../../assets/logo-mobile.png";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false); 
    const [cart, setCart] = useState<any[]>([]);
    const [cartCount, setCartCount] = useState(0);
    
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleCart = () => setCartOpen(!cartOpen);

    useEffect(() => {
        const updateCartCount = () => {
            const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
            setCart(cartData);
            setCartCount(cartData.length);
        };
        updateCartCount();

        window.addEventListener("cartUpdated", updateCartCount);

        return () => {
            window.removeEventListener("cartUpdated", updateCartCount);
        };
    }, []);
    const handleRemoveItem = (id: number) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        setCartCount(updatedCart.length);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        window.dispatchEvent(new Event("cartUpdated"));
    };
    return (
        <nav className="navbar">
            <div className="navbar__container">
                {/* Mobile: Ícones esquerda */}
                <div className="navbar__mobile-left mobile-only">
                    <MenuIcon 
                        className="navbar__icon" 
                        sx={{ fontSize: 22, color: '#61A9CC', cursor: 'pointer' }} 
                        onClick={toggleMenu} 
                    />
                    <SearchIcon 
                        className="navbar__icon" 
                        sx={{ fontSize: 22, color: '#61A9CC', cursor: 'pointer' }} 
                    />
                </div>

                {/* Logo mobile */}
                <div className="navbar__logo mobile-only">
                    <img src={logoMobile} alt="Logo Mobile" />
                </div>

                {/* Logo desktop */}
                <div className="navbar__logo desktop-only">
                    <img src={logo} alt="Logo Desktop" />
                </div>

                {/* Desktop: Todos os ícones */}
                <div className="navbar__icons desktop-only">
                    <SearchIcon className="navbar__icon" sx={{ fontSize: 37, color: '#61A9CC', cursor: 'pointer' }}/>
                    <FavoriteBorderIcon className="navbar__icon" sx={{ fontSize: 37, color: '#61A9CC', cursor: 'pointer' }}/>
                    <PersonOutlineIcon className="navbar__icon" sx={{ fontSize: 37, color: '#61A9CC', cursor: 'pointer' }}/>
                    <div className="navbar__cart" onClick={toggleCart}>
                        <ShoppingCartOutlinedIcon 
                            className="navbar__icon" 
                            sx={{ fontSize: 37, color: '#61A9CC', cursor: 'pointer' }}
                        />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </div>
                </div>

                {/* Mobile: Ícones direita */}
                <div className="navbar__mobile-right mobile-only">
                    <FavoriteBorderIcon className="navbar__icon" sx={{ fontSize: 22, color: '#61A9CC', cursor: 'pointer' }} />
                    <PersonOutlineIcon className="navbar__icon" sx={{ fontSize: 22, color: '#61A9CC', cursor: 'pointer' }} />
                    <div className="navbar__cart navbar__cart-mobile" onClick={toggleCart}>
                        <ShoppingCartOutlinedIcon 
                            className="navbar__icon" 
                            sx={{ fontSize: 22, color: '#61A9CC', cursor: 'pointer' }}
                        />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </div>
                </div>
            </div>

            {/* Menu principal */}
            <ul className={`navbar__menu ${menuOpen ? "open" : ""}`}>
                <li className="navbar__item"><a href="#">Quadros</a></li>
                <li className="navbar__item"><a href="#">Luminárias</a></li>
                <li className="navbar__item"><a href="#">Almofadas</a></li>
                <li className="navbar__item"><a href="#">Mesas de Centro</a></li>
                <li className="navbar__item"><a href="#">Mantas</a></li>
                <li className="navbar__item"><a href="#">Objetos Decorativos</a></li>
                <li className="navbar__item"><a href="#">Coleções</a></li>
                <li className="navbar__item"><a href="#">Rastreio de Pedidos</a></li>
            </ul>

            {/* Modal do carrinho */}
            {cartOpen && (
                <div className="cart-modal">
                    <div className="cart-header">
                        <h3>Meu Carrinho</h3>
                        <button className="cart-close" onClick={toggleCart}>×</button>
                    </div>
                    {cart.length === 0 ? (
                        <p className="empty-cart">Seu carrinho está vazio.</p>
                    ) : (
                        <ul className="cart-items">
                            {cart.map((item, index) => (
                                <li key={index} className="cart-item">
                                    <img src={item.image} alt={item.title} />
                                    <div className="cart-item-info">
                                        <span className="cart-item-title">{item.title}</span>
                                        <span className="cart-item-price">R$ {item.price.toFixed(2)}</span>
                                    </div>
                                    <button 
                                        className="cart-item-remove" 
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                    🗑️
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                    {cart.length > 0 && <button className="cart-checkout">Finalizar Compra</button>}
                </div>
            )}
        </nav>
    );
};

export default NavBar;