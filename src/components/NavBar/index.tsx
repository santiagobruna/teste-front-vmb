import { useState } from "react";
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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                    <ShoppingCartOutlinedIcon className="navbar__icon" sx={{ fontSize: 37, color: '#61A9CC', cursor: 'pointer' }}/>
                </div>

                {/* Mobile: Ícones direita */}
                <div className="navbar__mobile-right mobile-only">
                    <FavoriteBorderIcon className="navbar__icon" sx={{ fontSize: 22, color: '#61A9CC', cursor: 'pointer' }} />
                    <PersonOutlineIcon className="navbar__icon" sx={{ fontSize: 22, color: '#61A9CC', cursor: 'pointer' }} />
                    <ShoppingCartOutlinedIcon className="navbar__icon" sx={{ fontSize: 22, color: '#61A9CC', cursor: 'pointer' }}/>
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
        </nav>
    );
};

export default NavBar;