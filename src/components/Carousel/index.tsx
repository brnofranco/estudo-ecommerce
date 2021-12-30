import Image from 'next/image';

import useEmblaCarousel from 'embla-carousel-react';


export function Carousel() {
    // https://www.embla-carousel.com/get-started/
    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                  <Image src="/mainLogo.png" width="400px" height="400px" alt="logo" />
                </div>
            </div>
        </div>
    )
    
}