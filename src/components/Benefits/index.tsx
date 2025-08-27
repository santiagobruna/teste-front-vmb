import './benefits.scss';
import creditCard from '../../assets/Credit-Card.png';
import discount from '../../assets/Discount.png';
import security from '../../assets/pontos.png';

import BenefitContainer from '../../containers/BenefitsContainer';
const Benefits = () => {
    return (
            <div className="benefits-options">
                <BenefitContainer
                    icon={creditCard}
                    title="Parcele em até 5X sem juros"
                    description="Parcele suas compras em até 5x sem juros"
                />
                <BenefitContainer
                    icon={discount}
                    title="Frete grátis para todo Brasil"
                    description="Entregamos sem custo adicional para todas as regiões"
                />
                <BenefitContainer
                    icon={security}
                    title="Compra 100% segura"
                    description="Seus dados estão protegidos com criptografia"
                />
            </div>
    );
};

export default Benefits;