import './banner.scss';
import banner from '../../assets/banner.png';
import bannerMobile from '../../assets/banner-mobile.png';

const Banner = () => {
    const scrollToProducts = () => {
        const productsSection = document.getElementById("products");
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="banner">
            <picture>
                <source srcSet={bannerMobile} media="(max-width: 768px)" />
                <img src={banner} alt="Banner" />
            </picture>
            <div className="banner-content">
                <h1>Bem-vindo à Nossa Loja</h1>
                <p>Encontre os melhores produtos com descontos incríveis!</p>
                <button className="btn-cta" onClick={scrollToProducts}>Compre Agora</button>
            </div>
        </div>
    );
};

export default Banner;
