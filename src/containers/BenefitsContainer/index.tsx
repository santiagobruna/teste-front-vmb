import React from 'react';
import './benefitsOption.scss';

interface BenefitContainerProps {
    icon: string;
    title: string;
    description: string;
}

const BenefitContainer: React.FC<BenefitContainerProps> = ({ icon, title, description }) => {
    return (
        <div className="benefits-container-option">
            <div className="benefits-container-option__icon">
                <img src={icon} alt="" style={{ width: 40 }} />
            </div>
            <div className="benefits-container-option__text">
                <span className="benefits-container-option__title">{title}</span>
                <p className="benefits-container-option__description">{description}</p>
            </div>
        </div>
    );
};

export default BenefitContainer;
