import React, { useState } from 'react';
import './accordion.scss';
interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <div className="accordion-item">
            <button className="accordion-header" onClick={toggleAccordion}>
                {title}
                <span>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
};

export default AccordionItem;
