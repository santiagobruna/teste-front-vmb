import './banner.scss';
import banner from '../../assets/banner.png';
import bannerMobile from '../../assets/banner-mobile.png';

const Banner = () => {
    return (
        <div className="banner">
            <picture>
                <source srcSet={bannerMobile} media="(max-width: 768px)" />
                <img src={banner} alt="Banner" />
            </picture>
        </div>
    );
};

export default Banner;
