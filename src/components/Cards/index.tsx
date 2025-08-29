import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { Product } from '../../containers/CardContainer';
import CardContainer from '../../containers/CardContainer';
import './card.scss';

interface CardProps {
    title: string;
    product: Product[];
}

const Card: React.FC<CardProps> = ({ title, product }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', dragFree: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const isMobile = window.innerWidth <= 768;

    // índice ativo
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        onSelect(); // inicializa
    }, [emblaApi, onSelect]);

    const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

    return (
            <div className="carousel-wrapper">
                <h2 className='title'>{title}</h2>

                {isMobile ? (
                    <>
                        <div className="embla" ref={emblaRef}>
                            <div className="embla__container">
                            {product.map((p) => (
                                <div className="embla__slide" key={p.id}>
                                    <CardContainer product={p} />
                                </div>
                            ))}
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="embla__dots">
                            {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                className={`embla__dot ${index === selectedIndex ? 'is-selected' : ''}`}
                                onClick={() => scrollTo(index)}
                            />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="card-container">
                    {product.map((p) => (
                        <CardContainer key={p.id} product={p} />
                    ))}
                    </div>
                )}
            </div>
    );
};

export default Card;
